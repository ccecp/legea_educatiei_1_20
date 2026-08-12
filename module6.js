"use strict";

(() => {
  const DATA = window.LEGE_DATA;

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026";
  DATA.modules.push({
    id: 6,
    title: "Organizarea unităților de învățământ · partea a III-a",
    articles: "58–66",
    chapter: "Capitolul IV",
    startArticle: 58,
    endArticle: 66
  });

  DATA.lessons.push(
    {
      article: 58,
      title: "Învățământul postliceal",
      duration: "7 min",
      focus: "calificări · organizare · finanțare · admitere · certificare · nivel 5",
      narration: `Articolul 58 reglementează învățământul postliceal. Acesta se organizează pentru calificări profesionale înscrise în Registrul național al calificărilor, stabilite de Ministerul Educației și aprobate prin hotărâre a Guvernului.

Învățământul postliceal este finanțat de la bugetul de stat pentru cifra de școlarizare aprobată de Guvern, iar învățământul postliceal special este integral subvenționat de stat. El poate funcționa în școli postliceale cu personalitate juridică, drept structură fără personalitate juridică în cadrul unui liceu sau în colegii terțiare nonuniversitare din instituțiile de învățământ superior. Școlile de maiștri sunt școli postliceale. Pentru sistemul de apărare, ordine publică și securitate națională există reguli specifice aprobate de ministerul de resort.

Durata studiilor este cuprinsă între unu și trei ani, în funcție de complexitatea calificării și de numărul creditelor ECTS pentru învățarea pe tot parcursul vieții. Regulile învățământului liceal tehnologic dual se aplică în mod corespunzător și învățământului postliceal dual.

Unitățile autorizate sau acreditate pot școlariza și pe locuri cu taxă, cu aprobarea autorităților publice locale. Taxa finanțează exclusiv activitatea pentru care a fost instituită. Locurile cu taxă pot fi finanțate de persoane fizice sau juridice, prin contract cu unitatea de învățământ.

Cifra de școlarizare finanțată de stat se aprobă prin hotărâre a Guvernului. Pentru locurile finanțate integral de solicitanți, aprobarea se face prin decizii ale structurii județene competente sau prin hotărâri ale senatelor universitare și se comunică Ministerului Educației.

Admiterea se desfășoară după criterii generale stabilite prin ordin al ministrului educației, iar fiecare unitate sau instituție își elaborează metodologia proprie, prin consultarea factorilor interesați. Se pot înscrie absolvenții de liceu cu sau fără diplomă de bacalaureat. Pentru calificările de nivel 5, admiterea poate recunoaște și competențe necertificate dobândite nonformal sau informal.

Studiile se încheie cu examenul de certificare a calificării profesionale. Candidații de la stat, admiși pe locuri bugetate, îl pot susține fără taxă de cel mult două ori. După promovare primesc certificatul de calificare profesională de nivel 5 și suplimentul descriptiv Europass. Pentru absolvenții care au diplomă de bacalaureat, creditele dobândite în postliceal pot fi recunoscute de universități, prin decizia senatului, drept credite transferabile la nivel de licență.

Formula de memorare este: calificare din registru, durată unu–trei ani, acces cu sau fără bacalaureat, certificare de nivel 5 și două prezentări gratuite pentru locurile bugetate.`,
      remember: [
        "Învățământul postliceal durează între 1 și 3 ani.",
        "Se pot înscrie absolvenți de liceu cu sau fără diplomă de bacalaureat.",
        "Certificarea este de nivel 5; candidații bugetați au cel mult două prezentări fără taxă."
      ],
      questions: [
        {
          prompt: "Cine se poate înscrie în învățământul postliceal?",
          options: ["Numai absolvenții cu diplomă de bacalaureat", "Absolvenții de liceu cu sau fără diplomă de bacalaureat", "Numai absolvenții de facultate", "Exclusiv persoanele angajate"],
          correct: 1,
          explanation: "Art. 58 permite înscrierea absolvenților de liceu cu sau fără diplomă de bacalaureat."
        },
        {
          prompt: "Care este durata învățământului postliceal?",
          options: ["Exact 6 luni", "Între 1 și 3 ani", "Exact 4 ani", "Între 5 și 7 ani"],
          correct: 1,
          explanation: "Durata este de 1–3 ani, în funcție de complexitatea calificării și de numărul de credite."
        },
        {
          prompt: "De câte ori poate susține fără taxă examenul de certificare un candidat de la stat admis pe loc bugetat?",
          options: ["O singură dată", "De cel mult două ori", "De trei ori", "Nelimitat"],
          correct: 1,
          explanation: "Candidații bugetați pot susține examenul fără taxă de cel mult două ori."
        }
      ],
      legalText: `Art. 58 — Învățământul postliceal se organizează pentru calificări profesionale înscrise în Registrul național al calificărilor și este finanțat de la bugetul de stat pentru cifra de școlarizare aprobată de Guvern. Învățământul postliceal special este integral subvenționat de stat.

Poate funcționa în școli postliceale, ca structură a liceelor sau în colegii terțiare nonuniversitare. Școlile de maiștri sunt școli postliceale. Durata studiilor este de 1–3 ani.

Admiterea se face după criterii generale aprobate prin ordin ministerial și metodologii proprii. Se pot înscrie absolvenții de liceu cu sau fără diplomă de bacalaureat.

Studiile se încheie cu examen de certificare. Candidații bugetați îl pot susține fără taxă de cel mult două ori. Absolvenții promovați primesc certificat de calificare de nivel 5 și supliment Europass. Creditele absolvenților cu bacalaureat pot fi recunoscute de universități pentru nivelul licență.`
    },
    {
      article: 59,
      title: "Dreptul la învățământ în limba maternă",
      duration: "6 min",
      focus: "minorități naționale · unități și clase · conducere · personal · manuale · afișaj",
      narration: `Articolul 59 garantează persoanelor aparținând minorităților naționale dreptul de a studia și de a se instrui în limba maternă la toate nivelurile, tipurile și formele învățământului preuniversitar, în condițiile legii.

Unitățile cu predare în limbile minorităților pot fi înființate de autoritățile locale sau județene, de cultele recunoscute, de persoane juridice de drept privat ori de ministrul educației, în cazurile prevăzute de lege. În funcție de nevoile locale, la cererea părinților, tutorilor sau reprezentanților legali ori a uneia dintre entitățile îndreptățite, se pot organiza grupe, clase sau unități cu predare în limba maternă.

În unitățile sau secțiile singulare într-o unitate administrativ-teritorială se pot organiza clase de liceu cu grupe de elevi din profiluri sau filiere diferite. Dacă în localitate nu există liceu tehnologic cu predare exclusiv în limba minorității, formațiunile tehnologice pot funcționa și într-un liceu teoretic ori vocațional.

Elevii care nu pot învăța în limba maternă în localitatea de domiciliu beneficiază de sprijin pentru transport sau de cazare și masă gratuite în internatul corespunzător. Sprijinul pentru transport se aplică și între sate ale aceleiași unități administrativ-teritoriale.

În unitățile în care se predă și în limba unei minorități, unul dintre directori trebuie să fie cadru didactic din rândul minorității respective, cu respectarea criteriilor de competență profesională. Personalul care predă integral în limba maternă, precum și consilierii, logopezii și profesorii itineranți care lucrează în aceste unități, trebuie să dovedească competența profesională în limba minorității. Profesorul care predă Limba și literatura română este exceptat de la această obligație.

Ministerul Educației asigură manuale pe hârtie și digitale: elaborate direct în limba minorității, traduse din limba română sau importate și avizate, atunci când numărul utilizatorilor este redus. În spațiile comune, informațiile și afișajele se realizează atât în limba română, cât și în limba minorității.

Formula de memorare este: drept la limba maternă, organizare la cerere, reprezentare în conducere, competență lingvistică și afișaj bilingv.`,
      remember: [
        "Dreptul la studiu în limba maternă există la toate nivelurile, tipurile și formele preuniversitare.",
        "În unitățile cu predare și în limba minorității, unul dintre directori provine din rândul minorității.",
        "Spațiile comune și informațiile sunt inscripționate în română și în limba minorității."
      ],
      questions: [
        {
          prompt: "La ce niveluri se garantează dreptul persoanelor aparținând minorităților de a studia în limba maternă?",
          options: ["Numai la nivel primar", "Numai la gimnaziu și liceu", "La toate nivelurile, tipurile și formele preuniversitare", "Numai în învățământul particular"],
          correct: 2,
          explanation: "Dreptul este garantat la toate nivelurile, tipurile și formele învățământului preuniversitar."
        },
        {
          prompt: "Cine trebuie să fie unul dintre directori într-o unitate cu predare și în limba unei minorități?",
          options: ["Un reprezentant al autorității locale", "Un cadru didactic din rândul minorității respective", "Un elev major", "Un inspector de poliție"],
          correct: 1,
          explanation: "Unul dintre directori este cadru didactic din rândul minorității, cu respectarea competenței profesionale."
        },
        {
          prompt: "În ce limbi se realizează afișajul în spațiile comune ale acestor unități?",
          options: ["Numai în limba română", "Numai în limba minorității", "În limba română și în limba minorității", "Exclusiv într-o limbă internațională"],
          correct: 2,
          explanation: "Legea cere folosirea limbii române și a limbii minorității respective."
        }
      ],
      legalText: `Art. 59 — Persoanele aparținând minorităților naționale au dreptul să studieze și să se instruiască în limba maternă la toate nivelurile, tipurile și formele de învățământ preuniversitar.

La cerere și în funcție de necesitățile locale se pot organiza grupe, clase sau unități cu predare în limbile minorităților. Elevii fără acces în localitatea de domiciliu sunt sprijiniți prin transport sau prin cazare și masă gratuite.

În unitățile cu predare și în limba unei minorități, unul dintre directori este cadru didactic din rândul acelei minorități. Personalul vizat trebuie să dovedească competența profesională în limba maternă, cu excepția profesorului de Limba și literatura română.

Ministerul asigură manualele necesare, iar inscripționarea spațiilor comune și informațiile se realizează în română și în limba minorității.`
    },
    {
      article: 60,
      title: "Predarea și evaluarea în limbile minorităților",
      duration: "6 min",
      focus: "limba maternă · limba română · discipline identitare · examene · reprezentare",
      narration: `Articolul 60 explică modul concret în care se desfășoară predarea și evaluarea în învățământul cu predare în limbile minorităților naționale.

Regula este că toate disciplinele se studiază în limba maternă, cu excepția disciplinei Limba și literatura română. Aceasta se predă pe tot parcursul învățământului preuniversitar după programe și manuale realizate special pentru minoritatea respectivă, cu participarea experților care îi cunosc limba și cultura.

Există și o excepție: la cererea părinților sau reprezentantului legal ori la solicitarea organizației minorității reprezentate în Parlament, predarea Limbii și literaturii române se poate realiza după manualele utilizate în unitățile cu predare în limba română. Pentru minoritățile fără reprezentare parlamentară, solicitarea poate veni de la Grupul parlamentar al minorităților naționale.

Limba și literatura maternă, Istoria și tradițiile minorității și Educația muzicală se predau și se evaluează în limba maternă, după programe și metodologii specifice. Elevilor aparținând minorităților care învață în școli cu predare în limba română sau într-o altă limbă li se asigură, la cerere, studiul acestor trei discipline ca parte a trunchiului comun.

În liceal și postliceal, pentru disciplinele de specialitate predate în limba maternă trebuie însușită terminologia de specialitate și în limba română. Probele de admitere și examenele de absolvire pot fi susținute în limba în care au fost studiate disciplinele respective.

Minoritățile au dreptul la reprezentare proporțională cu numărul de clase în organele de conducere ale unităților și structurilor județene, cu respectarea competenței profesionale. În comunicarea internă și în relația cu părinții poate fi folosită și limba de predare, iar la nivel primar calificativele se comunică oral și în scris și în această limbă.

Istoria și Geografia României se predau în limbile minorităților după programe și manuale identice cu cele ale claselor în limba română, dar toponimia și numele proprii românești trebuie transcrise și însușite și în limba română.

Formula de memorare este: toate disciplinele în limba maternă, româna după programă specială, terminologie dublă la specialitate și examene în limba în care s-a studiat.`,
      remember: [
        "Toate disciplinele se studiază în limba maternă, cu excepția Limbii și literaturii române.",
        "Admiterea și absolvirea pot fi susținute în limba în care au fost studiate disciplinele.",
        "La liceal și postliceal se însușește terminologia de specialitate și în limba română."
      ],
      questions: [
        {
          prompt: "Care disciplină face excepție de la regula studierii tuturor disciplinelor în limba maternă?",
          options: ["Educația muzicală", "Istoria și tradițiile minorității", "Limba și literatura română", "Geografia României"],
          correct: 2,
          explanation: "Limba și literatura română este disciplina exceptată de la regula predării în limba maternă."
        },
        {
          prompt: "În ce limbă pot fi susținute probele de admitere și examenele de absolvire?",
          options: ["Numai în limba română", "În limba în care au fost studiate disciplinele respective", "Numai într-o limbă internațională", "Exclusiv în limba maternă, indiferent de limba de studiu"],
          correct: 1,
          explanation: "Art. 60 permite susținerea probelor în limba în care au fost studiate disciplinele."
        },
        {
          prompt: "Ce obligație suplimentară există la disciplinele de specialitate din liceal și postliceal?",
          options: ["Învățarea unei a treia limbi", "Însușirea terminologiei de specialitate și în limba română", "Renunțarea la limba maternă", "Susținerea obligatorie a bacalaureatului în străinătate"],
          correct: 1,
          explanation: "Terminologia de specialitate trebuie însușită și în limba română."
        }
      ],
      legalText: `Art. 60 — În învățământul cu predare în limbile minorităților, toate disciplinele se studiază în limba maternă, cu excepția Limbii și literaturii române. Aceasta se predă după programe și manuale speciale, cu posibilitatea folosirii, la cerere, a manualelor unităților cu predare în română.

Limba maternă, Istoria și tradițiile minorității și Educația muzicală se predau și se evaluează în limba maternă. La liceal și postliceal se însușește terminologia de specialitate și în română.

Probele de admitere și de absolvire pot fi susținute în limba în care au fost studiate disciplinele. Minoritățile au dreptul la reprezentare proporțională în organele de conducere. Istoria și Geografia României se predau în limba minorității, cu însușirea toponimiei și a numelor proprii și în română.`
    },
    {
      article: 61,
      title: "Românii din afara granițelor și elevii reîntorși",
      duration: "7 min",
      focus: "școli românești · examene speciale · grupe de acomodare · burse · reintegrare",
      narration: `Articolul 61 reunește măsurile destinate românilor de pretutindeni și elevilor români care revin în țară.

Guvernul sprijină învățământul în limba română în statele în care trăiesc români de pretutindeni, cu respectarea legislației statului respectiv. Ministerul Educației, împreună cu Ministerul Afacerilor Externe și Departamentul pentru Românii de Pretutindeni, poate organiza școli românești în afara granițelor, pe lângă oficii diplomatice și instituții culturale, precum și cursuri de limbă, cultură și civilizație românească. Prioritate au statele cu comunități românești istorice sau importante numeric.

Absolvenții români din afara țării se pot înscrie la evaluarea națională sau la un examen național de bacalaureat special organizat în România. Probele, programele, calendarul și procedura se stabilesc prin metodologie aprobată prin ordin al ministrului educației. Școlile românești din afara granițelor sunt înscrise într-un registru special gestionat de minister.

Pentru elevii reîntorși după perioade îndelungate în străinătate se pot organiza grupe de acomodare. La cererea părintelui sau a reprezentantului legal, structura județeană competentă organizează asemenea grupe pentru elevul care nu a fost înscris în sistemul românesc în ultimii doi ani. Scopul lor este dobândirea unui nivel corespunzător de limbă română, recuperarea decalajelor și integrarea mai ușoară prin activități extrașcolare.

Ministerul Educației poate acorda anual burse românilor de pretutindeni care studiază în unități de stat din România. Numărul burselor se aprobă prin hotărârea Guvernului privind cifrele de școlarizare, iar condițiile sunt stabilite prin acte normative specifice.

Cadre didactice pot fi selectate, pe baza cooperării bilaterale, pentru predarea limbii române sau a unor discipline în limba română în străinătate. Elevii români din afara granițelor, bursieri ai statului român, au o reducere de 75% la muzee, concerte, teatru, operă, film și alte manifestări culturale sau sportive organizate de instituții publice în România. La revenirea în țară, înscrierea în învățământul preuniversitar se face după o metodologie aprobată prin ordin al ministrului.

Formula de memorare este: sprijin în străinătate, examene speciale în România, doi ani pentru grupa de acomodare și reducere culturală de 75% pentru bursieri.`,
      remember: [
        "Pentru elevul neînscris în sistemul românesc în ultimii 2 ani se pot organiza, la cerere, grupe de acomodare.",
        "Grupele urmăresc limba română, recuperarea decalajelor și integrarea.",
        "Bursierii români din afara granițelor beneficiază de reducere de 75% la activități culturale și sportive publice."
      ],
      questions: [
        {
          prompt: "Pentru ce elev reîntors poate fi solicitată organizarea unei grupe de acomodare?",
          options: ["Pentru orice elev absent o lună", "Pentru elevul neînscris în sistemul românesc în ultimii doi ani", "Numai pentru absolventul de facultate", "Exclusiv pentru elevul major"],
          correct: 1,
          explanation: "Condiția prevăzută este neînscrierea în sistemul de învățământ din România în ultimii doi ani."
        },
        {
          prompt: "Care este scopul grupelor de acomodare?",
          options: ["Doar pregătirea sportivă", "Limba română, recuperarea decalajelor și integrarea", "Numai pregătirea pentru bacalaureat", "Înlocuirea definitivă a clasei obișnuite"],
          correct: 1,
          explanation: "Grupele sprijină limba română, recuperarea decalajelor și integrarea în sistem."
        },
        {
          prompt: "Ce reducere primesc bursierii români din afara granițelor la manifestările publice prevăzute de lege?",
          options: ["25%", "50%", "75%", "100%"],
          correct: 2,
          explanation: "Reducerea stabilită de art. 61 este de 75%."
        }
      ],
      legalText: `Art. 61 — Guvernul sprijină învățământul în limba română în statele în care trăiesc români de pretutindeni. Ministerul Educației, MAE și Departamentul pentru Românii de Pretutindeni pot organiza școli românești și cursuri de limbă, cultură și civilizație românească.

Elevii și absolvenții vizați pot participa la evaluări și examene naționale special organizate în România. Pentru elevii reîntorși, neînscriși în sistemul românesc în ultimii doi ani, se pot organiza la cerere grupe de acomodare.

Ministerul poate acorda burse românilor de pretutindeni. Bursierii statului român beneficiază de o reducere de 75% la manifestări culturale și sportive publice. Reînscrierea la revenirea în țară se face după metodologie aprobată prin ordin ministerial.`
    },
    {
      article: 62,
      title: "Centrul Național Românesc pentru Învățământ la Distanță",
      duration: "5 min",
      focus: "CNRID · identitate culturală · programe în străinătate · resurse deschise",
      narration: `Articolul 62 înființează Centrul Național Românesc pentru Învățământ la Distanță, prescurtat CNRID.

CNRID este instituție publică de interes național, în subordinea Ministerului Educației, cu personalitate juridică și buget propriu. Se finanțează din venituri proprii și subvenții de la bugetul de stat. Misiunea sa este promovarea identității culturale românești și a dialogului intercultural, prin programe de limbă, cultură și civilizație românească oferite în străinătate, în baza acordurilor bilaterale.

Metodologiile și programele de limbă, cultură și civilizație românească, ca parte a nivelurilor antepreșcolar, preșcolar, primar, gimnazial și liceal, se aprobă prin ordin al ministrului educației, publicat în Monitorul Oficial. Aceste programe sunt organizate de CNRID sau de Institutul Limbii Române, după caz.

Centrul poate oferi și alte programe educaționale de interes general, ca parte a învățării pe tot parcursul vieții, atât cetățenilor români, cât și celor străini. Ministerul Educației sau CNRID încheie acorduri de colaborare pentru implementarea programelor în unități de învățământ din străinătate.

Sediul, structura și regulamentul de funcționare sunt stabilite prin hotărâre a Guvernului. Centrul poate percepe taxe pentru serviciile sale, cu excepția programelor școlare de limbă, cultură și civilizație românească, poate primi finanțări, poate valorifica drepturi de proprietate intelectuală și poate elibera atestate, diplome și certificate.

CNRID are acces la toate resursele educaționale deschise ale Ministerului Educației și le promovează. Utilizează Biblioteca școlară virtuală și platforma de e-learning «Învățăm în România», care includ programe școlare, exemple de lecții, ghiduri metodologice și probe de evaluare.

Formula de memorare este: CNRID în subordinea ministerului, identitate românească în străinătate, programe aprobate prin ordin și acces la resurse educaționale deschise.`,
      remember: [
        "CNRID este instituție publică de interes național, subordonată Ministerului Educației.",
        "Scopul este promovarea identității culturale românești și a dialogului intercultural.",
        "Programele sunt organizate de CNRID sau de Institutul Limbii Române, după caz."
      ],
      questions: [
        {
          prompt: "În subordinea cărei autorități funcționează CNRID?",
          options: ["Ministerului Educației", "Ministerului Culturii", "Autorității locale", "Academiei Române"],
          correct: 0,
          explanation: "CNRID este instituție publică în subordinea Ministerului Educației."
        },
        {
          prompt: "Care este scopul central al CNRID?",
          options: ["Organizarea exclusivă a sportului școlar", "Promovarea identității culturale românești și a dialogului intercultural", "Acreditarea universităților", "Administrarea examenului de titularizare"],
          correct: 1,
          explanation: "Centrul promovează identitatea culturală românească și dialogul intercultural prin programe în străinătate."
        },
        {
          prompt: "Cine organizează programele școlare de limbă, cultură și civilizație românească?",
          options: ["Numai autoritățile locale", "CNRID sau Institutul Limbii Române, după caz", "Exclusiv universitățile", "Numai inspectoratele pentru situații de urgență"],
          correct: 1,
          explanation: "Forma actuală a art. 62 prevede organizarea de către CNRID sau Institutul Limbii Române, după caz."
        }
      ],
      legalText: `Art. 62 — CNRID este instituție publică de interes național, cu personalitate juridică, în subordinea Ministerului Educației. Promovează identitatea culturală românească și dialogul intercultural prin programe de limbă, cultură și civilizație românească în străinătate.

Metodologiile și programele se aprobă prin ordin al ministrului și sunt organizate de CNRID sau Institutul Limbii Române, după caz. Centrul poate oferi și programe de învățare pe tot parcursul vieții.

Sediul, structura și regulamentul se stabilesc prin hotărâre a Guvernului. CNRID poate percepe taxe pentru anumite servicii, primi finanțări, valorifica drepturi de proprietate intelectuală și elibera acte de studii. Are acces la resursele educaționale deschise ale ministerului.`
    },
    {
      article: 63,
      title: "Responsabilități pentru siguranța în școli",
      duration: "5 min",
      focus: "prefect · autorități · sistem-cadru · regulament de ordine interioară · raport semestrial",
      narration: `Articolul 63 stabilește cine răspunde de siguranța în unitățile de învățământ și ce documente trebuie elaborate.

Siguranța se realizează sub coordonarea prefectului. Responsabilitatea este comună: aparține autorităților administrației publice locale, structurilor județene din educație, poliției, jandarmeriei, centrelor de prevenire, evaluare și consiliere antidrog și unităților de învățământ.

La nivelul fiecărui județ și al municipiului București, reprezentanții acestor autorități elaborează, sub coordonarea prefectului, sistemul-cadru pentru protecția școlilor și siguranța elevilor și personalului. Documentul este aprobat de prefect.

În fiecare școală, consiliul de administrație aprobă regulamentul de ordine interioară după consultarea consiliului profesoral, a consiliului școlar al elevilor, a consiliului reprezentativ al părinților și, dacă există, a asociației de părinți. Regulamentul trebuie să precizeze condițiile de acces pentru profesori, elevi și vizitatori. El se publică pe site-ul unității și se comunică autorităților responsabile.

Pentru împrejmuiri, securizarea clădirilor, iluminat și alte măsuri de siguranță se pot aloca sume bugetelor locale, la solicitarea consiliului de administrație și cu sprijinul de specialitate al poliției. Aplicarea acestei prevederi a fost suspendată numai până la începutul anului școlar 2026–2027.

Autoritățile responsabile analizează semestrial modul în care este asigurată protecția școlilor și desfășoară programe de prevenire a violenței. Biroul de siguranță școlară al poliției întocmește un raport semestrial, adus la cunoștința consiliului de administrație, a consiliului profesoral și a instituțiilor implicate.

Formula de memorare este: prefectul coordonează, responsabilitatea este comună, consiliul de administrație aprobă regulamentul și poliția raportează semestrial.`,
      remember: [
        "Siguranța școlară se realizează sub coordonarea prefectului, prin responsabilitate instituțională comună.",
        "Consiliul de administrație aprobă regulamentul după consultarea structurilor școlii.",
        "Biroul de siguranță școlară întocmește un raport semestrial."
      ],
      questions: [
        {
          prompt: "Sub coordonarea cui se realizează siguranța în unitățile de învățământ?",
          options: ["Primarului", "Prefectului", "Directorului adjunct", "Președintelui consiliului elevilor"],
          correct: 1,
          explanation: "Art. 63 stabilește coordonarea prefectului."
        },
        {
          prompt: "Cine aprobă regulamentul de ordine interioară al școlii?",
          options: ["Consiliul de administrație, după consultările prevăzute de lege", "Numai directorul", "Consiliul local", "Poliția"],
          correct: 0,
          explanation: "Consiliul de administrație îl aprobă după consultarea consiliului profesoral, elevilor și părinților."
        },
        {
          prompt: "Cât de des întocmește Biroul de siguranță școlară raportul privind siguranța în școli?",
          options: ["Lunar", "Semestrial", "O dată la patru ani", "Numai la cererea directorului"],
          correct: 1,
          explanation: "Raportul Biroului de siguranță școlară este semestrial."
        }
      ],
      legalText: `Art. 63 — Siguranța în școli se realizează sub coordonarea prefectului și este responsabilitatea comună a autorităților locale, structurilor educaționale județene, poliției, jandarmeriei, centrelor antidrog și unităților de învățământ.

La nivel județean se elaborează un sistem-cadru aprobat de prefect. În școală, consiliul de administrație aprobă, după consultările prevăzute de lege, regulamentul de ordine interioară și condițiile de acces. Regulamentul se publică pe site.

Autoritățile analizează semestrial siguranța, iar Biroul de siguranță școlară întocmește un raport semestrial. Alin. (4), privind alocările pentru măsuri de securizare, a fost suspendat până la începutul anului școlar 2026–2027.`
    },
    {
      article: 64,
      title: "Planul național pentru siguranță și situațiile de urgență",
      duration: "6 min",
      focus: "PNSIP · infrastructură · incendiu · cutremur · instruire de două ori pe an",
      narration: `Articolul 64 reglementează Planul național pentru siguranța în învățământul preuniversitar, prescurtat PNSIP, și pregătirea pentru situații de urgență.

PNSIP se aprobă prin hotărâre a Guvernului, la inițiativa Ministerului Educației. Planul cuprinde prioritizarea investițiilor în reziliența infrastructurii, propunerea standardelor de siguranță, dotarea unităților conform standardelor și expertizarea și reabilitarea școlilor de stat aflate în clasele de risc seismic RsI, RsII și RsIII.

Prevenirea situațiilor de urgență presupune menținerea condițiilor care au stat la baza avizelor și autorizațiilor de securitate la incendiu și risc seismic, respectarea normelor de apărare împotriva incendiilor și de protecție seismică, precum și instruirea personalului și educarea elevilor cu privire la comportamentul corect în situații de urgență.

Ministerul Educației trebuie să includă în curriculum teme referitoare la apărarea împotriva incendiilor, comportamentul în caz de cutremur și protecția civilă.

Educarea elevilor în domeniul situațiilor de urgență se desfășoară cel puțin de două ori într-un an școlar. Cel puțin una dintre activități se organizează împreună cu inspectoratele pentru situații de urgență. Acțiunile pot include informare preventivă, exerciții practice, lecții deschise și cercuri tehnico-aplicative. Pot fi folosite și centrele mobile ale Inspectoratului General pentru Situații de Urgență.

Regulamentul activităților comune se aprobă prin ordin comun al ministrului educației și al ministrului afacerilor interne. Structurile educaționale județene și instituția prefectului monitorizează aplicarea măsurilor și întocmesc un raport anual.

Formula de memorare este: PNSIP înseamnă infrastructură rezilientă și standarde; educarea pentru urgențe se face de minimum două ori pe an, cel puțin o dată împreună cu ISU.`,
      remember: [
        "PNSIP este aprobat prin hotărâre a Guvernului, la inițiativa Ministerului Educației.",
        "Planul vizează standarde, dotări, reziliență și clădirile din clasele RsI–RsIII.",
        "Educația pentru situații de urgență se face cel puțin de două ori pe an școlar."
      ],
      questions: [
        {
          prompt: "Prin ce act se aprobă PNSIP?",
          options: ["Prin hotărâre a Guvernului", "Prin decizia directorului", "Prin hotărârea consiliului elevilor", "Prin ordin al prefectului"],
          correct: 0,
          explanation: "PNSIP se aprobă prin hotărâre a Guvernului, la inițiativa Ministerului Educației."
        },
        {
          prompt: "De câte ori pe an școlar se asigură cel puțin educarea elevilor pentru situații de urgență?",
          options: ["O dată", "De două ori", "De patru ori", "O dată la trei ani"],
          correct: 1,
          explanation: "Legea stabilește minimum două activități într-un an școlar."
        },
        {
          prompt: "Cu cine se organizează cel puțin una dintre activitățile anuale?",
          options: ["Cu inspectoratele pentru situații de urgență", "Exclusiv cu mediul de afaceri", "Numai cu universitățile", "Cu federațiile sportive"],
          correct: 0,
          explanation: "Cel puțin o activitate se organizează în comun cu inspectoratele pentru situații de urgență."
        }
      ],
      legalText: `Art. 64 — PNSIP se aprobă prin hotărâre a Guvernului și cuprinde investiții în reziliență, standarde și dotări de siguranță, precum și expertizarea și reabilitarea unităților din clasele de risc seismic RsI–RsIII.

Prevenirea situațiilor de urgență presupune respectarea normelor de incendiu și risc seismic, instruirea personalului și educarea elevilor. Curriculumul include teme despre incendiu, cutremur și protecție civilă.

Elevii sunt educați pentru situații de urgență de cel puțin două ori pe an școlar, dintre care cel puțin o dată împreună cu ISU. Aplicarea regulamentului este monitorizată de structurile județene și prefectură, care întocmesc raport anual.`
    },
    {
      article: 65,
      title: "Prevenirea și managementul violenței școlare",
      duration: "7 min",
      focus: "PNCVS · raportare confidențială · 119 · poliție · sprijin pentru victime",
      narration: `Articolul 65 reglementează Planul național de combatere a violenței școlare, prescurtat PNCVS, și obligațiile concrete ale școlilor.

PNCVS se aprobă prin hotărâre a Guvernului, la inițiativa Ministerului Educației. El vizează prevenirea și reducerea tuturor formelor de violență: verbală, fizică, psihologică, inclusiv bullying, emoțională, sexuală, socială, culturală și cibernetică, precum și a altor comportamente care pot pune în pericol sănătatea ori integritatea elevilor și personalului.

Pe baza PNCVS, a regulamentului de organizare și funcționare și a evaluării climatului școlar, fiecare unitate adoptă propriul plan de prevenire și reducere a violenței. Planul se construiește împreună cu reprezentanții elevilor, părinților și instituțiilor locale competente.

Regulamentul de ordine interioară trebuie să cuprindă procedura de acces a persoanelor din afara școlii, procedura de sesizare a suspiciunilor și faptelor de violență și o metodă confidențială de sesizare. Elevii și părinții pot raporta suspiciunile sau cazurile de violență oricărui membru al personalului școlii.

Orice membru al personalului, preșcolar, elev sau părinte care are suspiciuni trebuie să acționeze conform Procedurii de management a cazurilor de violență. Conducerea școlii sesizează la numărul național 119 cazurile de violență asupra copilului și colaborează cu direcția de protecție a copilului. Dacă există suspiciunea unei infracțiuni, conducerea sesizează poliția și colaborează cu organele de anchetă.

Școala stabilește măsuri de sprijin pentru victime și, pentru autori, măsuri de sprijin și sancțiuni proporționale cu gravitatea, cauzele, efectele și nevoile celor implicați.

Personalul școlii victimă a violenței din partea elevilor poate beneficia de consiliere, concediu medical la cerere, servicii decontate de intervenție psihologică și psihoterapeutică, reîncadrare temporară la altă clasă și asistență profesională. Elevii victime beneficiază de servicii decontate de intervenție psihologică și psihoterapeutică, pe baza recomandării consilierului școlar.

Formula de memorare este: plan propriu, raportare inclusiv confidențială, 119 pentru violența asupra copilului, poliția pentru suspiciunea de infracțiune și sprijin pentru victime.`,
      remember: [
        "Regulamentul trebuie să includă o metodă confidențială de sesizare.",
        "Cazurile de violență asupra copilului se sesizează la 119; suspiciunea de infracțiune se sesizează poliției.",
        "Școala asigură sprijin victimelor și măsuri proporționale pentru autori."
      ],
      questions: [
        {
          prompt: "Cui pot raporta elevii și părinții suspiciunile sau cazurile de violență?",
          options: ["Numai directorului", "Oricărui membru al personalului școlii", "Numai poliției", "Exclusiv consiliului local"],
          correct: 1,
          explanation: "Art. 65 permite raportarea către orice membru al personalului școlii."
        },
        {
          prompt: "Unde sesizează conducerea cazurile de violență asupra copilului?",
          options: ["La numărul național 119", "La numărul 112 în toate situațiile, fără altă procedură", "La bibliotecă", "La inspectoratul pentru situații de urgență"],
          correct: 0,
          explanation: "Cazurile de violență asupra copilului se sesizează la numărul național 119."
        },
        {
          prompt: "Ce trebuie să facă școala dacă există suspiciunea comiterii unei infracțiuni?",
          options: ["Să aștepte sfârșitul anului", "Să sesizeze poliția și să colaboreze cu organele de anchetă", "Să publice cazul pe internet", "Să transfere automat victima"],
          correct: 1,
          explanation: "Conducerea are obligația sesizării poliției și colaborării cu organele de anchetă."
        }
      ],
      legalText: `Art. 65 — PNCVS urmărește prevenirea și reducerea tuturor formelor de violență. Fiecare școală adoptă un plan propriu, pe baza evaluării climatului și în colaborare cu elevii, părinții și instituțiile abilitate.

Regulamentul de ordine interioară include procedurile de acces și sesizare, inclusiv o metodă confidențială. Elevii și părinții pot raporta oricărui membru al personalului.

Conducerea sesizează violența asupra copilului la 119 și suspiciunea de infracțiune la poliție. Școala instituie măsuri de sprijin pentru victime și măsuri de sprijin și sancțiuni proporționale pentru autori. Personalul și elevii victime beneficiază de serviciile prevăzute de lege.`
    },
    {
      article: 66,
      title: "Supravegherea audio-video în spațiul școlar",
      duration: "8 min",
      focus: "acord · situații excepționale · CA · 30 de zile · acces · interdicții · examene",
      narration: `Articolul 66 reglementează instalarea și utilizarea sistemelor de supraveghere audio-video în școli.

Ca regulă, unitatea poate decide instalarea sistemului pentru paza și protecția persoanelor, bunurilor și valorilor și pentru prevenirea violenței, cu acordul majorității simple a părinților sau reprezentanților elevilor minori, al elevilor majori și al salariaților. În situații excepționale, când există risc crescut și un număr semnificativ de sesizări de violență, instalarea poate fi decisă numai cu informarea persoanelor vizate.

Hotărârea este luată de consiliul de administrație, prin decizie avizată de director, pentru maximum un an calendaristic. Perioada poate fi prelungită dacă motivele se mențin. Decizia se bazează pe consultarea prealabilă a personalului didactic, didactic auxiliar și administrativ și pe informarea persoanelor vizate.

Camerele pot fi instalate în săli de clasă, în exteriorul clădirilor, pe holuri, în săli de festivități, pe holurile internatelor și în săli de sport. Sunt interzise în vestiare și grupuri sanitare.

Școala răspunde de respectarea regulilor privind protecția datelor. Înregistrările pot fi folosite numai pentru cercetarea cazurilor de violență și a celor privind protecția bunurilor și valorilor. Sistemul trebuie să fie cu circuit închis, fără acces din afara unității. Se desemnează o persoană care monitorizează funcționarea și un responsabil cu protecția datelor.

Înregistrările se păstrează în siguranță timp de 30 de zile. În cazuri temeinic justificate, termenul se prelungește până la finalizarea cercetărilor, după care datele se șterg automat. Înregistrările nu pot fi folosite la evaluarea profesională a profesorilor sau pentru soluționarea contestațiilor privind evaluarea elevilor la clasă. Ele nu pot fi comercializate ori făcute publice.

Accesul se face numai prin vizualizare, pe baza unei cereri scrise și motivate, aprobate de director, în care se precizează perioada solicitată. Pot avea acces părintele elevului minor, elevul major, personalul școlii, reprezentanții structurilor educaționale competente, ai Ministerului Educației și ai protecției copilului, precum și psihologul sau consilierul școlar, cu acordul părintelui ori al elevului major. Persoanele care vizualizează nu pot publica materialele și nu le pot folosi pentru prejudicierea imaginii sau integrității cuiva.

La evaluarea națională, admiterea la liceu, bacalaureat și la concursurile ori examenele naționale ale cadrelor didactice, inclusiv concursurile pentru funcții de conducere, îndrumare și control, supravegherea audio-video este obligatorie. Autoritățile locale sau Ministerul Educației pot asigura fonduri pentru achiziționarea sistemelor.

Formula de memorare este: acordul majorității ca regulă, informarea în situație excepțională, decizie CA pentru maximum un an, stocare 30 de zile și acces numai prin vizualizare.`,
      remember: [
        "Decizia CA, avizată de director, se ia pentru maximum 1 an calendaristic.",
        "Înregistrările se păstrează, de regulă, 30 de zile și nu pot fi folosite pentru evaluarea profesorilor sau contestațiile elevilor.",
        "Accesul se face prin vizualizare, pe baza unei cereri scrise și motivate aprobate de director."
      ],
      questions: [
        {
          prompt: "Pentru ce perioadă maximă se ia inițial decizia de supraveghere audio-video?",
          options: ["30 de zile", "Maximum un an calendaristic", "Patru ani", "Pe perioadă nelimitată"],
          correct: 1,
          explanation: "Consiliul de administrație decide pentru maximum un an calendaristic, cu posibilitatea prelungirii în condițiile legii."
        },
        {
          prompt: "Care este perioada obișnuită de păstrare a înregistrărilor?",
          options: ["24 de ore", "7 zile", "30 de zile", "5 ani"],
          correct: 2,
          explanation: "Înregistrările se stochează, de regulă, timp de 30 de zile."
        },
        {
          prompt: "Cum se realizează accesul la înregistrări?",
          options: ["Prin publicarea lor online", "Numai prin vizualizare, pe baza unei cereri scrise și motivate aprobate de director", "Prin copiere automată pe telefon", "Fără cerere, pentru orice persoană"],
          correct: 1,
          explanation: "Accesul permis de lege este numai prin vizualizare, în baza cererii scrise și motivate aprobate de director."
        }
      ],
      legalText: `Art. 66 — Instalarea supravegherii audio-video se decide, ca regulă, cu acordul majorității simple a categoriilor vizate; în situații excepționale de risc crescut, cu informarea acestora. Consiliul de administrație decide, cu avizul directorului, pentru maximum un an calendaristic.

Sistemele pot funcționa în clase, exterior, holuri, săli de festivități, holurile internatelor și săli de sport, dar nu în vestiare sau grupuri sanitare. Școala respectă normele de protecție a datelor și utilizează un circuit închis.

Înregistrările se păstrează 30 de zile, cu excepția cazurilor justificate, și nu pot fi utilizate pentru evaluarea profesorilor sau contestațiile privind evaluarea elevilor. Accesul se face numai prin vizualizare, pe baza unei cereri scrise și motivate aprobate de director. Materialele nu pot fi publicate sau comercializate.

Supravegherea audio-video este obligatorie la examenele naționale ale elevilor și la concursurile sau examenele naționale ale cadrelor didactice și ale personalului de conducere, îndrumare și control.`
    }
  );
})();
