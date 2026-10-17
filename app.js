"use strict";
(() => {
  const DATA = window.LEGE_DATA;
  DATA.articles = window.LEGE_ARTICLES;
  const main = document.getElementById("main");
  const toast = document.getElementById("toast");
  let view = "home";
  let selectedVoice = localStorage.getItem("lege198-voice") || "";
  document.getElementById("sourceVersion").textContent = `Sursă: ${DATA.source}; ${DATA.sourceVersion}.`;
  const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const paras = (t) => t.split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join("");
  const modFor = (n) => DATA.modules.find(m => n >= m.startArticle && n <= m.endArticle);
  const norm = (v) => v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  function nav(){ document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("active", b.dataset.view === view)); }
  function toastMsg(t){ toast.textContent=t; toast.classList.add("show"); clearTimeout(toastMsg.t); toastMsg.t=setTimeout(()=>toast.classList.remove("show"),2400); }
  let continuousAudio = false;
  function resetAudioButtons(){ document.querySelectorAll("[data-stop]").forEach(b=>b.hidden=true); document.querySelectorAll("[data-play]").forEach(b=>b.hidden=false); }
  function stop(){ continuousAudio=false; if("speechSynthesis" in window) speechSynthesis.cancel(); resetAudioButtons(); }
  function revealArticle(a){
    const target=document.querySelector(`[data-article="${a.article}"]`);
    if(target){ target.open=true; target.scrollIntoView({behavior:"smooth",block:"start"}); return true; }
    return false;
  }
  function playArticle(a){
    if(!("speechSynthesis" in window)){ toastMsg("Redarea audio nu este disponibilă."); return; }
    continuousAudio=true;
    speechSynthesis.cancel();
    resetAudioButtons();
    revealArticle(a);
    const playButton=document.querySelector(`[data-play="${a.article}"]`);
    const stopButton=document.querySelector(`[data-stop="${a.article}"]`);
    if(playButton) playButton.hidden=true;
    if(stopButton) stopButton.hidden=false;
    const u=new SpeechSynthesisUtterance(`Articolul ${a.article}. ${a.legalText}`);
    u.lang="ro-RO"; u.rate=.88; u.pitch=1.04; u.voice=friendlyVoice();
    u.onerror=()=>{ continuousAudio=false; resetAudioButtons(); };
    u.onend=()=>{
      resetAudioButtons();
      if(!continuousAudio) return;
      const idx=DATA.articles.findIndex(x=>x.article===a.article);
      const next=DATA.articles[idx+1];
      if(!next){ continuousAudio=false; toastMsg("Ați ajuns la finalul legii."); return; }
      const nextModule=modFor(next.articleNumber);
      const currentModule=modFor(a.articleNumber);
      if(currentModule?.id!==nextModule?.id || !document.querySelector(`[data-article="${next.article}"]`)){
        const out=document.getElementById("moduleArticles");
        if(out) moduleView(nextModule.id,next.article);
        else { contents(); continuousAudio=true; moduleView(nextModule.id,next.article); }
      } else {
        revealArticle(next);
      }
      setTimeout(()=>playArticle(next),120);
    };
    speechSynthesis.speak(u);
  }
  function romanianVoices(){ return speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith("ro")); }
  function friendlyVoice(){ const voices=romanianVoices(),wanted=["ioana","alina","cristina","female","natural"]; return voices.find(v=>v.name===selectedVoice)||voices.find(v=>wanted.some(n=>v.name.toLowerCase().includes(n)))||voices[0]||null; }
  function voiceOptions(){ const voices=romanianVoices(); return voices.length?`<label class="voice-choice">Voce <select data-voice-select>${voices.map(v=>`<option value="${esc(v.name)}" ${v.name===(selectedVoice||friendlyVoice()?.name)?"selected":""}>${esc(v.name)}</option>`).join("")}</select></label>`:""; }
  const BANK = window.LEGE_CONTROL.items;
  let session = null, sessionTick = null;
  const inlineChoices = new Map(), inlineShown = new Set();
  const quizFor = a => BANK.filter(q => q.article === a.article || (a.article === '251' && q.article === 'Anexă'));
  const timeText = seconds => {
    const s = Math.max(0, Math.floor(seconds));
    return [Math.floor(s/3600), Math.floor(s/60)%60, s%60].map(n=>String(n).padStart(2,'0')).join(':');
  };
  const questionText = q => esc(q.prompt).replaceAll('\n','<br>');
  const answerText = q => q.options[q.answer];
  function feedbackHTML(q,chosen){
    const good=chosen===q.answer;
    return `<div class="answer-feedback ${good?'success':'retry'}"><strong>${chosen===undefined?'Fără răspuns.':good?'Corect.':'Răspuns greșit.'} Răspunsul corect: ${'abcd'[q.answer]}) ${esc(answerText(q))}</strong><p>${esc(q.source)}</p><blockquote>${esc(q.quote)}</blockquote></div>`;
  }
  function quizHTML(a){
    const questions=quizFor(a);
    return `<details class="article-quiz"><summary>Grilă de control · ${questions.length} ${questions.length===1?'item':'itemi'}</summary><p>Alege răspunsul, apoi verifică atunci când dorești. Poți corecta toți itemii articolului la final.</p><div class="quiz-list">${questions.map(q=>{
      const chosen=inlineChoices.get(q.id),shown=inlineShown.has(q.id);
      return `<fieldset class="quiz-item" data-inline="${esc(q.id)}"><legend>${questionText(q)}</legend>${q.options.map((o,i)=>`<button type="button" class="answer-option ${chosen===i?'selected':''} ${shown&&i===q.answer?'correct':''} ${shown&&chosen===i&&i!==q.answer?'wrong':''}" data-inline-choice="${i}" aria-pressed="${chosen===i}" ${shown?'disabled':''}><span>${'abcd'[i]})</span> ${esc(o)}</button>`).join('')}<button type="button" class="secondary" data-inline-check="${esc(q.id)}" ${chosen===undefined||shown?'disabled':''}>Verifică răspunsul</button><div data-inline-feedback>${shown?feedbackHTML(q,chosen):''}</div></fieldset>`;
    }).join('')}</div><div class="audio-actions"><button type="button" class="primary" data-inline-finish="${a.article}">Corectează articolul</button><button type="button" class="secondary" data-inline-reset="${a.article}">Reia itemii articolului</button><button type="button" class="secondary" data-control-open>Deschide seriile de 60 de minute</button></div></details>`;
  }
  function bindInline(){
    document.querySelectorAll('[data-inline]').forEach(item=>{
      const q=BANK.find(x=>x.id===item.dataset.inline);
      item.querySelectorAll('[data-inline-choice]').forEach(button=>button.onclick=()=>{
        if(inlineShown.has(q.id))return;
        const chosen=Number(button.dataset.inlineChoice);inlineChoices.set(q.id,chosen);
        item.querySelectorAll('[data-inline-choice]').forEach(b=>{const yes=Number(b.dataset.inlineChoice)===chosen;b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes));});
        item.querySelector('[data-inline-check]').disabled=false;
      });
      item.querySelector('[data-inline-check]').onclick=()=>{
        if(!inlineChoices.has(q.id))return;
        inlineShown.add(q.id);showInline(item,q);
      };
    });
    function showInline(item,q){
      const chosen=inlineChoices.get(q.id);
      item.querySelectorAll('[data-inline-choice]').forEach(b=>{const n=Number(b.dataset.inlineChoice);b.disabled=true;b.classList.toggle('correct',n===q.answer);b.classList.toggle('wrong',chosen===n&&n!==q.answer);});
      item.querySelector('[data-inline-feedback]').innerHTML=feedbackHTML(q,chosen);
      item.querySelector('[data-inline-check]').disabled=true;
    }
    document.querySelectorAll('[data-inline-finish]').forEach(button=>button.onclick=()=>{
      const a=DATA.articles.find(x=>x.article===button.dataset.inlineFinish);
      quizFor(a).forEach(q=>{inlineShown.add(q.id);const item=document.querySelector(`[data-inline="${q.id}"]`);if(item)showInline(item,q);});
    });
    document.querySelectorAll('[data-inline-reset]').forEach(button=>button.onclick=()=>{
      const a=DATA.articles.find(x=>x.article===button.dataset.inlineReset);
      quizFor(a).forEach(q=>{inlineChoices.delete(q.id);inlineShown.delete(q.id);});
      const box=button.closest('.article-quiz');const holder=document.createElement('div');holder.innerHTML=quizHTML(a);holder.firstElementChild.open=true;box.replaceWith(holder.firstElementChild);bindInline();
    });
    document.querySelectorAll('[data-control-open]').forEach(b=>b.onclick=()=>controlView());
  }
  function scopeItems(scope){
    if(scope==='all')return BANK;
    const m=DATA.modules.find(m=>m.id===Number(scope));
    return BANK.filter(q=>q.articleNumber>=m.startArticle&&q.articleNumber<=m.endArticle);
  }
  function seriesFor(scope='all',size=30){
    const pool=scopeItems(scope),chunks=[];
    for(let i=0;i<pool.length;i+=size)chunks.push(pool.slice(i,i+size));
    return chunks;
  }
  function clearSessionTimer(){clearInterval(sessionTick);sessionTick=null;}
  function elapsedSession(){return session?Math.min(3600000,(session.endedAt??performance.now())-session.startedAt):0;}
  function syncSessionClock(){
    if(!session||session.finished)return;
    const elapsed=elapsedSession(),label=document.getElementById('controlRemaining');
    if(label)label.textContent=timeText((3600000-elapsed)/1000);
    if(elapsed>=3600000)finishSession(true);
  }
  function startSession(items,mode='final',settings={}){
    clearSessionTimer();session={items:[...items],answers:{},shown:new Set(),index:0,mode,settings,startedAt:performance.now(),endedAt:null,finished:false,timedOut:false};
    sessionTick=setInterval(syncSessionClock,500);renderSession();window.scrollTo?.({top:0});
  }
  function controlView(){
    view='control';stop();nav();
    if(session){if(session.finished)renderResults();else renderSession();return;}
    renderSetup();window.scrollTo?.({top:0});
  }
  function renderSetup(){
    view='control';stop();nav();
    main.innerHTML=`<section class="page-head"><p class="eyebrow">ÎNVĂȚARE ȘI AUTOVERIFICARE</p><h1>Grilă de control</h1><p class="lead">${BANK.length} de itemi pentru articolele 1–251, articolul 108¹ și anexa cu definiții.</p><p>Câte un item pentru fiecare grup de maximum 8 puncte dintr-un articol. Alineatele și punctele enumerărilor sunt numărate în ordinea textului; notele editoriale nu intră în numărătoare.</p></section>
    <section class="control-setup"><h2>Alege cum lucrezi</h2><div class="control-fields"><label>Domeniul<select id="controlScope"><option value="all">Toată legea și anexa</option>${DATA.modules.map(m=>`<option value="${m.id}">${m.id}. ${esc(m.title)} · ${esc(m.articles)}</option>`).join('')}</select></label><label>Dimensiunea seriei<select id="controlSize"><option value="30">30 de itemi · 60 de minute</option><option value="20">20 de itemi · 60 de minute</option><option value="all">Grila completă din domeniul ales · 60 de minute</option></select></label><label>Seria<select id="controlSeries"></select></label></div>
    <fieldset class="control-mode"><legend>Când vrei să vezi răspunsurile corecte?</legend><label><input type="radio" name="controlMode" value="final" checked> La final</label><label><input type="radio" name="controlMode" value="immediate"> După fiecare răspuns</label></fieldset>
    <p>Și în modul „La final” poți apăsa <strong>Verifică acest răspuns</strong> la un item asupra căruia ai dubii. Itemul verificat se blochează pentru această parcurgere.</p><p id="controlSeriesInfo"></p><button type="button" id="controlStart" class="primary">Începe seria</button><p class="source-note">Formulările corecte sunt extrase din materialul integral al platformei: ${esc(DATA.sourceVersion)}. Seriile parcurse în ordine acoperă întreaga bancă. Răspunsurile nu sunt salvate după închiderea sau reîncărcarea paginii.</p></section>`;
    const scope=document.getElementById('controlScope'),size=document.getElementById('controlSize'),series=document.getElementById('controlSeries');
    function update(){
      const n=size.value==='all'?scopeItems(scope.value).length:Number(size.value),groups=seriesFor(scope.value,n||1);
      series.innerHTML=groups.map((group,i)=>`<option value="${i}">Seria ${i+1} · ${group.length} itemi · ${group[0].article==='Anexă'?'anexa':'art. '+group[0].article} – ${group.at(-1).article==='Anexă'?'anexa':'art. '+group.at(-1).article}</option>`).join('');
      document.getElementById('controlSeriesInfo').textContent=`${scopeItems(scope.value).length} de itemi în ${groups.length} ${groups.length===1?'serie':'serii'}. Timp maxim pentru o parcurgere: 60 de minute.`;
    }
    scope.onchange=update;size.onchange=update;update();
    document.getElementById('controlStart').onclick=()=>{
      const n=size.value==='all'?scopeItems(scope.value).length:Number(size.value),groups=seriesFor(scope.value,n||1),number=Number(series.value);
      const mode=document.querySelector('input[name="controlMode"]:checked').value;
      startSession(groups[number],mode,{scope:scope.value,size:n,series:number});
    };
  }
  function chooseAnswer(option){
    if(!session||session.finished)return;
    if(elapsedSession()>=3600000){finishSession(true);return;}
    const q=session.items[session.index];if(session.shown.has(q.id))return;
    session.answers[q.id]=option;
    if(session.mode==='immediate')session.shown.add(q.id);
    renderSession();
  }
  function revealCurrent(){
    const q=session.items[session.index];if(session.answers[q.id]===undefined)return;
    session.shown.add(q.id);renderSession();
  }
  function renderSession(){
    view='control';nav();
    if(session.finished){renderResults();return;}
    if(elapsedSession()>=3600000){finishSession(true);return;}
    const q=session.items[session.index],chosen=session.answers[q.id],shown=session.shown.has(q.id),answered=Object.keys(session.answers).length;
    main.innerHTML=`<section class="control-top"><div><strong>Grilă de control · ${session.index+1}/${session.items.length}</strong><span>${answered} ${answered===1?'răspuns completat':'răspunsuri completate'} · ${session.mode==='immediate'?'verificare imediată':'corectare la final'}</span></div><div class="control-clock">Timp rămas <strong id="controlRemaining">${timeText((3600000-elapsedSession())/1000)}</strong></div></section>
    <section class="control-question"><p class="eyebrow">${esc(q.source)} · grupa ${q.block}</p><h1 class="control-prompt">${questionText(q)}</h1><div role="group" aria-label="Variante de răspuns">${q.options.map((o,i)=>`<button type="button" class="answer-option ${i===chosen?'selected':''} ${shown&&i===q.answer?'correct':''} ${shown&&chosen===i&&i!==q.answer?'wrong':''}" data-control-answer="${i}" aria-pressed="${chosen===i}" ${shown?'disabled':''}><span>${'abcd'[i]})</span> ${esc(o)}</button>`).join('')}</div>
    <div aria-live="polite">${shown?feedbackHTML(q,chosen):chosen===undefined?'<p>Alege o variantă. Poți reveni asupra ei înainte de verificare.</p>':'<p>Răspuns înregistrat pentru această parcurgere.</p>'}</div>
    <div class="control-actions"><button type="button" class="secondary" id="controlPrev" ${session.index===0?'disabled':''}>← Înapoi</button><button type="button" class="secondary" id="controlReveal" ${chosen===undefined||shown?'disabled':''}>Verifică acest răspuns</button><button type="button" class="primary" id="controlNext" ${session.index===session.items.length-1?'disabled':''}>Următorul →</button></div>
    <details class="control-map"><summary>Grila răspunsurilor · ${answered}/${session.items.length}</summary><div>${session.items.map((x,i)=>`<button type="button" data-control-jump="${i}" class="${i===session.index?'current':''} ${session.answers[x.id]!==undefined?'filled':''}" aria-label="Itemul ${i+1}${session.answers[x.id]===undefined?', fără răspuns':', completat'}">${i+1}</button>`).join('')}</div></details><button type="button" class="control-finish" id="controlFinish">Finalizează și vezi rezultatul${answered<session.items.length?` · ${session.items.length-answered} fără răspuns`:''}</button></section>`;
    document.querySelectorAll('[data-control-answer]').forEach(b=>b.onclick=()=>chooseAnswer(Number(b.dataset.controlAnswer)));
    document.getElementById('controlPrev').onclick=()=>{if(session.index>0){session.index--;renderSession();window.scrollTo?.({top:0});}};
    document.getElementById('controlNext').onclick=()=>{if(session.index<session.items.length-1){session.index++;renderSession();window.scrollTo?.({top:0});}};
    document.getElementById('controlReveal').onclick=revealCurrent;
    document.getElementById('controlFinish').onclick=()=>finishSession(false);
    document.querySelectorAll('[data-control-jump]').forEach(b=>b.onclick=()=>{session.index=Number(b.dataset.controlJump);renderSession();window.scrollTo?.({top:0});});
  }
  function finishSession(timedOut=false){
    if(!session||session.finished)return;
    session.endedAt=timedOut?session.startedAt+3600000:performance.now();session.finished=true;session.timedOut=timedOut;clearSessionTimer();
    if(view==='control')renderResults();
  }
  function sessionStats(){
    const total=session.items.length,correct=session.items.filter(q=>session.answers[q.id]===q.answer).length,answered=Object.keys(session.answers).length;
    return {total,correct,wrong:answered-correct,unanswered:total-answered};
  }
  function renderResults(){
    view='control';nav();window.scrollTo?.({top:0});const stats=sessionStats(),wrongItems=session.items.filter(q=>session.answers[q.id]!==q.answer),settings=session.settings;
    const groups=settings.scope?seriesFor(settings.scope,settings.size):[],hasNext=groups.length>settings.series+1;
    main.innerHTML=`<section class="page-head"><p class="eyebrow">REZULTATUL PARCURGERII</p><h1>${stats.correct} din ${stats.total} răspunsuri corecte</h1><p>${stats.wrong} greșite · ${stats.unanswered} fără răspuns · ${Math.round(stats.correct/stats.total*100)}% corecte</p><p><strong>Timp total: ${timeText(elapsedSession()/1000)}</strong>${session.timedOut?' · Cele 60 de minute s-au încheiat.':''}</p><div class="control-actions"><button type="button" class="primary" id="controlRetryWrong" ${wrongItems.length?'':'disabled'}>Reia greșelile și itemii necompletați (${wrongItems.length})</button><button type="button" class="secondary" id="controlRetryAll">Reia aceeași serie</button>${hasNext?'<button type="button" class="primary" id="controlNextSeries">Seria următoare →</button>':''}<button type="button" class="secondary" id="controlNew">Alege altă serie</button></div></section>
    <section class="control-review"><h2>Răspunsurile și pasajele din material</h2><label class="control-review-filter"><input type="checkbox" id="controlOnlyWrong"> Arată numai greșelile și itemii fără răspuns</label>${session.items.map((q,i)=>{
      const chosen=session.answers[q.id],good=chosen===q.answer;
      return `<details class="control-result ${good?'result-good':'result-wrong'}" data-result-good="${good}"><summary>${i+1}. ${esc(q.source)} · ${chosen===undefined?'Fără răspuns':good?'Corect':'Greșit'}</summary><div><p>${questionText(q)}</p><p>Răspunsul tău: <strong>${chosen===undefined?'necompletat':esc('abcd'[chosen]+') '+q.options[chosen])}</strong></p>${feedbackHTML(q,chosen)}<button type="button" class="secondary" data-result-article="${q.article==='Anexă'?'251':q.article}">Deschide articolul integral</button></div></details>`;
    }).join('')}</section>`;
    document.getElementById('controlRetryWrong').onclick=()=>startSession(wrongItems,session.mode,{});
    document.getElementById('controlRetryAll').onclick=()=>startSession(session.items,session.mode,session.settings);
    if(hasNext)document.getElementById('controlNextSeries').onclick=()=>startSession(groups[settings.series+1],session.mode,{...settings,series:settings.series+1});
    document.getElementById('controlNew').onclick=()=>{clearSessionTimer();session=null;renderSetup();};
    document.getElementById('controlOnlyWrong').onchange=e=>document.querySelectorAll('[data-result-good]').forEach(d=>d.hidden=e.target.checked&&d.dataset.resultGood==='true');
    document.querySelectorAll('[data-result-article]').forEach(b=>b.onclick=()=>openArticle(b.dataset.resultArticle));
  }
  // Expose a small read-only testing surface; answers remain in memory only.
  window.LEGE_CONTROL_APP={controlView,seriesFor,startSession,chooseAnswer,revealCurrent,finishSession,sessionStats,getSession:()=>session,inlineChoices,inlineShown,quizFor};

  function card(a, open=false){ const m=modFor(a.articleNumber); return `<details class="article-card" data-article="${a.article}" ${open?"open":""}><summary><span>Articolul ${esc(a.article)}</span><small>${esc(m?.title||"")}</small></summary><div class="article-body"><div class="audio-actions"><button class="primary" data-play="${a.article}">▶ Ascultă articolul</button><button class="secondary" data-stop="${a.article}" hidden>■ Oprește</button>${voiceOptions()}<button class="secondary" data-copy="${a.article}">Copiază textul</button></div><div class="legal-text">${paras(a.legalText)}</div>${quizHTML(a)}</div></details>`; }
  function bindCards(){
    document.querySelectorAll("[data-voice-select]").forEach(s=>s.onchange=()=>{selectedVoice=s.value;localStorage.setItem("lege198-voice",selectedVoice);document.querySelectorAll("[data-voice-select]").forEach(x=>x.value=selectedVoice);stop();toastMsg("Vocea a fost schimbată.");});
    document.querySelectorAll("[data-play]").forEach(b=>b.onclick=()=>{ const a=DATA.articles.find(x=>x.article===b.dataset.play); stop(); continuousAudio=true; playArticle(a); });
    document.querySelectorAll("[data-stop]").forEach(b=>b.onclick=stop);
    document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{const a=DATA.articles.find(x=>x.article===b.dataset.copy);await navigator.clipboard.writeText(`Articolul ${a.article}\n${a.legalText}`);toastMsg("Textul articolului a fost copiat.");});
    bindInline();
  }
  function home(){
    view="home";stop();main.innerHTML=`<section class="hero"><p class="eyebrow">FORMA DIN DOCUMENTUL FURNIZAT</p><h1>Legea nr. 198/2023<br><span>a învățământului preuniversitar</span></h1><p class="lead">Text integral extras din documentul consolidat, cu articolele 1-251 și articolul 108¹. Căutați orice termen, număr de articol sau expresie.</p><div class="search-wrap"><label for="lawSearch">Căutare în lege</label><div class="search-row"><input id="lawSearch" type="search" placeholder="Ex.: director, norma didactică, art. 207"><button id="searchButton" class="primary">Caută</button></div></div><p class="source-note">${esc(DATA.documentNotice)}</p></section><section class="quick-grid"><button class="quick-card" data-control-open><strong>Grilă de control</strong><span>Toate articolele · serii de 60 de minute</span></button><button class="quick-card" data-go="contents"><strong>20 de module</strong><span>Deschide cuprinsul complet</span></button><button class="quick-card" data-open="1"><strong>Articolul 1</strong><span>Începe lectura legii</span></button><button class="quick-card" data-open="207"><strong>Articolul 207</strong><span>Norma didactică</span></button></section><section id="results" class="results" aria-live="polite"></section>`;
    document.getElementById("searchButton").onclick=search;document.getElementById("lawSearch").onkeydown=e=>{if(e.key==="Enter")search();};document.querySelector("[data-go]").onclick=contents;document.querySelectorAll("[data-control-open]").forEach(b=>b.onclick=controlView);document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openArticle(b.dataset.open));nav();
  }
  function search(){
    const input=document.getElementById("lawSearch"),term=input.value.trim(),out=document.getElementById("results");if(term.length<2){out.innerHTML='<p class="empty">Introduceți cel puțin două caractere.</p>';return;}
    const simple=norm(term).replace(/^art(?:icolul)?\.?\s*/,"").replace("^1","¹"), exact=/^\d+¹?$/.test(simple);
    const found=DATA.articles.filter(a=>exact?a.article===simple:norm(`Articolul ${a.article} ${a.legalText}`).includes(norm(term)));
    out.innerHTML=`<div class="results-head"><h2>${found.length} rezultate</h2><p>pentru „${esc(term)}”</p></div>${found.slice(0,80).map(a=>card(a)).join("")}${found.length>80?'<p class="empty">Sunt afișate primele 80 de rezultate. Restrângeți căutarea.</p>':""}`;bindCards();out.scrollIntoView({behavior:"smooth"});}
  function contents(){
    view="contents";stop();main.innerHTML=`<section class="page-head"><p class="eyebrow">CUPRINS</p><h1>Structura legii</h1><p>Selectați un modul pentru a vedea articolele.</p></section><section class="module-grid">${DATA.modules.map(m=>`<button class="module-card" data-module="${m.id}"><span class="module-number">${String(m.id).padStart(2,"0")}</span><strong>${esc(m.title)}</strong><small>${esc(m.articles)}</small></button>`).join("")}</section><section id="moduleArticles" class="module-articles"></section>`;document.querySelectorAll("[data-module]").forEach(b=>b.onclick=()=>moduleView(Number(b.dataset.module)));nav();}
  function moduleView(id,target=null){const m=DATA.modules.find(x=>x.id===id),arr=DATA.articles.filter(a=>a.articleNumber>=m.startArticle&&a.articleNumber<=m.endArticle),out=document.getElementById("moduleArticles");out.innerHTML=`<div class="module-heading"><p>MODULUL ${id}</p><h2>${esc(m.title)}</h2><span>${esc(m.articles)}</span></div>${arr.map(a=>card(a,a.article===String(target))).join("")}`;bindCards();(target?document.querySelector(`[data-article="${target}"]`):out).scrollIntoView({behavior:"smooth",block:"start"});}
  function openArticle(n){const a=DATA.articles.find(x=>x.article===String(n))||DATA.articles.find(x=>x.articleNumber===Number(n));if(!a)return;contents();moduleView(modFor(a.articleNumber).id,a.article);}
  document.querySelectorAll(".nav-button").forEach(b=>b.onclick=()=>b.dataset.view==="contents"?contents():b.dataset.view==="control"?controlView():home());document.getElementById("homeButton").onclick=home;window.addEventListener("beforeunload",stop);home();
})();

