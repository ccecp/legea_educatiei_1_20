"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const N = (...paragraphs) => paragraphs.join("\n\n");
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–247: verificare 12.08.2026";
  DATA.modules.push({
    id: 19,
    title: "Asigurarea internă și evaluarea externă a calității",
    articles: "230–247",
    chapter: "Titlul IV",
    startArticle: 230,
    endArticle: 247
  });

  DATA.lessons.push(
    L(
      230,
      "Calitatea educației: definiții și scopuri",
      "12 min",
      "calitate · evaluare internă · evaluare externă · îmbunătățire continuă · acreditare · inspecție",
      N(
        "Articolul 230 fixează vocabularul de bază al Titlului IV. Calitatea educației reprezintă ansamblul caracteristicilor unui program de studiu și ale furnizorului său prin care sunt îndeplinite atât așteptările beneficiarilor, cât și standardele de calitate. Așadar, calitatea nu se reduce la rezultate la examene; ea privește programul, instituția, serviciile și raportarea lor la nevoile beneficiarilor.",
        "Evaluarea calității este o examinare multicriterială a măsurii în care furnizorul și programele sale îndeplinesc standardele. Când evaluarea este realizată de însăși organizația furnizoare, vorbim despre evaluare internă. Când este realizată de autoritatea externă de calitate prevăzută de lege, evaluarea este externă.",
        "Îmbunătățirea calității presupune un ciclu continuu: evaluare, analiză și acțiune corectivă. Organizația selectează procedurile potrivite, aplică standardele și verifică efectele măsurilor luate. Acreditarea furnizorilor și a programelor lor este parte a asigurării calității.",
        "În toate evaluările trebuie respectate valorile și principiile legii. Scopul evaluării este măsurarea nivelului calitativ al serviciului în raport cu nevoile beneficiarilor și cu standardele naționale. Inspecția școlară are un scop distinct, dar complementar: îndrumarea, controlul și îmbunătățirea calității serviciilor educaționale.",
        "Reper tranzitoriu: textul Titlului IV folosește denumirea ARACIIP pentru viitoarea agenție. La 12 august 2026, reorganizarea prevăzută la art. 116–119 este prorogată până la începutul anului școlar 2027–2028, astfel că funcționează încă ARACIP și inspectoratele școlare."
      ),
      [
        "Calitatea combină așteptările beneficiarilor cu standardele de calitate.",
        "Evaluarea internă este realizată de furnizor; evaluarea externă, de autoritatea competentă.",
        "Îmbunătățirea urmează ciclul evaluare–analiză–acțiune corectivă.",
        "Evaluarea măsoară calitatea; inspecția asigură îndrumarea, controlul și îmbunătățirea."
      ],
      [
        Q("Când o evaluare a calității este internă?", ["Când este realizată de însăși organizația furnizoare de educație", "Când este realizată exclusiv de elevi", "Când nu folosește standarde", "Când are loc numai după desființare"], 0, "Art. 230 alin. (3) definește evaluarea internă prin realizarea ei de către organizația furnizoare."),
        Q("Care este succesiunea specifică îmbunătățirii continue a calității?", ["Evaluare, analiză și acțiune corectivă", "Acreditare, sancționare și închidere automată", "Admitere, absolvire și pensionare", "Bugetare, inventariere și arhivare"], 0, "Art. 230 alin. (4) leagă îmbunătățirea de evaluare, analiză și acțiune corectivă continuă."),
        Q("Care este scopul inspecției școlare?", ["Îndrumarea, controlul și îmbunătățirea calității serviciilor educaționale", "Acordarea automată a acreditării", "Înlocuirea consiliului de administrație", "Stabilirea taxelor universitare"], 0, "Art. 230 alin. (8) precizează cele trei funcții ale inspecției școlare.")
      ],
      N(
        "Art. 230 — Definește calitatea educației, evaluarea internă și externă, îmbunătățirea continuă și acreditarea.",
        "Scopul evaluării este raportarea serviciului la nevoile beneficiarilor și la standardele naționale; scopul inspecției este îndrumarea, controlul și îmbunătățirea calității."
      )
    ),
    L(
      231,
      "Asigurarea calității și încrederea beneficiarilor",
      "7 min",
      "capacitate organizațională · standarde · încrederea beneficiarilor · rezultate · excelență · abandon · analfabetism funcțional",
      N(
        "Articolul 231 definește asigurarea calității ca fiind capacitatea unei organizații furnizoare de educație de a oferi servicii conforme cu standardele de calitate în vigoare.",
        "Această capacitate se construiește printr-un ansamblu de acțiuni: dezvoltarea capacității instituționale, elaborarea, planificarea și implementarea programelor de studii sau de calificare profesională. Nu este suficientă existența unor documente; acțiunile trebuie să arate că standardele sunt îndeplinite în practică.",
        "Finalitatea este încrederea beneficiarilor că furnizorul respectă standardele și poate obține rezultate optime ale învățării. Legea leagă explicit asigurarea calității de cultivarea excelenței, reducerea abandonului școlar și reducerea analfabetismului funcțional.",
        "Pentru director, articolul transformă calitatea într-o responsabilitate managerială: capacitate instituțională, programe bine planificate, implementare verificabilă și rezultate relevante pentru elevi."
      ),
      [
        "Asigurarea calității exprimă capacitatea furnizorului de a respecta standardele.",
        "Ea include dezvoltare instituțională, elaborare, planificare și implementare.",
        "Beneficiarii trebuie să poată avea încredere că standardele sunt îndeplinite.",
        "Finalitățile includ excelența și reducerea abandonului și analfabetismului funcțional."
      ],
      [
        Q("Ce exprimă asigurarea calității?", ["Capacitatea furnizorului de a oferi servicii conforme standardelor", "Numai numărul de diplome emise", "Exclusiv valoarea bugetului", "Doar vechimea unității"], 0, "Art. 231 definește asigurarea calității prin capacitatea organizației de a respecta standardele în vigoare."),
        Q("Ce urmărește ansamblul acțiunilor de asigurare a calității?", ["Încrederea beneficiarilor că standardele sunt îndeplinite", "Eliminarea tuturor evaluărilor", "Înlocuirea curriculumului național", "Limitarea accesului părinților la informații"], 0, "Încrederea beneficiarilor este o finalitate explicită a asigurării calității."),
        Q("Care obiectiv este menționat expres în art. 231?", ["Reducerea abandonului școlar și a analfabetismului funcțional", "Reducerea duratei tuturor orelor", "Desființarea evaluării interne", "Eliminarea formării profesionale"], 0, "Articolul leagă calitatea de excelență, rezultate optime și reducerea abandonului și analfabetismului funcțional.")
      ],
      "Art. 231 — Asigurarea calității este capacitatea furnizorului de a respecta standardele și ansamblul acțiunilor prin care se obțin rezultate optime, se cultivă excelența și se reduc abandonul și analfabetismul funcțional."
    ),
    L(
      232,
      "Evaluarea externă, controlul și îmbunătățirea calității",
      "12 min",
      "autoritate externă · inspecție școlară · monitorizare · primii 3 ani · acțiune corectivă · autorizații ISU și sanitare",
      N(
        "Articolul 232 arată cum se realizează evaluarea externă și controlul calității. Evaluarea externă folosește activități și tehnici operaționale aplicate sistematic de autoritatea desemnată, pentru a verifica respectarea standardelor prestabilite.",
        "Controlul calității se realizează prin inspecție școlară. Legea prevede monitorizarea unităților și o monitorizare specială complexă imediat după înființare, în primii trei ani și ori de câte ori este necesar.",
        "Îmbunătățirea rămâne responsabilitatea unității: analiza datelor, selectarea măsurilor potrivite, aplicarea standardelor și acțiunea corectivă continuă. Politicile și standardele naționale trebuie corelate atât cu reperele internaționale, cât și cu realitatea socială și nevoile educaționale ale elevilor.",
        "Evaluarea externă pentru autorizare provizorie, acreditare și menținerea acreditării este atribuită agenției de calitate. În plus, unitățile administrativ-teritoriale, ca proprietari ai imobilelor publice locale sau județene, au obligația obținerii și menținerii autorizației de securitate la incendiu și a autorizației sanitare de funcționare pentru unitățile de stat ori componentele lor.",
        "În 2026, competențele sunt citite împreună cu regimul tranzitoriu: ARACIIP și birourile sale reprezintă arhitectura viitoare a legii, iar până la reorganizare continuă să funcționeze structurile actuale."
      ),
      [
        "Evaluarea externă verifică sistematic standardele prestabilite.",
        "Controlul calității se realizează prin inspecție școlară.",
        "Monitorizarea specială complexă are loc în primii 3 ani și ori de câte ori este necesar.",
        "UAT asigură autorizațiile de securitate la incendiu și sanitare pentru imobilele unităților de stat."
      ],
      [
        Q("Prin ce se realizează controlul calității educației?", ["Prin inspecție școlară", "Numai prin examenul de bacalaureat", "Exclusiv prin audit financiar", "Prin votul anual al elevilor"], 0, "Art. 232 alin. (2) precizează că instrumentul controlului calității este inspecția școlară."),
        Q("Când este prevăzută monitorizarea specială complexă după înființare?", ["În primii trei ani și ori de câte ori este necesar", "Numai după 20 de ani", "Exclusiv în anul desființării", "O singură zi, la cererea furnizorului"], 0, "Legea indică monitorizarea imediat după înființare, în primii trei ani și ulterior când este necesar."),
        Q("Cui îi revine obligația obținerii și menținerii autorizațiilor de incendiu și sanitare pentru imobilele publice ale unităților de stat?", ["Unității administrativ-teritoriale, în calitate de proprietar", "Consiliului elevilor", "Fiecărui profesor", "Exclusiv furnizorului de internet"], 0, "Art. 232 alin. (6) stabilește această obligație pentru UAT proprietară.")
      ],
      N(
        "Art. 232 — Reglementează evaluarea externă, controlul prin inspecție, monitorizarea și îmbunătățirea continuă.",
        "UAT proprietară trebuie să asigure autorizația de securitate la incendiu și autorizația sanitară pentru unitățile de stat."
      )
    ),
    L(
      233,
      "Metodologia și domeniile asigurării calității",
      "15 min",
      "standarde · metodologii · HG · ordin de ministru · 3 domenii · capacitate instituțională · eficacitate · management",
      N(
        "Articolul 233 este nucleul metodologic al Titlului IV. Standardele de calitate și metodologiile pentru autorizare, acreditare și evaluare periodică se adoptă, ca regulă, prin hotărâre a Guvernului. Pentru furnizorii de educație timpurie antepreșcolară, alternativele educaționale și unitățile de învățământ special, metodologia se adoptă prin ordin al ministrului educației.",
        "Componentele minime ale asigurării calității sunt criteriile, standardele de calitate, indicatorii de performanță și rezultatele. Procesele sunt planificarea și realizarea rezultatelor învățării, monitorizarea, evaluarea internă, evaluarea externă și îmbunătățirea continuă.",
        "Sistemul este centrat preponderent pe rezultatele învățării și se diferențiază după nivel, calificare, tipul furnizorului, program și forma de învățământ.",
        "Cele trei domenii mari sunt: capacitatea instituțională, eficacitatea educațională și managementul calității. Capacitatea instituțională privește structurile manageriale și administrative, baza materială, resursele umane și digitalizarea proceselor.",
        "Eficacitatea educațională privește relevanța programelor, învățarea–predarea–evaluarea centrate pe elev, rezultatele învățării, cercetarea metodică, dezvoltarea personală și profesională, educația nonformală și informală, mobilitățile și activitatea financiară.",
        "Managementul calității cuprinde strategii și proceduri, etică și deontologie, revizuirea programelor, evaluarea transparentă a rezultatelor, evaluarea corpului profesoral, baza de date, transparența informațiilor, funcționarea structurilor de calitate și acuratețea raportărilor. Pentru concurs, formula-cheie este: capacitate – eficacitate – management."
      ),
      [
        "Regula: standardele și metodologiile instituționale se adoptă prin hotărâre a Guvernului.",
        "Componentele minime sunt criterii, standarde, indicatori și rezultate.",
        "Calitatea este centrată preponderent pe rezultatele învățării.",
        "Cele 3 domenii sunt capacitatea instituțională, eficacitatea educațională și managementul calității."
      ],
      [
        Q("Care sunt cele trei domenii ale asigurării calității?", ["Capacitatea instituțională, eficacitatea educațională și managementul calității", "Curriculum, transport și salarizare", "Admitere, bacalaureat și pensionare", "Inventar, pază și arhivă"], 0, "Art. 233 alin. (7) stabilește cele trei domenii."),
        Q("Pe ce este centrată preponderent asigurarea calității?", ["Pe rezultatele învățării", "Pe vechimea clădirii", "Pe numărul de ștampile", "Pe durata ședințelor"], 0, "Art. 233 alin. (6) consacră centrarea pe rezultatele învățării."),
        Q("Cum se adoptă, ca regulă, standardele și metodologiile pentru autorizare, acreditare și evaluare periodică?", ["Prin hotărâre a Guvernului", "Prin decizia fiecărui elev", "Prin contract individual de muncă", "Prin hotărârea comitetului de părinți"], 0, "Art. 233 alin. (1) stabilește adoptarea lor prin hotărâre a Guvernului.")
      ],
      N(
        "Art. 233 — Stabilește componentele, procesele, criteriile și cele trei domenii ale calității: capacitate instituțională, eficacitate educațională și managementul calității.",
        "Metodologiile și standardele se aprobă, de regulă, prin hotărâre a Guvernului, cu excepțiile prevăzute de lege."
      )
    ),
    L(
      234,
      "CEAC și răspunderea internă pentru calitate",
      "15 min",
      "director · CA · CEAC · consultare · componență · RAEI · strategie · absenteism · abandon · excelență",
      N(
        "Articolul 234 reglementează asigurarea internă a calității și Comisia pentru evaluarea și asigurarea calității educației — CEAC. Directorul și consiliul de administrație sunt direct responsabili de calitatea educației furnizate.",
        "CEAC funcționează la nivelul fiecărei unități de învățământ preuniversitar. Regulamentul ei de organizare și funcționare și strategia se elaborează și se aprobă de consiliul de administrație, după consultarea consiliului profesoral, a consiliului școlar al elevilor și a structurilor asociative ale părinților. Conducerea operativă este asigurată de conducătorul organizației sau de un coordonator desemnat de acesta.",
        "Într-o unitate de învățământ, CEAC cuprinde: 1–3 reprezentanți ai corpului profesoral, aleși prin vot secret de consiliul profesoral; un reprezentant al sindicatului reprezentativ; un reprezentant al părinților; un reprezentant al elevilor pentru nivelul liceal și postliceal; un reprezentant al consiliului local; și, după caz, un reprezentant al minorităților naționale.",
        "Pentru alți furnizori de educație decât unitățile de învățământ, comisia cuprinde 1–3 reprezentanți ai furnizorului, 1–3 ai beneficiarilor direcți și 1–3 ai angajatorilor.",
        "CEAC coordonează aplicarea procedurilor de calitate, elaborează anual raportul de evaluare internă și îl face cunoscut beneficiarilor, elaborează strategia și formulează propuneri de îmbunătățire. Strategia trebuie să includă cel puțin rezultatele învățării, reducerea analfabetismului funcțional, a absenteismului, a abandonului și părăsirii timpurii a școlii, precum și promovarea excelenței.",
        "Pentru director, CEAC nu este o comisie formală. Ea trebuie legată de date, ținte de îmbunătățire, raportare publică și decizii manageriale."
      ),
      [
        "Directorul și CA sunt direct responsabili de calitatea educației.",
        "CA aprobă regulamentul și strategia CEAC după consultarea CP, elevilor și părinților.",
        "Profesorii din CEAC sunt 1–3 și sunt aleși prin vot secret de CP.",
        "CEAC elaborează anual RAEI, strategia și propuneri de îmbunătățire."
      ],
      [
        Q("Cine este direct responsabil de calitatea educației furnizate de unitate?", ["Directorul și consiliul de administrație", "Numai consiliul elevilor", "Exclusiv autoritatea locală", "Doar secretarul unității"], 0, "Art. 234 alin. (1) atribuie direct responsabilitatea directorului și CA."),
        Q("Cum sunt desemnați reprezentanții corpului profesoral în CEAC?", ["Sunt aleși prin vot secret de consiliul profesoral", "Sunt aleși de consiliul elevilor", "Sunt numiți de primar", "Sunt selectați prin tragere la sorți de părinți"], 0, "Art. 234 alin. (5) lit. a) prevede 1–3 reprezentanți aleși prin vot secret de CP."),
        Q("Ce raport elaborează anual CEAC?", ["Raportul de evaluare internă privind calitatea educației", "Raportul medical al elevilor", "Declarația fiscală a părinților", "Raportul de trafic rutier"], 0, "RAEI este elaborat anual și adus la cunoștința beneficiarilor prin afișare sau publicare.")
      ],
      N(
        "Art. 234 — Reglementează responsabilitatea directorului și a CA, funcționarea, componența și atribuțiile CEAC.",
        "CEAC coordonează procedurile, elaborează anual raportul intern, strategia de calitate și propunerile de îmbunătățire."
      )
    ),
    L(
      235,
      "Conținutul evaluării externe și experții RNEE",
      "10 min",
      "6 componente · colaboratori externi · RNEE · independență · conflict de interese · observatori",
      N(
        "Articolul 235 enumeră ceea ce examinează evaluarea externă: capacitatea instituțională, eficacitatea educațională, managementul calității, calitatea programelor de studii sau de calificare, concordanța dintre evaluarea internă și situația reală și comparația interinstituțională a aceluiași tip de program.",
        "Evaluarea externă periodică este realizată de agenția competentă prin colaboratori externi, experți în evaluare și acreditare înscriși în Registrul național al experților în evaluare — RNEE. Experții participă la formare inițială și periodic la formare continuă în domeniul calității.",
        "Selecția trebuie să asigure independența evaluatorilor și absența conflictelor de interese. La evaluări pot participa ca observatori reprezentanți ai organizațiilor sindicale reprezentative, ai elevilor și ai părinților; pentru liceele tehnologice, pot participa și reprezentanți ai patronatelor și angajatorilor.",
        "Rețineți diferența dintre evaluator și observator: experții RNEE realizează evaluarea, iar categoriile enumerate de lege pot asista cu statut de observator."
      ),
      [
        "Evaluarea externă acoperă capacitatea, eficacitatea și managementul calității.",
        "Se verifică și concordanța dintre evaluarea internă și situația reală.",
        "Experții evaluatori sunt înscriși în RNEE și trebuie să fie independenți.",
        "Sindicatele, elevii, părinții și, la tehnologic, angajatorii pot avea observatori."
      ],
      [
        Q("Ce registru reunește experții colaboratori pentru evaluarea externă?", ["RNEE", "SIIIR", "REVISAL", "Registrul agricol"], 0, "Art. 235 alin. (2) indică Registrul național al experților în evaluare — RNEE."),
        Q("Ce condiție trebuie respectată la selecția evaluatorilor?", ["Independența și evitarea conflictelor de interese", "Apartenența obligatorie la aceeași unitate evaluată", "Lipsa oricărei formări", "Numirea exclusiv de către elevi"], 0, "Evaluatorii trebuie să fie independenți și fără conflicte de interese."),
        Q("Cine poate participa ca observator la evaluarea unui liceu tehnologic?", ["Inclusiv reprezentanți ai patronatelor și angajatorilor", "Numai furnizorii de manuale", "Exclusiv absolvenții din ultimul an", "Doar personalul administrativ"], 0, "Pentru învățământul liceal tehnologic, legea adaugă patronatele și angajatorii între observatori.")
      ],
      "Art. 235 — Definește conținutul evaluării externe, rolul experților RNEE, independența evaluatorilor și participarea observatorilor."
    ),
    L(
      236,
      "Obligația de evaluare și acreditare",
      "4 min",
      "orice persoană juridică · publică sau privată · furnizare de educație · evaluare · acreditare",
      N(
        "Articolul 236 conține o regulă scurtă și generală: orice persoană juridică, publică sau privată, interesată să furnizeze educație se supune procesului de evaluare și acreditare.",
        "Regula înseamnă că simpla intenție de a desfășura activități educaționale recunoscute nu este suficientă. Furnizorul trebuie să intre în procedurile legale de verificare a standardelor și de recunoaștere instituțională.",
        "Articolul se aplică indiferent dacă inițiativa este publică sau privată. Diferențele de statut juridic nu înlătură obligația privind calitatea."
      ),
      [
        "Regula se aplică oricărei persoane juridice interesate să furnizeze educație.",
        "Sunt vizate atât persoanele juridice publice, cât și cele private.",
        "Furnizorul se supune evaluării și acreditării.",
        "Statutul public sau privat nu înlătură obligația de calitate."
      ],
      [
        Q("Cui i se aplică art. 236?", ["Oricărei persoane juridice, publice sau private, interesate să furnizeze educație", "Numai persoanelor fizice majore", "Exclusiv unităților universitare", "Doar autorităților locale"], 0, "Textul are aplicabilitate generală pentru persoanele juridice publice și private."),
        Q("La ce procese trebuie să se supună furnizorul?", ["Evaluare și acreditare", "Numai inventariere", "Doar mediere", "Exclusiv consultare publică"], 0, "Art. 236 menționează expres evaluarea și acreditarea."),
        Q("Este exceptat furnizorul public de la această obligație?", ["Nu, regula privește furnizorii publici și privați", "Da, întotdeauna", "Da, dacă are clădire proprie", "Da, dacă nu organizează examene"], 0, "Caracterul public nu înlătură obligația de evaluare și acreditare.")
      ],
      "Art. 236 — Orice persoană juridică, publică sau privată, interesată să furnizeze educație se supune evaluării și acreditării."
    ),
    L(
      237,
      "Autorizarea de funcționare provizorie",
      "12 min",
      "drept de înscriere · proces educațional · fiecare nivel și locație · ordin de ministru · rețea școlară · rapoarte publice",
      N(
        "Articolul 237 explică efectele și condițiile autorizării de funcționare provizorie. Autorizația conferă furnizorului dreptul de a face înscrieri și de a desfășura procesul de învățământ.",
        "Evaluarea și autorizarea se fac pentru fiecare nivel de învățământ, filieră, profil, domeniu sau specializare, limbă de predare, formă de învățământ și, după caz, locație. Pentru o unitate deja acreditată, un nivel inferior se poate supune direct acreditării, fără etapa autorizării provizorii anterioare.",
        "Autorizația se acordă prin ordin al ministrului educației, la propunerea agenției de calitate. Ordinul de autorizare și de înființare ca persoană juridică se comunică autorității publice locale, pentru includerea de drept în rețeaua școlară a UAT.",
        "După autorizare, unitatea trebuie să implementeze mecanismul intern de calitate, să întocmească anual rapoarte de evaluare internă și să le facă publice. Nerespectarea obligației de publicare este legată de sancțiunea retragerii autorizației provizorii.",
        "Pentru concurs: autorizarea permite înscrierea și funcționarea; acreditarea, studiată ulterior, adaugă dreptul de a emite acte de studii recunoscute."
      ),
      [
        "Autorizația provizorie permite înscrieri și desfășurarea procesului de învățământ.",
        "Evaluarea se face distinct pe nivel, filieră, profil, specializare, limbă, formă și, după caz, locație.",
        "Autorizația se acordă prin ordin de ministru, la propunerea agenției.",
        "După autorizare, rapoartele interne anuale trebuie făcute publice."
      ],
      [
        Q("Ce drept conferă autorizarea de funcționare provizorie?", ["Dreptul de a face înscrieri și de a desfășura procesul de învățământ", "Dreptul automat de a emite orice diplomă", "Dreptul de a evita evaluările viitoare", "Dreptul de a funcționa fără personal calificat"], 0, "Acesta este efectul juridic principal al autorizării provizorii."),
        Q("Prin ce act se acordă autorizația provizorie?", ["Prin ordin al ministrului educației, la propunerea agenției de calitate", "Prin votul consiliului elevilor", "Prin dispoziția dirigintelui", "Prin contractul de închiriere"], 0, "Art. 237 alin. (3) stabilește ordinul ministrului la propunerea autorității de calitate."),
        Q("Ce obligație are unitatea după autorizare?", ["Să implementeze asigurarea internă și să publice anual rapoartele de evaluare internă", "Să renunțe la CEAC", "Să înceteze înscrierile", "Să solicite imediat desființarea"], 0, "Obligația de implementare și raportare publică anuală este prevăzută sub sancțiunea retragerii autorizării.")
      ],
      N(
        "Art. 237 — Autorizația provizorie permite înscrierea și desfășurarea învățământului și se acordă prin ordin al ministrului, la propunerea agenției.",
        "Unitatea autorizată implementează asigurarea internă și publică anual rapoartele sale de calitate."
      )
    ),
    L(
      238,
      "Organismul competent pentru autorizare",
      "4 min",
      "evaluare externă · autorizare provizorie · ARACIIP în lege · ARACIP în regimul tranzitoriu",
      N(
        "Articolul 238 atribuie organismului de asigurare a calității competența de a efectua evaluarea externă în vederea autorizării de funcționare provizorie.",
        "Textul legii folosește denumirea ARACIIP, corespunzătoare arhitecturii instituționale prevăzute de art. 117. Pentru data studiului, trebuie aplicată și regula tranzitorie: reorganizarea art. 116–119 este prorogată până la începutul anului școlar 2027–2028, iar în 2026 funcționează încă ARACIP.",
        "La testele juridice, citiți cu atenție formularea: dacă întrebarea cere textul art. 238, răspunsul este ARACIIP; dacă întreabă ce structură funcționează efectiv în anul 2026, răspunsul este ARACIP, în regimul tranzitoriu."
      ),
      [
        "Art. 238 desemnează organismul pentru evaluarea externă în vederea autorizării.",
        "Textul legii folosește denumirea ARACIIP.",
        "La 12 august 2026 funcționează încă ARACIP, din cauza prorogării art. 116–119.",
        "Trebuie diferențiat textul normei de situația instituțională tranzitorie."
      ],
      [
        Q("Ce organism este indicat în textul art. 238 pentru evaluarea externă în vederea autorizării?", ["ARACIIP", "Consiliul elevilor", "Casa corpului didactic", "Autoritatea rutieră"], 0, "Articolul 238 numește ARACIIP ca organism abilitat în arhitectura viitoare a legii."),
        Q("Ce agenție funcționează efectiv la 12 august 2026, în regimul tranzitoriu?", ["ARACIP", "ARACIIP cu toate birourile județene deja operaționale", "Nicio autoritate de calitate", "Exclusiv inspectoratul pentru situații de urgență"], 0, "Prorogarea art. 116–119 până în anul școlar 2027–2028 menține temporar ARACIP."),
        Q("Pentru ce etapă realizează organismul evaluarea externă potrivit art. 238?", ["Pentru autorizarea de funcționare provizorie", "Pentru pensionarea personalului", "Pentru stabilirea burselor", "Pentru alegerea consiliului elevilor"], 0, "Art. 238 privește expres autorizarea de funcționare provizorie.")
      ],
      "Art. 238 — Organismul abilitat să efectueze evaluarea externă pentru autorizarea de funcționare provizorie este ARACIIP; în 2026 se aplică regimul tranzitoriu al ARACIP."
    ),
    L(
      239,
      "Procedura autorizării provizorii",
      "10 min",
      "raport intern · cerere · comisie de experți · vizită · standarde · validare · propunere",
      N(
        "Articolul 239 descrie procedura autorizării provizorii ca un traseu în patru etape. Mai întâi, furnizorul elaborează raportul de evaluare internă pentru fiecare nivel, filieră, profil, domeniu, specializare sau locație solicitată.",
        "În etapa a doua, raportul intern este depus la agenția de calitate împreună cu cererea de declanșare a evaluării externe și a autorizării provizorii.",
        "În etapa a treia, agenția numește o comisie de experți. Comisia analizează raportul, verifică prin vizită îndeplinirea standardelor pe domeniile și criteriile art. 233 și elaborează propriul raport de evaluare externă.",
        "În etapa finală, agenția validează raportul prin verificarea respectării metodologiilor aplicabile și propune Ministerului Educației acordarea sau neacordarea autorizației.",
        "Formula de memorat este: autoevaluare — cerere — comisie și vizită — validare și propunere. Decizia juridică finală se materializează prin ordinul ministrului prevăzut la art. 237."
      ),
      [
        "Furnizorul începe prin raportul de evaluare internă.",
        "Raportul și cererea se depun împreună la agenție.",
        "Comisia de experți analizează documentele și face vizita de evaluare.",
        "Agenția validează raportul și propune acordarea sau neacordarea autorizației."
      ],
      [
        Q("Care este primul document elaborat de furnizor în procedura de autorizare?", ["Raportul de evaluare internă", "Diploma de acreditare", "Decizia de pensionare", "Contractul colectiv de muncă"], 0, "Procedura începe prin autoevaluarea furnizorului și raportul aferent."),
        Q("Cine verifică prin vizită îndeplinirea standardelor?", ["Comisia de experți în evaluare și acreditare", "Comitetul de părinți singur", "Consiliul elevilor singur", "Furnizorul de utilități"], 0, "Agenția numește comisia de experți care analizează și verifică la fața locului."),
        Q("Ce face agenția după validarea raportului?", ["Propune Ministerului acordarea sau neacordarea autorizației", "Emite diploma de bacalaureat", "Numeste directorul fără concurs", "Închide automat toate unitățile"], 0, "Propunerea agenției fundamentează ordinul ministrului.")
      ],
      "Art. 239 — Procedura autorizării cuprinde raportul intern, cererea, evaluarea externă prin comisie și vizită, validarea raportului și propunerea către Minister."
    ),
    L(
      240,
      "Acreditarea: condiții și efecte",
      "13 min",
      "monitorizare · 3 evaluări favorabile · ordin de ministru · PJ · Consiliul agenției · diplome · examen de absolvire",
      N(
        "Articolul 240 reglementează trecerea de la autorizarea provizorie la acreditare. Unitatea autorizată este monitorizată de agenția de calitate, iar după trei evaluări anuale consecutive încheiate cu raport favorabil poate solicita acreditarea.",
        "Agenția propune Ministerului acreditarea pentru fiecare nivel, filieră, profil, domeniu, specializare sau, după caz, locație. Acreditarea se acordă prin ordin al ministrului educației.",
        "Prin acreditare se certifică respectarea standardelor pentru înființarea și funcționarea unității și a programelor sale. Evaluarea și acreditarea se fac la nivelul unității cu personalitate juridică pentru fiecare nivel, filieră și domeniu de calificare profesională, după caz.",
        "Rapoartele de evaluare externă sunt analizate și aprobate de Consiliul agenției. Acreditarea adaugă drepturilor obținute prin autorizare dreptul de a emite diplome, certificate și alte acte de studii recunoscute de Minister și dreptul de a organiza, după caz, examen de absolvire.",
        "Diferența de examen: autorizarea permite înscrierea și școlarizarea; acreditarea permite și emiterea actelor de studii recunoscute."
      ),
      [
        "După 3 evaluări anuale consecutive favorabile se poate solicita acreditarea.",
        "Acreditarea se acordă prin ordin al ministrului.",
        "Rapoartele externe sunt analizate și aprobate de Consiliul agenției.",
        "Acreditarea conferă dreptul de a emite acte de studii recunoscute și, după caz, de a organiza examen de absolvire."
      ],
      [
        Q("După câte evaluări anuale consecutive favorabile poate unitatea solicita acreditarea?", ["După trei", "După una", "După zece", "Fără nicio evaluare"], 0, "Art. 240 alin. (2) stabilește pragul de trei evaluări anuale consecutive favorabile."),
        Q("Prin ce act se acordă acreditarea?", ["Prin ordin al ministrului educației", "Prin decizia comitetului de părinți", "Prin contractul directorului", "Prin hotărârea clasei"], 0, "Acreditarea se acordă prin ordin, la propunerea agenției."),
        Q("Ce drept suplimentar oferă acreditarea față de autorizarea provizorie?", ["Dreptul de a emite acte de studii recunoscute", "Dreptul de a evita toate standardele", "Dreptul de a funcționa fără evaluări", "Dreptul de a elimina curriculumul"], 0, "Acreditarea permite emiterea diplomelor, certificatelor și altor acte de studii recunoscute.")
      ],
      N(
        "Art. 240 — După trei rapoarte anuale favorabile, unitatea autorizată poate solicita acreditarea, acordată prin ordin de ministru.",
        "Acreditarea certifică standardele și permite emiterea actelor de studii recunoscute."
      )
    ),
    L(
      241,
      "Procedura și termenul acreditării",
      "12 min",
      "raport intern · cerere · comisie · vizită · 2 ani · prima promoție · lichidare · specializări noi",
      N(
        "Articolul 241 descrie procedura de acreditare. Unitatea autorizată provizoriu elaborează raportul de evaluare internă raportat la standardele etapei de acreditare și îl depune la agenție împreună cu cererea de evaluare externă și acreditare.",
        "Agenția numește comisia de experți, care analizează raportul intern, verifică prin vizite standardele din domeniile art. 233 și redactează raportul extern. Agenția validează raportul și propune Ministerului acreditarea sau neacreditarea.",
        "Termenul maxim pentru depunerea cererii este de doi ani de la absolvirea primei promoții. Nerespectarea termenului poate conduce la încetarea autorizației de funcționare provizorie. Pentru un nivel, o specializare, o calificare sau un program, termenul curge de la absolvirea completă a nivelului de către prima promoție; sancțiunea este declanșarea lichidării, fără dreptul de a organiza admitere.",
        "Unitățile acreditate pot înființa alte specializări în cadrul profilurilor deja autorizate sau acreditate, pe baza acordului agenției, potrivit procedurii stabilite prin ordin al ministrului.",
        "Numărul de memorat este 2: cererea de acreditare se depune în maximum doi ani de la absolvirea primei promoții."
      ),
      [
        "Procedura pornește de la raportul intern și cererea de acreditare.",
        "Comisia de experți face analiza și vizita externă.",
        "Termenul maxim este 2 ani de la absolvirea primei promoții.",
        "Specializările noi din profiluri existente necesită acordul agenției."
      ],
      [
        Q("Care este termenul maxim de depunere a cererii de acreditare?", ["2 ani de la absolvirea primei promoții", "30 de zile de la înființare", "5 ani de la angajarea directorului", "Nu există termen"], 0, "Art. 241 alin. (2) stabilește termenul de doi ani."),
        Q("Ce consecință poate avea depășirea termenului?", ["Încetarea autorizației sau declanșarea lichidării fără drept de admitere, după caz", "Acreditarea automată", "Prelungirea nelimitată a autorizării", "Acordarea gradației de merit"], 0, "Legea leagă termenul de sancțiuni privind autorizația și lichidarea."),
        Q("Ce este necesar pentru noi specializări în profiluri deja autorizate sau acreditate?", ["Acordul agenției de calitate", "Numai acordul unui elev", "Exclusiv acordul furnizorului de manuale", "Nicio procedură"], 0, "Art. 241 alin. (3) condiționează înființarea de acordul agenției.")
      ],
      N(
        "Art. 241 — Reglementează raportul intern, evaluarea externă, propunerea de acreditare și termenul maxim de 2 ani de la prima promoție.",
        "Depășirea termenului atrage consecințele prevăzute de lege, inclusiv lichidarea fără drept de admitere, după caz."
      )
    ),
    L(
      242,
      "Transmiterea rapoartelor anuale după acreditare",
      "5 min",
      "acreditare · raport anual intern · la cererea agenției · din proprie inițiativă · transmitere",
      N(
        "Articolul 242 reglementează circuitul rapoartelor anuale de evaluare internă după obținerea acreditării.",
        "Rapoartele anuale de la nivelul unității se transmit agenției de calitate în două situații: la cererea agenției sau din propria inițiativă a unității.",
        "Textul nu spune că orice raport este transmis automat într-o dată fixă, ci indică cele două modalități de inițiere a transmiterii. Obligația unității de a elabora anual raportul și de a-l face cunoscut beneficiarilor rezultă deja din art. 234.",
        "Pentru director, buna practică este ca raportul să fie complet, public și disponibil pentru transmitere, deoarece poate fi solicitat în cadrul monitorizării sau evaluării."
      ),
      [
        "Art. 242 se aplică după acreditare.",
        "Sunt vizate rapoartele anuale de evaluare internă.",
        "Transmiterea are loc la cererea agenției sau din inițiativa unității.",
        "Elaborarea și publicitatea anuală a raportului sunt corelate cu art. 234."
      ],
      [
        Q("Ce documente sunt vizate de art. 242?", ["Rapoartele anuale de evaluare internă a calității", "Contractele de transport", "Fișele medicale individuale", "Dosarele de pensionare"], 0, "Articolul privește rapoartele interne anuale ale unității acreditate."),
        Q("Când se transmit aceste rapoarte agenției?", ["La cererea agenției sau din propria inițiativă a unității", "Numai la cererea unui singur elev", "Exclusiv după desființare", "Niciodată după acreditare"], 0, "Legea prevede două modalități de transmitere."),
        Q("Acreditarea elimină evaluarea internă anuală?", ["Nu", "Da, definitiv", "Da, pentru toate unitățile publice", "Da, dacă directorul are gradul I"], 0, "Unitatea acreditată continuă să elaboreze rapoarte anuale de evaluare internă.")
      ],
      "Art. 242 — După acreditare, rapoartele anuale de evaluare internă se transmit agenției la cererea acesteia sau din inițiativa unității."
    ),
    L(
      243,
      "Evaluarea periodică și procedura simplificată",
      "12 min",
      "din 5 în 5 ani · avertizare · termen 1 an · reevaluare · lichidare · 3 calificative · procedură simplificată",
      N(
        "Articolul 243 stabilește că unitățile acreditate se supun evaluării externe obligatorii din cinci în cinci ani.",
        "Dacă standardele de calitate asumate nu sunt îndeplinite, agenția propune Ministerului aplicarea avertizării și acordarea unui termen de un an pentru aducerea activității la nivelul standardelor naționale. Furnizorul întocmește un nou raport intern, iar Ministerul dispune o nouă evaluare externă.",
        "Dacă și noul raport extern este nefavorabil, Ministerul, la propunerea agenției, dispune declanșarea procedurii de lichidare, fără dreptul de a organiza admitere.",
        "Evaluarea periodică poate urma o procedură simplificată după obținerea a trei calificative de menținere a acreditării. Procedura simplificată face parte din metodologiile aplicabile. Dacă unitatea nu îndeplinește criteriile acestei proceduri, agenția declanșează evaluarea externă obișnuită.",
        "Cifrele de memorat sunt 5–1–3: evaluare la 5 ani; termen de remediere 1 an; procedură simplificată după 3 calificative de menținere."
      ),
      [
        "Evaluarea externă periodică este obligatorie din 5 în 5 ani.",
        "Avertizarea poate fi însoțită de un termen de 1 an pentru remediere.",
        "Un al doilea raport extern nefavorabil poate conduce la lichidare fără admitere.",
        "Procedura simplificată poate urma după 3 calificative de menținere a acreditării."
      ],
      [
        Q("La ce interval are loc evaluarea externă periodică obligatorie?", ["Din 5 în 5 ani", "În fiecare lună", "O singură dată", "Din 20 în 20 de ani"], 0, "Art. 243 alin. (1) stabilește intervalul de cinci ani."),
        Q("Ce termen se poate acorda unității avertizate pentru remediere?", ["Un an", "Trei zile", "Zece ani", "Niciun termen"], 0, "Ministerul poate acorda un an pentru aducerea activității la standarde."),
        Q("După câte calificative de menținere a acreditării se poate folosi procedura simplificată?", ["După trei", "După unul", "După zece", "Procedura nu există"], 0, "Art. 243 alin. (3) indică trei calificative de menținere.")
      ],
      N(
        "Art. 243 — Unitățile acreditate sunt evaluate extern la fiecare 5 ani; neîndeplinirea standardelor poate conduce la avertizare, termen de un an, reevaluare și, în final, lichidare.",
        "După trei calificative de menținere a acreditării se poate aplica procedura simplificată."
      )
    ),
    L(
      244,
      "Măsuri pentru nerespectarea standardelor de calitate",
      "9 min",
      "avertizare · monitorizare · reorganizare · desființare · lichidare · interesul superior al elevului · bază materială",
      N(
        "Articolul 244 califică nerespectarea criteriilor, standardelor și normelor de calitate drept abateri care afectează buna funcționare a sistemului național de învățământ.",
        "La propunerea agenției, Ministerul poate dispune prin ordin: avertizarea unității, cu perioada de implementare a măsurilor de îmbunătățire; monitorizarea; demararea reorganizării, pentru unitățile de stat; ori desființarea și lichidarea, cu respectarea interesului superior al elevului.",
        "Ordinul trebuie să stabilească obligatoriu măsurile privind situația școlară a elevilor și cele referitoare la baza materială a unității. Legea nu permite ca sancțiunea instituției să lase neclarificate traseul elevilor și patrimoniul.",
        "Pentru manager, ordinea măsurilor arată o logică graduală, dar alegerea depinde de gravitatea și persistența neconformităților: avertizare, monitorizare, reorganizare, desființare."
      ),
      [
        "Nerespectarea standardelor constituie abatere privind buna funcționare a sistemului.",
        "Măsurile pot fi avertizare, monitorizare, reorganizare sau desființare/lichidare.",
        "Reorganizarea este menționată pentru unitățile de stat.",
        "Ordinul trebuie să reglementeze situația elevilor și baza materială."
      ],
      [
        Q("Care dintre următoarele este o măsură prevăzută de art. 244?", ["Monitorizarea unității", "Acordarea automată a acreditării", "Eliminarea situației școlare a elevilor", "Suspendarea tuturor standardelor"], 0, "Monitorizarea este una dintre măsurile pe care Ministerul le poate dispune."),
        Q("Ce principiu trebuie respectat la desființare și lichidare?", ["Interesul superior al elevului", "Interesul exclusiv al furnizorului", "Secretizarea deciziei", "Eliminarea dreptului la continuarea studiilor"], 0, "Art. 244 alin. (1) lit. d) impune protejarea interesului superior al elevului."),
        Q("Ce trebuie să cuprindă obligatoriu ordinul de măsuri?", ["Soluții privind situația școlară a elevilor și baza materială", "Numai programul de vacanță", "Doar lista manualelor", "Exclusiv planul de transport"], 0, "Art. 244 alin. (2) cere reglementarea acestor două aspecte.")
      ],
      "Art. 244 — Ministerul poate dispune avertizare, monitorizare, reorganizare ori desființare și lichidare; ordinul trebuie să protejeze situația elevilor și să reglementeze baza materială."
    ),
    L(
      245,
      "Activități educaționale nelegale și răspunderea",
      "11 min",
      "răspundere civilă · contravențională · penală · denumiri protejate · autorizare · desființare · personal necalificat · fraudă",
      N(
        "Articolul 245 protejează legalitatea furnizării educației. Desfășurarea activităților de învățământ și eliberarea actelor de studii în alte condiții decât cele legale atrag, după caz, răspundere civilă, contravențională sau penală.",
        "Sesizarea organelor de urmărire penală poate fi făcută de Ministerul Educației sau de orice persoană fizică ori juridică lezată. Numai unitățile autorizate provizoriu sau acreditate pot desfășura activități de învățământ și pot folosi denumiri precum liceu, școală, grădiniță ori altele similare.",
        "Dacă o unitate de stat, particulară sau confesională refuză procedurile legale de asigurare a calității, Ministerul poate iniția desființarea. Desființarea oricărei unități se realizează prin ordin al ministrului, în condițiile legii.",
        "Încălcările privind tratamentul elevilor sau preșcolarilor, utilizarea personalului necalificat ori gestionarea frauduloasă a resurselor financiare pot atrage ridicarea autorizației și/sau desființarea unității.",
        "Pentru director, calitatea este legată direct de legalitate, protecția beneficiarilor, calificarea personalului și integritatea financiară."
      ),
      [
        "Activitatea și actele de studii nelegale pot atrage răspundere civilă, contravențională sau penală.",
        "Denumirile școală, liceu sau grădiniță pot fi folosite numai de unități autorizate ori acreditate.",
        "Refuzul procedurilor de calitate poate conduce la desființare.",
        "Tratamentul nelegal, personalul necalificat și frauda financiară pot determina retragerea autorizației."
      ],
      [
        Q("Cine poate folosi legal denumirea de liceu, școală sau grădiniță?", ["Unitățile autorizate provizoriu sau acreditate", "Orice societate comercială, fără evaluare", "Numai persoanele fizice", "Orice grup informal"], 0, "Art. 245 alin. (2) protejează aceste denumiri."),
        Q("Ce forme de răspundere pot apărea pentru activități sau acte de studii nelegale?", ["Civilă, contravențională sau penală, după caz", "Numai morală", "Exclusiv disciplinară pentru elevi", "Nicio formă de răspundere"], 0, "Art. 245 alin. (1) enumeră cele trei forme."),
        Q("Ce faptă poate conduce la ridicarea autorizației?", ["Utilizarea personalului necalificat sau gestionarea frauduloasă a resurselor", "Publicarea raportului CEAC", "Respectarea standardelor", "Participarea părinților la consultare"], 0, "Art. 245 alin. (5) enumeră aceste încălcări grave.")
      ],
      "Art. 245 — Activitatea educațională și actele de studii nelegale atrag răspundere; numai unitățile autorizate sau acreditate pot funcționa și folosi denumirile specifice."
    ),
    L(
      246,
      "Furnizorii cu curriculum al altui stat",
      "10 min",
      "protocol bilateral · acreditare internațională · aviz · registru special · 5 ani · sistem românesc · interdicție",
      N(
        "Articolul 246 reglementează organizațiile care școlarizează în România după curriculumul altui stat sau după un curriculum acreditat internațional.",
        "Ele pot funcționa dacă există un protocol sau acord bilateral între autoritățile ori instituțiile similare din România și statul al cărui sistem este adoptat sau dacă organizația este acreditată în acel sistem educațional și face parte din el.",
        "Organizațiile se supun unei proceduri de avizare a agenției și sunt înscrise într-un registru special. Procedura de evaluare și avizare se elaborează de agenție și se aprobă prin ordin al ministrului.",
        "Menținerea avizului trebuie solicitată din cinci în cinci ani. În lipsa acestei proceduri, unitatea este considerată desființată, iar continuarea activității în România este interzisă.",
        "Dacă furnizorul nu îndeplinește condițiile pentru curriculum străin, trebuie să intre în evaluarea și acreditarea sistemului educațional românesc. Legea interzice pe teritoriul României desfășurarea educației în alte condiții decât cele legale."
      ),
      [
        "Funcționarea poate avea bază într-un acord bilateral sau în acreditarea din sistemul respectiv.",
        "Furnizorul este avizat și înscris într-un registru special.",
        "Menținerea avizului se solicită din 5 în 5 ani.",
        "În lipsa condițiilor pentru curriculum străin, se aplică evaluarea și acreditarea românească."
      ],
      [
        Q("Care este una dintre bazele legale pentru funcționarea cu curriculumul altui stat?", ["Un protocol/acord bilateral sau acreditarea în sistemul educațional respectiv", "O simplă reclamă online", "Acordul verbal al unui părinte", "Închirierea unei săli"], 0, "Art. 246 alin. (1) prevede cele două rute."),
        Q("La ce interval se solicită menținerea avizului?", ["Din 5 în 5 ani", "Lunar", "O singură dată, fără reînnoire", "La 20 de ani"], 0, "Organizațiile din registrul special solicită reavizarea la fiecare cinci ani."),
        Q("Ce trebuie să facă furnizorul care nu îndeplinește condițiile pentru curriculum străin?", ["Să se supună evaluării și acreditării în sistemul românesc", "Să continue fără nicio autorizare", "Să emită singur diplome de stat", "Să elimine toate standardele"], 0, "Art. 246 alin. (4) îl trimite către sistemul românesc de evaluare și acreditare.")
      ],
      "Art. 246 — Furnizorii cu curriculum străin funcționează pe baza acordului bilateral ori a acreditării în sistemul respectiv, cu avizare și reavizare la fiecare 5 ani."
    ),
    L(
      247,
      "Calitatea unităților de educație extrașcolară",
      "11 min",
      "acreditare · evaluare la 5 ani · metodologie specifică · reprofilare · acord · CIS · avertizare · 1 an",
      N(
        "Articolul 247 aplică regulile calității unităților de educație extrașcolară. Aceste unități se acreditează și sunt evaluate periodic din cinci în cinci ani, potrivit unei metodologii specifice aprobate prin ordin al ministrului educației.",
        "Reprofilarea și înființarea de noi cercuri în palate și cluburi ale copiilor, precum și de noi discipline sau ramuri sportive în cluburile sportive școlare se realizează pe baza acordului agenției. Pentru ramurile sportive trebuie respectată și înregistrarea în Certificatul de identitate sportivă emis de autoritatea competentă în domeniul sportului.",
        "Dacă evaluarea externă constată neîndeplinirea standardelor, agenția propune avertizarea și acordarea unui termen de un an pentru remediere. Unitatea întocmește un nou raport intern, iar Ministerul dispune o nouă evaluare externă. Dacă și aceasta este nefavorabilă, se ajunge la măsurile prevăzute de lege.",
        "Textul consolidat păstrează la finalul alin. (3) o trimitere la art. 232, deși măsurile instituționale de avertizare, monitorizare, reorganizare și lichidare sunt enumerate la art. 244. Pentru învățare, rețineți formularea legală existentă, dar și necesitatea verificării corelării juridice în aplicare.",
        "În anul 2026, referirile la ARACIIP se interpretează în cadrul regimului tranzitoriu în care funcționează ARACIP, până la operaționalizarea noii structuri."
      ),
      [
        "Unitățile extrașcolare se acreditează și sunt evaluate din 5 în 5 ani.",
        "Metodologia specifică se aprobă prin ordin al ministrului.",
        "Reprofilarea și noile cercuri sau ramuri sportive necesită acordul agenției.",
        "Neconformitatea poate conduce la avertizare, termen de 1 an și reevaluare."
      ],
      [
        Q("La ce interval sunt evaluate periodic unitățile de educație extrașcolară?", ["Din 5 în 5 ani", "În fiecare săptămână", "O singură dată", "Din 15 în 15 ani"], 0, "Art. 247 alin. (1) stabilește evaluarea la cinci ani."),
        Q("Ce este necesar pentru înființarea unei noi ramuri sportive într-un club sportiv școlar?", ["Acordul agenției și respectarea înregistrării în Certificatul de identitate sportivă", "Numai aprobarea unui singur elev", "Exclusiv un contract de sponsorizare", "Nicio formalitate"], 0, "Art. 247 alin. (2) cere acordul de calitate și corelarea cu CIS."),
        Q("Ce termen de remediere se acordă după avertizare?", ["Un an", "Trei zile", "Cinci ani", "Niciun termen"], 0, "Mecanismul de remediere de la alin. (3) prevede un termen de un an.")
      ],
      N(
        "Art. 247 — Unitățile de educație extrașcolară se acreditează și sunt evaluate la fiecare 5 ani, după o metodologie specifică.",
        "Reprofilarea și noile cercuri, discipline sau ramuri sportive necesită acordul agenției; neîndeplinirea standardelor atrage avertizare, termen de un an și reevaluare."
      )
    )
  );
})();
