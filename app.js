"use strict";
(() => {
  const DATA = window.LEGE_DATA;
  DATA.articles = window.LEGE_ARTICLES;
  const main = document.getElementById("main");
  const toast = document.getElementById("toast");
  let view = "home";
  document.getElementById("sourceVersion").textContent = `Sursă: ${DATA.source}; ${DATA.sourceVersion}.`;
  const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const paras = (t) => t.split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join("");
  const modFor = (n) => DATA.modules.find(m => n >= m.startArticle && n <= m.endArticle);
  const norm = (v) => v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  function nav(){ document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("active", b.dataset.view === view)); }
  function toastMsg(t){ toast.textContent=t; toast.classList.add("show"); clearTimeout(toastMsg.t); toastMsg.t=setTimeout(()=>toast.classList.remove("show"),2400); }
  function stop(){ if("speechSynthesis" in window) speechSynthesis.cancel(); document.querySelectorAll("[data-stop]").forEach(b=>b.hidden=true); document.querySelectorAll("[data-play]").forEach(b=>b.hidden=false); }
  function card(a, open=false){ const m=modFor(a.articleNumber); return `<details class="article-card" data-article="${a.article}" ${open?"open":""}><summary><span>Articolul ${esc(a.article)}</span><small>${esc(m?.title||"")}</small></summary><div class="article-body"><div class="audio-actions"><button class="primary" data-play="${a.article}">▶ Ascultă articolul</button><button class="secondary" data-stop="${a.article}" hidden>■ Oprește</button><button class="secondary" data-copy="${a.article}">Copiază textul</button></div><div class="legal-text">${paras(a.legalText)}</div></div></details>`; }
  function bindCards(){
    document.querySelectorAll("[data-play]").forEach(b=>b.onclick=()=>{ const a=DATA.articles.find(x=>x.article===b.dataset.play); if(!("speechSynthesis" in window)){toastMsg("Redarea audio nu este disponibilă.");return;} stop(); const u=new SpeechSynthesisUtterance(`Articolul ${a.article}. ${a.legalText}`); u.lang="ro-RO";u.rate=.92;u.voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("ro"))||null;u.onend=stop;u.onerror=stop;speechSynthesis.speak(u);b.hidden=true;document.querySelector(`[data-stop="${a.article}"]`).hidden=false;});
    document.querySelectorAll("[data-stop]").forEach(b=>b.onclick=stop);
    document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{const a=DATA.articles.find(x=>x.article===b.dataset.copy);await navigator.clipboard.writeText(`Articolul ${a.article}\n${a.legalText}`);toastMsg("Textul articolului a fost copiat.");});
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
