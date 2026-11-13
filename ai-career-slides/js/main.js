(function () {
  'use strict';
  const lesson=window.LESSON;
  const url=new URL(window.location.href);
  const display=url.searchParams.get('display')||'normal';
  const preview=url.searchParams.get('preview')||'current';
  const isEmbed=display==='embed';
  const isScreen=display==='screen';
  if(isEmbed)document.body.classList.add('embed-view');
  if(isScreen){document.body.classList.add('embed-view');document.body.classList.add('projector-view')}
  const STORAGE_KEY='aiCareerSlidesStateV1';
  const createState=()=>({slide:0,entries:{},reveals:{},checks:{},notebook:false,timer:{section:0,seconds:300,running:false,since:Date.now()}});
  function load(){try{const v=JSON.parse(localStorage.getItem(STORAGE_KEY));if(v&&Number.isInteger(v.slide)&&v.slide>=0&&v.slide<lesson.slides.length)return Object.assign(createState(),v)}catch(e){}return createState()}
  let state=load();
  let channel=null;
  try{channel=new BroadcastChannel('ai-career-presenter-v1')}catch(e){}
  const stage=document.getElementById('slideStage');
  const viewport=document.getElementById('slideViewport');
  const counter=document.getElementById('slideCounter');
  const timerView=document.getElementById('activityTimer');
  const timerBtn=document.getElementById('timerButton');
  let toastTimeout=null;
  function toast(msg){const el=document.getElementById('toaster');el.textContent=msg;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),2500)}
  function sync(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){}if(channel){try{channel.postMessage({type:'state',payload:state})}catch(e){}}}
  function incoming(next){if(!next||!Number.isInteger(next.slide)||next.slide<0||next.slide>=lesson.slides.length)return;state=next;render()}
  if(channel)channel.onmessage=e=>{if(e.data?.type==='state')incoming(e.data.payload)};
  window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY&&e.newValue){try{incoming(JSON.parse(e.newValue))}catch(err){}}});
  function minutesToSeconds(section){return lesson.sections[section].minutes*60}
  function realRemaining(){const t=state.timer;if(!t)return 0;const elapsed=t.running?Math.floor((Date.now()-t.since)/1000):0;return Math.max(0,t.seconds-elapsed)}
  function mmss(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
  function applyTimer(){const remaining=realRemaining();document.querySelectorAll('[data-timer-view]').forEach(el=>el.textContent=mmss(remaining));if(timerView)timerView.textContent=mmss(remaining);if(timerBtn)timerBtn.textContent=state.timer.running?'Ⅱ':'▶';if(state.timer.running&&remaining<=0){state.timer.running=false;state.timer.seconds=0;state.timer.since=Date.now();sync();toast('Đã hết thời gian hoạt động.')}}
  function selectSection(n){if(state.timer.section!==n){state.timer={section:n,seconds:minutesToSeconds(n),running:false,since:Date.now()}}}
  function goTo(index){if(index<0||index>=lesson.slides.length)return;state.slide=index;selectSection(lesson.slides[index].section);sync();render()}
  function toggleTimer(){const remaining=realRemaining();state.timer.seconds=remaining;state.timer.running=!state.timer.running;if(remaining===0){state.timer.seconds=minutesToSeconds(lesson.slides[state.slide].section);state.timer.running=true}state.timer.since=Date.now();sync();applyTimer()}
  function resetTimer(){const s=lesson.slides[state.slide].section;state.timer={section:s,seconds:minutesToSeconds(s),running:false,since:Date.now()};sync();applyTimer()}
  function resize(){let w=window.innerWidth,h=window.innerHeight;const s=Math.min(w/1280,h/720);stage.style.setProperty('--slide-scale',s.toFixed(5))}
  function render(){const idx=isEmbed&&preview==='next'?Math.min(state.slide+1,lesson.slides.length-1):state.slide;const slide=lesson.slides[idx];stage.innerHTML=slide.html();const root=stage.querySelector('.slide');if(slide.id==='s16'&&state.notebook)root.classList.add('notebook-mode');
    stage.querySelectorAll('[data-entry]').forEach(input=>{input.value=state.entries?.[input.dataset.entry]||'';if(isEmbed)input.setAttribute('readonly','readonly')});
    stage.querySelectorAll('[data-reveal]').forEach(el=>{el.hidden=!state.reveals?.[el.dataset.reveal]});
    stage.querySelectorAll('[data-check]').forEach(el=>{const checked=!!state.checks?.[el.dataset.check];el.classList.toggle('is-checked',checked);el.setAttribute('aria-pressed',String(checked))});
    if(counter)counter.textContent=`${String(state.slide+1).padStart(2,'0')} / ${lesson.slides.length}`;
    if(!isEmbed){document.getElementById('prevBtn').disabled=state.slide===0;document.getElementById('nextBtn').disabled=state.slide===lesson.slides.length-1;document.getElementById('prevBtn').style.opacity=state.slide===0?'.4':'1';document.getElementById('nextBtn').style.opacity=state.slide===lesson.slides.length-1?'.4':'1'}
    document.title=`${String(idx+1).padStart(2,'0')} · ${slide.title} | AI lớp 9`;
    applyTimer();resize();
  }
  document.addEventListener('click',e=>{
    if(isEmbed)return;
    const btn=e.target.closest('button[data-action],button[data-check]');if(!btn)return;
    if(btn.dataset.check){const k=btn.dataset.check;state.checks[k]=!state.checks[k];sync();render();return}
    const action=btn.dataset.action;const key=btn.dataset.target;let changed=true;
    if(action==='hint'){const k=key==='q03'?key:key+'-hint';state.reveals[k]=!state.reveals[k]}
    else if(action==='answer'){const k=key+'-answer';state.reveals[k]=!state.reveals[k]}
    else if(action==='reveal'){state.reveals[key]=!state.reveals[key]}
    else if(action==='notebook'){state.notebook=!state.notebook}
    else if(action==='clear'){const prefix=btn.dataset.prefix;for(const k in state.entries){if(k.startsWith(prefix+'-'))delete state.entries[k]}state.reveals[prefix+'-answer']=false;state.reveals[prefix+'-hint']=false;toast('Đã xóa nội dung phiếu hiện tại.')}
    else changed=false;
    if(changed){sync();render()}
  });
  document.addEventListener('input',e=>{if(isEmbed||!e.target.matches('[data-entry]'))return;state.entries[e.target.dataset.entry]=e.target.value;sync()});
  document.addEventListener('keydown',e=>{
    if(isEmbed)return;
    const editing=e.target.matches('textarea,input,[contenteditable="true"]');
    if(editing&&e.key!=='Escape')return;
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();goTo(state.slide+1)}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();goTo(state.slide-1)}
    else if(e.key.toLowerCase()==='f'&&!e.ctrlKey&&!e.metaKey){e.preventDefault();toggleFullscreen()}
  });
  function toggleFullscreen(){if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.().catch(()=>toast('Trình duyệt không hỗ trợ toàn màn hình.'))}
  if(!isEmbed){document.getElementById('prevBtn').addEventListener('click',()=>goTo(state.slide-1));document.getElementById('nextBtn').addEventListener('click',()=>goTo(state.slide+1));document.getElementById('timerButton').addEventListener('click',toggleTimer);document.getElementById('resetTimer').addEventListener('click',resetTimer);document.getElementById('fullBtn').addEventListener('click',toggleFullscreen);document.getElementById('presenterBtn').addEventListener('click',()=>{const w=window.open('presenter.html','aiCareersPresenter','width=1180,height=860');if(!w)toast('Hãy cho phép trình duyệt mở cửa sổ mới.')})}
  window.addEventListener('resize',resize);
  setInterval(applyTimer,400);
  render();
})();
