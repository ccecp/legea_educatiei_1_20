"use strict";

(() => {
  const DATA = window.LEGE_DATA;

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–18: verificare 11.08.2026";
  DATA.modules = [
    {
      id: 1,
      title: "Dispoziții generale. Principii și valori",
      articles: "1–11",
      chapter: "Capitolul I",
      startArticle: 1,
      endArticle: 11
    },
    {
      id: 2,
      title: "Formele de organizare a învățământului preuniversitar",
      articles: "12–18",
      chapter: "Capitolul II",
      startArticle: 12,
      endArticle: 18
    }
  ];

  DATA.lessons.push(
    {
      article: 12,
      title: "Sistemul național și caracterul său deschis",
      duration: "4 min",
      focus: "componență · înființare · organizare · transferuri",
      narration: "Articolul 12 definește sistemul național de învățământ preuniversitar. Acesta cuprinde totalitatea unităților de învățământ de stat, particulare și confesionale, care sunt autorizate să funcționeze provizoriu sau sunt acreditate. Așadar, forma de proprietate poate fi diferită, dar autorizarea ori acreditarea este obligatorie pentru apartenența la sistem.\n\nUnitățile de stat, particulare și confesionale se înființează pe niveluri de învățământ, prin ordin al ministrului educației, în condițiile legii. Învățământul preuniversitar este organizat pe niveluri, forme de învățământ, filiere și profiluri, după caz. Scopul acestei organizări este dobândirea competențelor-cheie și profesionalizarea progresivă, în acord cu profilul educațional al absolventului fiecărui nivel.\n\nSistemul are caracter deschis. Aceasta înseamnă că sunt posibile transferuri între unități, formațiuni de studiu, profiluri și filiere, în condițiile legii și ale regulamentului-cadru de organizare și funcționare a unităților de învățământ.\n\nElevii se pot transfera între unități de stat, particulare și confesionale cu acordul consiliului de administrație al unității primitoare și cu respectarea numărului maxim de elevi pe formațiune de studiu. Rețineți formula: sistem mixt, înființare prin ordin, organizare pe trasee, caracter deschis și acordul unității primitoare.",
      remember: [
        "Sistemul cuprinde unitățile de stat, particulare și confesionale autorizate provizoriu sau acreditate.",
        "Unitățile se înființează pe niveluri, prin ordin al ministrului educației.",
        "Transferul cere acordul CA al unității primitoare și respectarea efectivului maxim."
      ],
      questions: [
        {
          prompt: "Ce unități alcătuiesc sistemul național de învățământ preuniversitar?",
          options: [
            "Numai unitățile de stat acreditate",
            "Unitățile de stat, particulare și confesionale autorizate provizoriu sau acreditate",
            "Orice organizație care desfășoară activități cu elevi",
            "Numai unitățile aflate în proprietatea autorităților locale"
          ],
          correct: 1,
          explanation: "Art. 12 alin. (1) include unitățile de stat, particulare și confesionale autorizate să funcționeze provizoriu sau acreditate."
        },
        {
          prompt: "Prin ce act se înființează unitățile de învățământ pe niveluri?",
          options: [
            "Prin hotărârea consiliului profesoral",
            "Prin decizia inspectorului școlar general",
            "Prin ordin al ministrului educației",
            "Prin dispoziția primarului"
          ],
          correct: 2,
          explanation: "Înființarea unităților de stat, particulare și confesionale se face prin ordin al ministrului educației."
        },
        {
          prompt: "Ce condiții evidențiază art. 12 pentru transferul la o altă unitate?",
          options: [
            "Acordul consiliului profesoral al unității de proveniență",
            "Acordul CA al unității primitoare și încadrarea în efectivul maxim",
            "Aprobarea obligatorie a ministerului pentru fiecare transfer",
            "Existența unui loc sub efectivul minim"
          ],
          correct: 1,
          explanation: "Transferul se realizează cu acordul CA al unității primitoare și cu încadrarea în numărul maxim de elevi pe formațiune."
        }
      ],
      legalText: "(1) Sistemul național de învățământ preuniversitar este constituit din totalitatea unităților de învățământ de stat, particulare și confesionale, autorizate să funcționeze provizoriu/acreditate. (2) Unitățile de învățământ preuniversitar de stat, particulare și confesionale se înființează pe niveluri de învățământ, prin ordin al ministrului educației, în condițiile prezentei legi. (3) Învățământul preuniversitar este organizat pe niveluri, forme de învățământ, filiere și profiluri, după caz, asigurând condițiile necesare pentru dobândirea competențelor-cheie și pentru profesionalizarea progresivă, în acord cu profilul educațional al absolventului fiecărui nivel de învățământ. (4) Sistemul național de învățământ preuniversitar are caracter deschis. În învățământul preuniversitar, transferul antepreșcolarilor, preșcolarilor sau elevilor de la o unitate de învățământ la alta, de la o formațiune de studiu la alta, de la un profil la altul și de la o filieră la alta se efectuează în condițiile stabilite în prezenta lege și în regulamentul-cadru de organizare și funcționare a unităților de învățământ preuniversitar, aprobat prin ordin al ministrului educației. (5) Elevii din învățământul preuniversitar de stat, particular și confesional se pot transfera la alte unități de învățământ de stat, particular și confesional, cu acordul consiliului de administrație al unității de învățământ primitoare, cu încadrarea în numărul maxim de elevi pe formațiune de studiu."
    },
    {
      article: 13,
      title: "Învățământul obligatoriu și exmatricularea",
      duration: "4 min",
      focus: "niveluri obligatorii · exmatriculare · alocație · filiera tehnologică",
      narration: "Articolul 13 stabilește întinderea învățământului obligatoriu. Acesta cuprinde învățământul preșcolar, primar, gimnazial și liceal. Învățământul postliceal nu face parte din această enumerare.\n\nExmatricularea beneficiarilor primari pe perioada învățământului obligatoriu este o măsură excepțională. Ea poate fi dispusă numai în situații grave, după încălcarea normelor de disciplină în spațiul școlar și pentru protejarea dreptului la educație al celorlalți beneficiari primari. În plus, este obligatorie parcurgerea unei proceduri disciplinare care garantează dreptul la apărare și dreptul la contestație.\n\nPe durata școlarizării în învățământul preuniversitar, cu excepția învățământului postliceal, copiii și elevii beneficiază de alocația de stat pentru copii, conform legii.\n\nExistă și o regulă specială pentru filiera tehnologică. Elevii care, după obținerea unui certificat de calificare de nivel 3, nu aleg continuarea studiilor liceale sunt considerați ca având finalizat învățământul obligatoriu, fără să dobândească însă o calificare de nivel 4. Rețineți: patru niveluri obligatorii, exmatriculare numai în condiții grave și cu garanții procedurale, alocație fără postliceal și excepția calificării de nivel 3.",
      remember: [
        "Învățământul obligatoriu: preșcolar, primar, gimnazial și liceal.",
        "Exmatricularea în perioada obligatorie este excepțională și cere procedură disciplinară.",
        "Alocația de stat se acordă pe durata școlarizării, cu excepția postlicealului."
      ],
      questions: [
        {
          prompt: "Care nivel NU este inclus de art. 13 în învățământul obligatoriu?",
          options: ["Preșcolar", "Primar", "Liceal", "Postliceal"],
          correct: 3,
          explanation: "Învățământul obligatoriu cuprinde nivelurile preșcolar, primar, gimnazial și liceal."
        },
        {
          prompt: "În ce condiții poate fi dispusă exmatricularea în perioada învățământului obligatoriu?",
          options: [
            "Pentru orice abatere, prin decizia profesorului diriginte",
            "Numai în situații grave și după o procedură care garantează apărarea și contestația",
            "Automat, după zece absențe",
            "Numai la solicitarea părinților celorlalți elevi"
          ],
          correct: 1,
          explanation: "Legea cere o situație gravă, scopul protejării celorlalți elevi și o procedură disciplinară cu drept la apărare și contestație."
        },
        {
          prompt: "Ce situație specială este prevăzută pentru elevii filierei tehnologice care obțin calificarea de nivel 3?",
          options: [
            "Sunt obligați să continue până la calificarea de nivel 5",
            "Pot fi considerați absolvenți de postliceal",
            "Dacă nu continuă studiile liceale, sunt asimilați ca având finalizat învățământul obligatoriu",
            "Pierd dreptul la certificatul de calificare"
          ],
          correct: 2,
          explanation: "Ei sunt asimilați ca având finalizat învățământul obligatoriu, dar fără calificare de nivel 4."
        }
      ],
      legalText: "(1) Învățământul obligatoriu cuprinde învățământul preșcolar, învățământul primar, învățământul gimnazial și învățământul liceal. (2) Exmatricularea beneficiarilor primari pe perioada învățământului obligatoriu poate fi realizată numai în situații grave, în urma încălcării normelor de disciplină în spațiul școlar, în vederea protejării dreptului la educație al celorlalți beneficiari primari. Exmatricularea poate fi dispusă numai după parcurgerea unei proceduri disciplinare care garantează dreptul la apărare și contestație. (3) Pe durata școlarizării în învățământul preuniversitar, cu excepția învățământului postliceal, copiii/elevii beneficiază de alocația de stat pentru copii, în conformitate cu prevederile Legii nr. 61/1993 privind alocația de stat pentru copii, republicată, cu modificările și completările ulterioare. (4) Prin excepție de la prevederile alin. (1), elevii din cadrul filierei tehnologice, care nu optează pentru continuarea studiilor liceale după obținerea unui certificat de calificare de nivel 3, sunt asimilați ca având finalizat învățământul obligatoriu, fără a obține o calificare de nivel 4, potrivit dispozițiilor art. 33 alin. (10)."
    },
    {
      article: 14,
      title: "Responsabilitatea părinților și contractul educațional",
      duration: "6 min",
      focus: "participarea la cursuri · educație parentală · contract · verificare · sprijin social",
      narration: "Articolul 14 pornește de la obligația părinților sau a reprezentantului legal de a asigura participarea la cursuri a beneficiarului primar minor pe întreaga perioadă a învățământului obligatoriu. Nerespectarea obligației constituie contravenție și se sancționează potrivit articolului 148.\n\nStatul trebuie să sprijine părinții în exercitarea responsabilităților privind creșterea, îngrijirea, dezvoltarea și educarea copiilor. În unitățile de învățământ se organizează cursuri de educație parentală pentru părinți, reprezentanți legali și viitori părinți. Ministerul elaborează Strategia națională pentru educație parentală, care se aprobă prin hotărâre a Guvernului.\n\nLa înscriere, directorul unității semnează contractul educațional cu beneficiarii secundari ai învățământului sau cu elevul major. Contractul stabilește drepturile și obligațiile reciproce și trebuie să conțină clauzele contractului educațional-tip, aprobat prin ordin al ministrului educației. Consiliul de administrație poate adăuga alte clauze în funcție de specificul unității, dar acestea nu pot afecta interesul superior al copilului sau elevului.\n\nÎn unitățile din sistemul de apărare, ordine publică și securitate națională, elevii și, dacă sunt minori, părinții sau reprezentanții lor legali încheie un contract al cărui conținut este stabilit prin ordinul conducătorului ministerului de resort.\n\nDirecțiile județene de învățământ verifică respectarea contractului din oficiu sau la sesizare și pot dispune măsuri ori sancțiuni potrivit metodologiei aprobate prin ordin al ministrului. Pentru sprijinirea participării la cursuri și respectării contractului, școala poate solicita intervenția direcțiilor de asistență socială și protecția copilului sau a serviciilor publice de asistență socială. Cheia articolului este parteneriatul responsabil: obligația familiei, sprijinul statului, contractul semnat de director, clauzele suplimentare aprobate de CA și intervenția instituțiilor competente.",
      remember: [
        "Părinții asigură participarea minorului la cursuri pe durata învățământului obligatoriu.",
        "Directorul semnează contractul educațional la înscriere.",
        "CA poate adăuga clauze, fără a afecta interesul superior al copilului/elevului."
      ],
      questions: [
        {
          prompt: "Cine semnează, din partea unității, contractul educațional la înscriere?",
          options: ["Profesorul diriginte", "Președintele consiliului reprezentativ al părinților", "Directorul unității", "Inspectorul școlar general"],
          correct: 2,
          explanation: "Art. 14 alin. (4) stabilește că directorul unității semnează contractul educațional."
        },
        {
          prompt: "Cine poate adăuga clauze contractului educațional, în funcție de specificul școlii?",
          options: [
            "Consiliul de administrație, fără afectarea interesului superior al copilului/elevului",
            "Orice profesor, fără aprobare",
            "Primarul, prin dispoziție",
            "Exclusiv elevul major"
          ],
          correct: 0,
          explanation: "Clauzele suplimentare se adaugă prin hotărârea CA și nu pot afecta interesul superior al beneficiarului primar."
        },
        {
          prompt: "Ce poate solicita școala pentru sprijinirea participării la cursuri și a respectării contractului?",
          options: [
            "Intervenția serviciilor de asistență socială și protecția copilului",
            "Suspendarea automată a alocației",
            "Intervenția unei societăți comerciale",
            "Exmatricularea automată a elevului"
          ],
          correct: 0,
          explanation: "Unitatea poate solicita intervenția DGASPC sau a serviciilor publice de asistență socială."
        }
      ],
      legalText: "(1) Părinții sau reprezentantul legal au obligația să asigure participarea la cursuri a beneficiarului primar minor pe întreaga perioadă a învățământului obligatoriu. Nerespectarea prezentei obligații constituie contravenție și se sancționează potrivit dispozițiilor art. 148 alin. (1) lit. a). (2) Statul sprijină părinții sau reprezentantul legal în vederea exercitării responsabilităților privind creșterea, îngrijirea, dezvoltarea și educarea copiilor. În acest scop, în unitățile de învățământ se organizează cursuri de educație parentală pentru formarea și dezvoltarea abilităților parentale pentru părinți și reprezentanți legali ai beneficiarilor primari sau viitori părinți. (3) Pentru punerea în aplicare a prevederilor alin. (2), Ministerul Educației elaborează Strategia națională pentru educație parentală care se aprobă prin hotărâre a Guvernului, în termen de 6 luni de la data intrării în vigoare a prezentei legi, respectând valorile și principiile prevăzute la art. 2 și 3 și asigurând selecția formatorilor din cadrul unităților de învățământ sau din cadrul altor instituții naționale cu rol în educație. (4) La înscrierea antepreșcolarului, a preșcolarului sau a elevului într-o unitate de învățământ, directorul unității de învățământ semnează contractul educațional cu beneficiarii secundari ai învățământului preuniversitar prevăzuți la art. 105 alin. (2) sau cu elevul major. Contractul prevede drepturile și obligațiile reciproce ale părților, garantând drepturile beneficiarilor primari și secundari, în conformitate cu prevederile contractului educațional-tip, aprobat prin ordin al ministrului educației. Contractul încheiat între părinți/reprezentantul legal/elevul major și unitatea de învățământ conține obligatoriu clauzele din contractul educațional, iar, în funcție de specificul fiecărei unități, prin hotărâre a consiliului de administrație, pot fi adăugate și alte clauze, a căror natură nu poate afecta interesul superior al antepreșcolarului, al preșcolarului sau al elevului. (5) În unitățile de învățământ preuniversitar din sistemul de apărare, ordine publică și securitate națională, elevii și, în cazul celor minori, împreună cu părinții sau reprezentantul legal al acestora, încheie un contract educațional, al cărui conținut se stabilește prin ordin al conducătorului ministerului de resort, în care sunt înscrise drepturile și obligațiile reciproce ale părților. (6) Direcțiile județene de învățământ preuniversitar/Direcția Municipiului București de Învățământ Preuniversitar verifică modul de respectare de către părți a prevederilor contractului educațional prevăzut la alin. (4) și (5), din oficiu sau la sesizarea părintelui/reprezentantului legal/elevului major sau a directorului unității de învățământ preuniversitar, și pot dispune aplicarea măsurilor sau sancțiunilor prevăzute în metodologia aprobată prin ordin al ministrului educației. (7) Pentru sprijinirea părinților în asigurarea participării la cursuri a beneficiarului primar minor și a respectării contractului educațional, unitățile de învățământ preuniversitar pot solicita intervenția direcțiilor generale județene de asistență socială și protecția copilului/Direcției Municipiului București de Asistență Socială și Protecția Copilului ori a serviciilor publice de asistență socială."
    },
    {
      article: 15,
      title: "Nivelurile și durata învățământului",
      duration: "5 min",
      focus: "educație timpurie · primar · gimnazial · liceal · postliceal · excepții",
      narration: "Articolul 15 prezintă nivelurile învățământului preuniversitar și durata lor. Educația timpurie acoperă intervalul de la 3 luni la 6 ani. Ea cuprinde învățământul antepreșcolar, de la 3 luni la 3 ani, și învățământul preșcolar, de la 3 la 6 ani. Ambele includ grupa mică, grupa mijlocie și grupa mare.\n\nÎnvățământul primar durează 5 ani și cuprinde clasa pregătitoare și clasele întâi până la a patra. Învățământul gimnazial durează 4 ani, clasele a cincea până la a opta. Învățământul liceal are, de regulă, durata de 4 ani. Învățământul postliceal, inclusiv cel terțiar nonuniversitar, durează între 1 și 3 ani.\n\nArticolul prevede trei excepții importante. În liceul tehnologic, elevii au dreptul să primească diplomă de absolvire după 3 ani și pot participa la examenul pentru certificarea calificării profesionale. Dacă promovează, primesc certificat de calificare de nivel 3.\n\nLa forma cu frecvență redusă și la forma cu frecvență seral, durata liceului este de 5 ani. Pentru alternativele educaționale, durata fiecărui nivel se aprobă prin ordinul ministrului educației privind funcționarea alternativei. Formula de memorare este: timpuriu 3 luni–6 ani; primar 5; gimnazial 4; liceal de regulă 4; postliceal 1–3; liceal seral sau frecvență redusă 5.",
      remember: [
        "Primar: 5 ani; gimnazial: 4 ani; liceal: de regulă 4 ani; postliceal: 1–3 ani.",
        "Educația timpurie: antepreșcolar 3 luni–3 ani și preșcolar 3–6 ani.",
        "Liceul seral și cu frecvență redusă durează 5 ani."
      ],
      questions: [
        {
          prompt: "Care asociere nivel–durată este corectă?",
          options: ["Primar – 4 ani", "Gimnazial – 5 ani", "Postliceal – între 1 și 3 ani", "Liceal seral – 4 ani"],
          correct: 2,
          explanation: "Învățământul postliceal, inclusiv terțiar nonuniversitar, are durata între 1 și 3 ani."
        },
        {
          prompt: "Ce cuprinde educația timpurie?",
          options: [
            "Numai învățământul preșcolar",
            "Învățământul antepreșcolar și preșcolar, de la 3 luni la 6 ani",
            "Învățământul primar și preșcolar",
            "Numai grupa pregătitoare"
          ],
          correct: 1,
          explanation: "Educația timpurie include antepreșcolarul 3 luni–3 ani și preșcolarul 3–6 ani."
        },
        {
          prompt: "Care este durata liceului la forma seral și la forma cu frecvență redusă?",
          options: ["3 ani", "4 ani", "5 ani", "Între 1 și 3 ani"],
          correct: 2,
          explanation: "Art. 15 alin. (3) stabilește durata de 5 ani pentru aceste două forme."
        }
      ],
      legalText: "(1) Învățământul preuniversitar se desfășoară pe următoarele niveluri: a) educația timpurie (3 luni-6 ani), formată din învățământul antepreșcolar (3 luni-3 ani) și învățământul preșcolar (3-6 ani), ambele cuprinzând grupa mică, grupa mijlocie și grupa mare; b) învățământul primar, cu durata de 5 ani, care cuprinde clasa pregătitoare și clasele I-IV; c) învățământul gimnazial, cu durata de 4 ani, care cuprinde clasele V-VIII; d) învățământul liceal, cu o durată, de regulă, de 4 ani; e) învățământul postliceal, inclusiv prin învățământul terțiar nonuniversitar, cu durată între 1 și 3 ani. (2) Prin excepție de la prevederile alin. (1) lit. d), în cazul învățământului liceal tehnologic, beneficiarii primari au dreptul de a primi diplomă de absolvire după 3 ani și pot participa la examenul de certificare a calificării profesionale. În urma promovării acestui examen, absolvenții primesc certificat de calificare profesională corespunzător nivelului 3. (3) Prin excepție de la prevederile alin. (1) lit. d), în cazul învățământului liceal, organizat la forma cu frecvență redusă, respectiv la forma cu frecvență seral, durata învățământului este de 5 ani. (4) Prin excepție de la prevederile alin. (1), în cazul alternativelor educaționale, durata fiecărui nivel de învățământ este aprobată prin ordinul ministrului educației de funcționare a alternativei."
    },
    {
      article: 16,
      title: "Personalitatea juridică a unităților de stat",
      duration: "7 min",
      focus: "praguri numerice · excepții · structuri · zone izolate · noutatea din 2026",
      narration: "Articolul 16 stabilește când unitățile de învățământ de stat au personalitate juridică. Pragurile generale sunt următoarele: minimum 500 de elevi; minimum 500 de elevi, preșcolari și sau antepreșcolari; minimum 250 de preșcolari și sau antepreșcolari; minimum 200 de antepreșcolari; minimum 300 de elevi pentru unitățile postliceale; și minimum 50 de elevi sau 50 de elevi și sau preșcolari pentru învățământul special.\n\nDacă într-o unitate administrativ-teritorială numărul total al beneficiarilor nu atinge pragurile, se organizează o singură unitate cu personalitate juridică.\n\nExistă excepții care permit funcționarea cu efective mai mici. Acestea privesc liceele vocaționale cu profil pedagogic, artistic sau sportiv; unitățile cu profil teologic, la cererea cultelor recunoscute; unitățile de învățământ special, la cererea părinților sau reprezentanților legali; și unitățile din sistemul de apărare, ordine publică și securitate națională, la cererea instituției de resort.\n\nO noutate intrată în vigoare în 2026 este alineatul 4 indice 1. Pot funcționa cu personalitate juridică și cu efective mai mici liceele tehnologice cu profil preponderent agricol și silvic, precum și liceele care școlarizează peste 75 la sută dintre elevi în sistem dual.\n\nAutoritățile administrației publice locale, pe baza avizului conform al direcției județene, aprobă organizarea, funcționarea și, după caz, desființarea structurilor fără personalitate juridică. Copiii și elevii din zone izolate, unde nu pot fi organizate structuri, au dreptul la un orar adaptat posibilităților de deplasare la cea mai apropiată unitate.\n\nDacă într-o unitate administrativ-teritorială funcționează mai multe școli cu predare în română sau într-o limbă a minorităților, cel puțin una pentru fiecare limbă de predare are personalitate juridică, chiar cu efective mai mici, potrivit metodologiei. Unitățile gimnaziale sau liceale unice într-un municipiu, oraș ori comună funcționează cu personalitate juridică indiferent de efectiv. Pentru memorare separați regula numerică de excepții și rețineți noutatea: agricol, silvic și peste 75 la sută dual.",
      remember: [
        "Pragul general principal este 500; postliceal 300; special 50.",
        "Art. 16 conține numeroase excepții pentru unități cu efective mai mici.",
        "Din 2026: liceele predominant agricole/silvice și cele cu peste 75% elevi în dual pot funcționa sub prag."
      ],
      questions: [
        {
          prompt: "Care este pragul prevăzut pentru o unitate de învățământ postliceal cu personalitate juridică?",
          options: ["Minimum 50 de elevi", "Minimum 200 de elevi", "Minimum 300 de elevi", "Minimum 500 de elevi"],
          correct: 2,
          explanation: "Art. 16 alin. (1) lit. e) stabilește minimum 300 de elevi pentru unitățile postliceale."
        },
        {
          prompt: "Ce noutate a fost introdusă la art. 16 prin reglementarea din 2026?",
          options: [
            "Toate liceele pot funcționa fără un prag minim",
            "Liceele predominant agricole/silvice și cele cu peste 75% elevi în dual pot avea personalitate juridică sub prag",
            "Școlile particulare devin automat unități de stat",
            "Pragul tuturor unităților a fost redus la 50 de elevi"
          ],
          correct: 1,
          explanation: "Alin. (4¹), introdus prin OUG nr. 1/2026 și aprobat prin Legea nr. 51/2026, prevede exact această excepție."
        },
        {
          prompt: "Ce regulă se aplică unei unități gimnaziale sau liceale unice în municipiu, oraș ori comună?",
          options: [
            "Se desființează dacă are sub 500 de elevi",
            "Funcționează cu personalitate juridică indiferent de efectiv",
            "Poate funcționa numai ca structură fără personalitate juridică",
            "Are nevoie de minimum 300 de elevi"
          ],
          correct: 1,
          explanation: "Art. 16 alin. (9) protejează unitatea gimnazială sau liceală unică, indiferent de efectiv."
        }
      ],
      legalText: "(1) Unitățile de învățământ de stat au personalitate juridică, dacă se organizează și funcționează, după caz, astfel: a) cu minimum 500 de elevi; b) cu minimum 500 de elevi, preșcolari și/sau antepreșcolari; c) cu minimum 250 de preșcolari și/sau antepreșcolari; d) cu minimum 200 de antepreșcolari; e) cu minimum 300 de elevi, în cazul unităților de învățământ postliceal; f) cu minimum 50 de elevi sau minimum 50 de elevi și/sau preșcolari, în cazul unităților de învățământ special. (2) Prin excepție de la prevederile alin. (1), în unitățile administrativ-teritoriale în care numărul total al beneficiarilor primari nu se încadrează în prevederile alin. (1), se organizează o singură unitate de învățământ cu personalitate juridică. (3) Prin excepție de la prevederile alin. (1), unitățile de învățământ liceal care școlarizează pe filiera vocațională cu profil pedagogic, profil artistic sau profil sportiv pot funcționa cu personalitate juridică și cu efective mai mici de elevi. (4) Prin excepție de la prevederile alin. (1), unitățile de învățământ care școlarizează pe filiera vocațională cu profil teologic, la cererea cultelor recunoscute de stat, precum și unitățile de învățământ special, la cererea părinților/reprezentanților legali, pot funcționa cu personalitate juridică și cu efective mai mici de elevi. (4¹) Prin excepție de la prevederile alin. (1), liceele tehnologice cu profil preponderent agricol și silvic, precum și liceele care școlarizează peste 75% din numărul de elevi în sistem dual pot funcționa cu personalitate juridică și cu efective mai mici de elevi. (5) Prin excepție de la prevederile alin. (1), unitățile de învățământ preuniversitar din sistemul de apărare, ordine publică și securitate națională, la cererea ministerului/instituției de resort, pot funcționa cu efective mai mici de elevi și cu menținerea personalității juridice. (6) Autoritățile administrației publice locale, în baza avizului conform al DJIP/DMBIP, aprobă organizarea, funcționarea și, după caz, desființarea unor structuri ale unității de învățământ, fără personalitate juridică. (7) Antepreșcolarii, preșcolarii și elevii din zonele izolate, în care nu pot fi organizate structuri de învățământ, au dreptul la orar adaptat posibilității de deplasare a acestora la unitatea de învățământ preuniversitar cea mai apropiată, cu respectarea interesului superior al copilului/elevului. (8) Pe raza unei unități administrativ-teritoriale unde funcționează mai multe unități de învățământ cu predare în limba română sau în limba unei minorități naționale, cel puțin una dintre acestea, pentru fiecare limbă de predare, are personalitate juridică și cu efective mai mici de elevi, în conformitate cu o metodologie aprobată prin ordin al ministrului educației. (9) Prin excepție de la prevederile alin. (1), unitățile de învățământ de nivel gimnazial sau liceal, cu predare în limba română sau cu predare în limbile minorităților naționale, unice în municipiu, oraș sau comună, funcționează cu personalitate juridică indiferent de efectivul de elevi."
    },
    {
      article: 17,
      title: "Formele de organizare și situațiile speciale",
      duration: "5 min",
      focus: "zi · seral · frecvență redusă · vârsta clasei · abandon · domiciliu · detenție",
      narration: "Articolul 17 enumeră trei forme de organizare a învățământului preuniversitar: învățământ cu frecvență zi, învățământ cu frecvență seral și învățământ cu frecvență redusă. Frecvența se referă la prezența în spațiul școlar.\n\nRegula este că învățământul obligatoriu se desfășoară cu frecvență. Pentru persoanele care depășesc vârsta clasei cu mai mult de 3 ani în primar, cu mai mult de 4 ani în gimnaziu sau cu mai mult de 5 ani în liceu, învățământul obligatoriu se poate organiza și cu frecvență redusă, conform metodologiei aprobate prin ordin al ministrului, ori prin programul A doua șansă.\n\nDacă un elev nu a depășit aceste limite de vârstă, dar se află în abandon școlar sau în risc major de abandon, unitatea trebuie să dezvolte măsuri prioritare de intervenție cu sprijinul partenerilor locali, județeni, naționali și internaționali.\n\nDin motive legate de sănătatea preșcolarului sau elevului, învățământul cu frecvență se poate organiza la domiciliu ori în spital. Pentru persoanele private de libertate, învățământul cu frecvență se desfășoară în penitenciare, centre educative și centre de detenție. Rețineți pragurile de vârstă în succesiune: 3 ani pentru primar, 4 pentru gimnaziu și 5 pentru liceu.",
      remember: [
        "Formele sunt: frecvență zi, frecvență seral și frecvență redusă.",
        "Pragurile pentru depășirea vârstei clasei sunt 3–4–5 ani: primar–gimnazial–liceal.",
        "Din motive de sănătate, frecvența se poate organiza la domiciliu sau în spital."
      ],
      questions: [
        {
          prompt: "Care sunt formele de organizare prevăzute de art. 17?",
          options: [
            "Zi, online și hibrid",
            "Frecvență zi, frecvență seral și frecvență redusă",
            "Public, particular și confesional",
            "Primar, gimnazial și liceal"
          ],
          correct: 1,
          explanation: "Acestea sunt cele trei forme enumerate la alin. (1)."
        },
        {
          prompt: "Cu cât trebuie să fie depășită vârsta clasei în gimnaziu pentru ca învățământul obligatoriu să poată fi organizat cu frecvență redusă?",
          options: ["Cu mai mult de 2 ani", "Cu mai mult de 3 ani", "Cu mai mult de 4 ani", "Cu mai mult de 5 ani"],
          correct: 2,
          explanation: "Succesiunea este: peste 3 ani la primar, peste 4 ani la gimnaziu și peste 5 ani la liceu."
        },
        {
          prompt: "Unde se poate organiza învățământul cu frecvență din motive legate de sănătatea elevului?",
          options: ["Numai online", "La domiciliu sau în spital", "Numai într-o unitate specială", "Exclusiv la sediul CJRAE"],
          correct: 1,
          explanation: "Art. 17 alin. (4) permite organizarea la domiciliu sau, după caz, în spital."
        }
      ],
      legalText: "(1) Formele de organizare a învățământului preuniversitar sunt: învățământ cu frecvență zi, învățământ cu frecvență seral și învățământ cu frecvență redusă. Frecvența se referă la prezența în spațiul școlar. (2) Învățământul obligatoriu este învățământ cu frecvență. Pentru persoanele care au depășit cu mai mult de 3 ani vârsta clasei în învățământul primar, cu mai mult de 4 ani vârsta clasei în învățământul gimnazial, respectiv cu mai mult de 5 ani vârsta clasei în învățământul liceal, învățământul obligatoriu se poate organiza și în forma de învățământ cu frecvență redusă, în conformitate cu prevederile metodologiei aprobate prin ordin al ministrului educației sau prin programul «A doua șansă». (3) În cazul elevilor care nu au depășit vârsta clasei conform alin. (2), dar care se află în situație de abandon școlar sau în risc major de abandon școlar, unitățile de învățământ vor dezvolta măsuri prioritare de intervenție, cu sprijinul partenerilor de la nivel local, județean, național și internațional. (4) În situații care țin de starea de sănătate a preșcolarului/elevului, învățământul cu frecvență se poate organiza la domiciliu sau, după caz, în spital, conform dispozițiilor capitolului V secțiunea a 3-a «Școala din spital». (5) În situația persoanelor private de libertate, învățământul cu frecvență se realizează în penitenciare, centre educative și de detenție, conform dispozițiilor capitolului IV secțiunea a 11-a «Învățământul din penitenciare, centrele educative și de detenție»."
    },
    {
      article: 18,
      title: "Predarea în spațiul școlar, online și hibrid",
      duration: "3 min",
      focus: "regula spațiului școlar · situații excepționale · perioadă determinată · metodologie",
      narration: "Articolul 18 stabilește mai întâi regula: activitățile de predare, învățare și evaluare dintr-o unitate aflată în rețeaua școlară se desfășoară, de regulă, în spațiul școlar.\n\nPentru garantarea dreptului fundamental la educație, activitățile se pot desfășura și online sau hibrid, pentru o perioadă determinată. Legea indică starea de urgență, starea de alertă și starea de asediu, dar permite această soluție și ori de câte ori Ministerul Educației dispune astfel. În această ultimă construcție, desfășurarea online sau hibrid are loc la cererea unității de învățământ, cu avizul direcției județene sau al direcției municipiului București.\n\nMetodologia de desfășurare a activităților online sau hibrid se aprobă prin ordin al ministrului educației. Rețineți opoziția simplă: regula este spațiul școlar; excepția este online sau hibrid, temporar și în condițiile stabilite de lege.",
      remember: [
        "Regula: predarea, învățarea și evaluarea se desfășoară în spațiul școlar.",
        "Online sau hibrid se poate organiza pentru o perioadă determinată.",
        "Metodologia se aprobă prin ordin al ministrului educației."
      ],
      questions: [
        {
          prompt: "Unde se desfășoară, de regulă, activitățile de predare, învățare și evaluare?",
          options: ["Exclusiv online", "În spațiul școlar", "În orice spațiu ales de elev", "La sediul autorității locale"],
          correct: 1,
          explanation: "Art. 18 alin. (1) stabilește ca regulă desfășurarea în spațiul școlar."
        },
        {
          prompt: "Pentru ce durată pot fi desfășurate activitățile online sau hibrid în condițiile art. 18?",
          options: ["Nelimitat", "Pentru un an calendaristic", "Pentru o perioadă determinată", "Numai pentru o zi"],
          correct: 2,
          explanation: "Legea precizează expres caracterul determinat al perioadei."
        },
        {
          prompt: "Prin ce act se aprobă metodologia activităților online sau hibrid?",
          options: ["Prin hotărârea consiliului local", "Prin ordin al ministrului educației", "Prin decizia directorului", "Prin regulamentul fiecărei clase"],
          correct: 1,
          explanation: "Art. 18 alin. (3) atribuie aprobarea metodologiei ministrului educației, prin ordin."
        }
      ],
      legalText: "(1) Activitățile de predare, învățare și evaluare din cadrul unei unități de învățământ din rețeaua școlară se desfășoară, de regulă, în spațiul școlar. (2) Pentru asigurarea exercitării dreptului fundamental la educație, în situația în care se instituie starea de urgență, starea de alertă sau starea de asediu sau ori de câte ori Ministerul Educației dispune astfel, la cererea unității de învățământ preuniversitar, cu avizul DJIP/DMBIP, activitățile de predare, învățare și evaluare se pot desfășura și în sistem online sau hibrid, pentru o perioadă determinată. (3) Metodologia privind desfășurarea activităților în sistem online sau hibrid în unitățile de învățământ se aprobă prin ordin al ministrului educației."
    }
  );
})();
