const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),{webcrypto}=require('node:crypto');
const root=path.join(__dirname,'..'),events={},element={remove(){},addEventListener(){},classList:{remove(){},add(){}},close(){},focus(){},scrollIntoView(){}};
const ctx=vm.createContext({crypto:webcrypto,document:{addEventListener(name,fn){(events[name]??=[]).push(fn)},querySelector(){return element}},window:{addEventListener(){},scrollTo(){}},FormData,URL,console,localStorage:{getItem(){return null},setItem(){}}});
for(const file of ['data.js','app.js','student-goals.js','student-pdf.js','wizard.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8').replace("view='home';render();save(false);",''),ctx);
const run=code=>vm.runInContext(code,ctx);
assert.equal(run('TEMPLATES.length'),114);
assert.equal(run('Object.keys(STUDENT_GOALS).length'),114);
for(const t of Array.from(run('TEMPLATES'))){
 const s=run(`studentGoal({templateId:${JSON.stringify(t.id)},text:${JSON.stringify(t.goal)}})`);
 assert(s.text.includes('Ich')||s.text.includes('ich'),t.id+' uses first person');assert(s.icon,t.id+' has a real pictogram');assert(!s.needsReview,t.id+' matches source');
 assert.equal(run(`studentIssue({templateId:${JSON.stringify(t.id)},text:${JSON.stringify(t.goal)}})`),'');
}
run('var g=plan().goals[0],before=JSON.stringify(g);studentGoal(g);studentEditor(g)');
assert.equal(run('JSON.stringify(g)'),run('before'),'old records not overwritten on display');
run('g.text="Individuell verändertes Ziel"');assert(run('studentGoal(g).needsReview'),'adapted goals require review');
run('g.studentText="Ich beginne mit meiner Karte.";g.studentIcon="start";g.studentHelp="Meine Karte hilft mir.";g.studentSourceText=g.text');
assert.equal(run('studentIssue(g)'),'');
run('g.text+=" Neuer Schritt"');assert(run('studentIssue(g)').includes('bestätigen'),'later edits invalidate review');
run('g.studentSourceText=g.text;var copy=validateImport(JSON.parse(JSON.stringify(state)))[0].goals[0]');
for(const key of ['studentText','studentIcon','studentHelp','studentSourceText'])assert.equal(run(`copy.${key}`),run(`g.${key}`),'backup preserves '+key);
assert.throws(()=>run('var bad=JSON.parse(JSON.stringify(state));bad.plans[0].goals[0].studentText={};validateImport(bad)'),/Schülerfassung/);
assert(run('studentIssue({text:"Eigenes Ziel"})').includes('Ich-Formulierung'),'custom goal cannot silently export empty');
assert(run('studentIssue({...g,studentIcon:"missing"})').includes('Piktogramm'),'unknown icons rejected');
assert(run('studentIssue({...g,studentText:"x".repeat(601)})').includes('kürzen'),'long imported goals handled explicitly');
const html=run('studentPlanHTML({...plan(),family:"PRIVATE_FAMILY",context:"PRIVATE_CONTEXT",obs:[{text:"PRIVATE_OBSERVATION"}],logs:[{result:"PRIVATE_LOG"}]})');
for(const marker of ['PRIVATE_FAMILY','PRIVATE_CONTEXT','PRIVATE_OBSERVATION','PRIVATE_LOG'])assert(!html.includes(marker),'pupil output excludes '+marker);
assert(html.includes('Ich beginne mit meiner Karte.'));assert(!html.includes('Individuell verändertes Ziel'),'teacher formulation is not copied');
run('g.studentText="<img src=x onerror=alert(1)>"');assert(run('studentCardHTML(g,0)').includes('&lt;img'),'student text is escaped');
run('g.studentText="Ich beginne.";var originalState=JSON.stringify(state);studentPlanHTML(plan());');assert.equal(run('JSON.stringify(state)'),run('originalState'),'preview does not mutate records');
console.log('Passed: 114 mappings, pictograms, individual wording, review invalidation, custom goals, old records, backup round-trip, import validation, escaping, output fields.');
module.exports={run,ctx,root};

