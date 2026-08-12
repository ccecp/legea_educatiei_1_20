"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–104: verificare 12.08.2026";
  DATA.modules.push({
    id: 9,
    title: "Evaluările și bacalaureatul",
    articles: "95–104",
    chapter: "Capitolul VII",
    startArticle: 95,
    endArticle: 104
  });

  DATA.lessons.push(
    L(
      95,
      "Scopul evaluării și standardele naționale",
      "5 min",
      "orientare · optimizare · rezultate · standarde naționale · CNCE · CNITTD",
      "Articolul 95 deschide capitolul despre evaluare și răspunde la două întrebări: de ce evaluăm și pe ce bază evaluăm. Evaluarea nu are numai rolul de a produce o notă. Scopurile sale sunt orientarea și optimizarea procesului de predare-învățare, precum și sprijinirea elevului pentru a-și gestiona propriile rezultate ale învățării. Așadar, rezultatele trebuie folosite pentru reglarea predării, pentru alegerea intervențiilor potrivite și pentru asumarea progresului de către elev.\n\nToate evaluările se realizează pe baza standardelor naționale de evaluare, elaborate pentru fiecare disciplină, domeniu de studiu și modul de pregătire. Standardele oferă repere comune privind nivelul de performanță așteptat și reduc riscul ca elevii să fie evaluați după criterii complet diferite.\n\nPentru disciplinele din trunchiul comun din învățământul primar, gimnazial și liceal — filierele teoretică, vocațională și tehnologică — standardele sunt elaborate de Centrul Național pentru Curriculum și Evaluare, prescurtat CNCE. Pentru disciplinele, domeniile de studiu și modulele de pregătire din învățământul tehnologic care nu fac parte din trunchiul comun, standardele sunt realizate de Centrul Național de Învățământ Tehnologic și Tehnologic Dual, prescurtat CNITTD.\n\nFormula de memorare este: evaluarea orientează, optimizează și îl ajută pe elev să își gestioneze rezultatele; CNCE răspunde de trunchiul comun, iar CNITTD de componenta tehnologică din afara trunchiului comun.",
      [
        "Evaluarea orientează și optimizează predarea-învățarea și sprijină gestionarea propriilor rezultate.",
        "Toate evaluările se bazează pe standarde naționale de evaluare.",
        "CNCE elaborează standardele pentru trunchiul comun; CNITTD, pentru componenta tehnologică din afara trunchiului comun."
      ],
      [
        Q("Care este unul dintre scopurile evaluării prevăzute la art. 95?", ["Clasificarea definitivă a școlilor", "Orientarea și optimizarea procesului de predare-învățare", "Înlocuirea curriculumului național", "Eliminarea planurilor individualizate"], 1, "Articolul 95 indică orientarea și optimizarea predării-învățării, precum și gestionarea propriilor rezultate ale învățării."),
        Q("Pe ce bază trebuie realizate toate evaluările?", ["Pe criterii stabilite individual, fără repere comune", "Pe standardele naționale de evaluare", "Numai pe media clasei", "Exclusiv pe recomandările părinților"], 1, "Toate evaluările se realizează pe baza standardelor naționale pentru fiecare disciplină, domeniu și modul."),
        Q("Cine elaborează standardele pentru disciplinele tehnologice care nu sunt în trunchiul comun?", ["CNCE", "Consiliul local", "CNITTD", "Fiecare angajator separat"], 2, "Pentru componenta tehnologică din afara trunchiului comun, responsabilitatea aparține CNITTD.")
      ],
      "Art. 95 — Evaluarea urmărește orientarea și optimizarea predării-învățării și gestionarea propriilor rezultate. Toate evaluările se bazează pe standarde naționale. CNCE elaborează standardele pentru disciplinele din trunchiul comun, iar CNITTD pentru disciplinele, domeniile și modulele tehnologice care nu sunt în trunchiul comun."
    ),
    L(
      96,
      "Exprimarea rezultatelor și respectarea standardelor",
      "7 min",
      "calificative · note · rapoarte · inspecție · abatere disciplinară · evaluare continuă",
      "Articolul 96 stabilește cum se exprimă rezultatele evaluării și ce consecințe are nerespectarea standardelor. În clasa pregătitoare nu se acordă note sau calificative. În restul învățământului primar, rezultatele se exprimă prin patru calificative: foarte bine, bine, suficient și insuficient. În gimnaziu, liceu și postliceal se folosesc note de la 1 la 10.\n\nÎn cazul testelor standardizate aplicate în afara evaluărilor externe prevăzute de lege, rezultatele pot fi exprimate prin punctaje sau coduri specifice. Pentru clasa pregătitoare și clasa I se întocmesc rapoarte anuale de evaluare privind dezvoltarea fizică, socioemoțională și cognitivă, limbajul și comunicarea, precum și capacitățile și atitudinile de învățare.\n\nControlul modului în care cadrele didactice utilizează și respectă standardele naționale se realizează prin inspecția școlară. Evaluarea fără respectarea standardelor naționale sau a metodologiilor de evaluare constituie abatere disciplinară și se sancționează potrivit legii. Pentru un director, aceasta este o idee esențială: standardele și metodologia nu sunt recomandări facultative.\n\nÎn filiera teoretică, evaluarea continuă se desfășoară în spațiul școlar, prin instrumente de evaluare, cu accent pe caracterul formativ. În filierele tehnologice, ea se poate realiza atât în școală, cât și la angajatori sau la locurile de practică, prin probe practice. Competențele profesionale pot fi evaluate integral la angajator sau la locul de practică.\n\nFormula de memorare este: pregătitoare fără calificative; primar cu patru calificative; de la gimnaziu, note 1–10; standardele sunt controlate prin inspecție, iar în tehnologic evaluarea ajunge și la locul de practică.",
      [
        "În clasa pregătitoare nu se acordă note sau calificative; în restul primarului se folosesc 4 calificative.",
        "Nerespectarea standardelor ori metodologiilor de evaluare constituie abatere disciplinară.",
        "În filiera tehnologică, evaluarea poate avea loc și la angajatori/locurile de practică."
      ],
      [
        Q("Cum se exprimă rezultatele în clasa pregătitoare?", ["Prin note de la 1 la 10", "Prin calificative", "Nu se acordă note sau calificative", "Numai prin punctaje standardizate"], 2, "Art. 96 exceptează clasa pregătitoare de la acordarea notelor și calificativelor."),
        Q("Ce reprezintă evaluarea realizată fără respectarea standardelor sau metodologiilor?", ["O simplă recomandare de remediere", "Abatere disciplinară", "O competență exclusivă a consiliului elevilor", "Un motiv automat de anulare a anului școlar"], 1, "Legea califică această faptă drept abatere disciplinară."),
        Q("Unde pot fi evaluate integral competențele profesionale din filierele tehnologice?", ["Numai la minister", "Numai în sala de clasă", "La angajatori sau la locurile de practică", "Exclusiv în universități"], 2, "Art. 96 permite evaluarea integrală a competențelor profesionale la angajatori/locurile de practică.")
      ],
      "Art. 96 — În clasa pregătitoare nu se acordă note sau calificative; în restul primarului se folosesc calificative, iar în gimnaziu, liceu și postliceal note de la 1 la 10. Pot fi utilizate punctaje/coduri și rapoarte anuale. Respectarea standardelor este controlată prin inspecție, iar nerespectarea lor ori a metodologiilor constituie abatere disciplinară. Evaluarea tehnologică se poate desfășura și la angajatori/locurile de practică."
    ),
    L(
      97,
      "Standardizarea și banca de instrumente",
      "4 min",
      "niveluri de performanță · plan individual · bancă de instrumente · CNCE · metodologii",
      "Articolul 97 leagă evaluarea de intervenția pedagogică. Evaluarea bazată pe standardele naționale arată nivelurile de performanță ale competențelor specifice din programele școlare. Rezultatele nu rămân simple constatări; ele stau la baza planurilor individuale de învățare realizate de profesorul de la clasă.\n\nCNCE organizează Banca de instrumente de evaluare. Aceasta are funcție orientativă pentru procesul de evaluare și trebuie menținută și actualizată permanent. Termenul «orientativă» este important: banca oferă repere și instrumente, dar profesorul rămâne responsabil pentru alegerea și folosirea lor adecvată.\n\nCNCE elaborează metodologiile și standardele naționale de evaluare pentru fiecare nivel de învățământ și pentru fiecare disciplină, după caz. Metodologiile sunt aprobate prin ordin al ministrului educației. Ministerul, prin CNCE, asigură atât cadrul legal pentru standardizarea evaluării, cât și întregul proces de realizare și implementare a standardizării evaluărilor și examenelor naționale.\n\nFormula de memorare este: standarde — niveluri de performanță — plan individual; banca de instrumente are rol orientativ; CNCE elaborează și actualizează, ministrul aprobă metodologiile.",
      [
        "Rezultatele bazate pe standarde fundamentează planurile individuale de învățare.",
        "Banca de instrumente de evaluare are funcție orientativă și este actualizată permanent de CNCE.",
        "Metodologiile elaborate de CNCE se aprobă prin ordin al ministrului."
      ],
      [
        Q("Ce fundamentează evaluarea realizată pe baza standardelor naționale?", ["Planurile individuale de învățare", "Bugetul local", "Organigrama inspectoratului", "Planul de pază al școlii"], 0, "Nivelurile de performanță rezultate din evaluare stau la baza planurilor individuale de învățare."),
        Q("Ce funcție are Banca de instrumente de evaluare?", ["Funcție sancționatorie", "Funcție orientativă", "Funcție exclusiv financiară", "Funcție de acreditare"], 1, "Art. 97 precizează că banca are funcție orientativă pentru evaluare."),
        Q("Cum sunt aprobate metodologiile de evaluare elaborate de CNCE?", ["Prin ordin al ministrului educației", "Prin hotărârea fiecărui consiliu local", "Prin votul părinților", "Prin decizia exclusivă a profesorului"], 0, "Metodologiile se aprobă prin ordin al ministrului educației.")
      ],
      "Art. 97 — Evaluarea pe baza standardelor naționale fundamentează planurile individuale de învățare. CNCE organizează și actualizează Banca de instrumente de evaluare, cu funcție orientativă, elaborează metodologiile și standardele, iar metodologiile se aprobă prin ordin al ministrului. Ministerul, prin CNCE, asigură standardizarea evaluărilor și examenelor naționale."
    ),
    L(
      98,
      "Portofoliul educațional",
      "8 min",
      "documente · rezultate · recomandări · orientare · alfabetizare funcțională · platformă națională",
      "Articolul 98 definește portofoliul educațional ca o imagine documentată a parcursului elevului. El cuprinde certificări și rezultate la discipline, pe ani de studiu și niveluri de școlarizare, rezultate la evaluările naționale, recomandări pentru recuperarea pierderilor de învățare, produse ale activităților, diplome, certificate și alte înscrisuri obținute prin evaluarea competențelor dobândite în contexte formale, nonformale și informale.\n\nPortofoliul se utilizează de la debutul învățământului obligatoriu și pe tot parcursul învățământului preuniversitar. Informațiile sale pot arăta decalajele educaționale și pot fundamenta intervenții de sprijin. După finalizarea învățământului obligatoriu, el poate fi completat cu rezultate ale învățării pe tot parcursul vieții. Sunt incluse și rezultatele activităților desfășurate în unitățile de educație extrașcolară.\n\nLa finalul gimnaziului și al liceului, profesorul consilier școlar și dirigintele emit fiecare câte o recomandare pentru continuarea într-o formă de învățământ de nivel superior. Pentru absolventul de liceu poate exista și o recomandare de orientare vocațională către piața muncii. Recomandările sunt consultative, se emit potrivit metodologiei și se includ în portofoliu.\n\nPortofoliul este obligatoriu începând cu generația de preșcolari intrată în grupa mijlocie și generația de elevi intrată în clasa pregătitoare în anul școlar 2024–2025. Formatul și înscrierea datelor sunt stabilite prin metodologie. Pentru recomandările de orientare, legea prevede resurse pentru instrumentele de evaluare, licențierea consilierilor și formarea acestora.\n\nArticolul leagă portofoliul și de evaluarea periodică a alfabetizării funcționale. Evaluările se realizează printr-o platformă națională cu teste construite după standardele de alfabetizare funcțională și corelate cu profilul absolventului. Platforma este gestionată de CNCE, iar datele sunt publicate anual de Minister într-un raport.\n\nFormula de memorare este: portofoliul adună dovezi, identifică decalaje, susține orientarea și continuă pe tot parcursul educației.",
      [
        "Portofoliul reunește rezultate și dovezi din contexte formale, nonformale și informale.",
        "Recomandările consilierului școlar și dirigintelui sunt consultative și intră în portofoliu.",
        "Platforma de alfabetizare funcțională este gestionată de CNCE, iar Ministerul publică anual un raport."
      ],
      [
        Q("De când se utilizează portofoliul educațional?", ["Numai din clasa a IX-a", "De la debutul învățământului obligatoriu, pe tot parcursul preuniversitar", "Exclusiv după bacalaureat", "Numai în educația extrașcolară"], 1, "Portofoliul însoțește elevul de la debutul învățământului obligatoriu pe întreg parcursul preuniversitar."),
        Q("Ce caracter au recomandările emise la finalul gimnaziului și liceului?", ["Obligatoriu pentru alegerea școlii", "Consultativ", "Sancționatoriu", "Secret și inaccesibil elevului"], 1, "Recomandările au caracter consultativ și sunt incluse în portofoliul educațional."),
        Q("Cine gestionează platforma națională de alfabetizare funcțională?", ["CNCE", "Consiliul local", "Fiecare școală separat", "Operatorii economici"], 0, "Funcționarea și gestionarea platformei revin CNCE.")
      ],
      "Art. 98 — Portofoliul educațional cuprinde rezultate, certificări, recomandări, produse, diplome și alte dovezi ale competențelor dobândite formal, nonformal și informal. Se utilizează de la debutul învățământului obligatoriu, fundamentează intervențiile și orientarea și poate continua cu rezultate ale învățării pe tot parcursul vieții. Platforma națională de alfabetizare funcțională este gestionată de CNCE, iar Ministerul publică anual datele colectate."
    ),
    L(
      99,
      "Evaluările din parcursul școlar",
      "8 min",
      "grupa mare · pregătitoare · clasa I · clasele II IV VI · alfabetizare funcțională · plan individual",
      "Articolul 99 urmărește evaluarea copilului de la finalul grădiniței până la clasa a VI-a. La finalul grupei mari, cadrul didactic care a lucrat cu preșcolarii, împreună cu consilierul școlar, întocmește un raport descriptiv despre dezvoltarea fizică și formarea competențelor cognitive și socioemoționale ale copilului.\n\nLa finalul clasei pregătitoare și al clasei I, cadrul didactic responsabil întocmește, în colaborare cu profesorul consilier școlar pe secțiunea specifică, un raport descriptiv privind dezvoltarea fizică, socioemoțională și cognitivă. Raportul este centrat pe abilitățile de citit, scris și calcul matematic și se raportează la standardele naționale de evaluare.\n\nDacă elevul continuă gimnaziul în altă unitate, școala de proveniență transmite noii școli rapoartele descriptive și planurile individualizate de învățare, ca părți ale portofoliului educațional. Această transmitere susține continuitatea intervențiilor educaționale.\n\nLa finalul claselor a II-a, a IV-a și a VI-a, elevii susțin evaluări naționale scrise și obligatorii la limbă și comunicare, matematică și științe. Pentru elevii care studiază în limbile minorităților, proba de limbă și comunicare cuprinde și limba maternă. Evaluările includ itemi pentru alfabetizarea funcțională și au rol de monitorizare și reglare a calității învățării la nivel de sistem.\n\nRezultatele evaluărilor din clasele a II-a, a IV-a și a VI-a sunt înscrise în portofoliu și sunt folosite pentru planurile individualizate de învățare. Rezultatele evaluărilor sumative standardizate fundamentează planurile și constituie criteriu de evaluare a activității profesionale a profesorilor, potrivit metodologiei. Pentru evaluările naționale de monitorizare și prognoză, Ministerul, prin CNCE, realizează bănci de itemi standardizați.\n\nFormula de memorare este: rapoarte descriptive la grupa mare, pregătitoare și clasa I; evaluări naționale scrise la clasele a II-a, a IV-a și a VI-a; rezultatele merg în portofoliu și în planul individualizat.",
      [
        "La grupa mare, pregătitoare și clasa I se întocmesc rapoarte descriptive, cu participarea consilierului școlar.",
        "La finalul claselor a II-a, a IV-a și a VI-a au loc evaluări naționale scrise și obligatorii.",
        "Rezultatele intră în portofoliu și fundamentează planurile individualizate."
      ],
      [
        Q("La finalul căror clase se susțin evaluările naționale scrise prevăzute la art. 99?", ["I, III și V", "II, IV și VI", "IV, VIII și XII", "Pregătitoare, I și II"], 1, "Evaluările naționale scrise și obligatorii au loc la finalul claselor a II-a, a IV-a și a VI-a."),
        Q("Ce includ evaluările de la clasele a II-a, a IV-a și a VI-a?", ["Numai itemi de memorare", "Itemi pentru evaluarea alfabetizării funcționale", "Exclusiv probe sportive", "Numai interviuri cu părinții"], 1, "Articolul cere includerea itemilor pentru evaluarea nivelului de alfabetizare funcțională."),
        Q("La ce sunt folosite rezultatele acestor evaluări?", ["La eliminarea portofoliului", "La planurile individualizate și în portofoliul elevului", "Numai la stabilirea bugetului local", "Exclusiv la premierea școlilor"], 1, "Rezultatele fundamentează planurile individualizate și sunt trecute în portofoliul educațional.")
      ],
      "Art. 99 — La finalul grupei mari, clasei pregătitoare și clasei I se întocmesc rapoarte descriptive. La finalul claselor a II-a, a IV-a și a VI-a se susțin evaluări naționale scrise și obligatorii la limbă și comunicare, matematică și științe, cu itemi de alfabetizare funcțională. Rezultatele fundamentează planurile individualizate, intră în portofoliu și au rol reglator la nivel de sistem."
    ),
    L(
      100,
      "Finalizarea gimnaziului și orientarea",
      "3 min",
      "diplomă · foaie matricolă · portofoliu · consiliere vocațională · locuri la liceu",
      "Articolul 100 stabilește ce primește absolventul gimnaziului și cum este sprijinită trecerea la liceu. Absolvenții dobândesc diploma de absolvire și foaia matricolă. Aceste documente sunt parte a portofoliului educațional.\n\nContinuarea studiilor în învățământul liceal este susținută printr-un proces de consiliere vocațională și orientare școlară și profesională desfășurat pe tot parcursul ciclului gimnazial. Procesul nu trebuie redus la o activitate din clasa a VIII-a; el însoțește elevul în întregul gimnaziu și se desfășoară potrivit metodologiei aprobate prin ordin al ministrului.\n\nLegea introduce și o garanție de capacitate: numărul locurilor alocate pentru primul an al învățământului liceal trebuie să fie cel puțin egal cu numărul absolvenților clasei a VIII-a.\n\nFormula de memorare este: diplomă și foaie matricolă în portofoliu; consiliere pe tot gimnaziul; locuri la liceu cel puțin egale cu numărul absolvenților.",
      [
        "Absolventul gimnaziului primește diploma de absolvire și foaia matricolă.",
        "Consilierea vocațională și orientarea se desfășoară pe tot parcursul gimnaziului.",
        "Locurile din primul an de liceu sunt cel puțin egale cu numărul absolvenților clasei a VIII-a."
      ],
      [
        Q("Ce documente dobândește absolventul învățământului gimnazial?", ["Numai un certificat de competențe digitale", "Diploma de absolvire și foaia matricolă", "Diploma de bacalaureat", "Certificat de calificare nivel 4"], 1, "Diploma de absolvire și foaia matricolă fac parte din portofoliul educațional."),
        Q("Când se desfășoară consilierea vocațională și orientarea școlară?", ["Numai după Evaluarea Națională", "Pe tot parcursul ciclului gimnazial", "Exclusiv în clasa a V-a", "Numai la cererea liceului"], 1, "Procesul de consiliere și orientare se desfășoară pe întregul ciclu gimnazial."),
        Q("Cum trebuie să fie numărul locurilor pentru primul an de liceu?", ["Cel mult jumătate din numărul absolvenților", "Cel puțin egal cu numărul absolvenților clasei a VIII-a", "Stabilit fără legătură cu numărul absolvenților", "Egal cu numărul profesorilor"], 1, "Legea garantează cel puțin câte un loc pentru fiecare absolvent al clasei a VIII-a.")
      ],
      "Art. 100 — Absolvenții gimnaziului dobândesc diploma de absolvire și foaia matricolă, parte a portofoliului. Tranziția spre liceu este susținută prin consiliere vocațională și orientare pe tot parcursul gimnaziului, iar numărul locurilor din primul an de liceu este cel puțin egal cu numărul absolvenților clasei a VIII-a."
    ),
    L(
      101,
      "Evaluarea Națională și admiterea la liceu",
      "10 min",
      "probe · concurs de admitere · 50% · 10% · repartiție computerizată · aptitudini",
      "Articolul 101 reglementează Evaluarea Națională și noul mecanism de admitere la liceu. După gimnaziu, elevii susțin obligatoriu Evaluarea Națională. Probele sunt la limba și literatura română, matematică și, pentru elevii care au studiat gimnaziul într-o limbă a minorităților, limba maternă. Proba de limbă maternă poate fi susținută opțional și de elevii care au studiat-o în condițiile speciale prevăzute de lege.\n\nLiceele pot organiza concurs de admitere în clasa a IX-a pentru anumite specializări sau pentru toate, dar pentru maximum 50% din locurile primite prin planul de școlarizare, raportat la numărul formațiunilor de studiu. Concursul are loc după Evaluarea Națională. Până la 10% dintre locuri sunt ocupate prioritar, în baza rezultatelor la Evaluarea Națională și a opțiunilor, prin repartiție computerizată, de elevii cu dizabilități și sau cerințe educaționale speciale și de elevii de etnie romă. Locurile rămase după concurs și această repartizare se ocupă pe baza rezultatelor la Evaluarea Națională și a opțiunilor, prin repartiție computerizată.\n\nDacă, la o specializare, numărul celor înscriși la concurs este mai mic decât numărul locurilor scoase la concurs, liceul nu mai poate organiza concurs pentru acea specializare în anul școlar următor. Data concursului se stabilește prin ordinul privind calendarul Evaluării Naționale, repartizării și admiterii și se publică la începutul anului școlar.\n\nOrganizarea concursului și criteriile de admitere sunt stabilite prin hotărârea consiliului de administrație al liceului și se publică pe site la începutul anului școlar. Concursul cuprinde două probe la discipline aferente profilului sau specializării. Probele sunt standardizate și unice la nivel național, fiind elaborate sub coordonarea CNCE pe baza programei școlare.\n\nLa concurs pot participa elevii care au obținut minimum nota 5 la fiecare probă a Evaluării Naționale. Admiterea se face în ordinea descrescătoare a mediei, în limita locurilor, cu condiția obținerii minimum notei 5 la fiecare probă a concursului. Elevii neadmiși participă apoi la repartiția computerizată.\n\nPentru filiera vocațională, probele de aptitudini se organizează înaintea Evaluării Naționale. Pentru liceul tehnologic și tehnologic dual, condițiile de acces se stabilesc împreună cu operatorii economici parteneri. Școlile trebuie să publice disciplinele, programele și procedurile pentru aceste probe, pentru fiecare generație, cel târziu la începutul clasei a VIII-a; probele suplimentare vizează cel mult două discipline. Metodologia-cadru se aprobă prin ordin, iar calendarul se publică pentru fiecare generație cel târziu la începutul anului școlar.\n\nPentru aplicare, rețineți că acest mecanism de Evaluare Națională și admitere se folosește începând cu generația de elevi înscrisă în clasa a V-a în anul școlar 2023–2024.\n\nFormula de memorare este: Evaluare Națională obligatorie; concurs liceal pentru maximum 50%; până la 10% locuri prioritare; minimum 5 la fiecare probă; vocaționalul are aptitudini înainte de Evaluarea Națională.",
      [
        "Liceele pot organiza concurs pentru maximum 50% din locuri, după Evaluarea Națională.",
        "Până la 10% dintre locuri sunt ocupate prioritar de categoriile prevăzute de lege, prin repartiție computerizată.",
        "Participarea la concurs cere minimum 5 la fiecare probă a Evaluării Naționale; fiecare probă de concurs trebuie promovată cu minimum 5."
      ],
      [
        Q("Pentru ce procent maxim din locuri poate un liceu organiza propriul concurs de admitere?", ["25%", "50%", "75%", "100%"], 1, "Art. 101 permite concurs pentru maximum 50% din numărul locurilor atribuite."),
        Q("Ce condiție trebuie să îndeplinească elevul pentru a participa la concursul liceului?", ["Să aibă minimum 5 la fiecare probă a Evaluării Naționale", "Să aibă media generală 10", "Să nu participe la Evaluarea Națională", "Să fie propus exclusiv de diriginte"], 0, "Participarea este permisă elevilor cu cel puțin nota 5 la fiecare probă a Evaluării Naționale."),
        Q("Când se organizează probele de aptitudini pentru filiera vocațională?", ["După repartiția computerizată", "Înaintea susținerii Evaluării Naționale", "După începerea clasei a IX-a", "Numai la finalul liceului"], 1, "Pentru filiera vocațională, probele de aptitudini preced Evaluarea Națională.")
      ],
      "Art. 101 — Evaluarea Națională după clasa a VIII-a este obligatorie. Liceele pot organiza concurs pentru maximum 50% din locuri, cu două probe standardizate și unice național. Până la 10% dintre locuri sunt ocupate prioritar pentru categoriile prevăzute de lege. Participarea la concurs cere minimum 5 la fiecare probă a Evaluării Naționale, iar admiterea minimum 5 la fiecare probă de concurs. Filiera vocațională organizează probele de aptitudini înaintea Evaluării Naționale. Mecanismul se aplică generației intrate în clasa a V-a în 2023–2024."
    ),
    L(
      102,
      "Structura noului bacalaureat",
      "12 min",
      "diplomă · acces la facultate · A01 A02 · A1 A2 A3 · B C D E F · profil",
      "Articolul 102 reglementează actele de finalizare a liceului și structura noului bacalaureat. Absolvenții primesc diploma de absolvire, foaia matricolă și, după caz, certificatul de calificare profesională de nivel 3 sau 4. Aceste acte fac parte din portofoliul educațional și permit accesul pe piața muncii, în condițiile legii. La bacalaureat se pot prezenta elevii care au promovat clasa a XII-a la zi ori clasa a XIII-a la seral sau frecvență redusă. Diploma de bacalaureat obținută prin promovarea examenului oferă acces la învățământul superior.\n\nStructura probelor trebuie învățată pe grupe. A01 este proba orală de comunicare în limba română, comună tuturor. A02 este proba orală de comunicare în limba maternă pentru elevii care au studiat liceul într-o limbă a minorităților. A1, A2 și A3 sunt variantele probei scrise la limba și literatura română: A1 pentru majoritatea elevilor, A2 pentru profilul umanist, specializarea filologie, iar A3 pentru elevii care au studiat româna după programa specială destinată școlilor și secțiilor cu predare în limba maternă.\n\nProba B evaluează două limbi de circulație internațională. Pentru prima limbă, nivelul vizat este B2. Pentru a doua, elevul alege tipul de probă corespunzător nivelului B1 sau A2. Examenele internaționale recunoscute pot fi echivalate. Elevii din învățământul într-o limbă minoritară care studiază o singură limbă de circulație internațională susțin proba doar la acea limbă. Proba C evaluează competențele digitale și poate fi echivalată cu certificări europene recunoscute, potrivit metodologiei. Proba D este proba scrisă la limba și literatura maternă pentru categoriile prevăzute de lege.\n\nProba E cuprinde două probe scrise obligatorii, specifice profilului sau specializării. La matematică-informatică, una este obligatoriu Matematica, iar cealaltă se alege dintre Informatică, Fizică, Chimie și Biologie. La științele naturii, una este Fizică, Chimie sau Biologie, iar a doua este o disciplină relevantă diferită, dintre Fizică, Chimie, Biologie, Matematică ori Informatică. La științe sociale, una este Istoria, iar cealaltă se alege dintre Geografie și disciplinele socioumane enumerate de lege. La filologie, una este limba și literatura unei limbi de circulație internațională, iar cealaltă se alege dintre Istorie, Geografie și discipline socioumane. Filiera tehnologică susține o probă specifică domeniului și una dintre disciplinele relevante pentru profilul real. Filiera vocațională susține o disciplină de specialitate și o disciplină relevantă pentru profilul predominant.\n\nProba F este obligatorie și verifică competențe de bază complementare profilului. Pentru profilul umanist, disciplina se alege dintre Matematică, Fizică, Chimie și Biologie. Pentru profilul real, se alege dintre Istorie, Geografie și disciplinele socioumane. Pentru filierele tehnologică și vocațională, proba este complementară disciplinelor alese la E.\n\nLista disciplinelor și programele de examen se stabilesc prin ordin și se publică la începutul ciclului liceal. Elevii surzi și sau hipoacuzici au dreptul să susțină bacalaureatul în limba maternă, respectiv limba semnelor române, potrivit metodologiei.\n\nRegula tranzitorie este esențială: această structură a bacalaureatului se aplică începând cu generația care a intrat în clasa a IX-a în anul școlar 2025–2026. Până la examinarea acestei generații se aplică regulile tranzitorii în vigoare.\n\nFormula de memorare este: A pentru comunicare și limba română, B pentru limbi străine, C pentru digital, D pentru limba maternă, E pentru profil, F pentru competențe complementare.",
      [
        "Diploma de bacalaureat conferă dreptul de acces la învățământul superior.",
        "B evaluează două limbi străine, C competențele digitale, E profilul, iar F competențele complementare.",
        "Noua structură se aplică generației intrate în clasa a IX-a în 2025–2026."
      ],
      [
        Q("Ce probă evaluează competențele digitale?", ["A01", "B", "C", "F"], 2, "Proba C este proba de evaluare a competențelor digitale."),
        Q("Ce cuprinde proba E?", ["Două probe scrise obligatorii specifice profilului sau specializării", "Numai comunicare orală", "Exclusiv competențe digitale", "O singură probă sportivă"], 0, "Proba E cuprinde două probe scrise obligatorii, specifice profilului ori specializării."),
        Q("Începând cu ce generație se aplică noua structură a bacalaureatului?", ["Cea intrată în clasa a IX-a în 2023–2024", "Cea intrată în clasa a IX-a în 2024–2025", "Cea intrată în clasa a IX-a în 2025–2026", "Toți absolvenții începând din 2023"], 2, "Art. 248 stabilește aplicarea pentru generația înscrisă în clasa a IX-a în anul școlar 2025–2026.")
      ],
      "Art. 102 — Absolvenții liceului primesc actele de finalizare și, după caz, certificatul de calificare. Promovarea bacalaureatului conferă acces la învățământul superior. Examenul include probele A01/A02, A1/A2/A3, B, C, D, E și F: comunicare orală, limba română, limbi străine, competențe digitale, limba maternă, discipline de profil și competențe complementare. Noua structură se aplică generației intrate în clasa a IX-a în 2025–2026."
    ),
    L(
      103,
      "Promovarea și organizarea bacalaureatului",
      "9 min",
      "condiții cumulative · minimum 5 · media 6 · certificate · sesiuni · gratuitate",
      "Articolul 103 stabilește condițiile cumulative pentru promovarea noului bacalaureat. Asta înseamnă că toate trebuie îndeplinite, nu doar o parte dintre ele. La A01, A02, după caz, și F candidatul trebuie să obțină calificativul admis. La proba B trebuie să atingă cel puțin nivelul B1 sau A2, în funcție de tipul probei susținute, iar la proba C cel puțin nivelul mediu.\n\nLa proba scrisă de limba română — A1, A2 sau A3 — este necesară cel puțin nota 5. La proba D, dacă este susținută, este necesară cel puțin nota 5. La fiecare dintre cele două discipline ale probei E este necesară cel puțin nota 5. În plus, media aritmetică a notelor obținute la probele scrise A1, A2 sau A3, D și E trebuie să fie cel puțin 6, calculată cu două zecimale exacte. Rețineți diferența: minimum 5 la fiecare probă scrisă relevantă, dar media finală minimum 6.\n\nDupă promovare se eliberează diploma de bacalaureat. Pentru probele B și C se eliberează certificate de competență lingvistică și digitală, iar eliberarea lor nu depinde de promovarea celorlalte probe. Dacă examenul nu este promovat, candidatul poate cere recunoașterea, în sesiunile următoare, a probelor deja promovate.\n\nÎntr-un an școlar se organizează două sesiuni de bacalaureat. În cazuri temeinic justificate poate exista și o sesiune specială, aprobată prin ordin al ministrului. Probele pot fi susținute fără taxă de cel mult trei ori; prezentările ulterioare presupun o taxă stabilită prin hotărâre a Guvernului.\n\nProbele B, C și F se desfășoară la nivelul unității de învățământ, în timpul anului școlar. Probele orale A01 și A02 și probele scrise A, D și E se susțin după încheierea cursurilor. Absolvenții care nu au susținut ori nu au promovat bacalaureatul pot beneficia de cursuri de pregătire organizate de licee sau instituții de învățământ superior acreditate. Fiecare absolvent poate primi o singură dată finanțare pentru aceste cursuri. Promovarea bacalaureatului conferă nivelul de calificare 4.\n\nȘi acest articol aparține noii structuri care se aplică generației intrate în clasa a IX-a în 2025–2026. O propunere legislativă de modificare a art. 103 era încă în procedură parlamentară la data verificării și nu este tratată ca normă în vigoare.\n\nFormula de memorare este: condiții cumulative; minimum 5 pe probe, media minimum 6; două sesiuni, maximum trei prezentări gratuite; B, C și F în timpul anului.",
      [
        "Promovarea cere condiții cumulative: minimum 5 la probele scrise relevante și media minimum 6.",
        "Certificatele B și C se eliberează chiar dacă celelalte probe nu sunt promovate.",
        "Sunt două sesiuni pe an, iar candidatul are cel mult 3 prezentări fără taxă."
      ],
      [
        Q("Care este media minimă necesară pentru promovarea bacalaureatului?", ["5,00", "5,50", "6,00", "7,00"], 2, "Pe lângă minimum 5 la probele relevante, media aritmetică trebuie să fie cel puțin 6."),
        Q("De câte ori poate un candidat susține probele fără taxă?", ["O singură dată", "De cel mult două ori", "De cel mult trei ori", "Nelimitat"], 2, "Art. 103 permite cel mult trei prezentări fără taxă."),
        Q("Când se organizează probele B, C și F?", ["La nivelul unității, în timpul anului școlar", "Numai după încheierea cursurilor", "Exclusiv în vacanța de vară", "Doar într-un centru universitar"], 0, "B, C și F se organizează la nivelul unității de învățământ, în timpul anului școlar.")
      ],
      "Art. 103 — Promovarea bacalaureatului cere cumulativ nivelurile și calificativele prevăzute pentru A01/A02, B, C și F, minimum 5 la fiecare probă scrisă relevantă și media minimum 6. Certificatele B și C se pot elibera independent. Se organizează două sesiuni pe an, cu posibilitatea unei sesiuni speciale, iar candidatul are cel mult trei prezentări fără taxă. B, C și F au loc în timpul anului școlar; celelalte probe după încheierea cursurilor."
    ),
    L(
      104,
      "Certificarea calificărilor profesionale",
      "6 min",
      "examen separat · nivel 3 · clasa XI · nivel 4 · clasa XII · probă practică · proiect",
      "Articolul 104 reglementează examenul de certificare a calificării, separat de bacalaureat. El poate fi organizat pentru filierele, profilurile, specializările sau calificările stabilite prin ordin al ministrului educației.\n\nÎn liceele tehnologice, după absolvirea clasei a XI-a, elevii pot obține certificatul de calificare de nivel 3. Certificatul oferă acces la piața muncii în profesia relevantă domeniului de certificare. Examenul de nivel 3 are o probă practică: candidatul realizează și prezintă un produs, subansamblu sau serviciu ori execută operații specifice domeniului, specializării și calificării. Organizarea, desfășurarea și calendarul sunt stabilite prin metodologia aprobată prin ordin la începutul fiecărui an școlar.\n\nDupă absolvirea clasei a XII-a, elevii pot obține certificatul de calificare de nivel 4. Acesta oferă acces pe piața muncii sau în învățământul postliceal. Examenul de nivel 4 constă într-o probă practică, prin realizarea și susținerea unui proiect. Organizarea și calendarul se stabilesc prin metodologie, la finalul fiecărui an școlar, pentru anul următor.\n\nProba practică de nivel 4 poate fi echivalată, după caz, cu proba E din bacalaureat, dacă absolventul a obținut minimum nota 5 la această probă. Foarte important: obținerea certificatului de calificare nivel 4 nu este condiționată de promovarea bacalaureatului.\n\nFormula de memorare este: nivel 3 după clasa a XI-a — produs, serviciu sau operații; nivel 4 după clasa a XII-a — proiect; certificarea este separată de bacalaureat.",
      [
        "Nivelul 3 se poate obține după clasa a XI-a, printr-o probă practică.",
        "Nivelul 4 se poate obține după clasa a XII-a, prin realizarea și susținerea unui proiect.",
        "Certificatul de nivel 4 nu depinde de promovarea bacalaureatului."
      ],
      [
        Q("După ce clasă se poate obține certificatul de calificare nivel 3 în liceul tehnologic?", ["Clasa a IX-a", "Clasa a X-a", "Clasa a XI-a", "Clasa a XII-a exclusiv"], 2, "Certificatul de nivel 3 poate fi obținut după absolvirea clasei a XI-a."),
        Q("În ce constă proba pentru certificarea nivelului 4?", ["Numai într-un test grilă", "În realizarea și susținerea unui proiect", "Exclusiv într-o probă orală de limbă", "În media claselor IX–XII"], 1, "Examenul de nivel 4 are o probă practică prin realizarea și susținerea unui proiect."),
        Q("Este certificatul de calificare nivel 4 condiționat de promovarea bacalaureatului?", ["Da, în toate cazurile", "Nu", "Numai pentru filiera tehnologică", "Numai dacă proba E este sub 7"], 1, "Art. 104 alin. (6) precizează expres că nivelul 4 nu este condiționat de promovarea bacalaureatului.")
      ],
      "Art. 104 — Examenul de certificare a calificării este separat de bacalaureat. Nivelul 3 se poate obține după clasa a XI-a prin probă practică, iar nivelul 4 după clasa a XII-a prin realizarea și susținerea unui proiect. Proba de nivel 4 poate fi echivalată, după caz, cu proba E promovată cu minimum 5. Certificatul de nivel 4 nu este condiționat de promovarea bacalaureatului."
    )
  );
})();
