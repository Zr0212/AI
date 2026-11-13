(function(){
 'use strict';
 const lesson=window.LESSON;const KEY='aiCareerSlidesStateV1';const create=()=>({slide:0,entries:{},reveals:{},checks:{},notebook:false,timer:{section:0,seconds:300,running:false,since:Date.now()}});
 function load(){try{return JSON.parse(localStorage.getItem(KEY))||create()}catch(e){return create()}}
 let state=load();let channel=null;try{channel=new BroadcastChannel('ai-career-presenter-v1')}catch(e){}
 function send(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}channel?.postMessage({type:'state',payload:state})}
 function receive(p){if(!p||!Number.isInteger(p.slide))return;state=p;render()}
 channel&&(channel.onmessage=e=>{if(e.data?.type==='state')receive(e.data.payload)});
 window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){try{receive(JSON.parse(e.newValue))}catch(err){}}});
 const set=(id,v)=>{document.getElementById(id).textContent=v};
 function seconds(){const t=state.timer;return Math.max(0,t.seconds-(t.running?Math.floor((Date.now()-t.since)/1000):0))}
 function fmt(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
 function render(){const s=lesson.slides[state.slide];if(!s)return;const sec=lesson.sections[s.section];set('sectionTag',sec.name);set('currentTitle',s.title);set('durationTag',`Hoạt động ${sec.code} · ${sec.minutes} phút`);set('noteGoal',s.notes.goal);set('noteSteps',s.notes.steps);set('noteAnswers',s.notes.answers);set('noteCaution',s.notes.caution);set('slideCount',`${String(state.slide+1).padStart(2,'0')} / ${lesson.slides.length}`);updateTimer()}
 function move(delta){const next=Math.max(0,Math.min(lesson.slides.length-1,state.slide+delta));const old=lesson.slides[state.slide].section;const section=lesson.slides[next].section;state.slide=next;if(section!==old){state.timer={section,seconds:lesson.sections[section].minutes*60,running:false,since:Date.now()}}send();render()}
 function updateTimer(){const remain=seconds();set('presenterTimer',fmt(remain));document.getElementById('pause').textContent=state.timer.running?'Ⅱ Tạm dừng':'▶ Bắt đầu';if(state.timer.running&&remain<=0){state.timer.running=false;state.timer.seconds=0;state.timer.since=Date.now();send();render()}}
 function toggle(){const r=seconds();state.timer.seconds=r===0?lesson.sections[lesson.slides[state.slide].section].minutes*60:r;state.timer.running=!state.timer.running;state.timer.since=Date.now();send();render()}
 function reset(){const section=lesson.slides[state.slide].section;state.timer={section,seconds:lesson.sections[section].minutes*60,running:false,since:Date.now()};send();render()}
 document.getElementById('prev').onclick=()=>move(-1);document.getElementById('next').onclick=()=>move(1);document.getElementById('pause').onclick=toggle;document.getElementById('reset').onclick=reset;
 document.getElementById('projector').onclick=()=>{const w=window.open('index.html?display=screen','aiCareersProjector','width=1280,height=720');if(!w)alert('Hãy cho phép mở cửa sổ mới và thử lại.')};
 document.getElementById('resetSession').onclick=()=>{if(confirm('Xóa tất cả nội dung học sinh đã nhập và đánh dấu của buổi học này?')){state=create();send();render()}};
 document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea'))return;if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)});
 setInterval(updateTimer,400);render();
})();
