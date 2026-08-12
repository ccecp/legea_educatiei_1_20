"use strict";

(() => {
  const DATA = window.LEGE_DATA;

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–57: verificare 11.08.2026";
  DATA.modules.push({
    id: 5,
    title: "Organizarea unităților de învățământ · partea a II-a",
    articles: "45–57",
    chapter: "Capitolul IV",
    startArticle: 45,
    endArticle: 57
  });

  DATA.lessons.push(
    {
      article: 45,
      title: "Învățământul de artă și învățământul sportiv",
      duration: "2 min",
      focus: "artă · sport · elevi cu aptitudini",
      narration: `Articolul 45 deschide secțiunea dedicată învățământului de artă și învățământului sportiv și stabilește regula sa de bază.

Aceste două forme de învățământ se organizează pentru elevii care au aptitudini în domeniul artei sau al sportului. Așadar, legea nu le definește ca trasee generale pentru toți elevii, ci ca forme de educație adaptate unor aptitudini specifice.

Articolul este foarte scurt, dar trebuie legat de articolele următoare, care explică modul de școlarizare, testarea aptitudinilor, planurile-cadru, organizarea activităților de performanță și rolul Federației Sportului Școlar și Universitar.

Formula de memorare este: artă și sport — organizate pentru elevii cu aptitudini în aceste domenii.`,
      remember: [
        "Articolul se referă la învățământul de artă și la învățământul sportiv.",
        "Aceste forme se organizează pentru elevii cu aptitudini specifice.",
        "Regulile detaliate sunt dezvoltate la art. 46 și 47."
      ],
      questions: [
        {
          prompt: "Pentru cine se organizează învățământul de artă și învățământul sportiv?",
          options: ["Pentru toți elevii, fără nicio condiție", "Pentru elevii cu aptitudini în aceste domenii", "Numai pentru elevii majori", "Exclusiv pentru absolvenții de liceu"],
          correct: 1,
          explanation: "Art. 45 stabilește că aceste forme se organizează pentru elevii cu aptitudini în artă sau sport."
        },
        {
          prompt: "Ce două domenii sunt reglementate împreună la art. 45?",
          options: ["Teologic și pedagogic", "Artă și sport", "Militar și postliceal", "Primar și gimnazial"],
          correct: 1,
          explanation: "Secțiunea și articolul privesc învățământul de artă și învățământul sportiv."
        },
        {
          prompt: "Care este criteriul esențial evidențiat de art. 45?",
          options: ["Domiciliul elevului", "Venitul familiei", "Aptitudinile elevului", "Vârsta de minimum 18 ani"],
          correct: 2,
          explanation: "Elementul central este existența aptitudinilor în domeniul artei sau al sportului."
        }
      ],
      legalText: `Art. 45 — Învățământul de artă și învățământul sportiv se organizează pentru elevii cu aptitudini în aceste domenii.`
    },
    {
      article: 46,
      title: "Organizarea învățământului de artă și sportiv",
      duration: "7 min",
      focus: "primar · testarea aptitudinilor · programe adaptate · performanță · sport curat",
      narration: `Articolul 46 explică modul în care se organizează învățământul de artă și învățământul sportiv.

Școlarizarea începe, de regulă, din învățământul primar, iar elevii pot fi înscriși numai pe baza testării aptitudinilor specifice. Planurile-cadru sunt adaptate specificului acestor forme de învățământ. Disciplinele de specialitate se pot studia pe clase, pe grupe sau individual, potrivit criteriilor stabilite prin ordin al ministrului educației. La nivel liceal, programele școlare trebuie să respecte obiectivele educaționale ale profilului de artă sau sportiv.

Pentru activitatea artistică și sportivă de performanță se pot organiza clase sau unități de stat cu program sportiv ori de artă, integrat și/sau suplimentar. Organizarea se poate face la propunerea autorităților locale, a structurilor județene competente și a instituțiilor ori organizațiilor de profil, împreună cu Ministerul Educației.

Învățământul integrat de artă și sportiv funcționează în unități cu program de profil sau în clase de artă și sport organizate în alte unități de învățământ primar, gimnazial și liceal. Regulamentele de organizare se aprobă prin ordin al ministrului educației.

Pentru activitățile artistice, unitățile gimnaziale și liceale trebuie să beneficieze de săli proprii de repetiție și spectacol ori de acces, cu acordul conducerii, la sălile altor unități de același nivel. Unitățile de artă și sport colaborează cu unitățile de educație extrașcolară de profil.

Ministerul Educației poate organiza stagii de pregătire, tabere sportive sau de creație, competiții, campionate, concursuri și festivaluri și poate acorda burse sau alte forme de sprijin material. Activitatea de performanță poate fi sprijinită financiar și material și de ministerele de resort, autoritățile locale, instituțiile de cultură, Comitetul Olimpic și Sportiv Român, federațiile sportive și alți parteneri.

Articolul instituie și două programe naționale. Ministerul Educației împreună cu ministerul responsabil pentru sport realizează Programul național pentru sport în învățământul preuniversitar. Împreună cu Agenția Națională Anti-Doping realizează Programul național pentru sport curat, destinat promovării performanței nealterate de mijloace și metode interzise.

Formula de memorare este: primar, aptitudini, planuri adaptate, pregătire de performanță și două programe naționale — sport în școală și sport curat.`,
      remember: [
        "Școlarizarea începe, de regulă, din primar, iar înscrierea se face numai după testarea aptitudinilor.",
        "Disciplinele de specialitate se pot studia pe clase, pe grupe sau individual.",
        "Există Programul național pentru sport în învățământul preuniversitar și Programul național pentru sport curat."
      ],
      questions: [
        {
          prompt: "De când se realizează, de regulă, școlarizarea în învățământul de artă și sportiv?",
          options: ["Din învățământul primar", "Numai din clasa a IX-a", "După bacalaureat", "Numai din învățământul postliceal"],
          correct: 0,
          explanation: "Art. 46 prevede că școlarizarea se realizează, de regulă, începând cu învățământul primar."
        },
        {
          prompt: "În ce condiție pot fi înscriși elevii în aceste forme de învățământ?",
          options: ["Numai pe baza domiciliului", "Numai pe baza testării aptitudinilor specifice", "Fără nicio evaluare", "Doar cu aprobarea primăriei"],
          correct: 1,
          explanation: "Înscrierea este condiționată de testarea aptitudinilor specifice."
        },
        {
          prompt: "Cu ce instituție realizează Ministerul Educației Programul național pentru sport curat?",
          options: ["Cu Ministerul Justiției", "Cu Agenția Națională Anti-Doping", "Cu inspectoratul teritorial de muncă", "Cu autoritatea electorală"],
          correct: 1,
          explanation: "Programul pentru sport curat este realizat împreună cu Agenția Națională Anti-Doping."
        }
      ],
      legalText: `Art. 46 — (1) Școlarizarea în învățământul de artă și sportiv începe, de regulă, din primar; înscrierea se face numai după testarea aptitudinilor, planurile-cadru sunt adaptate, iar specialitatea se studiază pe clase, grupe sau individual.

(2)-(5) Pentru performanță se pot organiza clase sau unități cu program integrat și/sau suplimentar; organizarea se stabilește prin regulamente ministeriale, iar unitățile colaborează cu structurile extrașcolare de profil și beneficiază de spații adecvate.

(6)-(8) Ministerul și partenerii instituționali pot organiza stagii, tabere, competiții, concursuri și festivaluri, pot acorda burse și pot asigura sprijin financiar și material.

(9) Ministerul Educației împreună cu ministerul responsabil pentru sport realizează Programul național pentru sport în învățământul preuniversitar.

(10) Ministerul Educației împreună cu Agenția Națională Anti-Doping realizează Programul național pentru sport curat.`
    },
    {
      article: 47,
      title: "Federația Sportului Școlar și Universitar",
      duration: "6 min",
      focus: "instituție publică · personalitate juridică · sport școlar · coordonare · reprezentare",
      narration: `Articolul 47 reglementează Federația Sportului Școlar și Universitar, prescurtat FSSU.

Federația funcționează în subordinea Ministerului Educației pentru activitățile sportive din învățământul preuniversitar și universitar. Este instituție publică, are personalitate juridică și este finanțată de la bugetul de stat.

Scopul său este să asigure cadrul necesar dezvoltării continue, organizării și funcționării performante a sportului școlar și universitar, la nivelul structurilor și infrastructurii sale.

Pe componenta sportului școlar, federația promovează rolul educativ al sportului și contribuția acestuia la sănătatea elevilor. Elaborează și susține strategia de organizare și dezvoltare a activității sportive școlare. Coordonează metodologic structurile sportive publice de nivel preuniversitar aflate în subordinea Ministerului Educației și coordonează activitatea asociațiilor sportive școlare.

Federația asigură cadrul organizatoric și coordonează competițiile asociațiilor sportive școlare, în colaborare cu autoritățile locale, federațiile sportive, structurile județene și unitățile de învățământ. Ea are competență exclusivă pentru reprezentarea României la competițiile oficiale organizate sub egida federațiilor internaționale ale sportului școlar și universitar.

FSSU reprezintă interesele Ministerului Educației în relația cu federațiile sportive naționale, Comitetul Olimpic și Sportiv Român și Comitetul Național Paralimpic și colaborează cu aceste organisme pentru dezvoltarea sportului școlar.

Federația beneficiază de fonduri guvernamentale pentru programele sportive școlare și are rol de autoritate finanțatoare pentru proiectele și programele sportive inițiate de unitățile de învățământ pentru activitatea asociațiilor sportive școlare.

Organizarea și funcționarea FSSU se stabilesc prin hotărâre a Guvernului inițiată de Ministerul Educației. Atribuțiile sale pentru învățământul superior sunt stabilite de Legea învățământului superior.

Formula de memorare este: FSSU — instituție publică subordonată ministerului, coordonează sportul școlar, reprezintă România și poate finanța proiecte sportive școlare.`,
      remember: [
        "FSSU este instituție publică, are personalitate juridică și este finanțată de la bugetul de stat.",
        "Coordonează metodologic structurile și asociațiile sportive școlare.",
        "Are competență exclusivă pentru reprezentarea țării la competițiile oficiale internaționale de profil."
      ],
      questions: [
        {
          prompt: "Care este statutul Federației Sportului Școlar și Universitar?",
          options: ["Societate comercială privată", "Instituție publică cu personalitate juridică, finanțată de la bugetul de stat", "Asociație fără legătură cu ministerul", "Structură a unei primării"],
          correct: 1,
          explanation: "FSSU este instituție publică, are personalitate juridică și este finanțată de la bugetul de stat."
        },
        {
          prompt: "Ce activitate coordonează metodologic FSSU pe componenta preuniversitară?",
          options: ["Activitatea structurilor sportive publice aflate în subordinea Ministerului Educației", "Exclusiv activitatea cluburilor private", "Activitatea cultelor religioase", "Evaluarea națională"],
          correct: 0,
          explanation: "Federația coordonează metodologic structurile sportive publice preuniversitare din subordinea ministerului."
        },
        {
          prompt: "Ce competență exclusivă are FSSU?",
          options: ["Aprobarea curriculumului național", "Reprezentarea țării la competițiile oficiale internaționale ale sportului școlar și universitar", "Numirea tuturor directorilor", "Acreditarea liceelor sportive"],
          correct: 1,
          explanation: "Federația reprezintă exclusiv țara la competițiile oficiale organizate sub egida federațiilor internaționale de profil."
        }
      ],
      legalText: `Art. 47 — (1)-(2) FSSU funcționează în subordinea Ministerului Educației ca instituție publică cu personalitate juridică, finanțată de la bugetul de stat, și asigură dezvoltarea și organizarea sportului școlar și universitar.

(3) Pe componenta școlară promovează rolul educativ al sportului, elaborează strategia, coordonează metodologic structurile și asociațiile sportive școlare, organizează competiții, reprezintă țara la competițiile oficiale internaționale, colaborează cu organismele sportive și poate finanța proiecte școlare.

(4) Organizarea și funcționarea federației se adoptă prin hotărâre a Guvernului inițiată de Ministerul Educației.

(5) Atribuțiile privind învățământul superior sunt cele prevăzute de Legea nr. 199/2023.`
    },
    {
      article: 48,
      title: "Învățământul liceal vocațional teologic",
      duration: "4 min",
      focus: "sistem național · structură · cifră de școlarizare · curriculum · colaborarea cu cultele",
      narration: `Articolul 48 stabilește cadrul general al învățământului liceal vocațional teologic.

Acesta este parte integrantă a sistemului național de învățământ. Structura sa organizatorică, profilurile, specializările sau calificările profesionale, cifrele anuale de școlarizare și criteriile de selecționare a candidaților se aprobă conform Legii învățământului preuniversitar.

Planurile-cadru și programele școlare pentru învățământul liceal vocațional teologic sunt elaborate de Ministerul Educației în colaborare cu cultele religioase și sunt aprobate prin ordin al ministrului educației.

Pentru disciplinele de specialitate, inițiativa elaborării programelor aparține cultelor religioase, în colaborare cu Ministerul Educației. Și aceste programe sunt aprobate prin ordin al ministrului educației.

Este importantă diferența: pentru ansamblul planurilor-cadru și programelor, Ministerul Educației elaborează în colaborare cu cultele; pentru disciplinele de specialitate, cultele elaborează în colaborare cu ministerul. Actul final de aprobare este, în ambele situații, ordinul ministrului educației.

Formula de memorare este: parte a sistemului național, curriculum realizat prin colaborarea minister–culte și aprobat prin ordin ministerial.`,
      remember: [
        "Învățământul liceal vocațional teologic este parte integrantă a sistemului național.",
        "Planurile-cadru și programele se elaborează de minister în colaborare cu cultele.",
        "Programele disciplinelor de specialitate se elaborează de culte în colaborare cu ministerul."
      ],
      questions: [
        {
          prompt: "Ce statut are învățământul liceal vocațional teologic?",
          options: ["Este în afara sistemului național", "Este parte integrantă a sistemului național de învățământ", "Este exclusiv universitar", "Este numai o activitate extrașcolară"],
          correct: 1,
          explanation: "Art. 48 îl definește ca parte integrantă a sistemului național de învățământ."
        },
        {
          prompt: "Cine elaborează planurile-cadru și programele școlare generale pentru profilul teologic?",
          options: ["Numai autoritatea locală", "Ministerul Educației, în colaborare cu cultele religioase", "Numai consiliul elevilor", "Exclusiv fiecare profesor"],
          correct: 1,
          explanation: "Ministerul Educației le elaborează în colaborare cu cultele religioase."
        },
        {
          prompt: "Prin ce act se aprobă programele disciplinelor de specialitate?",
          options: ["Prin hotărârea consiliului local", "Prin ordin al ministrului educației", "Prin decizia dirigintelui", "Prin contractul educațional"],
          correct: 1,
          explanation: "Programele de specialitate se aprobă prin ordin al ministrului educației."
        }
      ],
      legalText: `Art. 48 — (1) Învățământul liceal vocațional teologic este parte integrantă a sistemului național.

(2) Structura, profilurile, specializările/calificările, cifrele anuale de școlarizare și criteriile de selecție se aprobă potrivit legii.

(3) Planurile-cadru și programele școlare sunt elaborate de Ministerul Educației în colaborare cu cultele și aprobate prin ordin al ministrului.

(4) Programele disciplinelor de specialitate sunt elaborate de culte în colaborare cu ministerul și aprobate prin ordin al ministrului.`
    },
    {
      article: 49,
      title: "Admiterea la profilul teologic",
      duration: "2 min",
      focus: "înscriere · testarea aptitudinilor specifice",
      narration: `Articolul 49 cuprinde o singură regulă privind admiterea în învățământul liceal vocațional teologic preuniversitar.

Elevii pot fi înscriși numai pe baza testării aptitudinilor specifice. Prin urmare, înscrierea nu este automată și nu se întemeiază exclusiv pe opțiunea elevului sau pe media generală. Este necesară verificarea aptitudinilor cerute de profilul vocațional teologic.

Articolul trebuie corelat cu art. 48, care reglementează criteriile de selecție și colaborarea dintre Ministerul Educației și cultele religioase, și cu regulamentul specific aprobat prin ordin al ministrului.

Formula de memorare este foarte scurtă: profil teologic egal înscriere numai după testarea aptitudinilor specifice.`,
      remember: [
        "Regula privește învățământul liceal vocațional teologic preuniversitar.",
        "Înscrierea este condiționată de testarea aptitudinilor specifice.",
        "Simpla opțiune pentru profil nu este suficientă."
      ],
      questions: [
        {
          prompt: "Cum pot fi înscriși elevii la profilul liceal vocațional teologic?",
          options: ["Fără nicio probă", "Numai pe baza testării aptitudinilor specifice", "Numai pe baza domiciliului", "Prin tragere la sorți"],
          correct: 1,
          explanation: "Art. 49 condiționează înscrierea de testarea aptitudinilor specifice."
        },
        {
          prompt: "Este suficientă simpla opțiune a elevului pentru profilul teologic?",
          options: ["Da, întotdeauna", "Nu, este necesară testarea aptitudinilor", "Da, dacă este major", "Da, dacă schimbă localitatea"],
          correct: 1,
          explanation: "Opțiunea trebuie însoțită de promovarea testării aptitudinilor specifice."
        },
        {
          prompt: "Ce tip de aptitudini sunt testate potrivit art. 49?",
          options: ["Aptitudini specifice profilului", "Numai aptitudini sportive", "Exclusiv competențe digitale", "Numai aptitudini administrative"],
          correct: 0,
          explanation: "Legea folosește expresia «aptitudini specifice» profilului vocațional teologic."
        }
      ],
      legalText: `Art. 49 — În învățământul liceal vocațional teologic preuniversitar, elevii pot fi înscriși numai pe baza testării aptitudinilor specifice.`
    },
    {
      article: 50,
      title: "Personalul didactic din unitățile teologice",
      duration: "2 min",
      focus: "personal didactic · art. 164 · avizul consiliului de administrație",
      narration: `Articolul 50 reglementează constituirea personalului didactic din unitățile de învățământ liceal vocațional teologic.

Personalul didactic al acestor unități se constituie din categoriile de personal didactic prevăzute la articolul 164 al legii. Textul face astfel legătura dintre organizarea profilului teologic și regulile generale privind funcțiile didactice din învățământul preuniversitar.

Personalul este avizat de consiliul de administrație al unității de învățământ. Pentru memorare, rețineți instituția indicată expres în acest articol: consiliul de administrație al unității.

Articolul nu enumeră aici funcțiile didactice, ci trimite la art. 164. La concurs, este important să recunoașteți atât trimiterea, cât și autoritatea care acordă avizul.

Formula scurtă este: personal conform art. 164, avizat de consiliul de administrație al unității.`,
      remember: [
        "Personalul didactic este cel prevăzut la art. 164.",
        "Avizul este acordat de consiliul de administrație al unității de învățământ.",
        "Art. 50 face trimitere la regulile generale privind funcțiile didactice."
      ],
      questions: [
        {
          prompt: "La ce articol trimite art. 50 pentru categoriile de personal didactic?",
          options: ["Art. 45", "Art. 83", "Art. 164", "Art. 251"],
          correct: 2,
          explanation: "Textul indică personalul didactic prevăzut la art. 164."
        },
        {
          prompt: "Cine avizează personalul didactic din unitățile liceale vocaționale teologice?",
          options: ["Consiliul de administrație al unității", "Consiliul elevilor", "Primarul", "Comisia de bacalaureat"],
          correct: 0,
          explanation: "Art. 50 indică expres consiliul de administrație al unității de învățământ."
        },
        {
          prompt: "Articolul 50 enumeră integral funcțiile didactice?",
          options: ["Da, enumeră toate funcțiile", "Nu, face trimitere la art. 164", "Da, dar numai funcțiile de conducere", "Nu, face trimitere la Codul civil"],
          correct: 1,
          explanation: "Funcțiile nu sunt reluate; articolul trimite la art. 164."
        }
      ],
      legalText: `Art. 50 — Personalul didactic din unitățile de învățământ preuniversitar liceal vocațional teologic se constituie din personalul didactic prevăzut la art. 164, avizat de consiliul de administrație al unității de învățământ.`
    },
    {
      article: 51,
      title: "Regulamentul profilului teologic",
      duration: "2 min",
      focus: "organizare · funcționare · ordin al ministrului educației",
      narration: `Articolul 51 încheie secțiunea dedicată învățământului liceal vocațional teologic.

Organizarea și funcționarea acestei forme de învățământ se aprobă prin ordin al ministrului educației. Așadar, cadrul detaliat nu este lăsat exclusiv fiecărei unități și nici nu se aprobă prin hotărâre a autorității locale.

Ordinul ministerial dezvoltă regulile stabilite de lege privind admiterea, curriculumul, personalul și funcționarea unităților cu profil teologic.

Pentru concurs, formula exactă este importantă: organizarea și funcționarea — aprobate prin ordin al ministrului educației.`,
      remember: [
        "Articolul privește organizarea și funcționarea profilului teologic.",
        "Actul de aprobare este ordinul ministrului educației.",
        "Regulile detaliate se stabilesc la nivel ministerial."
      ],
      questions: [
        {
          prompt: "Ce anume se aprobă potrivit art. 51?",
          options: ["Numai calendarul vacanțelor", "Organizarea și funcționarea învățământului liceal vocațional teologic", "Exclusiv bugetul local", "Numai uniforma elevilor"],
          correct: 1,
          explanation: "Art. 51 privește organizarea și funcționarea acestei forme de învățământ."
        },
        {
          prompt: "Prin ce act se aprobă organizarea și funcționarea profilului teologic?",
          options: ["Hotărâre a consiliului elevilor", "Ordin al ministrului educației", "Decizie a dirigintelui", "Contract individual"],
          correct: 1,
          explanation: "Actul prevăzut de lege este ordinul ministrului educației."
        },
        {
          prompt: "Poate fiecare unitate să stabilească singură întregul cadru de funcționare?",
          options: ["Da, fără nicio regulă națională", "Nu, organizarea și funcționarea sunt aprobate la nivel ministerial", "Da, dacă are profil teologic", "Numai în anii pari"],
          correct: 1,
          explanation: "Cadrul este aprobat prin ordin al ministrului educației."
        }
      ],
      legalText: `Art. 51 — Organizarea și funcționarea învățământului liceal vocațional teologic se aprobă prin ordin al ministrului educației.`
    },
    {
      article: 52,
      title: "Învățământul liceal vocațional pedagogic",
      duration: "7 min",
      focus: "4 ani · specializări · aptitudini · unități de aplicație · practică pedagogică",
      narration: `Articolul 52 reglementează învățământul liceal vocațional pedagogic.

Învățământul pedagogic se organizează ca învățământ liceal vocațional, are durata de patru ani și se adresează elevilor cu aptitudini în acest domeniu.

Unitățile care organizează profil pedagogic trebuie să aibă capacitatea de a realiza atât procesul de predare–învățare–evaluare, cât și practica pedagogică. Legea indică cinci specializări ale filierei vocaționale: educație timpurie, pedagogia învățământului primar, pedagogie generală, pedagogia educației nonformale și mediere școlară.

Organizarea învățământului pedagogic se face prin regulament-cadru aprobat prin ordin al ministrului educației. Elevii pot fi înscriși numai pe baza testării aptitudinilor specifice, iar structura și conținutul probelor sunt stabilite prin acest regulament-cadru.

Unitățile de învățământ cu statut de unități de aplicație sunt cele definite potrivit articolului 24 alineatul 3 și se organizează conform metodologiei aprobate prin ordin al ministrului educației.

Liceele cu profil pedagogic oferă sprijin metodologic unităților de aplicație pentru organizarea practicii pedagogice. Practica poate fi realizată pentru elevii liceelor pedagogice, pentru studenții înscriși în programe universitare de formare pentru cariera didactică, inclusiv masteratul didactic, sau pentru participanții la alte programe relevante pentru educație.

În plus, unitățile liceale cu profil pedagogic organizează programe de formare psihopedagogică și examene pentru evoluția în cariera didactică a maiștrilor-instructori și a antrenorilor.

Formula de memorare este: patru ani, cinci specializări, admitere prin aptitudini, practică în unități de aplicație și sprijin metodologic din partea liceului pedagogic.`,
      remember: [
        "Învățământul pedagogic este liceal vocațional și are durata de 4 ani.",
        "Sunt indicate cinci specializări: educație timpurie, pedagogia primarului, pedagogie generală, pedagogia educației nonformale și mediere școlară.",
        "Admiterea se face numai pe baza testării aptitudinilor specifice."
      ],
      questions: [
        {
          prompt: "Care este durata învățământului liceal vocațional pedagogic?",
          options: ["2 ani", "3 ani", "4 ani", "5 ani"],
          correct: 2,
          explanation: "Art. 52 stabilește durata de 4 ani."
        },
        {
          prompt: "Care dintre următoarele este o specializare indicată expres la art. 52?",
          options: ["Mediere școlară", "Inginerie aerospațială", "Medicină veterinară", "Administrație fiscală"],
          correct: 0,
          explanation: "Medierea școlară este una dintre cele cinci specializări enumerate."
        },
        {
          prompt: "Cum sunt înscriși elevii în învățământul pedagogic?",
          options: ["Fără nicio probă", "Numai pe baza testării aptitudinilor specifice", "Exclusiv pe baza domiciliului", "Prin decizia autorității locale"],
          correct: 1,
          explanation: "Înscrierea este condiționată de testarea aptitudinilor specifice."
        }
      ],
      legalText: `Art. 52 — (1) Învățământul pedagogic este liceal vocațional, are durata de 4 ani și se adresează elevilor cu aptitudini.

(2) Unitățile trebuie să poată organiza predarea–învățarea–evaluarea și practica pentru specializările: educație timpurie, pedagogia învățământului primar, pedagogie generală, pedagogia educației nonformale și mediere școlară.

(3)-(4) Organizarea se face prin regulament-cadru aprobat prin ordin ministerial, iar admiterea se realizează numai prin testarea aptitudinilor.

(5) Unitățile de aplicație se organizează potrivit metodologiei ministeriale.

(6) Liceele pedagogice oferă sprijin metodologic unităților de aplicație pentru practica elevilor și studenților.

(7) Aceste licee organizează formarea psihopedagogică și examenele de evoluție în carieră pentru maiștri-instructori și antrenori.`
    },
    {
      article: 53,
      title: "Școlarizarea persoanelor private de libertate",
      duration: "3 min",
      focus: "penitenciare · centre educative · centre de detenție · ordin comun · protocoale",
      narration: `Articolul 53 deschide secțiunea privind învățământul din penitenciare, centre educative și centre de detenție.

Școlarizarea persoanelor private de libertate aflate în aceste instituții se organizează și se desfășoară în condițiile Legii învățământului preuniversitar. Dreptul la educație este astfel asigurat și în perioada privării de libertate.

Activitățile de instruire școlară se desfășoară în baza unui ordin comun al ministrului educației și al ministrului justiției. Ordinul stabilește cadrul de colaborare dintre cele două ministere și dintre instituțiile aflate în subordinea sau coordonarea acestora.

În completare, Ministerul Educației și Ministerul Justiției, prin Administrația Națională a Penitenciarelor, încheie protocoale de colaborare.

Rețineți cele două niveluri ale cooperării: ordin comun pentru cadrul general și protocoale de colaborare pentru relația instituțională concretă.

Formula de memorare este: educație în detenție, ordin comun Educație–Justiție și protocoale cu Administrația Națională a Penitenciarelor.`,
      remember: [
        "Școlarizarea se asigură în penitenciare, centre educative și centre de detenție.",
        "Cadrul de colaborare se stabilește prin ordin comun al miniștrilor educației și justiției.",
        "Ministerele încheie și protocoale de colaborare prin structurile competente."
      ],
      questions: [
        {
          prompt: "Unde se aplică regulile art. 53?",
          options: ["Numai în universități", "În penitenciare, centre educative și centre de detenție", "Exclusiv în cluburi sportive", "Numai în școli particulare"],
          correct: 1,
          explanation: "Articolul privește școlarizarea persoanelor private de libertate din aceste trei categorii de instituții."
        },
        {
          prompt: "Prin ce act se stabilește cadrul de colaborare pentru instruirea școlară?",
          options: ["Ordin comun al ministrului educației și al ministrului justiției", "Decizie a primarului", "Hotărâre a consiliului elevilor", "Contract individual de muncă"],
          correct: 0,
          explanation: "Legea prevede un ordin comun al celor doi miniștri."
        },
        {
          prompt: "Cu ce structură a Ministerului Justiției încheie Ministerul Educației protocoale de colaborare?",
          options: ["Administrația Națională a Penitenciarelor", "Agenția Națională Anti-Doping", "Autoritatea Electorală Permanentă", "Casa Națională de Pensii"],
          correct: 0,
          explanation: "Protocoalele sunt încheiate cu Ministerul Justiției prin Administrația Națională a Penitenciarelor."
        }
      ],
      legalText: `Art. 53 — Școlarizarea persoanelor private de libertate din penitenciare, centre educative și centre de detenție se organizează potrivit legii. Activitățile de instruire se desfășoară în baza unui ordin comun al ministrului educației și al ministrului justiției, care stabilește cadrul de colaborare. Ministerul Educației și Ministerul Justiției–Administrația Națională a Penitenciarelor încheie protocoale de colaborare.`
    },
    {
      article: 54,
      title: "Cursurile și curriculumul în sistemul penitenciar",
      duration: "3 min",
      focus: "învățământ obligatoriu · alte programe · curriculum național · masă și special",
      narration: `Articolul 54 stabilește ce forme de școlarizare se organizează în sistemul penitenciar și în ce cadru curricular.

În sistemul penitenciar se organizează cursuri pentru formele de învățământ obligatoriu. În plus, pot fi organizate și cursuri pentru alte programe educaționale prevăzute de lege. Diferența de formulare este importantă: pentru învățământul obligatoriu legea spune că se organizează, iar pentru celelalte programe spune că pot fi organizate.

Școlarizarea îi privește pe adulți, minori și tineri aflați în penitenciare, centre educative și centre de detenție. Ea se realizează cu respectarea curriculumului național.

Activitatea se poate desfășura în unități de învățământ de masă sau special, ori în clase de învățământ special afiliate unităților din sistemul național de învățământ special care funcționează în locurile de detenție.

Formula de memorare este: obligatoriu se organizează, alte programe se pot organiza, iar toate respectă curriculumul național.`,
      remember: [
        "Cursurile pentru învățământul obligatoriu se organizează în sistemul penitenciar.",
        "Pot fi organizate și alte programe educaționale prevăzute de lege.",
        "Școlarizarea adulților, minorilor și tinerilor respectă curriculumul național."
      ],
      questions: [
        {
          prompt: "Ce cursuri trebuie organizate în sistemul penitenciar?",
          options: ["Cursuri pentru formele de învățământ obligatoriu", "Numai cursuri universitare", "Exclusiv cursuri sportive", "Numai activități recreative"],
          correct: 0,
          explanation: "Art. 54 prevede organizarea cursurilor pentru formele de învățământ obligatoriu."
        },
        {
          prompt: "Ce curriculum se respectă la școlarizarea persoanelor aflate în detenție?",
          options: ["Un curriculum stabilit individual de penitenciar", "Curriculumul național", "Numai curriculumul universitar", "Niciun curriculum"],
          correct: 1,
          explanation: "Școlarizarea se realizează cu respectarea curriculumului național."
        },
        {
          prompt: "Pe cine vizează școlarizarea menționată la alin. (2)?",
          options: ["Numai minorii", "Adulții, minorii și tinerii", "Numai personalul penitenciarului", "Exclusiv absolvenții de liceu"],
          correct: 1,
          explanation: "Textul enumeră adulții, minorii și tinerii din locurile de detenție."
        }
      ],
      legalText: `Art. 54 — (1) În sistemul penitenciar se organizează cursuri pentru formele de învățământ obligatoriu și pot fi organizate cursuri pentru alte programe educaționale prevăzute de lege.

(2) Școlarizarea adulților, minorilor și tinerilor se face cu respectarea curriculumului național, în unități de masă/speciale sau în clase speciale afiliate unităților sistemului național de învățământ special care funcționează în locurile de detenție.`
    },
    {
      article: 55,
      title: "Unitățile, personalul și documentele școlare în detenție",
      duration: "5 min",
      focus: "desemnarea unităților · repartizarea profesorilor · salarizare · documente fără mențiuni · inserție",
      narration: `Articolul 55 stabilește responsabilitățile instituționale pentru școlarizarea persoanelor aflate în detenție.

Direcția județeană de învățământ preuniversitar sau structura municipiului București desemnează unitățile de învățământ care asigură școlarizarea. Desemnarea se face la solicitarea penitenciarelor, centrelor educative și centrelor de detenție.

Procesul instructiv-educativ este realizat de personal didactic repartizat de structura județeană competentă. Personalul este salarizat de unitatea de învățământ preuniversitar la care sunt arondate formațiunile de studiu constituite în locurile de detenție.

O regulă esențială privește documentele școlare: în conținutul lor nu se fac mențiuni despre faptul că studiile au fost absolvite în perioada executării unei pedepse privative de libertate sau a unei măsuri educative. Această regulă protejează șansele de integrare ulterioară ale persoanei.

Ministerul Educației, în colaborare cu ministerul responsabil pentru muncă, Ministerul Justiției și alte autorități, elaborează cadrul normativ pentru inserția pe piața muncii a persoanelor școlarizate în detenție.

Formula de memorare este: direcția desemnează și repartizează, unitatea arondată salarizează, documentele nu menționează detenția, ministerele pregătesc inserția profesională.`,
      remember: [
        "DJIP/DMBIP desemnează unitățile care asigură școlarizarea, la solicitarea locurilor de detenție.",
        "Cadrele didactice sunt repartizate de structura județeană și salarizate de unitatea la care sunt arondate clasele.",
        "Documentele școlare nu menționează absolvirea cursurilor în perioada detenției."
      ],
      questions: [
        {
          prompt: "Cine desemnează unitățile de învățământ care școlarizează persoanele aflate în detenție?",
          options: ["DJIP/DMBIP", "Consiliul elevilor", "Agenția Anti-Doping", "Fiecare profesor"],
          correct: 0,
          explanation: "Desemnarea revine DJIP/DMBIP, la solicitarea instituțiilor de detenție."
        },
        {
          prompt: "Cine salarizează personalul didactic repartizat pentru aceste formațiuni de studiu?",
          options: ["Unitatea de învățământ la care sunt arondate formațiunile", "Elevii", "Exclusiv consiliul local", "Federația Sportului Școlar"],
          correct: 0,
          explanation: "Salarizarea este realizată de unitatea de învățământ preuniversitar la care sunt arondate formațiunile."
        },
        {
          prompt: "Ce mențiune este interzisă în documentele școlare?",
          options: ["Nivelul absolvit", "Absolvirea cursurilor în perioada executării pedepsei sau măsurii educative", "Numele unității", "Rezultatele școlare"],
          correct: 1,
          explanation: "Documentele nu trebuie să indice că studiile au fost absolvite în perioada detenției."
        }
      ],
      legalText: `Art. 55 — (1) DJIP/DMBIP desemnează unitățile care asigură școlarizarea persoanelor aflate în detenție, la solicitarea instituțiilor respective.

(2) Personalul didactic este repartizat de DJIP/DMBIP și salarizat de unitatea la care sunt arondate formațiunile de studiu.

(3) Documentele școlare nu menționează absolvirea cursurilor în perioada executării pedepsei privative de libertate sau a măsurii educative.

(4) Ministerele și autoritățile competente elaborează cadrul normativ pentru inserția pe piața muncii.`
    },
    {
      article: 56,
      title: "Efectivele claselor din locurile de detenție",
      duration: "3 min",
      focus: "8–12 elevi · grupe de 4–6 · aprobare · maximum 20",
      narration: `Articolul 56 stabilește efective speciale pentru formațiunile de studiu organizate cu persoane private de libertate.

Regula este că o formațiune de studiu sau o clasă poate fi alcătuită din 8 până la 12 elevi.

În situații temeinic justificate, cu aprobarea direcției județene de învățământ preuniversitar sau a structurii municipiului București, clasele pot fi constituite și din grupe de 4 până la 6 elevi.

Tot în situații justificate, efectivul poate fi majorat peste numărul maxim obișnuit, în funcție de posibilitățile logistice ale locului de detenție. Chiar și în această situație, limita absolută este de 20 de elevi.

Pentru memorare, rețineți cele trei intervale: 8–12 este regula; 4–6 este grupa redusă aprobată; 20 este plafonul maxim în cazul majorării.

Formula numerică este: 8–12, excepțional 4–6, niciodată peste 20.`,
      remember: [
        "Efectivul obișnuit este de 8–12 elevi.",
        "În situații justificate și cu aprobare, se pot constitui grupe de 4–6 elevi.",
        "Efectivul majorat nu poate depăși 20 de elevi."
      ],
      questions: [
        {
          prompt: "Care este efectivul obișnuit al unei clase organizate cu persoane private de libertate?",
          options: ["2–4 elevi", "4–6 elevi", "8–12 elevi", "15–25 elevi"],
          correct: 2,
          explanation: "Regula stabilită de art. 56 este 8–12 elevi."
        },
        {
          prompt: "Ce efectiv poate avea o grupă redusă, în situații temeinic justificate?",
          options: ["1–3 elevi", "4–6 elevi", "8–12 elevi", "21–25 elevi"],
          correct: 1,
          explanation: "Cu aprobarea competentă, pot fi constituite grupe de 4–6 elevi."
        },
        {
          prompt: "Care este limita maximă absolută în cazul majorării efectivului?",
          options: ["12 elevi", "15 elevi", "20 de elevi", "30 de elevi"],
          correct: 2,
          explanation: "Efectivul majorat nu poate depăși 20 de elevi."
        }
      ],
      legalText: `Art. 56 — (1) Formațiunile de studiu organizate cu persoane private de libertate pot avea 8–12 elevi.

(2) În situații temeinic justificate, cu aprobarea DJIP/DMBIP, se pot constitui grupe de 4–6 elevi sau se poate majora efectivul în funcție de posibilitățile logistice, fără a depăși 20 de elevi.`
    },
    {
      article: 57,
      title: "Formarea profesorilor care lucrează în detenție",
      duration: "2 min",
      focus: "Ministerul Justiției · ANP · Ministerul Educației · competențe profesionale",
      narration: `Articolul 57 încheie secțiunea dedicată școlarizării persoanelor private de libertate.

Ministerul Justiției, prin Administrația Națională a Penitenciarelor, și Ministerul Educației colaborează pentru dezvoltarea competențelor profesionale necesare personalului didactic care asigură instruirea școlară a persoanelor aflate în detenție.

Colaborarea nu privește numai organizarea claselor, ci și pregătirea profesorilor pentru specificul activității educaționale din locurile de detenție. Personalul didactic are nevoie de competențe adaptate acestui context, iar responsabilitatea dezvoltării lor este împărțită între cele două sisteme instituționale.

Formula de memorare este: Justiție prin ANP plus Educație egal dezvoltarea competențelor profesorilor care lucrează în detenție.`,
      remember: [
        "Colaborează Ministerul Justiției–ANP și Ministerul Educației.",
        "Scopul este dezvoltarea competențelor profesionale ale personalului didactic.",
        "Sunt vizați profesorii care asigură instruirea persoanelor aflate în detenție."
      ],
      questions: [
        {
          prompt: "Ce instituții colaborează potrivit art. 57?",
          options: ["Ministerul Justiției–ANP și Ministerul Educației", "Numai autoritățile locale", "Ministerul Culturii și cultele", "FSSU și Agenția Anti-Doping"],
          correct: 0,
          explanation: "Colaborarea este între Ministerul Justiției–Administrația Națională a Penitenciarelor și Ministerul Educației."
        },
        {
          prompt: "Care este scopul colaborării?",
          options: ["Dezvoltarea competențelor profesionale ale personalului didactic", "Organizarea alegerilor", "Stabilirea taxelor locale", "Aprobarea planurilor sportive"],
          correct: 0,
          explanation: "Scopul este dezvoltarea competențelor necesare profesorilor care lucrează în detenție."
        },
        {
          prompt: "Ce personal este vizat de art. 57?",
          options: ["Personalul didactic care instruiește persoane aflate în detenție", "Numai personalul medical", "Exclusiv personalul universitar", "Numai antrenorii sportivi"],
          correct: 0,
          explanation: "Textul vizează personalul didactic care asigură instruirea școlară în detenție."
        }
      ],
      legalText: `Art. 57 — Ministerul Justiției–Administrația Națională a Penitenciarelor și Ministerul Educației colaborează pentru dezvoltarea competențelor profesionale necesare personalului didactic care asigură instruirea școlară a persoanelor aflate în detenție.`
    }
  );
})();
