"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–133: verificare 12.08.2026";
  DATA.modules.push({
    id: 11,
    title: "Conducerea sistemului și a unităților de învățământ",
    articles: "115–133",
    chapter: "Capitolul IX",
    startArticle: 115,
    endArticle: 133
  });

  DATA.lessons.push(
    L(
      115,
      "Rolul și atribuțiile Ministerului Educației",
      "11 min",
      "politici naționale · coordonare · curriculum · resurse umane · raport anual · structura anului școlar",
      "Articolul 115 definește Ministerul Educației drept organul de specialitate al administrației publice centrale care elaborează și implementează politica națională în învățământul preuniversitar. Ministerul are drept de inițiativă și de execuție în politica financiară și în domeniul resurselor umane din educație.\n\nAtribuțiile sale pot fi memorate în cinci grupe. Prima privește conducerea sistemului: elaborează, aplică, monitorizează și evaluează politicile naționale, coordonează și controlează sistemul și răspunde de evaluarea lui pe baza standardelor naționale. A doua privește conținutul educației: coordonează și aprobă curriculumul național și sistemul național de evaluare, evaluează, aprobă și achiziționează manualele și stabilește structura anului școlar prin ordin.\n\nA treia grupă privește accesul și sprijinul: coordonează școlarizarea și asistența psihopedagogică pentru elevii cu CES, analizează echitatea accesului, progresului și finalizării studiilor și creează cadrul pentru elevii capabili de performanțe înalte. A patra privește personalul: elaborează politicile și normativele de personal, coordonează formarea inițială și continuă și concursul național pentru posturile didactice. A cincea privește reglementarea, datele și transparența: elaborează metodologii și regulamente-cadru, omologhează mijloacele de învățământ, colectează și publică date și coordonează platformele strategice.\n\nPână la 31 decembrie a fiecărui an, ministerul face public și prezintă Parlamentului raportul privind starea învățământului preuniversitar. Poate înființa prin ordin comisii și consilii naționale, poate propune Guvernului agenții, menține Corpul de experți externi pentru monitorizare și control și poate încheia protocoale publice de colaborare.\n\nFormula de memorare este: politică, curriculum, oameni, date și control. Ministerul stabilește cadrul național; structurile teritoriale și școlile îl aplică.",
      [
        "Ministerul elaborează și implementează politica națională și coordonează sistemul.",
        "Structura anului școlar se stabilește prin ordin al ministrului educației.",
        "Raportul privind starea învățământului preuniversitar se publică și se prezintă Parlamentului până la 31 decembrie."
      ],
      [
        Q("Cine elaborează și implementează politica națională în învățământul preuniversitar?", ["Consiliile locale", "Ministerul Educației", "Fiecare consiliu profesoral", "Asociațiile de părinți"], 1, "Art. 115 atribuie Ministerului Educației rolul central de elaborare și implementare a politicii naționale."),
        Q("Prin ce act se stabilește structura anului școlar?", ["Prin hotărârea fiecărei școli", "Prin ordin al ministrului educației", "Prin decizia consiliului local", "Prin contractul educațional"], 1, "Structura anului școlar este stabilită prin ordin al ministrului educației."),
        Q("Până la ce dată este prezentat anual Parlamentului raportul privind starea învățământului preuniversitar?", ["31 august", "1 septembrie", "31 decembrie", "15 ianuarie"], 2, "Termenul expres prevăzut de art. 115 este 31 decembrie.")
      ],
      "Art. 115 — Ministerul Educației elaborează și implementează politica națională, coordonează și controlează sistemul, aprobă curriculumul și evaluarea, gestionează politicile de resurse umane, stabilește structura anului școlar și publică anual, până la 31 decembrie, raportul privind starea învățământului preuniversitar."
    ),
    L(
      116,
      "Direcțiile județene de învățământ preuniversitar",
      "11 min",
      "DJIP/DMBIP · servicii deconcentrate · atribuții teritoriale · concurs · prorogare 2027–2028",
      "Articolul 116 proiectează înființarea direcțiilor județene de învățământ preuniversitar și a Direcției Municipiului București, prescurtate DJIP/DMBIP. Ele sunt servicii publice deconcentrate ale Ministerului Educației, cu personalitate juridică, finanțate din bugetul de stat prin bugetul ministerului și rezultate din reorganizarea inspectoratelor școlare.\n\nPentru concurs trebuie reținută situația aplicării: prevederile art. 116–119 sunt prorogate până la începutul anului școlar 2027–2028. În august 2026, articolul trebuie cunoscut ca arhitectură legală viitoare, dar inspectoratele școlare continuă să funcționeze până la operaționalizarea noilor structuri.\n\nDJIP/DMBIP vor aplica politicile ministerului în teritoriu, vor monitoriza legislația și calitatea managementului, vor coordona admiterea, evaluările naționale, examenele de certificare și concursurile școlare și vor înainta rețeaua școlară ministerului. Vor monitoriza participarea la educație, abandonul, segregarea, proiectele naționale și europene și vor sprijini unitățile în accesarea fondurilor.\n\nÎn resurse umane, vor oferi consiliere, vor monitoriza posturile, vor organiza concursul național de ocupare a posturilor didactice, vor gestiona date și vor realiza auditul periodic al resursei umane. DJIP/DMBIP va avea consiliu de administrație și consiliu consultativ. Conducerea va fi asigurată de un director general și directori generali adjuncți numiți prin ordin al ministrului, după concurs.\n\nFormula de memorare este: structură teritorială a ministerului, politici și control managerial, examene și rețea, participare și proiecte, resurse umane — dar aplicare prorogată până în 2027–2028.",
      [
        "DJIP/DMBIP sunt proiectate ca servicii publice deconcentrate ale ministerului, cu personalitate juridică.",
        "Ele vor coordona examenele, rețeaua școlară, managementul și resursele umane în teritoriu.",
        "Aplicarea art. 116–119 este prorogată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Ce natură juridică vor avea DJIP/DMBIP?", ["Asociații private", "Servicii publice deconcentrate ale ministerului, cu personalitate juridică", "Comisii ale consiliilor locale", "Structuri fără personalitate juridică ale școlilor"], 1, "Art. 116 le definește ca servicii publice deconcentrate ale Ministerului Educației, cu personalitate juridică."),
        Q("Până când este prorogată aplicarea art. 116–119?", ["Până la 1 ianuarie 2027", "Până la începutul anului școlar 2027–2028", "Până la sfârșitul anului 2026", "Nu este prorogată"], 1, "Legea nr. 141/2025 a prorogat aplicabilitatea art. 116–119 până la începutul anului școlar 2027–2028."),
        Q("Care activitate intră între atribuțiile teritoriale prevăzute pentru DJIP/DMBIP?", ["Aprobarea Constituției", "Coordonarea admiterii și a evaluărilor naționale la nivel județean", "Stabilirea taxelor universitare", "Emiterea diplomelor universitare"], 1, "Coordonarea admiterii, evaluărilor naționale și examenelor de certificare este o atribuție expresă.")
      ],
      "Art. 116 — Reglementează DJIP/DMBIP ca servicii publice deconcentrate ale ministerului, cu atribuții privind aplicarea politicilor, managementul, examenele, rețeaua, participarea și resursele umane. Aplicabilitatea art. 116–119 este prorogată până la începutul anului școlar 2027–2028."
    ),
    L(
      117,
      "ARACIIP: calitate și inspecție școlară",
      "13 min",
      "ARACIIP · autorizare · acreditare · evaluare periodică · inspecție · CNIS · registre · prorogare",
      "Articolul 117 reglementează Agenția Română pentru Asigurarea Calității și Inspecție în Învățământul Preuniversitar — ARACIIP. Aceasta este concepută ca instituție publică de interes național, cu personalitate juridică, aflată în coordonarea Ministerului Educației. Ar urma să rezulte prin reorganizarea ARACIP și prin preluarea atribuțiilor de inspecție generală și tematică de la inspectoratele școlare.\n\nȘi aici este esențială situația tranzitorie: art. 117 face parte din intervalul 116–119, a cărui aplicare este prorogată până la începutul anului școlar 2027–2028. În august 2026, ARACIP și inspectoratele școlare își exercită în continuare atribuțiile potrivit cadrului tranzitoriu; ARACIIP este structura prevăzută pentru etapa următoare.\n\nARACIIP va elabora standarde și metodologii de calitate, va realiza evaluarea instituțională în vederea autorizării, acreditării și evaluării periodice și va propune ministerului acordarea sau retragerea autorizării ori acreditării. Va realiza evaluarea externă prin experți înscriși în Registrul național al experților în evaluare și acreditare și va publica și actualiza registrele unităților autorizate, acreditate și evaluate periodic. Alin. (10¹), introdus în 2024, prevede că modelul, conținutul și procedura registrelor se aprobă prin ordin al ministrului, la propunerea ARACIIP.\n\nAgenția va integra și inspecția școlară generală, tematică și de specialitate. La nivelul ei va funcționa Comisia Națională pentru Inspecție Școlară, cu rol în verificarea eticii și deontologiei. Președintele ARACIIP este ales prin concurs pentru un mandat de 4 ani. La nivel județean, atribuțiile se exercită prin birouri județene și al municipiului București.\n\nFormula de memorare este: o singură agenție pentru calitate și inspecție; standarde, autorizare, acreditare, evaluare periodică, registre și inspecții; mandat de 4 ani; aplicare amânată până în 2027–2028.",
      [
        "ARACIIP va reuni asigurarea calității cu inspecția școlară.",
        "Președintele este selectat prin concurs pentru un mandat de 4 ani.",
        "Aplicarea art. 117 este prorogată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Ce domenii va reuni ARACIIP?", ["Finanțarea locală și transportul", "Asigurarea calității și inspecția școlară", "Învățământul superior și cercetarea medicală", "Numai activitățile extrașcolare"], 1, "ARACIIP este proiectată să integreze evaluarea/asigurarea calității și inspecția școlară."),
        Q("Care este durata mandatului președintelui ARACIIP?", ["1 an", "2 ani", "4 ani", "6 ani"], 2, "Art. 117 prevede un mandat de 4 ani, în urma unui concurs."),
        Q("Cine aprobă modelul și procedura registrelor prevăzute la art. 117 alin. (10) lit. r)?", ["Fiecare consiliu local", "Ministrul educației, prin ordin, la propunerea ARACIIP", "Consiliul profesoral", "Prefectul"], 1, "Alin. (10¹) prevede aprobarea prin ordin al ministrului, la propunerea ARACIIP.")
      ],
      "Art. 117 — Reglementează ARACIIP, instituție națională pentru standarde de calitate, autorizare, acreditare, evaluare externă, registre și inspecție școlară. Președintele are mandat de 4 ani. Aplicarea articolului este prorogată până la începutul anului școlar 2027–2028."
    ),
    L(
      118,
      "Centrul Național pentru Formare și Dezvoltare în Cariera Didactică",
      "9 min",
      "CNFDCD · formare continuă · mentorat · licențiere · CCD · plan național · prorogare",
      "Articolul 118 reglementează Centrul Național pentru Formare și Dezvoltare în Cariera Didactică — CNFDCD. Este o instituție publică de interes național, în subordinea Ministerului Educației, finanțată de la bugetul de stat și din venituri proprii. Aplicarea articolului este însă prorogată, împreună cu art. 116–119, până la începutul anului școlar 2027–2028.\n\nCNFDCD va identifica nevoile de formare, va dezvolta curriculumul de formare, va pregăti formatori și va furniza formare continuă pentru personalul didactic de predare, conducere, îndrumare și control și pentru personalul didactic auxiliar. Va coordona rețeaua școlilor de aplicație, mentoratul didactic și licențierea în cariera didactică.\n\nCentrul va recunoaște și echivala niveluri de competență didactică și rezultate ale învățării nonformale și informale, va realiza analize asupra nevoilor de formare și va oferi programe de formare și consiliere legate de PDI și de recomandările inspecțiilor. Va propune anual un plan național de formare continuă, aprobat prin ordin al ministrului.\n\nActivitățile teritoriale vor fi realizate prin centrele pentru cariera didactică, prescurtate CCD, cu personalitate juridică, subordonate CNFDCD și rezultate din reorganizarea caselor corpului didactic. La nivelul lor se vor înregistra și monitoriza portofoliile profesionale și programele de formare.\n\nFormula de memorare este: nevoi, formare, mentorat, licențiere, portofoliu și impact — toate coordonate național, prin CCD, după operaționalizarea din 2027–2028.",
      [
        "CNFDCD va coordona formarea continuă, mentoratul și licențierea în cariera didactică.",
        "Activitatea teritorială este prevăzută prin CCD, rezultate din reorganizarea caselor corpului didactic.",
        "Aplicarea art. 118 este prorogată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Care activitate este prevăzută pentru CNFDCD?", ["Stabilirea impozitelor locale", "Coordonarea mentoratului didactic și a licențierii în carieră", "Organizarea alegerilor locale", "Autorizarea universităților"], 1, "Mentoratul didactic și licențierea în cariera didactică sunt atribuții expres prevăzute."),
        Q("Prin ce structuri teritoriale sunt prevăzute activitățile CNFDCD?", ["Prin centrele pentru cariera didactică — CCD", "Prin consiliile elevilor", "Prin primării", "Prin bibliotecile județene"], 0, "Art. 118 prevede realizarea activităților prin CCD, subordonate CNFDCD."),
        Q("Cum se aprobă planul național de formare continuă propus de CNFDCD?", ["Prin ordin al ministrului educației", "Prin hotărârea fiecărei școli", "Prin referendum", "Prin decizia prefectului"], 0, "Planul național este aprobat anual prin ordin al ministrului educației.")
      ],
      "Art. 118 — Reglementează CNFDCD și CCD pentru formare continuă, mentorat, licențiere, recunoașterea competențelor și monitorizarea portofoliilor profesionale. Aplicarea este prorogată până la începutul anului școlar 2027–2028."
    ),
    L(
      119,
      "Reorganizarea instituțiilor și consiliul consultativ județean",
      "8 min",
      "preluare · subrogare · desființare · consiliu consultativ · 5 membri · prefect · prorogare",
      "Articolul 119 descrie trecerea de la instituțiile actuale la structurile noi. DJIP/DMBIP și CCD urmează să preia, prin protocol, activitățile, drepturile, obligațiile, bunurile și personalul inspectoratelor școlare și al caselor corpului didactic. La datele stabilite prin ordinele de organizare, inspectoratele și casele corpului didactic se vor desființa.\n\nÎn documentele și raporturile juridice, denumirile vechi vor fi înlocuite cu cele ale noilor structuri. Pentru componenta de inspecție și asigurare a calității, referințele la inspectorate și ARACIP vor fi citite ca referințe la ARACIIP. Întregul mecanism este prorogat până la începutul anului școlar 2027–2028, deci în 2026 nu trebuie prezentat ca reorganizare deja finalizată.\n\nArticolul înființează și Consiliul consultativ pentru învățământ preuniversitar la nivelul fiecărui județ și al municipiului București. El sprijină administrarea și dezvoltarea rețelei școlare și monitorizează capacitatea autorităților locale de a susține educația. Avizează raportul privind starea învățământului elaborat de DJIP/DMBIP.\n\nConsiliul are 5 membri: câte un reprezentant al DJIP/DMBIP, biroului județean ARACIIP, CCD, prefectului și consiliului județean ori CGMB. Este condus de prefect sau de reprezentantul său. Sindicatele, elevii, părinții, agenții economici și minoritățile prevăzute de lege participă ca observatori.\n\nFormula de memorare este: preluare și subrogare; desființare la operaționalizare; consiliu de 5 membri, condus de prefect; aplicare din 2027–2028.",
      [
        "DJIP/DMBIP și CCD vor prelua prin protocol drepturile, obligațiile, bunurile și personalul structurilor reorganizate.",
        "Consiliul consultativ județean are 5 membri și este condus de prefect sau reprezentantul său.",
        "Întregul mecanism al art. 119 este prorogat până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Câți membri are Consiliul consultativ pentru învățământ preuniversitar prevăzut de art. 119?", ["3", "5", "7", "11"], 1, "Art. 119 stabilește o componență de 5 membri."),
        Q("Cine conduce Consiliul consultativ județean?", ["Directorul celei mai mari școli", "Prefectul sau un reprezentant al acestuia", "Președintele consiliului elevilor", "Inspectorul de specialitate"], 1, "Consiliul este condus de prefect sau de reprezentantul lui."),
        Q("Cum se realizează preluarea activităților și bunurilor instituțiilor reorganizate?", ["Prin protocol", "Prin contract educațional", "Prin referendum local", "Prin hotărârea consiliului profesoral"], 0, "Art. 119 prevede preluarea pe bază de protocol și subrogarea în drepturi și obligații.")
      ],
      "Art. 119 — Reglementează preluarea prin protocol și subrogarea noilor structuri în drepturile și obligațiile inspectoratelor și caselor corpului didactic, precum și Consiliul consultativ județean de 5 membri, condus de prefect. Aplicarea este prorogată până în 2027–2028."
    ),
    L(
      120,
      "CJRAE/CMBRAE și serviciile de asistență educațională",
      "10 min",
      "personalitate juridică · coordonare metodologică · consiliere · logopedie · CES · violență · integrare",
      "Articolul 120 reglementează centrele județene de resurse și asistență educațională și centrul municipiului București — CJRAE/CMBRAE. Acestea au personalitate juridică, sunt subordonate Ministerului Educației și, în arhitectura legii, sunt coordonate metodologic de CNEI. Alin. (1¹), introdus în 2024, precizează că până la înființarea CNEI, coordonarea metodologică se realizează de Ministerul Educației prin inspectoratele școlare.\n\nCJRAE/CMBRAE sunt instituții de învățământ special integrat care oferă, coordonează, monitorizează și evaluează servicii pentru copii și elevi, cadre didactice, părinți și comunitate. Ele coordonează metodologic activitatea consilierilor școlari, logopezilor, psihologilor, mediatorilor școlari, asistenților sociali, profesorilor itineranți și de sprijin și a cadrelor implicate în educația parentală.\n\nServiciile includ asistență psihopedagogică pentru elevii în risc de excluziune, consiliere vocațională și orientare școlară și profesională, terapii logopedice, evaluare și orientare între învățământul special și cel de masă, mediere școlară și sprijin pentru elevii cu CES integrați. Se adaugă educația parentală, intervenția în violență, prevenirea consumului de droguri și a delincvenței, prevenirea bullyingului și cyberbullyingului și facilitarea integrării sociale și culturale.\n\nFinanțarea se asigură prin bugetele locale ale consiliilor județene și ale sectoarelor municipiului București, din sumele defalcate din unele venituri ale bugetului de stat, potrivit regulilor de finanțare.\n\nFormula de memorare este: CJRAE coordonează specialiștii și serviciile — consiliere, logopedie, orientare, CES, mediere, prevenirea violenței și integrare.",
      [
        "CJRAE/CMBRAE au personalitate juridică și sunt instituții de învățământ special integrat.",
        "Până la înființarea CNEI, coordonarea metodologică se face de minister prin inspectoratele școlare.",
        "Serviciile acoperă consilierea, logopedia, CES, medierea, violența, comportamentele de risc și integrarea."
      ],
      [
        Q("Cine coordonează metodologic CJRAE/CMBRAE până la înființarea CNEI?", ["Ministerul Educației prin inspectoratele școlare", "Exclusiv consiliul local", "Universitățile", "Asociațiile de părinți"], 0, "Alin. (1¹) stabilește coordonarea metodologică de către minister prin inspectoratele școlare până la înființarea CNEI."),
        Q("Care serviciu intră în competența CJRAE/CMBRAE?", ["Emiterea diplomelor de bacalaureat", "Consilierea vocațională și terapiile logopedice", "Aprobarea bugetului de stat", "Numirea primarului"], 1, "Consilierea vocațională și terapiile logopedice sunt servicii expres enumerate."),
        Q("Ce categorie de personal este coordonată metodologic de CJRAE/CMBRAE?", ["Profesorii-consilieri școlari și profesorii-logopezi", "Judecătorii", "Medicii de familie din județ", "Personalul universitar din toate facultățile"], 0, "Art. 120 enumeră consilierii școlari, logopezii, psihologii, mediatorii și alte categorii de specialiști.")
      ],
      "Art. 120 — CJRAE/CMBRAE coordonează și furnizează servicii de asistență psihopedagogică, orientare, logopedie, sprijin CES, mediere, prevenirea violenței și integrare. Până la înființarea CNEI, coordonarea metodologică se face de minister prin inspectoratele școlare."
    ),
    L(
      121,
      "Centrul Național pentru Curriculum și Evaluare și Institutul de Științe ale Educației",
      "8 min",
      "CNCE · ISE · curriculum · evaluare · examinare · cercetare · politici bazate pe date",
      "Articolul 121 separă două funcții care se completează. Centrul Național pentru Curriculum și Evaluare — CNCE — coordonează elaborarea și revizuirea periodică a curriculumului național și sistemul național de evaluare și examinare. Institutul de Științe ale Educației — ISE — are funcția de cercetare, dezvoltare și inovare în educație.\n\nAmbele sunt prevăzute în subordinea Ministerului Educației și preiau activități și structuri specializate de la Centrul Național pentru Politici și Evaluare în Educație. Preluarea cuprinde personalul, drepturile, obligațiile, contractele, finanțările, litigiile și bunurile.\n\nCNCE poate colabora cu specialiști și cadre didactice cu experiență pe bază de contracte civile. ISE cercetează contexte, fenomene și procese educaționale pentru fundamentarea politicilor publice pe date și lucrează potrivit unui plan anual de cercetare aprobat prin ordin al ministrului.\n\nPentru învățământul în limbile minorităților, în ISE funcționează o secție de cercetare și inovare, iar în CNCE un compartiment de specialitate. Formula de memorare este: CNCE — curriculum și examene; ISE — cercetare și politici bazate pe dovezi.",
      [
        "CNCE coordonează curriculumul național și sistemul de evaluare și examinare.",
        "ISE realizează cercetare, dezvoltare și inovare pentru politici educaționale bazate pe date.",
        "Ambele structuri includ componente dedicate învățământului în limbile minorităților."
      ],
      [
        Q("Care este atribuția principală a CNCE?", ["Coordonarea curriculumului și a evaluării naționale", "Finanțarea transportului local", "Gestionarea cabinetelor medicale", "Aprobarea bugetelor consiliilor județene"], 0, "CNCE coordonează elaborarea/revizuirea curriculumului și sistemul național de evaluare și examinare."),
        Q("Care este rolul principal al ISE?", ["Cercetare, dezvoltare și inovare în educație", "Control fiscal", "Administrarea patrimoniului local", "Organizarea transportului școlar"], 0, "ISE fundamentează politicile publice prin cercetare educațională."),
        Q("În baza cărui document își desfășoară ISE activitatea de cercetare?", ["Un plan anual aprobat prin ordin al ministrului", "Contractul educațional al fiecărui elev", "Hotărârea consiliului elevilor", "Planul urbanistic general"], 0, "Art. 121 prevede un plan anual de cercetare aprobat prin ordin al ministrului educației.")
      ],
      "Art. 121 — CNCE coordonează curriculumul și evaluarea/examinarea, iar ISE realizează cercetare, dezvoltare și inovare pentru fundamentarea politicilor educaționale pe date."
    ),
    L(
      122,
      "Centrele de formare continuă în limbile minorităților",
      "4 min",
      "personalitate juridică · buget de stat · subordinea ministerului · hotărâre a Guvernului",
      "Articolul 122 reglementează centrele de formare continuă în limbile minorităților naționale. Ele au personalitate juridică, funcționează în subordinea Ministerului Educației și sunt finanțate integral din bugetul de stat, prin bugetul ministerului.\n\nAtribuțiile, structura, organizarea și funcționarea acestor centre nu sunt lăsate la decizia fiecărui centru, ci se stabilesc prin hotărâre a Guvernului inițiată de Ministerul Educației.\n\nRețineți formula: formare în limbile minorităților — personalitate juridică — finanțare integrală de la stat — subordonare ministerială — organizare prin hotărâre a Guvernului.",
      [
        "Centrele au personalitate juridică.",
        "Sunt finanțate integral din bugetul de stat, prin bugetul ministerului.",
        "Organizarea și funcționarea se stabilesc prin hotărâre a Guvernului."
      ],
      [
        Q("Cum sunt finanțate centrele de formare continuă în limbile minorităților?", ["Integral din bugetul de stat, prin bugetul ministerului", "Exclusiv din taxe ale cursanților", "Numai din bugetele locale", "Doar din sponsorizări"], 0, "Art. 122 prevede finanțarea integrală din bugetul de stat prin bugetul Ministerului Educației."),
        Q("Au aceste centre personalitate juridică?", ["Da", "Nu", "Numai temporar", "Doar cu acordul părinților"], 0, "Legea le recunoaște expres personalitatea juridică."),
        Q("Prin ce act se stabilesc atribuțiile, structura și funcționarea centrelor?", ["Hotărâre a Guvernului", "Decizia directorului unei școli", "Hotărârea consiliului profesoral", "Contract colectiv"], 0, "Reglementarea se face prin hotărâre a Guvernului inițiată de minister.")
      ],
      "Art. 122 — Centrele de formare continuă în limbile minorităților au personalitate juridică, sunt în subordinea ministerului, finanțate integral de la bugetul de stat și organizate prin hotărâre a Guvernului."
    ),
    L(
      123,
      "Unitatea pentru Finanțarea Învățământului Preuniversitar",
      "6 min",
      "UFÎP · suport tehnic · CNFÎP · cost standard · monitorizare · raport anual",
      "Articolul 123 reglementează Unitatea pentru Finanțarea Învățământului Preuniversitar. Este o instituție publică cu personalitate juridică, în subordinea Ministerului Educației, cu rol de suport tehnic pentru Consiliul Național pentru Finanțarea Învățământului Preuniversitar.\n\nUnitatea propune politici de finanțare, standarde de cost per antepreșcolar, preșcolar și elev, coeficienți de diferențiere și coeficienți de corecție, inclusiv pentru învățământul în limbile minorităților. Scopul este corelarea finanțării cu standardele de calitate.\n\nEa monitorizează finanțarea bazată pe costul standard și poate propune redistribuirea fondurilor alocate de la bugetul de stat. Elaborează rapoarte, metodologii, studii, analize, prognoze și programe privind folosirea eficientă și transparentă a banilor publici. În fiecare an prezintă ministerului un raport privind starea finanțării învățământului preuniversitar.\n\nFormula de memorare este: suport tehnic, cost standard, monitorizare, redistribuire și raport anual.",
      [
        "UFÎP are personalitate juridică și este în subordinea ministerului.",
        "Oferă suport tehnic CNFÎP și propune standarde de cost și coeficienți.",
        "Prezintă anual ministerului raportul privind starea finanțării."
      ],
      [
        Q("Pentru ce organism oferă suport tehnic UFÎP?", ["Consiliul Național pentru Finanțarea Învățământului Preuniversitar", "Consiliul Național al Elevilor", "Curtea Constituțională", "Fiecare consiliu local"], 0, "Rolul de suport tehnic pentru CNFÎP este expres prevăzut."),
        Q("Ce poate propune UFÎP?", ["Standardele de cost per elev și coeficienții de diferențiere", "Subiectele de bacalaureat", "Programa fiecărei discipline opționale locale", "Calendarul alegerilor"], 0, "Unitatea propune politici de finanțare, standarde de cost și coeficienți."),
        Q("Cui prezintă UFÎP raportul anual privind starea finanțării?", ["Ministerului Educației", "Fiecărui părinte", "Consiliului școlar al elevilor", "Operatorilor de transport"], 0, "Raportul anual este prezentat Ministerului Educației.")
      ],
      "Art. 123 — UFÎP este instituție publică de suport tehnic pentru CNFÎP; propune politici și standarde de cost, monitorizează finanțarea, poate propune redistribuiri și raportează anual ministerului."
    ),
    L(
      124,
      "Centrul Național de Învățământ Tehnologic și Tehnologic Dual",
      "4 min",
      "CNITTD · subordinea ministerului · personalitate juridică · reorganizare · finanțare",
      "Articolul 124 înființează Centrul Național de Învățământ Tehnologic și Tehnologic Dual — CNITTD. Acesta este organ de specialitate în subordinea Ministerului Educației și instituție publică cu personalitate juridică.\n\nCentrul rezultă prin reorganizarea Centrului Național de Dezvoltare a Învățământului Profesional și Tehnic. Finanțarea este asigurată din venituri proprii și din subvenții acordate de la bugetul de stat.\n\nPentru memorare, rețineți succesiunea: vechiul centru pentru învățământ profesional și tehnic se reorganizează în CNITTD, cu accent explicit pe învățământul tehnologic și tehnologic dual.",
      [
        "CNITTD este în subordinea Ministerului Educației.",
        "Are personalitate juridică.",
        "Rezultă prin reorganizarea Centrului Național de Dezvoltare a Învățământului Profesional și Tehnic."
      ],
      [
        Q("Ce statut are CNITTD?", ["Instituție publică cu personalitate juridică în subordinea ministerului", "Asociație de părinți", "Comisie fără personalitate juridică a unei școli", "Structură universitară privată"], 0, "Art. 124 îl definește ca instituție publică cu personalitate juridică, în subordinea ministerului."),
        Q("Prin ce proces se înființează CNITTD?", ["Prin reorganizarea Centrului Național de Dezvoltare a Învățământului Profesional și Tehnic", "Prin comasarea consiliilor elevilor", "Prin decizia fiecărei primării", "Prin transformarea unei universități"], 0, "Centrul se înființează prin reorganizarea instituției naționale existente pentru învățământ profesional și tehnic."),
        Q("Din ce surse este finanțat CNITTD?", ["Venituri proprii și subvenții de la bugetul de stat", "Numai taxe ale elevilor", "Exclusiv buget local", "Numai donații"], 0, "Art. 124 prevede venituri proprii și subvenții de la bugetul de stat.")
      ],
      "Art. 124 — Înființează CNITTD, instituție publică cu personalitate juridică în subordinea ministerului, rezultată prin reorganizare și finanțată din venituri proprii și subvenții de la bugetul de stat."
    ),
    L(
      125,
      "Scopul și organizarea CNITTD",
      "4 min",
      "liceal tehnologic · postliceal · dual · nevoi socioeconomice · hotărâre a Guvernului",
      "Articolul 125 precizează scopul CNITTD: dezvoltarea învățământului liceal tehnologic, postliceal și tehnologic-dual în concordanță cu nevoile de dezvoltare socioeconomică locală, regională și națională. Aceste nevoi trebuie să fie identificate în documente strategice.\n\nIdeea centrală este legătura dintre oferta de educație tehnologică și dezvoltarea economică reală. Centrul nu dezvoltă rute educaționale izolat, ci le corelează cu date și strategii privind competențele și calificările necesare.\n\nOrganizarea și funcționarea CNITTD, precum și preluarea personalului, se aprobă prin hotărâre a Guvernului inițiată de Ministerul Educației. Formula de memorare este: trei niveluri — liceal tehnologic, postliceal, dual; trei scări ale nevoilor — local, regional, național; act de organizare — hotărâre a Guvernului.",
      [
        "CNITTD dezvoltă învățământul liceal tehnologic, postliceal și tehnologic-dual.",
        "Dezvoltarea se corelează cu nevoi socioeconomice locale, regionale și naționale.",
        "Organizarea și funcționarea se aprobă prin hotărâre a Guvernului."
      ],
      [
        Q("Ce niveluri vizează scopul CNITTD?", ["Numai învățământul primar", "Liceal tehnologic, postliceal și tehnologic-dual", "Numai învățământul universitar", "Exclusiv educația timpurie"], 1, "Art. 125 enumeră aceste trei componente."),
        Q("Cu ce trebuie corelată dezvoltarea învățământului tehnologic?", ["Cu nevoile socioeconomice identificate în documente strategice", "Numai cu preferința unui singur operator", "Cu rezultatul alegerilor locale", "Exclusiv cu tradiția școlii"], 0, "Legea cere corelarea cu nevoile locale, regionale și naționale din documente strategice."),
        Q("Prin ce act se aprobă organizarea CNITTD?", ["Hotărâre a Guvernului", "Decizia unei școli", "Hotărârea consiliului elevilor", "Contract individual"], 0, "Organizarea și funcționarea se aprobă prin hotărâre a Guvernului inițiată de minister.")
      ],
      "Art. 125 — CNITTD dezvoltă învățământul liceal tehnologic, postliceal și tehnologic-dual în raport cu nevoile socioeconomice locale, regionale și naționale; organizarea sa se aprobă prin hotărâre a Guvernului."
    ),
    L(
      126,
      "Institutul Limbii Române",
      "4 min",
      "personalitate juridică · promovarea limbii române · sprijin · atestare · comunități din afara granițelor",
      "Articolul 126 reglementează Institutul Limbii Române ca organ de specialitate cu personalitate juridică în subordinea Ministerului Educației. Finanțarea se asigură din venituri proprii și subvenții de la bugetul de stat.\n\nInstitutul are trei atribuții-ancoră: promovează cunoașterea limbii române, sprijină persoanele care învață limba română și atestă cunoștințele de limba română. Atribuțiile detaliate, structura, organizarea și funcționarea se stabilesc prin hotărâre a Guvernului inițiată de minister.\n\nLegea a prevăzut și elaborarea unei strategii de dezvoltare cu implementare din 2025, orientată spre acoperirea globală a nevoilor privind limba, cultura și civilizația românească în comunitățile românești din afara granițelor. Formula de memorare este: promovare, sprijin, atestare și diaspora.",
      [
        "Institutul Limbii Române are personalitate juridică și este în subordinea ministerului.",
        "Atribuțiile-cheie sunt promovarea, sprijinirea învățării și atestarea cunoștințelor de română.",
        "Strategia de dezvoltare vizează și comunitățile românești din afara granițelor."
      ],
      [
        Q("Care este una dintre atribuțiile Institutului Limbii Române?", ["Atestarea cunoștințelor de limba română", "Aprobarea bugetelor locale", "Organizarea bacalaureatului în fiecare județ", "Numirea directorilor de școli"], 0, "Atestarea cunoștințelor de limba română este o atribuție expresă."),
        Q("În subordinea cui funcționează Institutul Limbii Române?", ["Ministerului Educației", "Fiecărui consiliu local", "Consiliului Național al Elevilor", "Unei universități private"], 0, "Institutul este organ de specialitate în subordinea Ministerului Educației."),
        Q("Ce comunități sunt vizate de strategia de dezvoltare menționată de art. 126?", ["Comunitățile românești din afara granițelor", "Numai personalul ministerului", "Exclusiv elevii din București", "Doar operatorii economici"], 0, "Strategia urmărește acoperirea globală a nevoilor comunităților românești din afara granițelor.")
      ],
      "Art. 126 — Institutul Limbii Române promovează limba română, sprijină învățarea ei și atestă cunoștințele, având personalitate juridică și funcționând în subordinea ministerului."
    ),
    L(
      127,
      "Atribuțiile autorităților administrației publice locale",
      "10 min",
      "școlarizare · rețea școlară · spații · investiții · transport · burse · programe · siguranță",
      "Articolul 127 grupează atribuțiile autorităților administrației publice locale în educație. Prima categorie privește accesul: împreună cu structura teritorială a ministerului, asigură școlarizarea și monitorizează participarea la învățământul obligatoriu. Inițiază și susțin funcționarea unităților de stat și organizează și publică anual rețeaua școlară.\n\nA doua categorie privește infrastructura și serviciile: asigură spații suficiente, investiții pentru școli noi, extinderi și modernizări, condițiile de organizare a procesului educațional și personalul medical de specialitate din cabinetele școlare, cu avizele necesare.\n\nA treia categorie privește sprijinul financiar și transportul. Autoritățile locale pot acorda burse din venituri proprii, asigură acoperirea cheltuielilor pentru cursele școlare destinate exclusiv preșcolarilor și elevilor și decontează transportul personalului didactic care nu are locuință în unitatea administrativ-teritorială. Pot finanța olimpiade, concursuri și stimulente.\n\nA patra categorie privește programele și parteneriatul: pot finanța «Școala după școală», «A doua șansă» și programe remediale, pot sprijini reducerea abandonului, desemnează reprezentanți în consiliile de administrație și pot finanța educația extrașcolară. Împreună cu instituțiile abilitate, asigură siguranța elevilor și personalului.\n\nÎn final, autoritățile locale elaborează împreună cu structura teritorială un plan de dezvoltare a rețelei școlare și a transportului școlar, bazat pe evoluțiile demografice. Formula de memorare este: elevi, rețea, clădiri, bani, transport, programe și siguranță.",
      [
        "Autoritățile locale organizează și publică rețeaua școlară și asigură spațiile și investițiile.",
        "Ele acoperă cursele școlare și decontează transportul personalului didactic în condițiile legii.",
        "Planul rețelei și transportului școlar se bazează pe evoluțiile demografice."
      ],
      [
        Q("Cine asigură organizarea și publicarea anuală a rețelei școlare la nivel local?", ["Autoritățile administrației publice locale", "Consiliul școlar al elevilor", "Fiecare diriginte", "Operatorii economici"], 0, "Art. 127 atribuie autorităților locale organizarea și publicarea rețelei școlare."),
        Q("Ce tip de transport este acoperit de autoritățile locale potrivit art. 127?", ["Cursele școlare destinate exclusiv preșcolarilor și elevilor", "Orice călătorie privată", "Transportul turistic internațional", "Numai transportul universitar"], 0, "Legea se referă la cheltuielile curselor școlare destinate exclusiv preșcolarilor și elevilor."),
        Q("Pe ce se bazează planul de dezvoltare a rețelei și transportului școlar?", ["Pe evoluțiile demografice", "Numai pe preferința directorului", "Pe rezultatul unui concurs", "Exclusiv pe sponsorizări"], 0, "Planul se elaborează pe baza evoluțiilor demografice pentru o dezvoltare coerentă.")
      ],
      "Art. 127 — Autoritățile locale asigură școlarizarea, rețeaua, spațiile, investițiile, transportul, unele forme de sprijin și programe, reprezentarea în structurile de conducere și siguranța; planificarea rețelei și transportului se bazează pe evoluțiile demografice."
    ),
    L(
      128,
      "Conducerea școlii și consiliul de administrație",
      "15 min",
      "CA · director · 7/9/11 membri · cvorum · atribuții · vot secret · conflict de interese · publicitate",
      "Articolul 128 este esențial pentru concurs. Unitățile de stat cu personalitate juridică sunt conduse de consiliul de administrație, director și, unde este cazul, directori adjuncți. Ei conlucrează cu CEAC, comisia pentru formare și dezvoltare în cariera didactică, consiliul profesoral, autoritățile locale, părinții, sindicatele și consiliul elevilor.\n\nConsiliul de administrație este organul deliberativ. În forma legală a articolului, are 7 membri pentru unități cu mai puțin de 300 de beneficiari primari, 9 membri pentru efective între 301 și 400 și 11 membri pentru efective peste 400. Cvorumul este, respectiv, de minimum 4, 5 sau 6 membri. La liceal și postliceal, un loc din cota părinților revine unui elev major, cu drept de vot. Există reguli speciale pentru învățământul tehnologic, minorități, teologic, special, particular și confesional.\n\nDe regulă, președintele CA este directorul. Excepția relevantă privește unitățile liceale tehnologice și postliceale în care CA se mărește cu reprezentanți ai operatorilor economici: un reprezentant al acestora poate fi președinte. Sindicatele și reprezentanții prevăzuți de lege participă ca observatori; consilierul școlar participă atunci când se discută activitatea sa.\n\nCA adoptă proiectul de buget și avizează execuția, aprobă PDI/PAS la propunerea directorului, aprobă CDEOȘ la propunerea consiliului profesoral și după consultarea elevilor și părinților, aprobă încadrarea și schema de personal, programele de dezvoltare profesională, sancțiunile personalului, comisiile și rezultatele concursurilor, programul și orarul. Își asumă răspunderea publică pentru performanțele școlii alături de director și monitorizează raportarea datelor.\n\nHotărârile obișnuite se iau cu majoritatea celor prezenți. Cele privind personalul, precum ocuparea posturilor, funcțiile, gradația de merit, restrângerea, calificativele și sancțiunile, se iau prin vot secret. Membrii aflați în conflict de interese nu votează. Bugetul și patrimoniul cer majoritatea membrilor CA. Componența și hotărârile se publică la avizier și pe site. Directorul emite decizii conform hotărârilor CA. CA se întrunește lunar sau ori de câte ori este necesar, la solicitarea directorului ori a unei treimi dintre membri.\n\nFormula de memorare este: CA deliberează, directorul execută; 7–9–11, cvorum 4–5–6; PDI și buget la CA; personalul prin vot secret; hotărârile se publică.",
      [
        "CA este organul deliberativ; directorul emite decizii conform hotărârilor sale.",
        "Componența este 7/9/11 membri, cu cvorum 4/5/6, în funcție de efectiv.",
        "Hotărârile privind personalul se iau prin vot secret, iar conflictul de interese exclude participarea la vot."
      ],
      [
        Q("Care este organul deliberativ de conducere al unității de învățământ de stat?", ["Consiliul de administrație", "Consiliul elevilor", "Comisia de inventariere", "Asociația sportivă"], 0, "Art. 128 definește consiliul de administrație ca organ deliberativ."),
        Q("Cum se iau hotărârile CA care vizează calificativele și sancțiunile personalului?", ["Prin vot deschis obligatoriu", "Prin vot secret", "Prin decizia exclusivă a directorului", "Prin consultare fără vot"], 1, "Hotărârile care vizează personalul se iau prin vot secret."),
        Q("Ce face un membru al CA aflat în conflict de interese?", ["Conduce ședința", "Nu participă la vot", "Are două voturi", "Votează numai bugetul"], 1, "Art. 128 interzice participarea la vot a membrului aflat în conflict de interese.")
      ],
      "Art. 128 — Reglementează conducerea unității și CA: componență 7/9/11, cvorum 4/5/6, atribuții privind bugetul, PDI/PAS, curriculumul, personalul și programul, vot secret pentru probleme de personal, publicarea hotărârilor și emiterea deciziilor de către director."
    ),
    L(
      129,
      "Consiliul profesoral",
      "8 min",
      "totalitatea cadrelor didactice · director președinte · lunar · o treime · calitate · etică · propuneri · elevi",
      "Articolul 129 reglementează consiliul profesoral. Acesta este format din totalitatea cadrelor didactice ale unității și este prezidat de director. Se întrunește lunar sau ori de câte ori este nevoie, la propunerea directorului ori la solicitarea a minimum o treime dintre membri.\n\nConsiliul profesoral gestionează și asigură calitatea actului didactic și stabilește și monitorizează aplicarea Codului de etică profesională. Propune CA fișele de evaluare ale personalului, măsuri de optimizare a procesului didactic și curriculumul la decizia elevului din oferta școlii.\n\nTot CP propune premierea și titlul «profesorul anului», aprobă sancționarea abaterilor disciplinare ale elevilor, propune inițierea procedurii legale pentru încălcări ale eticii de către cadrele didactice și propune programe de formare continuă. Propune și alege cadrele didactice membre ale CA și ale altor comisii.\n\nDiferența-cheie pentru concurs este între propunere și aprobare. De exemplu, CP propune CDEOȘ, iar CA îl aprobă după consultarea elevilor și părinților. CP propune programele de dezvoltare profesională, iar CA le aprobă. Formula de memorare este: CP asigură calitatea pedagogică și propune; CA deliberează și aprobă.",
      [
        "CP cuprinde toate cadrele didactice, este prezidat de director și se întrunește lunar.",
        "Poate fi convocat și la solicitarea a minimum o treime dintre membri.",
        "CP propune CDEOȘ și programele de formare; CA le aprobă."
      ],
      [
        Q("Cine face parte din consiliul profesoral?", ["Totalitatea cadrelor didactice din unitate", "Numai diriginții", "Numai membrii CA", "Exclusiv profesorii titulari cu gradul I"], 0, "Art. 129 include totalitatea cadrelor didactice ale unității."),
        Q("Cine prezidează consiliul profesoral?", ["Directorul", "Primarul", "Președintele consiliului elevilor", "Contabilul-șef"], 0, "Consiliul profesoral este prezidat de director."),
        Q("Ce face CP în privința CDEOȘ?", ["Îl propune consiliului de administrație", "Îl aprobă fără consultare", "Îl transmite direct Guvernului", "Nu are nicio atribuție"], 0, "CP propune CDEOȘ, iar CA îl aprobă după consultările prevăzute de lege.")
      ],
      "Art. 129 — CP este format din toate cadrele didactice, prezidat de director și convocat lunar ori la nevoie. Asigură calitatea actului didactic, gestionează etica și formulează propuneri către CA privind evaluarea, curriculumul, optimizarea și formarea."
    ),
    L(
      130,
      "CEAC și Comisia pentru formare și dezvoltare în cariera didactică",
      "7 min",
      "decizia directorului · hotărârea CP · vot secret · titulari · incompatibilitate · calitate · formare",
      "Articolul 130 reglementează două comisii la nivelul unităților de stat: Comisia pentru evaluarea și asigurarea calității — CEAC — și Comisia pentru formare și dezvoltare în cariera didactică — CFDCD. Ele se constituie prin decizia directorului, în baza hotărârii consiliului profesoral.\n\nMembrii și responsabilii sunt aleși dintre cadrele didactice titulare, prin vot secret, de consiliul profesoral. Responsabilul unei asemenea comisii nu poate fi director sau director adjunct. Aceasta este o regulă clară de incompatibilitate.\n\nCEAC elaborează și coordonează procedurile și activitățile de evaluare și asigurare a calității, analizează rapoartele inspecțiilor și formulează propuneri de îmbunătățire. Colaborează cu structurile de calitate și inspecție, CA, părinții, elevii și CP.\n\nCFDCD identifică nevoile și programele de formare continuă și monitorizează evoluția în carieră și participarea profesorilor la formare. Colaborează cu structurile teritoriale și naționale de formare, cu CA și CP. Formula de memorare este: directorul constituie, CP hotărăște și alege secret, responsabilul nu este director; CEAC — calitate, CFDCD — carieră și formare.",
      [
        "Comisiile se constituie prin decizia directorului, în baza hotărârii CP.",
        "Membrii și responsabilii se aleg prin vot secret dintre cadrele didactice titulare.",
        "Responsabilul comisiei nu poate fi director sau director adjunct."
      ],
      [
        Q("Prin ce act se constituie CEAC și CFDCD?", ["Prin decizia directorului, în baza hotărârii CP", "Prin hotărârea primarului", "Prin ordin individual al prefectului", "Prin votul părinților"], 0, "Art. 130 stabilește decizia directorului bazată pe hotărârea consiliului profesoral."),
        Q("Cum sunt aleși membrii și responsabilii comisiilor?", ["Prin vot secret al CP, dintre cadrele didactice titulare", "Prin tragere la sorți dintre elevi", "De primar", "De minister pentru fiecare școală"], 0, "Alegerea se face prin vot secret în consiliul profesoral, dintre titulari."),
        Q("Poate directorul fi responsabilul CEAC sau CFDCD?", ["Da, obligatoriu", "Nu", "Numai în primul an", "Numai cu aprobarea elevilor"], 1, "Responsabilii celor două comisii nu pot ocupa funcția de director sau director adjunct.")
      ],
      "Art. 130 — CEAC și CFDCD se constituie prin decizia directorului, în baza hotărârii CP; membrii și responsabilii se aleg secret dintre titulari, iar responsabilii nu pot fi directori. CEAC gestionează calitatea, iar CFDCD formarea și evoluția în carieră."
    ),
    L(
      131,
      "Programele Uniunii Europene și recunoașterea mobilităților",
      "10 min",
      "mobilități · recunoaștere · ECTS · suplinire · drepturi salariale · absențe motivate · Școala Europeană · prorogare alin. 11",
      "Articolul 131 tratează participarea școlilor la programele Uniunii Europene ca instrument de dezvoltare instituțională și de creștere a calității. Rezultatele învățării obținute de cadrele didactice în mobilități se recunosc și se echivalează potrivit metodologiei ECTS pentru învățarea pe tot parcursul vieții. Pentru elevi, recunoașterea se face potrivit unei metodologii specifice aprobate prin ordin.\n\nConducerea școlii trebuie să sprijine mobilitatea profesorilor și să asigure suplinirea pe durata acesteia din resursele finanțării complementare. Perioada mobilității este considerată perioadă de activitate, iar participantul păstrează drepturile salariale din țară.\n\nPentru elevi, conducerea recunoaște stagiul din străinătate ca echivalent cu prezența la activitățile obișnuite, aplică metodologii de evaluare a competențelor, motivează absențele și permite recuperarea materiei. Ministerul promovează documentele Europass și organizează anual concursul «Școala Europeană». Participarea la proiecte UE și rezultatele lor intră în evaluarea unităților și în evaluarea personalului.\n\nAlin. (11) prevede că profesorii care coordonează proiecte europene fără a fi remunerați pot beneficia de reducerea normei de la 18 la 16 ore pe săptămână, cu acordul CA, la propunerea directorului și potrivit metodologiei. Atenție: aplicarea acestui alineat este prorogată până la începutul anului școlar 2027–2028. În 2026, reducerea nu se prezintă ca drept deja aplicabil.\n\nFormula de memorare este: recunoaștere, suplinire, salariu, echivalarea prezenței, absențe motivate, recuperare; reducerea 18 la 16 — prorogată.",
      [
        "Mobilitatea profesorului este perioadă de activitate, cu drepturi salariale și suplinire asigurată.",
        "Mobilitatea elevului se recunoaște, absențele se motivează și se permite recuperarea materiei.",
        "Reducerea normei de la 18 la 16 ore din alin. (11) este prorogată până în 2027–2028."
      ],
      [
        Q("Cum este considerată perioada mobilității unui cadru didactic?", ["Concediu fără plată obligatoriu", "Perioadă de activitate, cu păstrarea drepturilor salariale", "Absență nemotivată", "Suspendare disciplinară"], 1, "Art. 131 consideră mobilitatea perioadă de activitate și menține drepturile salariale din țară."),
        Q("Ce trebuie să facă școala pentru elevii participanți la mobilități?", ["Să le considere toate absențele nemotivate", "Să recunoască perioada, să motiveze absențele și să permită recuperarea", "Să îi exmatriculeze", "Să anuleze evaluările anterioare"], 1, "Conducerea trebuie să recunoască mobilitatea și să asigure măsurile de reintegrare educațională."),
        Q("Care este situația reducerii normei de la 18 la 16 ore pentru coordonatorii neremunerați ai proiectelor europene?", ["Este aplicabilă fără condiții din 2023", "Aplicarea alin. (11) este prorogată până la începutul anului școlar 2027–2028", "A fost abrogată definitiv", "Se acordă automat tuturor profesorilor"], 1, "Legea nr. 141/2025 a prorogat aplicarea art. 131 alin. (11) până în 2027–2028.")
      ],
      "Art. 131 — Reglementează recunoașterea mobilităților UE, suplinirea, drepturile salariale, echivalarea prezenței elevilor și recuperarea. Concursul «Școala Europeană» recunoaște performanța. Aplicarea alin. (11), reducerea normei 18–16 ore, este prorogată până în 2027–2028."
    ),
    L(
      132,
      "Transformarea digitală și UESMATD",
      "9 min",
      "strategie digitală · UESMATD · platforme · standard informatic · interoperabilitate · GDPR · date deschise",
      "Articolul 132 așază transformarea digitală în cadrul Strategiei naționale pentru digitalizarea educației și dezvoltarea competențelor digitale. Reglementează Unitatea Executivă pentru Suport, Mentenanță și Asistență Tehnică pentru Digitalizare — UESMATD — ca instituție publică cu personalitate juridică în subordinea ministerului.\n\nUESMATD are responsabilități de formare a utilizatorilor, digitalizare a proceselor și asistență pentru probleme hardware și software. Asigură direct sau prin servicii externe integrarea, dezvoltarea și mentenanța platformelor strategice ale ministerului și poate utiliza experți IT externi.\n\nPlatformele trebuie să respecte un standard informatic minim privind dezvoltarea, administrarea, securitatea și interoperabilitatea. Interoperabilitatea trebuie să fie tehnică, semantică și sintactică, cu respectarea legislației europene, a protecției datelor și a bunelor practici. UESMATD colaborează cu structurile de formare, curriculum și cercetare pentru pregătirea personalului și accesibilitatea resurselor online.\n\nMinisterul controlează bazele de date aferente platformelor strategice și răspunde pentru confidențialitatea datelor împreună cu instituțiile care au acces. Interconectarea cu alte baze se face prin protocoale bazate pe ordine comune, cu respectarea GDPR. Platformele trebuie să permită și schimbul de date deschise, fără încălcarea protecției datelor personale.\n\nFormula de memorare este: strategie, unitate tehnică, platforme, standard, interoperabilitate, protecția datelor și date deschise.",
      [
        "UESMATD sprijină utilizatorii, digitalizează procese și întreține platformele strategice.",
        "Platformele trebuie să respecte standardul informatic minim și interoperabilitatea deplină.",
        "Interconectarea și datele deschise se realizează cu respectarea GDPR și a legislației naționale."
      ],
      [
        Q("Care este rolul UESMATD?", ["Suport, mentenanță, formare digitală și integrarea platformelor strategice", "Aprobarea bugetelor locale", "Organizarea alegerilor școlare", "Evaluarea medicală a elevilor"], 0, "UESMATD are rol tehnic și de formare pentru digitalizarea sistemului."),
        Q("Ce trebuie să respecte dezvoltarea platformelor strategice?", ["Standardul informatic minim și cerințele de interoperabilitate", "Numai preferința furnizorului", "Exclusiv regulamentul unei singure școli", "Nicio cerință comună"], 0, "Art. 132 impune standardul informatic minim și interoperabilitatea tehnică, semantică și sintactică."),
        Q("Cum se realizează interoperabilitatea cu bazele altor autorități?", ["Prin protocoale bazate pe ordine comune, cu respectarea protecției datelor", "Prin transmitere informală", "Fără reguli GDPR", "Numai pe suport de hârtie"], 0, "Interoperabilitatea se bazează pe protocoale și ordine comune și trebuie să respecte GDPR.")
      ],
      "Art. 132 — Transformarea digitală se bazează pe strategie, UESMATD, platforme strategice, standard informatic minim, interoperabilitate, securitate, protecția datelor și schimb de date deschise."
    ),
    L(
      133,
      "Sistemul integrat de management al școlarității",
      "8 min",
      "cloud · catalog electronic · portofoliu digital · interoperabilitate · diplome · examene digitale · maturitate digitală",
      "Articolul 133 reglementează Sistemul integrat de management al școlarității, finanțat din bugetul de stat prin bugetul Ministerului Educației. Este un ansamblu de resurse informatice, de comunicații și de securitate cibernetică bazat pe cloud computing și interconectat cu infrastructuri publice sau private.\n\nCatalogul electronic este parte a acestui sistem și funcționează pe infrastructură cloud, pe principiile interoperabilității și interconectării. Portofoliul educațional este prevăzut și în format digital integrat. Ministerul oferă soluții de interconectare în timp real pentru verificarea statutului de elev și de absolvent de bacalaureat.\n\nInformațiile despre diplome sunt interconectate cu registrul național integrat al diplomelor și actelor de studii, pentru trasabilitatea profilului educațional și profesional. Sistemele trebuie să aplice principiul «doar o singură dată»: o informație furnizată unei instituții publice nu ar trebui cerută repetat dacă poate fi preluată interoperabil.\n\nLegea prevede că, începând cu anul școlar 2027–2028, evaluările și examenele naționale sunt administrate integral digital, cu sprijinul structurilor specializate. Se creează și un mecanism de monitorizare a maturității digitale a fiecărei școli, privind infrastructura hardware și software și competențele digitale ale elevilor și profesorilor; pe baza lui se propun intervenții.\n\nFormula de memorare este: cloud, catalog, portofoliu, diplome, «doar o singură dată», examene digitale și maturitate digitală.",
      [
        "Catalogul electronic și portofoliul educațional digital fac parte din sistemul integrat.",
        "Datele despre diplome se interconectează cu registrul național al diplomelor.",
        "Administrarea integral digitală a evaluărilor și examenelor naționale este prevăzută din 2027–2028."
      ],
      [
        Q("Ce este catalogul electronic potrivit art. 133?", ["Parte a Sistemului integrat de management al școlarității", "Un document exclusiv pe hârtie", "O bază de date privată fără legătură cu ministerul", "Un program opțional al fiecărei primării"], 0, "Catalogul electronic este o componentă a sistemului integrat și rulează pe infrastructură cloud."),
        Q("Ce urmărește principiul «doar o singură dată»?", ["Evitarea solicitării repetate a acelorași date atunci când ele pot fi schimbate interoperabil", "O singură evaluare în viața elevului", "Un singur manual pe școală", "O singură conectare la internet pe an"], 0, "Principiul reduce solicitarea repetată a datelor deja disponibile în sistemele publice."),
        Q("Din ce an școlar prevede legea administrarea integral digitală a evaluărilor și examenelor naționale?", ["2025–2026", "2026–2027", "2027–2028", "2030–2031"], 2, "Art. 133 alin. (7) indică anul școlar 2027–2028.")
      ],
      "Art. 133 — Reglementează sistemul integrat al școlarității: infrastructură cloud, catalog electronic, portofoliu digital, interconectarea diplomelor, principiul «doar o singură dată», examene digitale din 2027–2028 și monitorizarea maturității digitale."
    )
  );
})();
