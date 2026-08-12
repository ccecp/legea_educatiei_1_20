"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const N = (...paragraphs) => paragraphs.join("\n\n");
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–229: verificare 12.08.2026";
  DATA.modules.push({
    id: 18,
    title: "Drepturi, obligații, distincții și pensionare",
    articles: "217–229",
    chapter: "Titlul III",
    startArticle: 217,
    endArticle: 229
  });

  DATA.lessons.push(
    L(
      217,
      "Gradația de merit și premiul pentru activitate suplimentară",
      "12 min",
      "concurs · 16% · 25% · 5 ani · premiu de două ori pe an · prorogare",
      N(
        "Articolul 217 reglementează două forme distincte de recunoaștere: gradația de merit și premiul pentru activitate suplimentară. Pentru concurs este important să nu le confundați, deoarece au condiții, durate și surse de finanțare diferite.",
        "Gradația de merit se acordă prin concurs personalului didactic din învățământul preuniversitar. Numărul gradațiilor reprezintă 16% din posturile didactice existente la nivel județean sau al municipiului București. Cuantumul este de 25% din salariul de bază, iar durata de acordare este de 5 ani.",
        "Metodologia și criteriile de acordare se aprobă prin ordin al ministrului educației, după consultarea federațiilor sindicale reprezentative. Textul legii menționează propunerea CNFDCD; funcționarea noilor structuri prevăzute de lege este însă corelată cu regimul tranzitoriu aplicabil până la începutul anului școlar 2027–2028.",
        "Alin. (3) prevede și un premiu pentru activitate suplimentară, acordat de două ori pe an prin decizia directorului. Fondul ar urma să fie constituit în limita a 2% din fondul de salarii al unității, iar criteriile specifice să fie propuse de consiliul de administrație al școlii. Aplicarea acestui alineat este însă prorogată, prin Legea nr. 141/2025, până la începutul anului școlar 2027–2028. La data verificării, 12 august 2026, acest premiu nu este încă aplicabil.",
        "Formula de memorat este: gradație — 16%, 25%, 5 ani; premiu suplimentar — de două ori pe an, fond de până la 2%, dar prorogat până în anul școlar 2027–2028."
      ),
      [
        "Gradația de merit se acordă prin concurs pentru 16% din posturile didactice.",
        "Cuantumul gradației este 25% din salariul de bază, pentru 5 ani.",
        "Premiul pentru activitate suplimentară este prevăzut de două ori pe an, dintr-un fond de până la 2%.",
        "Art. 217 alin. (3) este prorogat până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Ce procent din posturile didactice poate beneficia de gradație de merit?", ["16%", "25%", "2%", "50%"], 0, "Art. 217 alin. (1) stabilește limita de 16% din posturile didactice existente la nivel județean/al municipiului București."),
        Q("Care sunt cuantumul și durata gradației de merit?", ["25% din salariul de bază, timp de 5 ani", "16% din salariu, timp de 2 ani", "2% din salariu, timp de 10 ani", "Un salariu integral, timp de 6 luni"], 0, "Gradația reprezintă 25% din salariul de bază și se atribuie pentru 5 ani."),
        Q("Care este situația premiului pentru activitate suplimentară la 12 august 2026?", ["Aplicarea lui este prorogată până la începutul anului școlar 2027–2028", "Se acordă obligatoriu lunar", "A fost transformat în gradație de merit", "Este acordat exclusiv elevilor"], 0, "Legea nr. 141/2025 a prorogat aplicarea art. 217 alin. (3) până la începutul anului școlar 2027–2028.")
      ],
      N(
        "Art. 217 — Gradația de merit se acordă prin concurs pentru 16% din posturile didactice, reprezintă 25% din salariul de bază și se atribuie pentru 5 ani.",
        "Alin. (3), referitor la premiul pentru activitate suplimentară acordat de două ori pe an, este prorogat până la începutul anului școlar 2027–2028."
      )
    ),
    L(
      218,
      "Distincțiile și premiile personalului didactic",
      "11 min",
      "Ordinul Spiru Haret · medalii · diploma Gheorghe Lazăr · 20/15/10% · limita 1%",
      N(
        "Articolul 218 recunoaște rezultatele excelente obținute de personalul didactic în activitatea didactică, educativă și științifică. Recunoașterea poate lua forma decorațiilor, ordinelor, medaliilor și titlurilor acordate potrivit legii.",
        "Ordinele și medaliile menționate expres sunt Ordinul Spiru Haret, cu clasele Comandor, Cavaler și Ofițer, precum și Medalia Membru de onoare al corpului didactic. Medalia se acordă cadrelor didactice pensionabile cu activitate deosebită în învățământ.",
        "Ministrul educației poate acorda și scrisoarea de mulțumire publică, diploma Gheorghe Lazăr clasele I, a II-a și a III-a, diploma de excelență și diploma pentru inovare și digitalizare în educație.",
        "Diploma Gheorghe Lazăr este însoțită de premii de 20%, 15% și, respectiv, 10% din suma salariilor de bază primite în ultimele 12 luni de activitate. Diploma de excelență este însoțită de un premiu de 20% din aceeași bază de calcul.",
        "Distincțiile acordate de ministru se supun regulamentului aprobat prin ordin și limitei de 1% din numărul total al posturilor didactice din fiecare județ sau sector al municipiului București. Fondurile sunt asigurate de Ministerul Educației."
      ),
      [
        "Ordinul Spiru Haret are clasele Comandor, Cavaler și Ofițer.",
        "Diploma Gheorghe Lazăr are trei clase și premii de 20%, 15% și 10%.",
        "Diploma de excelență este însoțită de un premiu de 20%.",
        "Distincțiile ministeriale se acordă în limita a 1% din posturile didactice."
      ],
      [
        Q("Care dintre următoarele este o distincție prevăzută expres de art. 218?", ["Diploma pentru inovare și digitalizare în educație", "Permisul de predare european", "Certificatul de bugetare", "Medalia consiliului elevilor"], 0, "Diploma pentru inovare și digitalizare în educație este enumerată expres la art. 218 alin. (3)."),
        Q("Ce premiu însoțește diploma Gheorghe Lazăr clasa I?", ["20% din suma salariilor de bază primite în ultimele 12 luni", "1% din salariul unei luni", "Două salarii de bază în toate cazurile", "Nu este însoțită de premiu"], 0, "Pentru clasa I, procentul este 20%; pentru clasele a II-a și a III-a sunt 15%, respectiv 10%."),
        Q("Care este limita de acordare a distincțiilor prevăzute la alin. (3)?", ["1% din numărul total al posturilor didactice din fiecare județ/sector", "16% din numărul elevilor", "25% din fondul de salarii", "Fără nicio limită"], 0, "Art. 218 alin. (5) stabilește limita de 1% din totalul posturilor didactice.")
      ],
      N(
        "Art. 218 — Personalul didactic cu rezultate excelente poate primi decorații, ordine, medalii și titluri.",
        "Sunt prevăzute Ordinul Spiru Haret, Medalia Membru de onoare al corpului didactic, scrisoarea de mulțumire publică, diploma Gheorghe Lazăr, diploma de excelență și diploma pentru inovare și digitalizare în educație."
      )
    ),
    L(
      219,
      "Drepturi generale, sănătate și boli profesionale",
      "9 min",
      "lege · regulamente · contracte · examinări medicale · vaccinare · DSP · pensie de invaliditate",
      N(
        "Articolul 219 arată mai întâi izvoarele drepturilor și obligațiilor personalului din învățământ: legislația în vigoare, Legea nr. 198/2023, regulamentele specifice, contractul individual de muncă și contractul colectiv de muncă aplicabil.",
        "Personalul beneficiază de asistență medicală gratuită pentru examinările medicale periodice prevăzute de lege, de vaccinare gratuită împotriva bolilor infectocontagioase și de măsuri active pentru prevenirea îmbolnăvirilor profesionale.",
        "Lista bolilor profesionale dobândite prin activități didactice este stabilită de Ministerul Sănătății și aprobată prin ordin comun al miniștrilor sănătății și educației. Declararea bolii profesionale este realizată de direcția de sănătate publică județeană sau a municipiului București din care face parte medicul de medicina muncii care a efectuat cercetarea.",
        "Cadrul didactic care își pierde capacitatea de muncă din cauza unei boli profesionale beneficiază de pensie de invaliditate, în condițiile legislației în vigoare.",
        "Pentru concurs, rețineți lanțul instituțional: medicina muncii cercetează cazul, DSP declară boala profesională, iar dreptul la pensie se exercită potrivit legislației de asigurări sociale."
      ),
      [
        "Drepturile și obligațiile rezultă din lege, regulamente și contractele de muncă.",
        "Examinările periodice și vaccinarea împotriva bolilor infectocontagioase sunt gratuite.",
        "DSP declară boala profesională în condițiile legii.",
        "Pierderea capacității de muncă din cauza bolii profesionale poate conduce la pensie de invaliditate."
      ],
      [
        Q("Din ce izvoare decurg drepturile și obligațiile personalului din învățământ?", ["Din legislație, regulamente și contractele de muncă aplicabile", "Numai din hotărârile consiliului elevilor", "Exclusiv din fișa de înscriere a elevilor", "Doar din decizia primarului"], 0, "Art. 219 alin. (1) enumeră legea, regulamentele și contractele individual și colectiv de muncă."),
        Q("Cine declară boala profesională, în condițiile art. 219?", ["Direcția de sănătate publică competentă", "Consiliul elevilor", "Secretariatul școlii", "Comisia de bacalaureat"], 0, "Declararea revine DSP județene/a municipiului București din care face parte medicul de medicina muncii care a cercetat cazul."),
        Q("Ce drept poate avea cadrul didactic care și-a pierdut capacitatea de muncă din cauza unei boli profesionale?", ["Pensie de invaliditate, potrivit legii", "Gradație de merit automată", "Un mandat de director", "Scutire permanentă de orice evaluare"], 0, "Art. 219 alin. (4) prevede pensia de invaliditate în conformitate cu legislația în vigoare.")
      ],
      N(
        "Art. 219 — Reglementează izvoarele drepturilor și obligațiilor personalului, asistența medicală periodică, vaccinarea, prevenirea bolilor profesionale, declararea lor de către DSP și pensia de invaliditate."
      )
    ),
    L(
      220,
      "Concediul de odihnă",
      "12 min",
      "62 de zile lucrătoare · vacanțe · CA · întrerupere · concediu restant · conducere și auxiliar",
      N(
        "Articolul 220 diferențiază regimul concediului cadrelor didactice de predare de cel aplicabil personalului de conducere, personalului didactic auxiliar și personalului administrativ.",
        "Cadrele didactice din unitățile de învățământ de stat beneficiază anual de concediu de odihnă plătit, în perioada vacanțelor școlare, cu durata de 62 de zile lucrătoare. În cazuri bine justificate, conducerea poate întrerupe concediul; munca prestată în acea perioadă este remunerată.",
        "Perioadele concrete sunt stabilite de consiliul de administrație, cu respectarea interesului superior al beneficiarului primar și cu asigurarea personalului necesar pentru examenele naționale și concursurile finanțate de Ministerul Educației.",
        "Dacă un cadru didactic nu a efectuat integral sau parțial concediul din motive justificate, angajatorul trebuie să îl acorde în vacanțele anului școlar următor, cu acordul persoanei îndreptățite.",
        "Personalul de conducere, de îndrumare și control beneficiază de concediu potrivit Codului muncii și contractului colectiv de muncă aplicabil. Personalul didactic auxiliar și administrativ se supune legislației muncii și contractului colectiv; perioadele se stabilesc de consiliul de administrație la cererea angajatului, iar concediul restant se efectuează în anul calendaristic următor cu aprobarea CA."
      ),
      [
        "Cadrele didactice din unitățile de stat au 62 de zile lucrătoare de concediu, în vacanțele școlare.",
        "CA stabilește perioadele, asigurând desfășurarea examenelor și concursurilor.",
        "Concediul neefectuat justificat se acordă în vacanțele anului școlar următor.",
        "Conducerea, personalul auxiliar și administrativ au regim corelat cu legislația muncii și contractul colectiv."
      ],
      [
        Q("Care este durata concediului anual al cadrelor didactice din unitățile de stat?", ["62 de zile lucrătoare", "30 de zile calendaristice", "15 zile lucrătoare", "90 de zile în toate cazurile"], 0, "Art. 220 alin. (1) stabilește 62 de zile lucrătoare, în perioada vacanțelor școlare."),
        Q("Cine stabilește perioadele de efectuare a concediului fiecărui cadru didactic?", ["Consiliul de administrație", "Consiliul elevilor", "Fiecare clasă", "Exclusiv primarul"], 0, "Consiliul de administrație stabilește perioadele, cu respectarea interesului superior al elevului și a necesarului pentru examene."),
        Q("Ce se întâmplă cu concediul didactic neefectuat din motive justificate?", ["Se acordă în vacanțele anului școlar următor, cu acordul cadrului didactic", "Se pierde automat în aceeași zi", "Se transformă în gradație de merit", "Se acordă numai după pensionare"], 0, "Angajatorul este obligat să acorde concediul neefectuat în vacanțele anului școlar următor.")
      ],
      N(
        "Art. 220 — Cadrele didactice din unitățile de stat beneficiază de 62 de zile lucrătoare de concediu anual plătit, în vacanțele școlare.",
        "Articolul reglementează stabilirea perioadelor, întreruperea justificată și recuperarea concediului neefectuat, precum și regimul conducerii, personalului auxiliar și administrativ."
      )
    ),
    L(
      221,
      "Concediul pentru doctorat și lucrări de interes educațional",
      "7 min",
      "6 luni · o singură dată · concediu plătit · CA · fără plata cu ora · salarii compensatorii",
      N(
        "Articolul 221 instituie un drept special pentru cadrele didactice care redactează teza de doctorat sau lucrări în interesul învățământului, pe baza unui contract de cercetare ori de editare.",
        "Aceste cadre didactice pot primi 6 luni de concediu plătit, o singură dată, cu aprobarea consiliului de administrație al unității de învățământ. Cele trei repere care trebuie memorate împreună sunt: 6 luni, o singură dată, aprobarea CA.",
        "În perioada acestui concediu, persoana nu poate fi încadrată în activități didactice retribuite în regim de plată cu ora. Scopul concediului este realizarea efectivă a tezei sau lucrării pentru care a fost acordat.",
        "Alin. (3) tratează o situație diferită: dacă o unitate de învățământ de stat se desființează, salariații disponibilizați primesc salarii compensatorii, conform legii."
      ),
      [
        "Concediul special are durata de 6 luni și se acordă o singură dată.",
        "Este necesară aprobarea consiliului de administrație.",
        "În această perioadă nu sunt permise activități didactice plătite cu ora.",
        "La desființarea unei unități de stat, salariații disponibilizați primesc salarii compensatorii potrivit legii."
      ],
      [
        Q("Cât durează concediul plătit pentru redactarea tezei de doctorat sau a lucrărilor prevăzute de art. 221?", ["6 luni", "62 de zile", "3 ani", "5 zile"], 0, "Art. 221 alin. (1) prevede 6 luni de concediu plătit, o singură dată."),
        Q("Cine aprobă acest concediu?", ["Consiliul de administrație al unității", "Consiliul elevilor", "Primarul, exclusiv", "Comisia de admitere"], 0, "Aprobarea aparține consiliului de administrație al unității de învățământ."),
        Q("Poate cadrul didactic să desfășoare activități didactice plătite cu ora în perioada concediului?", ["Nu", "Da, fără limită", "Da, dar numai în propria clasă", "Numai la solicitarea elevilor"], 0, "Art. 221 alin. (2) interzice încadrarea în activități didactice retribuite în regim de plată cu ora.")
      ],
      N(
        "Art. 221 — Cadrele didactice care redactează teza de doctorat ori lucrări în interesul învățământului, pe baza unui contract de cercetare sau editare, au dreptul o singură dată la 6 luni de concediu plătit, cu aprobarea CA.",
        "În această perioadă nu pot desfășura activități didactice plătite cu ora."
      )
    ),
    L(
      222,
      "Dreptul la inițiativă profesională",
      "5 min",
      "pregătirea activității · principii psihopedagogice · resurse · inovare",
      N(
        "Articolul 222 definește dreptul cadrului didactic la inițiativă profesională prin trei componente. Este un articol scurt, dar relevant pentru autonomia profesională și pentru managementul inovării în școală.",
        "Prima componentă este pregătirea activității profesionale și realizarea obiectivelor educaționale ale disciplinelor prin metode conforme principiilor psihopedagogice. Inițiativa nu înseamnă abatere de la curriculum sau de la etica profesiei.",
        "A doua componentă este utilizarea bazei materiale și a resurselor educaționale pentru îndeplinirea obligațiilor profesionale. A treia este punerea în practică a ideilor inovatoare pentru modernizarea procesului de învățământ.",
        "Pentru director, articolul fundamentează crearea unui climat în care profesorii pot propune și testa soluții educaționale, în limitele curriculumului, ale resurselor și ale principiilor psihopedagogice."
      ),
      [
        "Inițiativa profesională privește pregătirea activității și realizarea obiectivelor educaționale.",
        "Metodele trebuie să respecte principiile psihopedagogice.",
        "Personalul didactic poate utiliza baza materială și resursele educaționale.",
        "Ideile inovatoare pot fi puse în practică pentru modernizarea procesului de învățământ."
      ],
      [
        Q("Ce condiție trebuie să respecte metodele alese de cadrul didactic?", ["Să fie conforme principiilor psihopedagogice", "Să fie stabilite de fiecare elev", "Să elimine obiectivele disciplinei", "Să nu folosească resurse educaționale"], 0, "Art. 222 lit. a) leagă inițiativa profesională de principiile psihopedagogice."),
        Q("În ce scop poate fi utilizată baza materială a școlii?", ["Pentru realizarea obligațiilor profesionale", "Exclusiv pentru activități comerciale personale", "Numai în vacanță", "Doar de către părinți"], 0, "Utilizarea bazei materiale și a resurselor educaționale este parte a dreptului la inițiativă profesională."),
        Q("Ce permite art. 222 în privința inovării?", ["Punerea în practică a ideilor inovatoare pentru modernizarea învățământului", "Interzicerea oricărei metode noi", "Înlocuirea legii prin decizia profesorului", "Eliminarea evaluării"], 0, "Lit. c) consacră aplicarea ideilor inovatoare pentru modernizarea procesului de învățământ.")
      ],
      "Art. 222 — Dreptul la inițiativă profesională cuprinde pregătirea activității prin metode psihopedagogice, utilizarea resurselor și aplicarea ideilor inovatoare."
    ),
    L(
      223,
      "Siguranța actului educațional, accesul și înregistrarea activității",
      "14 min",
      "neperturbare · accesul părinților · situații speciale · intervenția autorităților · înregistrări",
      N(
        "Articolul 223 protejează siguranța și continuitatea actului educațional. Personalul didactic de predare are dreptul la siguranță în exercitarea activității și nu poate fi perturbat în timpul desfășurării acesteia.",
        "Accesul părinților, tutorilor sau reprezentanților legali în incinta școlii se face potrivit procedurii de acces din regulamentul unității. Accesul este permis când persoana a fost solicitată ori programată pentru discuții cu un profesor sau cu directorul, desfășoară activități comune cu profesorii, depune documente la secretariat, participă la acțiuni ale părinților aprobate de conducere sau se află într-o altă situație specială prevăzută de regulament.",
        "Intervenția autorităților care coordonează sistemul ori a autorităților publice nu este considerată perturbare când sănătatea fizică sau psihică a elevilor ori a personalului este pusă în pericol, conform constatării conducerii, sau în timpul exercițiilor de alarmare pentru situații de urgență.",
        "Înregistrarea activității didactice se poate face numai în conformitate cu actele normative emise de Ministerul Educației, cu dispozițiile legale ori cu normele ministerelor care au rețele proprii de învățământ. Stocarea imaginilor audio-video provenite din sistemul legal de supraveghere al școlii nu este calificată de acest articol drept înregistrare a activității didactice.",
        "Multiplicarea înregistrărilor de către elevi sau alte persoane este permisă numai în aceleași condiții legale. Pentru concurs, nu confundați accesul reglementat al părinților cu un acces nelimitat și nici protecția orei cu interdicția intervenției autorităților în situații de pericol."
      ),
      [
        "Personalul didactic are dreptul la siguranță și la neperturbarea activității.",
        "Accesul părinților se face potrivit procedurii din regulamentul unității.",
        "Intervenția autorităților în situații de pericol sau la exerciții de alarmare nu este perturbare.",
        "Înregistrarea și multiplicarea activității didactice sunt permise numai în condițiile legii."
      ],
      [
        Q("În ce document trebuie prevăzută procedura de acces a părinților în școală?", ["În regulamentul de organizare și funcționare al unității", "În catalogul clasei", "În diploma de bacalaureat", "În buletinul de identitate al elevului"], 0, "Art. 223 alin. (2) leagă accesul de procedura prevăzută în regulamentul unității."),
        Q("Care intervenție nu este considerată perturbare a activității didactice?", ["Intervenția autorităților când sănătatea elevilor ori a personalului este pusă în pericol", "Intrarea oricărei persoane fără motiv", "Filmarea clandestină a orei", "Întreruperea orei pentru publicitate"], 0, "Art. 223 alin. (3) permite intervenția autorităților în situațiile de pericol constatate de conducere și la exercițiile de alarmare."),
        Q("În ce condiții poate fi înregistrată activitatea didactică?", ["Numai în conformitate cu actele normative și dispozițiile legale aplicabile", "Oricând dorește orice elev", "Fără nicio regulă", "Numai prin decizia unui părinte"], 0, "Înregistrarea este permisă numai în condițiile normative stabilite de lege și de autoritățile competente.")
      ],
      N(
        "Art. 223 — Personalul didactic are dreptul la siguranță și la neperturbarea actului educațional.",
        "Articolul reglementează accesul părinților, intervenția autorităților în situații de pericol și condițiile legale ale înregistrării și multiplicării activității didactice."
      )
    ),
    L(
      224,
      "Asocierea și exprimarea opiniilor profesionale",
      "6 min",
      "sindicate · asociații profesionale · organizații culturale · opinii · onoare și prestigiu",
      N(
        "Articolul 224 garantează personalului didactic dreptul de asociere. Cadrele didactice pot face parte din asociații și organizații sindicale, profesionale și culturale, naționale și internaționale, dacă acestea sunt legal constituite.",
        "Articolul protejează și exprimarea liberă a opiniilor profesionale în spațiul școlar. În afara spațiului școlar, personalul didactic poate întreprinde acțiuni în nume propriu.",
        "Exercitarea acestor libertăți are limite: acțiunile nu trebuie să afecteze onoarea și prestigiul învățământului, demnitatea profesiei ori prevederile Legii nr. 198/2023.",
        "Pentru director, echilibrul este între respectarea libertății profesionale și protejarea demnității funcției didactice și a instituției. O opinie profesională nu poate fi restrânsă arbitrar, dar nici nu exonerează autorul de respectarea legii și a obligațiilor profesionale."
      ),
      [
        "Personalul didactic poate participa la organizații sindicale, profesionale și culturale legal constituite.",
        "Sunt permise organizațiile naționale și internaționale.",
        "Opiniile profesionale pot fi exprimate liber în spațiul școlar.",
        "Acțiunile nu trebuie să afecteze prestigiul învățământului, demnitatea profesiei sau legea."
      ],
      [
        Q("Din ce tipuri de organizații poate face parte personalul didactic?", ["Sindicale, profesionale și culturale, legal constituite", "Numai organizații create de primar", "Exclusiv cluburi ale elevilor", "Nicio organizație"], 0, "Art. 224 alin. (1) enumeră organizațiile sindicale, profesionale și culturale, naționale și internaționale."),
        Q("Ce poate exprima liber personalul didactic în spațiul școlar?", ["Opinii profesionale", "Date personale confidențiale ale elevilor", "Orice amenințare", "Informații clasificate"], 0, "Art. 224 alin. (2) protejează exprimarea opiniilor profesionale."),
        Q("Care este una dintre limitele acțiunilor întreprinse în nume propriu?", ["Să nu afecteze demnitatea profesiei", "Să fie aprobate de fiecare elev", "Să se desfășoare numai în vacanță", "Să urmărească obținerea unei gradații"], 0, "Legea protejează onoarea și prestigiul învățământului, demnitatea profesiei și respectarea prevederilor legale.")
      ],
      "Art. 224 — Personalul didactic are drept de asociere și de exprimare a opiniilor profesionale, cu respectarea legii, a prestigiului învățământului și a demnității profesiei."
    ),
    L(
      225,
      "Participarea la manifestări științifice în străinătate",
      "5 min",
      "deplasare · participare · integral sau parțial · buget · venituri proprii · sponsorizări · CA",
      N(
        "Articolul 225 reglementează sprijinul financiar pentru participarea personalului didactic la manifestări științifice organizate în străinătate.",
        "Cheltuielile de deplasare și participare pot fi acoperite integral sau parțial. Dreptul nu este necondiționat: se exercită în limita fondurilor alocate prin buget, a veniturilor proprii ori a sponsorizărilor.",
        "Participarea și acoperirea cheltuielilor necesită aprobarea consiliului de administrație al unității de învățământ.",
        "Pentru concurs, rețineți cele trei surse posibile — buget, venituri proprii, sponsorizări — și competența consiliului de administrație."
      ),
      [
        "Cheltuielile pot fi acoperite integral sau parțial.",
        "Sunt vizate deplasarea și participarea la manifestări științifice în străinătate.",
        "Sursele pot fi bugetul, veniturile proprii sau sponsorizările.",
        "Este necesară aprobarea consiliului de administrație."
      ],
      [
        Q("Ce cheltuieli pot fi acoperite potrivit art. 225?", ["Deplasarea și participarea la manifestări științifice în străinătate", "Orice vacanță personală", "Numai achiziția unei mașini", "Exclusiv taxele elevilor"], 0, "Articolul privește cheltuielile legate de manifestările științifice organizate în străinătate."),
        Q("În ce măsură pot fi acoperite aceste cheltuieli?", ["Integral sau parțial, în limita fondurilor", "Numai exact 50%", "Fără nicio limită bugetară", "Exclusiv de către familie"], 0, "Legea permite acoperirea integrală ori parțială, în limita resurselor disponibile."),
        Q("Cine aprobă sprijinul prevăzut de art. 225?", ["Consiliul de administrație al unității", "Consiliul elevilor", "Medicul școlar", "Biblioteca județeană"], 0, "Aprobarea aparține consiliului de administrație al unității de învățământ.")
      ],
      "Art. 225 — Personalul didactic poate beneficia, în limita fondurilor, de acoperirea integrală ori parțială a cheltuielilor pentru manifestări științifice în străinătate, cu aprobarea CA."
    ),
    L(
      226,
      "Drepturile copiilor personalului din învățământ",
      "6 min",
      "taxe de admitere · învățământ superior · cazare gratuită · personal activ · pensionat · orfani",
      N(
        "Articolul 226 acordă anumite facilități copiilor personalului din sistemul de învățământ. Copiii personalului aflat în activitate sunt scutiți de plata taxelor de înscriere la concursurile de admitere în învățământul superior.",
        "Aceștia beneficiază și de gratuitate la cazare în cămine și internate. Textul se referă la taxele de înscriere la admitere și la cazare, nu la o scutire generală de toate taxele universitare.",
        "Aceleași drepturi se aplică și copiilor personalului pensionat din sistemul de învățământ, precum și copiilor orfani de unul sau de ambii părinți care au activat în sistem.",
        "Pentru memorare, rețineți două facilități și trei categorii: admitere fără taxă de înscriere plus cazare gratuită; copii ai personalului activ, pensionat și copii orfani ai personalului care a activat în învățământ."
      ),
      [
        "Facilitățile sunt scutirea taxei de înscriere la admitere și cazarea gratuită.",
        "Scutirea privește concursurile de admitere în învățământul superior.",
        "Sunt incluși copiii personalului activ și pensionat.",
        "Sunt incluși și copiii orfani de unul sau ambii părinți care au activat în sistem."
      ],
      [
        Q("De ce taxă sunt scutiți copiii personalului din învățământ?", ["Taxa de înscriere la concursurile de admitere în învățământul superior", "Toate taxele și impozitele pe viață", "Taxa pentru permisul auto", "Taxa de transport internațional"], 0, "Art. 226 alin. (1) se referă la taxele de înscriere la concursurile de admitere în învățământul superior."),
        Q("Ce facilitate de cazare este prevăzută?", ["Gratuitate în cămine și internate", "Hotel gratuit fără limită", "Locuință proprietate personală", "Decontarea oricărei chirii"], 0, "Legea prevede gratuitate la cazare în cămine și internate."),
        Q("Cine mai beneficiază, alături de copiii personalului activ?", ["Copiii personalului pensionat și copiii orfani ai personalului care a activat în sistem", "Numai copiii directorilor", "Exclusiv elevii olimpici", "Toți cetățenii, fără legătură cu sistemul"], 0, "Art. 226 alin. (2) extinde facilitățile la aceste două categorii.")
      ],
      "Art. 226 — Copiii personalului activ sau pensionat și copiii orfani ai personalului care a activat în învățământ sunt scutiți de taxa de înscriere la admiterea în învățământul superior și beneficiază de cazare gratuită în cămine și internate."
    ),
    L(
      227,
      "Reduceri pentru tratament și concediul fără plată pentru studii",
      "8 min",
      "reducere 50% · cazare · masă · tratament · 3 ani din 7 · titular · CA · dovadă",
      N(
        "Articolul 227 cuprinde două drepturi diferite. Primul este o reducere de 50% a costurilor de cazare, masă și tratament în bazele de odihnă și tratament, acordată personalului didactic și didactic auxiliar din bugetul asigurărilor sociale de stat.",
        "Al doilea drept aparține personalului didactic titular care, din proprie inițiativă, solicită să se specializeze sau să își continue studiile: concediul fără plată.",
        "Durata totală a acestui concediu nu poate depăși 3 ani într-un interval de 7 ani. Aprobarea aparține unității școlare, prin consiliul de administrație, dacă persoana face dovada activității de specializare sau continuare a studiilor.",
        "Nu confundați concediul fără plată de la art. 227 cu cele 6 luni de concediu plătit, o singură dată, de la art. 221. Reperele sunt diferite: art. 221 — 6 luni plătite; art. 227 — maximum 3 ani în 7 ani, fără plată."
      ),
      [
        "Reducerea este de 50% pentru cazare, masă și tratament.",
        "Reducerea vizează personalul didactic și didactic auxiliar.",
        "Concediul fără plată pentru studii aparține personalului didactic titular.",
        "Durata maximă este 3 ani într-un interval de 7 ani, cu aprobarea CA și dovada activității."
      ],
      [
        Q("Care este reducerea prevăzută pentru cazare, masă și tratament?", ["50%", "25%", "16%", "100% în toate cazurile"], 0, "Art. 227 alin. (1) stabilește reducerea cu 50%."),
        Q("Care este durata maximă totală a concediului fără plată pentru specializare sau continuarea studiilor?", ["3 ani într-un interval de 7 ani", "6 luni în fiecare an", "5 ani într-un interval de 5 ani", "Fără nicio limită"], 0, "Art. 227 alin. (2) stabilește plafonul de 3 ani într-un interval de 7 ani."),
        Q("Cine aprobă acest concediu fără plată?", ["Consiliul de administrație al unității, dacă se face dovada activității", "Consiliul elevilor", "Orice părinte", "Comisia de bacalaureat"], 0, "Competența aparține unității școlare prin consiliul de administrație.")
      ],
      N(
        "Art. 227 — Personalul didactic și didactic auxiliar beneficiază de reducere cu 50% pentru cazare, masă și tratament în bazele de odihnă și tratament.",
        "Personalul didactic titular poate primi concediu fără plată pentru studii, maximum 3 ani într-un interval de 7 ani, cu aprobarea CA."
      )
    ),
    L(
      228,
      "Obligațiile profesionale ale personalului didactic",
      "14 min",
      "profesionalism · etică · formare continuă · echitate · diversitate · integritate · familie · stare de bine",
      N(
        "Articolul 228 sintetizează obligațiile profesionale ale cadrului didactic. Pentru a fi mai ușor de memorat, cele 14 obligații pot fi grupate în patru domenii: calitatea actului didactic, dezvoltarea profesională, valorile relaționale și sprijinul acordat elevului.",
        "Calitatea actului didactic înseamnă exercitarea cunoștințelor și competențelor cu profesionalism, respectarea eticii, a fișei postului și comunicarea transparentă în evaluare. Cadrul didactic transmite cunoștințe și valori în egală măsură.",
        "Dezvoltarea profesională presupune o atitudine proactivă de perfecționare, participare la formare continuă și stăruință în pregătirea permanentă pentru atingerea potențialului profesional maxim.",
        "Valorile relaționale includ echitatea, șansele egale de acces, progres și finalizare a studiilor, respectarea diversității, promovarea integrității, respectul reciproc și sprijinul între colegi, precum și formarea elevilor în spiritul valorilor unei societăți democratice.",
        "Sprijinul pentru elev cuprinde motivarea pentru atingerea potențialului maxim, colaborarea și parteneriatul cu familia, contribuția la starea de bine și facilitarea accesului tuturor elevilor la consiliere și orientare, precum și flexibilitatea parcursului educațional pentru a răspunde corect nevoilor beneficiarilor și comunităților de învățare.",
        "Pentru director, art. 228 oferă o grilă de evaluare a culturii profesionale: competență și etică, formare continuă, echitate și incluziune, evaluare transparentă, parteneriat cu familia și grijă pentru starea de bine."
      ),
      [
        "Profesionalismul și etica trebuie să asigure un proces educațional de înaltă calitate.",
        "Fișa postului și formarea continuă sunt obligații profesionale.",
        "Echitatea, diversitatea, integritatea și respectul sunt repere obligatorii.",
        "Profesorul colaborează cu familia și contribuie la starea de bine și orientarea elevilor."
      ],
      [
        Q("Care dintre următoarele este o obligație prevăzută de art. 228?", ["Comunicarea transparentă în evaluare", "Ascunderea criteriilor de evaluare", "Refuzul formării continue", "Limitarea accesului elevilor la consiliere"], 0, "Art. 228 lit. j) prevede comunicarea transparentă în evaluare pentru menținerea încrederii beneficiarilor."),
        Q("Ce presupune obligația de echitate?", ["Șanse egale de acces, progres și finalizare a studiilor", "Aplicarea unor reguli diferite fără justificare", "Eliminarea sprijinului pentru elevii vulnerabili", "Accesul exclusiv al elevilor performanți"], 0, "Art. 228 lit. d) leagă echitatea de șanse egale de acces, progres și finalizare."),
        Q("Cu cine trebuie construit un parteneriat în procesul de educație al elevului?", ["Cu familia", "Exclusiv cu furnizorii comerciali", "Numai cu absolvenții", "Doar cu autoritățile fiscale"], 0, "Art. 228 lit. k) prevede colaborarea și construirea parteneriatului cu familia.")
      ],
      N(
        "Art. 228 — Personalul didactic are obligații privind profesionalismul și etica, respectarea fișei postului, formarea continuă, excelența, echitatea, diversitatea, integritatea, respectul, evaluarea transparentă, parteneriatul cu familia, starea de bine, flexibilitatea și transmiterea de cunoștințe și valori."
      )
    ),
    L(
      229,
      "Pensionarea și continuarea activității",
      "15 min",
      "30 de zile · 65 de ani · sfârșitul anului școlar · până la 70 de ani · reîncadrare · prima prorogată",
      N(
        "Articolul 229 este amplu și trebuie învățat pe trasee. Regula generală este că personalul din învățământ beneficiază de pensie potrivit legislației sistemului public de pensii și Legii nr. 198/2023.",
        "Cu cel puțin 30 de zile calendaristice înainte de îndeplinirea condițiilor de vârstă standard și stagiu minim, persoana poate opta în scris pentru continuarea contractului până la vârsta de 65 de ani. Cererea se adresează consiliului de administrație și se depune la secretariat. CA constată exercitarea dreptului în 15 zile lucrătoare, iar decizia se comunică în 5 zile lucrătoare. Angajatorul nu poate limita acest drept.",
        "Personalul didactic de predare, conducere, îndrumare și control se pensionează, ca regulă, la încheierea anului școlar în care îndeplinește condițiile legale. Pentru motive temeinice, pensionarea poate avea loc și în timpul anului școlar, la cerere, cu aprobarea autorității competente; cererea se soluționează în 30 de zile, iar decizia se comunică în 5 zile lucrătoare.",
        "Cadrele didactice pensionate pot desfășura activități didactice salarizate prin plata cu ora după împlinirea vârstei standard. Personalul didactic pensionat beneficiază de asistență medicală și de acces la casele de odihnă și bazele de tratament.",
        "Titularul căruia nu i s-a emis decizia de pensionare poate fi menținut anual, la cerere, peste vârsta standard, până la 70 de ani. Personalul pensionat care nu a depășit cu 5 ani vârsta standard poate fi reîncadrat anual, cu acordul CA, potrivit metodologiei și cu suspendarea pensiei pe durata reîncadrării. Persoanele menținute sau reîncadrate pot fi detașate în interesul învățământului în funcții vacante de conducere, îndrumare ori control, neocupate prin concurs, în condițiile legii.",
        "Alin. (14) prevede o primă de două salarii de bază pentru personalul care se pensionează la împlinirea vârstei standard. Legea nr. 141/2025 a prorogat aplicarea acestei prime până la începutul anului școlar 2026–2027. La data verificării, 12 august 2026, termenul nu începuse încă; materialul nu prezintă prima ca drept deja aplicabil.",
        "Cifrele de memorat sunt: cererea cu 30 de zile înainte; constatarea în 15 zile și comunicarea în 5; menținerea până la 70 de ani; reîncadrarea în primii 5 ani peste vârsta standard; prima de două salarii, prorogată până la începutul anului școlar 2026–2027."
      ),
      [
        "Opțiunea de continuare până la 65 de ani se depune cu cel puțin 30 de zile înainte.",
        "CA constată dreptul în 15 zile lucrătoare și comunică decizia în 5 zile.",
        "Titularul fără decizie de pensionare poate fi menținut anual până la 70 de ani.",
        "Reîncadrarea pensionarului presupune, între altele, suspendarea pensiei.",
        "Prima de două salarii de bază este prorogată până la începutul anului școlar 2026–2027."
      ],
      [
        Q("Cu cât timp înainte se depune opțiunea pentru continuarea contractului până la 65 de ani?", ["Cu cel puțin 30 de zile calendaristice", "Cu 5 zile", "Cu 7 ani", "Nu există cerere"], 0, "Art. 229 alin. (2) stabilește termenul de cel puțin 30 de zile calendaristice."),
        Q("Până la ce vârstă poate fi menținut anual titularul căruia nu i s-a emis decizia de pensionare?", ["Până la 70 de ani", "Până la 62 de ani", "Până la 80 de ani în toate cazurile", "Numai până la 65 de ani"], 0, "Art. 229 alin. (11) permite menținerea anuală, la cerere, până la vârsta de 70 de ani."),
        Q("Care era situația primei de două salarii de bază la 12 august 2026?", ["Aplicarea era prorogată până la începutul anului școlar 2026–2027", "Se acorda lunar tuturor profesorilor", "Fusese înlocuită cu gradația de merit", "Era rezervată exclusiv directorilor"], 0, "Legea nr. 141/2025 a prorogat art. 229 alin. (14) până la începutul anului școlar 2026–2027.")
      ],
      N(
        "Art. 229 — Reglementează pensionarea, continuarea contractului până la 65 de ani, pensionarea la încheierea anului școlar, menținerea anuală până la 70 de ani, reîncadrarea pensionarilor și plata cu ora.",
        "Alin. (14), referitor la prima de două salarii de bază, este prorogat până la începutul anului școlar 2026–2027."
      )
    )
  );
})();
