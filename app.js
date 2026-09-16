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
  function stop(){ if("speechSynthesis" in window) speechSynthesis.cancel(); document.querySelectorAll("[data-stop]").forEach(b=>b.hidden=true); document.querySelectorAll("[data-play]").forEach(b=>b.hidden=false); }
  function romanianVoices(){ return speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith("ro")); }
  function friendlyVoice(){ const voices=romanianVoices(),wanted=["ioana","alina","cristina","female","natural"]; return voices.find(v=>v.name===selectedVoice)||voices.find(v=>wanted.some(n=>v.name.toLowerCase().includes(n)))||voices[0]||null; }
  function voiceOptions(){ const voices=romanianVoices(); return voices.length?`<label class="voice-choice">Voce <select data-voice-select>${voices.map(v=>`<option value="${esc(v.name)}" ${v.name===(selectedVoice||friendlyVoice()?.name)?"selected":""}>${esc(v.name)}</option>`).join("")}</select></label>`:""; }
  function excerpts(a){
    const parts=a.legalText.replace(/\s+/g," ").split(/(?<=[.;!?])\s+(?=(?:\([0-9]+\)|[a-zșț]\)|[A-ZĂÂÎȘȚ]))/).map(x=>x.replace(/^\([0-9]+\)\s*/,"").trim()).filter(x=>x.length>=45);
    if(parts.length>=3)return parts.slice(0,3).map(x=>x.length>240?x.slice(0,237)+"...":x);
    const text=a.legalText.replace(/\s+/g," ").trim(),size=Math.ceil(text.length/3);
    return [0,1,2].map(i=>text.slice(i*size,(i+1)*size).trim()).filter(Boolean).map(x=>x.length>240?x.slice(0,237)+"...":x);
  }
  function mutations(text){
    const swaps=[["Ministerul Educației","autoritățile administrației publice locale"],["ministrului educației","directorului unității de învățământ"],["consiliului de administrație","consiliului profesoral"],["consiliul de administrație","consiliul profesoral"],["hotărâre a Guvernului","ordin al ministrului educației"],["ordin al ministrului educației","hotărâre a Guvernului"],["majoritatea","unanimitatea"],["obligatoriu","facultativ"],["gratuit","contra cost"],["poate","trebuie să"],["pot","trebuie să"],["se aprobă","se avizează"],["se avizează","se aprobă"],["județene","naționale"],["național","județean"]];
    const result=[];for(const [from,to] of swaps)if(text.includes(from)){const v=text.replace(from,to);if(v!==text&&!result.includes(v))result.push(v);}
    const number=text.match(/\b(\d+)\b/);if(number){const n=Number(number[1]);for(const d of [1,2,-1]){const v=text.replace(number[0],String(Math.max(1,n+d)));if(v!==text&&!result.includes(v))result.push(v);}}
    if(/\bse\s+[a-zăâîșț]+/i.test(text))result.push(text.replace(/\bse\s+/i,"nu se "));if(/\beste\b/i.test(text))result.push(text.replace(/\beste\b/i,"nu este"));if(/\bsunt\b/i.test(text))result.push(text.replace(/\bsunt\b/i,"nu sunt"));
    const fallbacks=[`${text} Numai cu aprobarea prealabilă a Ministerului Educației.`,`${text} Prevederea se aplică exclusiv unităților de învățământ particular.`,`${text} Aplicarea este facultativă.`];
    for(const v of fallbacks)if(result.length<3&&!result.includes(v))result.push(v);return result.slice(0,3);
  }
  function sortedQuestion(prompt,options,correctText,source){const unique=[...new Set(options)].slice(0,4).sort((x,y)=>x.localeCompare(y,"ro",{sensitivity:"base"}));return{prompt,options:unique,correct:unique.indexOf(correctText),source};}
  function quizFor(a){
    const own=excerpts(a),first=own[0],second=own[1]||first,third=own[2]||second;
    const falseSecond=mutations(second)[0],falseThird=mutations(third)[1]||mutations(third)[0];
    const statements=`I. ${first}\nII. ${falseSecond}\nIII. ${third}`;
    const comboOptions=["Afirmațiile I și II","Afirmațiile I și III","Afirmațiile II și III","Toate cele trei afirmații"];
    const q1=sortedQuestion(`Analizați afirmațiile următoare prin raportare la art. ${a.article}:\n${statements}\nCare combinație este corectă?`,comboOptions,"Afirmațiile I și III",`I și III reproduc textul art. ${a.article}; afirmația II modifică o condiție legală.`);
    const scenarioLead=["În cadrul unei ședințe a consiliului de administrație,","La verificarea legalității unei decizii manageriale,","În soluționarea unei situații-problemă din unitatea de învățământ,"][a.articleNumber%3];
    const q2=sortedQuestion(`${scenarioLead} directorul invocă art. ${a.article}. Care dintre următoarele soluții respectă întocmai prevederea legală?`,[first,...mutations(first)],first,first);
    const assertion=`AFIRMAȚIE: ${second}`;
    const reason=`MOTIVARE: ${falseThird}`;
    const arOptions=["Afirmația este adevărată, iar motivarea este falsă","Afirmația este falsă, iar motivarea este adevărată","Afirmația și motivarea sunt adevărate, iar motivarea explică afirmația","Afirmația și motivarea sunt adevărate, dar motivarea nu explică afirmația"];
    const q3=sortedQuestion(`Raportându-vă la art. ${a.article}, analizați enunțurile:\n${assertion}\n${reason}`,arOptions,"Afirmația este adevărată, iar motivarea este falsă",`Afirmația reproduce prevederea legală. Motivarea schimbă un element al textului art. ${a.article}.`);
    return [q1,q2,q3];
  }
  function quizHTML(a){return `<details class="article-quiz"><summary>Antrenament pentru concurs: 3 itemi</summary><div class="quiz-list">${quizFor(a).map((q,qi)=>`<fieldset class="quiz-item" data-quiz="${a.article}-${qi}" data-correct="${q.correct}" data-source="${esc(q.source)}"><legend>${qi+1}. ${esc(q.prompt)}</legend>${q.options.map((o,oi)=>`<button type="button" class="answer-option" data-answer="${oi}"><span>${"abcd"[oi]})</span> ${esc(o)}</button>`).join("")}<div class="answer-feedback" aria-live="polite"></div></fieldset>`).join("")}</div></details>`;}
  function card(a, open=false){ const m=modFor(a.articleNumber); return `<details class="article-card" data-article="${a.article}" ${open?"open":""}><summary><span>Articolul ${esc(a.article)}</span><small>${esc(m?.title||"")}</small></summary><div class="article-body"><div class="audio-actions"><button class="primary" data-play="${a.article}">▶ Ascultă articolul</button><button class="secondary" data-stop="${a.article}" hidden>■ Oprește</button>${voiceOptions()}<button class="secondary" data-copy="${a.article}">Copiază textul</button></div><div class="legal-text">${paras(a.legalText)}</div>${quizHTML(a)}</div></details>`; }
  function bindCards(){
    document.querySelectorAll("[data-voice-select]").forEach(s=>s.onchange=()=>{selectedVoice=s.value;localStorage.setItem("lege198-voice",selectedVoice);document.querySelectorAll("[data-voice-select]").forEach(x=>x.value=selectedVoice);stop();toastMsg("Vocea a fost schimbată.");});
    document.querySelectorAll("[data-play]").forEach(b=>b.onclick=()=>{ const a=DATA.articles.find(x=>x.article===b.dataset.play); if(!("speechSynthesis" in window)){toastMsg("Redarea audio nu este disponibilă.");return;} stop(); const u=new SpeechSynthesisUtterance(`Articolul ${a.article}. ${a.legalText}`); u.lang="ro-RO";u.rate=.88;u.pitch=1.04;u.voice=friendlyVoice();u.onend=stop;u.onerror=stop;speechSynthesis.speak(u);b.hidden=true;document.querySelector(`[data-stop="${a.article}"]`).hidden=false;});
    document.querySelectorAll("[data-stop]").forEach(b=>b.onclick=stop);
    document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{const a=DATA.articles.find(x=>x.article===b.dataset.copy);await navigator.clipboard.writeText(`Articolul ${a.article}\n${a.legalText}`);toastMsg("Textul articolului a fost copiat.");});
    document.querySelectorAll(".quiz-item").forEach(item=>item.querySelectorAll("[data-answer]").forEach(button=>button.onclick=()=>{
      if(item.dataset.done)return;
      item.dataset.done="1";
      const chosen=Number(button.dataset.answer),correct=Number(item.dataset.correct),buttons=[...item.querySelectorAll("[data-answer]")];
      buttons.forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add("correct");});
      if(chosen!==correct)button.classList.add("wrong");
      const feedback=item.querySelector(".answer-feedback"),letter="abcd"[correct];
      feedback.className=`answer-feedback ${chosen===correct?"success":"retry"}`;
      feedback.innerHTML=(chosen===correct?`Corect! Răspunsul este <strong>${letter})</strong>.`:`Nu este corect. Răspunsul corect este <strong>${letter})</strong>.`)+`<small>Formularea din lege: ${esc(item.dataset.source)}</small>`;
    }));
  }
  function home(){
    view="home";stop();main.innerHTML=`<section class="hero"><p class="eyebrow">FORMA DIN DOCUMENTUL FURNIZAT</p><h1>Legea nr. 198/2023<br><span>a învățământului preuniversitar</span></h1><p class="lead">Text integral extras din documentul consolidat, cu articolele 1-251 și articolul 108¹. Căutați orice termen, număr de articol sau expresie.</p><div class="search-wrap"><label for="lawSearch">Căutare în lege</label><div class="search-row"><input id="lawSearch" type="search" placeholder="Ex.: director, norma didactică, art. 207"><button id="searchButton" class="primary">Caută</button></div></div><p class="source-note">${esc(DATA.documentNotice)}</p></section><section class="quick-grid"><button class="quick-card" data-go="contents"><strong>20 de module</strong><span>Deschide cuprinsul complet</span></button><button class="quick-card" data-open="1"><strong>Articolul 1</strong><span>Începe lectura legii</span></button><button class="quick-card" data-open="207"><strong>Articolul 207</strong><span>Norma didactică</span></button></section><section id="results" class="results" aria-live="polite"></section>`;
    document.getElementById("searchButton").onclick=search;document.getElementById("lawSearch").onkeydown=e=>{if(e.key==="Enter")search();};document.querySelector("[data-go]").onclick=contents;document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openArticle(b.dataset.open));nav();
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
  document.querySelectorAll(".nav-button").forEach(b=>b.onclick=()=>b.dataset.view==="contents"?contents():home());document.getElementById("homeButton").onclick=home;window.addEventListener("beforeunload",stop);home();
})();
