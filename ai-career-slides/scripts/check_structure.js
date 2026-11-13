const fs=require('fs'),path=require('path'),vm=require('vm');
const window={};vm.runInNewContext(fs.readFileSync(path.resolve(__dirname,'../js/slides-data.js'),'utf8'),{window});let d=window.LESSON;const out=[],errs=[];
for(let i=0;i<d.slides.length;i++){
 const s=d.slides[i],html=s.html();let images=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(x=>x[1]);let fields=[...html.matchAll(/data-entry="([^"]+)"/g)].map(x=>x[1]);let reveals=[...html.matchAll(/data-reveal="([^"]+)"/g)].map(x=>x[1]);let actions=[...html.matchAll(/data-action="([^"]+)"[^>]*data-target="([^"]+)"/g)].map(x=>({action:x[1],target:x[2]}));let err=[];
 if(!html.includes('class="slide'))err.push('No slide root');if(!html.includes('slide-foot'))err.push('Missing footer');
 for(let im of images)if(!fs.existsSync(path.resolve(__dirname,'..',im)))err.push(`Missing image ${im}`);
 for(let a of actions){let key=a.action==='reveal'?a.target:(a.target==='q03'?a.target:a.target+'-'+a.action);if(!reveals.includes(key))err.push(`Missing reveal ${key}`)}
 for(let key of ['goal','steps','answers','caution'])if(!s.notes[key]||s.notes[key].length<10)err.push(`Missing notes:${key}`);
 if(fields.length!==new Set(fields).size)err.push('Duplicate input key');
 let item={slide:i+1,title:s.title,section:d.sections[s.section].name,images:images.length,fields:fields.length,actions:actions.length,notes:['goal','steps','answers','caution'].every(x=>!!s.notes[x]),status:err.length?'CHECK':'STATIC PASS',issues:err};out.push(item);if(err.length)errs.push(item)
}
const r={slides:d.slides.length,activities:d.sections.map(x=>({name:x.name,minutes:x.minutes})),sumMinutes:d.sections.reduce((a,b)=>a+b.minutes,0),issues:errs,checks:out};
fs.writeFileSync(path.resolve(__dirname,'../qa/structure-check.json'),JSON.stringify(r,null,2));
console.log('Slides:',r.slides,'Minutes:',r.sumMinutes,'Issues:',errs.length,'Images:',out.reduce((a,b)=>a+b.images,0),'Input fields:',out.reduce((a,b)=>a+b.fields,0));if(errs.length){console.log(JSON.stringify(errs,null,2));process.exitCode=1}
