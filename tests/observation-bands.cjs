const assert=require('node:assert/strict');
const {run}=require('./student-version.cjs');
run('render=()=>{};var p=blank("Test");p.grade="9a";p.end="2027-01-15";state.plans.push(p);state.active=p.id;');
const expected={'1':'1-2','2':'1-2','3':'3-4','4':'3-4','5':'5-6','6':'5-6','7':'7-9','8':'7-9','9':'7-9','9a':'7-9','Klasse 3':'3-4','10':'all','':'all','7/8':'all','abc':'all'};
for(const [grade,band] of Object.entries(expected))assert.equal(run(`gradeBandFor(${JSON.stringify(grade)})`),band,grade);
assert.equal(run('TEMPLATES.filter(t=>!t.gradeBands.length).length'),84);
assert.equal(run('new Set(TEMPLATES.map(t=>t.id)).size'),124);
for(const band of ['1-2','3-4','5-6','7-9']){
 run(`wizardBand=${JSON.stringify(band)};wizardSelectedOnly=false;wizardQuery=''`);
 assert.equal(run('wizardAvailableTemplates().length'),94,'shared basics plus ten contexts');
 assert.equal(run(`TEMPLATES.filter(t=>t.gradeBands.includes(${JSON.stringify(band)})).length`),10);
 for(const area of Array.from(run('AREAS'))){
  run(`wizardArea=${JSON.stringify(area)}`);
  assert.equal(run('wizardVisibleTemplates().filter(t=>t.gradeBands.length).length'),area==='Kognition und Gedächtnis'?0:2,'two contexts per original area');
  assert.equal(run('wizardVisibleTemplates().filter(t=>!t.gradeBands.length).length'),run(`TEMPLATES.filter(t=>t.area===${JSON.stringify(area)}&&!t.gradeBands.length).length`),'all shared basics accessible');
 }
}
run('wizardBand="all"');assert.equal(run('wizardAvailableTemplates().length'),124);
run('wizardOpenObservations()');assert.equal(run('wizardBand'),'7-9','profile chooses group');
run('p.observationBand="all";p.observationBandGrade=p.grade;wizardOpenObservations()');assert.equal(run('wizardBand'),'all','manual all persists');
run('p.grade="2";wizardOpenObservations()');assert.equal(run('wizardBand'),'1-2','changed profile resets default');
run('wizardToggleTemplate("79_fahrplan",true);wizardToggleTemplate("12_einszueins",true);wizardToggleTemplate("grapheme",true);wizardEnsureGoals();var before=JSON.stringify({obs:p.obs,goals:p.goals,logs:p.logs});');
for(const band of ['1-2','3-4','5-6','7-9','all']){
 run(`wizardBand=${JSON.stringify(band)};wizardSelectedOnly=true;wizardQuery=''`);
 assert.equal(run('wizardVisibleTemplates().length'),3,'selection spans all groups');
 assert.equal(run('JSON.stringify({obs:p.obs,goals:p.goals,logs:p.logs})'),run('before'),'filtering preserves saved records');
}
run('p.obs[0].text="Eigene Beobachtung am Bus";wizardQuery="am Bus"');assert.equal(run('wizardVisibleTemplates().length'),1,'search uses saved formulation in selection');
run('wizardSelectedOnly=false;wizardBand="1-2";wizardArea="Mathematik";wizardQuery="Fahrplan"');assert.equal(run('wizardVisibleTemplates().length'),0);
run('wizardBand="all"');assert.equal(run('wizardVisibleTemplates().length'),1,'all allows cross-stage search');
run('wizardQuery="";for(const t of TEMPLATES.filter(t=>t.gradeBands.length))wizardToggleTemplate(t.id,true);wizardEnsureGoals();');
assert.equal(run('p.goals.filter(g=>TEMPLATES.find(t=>t.id===g.templateId).gradeBands.length).length'),40);
for(const goal of Array.from(run('p.goals'))){assert.equal(run(`studentIssue(p.goals.find(g=>g.id===${JSON.stringify(goal.id)}))`),'','each generated goal has pupil wording and pictogram');}
assert.equal(run('validateImport(JSON.parse(JSON.stringify(state))).length'),run('state.plans.length'),'all new records remain importable');
assert.equal(run('TEMPLATES.find(t=>t.id==="koerper").observation'),'Zeigt auf Aufforderung wiederholt auf einen anderen als den benannten Körperteil.');
assert(run('wizardObservations()').includes('Klassenstufen der Beispiele'));
console.log('Passed: 124 unique entries, 84 shared basics, 10 contexts per band, two per original area, profile default and override, cross-band selection, saved wording, 40 new goal chains, pupil output and backup compatibility.');
