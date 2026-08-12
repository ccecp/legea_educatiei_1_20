"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–216: verificare 12.08.2026";
  DATA.modules.push({
    id: 17,
    title: "Norma și răspunderea disciplinară",
    articles: "207–216",
    chapter: "Titlul III",
    startArticle: 207,
    endArticle: 216
  });

  DATA.lessons.push(
    L(
      207,
      "Activitatea și norma didactică",
      "15 min",
      "40 de ore · fișa postului · norme temporare · mentorat · consiliere și logopedie",
      `Articolul 207 trebuie învățat pe două niveluri: regula generală din Legea nr. 198/2023 și regimul temporar introdus prin Legea nr. 141/2025.

Activitatea personalului didactic de predare se realizează în 8 ore pe zi, adică 40 de ore pe săptămână. În acest timp intră predarea, învățarea, evaluarea, instruirea practică, examenele, pregătirea pentru evaluări și performanță, învățarea remedială, pregătirea metodico-științifică, dezvoltarea curriculumului la decizia elevului din oferta școlii, educația și mentoratul, managementul clasei, proiectele educaționale și activitățile specifice profesorilor itineranți și de sprijin.

După gradul didactic I, cadrul didactic poate desfășura activități extradidactice și activități pentru cluburi și cercuri ȘTIAM. Profesorul emerit poate participa și la stimularea excelenței didactice, diseminarea bunelor practici și formarea mentorilor. Activitățile corespunzătoare profilului, specializării și aptitudinilor sunt prevăzute în fișa postului, sunt complementare normei de predare, se aprobă de consiliul de administrație, se revizuiesc anual și devin anexă la contractul individual de muncă.

Legea nr. 141/2025 a modificat art. 207 alin. (2) și (3) și a abrogat alin. (7) și alin. (11)-(13). În forma actuală, timpul destinat activităților complementare de la alin. (1) lit. b)-f) poate fi redus cu 2 ore pe săptămână, fără diminuarea salariului, pentru cadrele didactice cu peste 25 de ani vechime și gradul didactic I, precum și pentru cadrele didactice care au dovedit performanță educațională, potrivit metodologiei aprobate prin ordin al ministrului.

Pentru perioada de la anul școlar 2025–2026 până la începutul anului școlar 2029–2030, Legea nr. 141/2025 derogă de la o parte a alin. (4). Norma este: un post pe clasă în învățământul primar, cu 2 ore obligatorii de pregătire remedială; 20 de ore pentru profesorii din gimnazial, liceal, postliceal, artă, sport și educație extrașcolară; 18 ore pentru profesorii cu gradul I sau titlul de profesor emerit care fac mentorat; 26 de ore pentru profesorii de instruire practică și maiștrii-instructori; 22 de ore pentru cei din această categorie care au gradul I și fac mentorat; în învățământul special, 18 ore pentru învățători, profesori la predare și terapii specifice și 22 de ore pentru categoriile de educator și instruire practică enumerate de lege.

Derogarea temporară nu înlocuiește toate categoriile alin. (4). Pentru educația timpurie rămâne regula unui post la grupa cu program normal și a două posturi la grupa cu program prelungit. Pentru învățământul special integrat, personalul itinerant și de sprijin și terapiile enumerate de lege se stabilește un post în funcție de tipul și severitatea dizabilității, potrivit metodologiei. În centrele de documentare și informare este prevăzut un post de profesor documentarist pentru digitalizare.

Pentru consilierul școlar, norma se raportează la maximum 500 de elevi, maximum 500 de elevi și preșcolari ori maximum 300 de preșcolari. Aceleași praguri sunt prevăzute pentru profesorul-logoped interșcolar. Activitățile de mentorat reglementate de articol presupun cel puțin 4 ore pe săptămână, iar pentru personalul încadrat pe post și care desfășoară mentorat aceste ore se remunerează în sistem de plată cu ora, în condițiile legii.

Pentru concurs, nu confundați timpul total de muncă de 40 de ore pe săptămână cu numărul de ore de predare. De asemenea, rețineți că normele de 20, 18, 26 și 22 de ore sunt regimul temporar aplicabil până la începutul anului școlar 2029–2030.`,
      [
        "Activitatea personalului didactic se desfășoară în 8 ore pe zi, 40 de ore pe săptămână.",
        "Fișa postului este aprobată de CA, revizuită anual și anexată contractului individual de muncă.",
        "Până la începutul anului școlar 2029–2030 se aplică temporar normele 20/18 și 26/22 de ore.",
        "Art. 207 alin. (7) și alin. (11)-(13) au fost abrogate prin Legea nr. 141/2025."
      ],
      [
        Q("Care este timpul total săptămânal de activitate al personalului didactic de predare?", ["40 de ore", "20 de ore în toate cazurile", "18 ore în toate cazurile", "30 de ore"], 0, "Art. 207 alin. (1) stabilește 8 ore zilnic, respectiv 40 de ore pe săptămână."),
        Q("Care este norma temporară pentru profesorii din gimnazial și liceal, în perioada stabilită de Legea nr. 141/2025?", ["20 de ore pe săptămână", "14 ore pe săptămână", "26 de ore pe săptămână", "Un post pentru fiecare clasă"], 0, "Din anul școlar 2025–2026 până la începutul anului școlar 2029–2030 se aplică norma de 20 de ore pentru această categorie."),
        Q("Cine aprobă fișa postului personalului didactic?", ["Consiliul de administrație", "Consiliul elevilor", "Primarul, în toate cazurile", "Comisia de bacalaureat"], 0, "Fișa postului se aprobă în consiliul de administrație, se revizuiește anual și este anexă la contractul individual de muncă.")
      ],
      "Art. 207 — Reglementează timpul total de muncă, componentele activității, fișa postului și normele didactice. Se aplică împreună cu derogarea temporară din Legea nr. 141/2025, valabilă până la începutul anului școlar 2029–2030."
    ),
    L(
      208,
      "Constituirea normei și degrevarea",
      "13 min",
      "specializare · completarea normei · limbi străine · educație fizică · mediul rural · degrevare",
      `Articolul 208 arată din ce activități poate fi constituită norma didactică. Regula este că aceasta cuprinde ore din planurile-cadru la disciplinele corespunzătoare specializării sau specializărilor înscrise pe diploma de licență. Sunt recunoscute și competențele pentru predarea unei noi discipline din același domeniu fundamental, dobândite printr-un modul de minimum 90 de credite transferabile.

În normă pot intra și discipline stabilite prin metodologia ministerului, precum și ore de pregătire pentru examene naționale, performanță și învățare remedială, fără a depăși jumătate de normă și cu menținerea drepturilor salariale. Dacă norma nu se poate constitui astfel, poate fi completată cu activități educaționale complementare, precum „Școala după școală” și învățarea pe tot parcursul vieții.

În învățământul primar, limbile străine pot fi predate de profesorul pentru învățământ primar al clasei, dacă dovedește calificarea prin diplomă sau certificat de competență; orele sunt remunerate prin plata cu ora. Ele pot fi predate și de profesorii cu studii superioare de specialitate, în normă sau prin plata cu ora. Orele de educație fizică din planul-cadru sunt predate de profesori cu studii superioare de specialitate.

Pentru grupele și clasele cu predare în limbile minorităților, profesorii din preșcolar și primar predau „Comunicare în limba română” și „Limba și literatura română” pe întreg parcursul preșcolar și primar. Orele care depășesc numărul prevăzut la clasele cu predare în limba română sunt remunerate în regim de plată cu ora.

În gimnaziu, dacă norma nu poate fi constituită în mod obișnuit, ea poate cuprinde două treimi ore din specializarea de bază și o treime din disciplinele permise ori activități complementare. În mediul rural, raportul poate fi o jumătate specialitatea de bază și o jumătate discipline sau activități permise.

Personalul didactic de conducere, îndrumare și control poate fi degrevat total sau parțial de normă, pe baza normelor aprobate prin ordin al ministrului după consultarea federațiilor sindicale reprezentative. Personalul degrevat păstrează drepturile salariale ale funcției și celelalte sporuri și indemnizații legale. Pentru anul școlar 2025–2026, Legea nr. 141/2025 a instituit un regim temporar distinct al degrevării. La data verificării, 12 august 2026, regulile pentru anul școlar 2026–2027 se aflau într-un proces normativ separat; materialul nu prezintă proiectele aflate în consultare ca norme deja adoptate.

Timpul săptămânal al personalului didactic auxiliar și administrativ este de 40 de ore, iar sarcinile sunt înscrise în fișa individuală a postului.`,
      [
        "Norma se constituie, ca regulă, din discipline corespunzătoare specializării de pe diplomă.",
        "În gimnaziu se poate aplica raportul 2/3 specialitatea de bază și 1/3 completare; în rural, 1/2 și 1/2.",
        "Educația fizică în primar este predată de profesori cu studii superioare de specialitate.",
        "Personalul de conducere poate fi degrevat total sau parțial potrivit normelor aprobate de minister."
      ],
      [
        Q("Care este regula de bază pentru constituirea normei didactice?", ["Ore la discipline corespunzătoare specializării de pe diplomă", "Orice activitate aleasă fără legătură cu studiile", "Numai activități administrative", "Exclusiv ore opționale"], 0, "Art. 208 alin. (1) leagă norma de specializarea sau specializările înscrise pe diploma de licență ori de competențele recunoscute legal."),
        Q("În ce proporție se poate constitui excepțional norma profesorului de gimnaziu din mediul rural?", ["1/2 specialitatea de bază și 1/2 completare permisă", "Doar 1/10 din specialitatea de bază", "Exclusiv activități administrative", "Numai prin plata cu ora"], 0, "Art. 208 alin. (10) permite în mediul rural raportul de o jumătate plus o jumătate."),
        Q("Cine predă orele de educație fizică din planul-cadru al învățământului primar?", ["Profesori cu studii superioare de specialitate", "Orice părinte voluntar", "Exclusiv directorul", "Secretarul unității"], 0, "Art. 208 alin. (7) atribuie aceste ore profesorilor cu studii superioare de specialitate.")
      ],
      "Art. 208 — Reglementează constituirea și completarea normei, situațiile particulare din primar și mediul rural, degrevarea personalului de conducere și timpul de 40 de ore pentru personalul auxiliar și administrativ."
    ),
    L(
      209,
      "Abaterile disciplinare ale personalului didactic",
      "12 min",
      "interesul copilului · violență · politică și prozelitism · meditații · DGASPC · îndepărtare temporară",
      `Articolul 209 pornește de la obligația personalului didactic de a respecta principiile și valorile legii, cadrul legal general și interesul superior al copilului.

Sunt abateri disciplinare, dacă faptele nu întrunesc condițiile unei infracțiuni: violența fizică sau verbală împotriva elevilor ori colegilor; faptele și atitudinile care pun în pericol sănătatea sau integritatea fizică ori psihică a copiilor și elevilor; manifestarea convingerilor politice și prozelitismul religios în spațiul școlar; meditațiile cu elevii de la propria clasă; încălcarea legii, a obligațiilor statutare și a deciziilor obligatorii; precum și faptele care afectează imaginea, demnitatea sau drepturile copiilor, elevilor și familiilor lor ori prestigiul unității și interesul învățământului.

Pentru faptele de violență și pentru cele care pun în pericol sănătatea ori integritatea copilului, sancționarea se poate face numai după solicitarea scrisă de către școală a unui raport de specialitate realizat de specialiștii DGASPC.

Personalul didactic auxiliar este cercetat disciplinar potrivit Codului muncii, nu după procedura specială integrală rezervată personalului didactic de predare.

Pe durata cercetării disciplinare pentru violență ori pentru punerea în pericol a sănătății sau integrității beneficiarilor primari, cadrul didactic nu desfășoară activități didactice cu aceștia, dar își păstrează corespunzător drepturile salariale. Prin OUG nr. 95/2024, aceeași regulă a fost introdusă pentru situația în care cadrul didactic este cercetat penal pentru infracțiuni incompatibile cu funcția didactică.

Pentru concurs, rețineți diferența: raportul DGASPC este cerut pentru sancționarea abaterilor de la alin. (2) lit. a) și b), iar alin. (6) privește cercetarea penală pentru infracțiuni incompatibile cu funcția didactică.`,
      [
        "Violența fizică sau verbală față de elevi ori colegi este abatere disciplinară.",
        "Meditațiile cu elevii de la propria clasă sunt interzise și constituie abatere.",
        "Pentru faptele de la lit. a) și b), sancționarea presupune solicitarea raportului DGASPC.",
        "În cazurile prevăzute de alin. (5) și (6), cadrul didactic nu predă beneficiarilor primari, dar își păstrează drepturile salariale."
      ],
      [
        Q("Care faptă este prevăzută expres ca abatere disciplinară?", ["Meditațiile cu elevii de la propria clasă", "Participarea la un curs acreditat", "Întocmirea fișei postului", "Pregătirea remedială"], 0, "Art. 209 alin. (2) lit. d) interzice desfășurarea meditațiilor cu elevii de la propria clasă."),
        Q("Ce document este necesar înaintea sancționării pentru faptele de violență sau de punere în pericol a integrității elevului?", ["Un raport de specialitate al DGASPC, solicitat în scris de unitate", "O declarație verbală a primarului", "Un sondaj anonim", "Un aviz al consiliului elevilor, exclusiv"], 0, "Art. 209 alin. (3) cere solicitarea raportului de specialitate realizat de DGASPC."),
        Q("Ce se întâmplă cu drepturile salariale ale cadrului didactic care nu predă pe durata cercetării, în cazurile prevăzute de art. 209 alin. (5) și (6)?", ["Se păstrează corespunzător", "Se pierd automat definitiv", "Se dublează", "Sunt stabilite de consiliul elevilor"], 0, "Legea prevede neparticiparea la activități cu beneficiarii primari, cu păstrarea corespunzătoare a drepturilor salariale.")
      ],
      "Art. 209 — Definește abaterile disciplinare ale personalului didactic, raportul DGASPC, procedura aplicabilă personalului auxiliar și măsurile temporare din timpul cercetării; alin. (6) a fost introdus prin OUG nr. 95/2024."
    ),
    L(
      210,
      "Sancțiunile personalului didactic de predare",
      "9 min",
      "avertisment · reducere salarială · suspendări · desfacerea contractului · cumul de sancțiuni",
      `Articolul 210 enumeră sancțiunile disciplinare aplicabile personalului didactic de predare, în raport cu gravitatea abaterii.

Prima sancțiune este avertismentul scris. A doua este reducerea salariului de bază, cumulată, când este cazul, cu indemnizația de conducere, îndrumare și control, cu până la 15%, pentru o perioadă de la o lună la 6 luni.

Urmează două suspendări distincte, fiecare pentru cel mult 3 ani. Una privește dreptul de înscriere la concursul pentru gradația de merit, pentru o funcție de conducere, îndrumare și control sau pentru o funcție didactică superioară. Cealaltă privește dreptul de a face parte din comisiile de organizare și desfășurare a examenelor naționale. Cea mai severă sancțiune este desfacerea disciplinară a contractului individual de muncă.

Pentru violență și pentru faptele care pun în pericol sănătatea ori integritatea fizică sau psihică a elevilor se pot aplica împreună reducerea salarială și suspendările sau se poate aplica desfacerea disciplinară a contractului. Pentru celelalte abateri se poate aplica desfacerea contractului ori una sau mai multe dintre sancțiunile enumerate.

În funcție de gravitatea abaterii, odată cu sancțiunile de la reducerea salarială până la desfacerea contractului se dispune și retragerea decorațiilor, ordinelor, medaliilor și titlurilor primite potrivit art. 218.

Rețineți cifrele: până la 15%, între 1 și 6 luni, respectiv suspendare de până la 3 ani.`,
      [
        "Avertismentul aplicabil personalului didactic este scris.",
        "Reducerea poate fi de până la 15%, pentru 1–6 luni.",
        "Suspendările privind concursurile și examenele naționale pot dura până la 3 ani.",
        "Cea mai severă sancțiune este desfacerea disciplinară a contractului individual de muncă."
      ],
      [
        Q("Care este reducerea salarială maximă prevăzută ca sancțiune?", ["Până la 15%", "Până la 50%", "Exact 2%", "Până la 100%"], 0, "Art. 210 alin. (1) lit. b) stabilește reducerea cu până la 15%."),
        Q("Cât poate dura suspendarea dreptului de a participa în comisiile examenelor naționale?", ["Până la 3 ani", "O singură zi", "Exact 10 ani", "Nelimitat"], 0, "Suspendarea prevăzută de art. 210 poate fi dispusă pentru o perioadă de până la 3 ani."),
        Q("Care este sancțiunea cea mai severă din enumerarea art. 210?", ["Desfacerea disciplinară a contractului individual de muncă", "Avertismentul verbal", "Mutarea clasei", "Retragerea catalogului"], 0, "Art. 210 alin. (1) lit. e) prevede desfacerea disciplinară a contractului individual de muncă.")
      ],
      "Art. 210 — Enumeră sancțiunile personalului didactic de predare, regulile de cumulare și retragerea distincțiilor în funcție de gravitatea abaterii."
    ),
    L(
      211,
      "Sesizarea, comisia și aprobarea sancțiunii",
      "11 min",
      "sesizare scrisă · 3–5 membri · sindicat · CA · majoritate de două treimi · decizia directorului",
      `Articolul 211 stabilește cine poate sesiza o posibilă abatere și cum se organizează cercetarea disciplinară a personalului didactic de predare din unitate.

Orice persoană poate formula o sesizare scrisă. Aceasta se înregistrează la secretariatul unității de învățământ în care este angajat cadrul didactic vizat.

Pentru cercetare se constituie o comisie formată din 3 până la 5 membri. Un membru reprezintă federația sindicală din care face parte persoana cercetată sau este reprezentantul salariaților. Ceilalți membri trebuie să aibă o funcție cel puțin egală cu a persoanei cercetate. Dacă unitatea nu are suficienți salariați cu funcția necesară, comisia se completează, la solicitarea conducerii, cu persoane desemnate de structura județeană competentă. În perioada tranzitorie această atribuție este exercitată de inspectoratul școlar.

Comisia este constituită prin decizia directorului, după aprobarea componenței de către consiliul de administrație.

Propunerea de sancționare poate fi făcută de oricare membru al consiliului de administrație. Sancțiunea se aprobă cu votul a cel puțin două treimi din numărul total al membrilor consiliului de administrație. Apoi directorul o pune în aplicare și o comunică prin decizie.

Succesiunea corectă pentru concurs este: sesizare scrisă, comisie aprobată de CA și constituită prin decizia directorului, cercetare, raport, propunere, aprobarea sancțiunii cu minimum două treimi din numărul total al membrilor CA, decizia directorului.`,
      [
        "Orice persoană poate depune o sesizare scrisă la secretariatul unității.",
        "Comisia are 3–5 membri și include reprezentarea sindicală sau a salariaților.",
        "Componența este aprobată de CA, iar comisia este constituită prin decizia directorului.",
        "Sancțiunea este aprobată de minimum 2/3 din numărul total al membrilor CA."
      ],
      [
        Q("Câți membri are comisia de cercetare disciplinară pentru personalul didactic de predare al unității?", ["3–5 membri", "Exact 10 membri", "Un singur membru", "20–30 de membri"], 0, "Art. 211 alin. (2) stabilește o comisie de 3–5 membri."),
        Q("Cine constituie comisia după aprobarea sa de către consiliul de administrație?", ["Directorul, prin decizie", "Primarul, prin dispoziție", "Elevii, prin vot", "Instanța, automat"], 0, "Comisia este constituită prin decizia directorului după aprobarea de către CA."),
        Q("Cu ce majoritate aprobă consiliul de administrație sancțiunea?", ["Cel puțin 2/3 din numărul total al membrilor", "Majoritatea elevilor prezenți", "Un singur vot", "Unanimitate în toate cazurile"], 0, "Art. 211 alin. (4) cere cel puțin două treimi din numărul total al membrilor CA.")
      ],
      "Art. 211 — Reglementează sesizarea scrisă, comisia de 3–5 membri, rolul CA și punerea în aplicare a sancțiunii prin decizia directorului."
    ),
    L(
      212,
      "Cercetarea, termenele și contestarea sancțiunii",
      "13 min",
      "audiere · apărare · 48 de ore · 30 de zile · 6 luni · 15 zile · instanță · nulitate",
      `Articolul 212 conține garanțiile procedurale ale cercetării disciplinare. Comisia stabilește faptele, urmările, împrejurările, existența sau inexistența vinovăției și orice alte date concludente.

Audierea persoanei cercetate și verificarea apărării sunt obligatorii. Persoana trebuie înștiințată în scris cu minimum 48 de ore înainte. Dacă refuză să se prezinte sau să dea declarații scrise, refuzul se consemnează într-un proces-verbal, dar cercetarea poate fi finalizată. Cadrul didactic are dreptul să cunoască toate actele cercetării și să prezinte probe în apărare.

Cercetarea faptei și comunicarea deciziei se fac în cel mult 30 de zile de la înregistrarea raportului de cercetare disciplinară la registratura generală a unității, dar nu mai târziu de 6 luni de la săvârșirea faptei. Persoanei găsite nevinovate i se comunică în scris inexistența faptelor pentru care a fost cercetată.

Sancțiunea se stabilește pe baza raportului comisiei și este comunicată prin decizie scrisă de director. Textul art. 212 alin. (4) prevede contestația în 15 zile la Comisia Națională pentru Inspecție Școlară din cadrul ARACIIP. Totuși, OUG nr. 95/2024 instituie regula tranzitorie aplicabilă până la înființarea și funcționarea efectivă a acestei comisii: contestația împotriva deciziei de sancționare se adresează direct instanței de judecată competente.

Sub sancțiunea nulității absolute, decizia trebuie să cuprindă descrierea faptei, prevederile încălcate, motivele înlăturării apărărilor, temeiul de drept, termenul de contestare și instanța competentă. Accesul persoanei sancționate la instanță este garantat.

Pentru concurs, nu aplicați mecanic termenul de 15 zile către comisia încă nefuncțională. La data verificării, regula efectivă este sesizarea directă a instanței competente, potrivit derogării din OUG nr. 95/2024.`,
      [
        "Audierea și verificarea apărării sunt obligatorii.",
        "Înștiințarea pentru audiere se face în scris cu minimum 48 de ore înainte.",
        "Procedura are reperul de 30 de zile de la înregistrarea raportului și limita de 6 luni de la faptă.",
        "Până la funcționarea comisiei naționale, contestația se adresează direct instanței competente."
      ],
      [
        Q("Cu cât timp înainte trebuie înștiințată în scris persoana cercetată pentru audiere?", ["Cu minimum 48 de ore", "Cu 2 ore", "Cu exact 30 de zile", "Nu este necesară înștiințarea"], 0, "Art. 212 alin. (1) cere o înștiințare scrisă cu minimum 48 de ore înainte."),
        Q("Care este limita maximă raportată la data săvârșirii faptei?", ["6 luni", "15 zile", "3 ani", "Nu există nicio limită"], 0, "Cercetarea și comunicarea deciziei nu pot depăși 6 luni de la săvârșirea faptei."),
        Q("Unde se contestă decizia în regimul tranzitoriu stabilit prin OUG nr. 95/2024?", ["Direct la instanța de judecată competentă", "La consiliul elevilor", "La primărie", "La comisia de inventariere"], 0, "Până la funcționarea Comisiei Naționale pentru Inspecție Școlară, contestația se adresează direct instanței competente.")
      ],
      "Art. 212 — Reglementează garanțiile apărării, termenele, conținutul obligatoriu al deciziei și contestarea; OUG nr. 95/2024 trimite tranzitoriu contestațiile direct la instanța competentă."
    ),
    L(
      213,
      "Abaterile și sancțiunile personalului de conducere",
      "8 min",
      "conducere · îndrumare și control · observație · reducere salarială · suspendări · destituire",
      `Articolul 213 reglementează răspunderea disciplinară a personalului de conducere, îndrumare și control. Este abatere fapta prin care sunt încălcate dispozițiile legale, obligațiile din titlul privind statutul personalului, normele profesiei ori deciziile obligatorii, precum și faptele care prejudiciază onoarea și prestigiul unității sau instituției, interesul învățământului ori beneficiarii sistemului.

Sancțiunile sunt graduale. Prima este observația scrisă. Urmează reducerea salariului cu până la 15%, pe o perioadă de la o lună la 6 luni. Apoi, pentru cel mult 3 ani, poate fi suspendat dreptul de înscriere la concursul pentru gradația de merit sau pentru o funcție de conducere, îndrumare și control. Separat, poate fi suspendat pentru cel mult 3 ani dreptul de a face parte din comisiile examenelor naționale. Cea mai severă măsură este destituirea din funcția de conducere, îndrumare și control.

Observați diferența de terminologie față de personalul didactic de predare: art. 210 începe cu „avertisment scris”, iar art. 213 folosește „observație scrisă”. Pentru director, sancțiunea maximă specifică acestui articol este destituirea din funcția de conducere.

Nu confundați destituirea din funcția managerială cu desfacerea disciplinară a contractului individual de muncă prevăzută de art. 210 pentru personalul didactic de predare.`,
      [
        "Art. 213 se aplică personalului de conducere, îndrumare și control.",
        "Prima sancțiune este observația scrisă.",
        "Reducerea salarială poate fi de până la 15%, pentru 1–6 luni.",
        "Sancțiunea maximă specifică este destituirea din funcție."
      ],
      [
        Q("Care este prima sancțiune enumerată pentru personalul de conducere?", ["Observația scrisă", "Avertismentul verbal", "Desfacerea automată a contractului", "Amenda penală"], 0, "Art. 213 lit. a) folosește expres sintagma „observație scrisă”."),
        Q("Care este sancțiunea maximă specifică art. 213?", ["Destituirea din funcția de conducere, îndrumare și control", "Mutarea elevilor", "Închiderea unității", "Retragerea diplomei de bacalaureat"], 0, "Art. 213 lit. e) prevede destituirea din funcție."),
        Q("Cu cât poate fi redus salariul personalului de conducere, ca sancțiune?", ["Cu până la 15%, pentru 1–6 luni", "Cu 50%, pe viață", "Cu exact 2%, o zi", "Nu poate fi redus"], 0, "Limita este de 15%, iar perioada este de la o lună la 6 luni.")
      ],
      "Art. 213 — Definește abaterile și sancțiunile personalului de conducere, îndrumare și control, de la observația scrisă până la destituirea din funcție."
    ),
    L(
      214,
      "Sesizarea și comisiile pentru personalul de conducere",
      "12 min",
      "registratură · inspectorat · 5–7 membri · observatori elevi și părinți · decizia autorității",
      `Articolul 214 stabilește unde se depune sesizarea și cum se formează comisiile pentru cercetarea personalului de conducere, îndrumare și control.

Orice persoană poate sesiza în scris o faptă care ar putea constitui abatere. Legea indică instituția competentă în funcție de persoana reclamată: structura județeană pentru conducerea unităților și personalul propriu, Ministerul Educației pentru conducerile structurilor naționale sau județene prevăzute, ARACIIP pentru conducerea și controlul din birourile sale județene și CNFDCD pentru conducerea caselor corpului didactic.

În prezent trebuie aplicat regimul tranzitoriu din OUG nr. 95/2024: până la reorganizarea inspectoratelor și înființarea efectivă a direcțiilor județene, dispozițiile art. 213–215 pentru directorii unităților și personalul de îndrumare și control sunt puse în aplicare de inspectoratele școlare județene și de Inspectoratul Școlar al Municipiului București.

Pentru personalul de conducere al unității, comisia este formată din 5 până la 7 membri din cadrul structurii județene. Un membru este reprezentant al salariaților, iar ceilalți au o funcție didactică cel puțin egală cu a persoanei cercetate. La cercetare participă, cu statut de observator, un reprezentant al elevilor și un reprezentant al părinților.

Pentru conducerea structurilor județene și naționale, comisiile au 3–5 membri. Pentru membrii comisiilor, consiliilor ori responsabilii numiți de structura județeană, comisia are 5–7 membri și include reprezentarea sindicală sau a personalului.

Comisiile sunt constituite prin decizia sau ordinul conducătorului instituției abilitate să soluționeze sesizarea. Pentru concurs, reperul cel mai important este comisia de cercetare a directorului: 5–7 membri, plus observatorul elevilor și observatorul părinților.`,
      [
        "Orice persoană poate formula în scris sesizarea.",
        "Pentru directorul unității, comisia are 5–7 membri.",
        "La cercetarea directorului participă ca observatori un elev și un părinte.",
        "Tranzitoriu, atribuțiile DJIP pentru art. 213–215 sunt exercitate de inspectoratele școlare."
      ],
      [
        Q("Câți membri are comisia care cercetează personalul de conducere al unității?", ["5–7 membri", "3–5 elevi", "Exact 2 membri", "Minimum 20 de membri"], 0, "Art. 214 alin. (2) lit. b) stabilește o comisie de 5–7 membri."),
        Q("Cine participă ca observator la cercetarea directorului unității?", ["Un reprezentant al elevilor și unul al părinților", "Numai primarul", "Doar contabilul", "Nimeni"], 0, "Legea prevede expres cei doi observatori: elevi și părinți."),
        Q("Cine aplică tranzitoriu art. 213–215 pentru conducerea unităților?", ["Inspectoratele școlare", "Consiliul elevilor", "Exclusiv primăria", "Biblioteca județeană"], 0, "OUG nr. 95/2024 menține această competență la inspectoratele școlare până la reorganizare.")
      ],
      "Art. 214 — Reglementează locul sesizării și comisiile pentru personalul de conducere; pentru director comisia are 5–7 membri și doi observatori, iar tranzitoriu competența revine inspectoratelor școlare."
    ),
    L(
      215,
      "Finalizarea cercetării personalului de conducere",
      "10 min",
      "art. 212 aplicabil · interdicție 7 ani · propunere · autoritatea competentă · nulitate",
      `Articolul 215 descrie finalizarea cercetării disciplinare pentru personalul de conducere, îndrumare și control și preia garanțiile procedurale din art. 212.

În cercetare se stabilesc faptele, urmările, împrejurările, vinovăția și celelalte date concludente. Se aplică audierea obligatorie, dreptul la apărare și regulile privind decizia.

Articolul conține și o consecință severă pentru cadrele didactice sancționate cu desfacerea disciplinară a contractului individual de muncă: acestea nu pot ocupa posturi didactice sau catedre în învățământul preuniversitar de stat timp de 7 ani școlari.

Pentru personalul de conducere al structurilor naționale și județene prevăzute de lege, propunerea de sancționare și comunicarea se fac prin autoritatea stabilită de articol. Pentru conducerea unității, personalul de îndrumare și control și membrii structurilor numite la nivel județean, propunerea poate proveni de la membrii consiliului de administrație al structurii județene, iar comunicarea se face prin decizia conducătorului competent. În perioada tranzitorie, aceste atribuții sunt exercitate de inspectoratele școlare.

Sancțiunea este stabilită pe baza raportului comisiei de către autoritatea care a numit comisia și se comunică prin decizie scrisă sau ordin, după caz.

Ca și la art. 212, decizia este lovită de nulitate absolută dacă nu cuprinde descrierea faptei, prevederile încălcate, motivele înlăturării apărărilor, temeiul de drept, termenul și instanța de contestare. Dreptul de acces la instanță este garantat.

Pentru memorare, asociați art. 215 cu cifra 7: după desfacerea disciplinară a contractului, interdicția de a ocupa un post didactic în sistemul de stat este de 7 ani școlari.`,
      [
        "În cercetarea conducerii se aplică garanțiile art. 212.",
        "Desfacerea disciplinară atrage interdicția de a ocupa posturi didactice de stat timp de 7 ani școlari.",
        "Autoritatea care a numit comisia stabilește sancțiunea pe baza raportului.",
        "Lipsa elementelor obligatorii ale deciziei atrage nulitatea absolută."
      ],
      [
        Q("Cât durează interdicția de a ocupa posturi didactice de stat după desfacerea disciplinară a contractului?", ["7 ani școlari", "7 zile", "3 luni", "Pe viață"], 0, "Art. 215 alin. (2) stabilește o perioadă de 7 ani școlari."),
        Q("Pe ce se bazează stabilirea sancțiunii?", ["Pe raportul comisiei de cercetare", "Pe un sondaj online", "Pe hotărârea clasei", "Exclusiv pe zvonuri"], 0, "Autoritatea competentă stabilește sancțiunea pe baza raportului comisiei."),
        Q("Ce sancțiune juridică intervine dacă decizia nu conține elementele obligatorii?", ["Nulitatea absolută", "Doar o recomandare", "Majorarea salariului", "Nicio consecință"], 0, "Art. 215 alin. (5) prevede expres nulitatea absolută.")
      ],
      "Art. 215 — Reglementează finalizarea cercetării conducerii, interdicția de 7 ani școlari după desfacerea disciplinară, autoritatea competentă și conținutul obligatoriu al deciziei."
    ),
    L(
      216,
      "Răspunderea patrimonială",
      "5 min",
      "legislația muncii · personal didactic · personal auxiliar · conducere · decizie de imputare · recuperarea prejudiciului",
      `Articolul 216 încheie modulul prin răspunderea patrimonială. Ea privește personalul didactic, personalul didactic auxiliar și personalul de conducere, îndrumare și control.

Regula este aplicarea legislației muncii. Pentru personalul instituțiilor din apărare, ordine publică și securitate națională se aplică legislația specială corespunzătoare statutului său.

Decizia de imputare și celelalte acte necesare recuperării pagubelor și prejudiciilor sunt întocmite de conducerea unității sau instituției al cărei salariat este persoana în cauză. Excepția apare atunci când o altă lege dispune diferit.

Răspunderea patrimonială nu trebuie confundată cu răspunderea disciplinară. Prima urmărește repararea unei pagube sau recuperarea unui prejudiciu. A doua sancționează încălcarea obligațiilor de serviciu și a normelor profesionale. Aceeași faptă poate produce consecințe în planuri juridice diferite dacă sunt îndeplinite condițiile fiecărei forme de răspundere.

Formula de memorat este: legislația muncii – conducerea unității – decizia de imputare – recuperarea pagubei.`,
      [
        "Răspunderea patrimonială se stabilește, ca regulă, potrivit legislației muncii.",
        "Sunt vizate personalul didactic, auxiliar și cel de conducere, îndrumare și control.",
        "Conducerea unității întocmește decizia de imputare și actele de recuperare, dacă legea nu dispune altfel.",
        "Răspunderea patrimonială urmărește repararea pagubei și este distinctă de sancțiunea disciplinară."
      ],
      [
        Q("Potrivit cărei legislații se stabilește, ca regulă, răspunderea patrimonială?", ["Legislației muncii", "Legislației electorale", "Regulilor consiliului elevilor", "Exclusiv dreptului internațional"], 0, "Art. 216 trimite la legislația muncii, cu excepția personalului supus legislației speciale."),
        Q("Cine întocmește, ca regulă, decizia de imputare?", ["Conducerea unității sau instituției al cărei salariat este persoana", "Orice elev", "Primarul în toate cazurile", "Comisia de bacalaureat"], 0, "Art. 216 atribuie aceste acte conducerii unității sau instituției angajatoare, dacă legea nu prevede altfel."),
        Q("Care este scopul principal al răspunderii patrimoniale?", ["Recuperarea pagubelor și prejudiciilor", "Acordarea gradației de merit", "Organizarea examenelor", "Stabilirea curriculumului"], 0, "Răspunderea patrimonială privește repararea prejudiciului produs patrimoniului angajatorului.")
      ],
      "Art. 216 — Stabilește răspunderea patrimonială potrivit legislației muncii sau legislației speciale și competența conducerii de a întocmi actele pentru recuperarea pagubelor."
    )
  );
})();
