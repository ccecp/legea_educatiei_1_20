"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const LESSONS = DATA.lessons;
  const MODULES = DATA.modules || [{
    id: 1,
    title: DATA.module.title,
    articles: DATA.module.articles,
    chapter: "Capitolul I",
    startArticle: 1,
    endArticle: 11
  }];
  const STORAGE_KEY = "legea-198-site-complet-progres-v1";

  const LAW_STRUCTURE = [
    {
      roman: "I",
      title: "Organizarea sistemului de învățământ preuniversitar",
      articles: "Art. 1–148",
      modules: [
        [1, "Dispoziții generale. Principii și valori", "Art. 1–11", true],
        [2, "Formele de organizare", "Art. 12–18", true],
        [3, "Rețeaua școlară", "Art. 19–29", true],
        [4, "Organizarea unităților · partea I", "Art. 30–44", true],
        [5, "Organizarea unităților · partea a II-a", "Art. 45–57", true],
        [6, "Organizarea unităților · partea a III-a", "Art. 58–66", true],
        [7, "Educația incluzivă", "Art. 67–84", true],
        [8, "Curriculumul național", "Art. 85–94", true],
        [9, "Evaluările și bacalaureatul", "Art. 95–104", true],
        [10, "Drepturi, obligații, sancțiuni, burse și excelență", "Art. 105–114", true],
        [11, "Conducerea sistemului și a unităților", "Art. 115–133", true],
        [12, "Finanțarea, baza materială și contravențiile", "Art. 134–148", true]
      ]
    },
    {
      roman: "II",
      title: "Învățarea pe tot parcursul vieții",
      articles: "Art. 149–161",
      modules: [[13, "Învățarea pe tot parcursul vieții", "Art. 149–161", true]]
    },
    {
      roman: "III",
      title: "Statutul și cariera personalului didactic",
      articles: "Art. 162–229",
      modules: [
        [14, "Personalul didactic și formarea inițială", "Art. 162–175", true],
        [15, "Ocuparea funcțiilor, formarea continuă și mobilitatea", "Art. 176–191", true],
        [16, "Personalul auxiliar și funcțiile de conducere", "Art. 192–206", true],
        [17, "Norma și răspunderea disciplinară", "Art. 207–216", true],
        [18, "Drepturi, obligații, distincții și pensionare", "Art. 217–229", true]
      ]
    },
    {
      roman: "IV",
      title: "Asigurarea calității",
      articles: "Art. 230–247",
      modules: [[19, "Asigurarea internă și evaluarea externă a calității", "Art. 230–247", true]]
    },
    {
      roman: "V",
      title: "Dispoziții tranzitorii și finale",
      articles: "Art. 248–251",
      modules: [[20, "Dispoziții tranzitorii și finale", "Art. 248–251", true]]
    }
  ];

  const main = document.getElementById("main");
  const toast = document.getElementById("toast");
  const nav = document.getElementById("mainNav");
  const menuButton = document.getElementById("menuButton");

  const emptyProgress = () => ({
    listened: Array(LESSONS.length).fill(false),
    completed: Array(LESSONS.length).fill(false),
    mistakes: {},
    bestExams: {}
  });

  function normalizeProgress(saved) {
    const fresh = emptyProgress();
    if (!saved || typeof saved !== "object") return fresh;
    fresh.listened = Array.from({ length: LESSONS.length }, (_, index) => Boolean(saved.listened?.[index]));
    fresh.completed = Array.from({ length: LESSONS.length }, (_, index) => Boolean(saved.completed?.[index]));
    fresh.mistakes = saved.mistakes && typeof saved.mistakes === "object" ? saved.mistakes : {};
    fresh.bestExams = saved.bestExams && typeof saved.bestExams === "object" ? saved.bestExams : {};
    if (Number.isFinite(saved.bestExam) && fresh.bestExams[1] === undefined) fresh.bestExams[1] = saved.bestExam;
    return fresh;
  }

  function loadProgress() {
    try {
      return normalizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {
      return emptyProgress();
    }
  }

  function moduleForArticle(article) {
    return MODULES.find((module) => article >= module.startArticle && article <= module.endArticle) || MODULES[0];
  }

  function lessonIndicesForModule(moduleId) {
    const module = MODULES.find((item) => item.id === moduleId) || MODULES[0];
    return LESSONS.map((lesson, index) => ({ lesson, index }))
      .filter(({ lesson }) => lesson.article >= module.startArticle && lesson.article <= module.endArticle)
      .map(({ index }) => index);
  }

  function lessonsForModule(moduleId) {
    return lessonIndicesForModule(moduleId).map((index) => LESSONS[index]);
  }

  function firstGlobalIncompleteIndex() {
    const index = progress.completed.findIndex((done) => !done);
    return index === -1 ? LESSONS.length - 1 : index;
  }

  let progress = loadProgress();
  const startingLesson = LESSONS[firstGlobalIncompleteIndex()] || LESSONS[0];
  let activeModuleId = moduleForArticle(startingLesson.article).id;
  let view = "home";
  let lessonIndex = firstGlobalIncompleteIndex();
  let lessonAnswers = [null, null, null];
  let lessonChecked = false;
  let examAnswers = [];
  let examChecked = false;
  let searchTerm = "";
  let audioSpeed = 1;
  let audioActive = false;
  let audioPaused = false;
  let audioSegments = [];
  let audioProgress = 0;
  let audioRunId = 0;
  let audioFailed = false;
  const audioSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  function activeModule() {
    return MODULES.find((module) => module.id === activeModuleId) || MODULES[0];
  }

  function moduleQuestionCount(moduleId) {
    return lessonsForModule(moduleId).reduce((sum, lesson) => sum + lesson.questions.length, 0);
  }

  function resetExamState() {
    examAnswers = Array(moduleQuestionCount(activeModuleId)).fill(null);
    examChecked = false;
  }

  resetExamState();

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function paragraphs(value, className = "") {
    return value.split(/\n\s*\n/).filter(Boolean)
      .map((paragraph) => `<p${className ? ` class="${className}"` : ""}>${escapeHTML(paragraph)}</p>`)
      .join("");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function stopAudio() {
    if (audioSupported) window.speechSynthesis.cancel();
    audioRunId += 1;
    audioActive = false;
    audioPaused = false;
    audioProgress = 0;
  }

  function moduleCompletedCount(moduleId) {
    return lessonIndicesForModule(moduleId).filter((index) => progress.completed[index]).length;
  }

  function moduleListenedCount(moduleId) {
    return lessonIndicesForModule(moduleId).filter((index) => progress.listened[index]).length;
  }

  function moduleReady(moduleId) {
    const indices = lessonIndicesForModule(moduleId);
    return indices.length > 0 && indices.every((index) => progress.completed[index]);
  }

  function firstIncompleteIndex(moduleId) {
    const indices = lessonIndicesForModule(moduleId);
    return indices.find((index) => !progress.completed[index]) ?? indices[indices.length - 1] ?? 0;
  }

  function isUnlocked(index) {
    return index === 0 || progress.completed[index - 1];
  }

  function setActiveNav() {
    document.querySelectorAll(".nav-button").forEach((button) => {
      const target = button.dataset.view;
      const active = target === view || (view === "lesson" && target === "home");
      button.classList.toggle("active", active);
    });
  }

  function closeMenu() {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function goView(nextView) {
    stopAudio();
    view = nextView;
    lessonChecked = false;
    lessonAnswers = [null, null, null];
    if (nextView === "exam") resetExamState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  }

  function selectModule(moduleId) {
    if (!MODULES.some((module) => module.id === moduleId)) return;
    activeModuleId = moduleId;
    resetExamState();
    goView("home");
  }

  function openLesson(index) {
    if (!isUnlocked(index)) {
      showToast("Finalizați articolul anterior cu 3/3 pentru a continua.");
      return;
    }
    stopAudio();
    lessonIndex = index;
    activeModuleId = moduleForArticle(LESSONS[index].article).id;
    lessonAnswers = [null, null, null];
    lessonChecked = false;
    audioFailed = false;
    view = "lesson";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  }

  function renderModuleSelector() {
    return `<section class="section">
      <div class="section-head"><div><p class="eyebrow muted">Module disponibile</p><h2>Alegeți etapa de studiu</h2></div></div>
      <div class="module-list">${MODULES.map((module) => {
        const done = moduleCompletedCount(module.id);
        const total = lessonIndicesForModule(module.id).length;
        const unlocked = isUnlocked(lessonIndicesForModule(module.id)[0]);
        return `<button class="module-row ${module.id === activeModuleId ? "active" : ""}" data-module="${module.id}">
          <span class="module-number">${module.id}</span>
          <span><strong>${escapeHTML(module.title)}</strong><small>Art. ${module.articles} · ${done}/${total} finalizate</small></span>
          <span class="module-status ${moduleReady(module.id) ? "active" : ""}">${moduleReady(module.id) ? "finalizat" : unlocked ? "activ" : "blocat"}</span>
        </button>`;
      }).join("")}</div>
    </section>`;
  }

  function renderHome() {
    const module = activeModule();
    const legalLocation = module.chapter.startsWith("Titlul ") ? module.chapter : `Titlul I · ${module.chapter}`;
    const indices = lessonIndicesForModule(module.id);
    const done = moduleCompletedCount(module.id);
    const percent = Math.round((done / indices.length) * 100);
    const continueIndex = firstIncompleteIndex(module.id);
    const questionCount = moduleQuestionCount(module.id);
    const allQuestions = LESSONS.reduce((sum, lesson) => sum + lesson.questions.length, 0);

    return `<div class="page">
      <section class="hero">
        <p class="eyebrow">Pregătire pentru concursul de directori · Legea nr. 198/2023</p>
        <h1>Învățați legea<br>clar, audio și etapizat.</h1>
        <p class="lead">Sunt active toate cele ${MODULES.length} de module, de la articolul 1 la articolul ${LESSONS[LESSONS.length - 1].article}. Fiecare articol are explicație audio, text legal, repere de memorare și 3 întrebări.</p>
        <div class="hero-actions">
          <button class="primary" data-open-lesson="${continueIndex}">${done === 0 ? `Încep Modulul ${module.id}` : moduleReady(module.id) ? `Recapitulez art. ${module.endArticle}` : `Continui cu art. ${LESSONS[continueIndex].article}`} →</button>
          <button class="ghost" data-view="structure">Văd cuprinsul complet</button>
          <span class="save-note">Progresul se salvează automat pe acest dispozitiv.</span>
        </div>
        <div class="stats">
          <div class="stat"><strong>${LESSONS.length}</strong><span>articole active</span></div>
          <div class="stat"><strong>${allQuestions}</strong><span>întrebări disponibile</span></div>
          <div class="stat"><strong>251</strong><span>de articole la final</span></div>
        </div>
      </section>

      <section class="method-strip" aria-label="Metoda de studiu">
        <div class="method-step"><b>01</b><span>Ascult explicația</span></div><span class="method-arrow">→</span>
        <div class="method-step"><b>02</b><span>Citesc esențialul</span></div><span class="method-arrow">→</span>
        <div class="method-step"><b>03</b><span>Răspund la 3 întrebări</span></div><span class="method-arrow">→</span>
        <div class="method-step"><b>04</b><span>Deblochez articolul următor</span></div>
      </section>

      <section class="section search-panel">
        <label for="lawSearch">Caut în articolele disponibile</label>
        <input id="lawSearch" type="search" value="${escapeHTML(searchTerm)}" placeholder="Exemplu: contract educațional, transfer, art. 16">
        <div id="searchResults" class="search-results">${renderSearchResults(searchTerm)}</div>
      </section>

      ${renderModuleSelector()}

      <section class="section" id="active-module">
        <div class="section-head">
          <div>
            <p class="eyebrow">${escapeHTML(legalLocation)} · Modulul ${module.id}</p>
            <h2>${escapeHTML(module.title)}</h2>
            <p>${indices.length} minilecții audio și exact ${questionCount} de întrebări.</p>
          </div>
          <div class="progress-summary">
            <strong>${done}/${indices.length} articole · ${percent}%</strong>
            <div class="progress-track" aria-label="Progres ${percent}%"><span style="width:${percent}%"></span></div>
          </div>
        </div>
        <div class="card-grid">${indices.map((index) => renderLessonCard(LESSONS[index], index)).join("")}</div>
      </section>

      <section class="section ${moduleReady(module.id) ? "" : "exam-lock"}">
        <p class="eyebrow">Recapitulare · Modulul ${module.id}</p>
        <h2>Testul modulului · ${questionCount} de întrebări</h2>
        <p>${moduleReady(module.id) ? "Ați deblocat testul. Toate întrebările provin din materialele audio ale modulului." : `Testul se activează după finalizarea celor ${indices.length} articole. Mai aveți ${indices.length - done}.`}</p>
        <button class="${moduleReady(module.id) ? "primary" : "ghost"}" data-view="exam" ${moduleReady(module.id) ? "" : "disabled"}>${moduleReady(module.id) ? "Încep testul modulului →" : "Test încă blocat"}</button>
      </section>
    </div>`;
  }

  function renderLessonCard(lesson, index) {
    const unlocked = isUnlocked(index);
    const done = progress.completed[index];
    return `<button class="lesson-card ${done ? "done" : ""} ${unlocked ? "" : "locked"}" data-open-lesson="${index}" ${unlocked ? "" : "disabled"}>
      <span class="number">${lesson.article}</span>
      <div class="card-top">
        <span class="article-pill">ART. ${lesson.article}</span>
        <span class="status-pill ${done ? "done" : ""}">${done ? "✓ finalizat" : unlocked ? "disponibil" : "blocat"}</span>
      </div>
      <h3>${escapeHTML(lesson.title)}</h3>
      <p>${escapeHTML(lesson.focus)}</p>
      <footer><span>◉ ${escapeHTML(lesson.duration)} audio</span><span>3 întrebări</span></footer>
    </button>`;
  }

  function renderSearchResults(term) {
    const query = term.trim().toLocaleLowerCase("ro");
    if (!query) return "";
    const matches = LESSONS.map((lesson, index) => ({ lesson, index })).filter(({ lesson }) => {
      const haystack = `articolul ${lesson.article} art. ${lesson.article} ${lesson.title} ${lesson.focus} ${lesson.narration}`.toLocaleLowerCase("ro");
      return haystack.includes(query);
    }).slice(0, 8);
    if (!matches.length) return `<p>Nu am găsit termenul în articolele 1–${LESSONS[LESSONS.length - 1].article}.</p>`;
    return matches.map(({ lesson, index }) => `<button class="search-result" data-open-lesson="${index}">
      <span><strong>Art. ${lesson.article}</strong> · ${escapeHTML(lesson.title)}</span>
      <span>${isUnlocked(index) ? "Deschid →" : "Blocat"}</span>
    </button>`).join("");
  }

  function renderStructure() {
    return `<div class="page">
      <p class="eyebrow">Harta completă a proiectului</p>
      <h1>5 titluri.<br>20 de module.</h1>
      <p class="lead">Toate cele ${MODULES.length} de module sunt active. Legea este parcursă integral, fără schimbarea structurii și fără pierderea progresului salvat.</p>
      <section class="section law-map">${LAW_STRUCTURE.map(renderTitleGroup).join("")}</section>
    </div>`;
  }

  function renderTitleGroup(title) {
    return `<article class="title-group">
      <div class="title-group-head">
        <div><p class="eyebrow">Titlul ${title.roman}</p><h2>${escapeHTML(title.title)}</h2><p>${title.articles}</p></div>
        <span class="module-status">${title.modules.length} ${title.modules.length === 1 ? "modul" : "module"}</span>
      </div>
      <div class="module-list">${title.modules.map((module) => {
        const [number, name, articles, available] = module;
        const tag = available ? "button" : "div";
        return `<${tag} class="module-row ${available ? "active" : ""}" ${available ? `data-module="${number}"` : ""}>
          <span class="module-number">${number}</span>
          <span><strong>${escapeHTML(name)}</strong><small>${articles}</small></span>
          <span class="module-status ${available ? "active" : ""}">${available ? "activ" : "în pregătire"}</span>
        </${tag}>`;
      }).join("")}</div>
    </article>`;
  }

  function renderLesson() {
    const lesson = LESSONS[lessonIndex];
    const module = moduleForArticle(lesson.article);
    const moduleIndices = lessonIndicesForModule(module.id);
    const position = moduleIndices.indexOf(lessonIndex) + 1;
    const listened = progress.listened[lessonIndex];
    const score = lessonChecked ? lessonAnswers.reduce((sum, answer, index) => sum + Number(answer === lesson.questions[index].correct), 0) : 0;

    return `<div class="page">
      <div class="breadcrumb"><button data-module="${module.id}">Modulul ${module.id}</button><span>›</span><strong>Articolul ${lesson.article}</strong></div>
      <div class="lesson-header">
        <div><p class="eyebrow">Minilecția ${position} din ${moduleIndices.length}</p><h1>Art. ${lesson.article}. ${escapeHTML(lesson.title)}</h1><p>${escapeHTML(lesson.focus)}</p></div>
        <span class="duration-badge">◉ ${escapeHTML(lesson.duration)}</span>
      </div>

      <section class="audio-card">
        <div class="audio-heading">
          <div class="audio-icon" aria-hidden="true">♪</div>
          <div><span>Material audio</span><strong>Ascultați explicația articolului ${lesson.article}</strong></div>
          ${listened ? '<span class="listened-badge">✓ ascultat</span>' : ""}
        </div>
        <div class="player-row">
          <button class="round-control" data-audio="toggle" ${audioSupported ? "" : "disabled"} aria-label="${audioActive && !audioPaused ? "Pauză" : "Redare"}">${audioActive && !audioPaused ? "Ⅱ" : "▶"}</button>
          <div>
            <div class="player-track"><i id="audioProgress" style="width:${audioProgress}%"></i></div>
            <div class="player-meta"><span id="audioPercent">${Math.round(audioProgress)}%</span><span>${escapeHTML(lesson.duration)}</span></div>
          </div>
          <button class="small-control" data-audio="stop" ${audioActive ? "" : "disabled"}>Oprire</button>
        </div>
        <div class="speed-row"><span>Viteză:</span>${[0.85, 1, 1.2, 1.5].map((speed) => `<button class="${audioSpeed === speed ? "active" : ""}" data-speed="${speed}">${speed}×</button>`).join("")}</div>
        ${audioSupported && !audioFailed ? "" : '<div class="audio-fallback">Vocea nu este disponibilă în acest browser. Citiți transcrierea, apoi <button data-mark-listened="true">marcați materialul ca parcurs</button>.</div>'}
      </section>

      <details class="transcript"><summary>Deschid transcrierea materialului audio</summary><div class="transcript-body">${paragraphs(lesson.narration)}</div></details>

      <details class="legal-panel">
        <summary>Deschid textul legal și reperele articolului ${lesson.article}</summary>
        <div class="legal-text">${escapeHTML(lesson.legalText)}</div>
        <span class="source-badge">${escapeHTML(DATA.sourceVersion)}</span>
      </details>

      <section class="remember-panel">
        <span class="remember-label">De reținut</span>
        <div>${lesson.remember.map((item, index) => `<p><b>${index + 1}</b><span>${escapeHTML(item)}</span></p>`).join("")}</div>
      </section>

      <section class="quiz-wrap" id="lesson-test">
        <div class="quiz-heading">
          <div><p class="eyebrow muted">Verificare imediată</p><h2>3 întrebări din materialul audio</h2><p>Pentru articolul următor aveți nevoie de 3 răspunsuri corecte.</p></div>
          <span class="quiz-count">3/3</span>
        </div>
        ${listened ? renderLessonQuestions(lesson, score) : `<div class="quiz-card quiz-locked"><div class="lock-icon">♪</div><h3>Testul se activează după ascultarea materialului audio.</h3><p>Porniți redarea și ascultați explicația până la final.</p></div>`}
      </section>
    </div>`;
  }

  function renderLessonQuestions(lesson, score) {
    const isLastAvailable = lessonIndex === LESSONS.length - 1;
    const module = moduleForArticle(lesson.article);
    const endOfModule = lesson.article === module.endArticle;
    const successMessage = isLastAvailable
      ? `Ați finalizat Modulul ${module.id} și ați deblocat testul lui final.`
      : endOfModule
        ? `Ați finalizat Modulul ${module.id}. Urmează articolul ${LESSONS[lessonIndex + 1].article}.`
        : `Ați deblocat articolul ${LESSONS[lessonIndex + 1].article}.`;
    return `<div class="questions-stack">${lesson.questions.map((question, questionIndex) => renderQuestion(question, questionIndex, "lesson", lessonAnswers[questionIndex], lessonChecked)).join("")}</div>
      ${lessonChecked ? `<div id="lessonResult" class="result-card ${score === 3 ? "success" : "retry"}">
        <div class="score-badge">${score}/3</div>
        <div><h3>${score === 3 ? "Articol însușit. Bravo!" : "Mai fixăm o dată articolul."}</h3><p>${score === 3 ? successMessage : "Citiți explicațiile, apoi reluați cele trei întrebări."}</p></div>
        <button class="primary" data-action="${score === 3 ? "next-lesson" : "retry-lesson"}">${score === 3 ? (isLastAvailable ? "Revin la modul" : "Articolul următor →") : "Reiau întrebările"}</button>
      </div>` : '<button class="primary quiz-submit" data-action="check-lesson">Verific răspunsurile →</button>'}`;
  }

  function renderQuestion(question, questionIndex, kind, selected, checked, article = null) {
    return `<article class="question-card">
      <div class="question-number">${questionIndex + 1}</div>
      <div class="question-content">
        ${article ? `<span class="article-reference">ART. ${article}</span>` : ""}
        <h3>${escapeHTML(question.prompt)}</h3>
        <div class="options-list">${question.options.map((option, optionIndex) => {
          const correct = checked && optionIndex === question.correct;
          const wrong = checked && selected === optionIndex && optionIndex !== question.correct;
          return `<button class="option ${selected === optionIndex ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" data-option-kind="${kind}" data-question="${questionIndex}" data-option="${optionIndex}" ${checked ? "disabled" : ""}>
            <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${escapeHTML(option)}</span>
          </button>`;
        }).join("")}</div>
        ${checked ? `<div class="feedback ${selected === question.correct ? "" : "wrong"}"><strong>${selected === question.correct ? "Corect." : "De revăzut."}</strong> ${escapeHTML(question.explanation)}</div>` : ""}
      </div>
    </article>`;
  }

  function flattenedQuestions(moduleId) {
    return lessonsForModule(moduleId).flatMap((lesson) => lesson.questions.map((question) => ({ ...question, article: lesson.article })));
  }

  function renderExam() {
    const module = activeModule();
    const indices = lessonIndicesForModule(module.id);
    const total = moduleQuestionCount(module.id);
    if (!moduleReady(module.id)) {
      return `<div class="page"><div class="exam-lock"><p class="eyebrow">Test · Modulul ${module.id}</p><h1>Mai întâi finalizăm articolele ${module.articles}.</h1><p>Aveți ${moduleCompletedCount(module.id)}/${indices.length} articole finalizate. Testul de ${total} de întrebări se deblochează după ce obțineți 3/3 la fiecare minilecție.</p><button class="primary" data-open-lesson="${firstIncompleteIndex(module.id)}">Continui studiul →</button></div></div>`;
    }
    const questions = flattenedQuestions(module.id);
    const answered = examAnswers.filter((answer) => answer !== null).length;
    const score = examChecked ? examAnswers.reduce((sum, answer, index) => sum + Number(answer === questions[index].correct), 0) : 0;
    const percentScore = total ? score / total : 0;
    const best = Math.max(Number(progress.bestExams[module.id] || 0), score);
    return `<div class="page">
      <p class="eyebrow">Recapitulare completă · Modulul ${module.id}</p>
      <h1>Testul modulului.<br>${total} de întrebări.</h1>
      <p class="lead">Toți itemii provin din cele ${indices.length} materiale audio, articolele ${module.articles}.</p>
      <div class="exam-status">
        <div class="exam-status-row"><strong>${answered}/${total} răspunsuri</strong><span>${Math.round((answered / total) * 100)}%</span></div>
        <div class="progress-track"><span style="width:${Math.round((answered / total) * 100)}%"></span></div>
      </div>
      ${examChecked ? `<div class="exam-result"><strong>${score}/${total}</strong><div><h2>${percentScore >= 0.9 ? "Nivel foarte bun" : percentScore >= 0.75 ? "Bază solidă" : "Mai este nevoie de recapitulare"}</h2><span>Cel mai bun rezultat: ${best}/${total}</span></div><button class="primary" data-action="retry-exam">Reiau testul</button></div>` : ""}
      <div class="questions-stack">${questions.map((question, index) => renderQuestion(question, index, "exam", examAnswers[index], examChecked, question.article)).join("")}</div>
      ${examChecked ? "" : '<button class="primary quiz-submit" data-action="submit-exam">Finalizez testul →</button>'}
    </div>`;
  }

  function renderProgress() {
    const done = progress.completed.filter(Boolean).length;
    const listened = progress.listened.filter(Boolean).length;
    const percent = Math.round((done / LESSONS.length) * 100);
    const mistakes = Object.entries(progress.mistakes).sort((a, b) => b[1] - a[1]).slice(0, 8);
    return `<div class="page">
      <p class="eyebrow">Progres personal</p>
      <h1>Învățarea dumneavoastră,<br>la vedere.</h1>
      <div class="progress-grid">
        <article class="progress-card"><span class="big">${done}/${LESSONS.length}</span><h3>Articole finalizate</h3><p>Un articol este finalizat numai după scorul 3/3.</p></article>
        <article class="progress-card"><span class="big">${listened}/${LESSONS.length}</span><h3>Materiale ascultate</h3><p>Ascultarea completă activează testul articolului.</p></article>
        <article class="progress-card"><span class="big">${percent}%</span><h3>Conținut activ parcurs</h3><div class="progress-track"><span style="width:${percent}%"></span></div></article>
        <article class="progress-card"><span class="big">${Object.values(progress.bestExams).filter((score) => Number(score) > 0).length}/${MODULES.length}</span><h3>Teste de modul începute</h3><p>Rezultatele cele mai bune sunt păstrate automat.</p></article>
      </div>

      <section class="section">
        <div class="section-head"><div><p class="eyebrow muted">Situația pe module</p><h2>Toate cele ${MODULES.length} de etape</h2></div></div>
        <div class="module-list">${MODULES.map((module) => {
          const total = lessonIndicesForModule(module.id).length;
          const completed = moduleCompletedCount(module.id);
          const questions = moduleQuestionCount(module.id);
          return `<button class="module-row ${moduleReady(module.id) ? "active" : ""}" data-module="${module.id}">
            <span class="module-number">${module.id}</span>
            <span><strong>${escapeHTML(module.title)}</strong><small>${completed}/${total} articole · test maxim ${Number(progress.bestExams[module.id] || 0)}/${questions}</small></span>
            <span class="module-status ${moduleReady(module.id) ? "active" : ""}">${moduleReady(module.id) ? "finalizat" : "în lucru"}</span>
          </button>`;
        }).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head"><div><p class="eyebrow muted">Revenire inteligentă</p><h2>Întrebări de revăzut</h2></div></div>
        ${mistakes.length ? `<ul class="mistake-list">${mistakes.map(([key, count]) => {
          const [article, question] = key.split("|");
          return `<li><span><strong>Art. ${article}</strong> · ${escapeHTML(question)}</span><span>${count} ${count === 1 ? "eroare" : "erori"}</span></li>`;
        }).join("")}</ul>` : '<div class="empty"><h3>Nu există încă răspunsuri greșite salvate.</h3><p>Pe măsură ce lucrați, aici vor apărea temele pe care merită să le reluați.</p></div>'}
      </section>
      <div class="hero-actions">
        <button class="primary" data-open-lesson="${firstGlobalIncompleteIndex()}">Continui studiul →</button>
        <button class="danger" data-action="reset-progress">Șterg progresul de pe acest dispozitiv</button>
      </div>
    </div>`;
  }

  function render() {
    setActiveNav();
    if (view === "home") main.innerHTML = renderHome();
    else if (view === "structure") main.innerHTML = renderStructure();
    else if (view === "lesson") main.innerHTML = renderLesson();
    else if (view === "exam") main.innerHTML = renderExam();
    else if (view === "progress") main.innerHTML = renderProgress();
  }

  function updateAudioUI() {
    const track = document.getElementById("audioProgress");
    const label = document.getElementById("audioPercent");
    if (track) track.style.width = `${audioProgress}%`;
    if (label) label.textContent = `${Math.round(audioProgress)}%`;
  }

  function chooseRomanianVoice() {
    const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("ro"));
    return voices.find((voice) => /ioana|alina|andreea|female|feminin/i.test(voice.name)) || voices[0] || null;
  }

  function speakSegment(index, runId) {
    if (!audioSupported || runId !== audioRunId || view !== "lesson") return;
    if (index >= audioSegments.length) {
      audioActive = false;
      audioPaused = false;
      audioProgress = 100;
      progress.listened[lessonIndex] = true;
      saveProgress();
      render();
      showToast("Material audio parcurs. Testul este acum activ.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(audioSegments[index]);
    utterance.lang = "ro-RO";
    utterance.rate = audioSpeed;
    utterance.pitch = 1;
    const voice = chooseRomanianVoice();
    if (voice) utterance.voice = voice;
    utterance.onboundary = (event) => {
      if (runId !== audioRunId) return;
      const segmentShare = 100 / audioSegments.length;
      const inside = Math.min(1, event.charIndex / Math.max(1, audioSegments[index].length));
      audioProgress = Math.min(99, index * segmentShare + inside * segmentShare);
      updateAudioUI();
    };
    utterance.onend = () => speakSegment(index + 1, runId);
    utterance.onerror = () => {
      if (runId !== audioRunId) return;
      audioActive = false;
      audioPaused = false;
      audioFailed = true;
      showToast("Vocea nu este disponibilă. Puteți folosi transcrierea.");
      render();
    };
    window.speechSynthesis.speak(utterance);
  }

  function toggleAudio() {
    if (!audioSupported) return;
    if (audioActive && !audioPaused) {
      window.speechSynthesis.pause();
      audioPaused = true;
      render();
      return;
    }
    if (audioActive && audioPaused) {
      window.speechSynthesis.resume();
      audioPaused = false;
      render();
      return;
    }
    window.speechSynthesis.cancel();
    audioFailed = false;
    audioRunId += 1;
    audioSegments = LESSONS[lessonIndex].narration.split(/\n\s*\n/).filter(Boolean);
    audioProgress = 0;
    audioActive = true;
    audioPaused = false;
    const runId = audioRunId;
    render();
    speakSegment(0, runId);
  }

  function setLessonOption(questionIndex, optionIndex) {
    if (lessonChecked) return;
    lessonAnswers[questionIndex] = optionIndex;
    render();
    document.getElementById("lesson-test")?.scrollIntoView({ block: "start" });
  }

  function checkLesson() {
    if (lessonAnswers.some((answer) => answer === null)) {
      showToast("Răspundeți la toate cele trei întrebări.");
      return;
    }
    const lesson = LESSONS[lessonIndex];
    const score = lessonAnswers.reduce((sum, answer, index) => sum + Number(answer === lesson.questions[index].correct), 0);
    lesson.questions.forEach((question, index) => {
      if (lessonAnswers[index] !== question.correct) {
        const key = `${lesson.article}|${question.prompt}`;
        progress.mistakes[key] = (progress.mistakes[key] || 0) + 1;
      }
    });
    if (score === 3) progress.completed[lessonIndex] = true;
    lessonChecked = true;
    saveProgress();
    render();
    window.setTimeout(() => document.getElementById("lessonResult")?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }

  function setExamOption(questionIndex, optionIndex) {
    if (examChecked) return;
    examAnswers[questionIndex] = optionIndex;
    render();
    document.querySelectorAll(".question-card")[questionIndex]?.scrollIntoView({ block: "center" });
  }

  function submitExam() {
    if (examAnswers.some((answer) => answer === null)) {
      showToast(`Mai sunt ${examAnswers.filter((answer) => answer === null).length} întrebări fără răspuns.`);
      return;
    }
    const questions = flattenedQuestions(activeModuleId);
    const score = examAnswers.reduce((sum, answer, index) => sum + Number(answer === questions[index].correct), 0);
    questions.forEach((question, index) => {
      if (examAnswers[index] !== question.correct) {
        const key = `${question.article}|${question.prompt}`;
        progress.mistakes[key] = (progress.mistakes[key] || 0) + 1;
      }
    });
    progress.bestExams[activeModuleId] = Math.max(Number(progress.bestExams[activeModuleId] || 0), score);
    examChecked = true;
    saveProgress();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.id === "menuButton") {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      return;
    }
    if (target.dataset.module) {
      selectModule(Number(target.dataset.module));
      return;
    }
    if (target.dataset.view) {
      goView(target.dataset.view);
      return;
    }
    if (target.dataset.openLesson !== undefined) {
      openLesson(Number(target.dataset.openLesson));
      return;
    }
    if (target.dataset.audio === "toggle") {
      toggleAudio();
      return;
    }
    if (target.dataset.audio === "stop") {
      stopAudio();
      render();
      return;
    }
    if (target.dataset.speed) {
      audioSpeed = Number(target.dataset.speed);
      if (audioActive) {
        stopAudio();
        showToast("Viteza a fost schimbată. Porniți din nou redarea.");
      }
      render();
      return;
    }
    if (target.dataset.markListened) {
      progress.listened[lessonIndex] = true;
      saveProgress();
      render();
      return;
    }
    if (target.dataset.optionKind === "lesson") {
      setLessonOption(Number(target.dataset.question), Number(target.dataset.option));
      return;
    }
    if (target.dataset.optionKind === "exam") {
      setExamOption(Number(target.dataset.question), Number(target.dataset.option));
      return;
    }
    const action = target.dataset.action;
    if (action === "check-lesson") checkLesson();
    else if (action === "retry-lesson") {
      lessonAnswers = [null, null, null];
      lessonChecked = false;
      render();
      document.getElementById("lesson-test")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "next-lesson") {
      if (lessonIndex < LESSONS.length - 1) openLesson(lessonIndex + 1);
      else goView("home");
    } else if (action === "submit-exam") submitExam();
    else if (action === "retry-exam") {
      resetExamState();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (action === "reset-progress") {
      if (window.confirm("Ștergeți tot progresul salvat pe acest dispozitiv?")) {
        progress = emptyProgress();
        saveProgress();
        activeModuleId = 1;
        resetExamState();
        goView("home");
        showToast("Progresul a fost șters.");
      }
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id !== "lawSearch") return;
    searchTerm = event.target.value;
    const results = document.getElementById("searchResults");
    if (results) results.innerHTML = renderSearchResults(searchTerm);
  });

  window.addEventListener("beforeunload", stopAudio);
  render();
})();
