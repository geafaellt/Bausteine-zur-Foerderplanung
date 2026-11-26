'use strict';
/* A4 portrait, readable goal cards. Only explicitly child-facing fields enter this PDF. */
async function buildStudentPDF(p,fonts,iconImages) {
 const issue=checkStudentPlan(p);if(issue)throw Error(issue);
 const {PDFDocument,rgb}=PDFLib,doc=await PDFDocument.create();doc.registerFontkit(fontkit);
 const regular=await doc.embedFont(fonts.regular,{subset:true}),bold=await doc.embedFont(fonts.bold,{subset:true});
 const W=595.28,H=841.89,M=38,bottom=48,ink=rgb(.12,.23,.19),green=rgb(.14,.34,.28),line=rgb(.72,.79,.74),light=rgb(.96,.98,.96);
 const images={};for(const key of new Set(p.goals.map(g=>studentGoal(g).icon))){if(!iconImages[key])throw Error('Piktogramm fehlt: '+key);images[key]=await doc.embedPng(iconImages[key])}
 doc.setTitle('Meine Lernziele – '+p.code);doc.setCreator('Bausteine zur Förderplanung');
 function wrap(value,font,size,width){const lines=[];for(const paragraph of String(value||'').replace(/\r/g,'').split('\n')){let current='';for(const word of paragraph.split(/\s+/).filter(Boolean)){if(font.widthOfTextAtSize(word,size)>width){if(current){lines.push(current);current=''}for(const ch of word){if(current&&font.widthOfTextAtSize(current+ch,size)>width){lines.push(current);current=''}current+=ch}}else if(current&&font.widthOfTextAtSize(current+' '+word,size)>width){lines.push(current);current=word}else current+=(current?' ':'')+word}lines.push(current)}return lines}
 let page,y;
 function text(value,x,size=16,font=regular,width=W-2*M){const lines=wrap(value,font,size,width);for(const l of lines){page.drawText(l,{x,y:y-size,font,size,color:ink});y-=size*1.4}return lines.length}
 function newPage(){page=doc.addPage([W,H]);y=H-M;text('Meine Lernziele',M,28,bold);y-=7;text(`${p.code}${p.grade?' · Klasse '+p.grade:''}`,M,16);text(`${date(p.start)} – ${date(p.end)}`,M,14);y-=12;text('Das übe ich.',M,18,bold);y-=20}
 newPage();
 p.goals.forEach((g,index)=>{
  const s=studentGoal(g),x=M+120,textWidth=W-2*M-140;
  const goalLines=wrap(s.text,regular,18,textWidth),helpLines=s.help.trim()?wrap(s.help,regular,16,textWidth):[];
  // Split only unusually long personalised cards, keeping the icon and goal number on each continuation.
  const content=[...goalLines.map(value=>({value,size:18,font:regular,lineHeight:25})),...(helpLines.length?[{value:'Das hilft mir:',size:16,font:bold,lineHeight:30},...helpLines.map(value=>({value,size:16,font:regular,lineHeight:23}))]:[])];
  let offset=0,part=0;
  const totalHeight=Math.max(132,54+content.reduce((sum,l)=>sum+l.lineHeight,0));
  const freshSpace=H-M-(28*1.4+7+16*1.4+14*1.4+12+18*1.4+20)-bottom;
  if(totalHeight<=freshSpace&&totalHeight>y-bottom)newPage();
  while(offset<content.length){
   if(y-bottom<150)newPage();
   let used=54,n=0;while(offset+n<content.length&&used+content[offset+n].lineHeight<=y-bottom){used+=content[offset+n].lineHeight;n++}
   if(!n)throw Error('Kein Platz für Zielkarte');
   const height=Math.max(132,used),top=y;
   page.drawRectangle({x:M,y:top-height,width:W-2*M,height,color:light,borderColor:line,borderWidth:1});
   page.drawImage(images[s.icon],{x:M+16,y:top-114,width:90,height:90});
   page.drawText(`Mein Ziel ${index+1}${part?' · weiter':''}`,{x,y:top-27,font:bold,size:14,color:green});
   let cy=top-45;
   content.slice(offset,offset+n).forEach(l=>{page.drawText(l.value,{x,y:cy-l.size,font:l.font,size:l.size,color:ink});cy-=l.lineHeight});
   y=top-height-18;offset+=n;part++;if(offset<content.length)newPage();
  }
 });
 const pages=doc.getPages();pages.forEach((pg,i)=>pg.drawText(`Meine Lernziele · ${i+1} / ${pages.length}`,{x:M,y:25,font:regular,size:11,color:green}));
 return doc.save();
}
