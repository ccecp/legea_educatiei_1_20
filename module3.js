"use strict";

(() => {
  const DATA = window.LEGE_DATA;

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–29: verificare 11.08.2026";
  DATA.modules.push({
    id: 3,
    title: "Rețeaua școlară din învățământul preuniversitar",
    articles: "19–29",
    chapter: "Capitolul III",
    startArticle: 19,
    endArticle: 29
  });

  DATA.lessons.push(
    {
      article: 19,
      title: "Rețeaua școlară: organizare și reorganizare",
      duration: "6 min",
      focus: "componență · autorizare · reorganizare · program · infrastructură",
      narration: `Articolul 19 este articolul central al rețelei școlare și trebuie învățat pe blocuri. Mai întâi, rețeaua cuprinde unitățile autorizate provizoriu sau acreditate, unitățile preuniversitare înființate în structura ori subordinea instituțiilor de învățământ superior și unitățile de educație extrașcolară: cluburi sportive școlare, palate și cluburi ale copiilor, Palatul Național al Copiilor și centrele de excelență.

Înființarea unei unități are două etape: autorizarea de funcționare provizorie și, după îndeplinirea condițiilor, acreditarea. Ordinele ministrului se comunică autorităților locale în 5 zile, pentru actualizarea rețelei. Prin ordinul de autorizare se înființează unitatea și i se acordă personalitate juridică: de drept public pentru unitățile de stat și de drept privat și utilitate publică pentru cele particulare sau confesionale.

Rețeaua unităților de stat, particulare și confesionale se organizează de autoritățile locale, cu aviz conform. Pentru învățământul special intervine consiliul județean sau autoritatea competentă din București, după consultarea partenerilor sociali și cu avizul conform al ministerului. Rețeaua se publică la începutul fiecărui an calendaristic pentru anul școlar următor. Cifra de școlarizare a învățământului de stat se aprobă prin hotărâre a Guvernului cu cel puțin 6 luni înainte de începutul anului școlar. Dacă autoritatea locală nu adoptă hotărârea privind rețeaua, ministrul educației emite ordinul de aprobare până la 1 februarie.

Reorganizarea se poate realiza prin fuziune, absorbție, contopire sau divizare. Ea se aprobă prin ordin al ministrului și se finalizează cel târziu până la începutul noului an școlar. Unitățile rezultate intră de drept în rețea și solicită evaluarea periodică în termen de un an.

Procesul educațional se desfășoară în maximum două schimburi. Pentru clasele pregătitoare, I și a II-a, cursurile nu încep înainte de ora 8 și nu se termină după ora 14. Ora are 45 de minute în primar și în învățământul special, respectiv 50 de minute în gimnazial, liceal și postliceal, cu pauzele stabilite de lege. În situații speciale, durata orelor și a pauzelor poate fi modificată temporar la propunerea motivată a directorului, prin hotărârea consiliului de administrație și cu aprobarea structurii județene competente.

Articolul prevede și resursele care trebuie asigurate, după caz: cabinete medicale și stomatologice, cameră-resursă, bibliotecă, teren de sport cu vestiare, grupuri sanitare, laborator ȘTIAM, cabinete de logopedie, terapii și consiliere, internet și rețea Wi-Fi securizată. Toate unitățile din rețea sunt supuse acreditării și evaluării periodice. Dacă autorizarea sau acreditarea este retrasă, autoritățile locale și structura județeană trebuie să asigure continuitatea școlarizării, respectând interesul superior al copilului. În cazul neîndeplinirii obligațiilor de finanțare de către autoritatea locală, unitatea poate fi preluată, cu acordul părților, de consiliul județean sau de Consiliul General al Municipiului București pentru cel puțin 5 ani școlari.

Formula de memorare este: componență, două etape, organizare și publicare, reorganizare, maximum două schimburi, infrastructură și continuitatea școlarizării.`,
      remember: [
        "Înființarea are două etape: autorizare provizorie, apoi acreditare.",
        "Dacă autoritatea locală nu aprobă rețeaua, ministrul emite ordinul până la 1 februarie.",
        "Procesul educațional se desfășoară în maximum două schimburi."
      ],
      questions: [
        {
          prompt: "Care sunt cele două etape ale înființării unei unități de învățământ?",
          options: [
            "Avizarea și evaluarea anuală",
            "Autorizarea de funcționare provizorie și acreditarea",
            "Înregistrarea fiscală și finanțarea",
            "Inspecția generală și reorganizarea"
          ],
          correct: 1,
          explanation: "Art. 19 stabilește mai întâi autorizarea provizorie, apoi acreditarea unității care îndeplinește condițiile."
        },
        {
          prompt: "Ce se întâmplă dacă autoritatea locală nu emite hotărârea privind organizarea rețelei școlare?",
          options: [
            "Rețeaua anului anterior se prelungește automat fără act",
            "Consiliul profesoral aprobă rețeaua",
            "Ministrul educației emite până la 1 februarie un ordin de aprobare",
            "Unitățile își stabilesc separat rețeaua"
          ],
          correct: 2,
          explanation: "În această situație, ministrul educației aprobă rețeaua prin ordin până la 1 februarie."
        },
        {
          prompt: "În câte schimburi se poate desfășura cel mult procesul educațional?",
          options: ["Un schimb", "Două schimburi", "Trei schimburi", "Numărul nu este limitat"],
          correct: 1,
          explanation: "Art. 19 alin. (17) stabilește maximum două schimburi."
        }
      ],
      legalText: `Art. 19 — (1) Rețeaua școlară cuprinde totalitatea: a) unităților de învățământ autorizate să funcționeze provizoriu, precum și a unităților de învățământ acreditate; b) unităților de învățământ preuniversitar, autorizate să funcționeze provizoriu sau acreditate, înființate în structura sau în subordinea instituțiilor de învățământ superior; c) unităților de educație extrașcolară din sistemul național de învățământ: cluburile sportive școlare, palatele și cluburile copiilor, Palatul Național al Copiilor din București și centrele județene de excelență/Centrul Municipiului București pentru Excelență.

(2) Procesul de înființare a unei unități de învățământ preuniversitar cuprinde două etape: autorizarea de funcționare provizorie și acreditarea.

(3) Ordinele ministrului educației emise în urma finalizării procesului de autorizare provizorie/acreditare se comunică, în termen de 5 zile, autorităților publice locale, în vederea actualizării rețelei școlare.

(4) Intenția de a deveni organizație furnizoare de educație se exprimă, după caz, prin hotărârea autorității publice locale, hotărârea persoanei juridice private, hotărârea conducerii cultului recunoscut oficial de stat sau ordin al ministrului educației în situațiile prevăzute de lege.

(5) Prin ordinul de autorizare provizorie se înființează și se acordă personalitate juridică unității: de drept privat și de utilitate publică pentru unitățile particulare și confesionale, respectiv de drept public pentru unitățile de stat.

(6) Rețeaua școlară se organizează: a) de autoritățile administrației publice locale, cu avizul conform al structurii județene competente, pentru unitățile de stat, particulare și confesionale; b) de consiliul județean sau autoritățile competente din București, după consultarea partenerilor sociali și cu avizul conform al Ministerului Educației, pentru învățământul special și situațiile prevăzute de lege; c) prin regulament aprobat prin ordin al ministrului, pentru unitățile din structura ori subordinea instituțiilor de învățământ superior și pentru unitățile de educație extrașcolară.

(7)-(8) Autoritățile competente publică anual rețeaua unităților autorizate sau acreditate. Rețeaua se dă publicității la începutul fiecărui an calendaristic pentru anul școlar următor. Cifra de școlarizare a învățământului de stat se aprobă prin hotărâre a Guvernului cu cel puțin 6 luni înainte de începerea anului școlar; pentru unitățile particulare și confesionale, cifra se aprobă de consiliul de administrație în limita capacității de școlarizare stabilite de agenția de calitate.

(9) Dacă autoritățile locale nu emit hotărârea privind organizarea rețelei, ministrul educației emite, până la 1 februarie, ordinul de aprobare a rețelei pentru unitatea administrativ-teritorială în cauză.

(10) Unităților de stat care școlarizează nivelurile preșcolar și primar li se arondează anual o circumscripție, cu excepțiile prevăzute de lege.

(11)-(16) Unitățile pot fi reorganizate, în cazuri justificate, prin fuziune, absorbție, contopire sau divizare. Reorganizarea se aprobă prin ordin al ministrului, se finalizează cel târziu până la începutul noului an școlar, iar unitățile rezultate intră de drept în rețea și solicită evaluarea periodică în termen de un an.

(17) Procesul educațional se desfășoară în maximum două schimburi. Cursurile claselor pregătitoare, I și a II-a nu încep înainte de ora 8.00 și nu se termină după ora 14.00. Durata orelor și a pauzelor este cea stabilită de lege pentru fiecare nivel; în situații speciale poate fi modificată temporar, la propunerea motivată a directorului, prin hotărârea consiliului de administrație și cu aprobarea structurii județene competente.

(18) Pot funcționa grupe sau clase în alternative educaționale integrate.

(19) În fiecare unitate se asigură, după caz, cabinet medical și stomatologic, cameră-resursă, bibliotecă, teren de sport cu vestiare, grupuri sanitare, laborator ȘTIAM, cabinete de logopedie, terapii și consiliere, acces la internet și rețea Wi-Fi securizată.

(20) Pot funcționa clase pe bază de contracte de parteneriat între unități de stat și particulare acreditate, între unități și operatori economici ori între instituții din țară și străinătate, potrivit metodologiei.

(21)-(24) Toate unitățile din rețea sunt supuse acreditării și evaluării periodice. În cazul retragerii acreditării sau autorizării, autoritățile competente asigură continuitatea școlarizării. Pentru specializările unice la nivel național, procesul se poate desfășura în lichidare până la absolvire, cu examene la alte unități acreditate.

(25)-(29) Dacă autoritatea locală nu asigură finanțarea și este afectat interesul superior al beneficiarului primar, unitatea poate fi preluată, cu acordul părților, pentru cel puțin 5 ani școlari, de consiliul județean sau de Consiliul General al Municipiului București, în condițiile legii și cu monitorizare specială.

(30) Unitățile de învățământ pot prelua prin reorganizare sau pot înființa, ca structuri arondate, unități de educație extrașcolară.

(31) Divizarea se poate realiza pe nivel, limbă de predare, formă, locație, specializare/calificare profesională sau program de studii autorizat/acreditat.`
    },
    {
      article: 20,
      title: "Programul „A doua șansă”",
      duration: "2 min",
      focus: "gratuitate · durată flexibilă · înscriere · furnizori",
      narration: `Articolul 20 reglementează programul „A doua șansă”. Ministerul Educației, prin structurile județene, în colaborare cu autoritățile locale, mediul economic, cultele recunoscute și organizațiile neguvernamentale, poate organiza aceste programe gratuit și cu durată flexibilă.

Programul poate fi organizat pentru învățământul primar, gimnazial și liceal. Se adresează persoanelor care au depășit vârsta corespunzătoare clasei, indiferent dacă au mai fost sau nu înscrise în sistem și indiferent de momentul sau motivele abandonului școlar.

Înscrierea se face printr-o solicitare transmisă online ori depusă la unitatea de învățământ din localitatea de domiciliu sau la cea mai apropiată unitate. Programul este organizat de unități acreditate ori autorizate sau de alte entități, dar numai în parteneriat cu o unitate acreditată ori autorizată. Metodologia se aprobă prin ordin al ministrului educației.

Rețineți: gratuit, flexibil, pentru primar, gimnazial și liceal, cu acces fără condiționare de istoricul școlar.`,
      remember: [
        "Programul este gratuit și are durată flexibilă.",
        "Se adresează persoanelor care au depășit vârsta corespunzătoare clasei.",
        "Alte entități îl pot organiza numai în parteneriat cu o unitate autorizată sau acreditată."
      ],
      questions: [
        {
          prompt: "Cum sunt organizate programele «A doua șansă» din perspectiva costului și duratei?",
          options: ["Cu taxă și durată fixă", "Gratuit și cu durată flexibilă", "Gratuit doar la primar", "Cu taxă stabilită local"],
          correct: 1,
          explanation: "Legea precizează expres regimul gratuit și durata flexibilă."
        },
        {
          prompt: "Pentru ce niveluri poate fi organizat programul?",
          options: ["Numai primar", "Primar și gimnazial", "Primar, gimnazial și liceal", "Numai liceal"],
          correct: 2,
          explanation: "Articolul include toate cele trei niveluri: primar, gimnazial și liceal."
        },
        {
          prompt: "Cum poate fi transmisă solicitarea de înscriere?",
          options: ["Exclusiv prin poștă", "Numai la minister", "Online sau prin depunere la unitatea din localitatea de domiciliu ori la cea mai apropiată unitate", "Numai prin angajator"],
          correct: 2,
          explanation: "Sunt prevăzute atât transmiterea online, cât și depunerea fizică la o unitate accesibilă."
        }
      ],
      legalText: `Art. 20 — (1) Ministerul Educației, prin structurile județene competente, în colaborare cu autoritățile administrației publice locale, mediul economic, cultele recunoscute de lege și organizațiile neguvernamentale, poate organiza, în regim gratuit și cu durată flexibilă, programe de tip „A doua șansă” pentru învățământul primar, gimnazial și liceal, pentru persoanele care au depășit vârsta corespunzătoare clasei, indiferent dacă au mai fost sau nu înscrise în sistem ori de momentul și motivele abandonului școlar. Înscrierea se face prin solicitare transmisă online sau depusă la unitatea din localitatea de domiciliu ori la cea mai apropiată unitate.

(2) Programele „A doua șansă” se organizează de unități acreditate/autorizate sau de alte entități în parteneriat cu o unitate acreditată/autorizată, conform metodologiei aprobate prin ordin al ministrului educației.`
    },
    {
      article: 21,
      title: "Consorțiile școlare",
      duration: "4 min",
      focus: "asociere · avize · teritoriu · resurse comune",
      narration: `Articolul 21 reglementează consorțiile școlare, create pentru asigurarea calității educației și optimizarea gestionării resurselor. Ele sunt structuri asociative fără personalitate juridică, formate din două sau mai multe unități de învățământ preuniversitar.

Consorțiul se constituie în baza unui contract de parteneriat, după modelul stabilit prin metodologia aprobată prin ordin al ministrului. Unitățile solicită avizul de oportunitate al structurii județene competente și avizul de înființare al autorităților locale din raza fiecărei unități.

Unitățile membre trebuie să funcționeze în același județ, în municipiul București sau în județe limitrofe. Înaintea constituirii se analizează accesul dintre unități, distanțele, căile de acces, transportul public și transportul școlar, pentru ca elevii și cadrele didactice să poată realiza activități comune.

Consorțiul asigură prioritate la mobilitatea personalului între unitățile membre, utilizarea în comun a resurselor materiale, lărgirea oportunităților de învățare, sprijin pentru elevii în risc de excluziune, recunoașterea reciprocă a rezultatelor învățării și participarea la proiecte europene, inclusiv digitale și inovative.

Retragerea sau excluderea unui membru se reglementează prin contract; consorțiul poate fi desființat prin acordul părților. Ministerul trebuie să stimuleze participarea unităților din medii defavorizate, montane, rurale sau izolate.`,
      remember: [
        "Consorțiul școlar nu are personalitate juridică și are minimum două unități membre.",
        "Sunt necesare avizul de oportunitate și avizul autorităților locale competente.",
        "Membrii funcționează în același județ/București sau în județe limitrofe."
      ],
      questions: [
        {
          prompt: "Ce natură juridică are consorțiul școlar?",
          options: ["Instituție publică autonomă", "Structură asociativă fără personalitate juridică", "Societate comercială", "Autoritate administrativă"],
          correct: 1,
          explanation: "Consorțiul este o structură asociativă fără personalitate juridică."
        },
        {
          prompt: "Unde trebuie să funcționeze unitățile care constituie un consorțiu școlar?",
          options: ["Oriunde în țară", "Exclusiv în aceeași localitate", "În același județ/București sau în județe limitrofe", "Exclusiv în mediul urban"],
          correct: 2,
          explanation: "Legea permite același județ, municipiul București sau județe limitrofe."
        },
        {
          prompt: "Care este unul dintre efectele consorțiului școlar?",
          options: ["Desființarea personalității juridice a membrilor", "Utilizarea în comun a resurselor materiale", "Interzicerea mobilității personalului", "Limitarea proiectelor europene"],
          correct: 1,
          explanation: "Utilizarea comună a resurselor este un avantaj expres prevăzut de art. 21."
        }
      ],
      legalText: `Art. 21 — (1) Unitățile de învățământ de stat, particulare și confesionale și autoritățile administrației publice locale pot decide înființarea consorțiilor școlare, pentru asigurarea calității educației și optimizarea gestionării resurselor.

(2) Consorțiile școlare sunt structuri asociative, fără personalitate juridică, constituite din două sau mai multe unități de învățământ preuniversitar.

(3) Se înființează în baza unui contract de parteneriat, conform modelului prevăzut în metodologia aprobată prin ordin al ministrului educației.

(4) Unitățile solicită avizul de oportunitate al structurii județene competente și avizul de înființare al autorităților locale din raza fiecărei unități.

(5) Unitățile membre funcționează în același județ/municipiul București sau în județe limitrofe; se analizează posibilitatea activităților comune, accesul, distanța, căile de acces și transportul.

(6) Consorțiile asigură: prioritate la mobilitatea personalului; folosirea comună a resurselor; oportunități de învățare și sprijin pentru elevii în risc; recunoașterea reciprocă a rezultatelor; participarea la proiecte și programe ale Uniunii Europene.

(7) Retragerea sau excluderea se reglementează prin contract, iar desființarea se poate face prin acordul părților.

(8) Cadrul specific se reglementează prin metodologia aprobată prin ordin al ministrului educației.

(9) Ministerul Educației creează mecanisme pentru stimularea participării unităților din medii defavorizate, montane, rurale și/sau izolate.`
    },
    {
      article: 22,
      title: "Consorțiile de învățământ dual",
      duration: "3 min",
      focus: "parteneri · 15 ani · campusuri · niveluri · evaluare",
      narration: `Articolul 22 reglementează consorțiile de învățământ dual. Nucleul minim este format din licee tehnologice de stat și/sau particulare ori confesionale acreditate, autorități publice locale și operatori economici. Pot participa și instituții de învățământ superior acreditate, precum și alți parteneri relevanți pentru pregătirea profesională.

Partenerii încheie un acord pe cel puțin 15 ani. Consorțiul are denumire proprie, este o formă de asociere fără scop patrimonial și urmărește dezvoltarea învățământului profesional dual pentru calificări cerute pe piața muncii.

Consorțiile stau la baza centrelor sau campusurilor profesionale integrate, care deservesc atât învățământul liceal dual, cât și învățământul universitar dual. Ele oferă programe comprehensive de formare la nivelurile de bază, ISCED sau CNC 3–5, și la nivelurile avansate, ISCED sau CNC 6–8. Pentru infrastructură pot fi încheiate parteneriate public-private, în vederea atragerii finanțărilor nerambursabile.

Îndeplinirea obligațiilor partenerilor se evaluează o dată la cel mult 5 ani. Modul de funcționare, coordonare și control este reglementat prin ordin al ministrului educației.`,
      remember: [
        "Partenerii minimi: licee tehnologice, autorități locale și operatori economici.",
        "Acordul de parteneriat are o durată de cel puțin 15 ani.",
        "Îndeplinirea obligațiilor se evaluează cel puțin o dată la 5 ani."
      ],
      questions: [
        {
          prompt: "Care este durata minimă a acordului de parteneriat pentru consorțiul dual?",
          options: ["5 ani", "10 ani", "15 ani", "20 de ani"],
          correct: 2,
          explanation: "Legea stabilește o durată de cel puțin 15 ani."
        },
        {
          prompt: "Ce tipuri de entități formează cel puțin nucleul consorțiului dual?",
          options: ["Doar universități", "Licee tehnologice, autorități locale și operatori economici", "Doar firme și ONG-uri", "Exclusiv licee particulare"],
          correct: 1,
          explanation: "Aceste trei categorii sunt prevăzute ca nucleu minim."
        },
        {
          prompt: "La ce interval maxim se evaluează îndeplinirea obligațiilor asumate?",
          options: ["Anual", "La cel mult 3 ani", "La cel mult 5 ani", "Numai la finalul celor 15 ani"],
          correct: 2,
          explanation: "Evaluarea are loc o dată la cel mult 5 ani."
        }
      ],
      legalText: `Art. 22 — (1) În sistemul de educație se pot constitui consorții de învățământ dual formate cel puțin din licee tehnologice de stat și/sau particulare și confesionale acreditate, autorități publice locale și operatori economici. Pot fi incluse instituții de învățământ superior acreditate și alți parteneri relevanți.

(2) Partenerii încheie un acord de cel puțin 15 ani, prin care se înființează consorțiul cu denumire proprie, formă de asociere fără scop patrimonial, pentru dezvoltarea învățământului profesional dual în calificări cerute pe piața muncii.

(3) Funcționarea, coordonarea, conducerea și controlul se reglementează prin ordin al ministrului educației.

(4) Consorțiile stau la baza centrelor/campusurilor profesionale integrate pentru învățământul liceal dual și universitar dual.

(5) Oferă programe comprehensive de formare la nivelurile ISCED/CNC 3–5 și 6–8.

(6) Pot încheia parteneriate public-private pentru atragerea finanțărilor nerambursabile.

(7) Îndeplinirea obligațiilor asumate se evaluează o dată la cel mult 5 ani, de o comisie stabilită potrivit metodologiei aprobate prin ordin al ministrului.`
    },
    {
      article: 23,
      title: "Formațiunile de studiu și efectivele",
      duration: "7 min",
      focus: "medii și limite · reguli 2025 · excepții · CES · distribuție",
      narration: `Articolul 23 stabilește efectivele formațiunilor de studiu. Valorile actualizate prin Legea nr. 141/2025 sunt importante pentru concurs. La antepreșcolar: grupa mică are în medie 9 copii, între 7 și 11; grupa mijlocie are media 14, între 10 și 17; grupa mare are media 16, între 10 și 22. La preșcolar, grupa are media 17, între 12 și 22. În primar, clasa are media 18, între 12 și 24. În gimnazial, media este 20, între 12 și 28. În liceal, inclusiv dual, media este 23, între 16 și 30. La postliceal, media este 26, între 20 și 32.

În învățământul sportiv și de artă, clasa are media 16, minimum 8 și maximum 24 și poate avea cel mult 4 grupe; grupa are media 7, între 4 și 10. Instruirea practică se desfășoară în grupe de minimum 8 și maximum 15 elevi. Clasele liceale tehnologice pot avea cel mult 3 grupe cu calificări diferite. Pentru învățământul special se mențin efectivele reduse stabilite distinct de lege.

Regula introdusă în 2025 este că, în învățământul obișnuit, formațiunile se constituie astfel încât, pe fiecare nivel, filieră și profil, numărul copiilor sau elevilor să depășească valoarea medie. Ca excepție, într-o unitate cu personalitate juridică poate exista cel mult o formațiune pe nivel, filieră sau profil sub valoarea medie. Pentru învățământul în limbile minorităților și pentru învățământul în limba română din unitățile administrativ-teritoriale în care o minoritate este majoritară, pragul pentru personalitate juridică este 60 la sută din numărul prevăzut de art. 16, iar efectivul formațiunii este 80 la sută din numărul stabilit la alineatul 1.

În situații excepționale, formațiunile pot funcționa cu cel mult 2 beneficiari sub minim și cu cel mult 4 peste maxim, cu aprobarea structurii județene competente, pe baza justificării consiliului de administrație. Pentru fiecare copil sau elev cu CES integrat în învățământul de masă, efectivul maxim al grupei sau clasei se reduce cu 3.

Pentru respectarea desegregării și combaterea discriminării, la începutul nivelului de învățământ elevii sunt distribuiți aleatoriu atunci când există mai multe clase pe an de studiu. În zone izolate geografic sau lingvistic, dacă efectivele primarului ori gimnaziului sunt sub minim și transportul nu poate fi asigurat, se organizează clase simultane potrivit metodologiei.

Pentru memorare, fixați seria principală: primar 18, între 12 și 24; gimnazial 20, între 12 și 28; liceal 23, între 16 și 30; postliceal 26, între 20 și 32.`,
      remember: [
        "Primar 18/12–24; gimnazial 20/12–28; liceal 23/16–30; postliceal 26/20–32.",
        "Excepția generală permite cel mult 2 sub minim și 4 peste maxim, cu aprobare și justificare.",
        "Pentru fiecare elev cu CES integrat, efectivul maxim se diminuează cu 3."
      ],
      questions: [
        {
          prompt: "Care sunt media, minimul și maximul unei clase de liceu, inclusiv dual, după modificarea din 2025?",
          options: ["22, între 15 și 26", "23, între 16 și 30", "25, între 15 și 30", "26, între 20 și 32"],
          correct: 1,
          explanation: "Pentru liceu, valorile actualizate sunt media 23, minimum 16 și maximum 30."
        },
        {
          prompt: "Cu câți beneficiari poate fi depășit efectivul maxim în situații excepționale, cu aprobarea competentă?",
          options: ["Cu cel mult 2", "Cu cel mult 3", "Cu cel mult 4", "Fără limită"],
          correct: 2,
          explanation: "Regula actuală permite cel mult 4 beneficiari peste maxim."
        },
        {
          prompt: "Cum se modifică efectivul maxim pentru fiecare elev cu CES integrat în învățământul de masă?",
          options: ["Crește cu 1", "Se diminuează cu 2", "Se diminuează cu 3", "Nu se modifică"],
          correct: 2,
          explanation: "Pentru fiecare copil/elev cu CES integrat, efectivul maxim se reduce cu 3."
        }
      ],
      legalText: `Art. 23 — Forma consolidată după Legea nr. 141/2025.

(1) Formațiunile de studiu cuprind grupe sau clase: a) antepreșcolar — grupa mică: media 9, minimum 7, maximum 11; grupa mijlocie: media 14, minimum 10, maximum 17; grupa mare: media 16, minimum 10, maximum 22; b) preșcolar: media 17, minimum 12, maximum 22; c) primar: media 18, minimum 12, maximum 24; d) gimnazial: media 20, minimum 12, maximum 28; e) sportiv și de artă: clasa media 16, minimum 8, maximum 24, maximum 4 grupe; grupa media 7, minimum 4, maximum 10; f) liceal, inclusiv dual: media 23, minimum 16, maximum 30; g) instruirea practică: grupe de minimum 8 și maximum 15; h) liceal tehnologic: maximum 3 grupe cu calificări diferite; i) postliceal: media 26, minimum 20, maximum 32; j) învățământ special — efectivele distincte prevăzute de lege; k) tehnologic special pentru deficiențe ușoare/moderate: media 10, minimum 8, maximum 12.

(1^1) În învățământul preuniversitar, altul decât cel militar, cel în limbile minorităților și cel în limba română din unități administrativ-teritoriale în care o minoritate este majoritară, formațiunile se constituie astfel încât, pe fiecare nivel/filieră/profil, numărul copiilor/elevilor să depășească valoarea medie de la alin. (1).

(1^2) Prin excepție, într-o unitate cu personalitate juridică se poate constitui cel mult o formațiune pe nivel/filieră/profil sub valoarea medie.

(1^3) Pentru învățământul în limbile minorităților și cel în limba română din unități administrativ-teritoriale în care o minoritate este majoritară: a) pragul minim pentru personalitate juridică este 60% din numărul prevăzut la art. 16 alin. (1); b) efectivul formațiunii este 80% din numărul stabilit la alin. (1).

(2) Efectivele unităților postliceale militare pot fi stabilite distinct, cu aprobarea eșalonului ierarhic superior.

(3) La profilul teologic, formațiunile pot funcționa sub minim sau peste maxim cu aprobarea ministerului, la propunerea CA și cu avizul episcopiei.

(4)-(5) Pentru învățământul în limba maternă a unei minorități și, în condițiile legii, pentru formațiunile în limba română din zone în care minoritatea este majoritară, pot funcționa efective speciale, cu aprobările și avizele prevăzute de lege.

(6) În situații excepționale, formațiunile pot funcționa cu cel mult 2 beneficiari sub minim și cu cel mult 4 peste maxim, cu aprobarea structurii județene competente, pe baza justificării CA.

(7) Situațiile se comunică structurii județene și autorităților locale pentru finanțare.

(8) Grupele/clasele în care sunt înscriși copii/elevi cu CES orientați pentru învățământul de masă pot funcționa cu efective minime, sub limita legală, la solicitarea CA și cu aprobarea structurii județene.

(9) Pentru fiecare copil/elev cu CES integrat în învățământul de masă, efectivele maxime se diminuează cu 3.

(10) La începutul nivelului de învățământ, formațiunile se constituie prin distribuție aleatorie, dacă există mai multe clase pe an de studiu.

(11) În unități administrativ-teritoriale izolate geografic sau lingvistic ori unde efectivele primarului/gimnaziului sunt sub minim și nu se poate asigura transportul, se organizează clase simultane potrivit metodologiei.`
    },
    {
      article: 24,
      title: "Unitățile-pilot și unitățile de aplicație",
      duration: "3 min",
      focus: "intervenții · practică pedagogică · inițiatori · statut dublu",
      narration: `Articolul 24 distinge între unitățile-pilot și unitățile de aplicație. Unitățile-pilot implementează și evaluează intervenții educaționale pentru fundamentarea politicilor publice. Intervențiile pot include modele curriculare noi, resurse educaționale inovative, modele bilingve și forme alternative de organizare, finanțare și management. Pentru tehnologiile emergente, pot exista laboratoare specializate de securitate cibernetică, tehnologii spațiale sau arhitectură tehnologică.

Unitățile de aplicație organizează practica pedagogică pentru elevii liceelor pedagogice, pentru studenți sau cursanți din programe de formare psihopedagogică, programe universitare pentru cariera didactică, masterat didactic, conversie profesională și alte programe relevante.

Metodologia de înființare și autorizare și regulamentul de funcționare se aprobă prin ordin al ministrului. Pilotarea poate fi inițiată de Ministerul Educației, de o unitate, de un consorțiu școlar sau de structura județeană competentă. Aceeași unitate poate avea simultan statut de unitate-pilot și de unitate de aplicație.`,
      remember: [
        "Unitatea-pilot testează intervenții pentru fundamentarea politicilor publice.",
        "Unitatea de aplicație organizează practica pedagogică.",
        "O unitate poate avea simultan ambele statute."
      ],
      questions: [
        {
          prompt: "Care este scopul principal al unităților-pilot?",
          options: ["Numai pregătirea practică a studenților", "Implementarea și evaluarea intervențiilor pentru fundamentarea politicilor publice", "Acreditarea altor școli", "Organizarea exclusivă a examenelor"],
          correct: 1,
          explanation: "Pilotarea testează și evaluează intervenții educaționale utile politicilor publice."
        },
        {
          prompt: "Cine poate iniția procedura de pilotare?",
          options: ["Numai ministrul", "Numai consiliul local", "Ministerul, unități, consorții școlare sau structura județeană", "Exclusiv universitățile"],
          correct: 2,
          explanation: "Articolul enumeră patru categorii de inițiatori."
        },
        {
          prompt: "Poate aceeași unitate să fie și pilot, și de aplicație?",
          options: ["Nu", "Da", "Numai pentru un semestru", "Numai dacă este particulară"],
          correct: 1,
          explanation: "Art. 24 alin. (6) permite cumularea celor două statute."
        }
      ],
      legalText: `Art. 24 — (1) În sistem funcționează: a) unități-pilot, pentru implementarea și evaluarea intervențiilor educaționale în vederea fundamentării politicilor publice; intervențiile pot include noi modele curriculare, resurse inovative, modele bilingve și forme alternative de organizare, finanțare și management; b) unități de aplicație, pentru organizarea stagiilor de practică pedagogică.

(2) Unitățile-pilot pot include laboratoare specializate pentru tehnologii emergente.

(3) În unitățile de aplicație se desfășoară practica pedagogică pentru elevii liceelor pedagogice și pentru studenții/cursanții programelor relevante pentru cariera didactică.

(4) Metodologia de înființare și autorizare și regulamentul de organizare și funcționare se aprobă prin ordin al ministrului educației.

(5) Pilotarea poate fi inițiată de minister, unități de învățământ, consorții școlare sau structurile județene competente.

(6) O unitate poate avea atât statut de unitate-pilot, cât și de unitate de aplicație.`
    },
    {
      article: 25,
      title: "Rețeaua de școli verzi",
      duration: "2 min",
      focus: "tranziție verde · criterii · statut · metodologie",
      narration: `Articolul 25 creează cadrul pentru rețeaua de școli verzi, în contextul tranziției verzi și inteligente, al Spațiului european al educației și al obiectivelor de dezvoltare durabilă.

Ministerul Educației elaborează cadrul de referință pentru operaționalizarea rețelei. Unitățile care îndeplinesc criteriile necesare dobândesc statutul de „școală verde”.

Modalitățile de selecție, monitorizare și sprijin, precum și metodologia de acordare a statutului se aprobă prin ordin al ministrului educației. Rețineți circuitul: ministerul creează cadrul, unitatea îndeplinește criteriile, statutul se acordă potrivit metodologiei.`,
      remember: [
        "Ministerul elaborează cadrul de referință al rețelei.",
        "Unitatea care îndeplinește criteriile dobândește statutul de școală verde.",
        "Selecția, monitorizarea, sprijinul și acordarea statutului se stabilesc prin ordin."
      ],
      questions: [
        {
          prompt: "Cine elaborează cadrul de referință pentru rețeaua de școli verzi?",
          options: ["Consiliul local", "Ministerul Educației", "Fiecare unitate separat", "Consiliul elevilor"],
          correct: 1,
          explanation: "Responsabilitatea revine Ministerului Educației."
        },
        {
          prompt: "Când dobândește o unitate statutul de «școală verde»?",
          options: ["Automat, la acreditare", "Când îndeplinește criteriile necesare", "După 10 ani de funcționare", "La solicitarea părinților"],
          correct: 1,
          explanation: "Dobândirea statutului este legată de îndeplinirea criteriilor stabilite."
        },
        {
          prompt: "Prin ce act se aprobă metodologia de acordare a statutului?",
          options: ["Hotărâre a consiliului local", "Ordin al ministrului educației", "Decizie a directorului", "Lege separată"],
          correct: 1,
          explanation: "Metodologia este aprobată prin ordin al ministrului educației."
        }
      ],
      legalText: `Art. 25 — (1) În contextul tranziției verzi și inteligente, al dezvoltării Spațiului european al educației și al obiectivelor de dezvoltare durabilă, Ministerul Educației elaborează cadrul de referință pentru operaționalizarea rețelei de școli verzi.

(2) Unitățile care îndeplinesc criteriile necesare integrării în rețea dobândesc statutul de „școală verde”.

(3) Selecția, monitorizarea și sprijinul unităților, precum și metodologia de acordare a statutului se aprobă prin ordin al ministrului educației.`
    },
    {
      article: 26,
      title: "Alternativele educaționale",
      duration: "3 min",
      focus: "aprobare · evaluare · autonomie · formare · acces",
      narration: `Articolul 26 permite funcționarea alternativelor educaționale în învățământul de stat, particular și confesional, la nivel de unități, grupe, clase sau structuri, potrivit metodologiei aprobate prin ordin al ministrului.

Alternativa educațională se aprobă prin ordin al ministrului, la propunerea direcțiilor de specialitate. Autorizarea provizorie, acreditarea și evaluarea periodică se realizează potrivit normelor metodologice aprobate prin ordin, la propunerea agenției responsabile cu asigurarea calității.

Unitățile alternative au autonomie organizatorică și funcțională conform specificului alternativei. Personalului didactic i se recunoaște pregătirea și perfecționarea realizată de organizațiile, asociațiile sau federațiile care gestionează alternativa la nivel național.

Orice cetățean român se poate înscrie și pregăti în toate formele de învățământ alternativ, în limba română, în limbile minorităților sau în limbi de circulație internațională.`,
      remember: [
        "Alternativele pot funcționa în sistemul de stat, particular și confesional.",
        "Aprobarea se face prin ordin al ministrului educației.",
        "Unitățile alternative au autonomie organizatorică și funcțională."
      ],
      questions: [
        {
          prompt: "În ce forme de proprietate pot funcționa alternative educaționale?",
          options: ["Numai în învățământul particular", "Numai în cel de stat", "În învățământul de stat, particular și confesional", "Numai în cel confesional"],
          correct: 2,
          explanation: "Articolul include toate cele trei componente ale sistemului."
        },
        {
          prompt: "Prin ce act se aprobă o alternativă educațională?",
          options: ["Prin ordin al ministrului educației", "Prin decizia directorului", "Prin hotărârea consiliului elevilor", "Prin dispoziția primarului"],
          correct: 0,
          explanation: "Aprobarea se realizează prin ordin al ministrului, la propunerea direcțiilor de specialitate."
        },
        {
          prompt: "Ce tip de autonomie au unitățile de învățământ alternativ?",
          options: ["Numai financiară", "Organizatorică și funcțională", "Legislativă", "Nu au autonomie"],
          correct: 1,
          explanation: "Legea recunoaște autonomia organizatorică și funcțională, conform specificului alternativei."
        }
      ],
      legalText: `Art. 26 — (1) În învățământul de stat, particular și confesional pot funcționa unități, grupe, clase și structuri pe baza alternativelor educaționale, în condițiile metodologiei aprobate prin ordin al ministrului.

(2) Aprobarea alternativelor se face prin ordin al ministrului educației, la propunerea direcțiilor de specialitate.

(3) Autorizarea provizorie, acreditarea și evaluarea periodică se fac potrivit normelor aprobate prin ordin, la propunerea agenției de calitate.

(4) Unitățile alternative au autonomie organizatorică și funcțională, conform specificului alternativei.

(5) Personalul didactic are dreptul la recunoașterea pregătirii și perfecționărilor realizate de organizațiile care gestionează alternativa la nivel național.

(6) Orice cetățean român se poate înscrie și pregăti în toate formele de învățământ alternativ, în română, limbile minorităților sau limbi de circulație internațională.`
    },
    {
      article: 27,
      title: "Învățământul particular și confesional",
      duration: "4 min",
      focus: "nonprofit · standarde identice · autonomie · conducere · finanțare",
      narration: `Articolul 27 stabilește că învățământul particular și confesional se organizează conform principiului nonprofit. Criteriile, standardele de calitate și indicatorii de performanță sunt identice cu cele aplicabile unităților de stat.

Unitățile particulare și confesionale sunt libere, deschise și autonome organizatoric și economico-financiar. Fundamentul lor este proprietatea privată, iar personalitatea juridică se dobândește de la data autorizării de funcționare provizorie. Autorizarea, acreditarea și evaluarea periodică sunt realizate de agenția competentă pentru calitate.

Directorii sunt numiți de conducerea persoanei juridice fondatoare, cu respectarea criteriilor de competență, iar actul de numire se comunică structurii județene competente. Statul asigură finanțarea de bază per beneficiar pentru unitățile acreditate, în condițiile legii; celelalte cheltuieli se acoperă din taxele stabilite de unitate și din alte surse.

Personalul este angajat de unitate după norme și organigramă proprie, cu respectarea criteriilor de competență. Veniturile directorilor, directorilor adjuncți și salarizarea personalului didactic se stabilesc prin negociere, cu avizul consiliului de administrație. La desființare, dizolvare sau lichidare, patrimoniul revine entităților fondatoare.`,
      remember: [
        "Învățământul particular și confesional funcționează după principiul nonprofit.",
        "Standardele de calitate sunt identice cu cele ale unităților de stat.",
        "Directorul este numit de persoana juridică fondatoare, pe criterii de competență."
      ],
      questions: [
        {
          prompt: "Conform cărui principiu se organizează învățământul particular și confesional?",
          options: ["Profit maxim", "Nonprofit", "Autofinanțare exclusivă", "Centralizare"],
          correct: 1,
          explanation: "Art. 27 alin. (1) consacră principiul nonprofit."
        },
        {
          prompt: "Cum sunt standardele de calitate față de cele ale unităților de stat?",
          options: ["Mai reduse", "Stabilite liber de fondator", "Identice", "Aplicabile numai după acreditare"],
          correct: 2,
          explanation: "Criteriile, standardele și indicatorii sunt identici."
        },
        {
          prompt: "Cine numește directorul unei unități particulare sau confesionale?",
          options: ["Primarul", "Conducerea persoanei juridice fondatoare", "Consiliul elevilor", "Ministerul în toate cazurile"],
          correct: 1,
          explanation: "Numirea aparține conducerii persoanei juridice fondatoare, cu respectarea competenței."
        }
      ],
      legalText: `Art. 27 — (1) Învățământul particular și confesional se organizează conform principiului nonprofit.

(2) Criteriile, standardele de calitate și indicatorii de performanță sunt identice cu cele pentru unitățile de stat.

(3) Unitățile sunt libere, deschise și autonome organizatoric și economico-financiar și dobândesc personalitate juridică de la autorizarea provizorie.

(4) Autorizarea, acreditarea și evaluarea periodică sunt realizate de agenția de calitate.

(5)-(6) Unitățile sunt sprijinite de stat; statul sprijină și coordonează învățământul particular și confesional.

(7) Directorii sunt numiți de conducerea persoanei juridice fondatoare, pe criterii de competență, iar actul se comunică structurii județene competente.

(8) Statul asigură finanțarea de bază per beneficiar pentru unitățile acreditate; celelalte cheltuieli provin din taxe și alte surse.

(9) Personalul este angajat de unitate după norme și organigramă proprie, cu respectarea competenței.

(10) Veniturile conducerii și salarizarea personalului didactic se stabilesc prin negociere, cu avizul CA.

(11) La desființare, dizolvare sau lichidare, patrimoniul revine entităților fondatoare.`
    },
    {
      article: 28,
      title: "Înființarea și efectele actelor de studii",
      duration: "2 min",
      focus: "fondatori · parteneriat public-privat · manuale · diplome",
      narration: `Articolul 28 completează regimul învățământului particular și confesional. Persoanele juridice de drept privat și cultele pot înființa unități particulare și confesionale, în condițiile legii.

În sistem pot funcționa și unități, grupe sau clase constituite în baza unor contracte de parteneriat public-privat, între autoritatea publică și furnizori privați ori între unități de stat și unități particulare și confesionale acreditate.

Elevii din învățământul obligatoriu, înscriși în unități particulare sau confesionale autorizate provizoriu ori acreditate, beneficiază de manuale școlare conform legii. Diplomele și certificatele acordate de învățământul particular acreditat au aceeași valoare și produc aceleași efecte ca actele de studii din învățământul de stat.

Rețineți perechea: manuale pentru elevii din obligatoriu și echivalență deplină a actelor de studii din unitățile acreditate.`,
      remember: [
        "Persoanele juridice private și cultele pot înființa unități particulare și confesionale.",
        "Sunt permise parteneriate public-private pentru unități, grupe sau clase.",
        "Actele de studii din învățământul particular acreditat au valoarea celor de stat."
      ],
      questions: [
        {
          prompt: "Cine poate înființa unități particulare și confesionale?",
          options: ["Numai autoritățile locale", "Persoanele juridice de drept privat și cultele", "Numai universitățile", "Exclusiv ministerul"],
          correct: 1,
          explanation: "Articolul indică persoanele juridice private și cultele."
        },
        {
          prompt: "Cine beneficiază de manuale conform art. 28?",
          options: ["Doar elevii din unități de stat", "Elevii din învățământul obligatoriu din unități particulare/confesionale autorizate ori acreditate", "Doar elevii de liceu particular", "Numai elevii fără taxă"],
          correct: 1,
          explanation: "Dreptul privește elevii din învățământul obligatoriu din aceste unități."
        },
        {
          prompt: "Ce efect au diplomele din învățământul particular acreditat?",
          options: ["Au valoare numai internă", "Necesită echivalare anuală", "Au valoarea și efectele actelor eliberate în învățământul de stat", "Sunt simple adeverințe"],
          correct: 2,
          explanation: "Acreditarea asigură valoare și efecte egale cu actele de studii de stat."
        }
      ],
      legalText: `Art. 28 — (1) Persoanele juridice de drept privat și cultele pot înființa, în condițiile legii, unități de învățământ particular și confesional.

(2) Pot funcționa unități sau grupe/clase constituite pe bază de contracte de parteneriat public-privat între autoritatea publică și furnizori privați ori între unități de stat și unități particulare și confesionale acreditate.

(3) Elevii din învățământul obligatoriu din unități particulare și confesionale autorizate provizoriu/acreditate beneficiază de manuale școlare, conform legii.

(4) Diplomele și certificatele acordate în învățământul particular acreditat au valoarea și produc efectele actelor de studii eliberate în învățământul de stat.`
    },
    {
      article: 29,
      title: "Educația extrașcolară",
      duration: "5 min",
      focus: "drept · gratuitate · acces · parteneriate · recunoaștere",
      narration: `Articolul 29 consacră dreptul beneficiarilor primari de a participa la activități extrașcolare organizate de minister, unități de educație extrașcolară, unități de învățământ și partenerii lor.

Educația extrașcolară cuprinde activitățile din afara programului școlar, organizate în școală sau în afara ei. Are rol complementar educației formale și urmărește dezvoltarea fizică, cognitivă, emoțională și socială, dezvoltând atât competențe din curriculumul național, cât și competențe complementare.

Participarea la activitățile organizate de unitățile de educație extrașcolară și de unitățile de învățământ, dacă sunt finanțate din fonduri publice, este gratuită. Oferta se dezvoltă în funcție de resurse și prin consultarea școlilor, elevilor, părinților și organizațiilor relevante. Accesul trebuie asigurat tuturor, cu prioritate elevilor aflați în risc de excluziune școlară.

Activitățile pot fi culturale, civice, artistice, tehnice, științifice, recreative, turistice, ecologice, sportive, jurnalistice, de robotică, voluntariat, educație rutieră, financiară, juridică, antreprenorială sau pentru sănătate. Ele pot avea loc numai în spații care îndeplinesc condițiile de siguranță.

Dacă activitatea este realizată de o organizație publică sau privată din afara sistemului, participarea elevilor se bazează pe un acord sau protocol de parteneriat cu unitatea de învățământ ori cu unitatea de educație extrașcolară. Rezultatele învățării sunt recunoscute prin adeverințe, diplome sau certificate și se înscriu în portofoliul educațional al elevului.

Cadrele didactice motivează și sprijină participarea, fără obligativitate și fără discriminare. Contribuția lor la activitățile extrașcolare este luată în considerare în evaluările periodice, la gradația de merit și la alte distincții. Oferta școlii se elaborează după consultarea elevilor, care sunt încurajați să participe la dezvoltarea și implementarea activităților.`,
      remember: [
        "Activitățile finanțate din fonduri publice sunt gratuite.",
        "Pentru organizațiile din afara sistemului este necesar un acord/protocol de parteneriat.",
        "Diplomele, adeverințele și certificatele se înscriu în portofoliul educațional."
      ],
      questions: [
        {
          prompt: "Când este gratuită participarea la activitățile extrașcolare?",
          options: ["Numai în vacanță", "Când activitățile unităților sunt susținute din fonduri publice", "Numai pentru olimpici", "Niciodată"],
          correct: 1,
          explanation: "Gratuitatea este legată de finanțarea publică a activității."
        },
        {
          prompt: "Ce este necesar pentru activitățile realizate de organizații din afara sistemului național de învățământ?",
          options: ["Doar acord verbal", "Acord/protocol de parteneriat cu unitatea competentă", "Aprobarea fiecărui profesor", "Taxă obligatorie"],
          correct: 1,
          explanation: "Participarea se bazează pe un acord sau protocol de parteneriat."
        },
        {
          prompt: "Unde se înscriu rezultatele recunoscute ale învățării extrașcolare?",
          options: ["Numai în catalog", "În portofoliul educațional al elevului", "În registrul comerțului", "Nu se consemnează"],
          correct: 1,
          explanation: "Adeverințele, diplomele și certificatele sunt înscrise în portofoliul educațional."
        }
      ],
      legalText: `Art. 29 — (1) Beneficiarii primari au dreptul de a participa la activități extrașcolare organizate de minister, unitățile de educație extrașcolară, unitățile de învățământ și partenerii acestora.

(2) Educația extrașcolară cuprinde activitățile organizate în afara programului școlar, în incinta unităților sau în afara lor, cu rol complementar educației formale și orientate spre dezvoltarea fizică, cognitivă, emoțională și socială și spre competențe curriculare și complementare.

(3) Participarea la activitățile organizate de unitățile de educație extrașcolară și unitățile de învățământ, susținute din fonduri publice, este gratuită.

(4) Oferta se dezvoltă în funcție de resurse și prin consultarea unităților, elevilor, părinților și organizațiilor relevante.

(5) Se asigură accesul tuturor, cu prioritate pentru cei în risc de excluziune școlară.

(6) Activitățile pot fi culturale, civice, artistice, tehnice, științifice, recreative, turistice, ecologice, sportive, jurnalistice, de robotică, voluntariat, educație rutieră, financiară, juridică, antreprenorială, pentru sănătate și altele.

(7) Activitățile se realizează în unități de învățământ și de educație extrașcolară ori în alte spații care îndeplinesc condițiile de siguranță.

(8) Participarea la activități realizate de organizații din afara sistemului se bazează pe acord/protocol de parteneriat.

(9) Rezultatele se recunosc prin adeverințe, diplome sau certificate și se înscriu în portofoliul educațional.

(10) Cadrele didactice motivează și sprijină participarea fără obligativitate și fără discriminare și valorifică rezultatele.

(11) Contribuția cadrelor didactice se ia în considerare la evaluări, gradații de merit și alte distincții.

(12) Oferta școlii se elaborează după consultarea elevilor, care sunt încurajați să participe la dezvoltarea și implementarea activităților.

(13) Regulamentul unităților de educație extrașcolară se stabilește prin ordin al ministrului educației.`
    }
  );
})();
