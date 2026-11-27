const assert=require('node:assert/strict');
const {run}=require('./student-version.cjs');
run('render=()=>{};var p=blank("Kognition-Test");p.end="2027-01-29";state.plans.push(p);state.active=p.id;');
const ids=Array.from(run('TEMPLATES.filter(t=>t.area==="Kognition und Gedächtnis").map(t=>t.id)'));
assert.equal(ids.length,10);
assert.equal(run('AREAS.filter(a=>a==="Kognition und Gedächtnis").length'),1);
for(const grade of ['1','2','3','4','5','6','7','8','9']){
 run(`p.grade=${JSON.stringify(grade)};wizardOpenObservations();wizardArea="Kognition und Gedächtnis";wizardSelectedOnly=false;wizardQuery=''`);
 assert.deepEqual(Array.from(run('wizardVisibleTemplates().map(t=>t.id)')),ids);
 assert(run('wizardObservations()').includes('Kognition und Gedächtnis (10)'));
}
for(const id of ids){
 run(`wizardToggleTemplate(${JSON.stringify(id)},true)`);
 const t=run(`TEMPLATES.find(t=>t.id===${JSON.stringify(id)})`);
 assert(t.measureOptions.length>=3&&t.materialOptions.length>=2);
 assert.equal(t.measures,t.measureOptions.join('\n'));
 assert.equal(t.materials,t.materialOptions.join('\n'));
}
run('wizardEnsureGoals();for(const g of p.goals){const t=TEMPLATES.find(t=>t.id===g.templateId);g.measures=t.measures;g.materials=t.materials;g.owner="Klassenleitung";g.frequency="Nach Vereinbarung";}');
assert.equal(run('p.goals.length'),10);
for(const id of ids){
 assert.equal(run(`studentIssue(p.goals.find(g=>g.templateId===${JSON.stringify(id)}))`),'');
 assert(run('studentPlanHTML(p)').includes(run(`TEMPLATES.find(t=>t.id===${JSON.stringify(id)}).studentText`)));
}
assert.equal(run('validateImport(JSON.parse(JSON.stringify(state))).find(x=>x.id===p.id).goals.length'),10);
run('wizardSelectedOnly=true;wizardArea="";wizardBand="1-2";wizardQuery="Merkhilfe"');
assert.equal(run('wizardVisibleTemplates().length'),1);
console.log('Passed: cognition category in grades 1–9, ten observation-to-goal chains, measures/materials, pupil preview, search and backup round-trip.');
