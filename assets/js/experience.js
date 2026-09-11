const body=document.body;
const page=body.dataset.page||'home';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js-ready');

const sprite=`<svg class="sprite" aria-hidden="true">
  <symbol id="menu" viewBox="0 0 24 24"><path d="M3 6h18M8 12h13M3 18h18"/></symbol>
  <symbol id="close" viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19"/></symbol>
  <symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></symbol>
  <symbol id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></symbol>
  <symbol id="message" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></symbol>
  <symbol id="send" viewBox="0 0 24 24"><path d="m3 11 18-8-8 18-2-8-8-2Z"/><path d="m11 13 10-10"/></symbol>
  <symbol id="external" viewBox="0 0 24 24"><path d="M14 4h6v6M10 14 20 4M20 14v6H4V4h6"/></symbol>
  <symbol id="pin" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
  <symbol id="mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 7 9-7"/></symbol>
</svg>`;

const routes=[
  ['home','index.html','Home'],
  ['group','group.html','The Group'],
  ['institutions','institutions.html','Entities'],
  ['impact','impact.html','Milestones'],
  ['leadership','leadership.html','Leadership'],
  ['careers','careers.html','Careers'],
  ['contact','contact.html','Contact']
];
const nav=routes.filter(([key])=>key!=='home').map(([key,url,label])=>`<a${page===key?' class="active" aria-current="page"':''} href="${url}">${label}</a>`).join('');
const menu=routes.map(([key,url,label],index)=>`<a${page===key?' class="active" aria-current="page"':''} href="${url}"><span>0${index+1}</span><b>${label}</b><svg><use href="#arrow"></use></svg></a>`).join('');

const shell=document.querySelector('[data-shell]');
if(shell)shell.insertAdjacentHTML('afterend',`${sprite}
  <div class="progress" id="progress"></div>
  <div class="pointer-aura" aria-hidden="true"></div>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="logo" href="index.html" aria-label="Al Memari Group home"><img class="logo-wordmark" src="assets/images/amg-logo-gold.png" alt="Al Memari Group" width="387" height="227"><img class="logo-medallion" src="assets/images/brand-gold.png" alt="" width="500" height="500"></a>
    <nav class="main-nav" aria-label="Primary">${nav}</nav>
    <div class="header-actions">
      <button class="icon-button" type="button" data-open-search aria-label="Search the site" aria-haspopup="dialog"><svg><use href="#search"></use></svg></button>
      <button class="menu-trigger" type="button" data-open-menu aria-label="Explore the Al Memari Group site menu" aria-haspopup="dialog" aria-controls="menuLayer" aria-expanded="false"><span>Explore</span><svg><use href="#arrow"></use></svg></button>
    </div>
  </header>
  <div class="menu-layer" id="menuLayer" role="dialog" aria-modal="true" aria-label="Site navigation" aria-hidden="true">
    <div class="menu-visual"><img src="assets/images/university.webp" alt="" decoding="async"><span class="menu-spectrum"></span><img class="menu-logo" src="assets/images/amg-logo-royal.png" alt="Al Memari Group" width="1197" height="1314" decoding="async"></div>
    <div class="menu-content">
      <div class="menu-top"><span>EXPLORE AL MEMARI GROUP</span><button class="icon-button" type="button" data-close-menu aria-label="Close menu"><svg><use href="#close"></use></svg></button></div>
      <nav class="menu-links" aria-label="Expanded navigation">${menu}</nav>
      <div class="menu-foot"><span>AL AIN · ABU DHABI · UAE</span><a href="contact.html">GET IN TOUCH <svg><use href="#arrow"></use></svg></a></div>
    </div>
  </div>
  <div class="page-transition" aria-hidden="true"><div class="transition-planes"><i></i><i></i><i></i></div><img src="assets/images/amg-logo-royal.png" alt="" width="1197" height="1314"><span data-transition-label>OPENING THE GROUP</span></div>`);

const footerMount=document.querySelector('[data-footer]');
if(footerMount)footerMount.insertAdjacentHTML('afterend',`
  <footer class="site-footer">
    <div class="footer-lead"><img src="assets/images/amg-logo-royal.png" alt="Al Memari Group" width="1197" height="1314" loading="lazy" decoding="async"><h2>Three institutions.<br><em>One human purpose.</em></h2><a href="contact.html" aria-label="Contact Al Memari Group"><svg><use href="#arrow"></use></svg></a></div>
    <div class="footer-grid">
      <div><span>THE GROUP</span><p>Healthcare and education entities serving Al Ain and the wider UAE community.</p></div>
      <div><span>EXPLORE</span><a href="group.html">The Group</a><a href="institutions.html">Our Entities</a><a href="leadership.html">Leadership</a><a href="careers.html">Careers</a></div>
      <div><span>ENTITIES</span><a href="https://ak-hospital.com" target="_blank" rel="noopener noreferrer">Hospital <svg><use href="#external"></use></svg></a><a href="institutions.html#university">University</a><a href="https://ak-school.com" target="_blank" rel="noopener noreferrer">School <svg><use href="#external"></use></svg></a></div>
      <div><span>LOCATION</span><p>Al Ain<br>Abu Dhabi<br>United Arab Emirates</p></div>
    </div>
    <div class="footer-bottom"><span>© <span data-year></span> AL MEMARI GROUP</span><span>CARE · KNOWLEDGE · POSSIBILITY</span></div>
  </footer>
  <button class="guide-button" type="button" data-open-guide aria-label="Open AMG portfolio guide" aria-haspopup="dialog"><svg><use href="#message"></use></svg><span>AMG GUIDE</span></button>
  <dialog class="dialog" id="searchDialog" aria-labelledby="searchTitle">
    <div class="dialog-head"><div><small>QUICK NAVIGATION</small><h2 id="searchTitle">Where would you like to go?</h2></div><button type="button" data-close-dialog aria-label="Close search"><svg><use href="#close"></use></svg></button></div>
    <label class="search-field"><svg><use href="#search"></use></svg><span class="sr-only">Search</span><input id="searchInput" type="search" role="combobox" aria-autocomplete="list" aria-controls="searchResults" aria-expanded="true" placeholder="Search entities, leadership, careers…"></label>
    <div class="search-results" id="searchResults" role="listbox" aria-label="Search destinations"></div>
  </dialog>
  <dialog class="dialog" id="guideDialog" aria-labelledby="guideTitle">
    <div class="dialog-head"><div><small>PORTFOLIO GUIDE</small><h2 id="guideTitle">Find your destination</h2></div><button type="button" data-close-dialog aria-label="Close portfolio guide"><svg><use href="#close"></use></svg></button></div>
    <div class="guide-log" id="guideLog" role="log" aria-live="polite" aria-relevant="additions"><div class="message bot">I can guide you to the Hospital, University, School, leadership, careers, or contact information.</div></div>
    <div class="suggestions"><button type="button" data-question="Show the entities">Entities</button><button type="button" data-question="Show careers">Careers</button><button type="button" data-question="Show leadership">Leadership</button></div>
    <form class="guide-form" id="guideForm"><input id="guideInput" placeholder="What are you looking for?" aria-label="Ask a question"><button aria-label="Send"><svg><use href="#send"></use></svg></button></form>
  </dialog>`);

document.querySelectorAll('svg:not([role="img"])').forEach(svg=>{svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false')});

const icon=name=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const use=document.createElementNS('http://www.w3.org/2000/svg','use');use.setAttribute('href',`#${name}`);svg.append(use);return svg};

const header=document.querySelector('.site-header');
const progress=document.querySelector('#progress');
let scrollFrame=0;
function updateScroll(){scrollFrame=0;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);document.documentElement.style.setProperty('--scroll-progress',String(Math.min(1,scrollY/max)));header?.classList.toggle('compact',scrollY>28)}
function requestScrollUpdate(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll)}
addEventListener('scroll',requestScrollUpdate,{passive:true});updateScroll();

const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(!reduce&&finePointer){
  let pointerFrame=0,pointerX=innerWidth/2,pointerY=innerHeight/2;
  addEventListener('pointermove',event=>{pointerX=event.clientX;pointerY=event.clientY;if(pointerFrame)return;pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;document.documentElement.style.setProperty('--pointer-x',`${pointerX}px`);document.documentElement.style.setProperty('--pointer-y',`${pointerY}px`);body.classList.add('pointer-ready')})},{passive:true});
  const homeHero=document.querySelector('.home-hero');
  homeHero?.addEventListener('pointermove',event=>{const bounds=homeHero.getBoundingClientRect();homeHero.style.setProperty('--pointer-x',`${(event.clientX-bounds.left)/bounds.width*100}%`);homeHero.style.setProperty('--pointer-y',`${(event.clientY-bounds.top)/bounds.height*100}%`)},{passive:true});
  document.querySelectorAll('[data-entity-panel]').forEach(panel=>{
    panel.addEventListener('pointermove',event=>{const bounds=panel.getBoundingClientRect(),x=(event.clientX-bounds.left)/bounds.width,y=(event.clientY-bounds.top)/bounds.height;panel.style.setProperty('--mx',`${(0.5-x)*9}px`);panel.style.setProperty('--my',`${(0.5-y)*9}px`);panel.style.setProperty('--lens-x',`${x*100}%`);panel.style.setProperty('--lens-y',`${y*100}%`)},{passive:true});
    panel.addEventListener('pointerleave',()=>{panel.style.setProperty('--mx','0px');panel.style.setProperty('--my','0px');panel.style.setProperty('--lens-x','50%');panel.style.setProperty('--lens-y','45%')});
  });
}

document.querySelectorAll('.leader-grid,.programme-grid,.metric-grid,.stage-grid,.vac-list').forEach(group=>group.querySelectorAll('[data-reveal]').forEach((item,index)=>item.style.setProperty('--reveal-delay',`${Math.min(index,5)*70}ms`)));
const reveals=[...document.querySelectorAll('[data-reveal]')];
if(reduce||!('IntersectionObserver'in window))reveals.forEach(item=>item.classList.add('visible'));
else{const observer=new IntersectionObserver((entries,current)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');current.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -8%'});reveals.forEach(item=>observer.observe(item))}

const menuLayer=document.querySelector('#menuLayer');
const openMenu=document.querySelector('[data-open-menu]');
const closeMenu=document.querySelector('[data-close-menu]');
let menuReturn;
const inertTargets=[header,document.querySelector('.skip'),document.querySelector('main'),document.querySelector('.site-footer'),document.querySelector('.guide-button')].filter(Boolean);
function setPageInert(active){inertTargets.forEach(target=>{target.inert=active})}

const introScreen=document.querySelector('[data-intro]');
if(introScreen){
  document.documentElement.classList.add('intro-managed');
  body.classList.add('intro-active');
  setPageInert(true);
  let arriving=false;
  try{arriving=sessionStorage.getItem('amg-navigation')==='1';sessionStorage.removeItem('amg-navigation')}catch(error){arriving=false}
  const firstEntry=!arriving;
  introScreen.classList.add(firstEntry?'first-entry':'route-entry');
  introScreen.dataset.chapter=firstEntry?'origin':'route';
  if(firstEntry){
    introScreen.setAttribute('role','dialog');
    introScreen.setAttribute('aria-modal','true');
    introScreen.setAttribute('aria-describedby','introStatus');
    introScreen.tabIndex=-1;
    introScreen.focus({preventScroll:true});
  }
  const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
  const readiness=[];
  const introLogo=introScreen.querySelector('img');
  const introStatus=introScreen.querySelector('[data-intro-status]');
  const introSkip=introScreen.querySelector('[data-skip-intro]');
  const introPillars=[...introScreen.querySelectorAll('.intro-pillars b')];
  const introRails=[...introScreen.querySelectorAll('.intro-rail i')];
  const introTimers=[];
  if(introLogo?.decode)readiness.push(introLogo.decode());
  if(document.fonts?.ready)readiness.push(document.fonts.ready);
  if(page==='home'){
    const heroImage=document.querySelector('.hero-backdrop');
    if(heroImage?.decode)readiness.push(heroImage.decode());
  }
  const minimum=reduce?80:firstEntry?6600:180;
  const readyLimit=6100;
  let finished=false;

  function queueIntro(callback,delay){
    const timer=setTimeout(callback,delay);
    introTimers.push(timer);
    return timer;
  }

  function setChapter(chapter,label,pillar=-1){
    if(finished)return;
    introScreen.dataset.chapter=chapter;
    introPillars.forEach((item,index)=>item.classList.toggle('is-active',index===pillar));
    introRails.forEach((item,index)=>item.classList.toggle('is-complete',pillar>=0&&index<=pillar));
    if(!introStatus||!label||introStatus.textContent===label)return;
    introStatus.textContent=label;
    if(!reduce&&typeof introStatus.animate==='function'){
      introStatus.animate([{opacity:.18,filter:'blur(3px)'},{opacity:1,filter:'blur(0)'}],{duration:460,easing:'cubic-bezier(.16,1,.3,1)'});
    }
  }

  function clearIntroTimers(){introTimers.splice(0).forEach(timer=>clearTimeout(timer))}
  function skipIntro(){finishIntro({skipped:true})}
  function handleIntroKeydown(event){if(event.key==='Escape'&&!introSkip?.hidden)skipIntro()}

  function finishIntro({skipped=false}={}){
    if(finished)return;
    finished=true;
    clearIntroTimers();
    introSkip?.removeEventListener('click',skipIntro);
    document.removeEventListener('keydown',handleIntroKeydown);
    if(introSkip){introSkip.disabled=true;introSkip.blur()}
    introScreen.dataset.chapter=skipped?'skipped':'complete';
    introScreen.classList.add('intro-exit');
    introScreen.setAttribute('aria-hidden','true');
    const revealDelay=reduce?0:skipped?180:firstEntry?560:180;
    const hideDelay=reduce?40:skipped?880:firstEntry?1040:480;
    setTimeout(()=>{
      body.classList.remove('intro-active');
      body.classList.add('intro-complete');
      setPageInert(false);
      if(skipped)document.querySelector('.site-header .logo')?.focus({preventScroll:true});
    },revealDelay);
    setTimeout(()=>{introScreen.hidden=true},hideDelay);
  }

  if(firstEntry&&!reduce){
    const chapters=[
      [760,'care','CARE IN MOTION',0],
      [2260,'knowledge','KNOWLEDGE IN MOTION',1],
      [3780,'possibility','POSSIBILITY IN MOTION',2],
      [5380,'welcome','WELCOME TO AL MEMARI GROUP',-1]
    ];
    chapters.forEach(([delay,chapter,label,pillar])=>queueIntro(()=>setChapter(chapter,label,pillar),delay));
    queueIntro(()=>{if(introSkip){introSkip.hidden=false;introSkip.classList.add('is-visible');if(document.activeElement===document.body||document.activeElement===introScreen)introSkip.focus({preventScroll:true})}},1800);
    introSkip?.addEventListener('click',skipIntro);
    document.addEventListener('keydown',handleIntroKeydown);
  }else if(introSkip)introSkip.hidden=true;

  const readinessGate=firstEntry&&!reduce?Promise.race([Promise.allSettled(readiness),wait(readyLimit)]):Promise.resolve();
  Promise.all([wait(minimum),readinessGate]).then(()=>finishIntro());
  queueIntro(()=>finishIntro(),reduce?320:firstEntry?8200:1000);
}else body.classList.add('intro-complete');

function showMenu(){menuReturn=document.activeElement;menuLayer?.classList.add('open');menuLayer?.setAttribute('aria-hidden','false');openMenu?.setAttribute('aria-expanded','true');setPageInert(true);body.classList.add('lock');setTimeout(()=>closeMenu?.focus(),80)}
function hideMenu(){menuLayer?.classList.remove('open');menuLayer?.setAttribute('aria-hidden','true');openMenu?.setAttribute('aria-expanded','false');setPageInert(false);body.classList.remove('lock');menuReturn?.focus()}
openMenu?.setAttribute('aria-expanded','false');
openMenu?.addEventListener('click',showMenu);closeMenu?.addEventListener('click',hideMenu);
menuLayer?.addEventListener('keydown',event=>{if(event.key==='Escape')hideMenu();if(event.key!=='Tab')return;const items=[...menuLayer.querySelectorAll('a,button')];const first=items[0],last=items.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}});

function routeLabel(href){const file=href.split('#')[0].split('/').pop()||'index.html';return routes.find(([,url])=>url===file)?.[2]||'The Group'}
document.querySelectorAll('a[href$=".html"],a[href*=".html#"]').forEach(link=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||link.target==='_blank')return;const href=link.getAttribute('href');if(!href)return;event.preventDefault();const transition=document.querySelector('.page-transition');const transitionLabel=transition?.querySelector('[data-transition-label]');if(transitionLabel)transitionLabel.textContent=`OPENING ${routeLabel(href).toUpperCase()}`;try{sessionStorage.setItem('amg-navigation','1')}catch(error){}transition?.classList.add('leaving');setPageInert(true);setTimeout(()=>{location.href=href},reduce?0:1650)}));
addEventListener('pageshow',()=>{document.querySelector('.page-transition')?.classList.remove('leaving');if(!body.classList.contains('intro-active'))setPageInert(false);if(!menuLayer?.classList.contains('open')&&!document.querySelector('dialog[open]'))body.classList.remove('lock')});

const formatter=new Intl.NumberFormat('en-US');
function animateCount(element){const target=Number(element.dataset.count||0),suffix=element.dataset.suffix||'';if(reduce){element.textContent=formatter.format(target)+suffix;return}const started=performance.now();function tick(now){const progress=Math.min(1,(now-started)/1200);element.textContent=formatter.format(Math.round(target*(1-Math.pow(1-progress,4))))+suffix;if(progress<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
const counters=[...document.querySelectorAll('[data-count]')];
if('IntersectionObserver'in window){const counterObserver=new IntersectionObserver((entries,current)=>entries.forEach(entry=>{if(entry.isIntersecting){animateCount(entry.target);current.unobserve(entry.target)}}),{threshold:.35});counters.forEach(item=>counterObserver.observe(item))}else counters.forEach(animateCount);

const searchDialog=document.querySelector('#searchDialog');
const guideDialog=document.querySelector('#guideDialog');
const dialogReturn=new WeakMap();
function openDialog(dialog,target){if(!dialog||dialog.open)return;dialogReturn.set(dialog,document.activeElement);dialog.showModal?dialog.showModal():dialog.setAttribute('open','');body.classList.add('lock');setTimeout(()=>target?.focus(),30)}
function closeDialog(dialog){if(!dialog)return;const returnTarget=dialogReturn.get(dialog);dialog.close?dialog.close():dialog.removeAttribute('open');body.classList.remove('lock');returnTarget?.focus()}
document.querySelectorAll('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>closeDialog(button.closest('dialog'))));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.addEventListener('click',event=>{if(event.target===dialog)closeDialog(dialog)});dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog(dialog)});dialog.addEventListener('close',()=>body.classList.remove('lock'))});

const searchItems=[
  ...routes.map(([,url,label])=>[label,url]),
  ['Ain Al Khaleej Hospital','institutions.html#hospital'],
  ['Ain Al Khaleej University of Health Sciences','institutions.html#university'],
  ['Ain Al Khaleej Private School','institutions.html#school'],
  ['Medicine programme','institutions.html#university'],
  ['Dentistry programme','institutions.html#university'],
  ['Nursing programme','institutions.html#university'],
  ['Health Sciences programmes','institutions.html#university'],
  ['Hospital careers','careers.html#hospital-careers'],
  ['University careers','careers.html#university-careers'],
  ['School careers','careers.html#school-careers'],
  ['Hospital contact','contact.html#contact-hospital'],
  ['University admissions','contact.html#contact-university'],
  ['School contact','contact.html#contact-school']
];
const searchInput=document.querySelector('#searchInput');
const searchResults=document.querySelector('#searchResults');
let searchIndex=0;
function renderSearch(query=''){if(!searchResults)return;searchResults.textContent='';const matches=searchItems.filter(([name])=>!query||name.toLowerCase().includes(query.toLowerCase()));searchIndex=Math.min(searchIndex,Math.max(0,matches.length-1));if(!matches.length){searchInput?.removeAttribute('aria-activedescendant');const empty=document.createElement('p');empty.className='search-empty';empty.setAttribute('role','status');empty.textContent='No destination found. Try Hospital, University, School, leadership, or careers.';searchResults.append(empty);return}matches.forEach(([name,url],index)=>{const link=document.createElement('a');link.id=`search-option-${index}`;link.setAttribute('role','option');link.setAttribute('aria-selected',String(index===searchIndex));link.className='search-result'+(index===searchIndex?' active':'');link.href=url;const content=document.createElement('div'),title=document.createElement('b'),hint=document.createElement('small');title.textContent=name;hint.textContent='Open destination';content.append(title,hint);link.append(content,icon('arrow'));searchResults.append(link)});searchInput?.setAttribute('aria-activedescendant',`search-option-${searchIndex}`)}
document.querySelectorAll('[data-open-search]').forEach(button=>button.addEventListener('click',()=>{renderSearch();openDialog(searchDialog,searchInput)}));
addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();if(body.classList.contains('intro-active')||menuLayer?.classList.contains('open')||document.querySelector('dialog[open]'))return;renderSearch();openDialog(searchDialog,searchInput)}});
searchInput?.addEventListener('input',()=>{searchIndex=0;renderSearch(searchInput.value)});
searchInput?.addEventListener('keydown',event=>{const links=[...searchResults.querySelectorAll('a')];if(!links.length)return;if(event.key==='ArrowDown'){event.preventDefault();searchIndex=(searchIndex+1)%links.length;renderSearch(searchInput.value)}if(event.key==='ArrowUp'){event.preventDefault();searchIndex=(searchIndex-1+links.length)%links.length;renderSearch(searchInput.value)}if(event.key==='Enter'){event.preventDefault();links[searchIndex]?.click()}});

const heroPanels=[...document.querySelectorAll('[data-entity-panel]')];
heroPanels.forEach((panel,index)=>panel.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();let next=index;if(event.key==='ArrowRight')next=(index+1)%heroPanels.length;if(event.key==='ArrowLeft')next=(index-1+heroPanels.length)%heroPanels.length;if(event.key==='Home')next=0;if(event.key==='End')next=heroPanels.length-1;heroPanels[next]?.focus()}));

const entityTabs=[...document.querySelectorAll('.entity-tabs a')];
const entitySections=entityTabs.map(tab=>document.querySelector(tab.getAttribute('href'))).filter(Boolean);
function activateEntity(id){entityTabs.forEach(tab=>{const active=tab.getAttribute('href')===`#${id}`;tab.classList.toggle('active',active);if(active)tab.setAttribute('aria-current','location');else tab.removeAttribute('aria-current')})}
if(entitySections.length&&'IntersectionObserver'in window){const tabObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)activateEntity(visible.target.id)},{rootMargin:'-22% 0px -58%',threshold:[0,.1,.35,.6]});entitySections.forEach(section=>tabObserver.observe(section))}

const guideRoutes=[
  {all:['hospital'],keys:['career','job','vacancy','work'],url:'careers.html#hospital-careers',reply:'Opening current Hospital opportunities.'},
  {all:['university'],keys:['career','job','vacancy','work'],url:'careers.html#university-careers',reply:'Opening the University career status.'},
  {all:['school'],keys:['career','job','vacancy','work'],url:'careers.html#school-careers',reply:'Opening the School career status.'},
  {all:['hospital'],keys:['contact','phone','email','location'],url:'contact.html#contact-hospital',reply:'Opening the Hospital contact directory.'},
  {all:['university'],keys:['contact','phone','email','admission'],url:'contact.html#contact-university',reply:'Opening University contact and admissions.'},
  {all:['school'],keys:['contact','phone','email','location'],url:'contact.html#contact-school',reply:'Opening the School contact directory.'},
  {keys:['hospital','care','doctor','patient'],url:'institutions.html#hospital',reply:'Opening Ain Al Khaleej Hospital.'},
  {keys:['university','degree','college','medicine','nursing'],url:'institutions.html#university',reply:'Opening Ain Al Khaleej University of Health Sciences.'},
  {keys:['school','student','curriculum','children'],url:'institutions.html#school',reply:'Opening Ain Al Khaleej School.'},
  {keys:['entities','institutions'],url:'institutions.html',reply:'Opening the Group entities.'},
  {keys:['career','job','vacancy','work'],url:'careers.html',reply:'Opening careers across the Group.'},
  {keys:['leader','leadership','founder'],url:'leadership.html',reply:'Opening Group and entity leadership.'},
  {keys:['contact','location','phone','email'],url:'contact.html',reply:'Opening contact information.'},
  {keys:['group','about','vision','mission'],url:'group.html',reply:'Opening the Group story.'}
];
const guideInput=document.querySelector('#guideInput');
const guideLog=document.querySelector('#guideLog');
const guideForm=document.querySelector('#guideForm');
function addMessage(text,type){const message=document.createElement('div');message.className='message '+type;message.textContent=text;guideLog?.append(message);if(guideLog)guideLog.scrollTop=guideLog.scrollHeight}
function answer(question){const clean=question.trim();if(!clean)return;addMessage(clean,'user');const lower=clean.toLowerCase();const route=guideRoutes.find(item=>(!item.all||item.all.every(key=>lower.includes(key)))&&item.keys.some(key=>lower.includes(key)));if(!route){addMessage('Try asking about an entity, leadership, careers, or contact information.','bot');return}setTimeout(()=>{addMessage(route.reply,'bot');setTimeout(()=>{location.href=route.url},reduce?0:480)},160)}
document.querySelectorAll('[data-open-guide]').forEach(button=>button.addEventListener('click',()=>openDialog(guideDialog,guideInput)));
document.querySelectorAll('[data-question]').forEach(button=>button.addEventListener('click',()=>answer(button.dataset.question||'')));
guideForm?.addEventListener('submit',event=>{event.preventDefault();answer(guideInput.value);guideInput.value=''});

document.querySelectorAll('[data-year]').forEach(item=>item.textContent=new Date().getFullYear());
