"use strict";

(() => {
  const DATA = window.LEGE_DATA;

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–44: verificare 11.08.2026";
  DATA.modules.push({
    id: 4,
    title: "Organizarea unităților de învățământ · partea I",
    articles: "30–44",
    chapter: "Capitolul IV",
    startArticle: 30,
    endArticle: 44
  });

  DATA.lessons.push(
    {
      article: 30,
      title: "Educația timpurie",
      duration: "5 min",
      focus: "creșe · grădinițe · servicii integrate · programe · servicii complementare",
      narration: `Articolul 30 reglementează educația timpurie. Creșele și grădinițele fac parte din sistemul național de învățământ preuniversitar. Creșele se adresează copiilor antepreșcolari cu vârste între 3 luni și 3 ani, iar grădinițele copiilor preșcolari cu vârste între 3 și 6 ani, inclusiv celor aflați în situația amânării înscrierii la clasa pregătitoare prevăzută de lege.

Aceste unități oferă servicii integrate de educație și realizează evaluări anuale. Pe baza evaluărilor se întocmește raportul descriptiv privind dezvoltarea fizică și formarea competențelor cognitive și socioemoționale ale copilului.

Creșele și grădinițele pot funcționa în trei forme: ca unități cu personalitate juridică, ca structuri arondate unei alte unități cu personalitate juridică sau ca grupe în cadrul unei asemenea unități. Programele pot fi normale sau prelungite.

Dacă într-o localitate nu există suficiente locuri în creșe și grădinițe, pot fi dezvoltate servicii de educație timpurie complementare, precum ludoteca, grupul de joacă ori grădinița comunitară. Aceste servicii funcționează ca structuri ale unor unități de învățământ.

Standardele de calitate pentru unități și servicii complementare se aprobă prin hotărâre a Guvernului, inițiată de Ministerul Educației, la propunerea agenției pentru calitate. Regulamentul de organizare și funcționare a unităților de educație timpurie se aprobă prin ordin al ministrului educației.

Angajatorii care înființează unități de educație timpurie, destinate cu precădere copiilor angajaților, pot beneficia de facilități. Formula de memorare este: 3 luni–3 ani, 3–6 ani, servicii integrate, evaluare anuală, program normal sau prelungit și servicii complementare când locurile sunt insuficiente.`,
      remember: [
        "Antepreșcolarul are între 3 luni și 3 ani, iar preșcolarul între 3 și 6 ani.",
        "Programele unităților de educație timpurie sunt normal și prelungit.",
        "Când locurile sunt insuficiente, pot funcționa servicii complementare precum ludoteca sau grupul de joacă."
      ],
      questions: [
        {
          prompt: "Care este intervalul de vârstă al copiilor antepreșcolari menționat la art. 30?",
          options: ["De la naștere la 2 ani", "De la 3 luni la 3 ani", "De la 2 la 5 ani", "De la 3 la 6 ani"],
          correct: 1,
          explanation: "Creșele oferă servicii copiilor antepreșcolari cu vârste între 3 luni și 3 ani."
        },
        {
          prompt: "Ce tipuri de program pot avea unitățile de educație timpurie?",
          options: ["Numai program normal", "Program normal și program prelungit", "Program seral și frecvență redusă", "Numai program săptămânal"],
          correct: 1,
          explanation: "Art. 30 prevede program normal și program prelungit."
        },
        {
          prompt: "Ce soluție poate fi dezvoltată dacă nu există suficiente locuri în creșe și grădinițe?",
          options: ["Suspendarea înscrierilor", "Servicii de educație timpurie complementare", "Înscrierea directă în clasa pregătitoare", "Program liceal redus"],
          correct: 1,
          explanation: "Legea permite servicii complementare precum ludoteca, grupul de joacă sau grădinița comunitară."
        }
      ],
      legalText: `Art. 30 — (1) Creșele și grădinițele sunt unități de educație timpurie din sistemul național. Ele oferă servicii integrate copiilor antepreșcolari de 3 luni–3 ani, respectiv copiilor preșcolari de 3–6 ani sau aflați în situația prevăzută la art. 31 alin. (5), și realizează evaluări anuale pentru raportul descriptiv privind dezvoltarea fizică și competențele cognitive și socioemoționale.

(2) Pot funcționa ca unități cu personalitate juridică, structuri arondate sau grupe. Programele sunt normal și prelungit.

(3) Dacă locurile sunt insuficiente, se pot dezvolta servicii complementare precum ludotecă, grup de joacă ori grădiniță comunitară.

(4)-(5) Standardele de calitate și organizarea serviciilor complementare se aprobă prin hotărâre a Guvernului, iar regulamentul unităților de educație timpurie prin ordin al ministrului educației.

(6) Angajatorii care înființează unități pentru educația timpurie a copiilor propriilor angajați pot beneficia de facilități, în condițiile metodologiei aprobate prin hotărâre a Guvernului.`
    },
    {
      article: 31,
      title: "Învățământul primar și clasa pregătitoare",
      duration: "5 min",
      focus: "clasa pregătitoare · clasele I–IV · vârsta de înscriere · amânare · CES",
      narration: `Articolul 31 reglementează învățământul primar, care cuprinde clasa pregătitoare și clasele întâi–a patra. Începând cu anul școlar 2029–2030, acesta se organizează și funcționează cu program de dimineață.

Regula de înscriere în clasa pregătitoare îi privește pe copiii care au urmat învățământul preșcolar și împlinesc 6 ani până la 31 august în anul înscrierii. Procedura se desfășoară potrivit metodologiei aprobate prin ordin al ministrului educației.

Legea permite excepții. Pentru motive întemeiate, precum boala, lipsa infrastructurii locale sau domiciliul temporar în străinătate, pot fi înscriși și copii care nu îndeplinesc condițiile generale. Copiii care împlinesc 6 ani după 31 august, dar până la sfârșitul anului calendaristic, pot fi înscriși la cererea scrisă a părinților dacă dezvoltarea lor este corespunzătoare și există recomandarea structurii competente.

În cazuri justificate, părintele poate cere amânarea înscrierii copilului care împlinește 6 ani până la 31 august, dar amânarea poate fi de maximum un an.

Pentru copiii cu cerințe educaționale speciale există reguli distincte. În învățământul de masă, la solicitarea scrisă a părinților, pot fi înscriși în clasa pregătitoare copiii cu CES cu vârste între 6 și 8 ani, raportate la data de 31 august. În învățământul special, potrivit formei modificate în 2024, pot fi înscriși la solicitarea scrisă a părinților copiii cu CES cu vârste între 6 și 8 ani împliniți până la 31 decembrie al anului înscrierii.

Pentru susținerea finalizării învățământului obligatoriu, elevii din primar pot participa la programul „Școala după școală”. Rețineți: pregătitoare plus I–IV; 6 ani până la 31 august; amânare maximum un an; reguli speciale pentru CES.`,
      remember: [
        "Învățământul primar cuprinde clasa pregătitoare și clasele I–IV.",
        "Regula este împlinirea vârstei de 6 ani până la 31 august.",
        "Amânarea înscrierii în cazuri justificate poate fi de maximum un an."
      ],
      questions: [
        {
          prompt: "Ce clase cuprinde învățământul primar?",
          options: ["Clasele I–IV", "Clasa pregătitoare și clasele I–IV", "Clasele pregătitoare–V", "Numai clasa pregătitoare"],
          correct: 1,
          explanation: "Învățământul primar include clasa pregătitoare și clasele I–IV."
        },
        {
          prompt: "Care este data de referință pentru regula generală privind împlinirea vârstei de 6 ani?",
          options: ["1 ianuarie", "31 mai", "31 august", "31 decembrie"],
          correct: 2,
          explanation: "Regula generală privește copiii care împlinesc 6 ani până la 31 august."
        },
        {
          prompt: "Cu cât poate fi amânată, în cazuri justificate, înscrierea în clasa pregătitoare?",
          options: ["Maximum un semestru", "Maximum un an", "Maximum doi ani", "Nu poate fi amânată"],
          correct: 1,
          explanation: "Art. 31 permite o amânare de maximum un an, la cererea scrisă a părintelui."
        }
      ],
      legalText: `Art. 31 — (1) Învățământul primar cuprinde clasa pregătitoare și clasele I–IV și funcționează cu program de dimineață începând cu anul școlar 2029–2030.

(2) Regula de înscriere privește copiii care au urmat preșcolarul și împlinesc 6 ani până la 31 august.

(3)-(4) Sunt permise excepții pentru motive întemeiate și pentru copiii care împlinesc 6 ani după 31 august, dar până la sfârșitul anului, dacă dezvoltarea este corespunzătoare și există recomandarea competentă.

(5) În cazuri justificate, înscrierea poate fi amânată cu maximum un an.

(6) În învățământul de masă pot fi înscriși, la solicitarea scrisă a părinților, copii cu CES cu vârste între 6 și 8 ani, raportate la 31 august.

(7) În forma modificată prin OUG nr. 95/2024, la solicitarea scrisă a părinților pot fi înscriși în învățământul special, în clasa pregătitoare, copiii cu CES cu vârste între 6 și 8 ani împliniți până la 31 decembrie.

(8) Elevii pot participa la programul „Școala după școală” dedicat învățământului primar.`
    },
    {
      article: 32,
      title: "Învățământul gimnazial",
      duration: "2 min",
      focus: "clasele V–VIII · program de dimineață · Școala după școală · înscrierea în clasa a V-a",
      narration: `Articolul 32 are patru reguli ușor de fixat. Învățământul gimnazial cuprinde clasele a cincea–a opta și funcționează, de regulă, cu program de dimineață.

Pentru a încuraja finalizarea învățământului obligatoriu, elevii pot participa la programe de tip „Școala după școală” dedicate nivelului gimnazial.

Pentru clasa a opta, programul de dimineață devine obligatoriu începând cu anul 2030. Formula „de regulă” se aplică gimnaziului în ansamblu, dar articolul stabilește expres acest termen pentru clasa a opta.

Dacă o unitate de învățământ nu are clase de nivel primar, înscrierea elevilor în clasa a cincea se face potrivit metodologiei aprobate prin ordin al ministrului educației. Rețineți: V–VIII, de regulă dimineața, clasa a opta dimineața din 2030 și metodologie specială pentru intrarea în clasa a cincea la școlile fără primar.`,
      remember: [
        "Gimnaziul cuprinde clasele V–VIII.",
        "Clasa a VIII-a funcționează cu program de dimineață începând cu anul 2030.",
        "Înscrierea în clasa a V-a la unitățile fără primar se face potrivit metodologiei ministeriale."
      ],
      questions: [
        {
          prompt: "Ce clase cuprinde învățământul gimnazial?",
          options: ["I–IV", "V–VIII", "IX–XII", "VI–IX"],
          correct: 1,
          explanation: "Nivelul gimnazial cuprinde clasele V–VIII."
        },
        {
          prompt: "Din ce an clasa a VIII-a trebuie să funcționeze cu program de dimineață?",
          options: ["2026", "2028", "2029", "2030"],
          correct: 3,
          explanation: "Art. 32 alin. (3) indică anul 2030."
        },
        {
          prompt: "Cum se reglementează înscrierea în clasa a V-a la unitățile care nu au clase primare?",
          options: ["Prin decizia individuală a directorului", "Prin metodologia aprobată prin ordin al ministrului", "Prin regulamentul primăriei", "Prin hotărârea consiliului elevilor"],
          correct: 1,
          explanation: "Înscrierea se face conform metodologiei aprobate prin ordin al ministrului educației."
        }
      ],
      legalText: `Art. 32 — (1) Învățământul gimnazial cuprinde clasele V–VIII și funcționează, de regulă, cu program de dimineață.

(2) Elevii pot participa la programe de tip „Școala după școală” dedicate gimnaziului.

(3) Clasa a VIII-a se organizează și funcționează cu program de dimineață începând cu anul 2030.

(4) Înscrierea în clasa a V-a la unitățile care nu dețin clase de nivel primar se face conform metodologiei aprobate prin ordin al ministrului educației.`
    },
    {
      article: 33,
      title: "Învățământul liceal: filiere, durată și calificări",
      duration: "7 min",
      focus: "clase · filiere · asumarea filierei · transfer · calificări · durata studiilor",
      narration: `Articolul 33 este esențial pentru concurs. Învățământul liceal se organizează în licee teoretice, vocaționale și tehnologice. Cuprinde clasele a noua–a douăsprezecea la forma cu frecvență și clasele a noua–a treisprezecea la seral și frecvență redusă.

Există trei filiere. Filiera teoretică are profilurile umanist și real. Filiera vocațională are profilurile militar, teologic, sportiv, artistic și pedagogic. Filiera tehnologică are profilurile tehnic, servicii, resurse naturale și protecția mediului.

Liceele teoretice și vocaționale aplică principiul asumării filierei: cel puțin două treimi dintre elevi trebuie școlarizați în filiera specifică unității, inclusiv în structurile arondate. Pentru situații justificate, ministerul poate aproba o pondere mai mică. Liceele tehnologice sunt exceptate de la această regulă.

Filierele tehnologică și vocațională au orientare practică. Activitățile pot avea loc parțial la angajatori sau instituții relevante, pe baza contractelor de pregătire practică.

Transferul între filiere, profiluri și specializări se face, de regulă, începând cu anul școlar următor, pe baza unor evaluări, în limita locurilor și înainte de atingerea capacității maxime. Aceasta este formularea actualizată în 2024.

Tot în forma actualizată, finalizarea a cel puțin 3 ani în filiera tehnologică sau vocațională ori a 4 ani în învățământul tehnologic special poate conferi o calificare de nivel 3 și acces direct pe piața muncii, după promovarea probelor profesionale sau a examenului de certificare. Elevii din filiera tehnologică își pot continua studiile în același liceu pentru bacalaureat, iar promovarea bacalaureatului le conferă calificare de nivel 4.

Durata liceului cu frecvență zi este, de regulă, de 4 ani. La seral și frecvență redusă, durata se prelungește cu un an. Absolvenții nivelurilor 3 și 4 primesc certificat de calificare și supliment descriptiv Europass.

Învățământul liceal funcționează, de regulă, cu frecvență zi, dar poate fi organizat și seral sau cu frecvență redusă. Elevii pot participa la „Școala după școală”. Pot obține calificări și prin discipline din trunchiul comun și curriculumul la decizia elevului din oferta școlii, în condițiile metodologiei. Formula de memorare: trei filiere, două treimi, transfer de regulă anul următor, nivel 3, nivel 4 prin bacalaureat și durata 4 plus 1.`,
      remember: [
        "Filierele sunt teoretică, vocațională și tehnologică.",
        "Principiul asumării filierei înseamnă minimum două treimi și vizează liceele teoretice și vocaționale.",
        "Liceul de zi durează, de regulă, 4 ani; seralul și frecvența redusă au un an în plus."
      ],
      questions: [
        {
          prompt: "Care sunt cele trei filiere ale învățământului liceal?",
          options: ["Primară, gimnazială și liceală", "Teoretică, vocațională și tehnologică", "Reală, umanistă și profesională", "Civilă, militară și duală"],
          correct: 1,
          explanation: "Art. 33 distinge filiera teoretică, vocațională și tehnologică."
        },
        {
          prompt: "Ce pondere exprimă principiul asumării filierei pentru liceele teoretice și vocaționale?",
          options: ["Minimum o treime", "Minimum jumătate", "Minimum două treimi", "Toți elevii"],
          correct: 2,
          explanation: "Unitatea trebuie să școlarizeze minimum două treimi dintre elevi în filiera sa specifică."
        },
        {
          prompt: "Care este durata, de regulă, a liceului cu frecvență zi?",
          options: ["3 ani", "4 ani", "5 ani", "6 ani"],
          correct: 1,
          explanation: "Forma cu frecvență zi durează, de regulă, 4 ani; seralul și frecvența redusă au un an în plus."
        }
      ],
      legalText: `Art. 33 — (1)-(2) Liceul se organizează în unități teoretice, vocaționale și tehnologice. Forma cu frecvență cuprinde clasele IX–XII, iar seralul și frecvența redusă clasele IX–XIII. Filierele sunt: teoretică — umanist și real; vocațională — militar, teologic, sportiv, artistic și pedagogic; tehnologică — tehnic, servicii, resurse naturale și protecția mediului.

(3)-(5) Liceele teoretice și vocaționale școlarizează minimum două treimi dintre elevi în filiera specifică, cu posibilitatea unei excepții aprobate de minister. Liceele tehnologice sunt exceptate.

(6) Filiera tehnologică și cea vocațională au orientare practică.

(7) În forma modificată prin OUG nr. 95/2024, transferul între filiere, profiluri și specializări se face, de regulă, începând cu anul școlar următor, pe baza evaluărilor și în limita locurilor și capacității.

(8) Liceele militare pot face transferuri la clasa a IX-a în primele 30 de zile, potrivit reglementărilor specifice.

(9) În forma modificată, finalizarea a cel puțin 3 ani în filiera tehnologică sau vocațională ori a 4 ani în învățământul tehnologic special poate conferi calificare de nivel 3 și acces pe piața muncii, după probele specifice.

(10) Elevii din filiera tehnologică pot continua studiile pentru bacalaureat; promovarea acestuia conferă calificare de nivel 4.

(11)-(12) Ministerul stabilește specializările prin planurile-cadru. Liceul cu frecvență zi durează, de regulă, 4 ani; seralul și frecvența redusă au un an în plus.

(13)-(20) Absolvenții nivelurilor 3 și 4 primesc certificat și supliment Europass. Organizarea filierelor tehnologice și vocaționale, standardele profesionale, formele de frecvență, programele „Școala după școală” și obținerea unor calificări prin curriculum sunt reglementate potrivit legii și metodologiilor ministeriale.`
    },
    {
      article: 34,
      title: "Stagiile de pregătire practică",
      duration: "2 min",
      focus: "locuri de practică · contract · programe UE · ponderea orelor",
      narration: `Articolul 34 stabilește unde și cum se organizează stagiile de pregătire practică din filiera tehnologică sau vocațională.

Practica se poate desfășura la nivelul unității de învățământ, la operatori economici, în centre de zi pentru dezvoltarea deprinderilor de viață independentă, în instituții publice sau în structuri sportive pentru clasele cu profil sportiv. Condiția este existența contractelor de pregătire practică, acolo unde legea le cere.

Practica se poate desfășura și la organizații-gazdă din străinătate, în cadrul programelor Uniunii Europene care includ componenta de formare profesională inițială.

Ponderea numărului de ore alocate stagiilor de practică nu este stabilită arbitrar de unitate, ci prin planul-cadru de învățământ aprobat prin ordin al ministrului educației. Rețineți: școală, operator economic, centre și instituții, structuri sportive sau organizații-gazdă din străinătate; ponderea orelor vine din planul-cadru.`,
      remember: [
        "Practica poate avea loc atât în unitate, cât și la parteneri externi.",
        "Sunt posibile stagii la organizații-gazdă din străinătate în programe ale UE.",
        "Ponderea orelor de practică se stabilește prin planul-cadru."
      ],
      questions: [
        {
          prompt: "Unde se pot organiza stagiile de practică potrivit art. 34?",
          options: ["Numai în școală", "Numai la operatori economici", "În școală și/sau la partenerii și instituțiile prevăzute de lege", "Exclusiv în străinătate"],
          correct: 2,
          explanation: "Legea permite mai multe locuri: unitatea, operatori economici, centre, instituții, structuri sportive și organizații-gazdă."
        },
        {
          prompt: "În ce cadru pot fi organizate stagii la organizații-gazdă din străinătate?",
          options: ["Numai prin contract individual de muncă", "În programe ale Uniunii Europene cu componentă de formare profesională inițială", "Numai în vacanța de vară", "Fără nicio formă de parteneriat"],
          correct: 1,
          explanation: "Art. 34 menționează programele UE cu componentă de formare profesională inițială."
        },
        {
          prompt: "Prin ce document se stabilește ponderea orelor de pregătire practică?",
          options: ["Planul-cadru de învățământ", "Regulamentul clasei", "Contractul educațional", "Statutul elevului"],
          correct: 0,
          explanation: "Ponderea este stabilită prin planul-cadru aprobat prin ordin al ministrului."
        }
      ],
      legalText: `Art. 34 — (1) Stagiile de pregătire practică din filiera tehnologică sau vocațională se pot organiza în unitatea de învățământ și/sau la operatori economici, în centre de zi pentru deprinderi de viață independentă, în instituții publice, în structuri sportive pentru clasele cu profil sportiv ori la organizații-gazdă din străinătate, în programe ale Uniunii Europene cu componentă de formare profesională inițială.

(2) Ponderea orelor alocate stagiilor de pregătire practică este stabilită prin planul-cadru aprobat prin ordin al ministrului educației.`
    },
    {
      article: 35,
      title: "Învățământul tehnologic în sistem dual",
      duration: "6 min",
      focus: "parteneriat · contract individual · operator economic · bursă · muncă · tutori",
      narration: `Articolul 35 definește învățământul tehnologic în sistem dual ca formă de organizare a învățământului liceal și postliceal tehnologic, desfășurată pe bază de contract. Poate funcționa în unități de stat sau particulare, în școli postliceale cu personalitate juridică și în colegii terțiare nonuniversitare din instituții de învățământ superior.

Dualul este organizat într-un cadru unitar de școli sau la solicitarea operatorilor economici și a structurilor asociative ale acestora. El oferă o rută alternativă de educație și formare profesională, construită pe parteneriat. Operatorii economici își asumă ca responsabilitate principală pregătirea practică a elevilor.

Operatorii pot acorda elevilor o bursă cel puțin la nivelul bursei provenite din fonduri publice pentru învățământul liceal tehnologic și pot finanța alte cheltuieli pentru formarea de calitate. Unitățile administrativ-teritoriale pot sprijini investițiile, cheltuielile materiale, bursele, stimulentele, mobilitățile și formarea profesională.

Elevii care au împlinit 16 ani pot încheia contracte individuale de muncă cu timp parțial cu operatorii economici. Activitatea prestată poate fi echivalată cu instruirea practică, potrivit metodologiei.

Organizarea dualului presupune două contracte importante. Contractul de parteneriat este încheiat între operatori, unitatea de învățământ și una sau mai multe unități administrativ-teritoriale și acoperă cel puțin perioada celor 3 sau 4 ani de studiu. Contractul individual de pregătire practică este încheiat între elev, părintele elevului minor, operatorul economic și unitatea de învățământ. Acest contract nu poate limita opțiunile ulterioare ale elevului de continuare a studiilor.

Tutorii de practică răspund de organizarea pregătirii la angajator, contribuie la evaluare împreună cu cadrul didactic coordonator și inițiază, când este nevoie, măsuri remediale sau stagii suplimentare. Curriculumul trebuie să asigure echilibru între predare-învățare și învățarea prin muncă.

Formula de memorare este: parteneriat, contract individual, operatorul conduce practica, bursă posibilă, muncă de la 16 ani, opțiunile de studiu nu pot fi limitate.`,
      remember: [
        "Învățământul dual se desfășoară pe bază de parteneriat și contracte.",
        "De la 16 ani, elevul poate încheia contract de muncă cu timp parțial.",
        "Contractul individual de pregătire practică nu poate limita continuarea studiilor."
      ],
      questions: [
        {
          prompt: "Pe ce se bazează organizarea învățământului tehnologic dual?",
          options: ["Exclusiv pe decizia operatorului economic", "Pe parteneriat și contracte", "Numai pe regulamentul intern", "Pe voluntariat fără documente"],
          correct: 1,
          explanation: "Dualul este o rută contractuală, organizată pe bază de parteneriat."
        },
        {
          prompt: "De la ce vârstă poate elevul din dual să încheie un contract individual de muncă cu timp parțial?",
          options: ["14 ani", "15 ani", "16 ani", "18 ani"],
          correct: 2,
          explanation: "Art. 35 stabilește pragul de 16 ani."
        },
        {
          prompt: "Ce nu poate face contractul individual de pregătire practică?",
          options: ["Să stabilească drepturile părților", "Să includă operatorul economic", "Să limiteze opțiunile ulterioare de continuare a studiilor", "Să prevadă obligațiile unității"],
          correct: 2,
          explanation: "Contractul nu poate restrânge opțiunile ulterioare ale elevului privind continuarea studiilor."
        }
      ],
      legalText: `Art. 35 — (1) Învățământul tehnologic dual este o formă de organizare a licealului și postlicealului tehnologic, în unități de stat și/sau particulare, școli postliceale ori colegii terțiare nonuniversitare, desfășurată pe bază de contract.

(2) Este organizat de unități sau la solicitarea operatorilor și oferă o rută alternativă bazată pe parteneriat și contracte individuale de practică. Operatorii își asumă pregătirea practică, pot acorda burse și pot finanța cheltuieli, iar autoritățile locale pot sprijini investițiile și formarea.

(3) Operatorii parteneri beneficiază de facilitățile fiscale prevăzute de lege.

(4)-(7) Elevii de cel puțin 16 ani pot încheia contracte de muncă cu timp parțial, iar activitatea se poate echivala cu practica potrivit metodologiei. Legea reglementează și facilitățile pentru tutori și elevii angajați.

(8) Dualul presupune contract de parteneriat pentru cel puțin 3 sau 4 ani și contract individual de pregătire practică; acesta din urmă nu poate limita continuarea studiilor.

(9) Tutorii organizează practica la angajator, participă la evaluare și inițiază măsuri remediale împreună cu cadrul didactic coordonator.

(10)-(11) Organizarea, accesul, programele și certificarea sunt stabilite prin metodologii aprobate prin ordin, iar curriculumul echilibrează predarea-învățarea cu învățarea prin muncă.`
    },
    {
      article: 36,
      title: "Liceele cu profil agricol și silvic",
      duration: "6 min",
      focus: "finanțare · investiții · proprietate · piața muncii · management · consiliul de administrație",
      narration: `Articolul 36 stabilește mecanismul de sprijin pentru liceele tehnologice cu profil preponderent agricol și silvic. Ministerul Agriculturii susține investițiile și cheltuielile materiale pentru profilul agricol și industria alimentară, iar Ministerul Mediului susține investițiile și cheltuielile corespunzătoare silviculturii.

Finanțarea se asigură prin transferuri de la bugetul de stat către bugetele locale, prin bugetele ministerelor de resort. Sumele sunt aprobate anual prin legea bugetului de stat și sunt repartizate pe unități administrativ-teritoriale și unități de învățământ.

Bunurile mobile și imobile realizate sau cumpărate prin această finanțare intră în proprietatea autorității publice locale în raza căreia se află unitatea beneficiară. Ele trebuie utilizate exclusiv pentru activitățile liceelor tehnologice cu profil preponderent agricol și silvic, potrivit destinației stabilite de ministerul finanțator.

Lista liceelor vizate se stabilește prin ordine comune ale ministrului educației cu ministrul agriculturii, respectiv cu ministrul mediului. În funcție de piața muncii, ministerele pot finanța noi specializări și calificări, perfecționarea profesorilor de specialitate, manuale, schimburi de experiență și stagii de practică.

Ministerele de resort pot propune cifra de școlarizare, măsuri de îmbunătățire a structurii organizatorice și înființarea unor noi specializări. Cifra de școlarizare propusă se aprobă prin hotărâre a Guvernului.

Directorul liceului încheie un contract de management cu reprezentantul ministerului de resort pentru gestiunea investițiilor specifice. Ministerele au dreptul să coordoneze și să controleze modul de utilizare, întreținere și exploatare a investițiilor.

Consiliul de administrație al unui asemenea liceu se mărește cu doi membri desemnați de ministerele de resort. Formula de memorare: bani prin ministere către bugetele locale, bunuri la autoritatea locală dar folosite exclusiv pentru profil, contract de management și doi membri în plus în consiliul de administrație.`,
      remember: [
        "Finanțarea trece prin bugetele ministerelor de resort către bugetele locale.",
        "Bunurile intră în proprietatea autorității locale, dar sunt folosite exclusiv pentru activitățile liceului de profil.",
        "Consiliul de administrație se mărește cu 2 membri desemnați de ministerele de resort."
      ],
      questions: [
        {
          prompt: "Cum ajunge finanțarea specifică la liceele agricole și silvice?",
          options: ["Direct de la elevi", "Prin transferuri de la bugetul de stat la bugetele locale, prin ministerele de resort", "Exclusiv din sponsorizări", "Numai prin bugetul Ministerului Educației"],
          correct: 1,
          explanation: "Sumele sunt transferate prin bugetele Ministerului Agriculturii, respectiv Ministerului Mediului, către bugetele locale."
        },
        {
          prompt: "Cui îi aparțin bunurile realizate din această finanțare?",
          options: ["Operatorului economic", "Directorului", "Autorității publice locale", "Ministerului Educației"],
          correct: 2,
          explanation: "Bunurile intră în proprietatea autorității locale și rămân afectate exclusiv activităților liceului de profil."
        },
        {
          prompt: "Cu câți membri se mărește consiliul de administrație al liceului agricol sau silvic vizat?",
          options: ["Un membru", "Doi membri", "Trei membri", "Patru membri"],
          correct: 1,
          explanation: "Art. 36 prevede doi membri desemnați de ministerele de resort."
        }
      ],
      legalText: `Art. 36 — (1)-(2) Ministerul Agriculturii și Ministerul Mediului susțin investițiile și cheltuielile materiale ale liceelor cu profil preponderent agricol, respectiv silvic. Finanțarea se face prin transferuri de la bugetul de stat către bugetele locale, prin bugetele ministerelor de resort.

(3) Bunurile finanțate intră în proprietatea autorității locale și se folosesc exclusiv pentru activitățile liceelor de profil, potrivit destinației stabilite.

(4) Lista liceelor se stabilește prin ordine comune ale ministrului educației și miniștrilor de resort.

(5)-(6) Pot fi finanțate noi calificări, perfecționarea profesorilor, manuale, schimburi și stagii. Ministerele pot propune cifra de școlarizare, măsuri organizatorice și noi specializări; cifra se aprobă prin hotărâre a Guvernului.

(7)-(8) Directorul încheie contract de management pentru gestiunea investițiilor, iar ministerele coordonează și controlează utilizarea acestora.

(9) Consiliul de administrație se mărește cu 2 membri desemnați de ministerele de resort.

(10) Utilizarea veniturilor proprii obținute din activitățile didactice specifice se reglementează prin ordin comun.`
    },
    {
      article: 37,
      title: "Infrastructura și practica în profilul agricol și silvic",
      duration: "3 min",
      focus: "sprijin local · practica de specialitate · investiții agricole · dotări",
      narration: `Articolul 37 completează sprijinul acordat liceelor tehnologice cu profil preponderent agricol și silvic. Autoritățile publice locale pot susține infrastructura și mijloacele de învățământ ale acestor licee.

Practica de specialitate se asigură cu sprijinul unităților subordonate Ministerului Agriculturii, respectiv Ministerului Mediului, în colaborare cu structurile județene ale învățământului.

Pentru domeniul agricol, legea enumeră categoriile de investiții și cheltuieli materiale: construcții agricole și zootehnice, săli de clasă și laboratoare; combine, tractoare, mijloace de transport, irigații și echipamente pentru laboratoare, loturi didactice și ateliere; animale vii și dotări pentru zootehnie și medicină veterinară; echipamente de procesare, încălzire, panouri fotovoltaice și digitalizare; plantații pomicole și viticole, sere, solarii și răsadnițe; cantine, internate și săli de sport; întreținerea și repararea bunurilor și costurile generale ale proiectelor.

Ideea centrală este că sprijinul nu se limitează la clădiri. El acoperă întregul ecosistem al pregătirii practice: terenuri și plantații, utilaje, animale, laboratoare, digitalizare, spații de cazare și sport, întreținere și proiectare. Rețineți triada: sprijin local, practică împreună cu unitățile ministerelor și investiții complete pentru formarea profesională.`,
      remember: [
        "Autoritățile locale pot susține infrastructura și mijloacele de învățământ.",
        "Practica este sprijinită de unitățile subordonate ministerelor de resort.",
        "Investițiile includ clădiri, utilaje, laboratoare, plantații, digitalizare și spații auxiliare."
      ],
      questions: [
        {
          prompt: "Cine poate susține suplimentar infrastructura liceelor agricole și silvice?",
          options: ["Numai elevii", "Autoritățile publice locale", "Exclusiv universitățile", "Numai operatorii străini"],
          correct: 1,
          explanation: "Art. 37 prevede expres posibilitatea sprijinului autorităților publice locale."
        },
        {
          prompt: "Cu sprijinul cui se asigură practica de specialitate?",
          options: ["Al unităților subordonate ministerelor de resort, în colaborare cu structurile județene", "Numai al părinților", "Exclusiv al consiliului elevilor", "Doar al primăriei"],
          correct: 0,
          explanation: "Practica este susținută de unitățile subordonate Ministerului Agriculturii sau Ministerului Mediului."
        },
        {
          prompt: "Care dintre următoarele poate face parte din investițiile specifice domeniului agricol?",
          options: ["Numai manualele generale", "Tractoare, sere și echipamente pentru digitalizare", "Exclusiv mobilier administrativ", "Numai transportul profesorilor"],
          correct: 1,
          explanation: "Legea include utilaje, sere, laboratoare și mijloace informatice pentru digitalizare."
        }
      ],
      legalText: `Art. 37 — (1) Autoritățile publice locale pot susține infrastructura și mijloacele de învățământ ale liceelor cu profil preponderent agricol și silvic.

(2) Practica de specialitate se asigură cu sprijinul unităților subordonate ministerelor de resort, în colaborare cu structurile județene competente.

(3) Investițiile și cheltuielile agricole includ construcții și laboratoare, utilaje și mijloace de transport, irigații, animale și echipamente zootehnice și veterinare, procesare, încălzire și fotovoltaice, digitalizare, plantații, sere și solarii, cantine, internate, săli de sport, întreținere, reparații și costuri generale ale proiectelor.`
    },
    {
      article: 38,
      title: "Învățământul din sistemul de apărare și ordine publică",
      duration: "4 min",
      focus: "învățământ de stat · structură · planuri-cadru · curriculum militar · reglementări proprii",
      narration: `Articolul 38 deschide secțiunea privind învățământul preuniversitar din sistemul de apărare, ordine publică și securitate națională. Acest învățământ este de stat și este parte integrantă a sistemului național de învățământ.

Structura organizatorică, nivelurile, profilurile, calificările, cifrele anuale de școlarizare și criteriile de selecție a candidaților sunt propuse Ministerului Educației de ministerele și instituțiile interesate, în funcție de specificul fiecărei arme și forme de organizare. Aprobarea se face potrivit regulilor legale aplicabile instituțiilor civile.

Planurile-cadru pentru liceele militare sunt elaborate de Ministerul Educației în colaborare cu Ministerul Apărării Naționale și se aprobă prin ordin al ministrului educației. Programele disciplinelor de specialitate militară sunt elaborate de Ministerul Apărării și aprobate de Ministerul Educației.

Curriculumul pentru formarea maiștrilor militari, subofițerilor, agenților de poliție și agenților de poliție penitenciară este elaborat pe arme, servicii și specialități de instituțiile responsabile și se aprobă de acestea cu avizul Ministerului Educației. Formarea se bazează pe standarde ocupaționale și standarde de pregătire profesională aprobate de instituțiile de resort.

Aplicarea legii la specificul militar, de ordine publică și securitate națională se face prin ordine, regulamente și instrucțiuni proprii. Rețineți: parte a sistemului național, propuneri de la instituțiile de resort, colaborare cu Educația și reglementări proprii pentru specificul militar.`,
      remember: [
        "Învățământul militar este învățământ de stat și parte a sistemului național.",
        "Planurile-cadru liceale militare sunt elaborate de Ministerul Educației cu Ministerul Apărării.",
        "Specificul militar se aplică prin ordine, regulamente și instrucțiuni proprii."
      ],
      questions: [
        {
          prompt: "Ce statut are învățământul preuniversitar militar?",
          options: ["Învățământ particular", "Învățământ de stat, parte a sistemului național", "Formare exclusiv internă, în afara sistemului", "Educație extrașcolară"],
          correct: 1,
          explanation: "Art. 38 îl definește ca învățământ de stat și parte integrantă a sistemului național."
        },
        {
          prompt: "Cine elaborează planurile-cadru pentru învățământul liceal militar?",
          options: ["Numai Ministerul Apărării", "Ministerul Educației în colaborare cu Ministerul Apărării", "Fiecare liceu separat", "Autoritatea locală"],
          correct: 1,
          explanation: "Planurile-cadru sunt elaborate în colaborare și aprobate prin ordin al ministrului educației."
        },
        {
          prompt: "Prin ce se adaptează aplicarea legii la specificul militar?",
          options: ["Prin acord verbal", "Prin ordine, regulamente și instrucțiuni proprii", "Numai prin hotărârea consiliului local", "Prin regulamentul fiecărei clase"],
          correct: 1,
          explanation: "Articolul indică ordine, regulamente și instrucțiuni proprii."
        }
      ],
      legalText: `Art. 38 — (1) Învățământul preuniversitar militar din sistemul de apărare, ordine publică și securitate națională este învățământ de stat și parte integrantă a sistemului național.

(2) Structura, nivelurile, profilurile, calificările, cifrele de școlarizare și criteriile de selecție se propun Ministerului Educației de instituțiile de resort și se aprobă potrivit regulilor aplicabile învățământului civil.

(3) Planurile-cadru liceale militare sunt elaborate de Ministerul Educației cu Ministerul Apărării și aprobate prin ordin; programele de specialitate militară sunt elaborate de Ministerul Apărării și aprobate de Ministerul Educației.

(4)-(6) Curriculumul și standardele pentru formarea personalului militar și de ordine publică sunt elaborate și aprobate de instituțiile de resort, cu avizul Ministerului Educației unde legea îl cere.

(7) Aplicarea legii la specificul militar se face prin ordine, regulamente și instrucțiuni proprii.`
    },
    {
      article: 39,
      title: "Conducerea unităților militare",
      duration: "2 min",
      focus: "comandant sau director · numire · statute speciale · consiliul de conducere",
      narration: `Articolul 39 stabilește regula generală de conducere a unităților de învățământ preuniversitar militar, de apărare, ordine publică și securitate națională.

Conducerea este exercitată de comandant sau de director, după caz. Persoana este numită în funcție potrivit legislației care reglementează statutele personalului Ministerului Apărării Naționale, Ministerului Afacerilor Interne sau Ministerului Justiției.

Comandantul sau directorul unității de învățământ militar este și președintele consiliului de conducere. Așadar, articolul reunește conducerea executivă și președinția structurii colegiale în aceeași persoană.

Formula de memorare este scurtă: comandant sau director, numire după statutele instituției de resort și președinte al consiliului de conducere.`,
      remember: [
        "Unitatea este condusă de comandant sau director, după caz.",
        "Numirea se face conform statutelor personalului instituției de resort.",
        "Comandantul sau directorul este și președintele consiliului de conducere."
      ],
      questions: [
        {
          prompt: "Cine exercită conducerea unei unități de învățământ militar?",
          options: ["Numai inspectorul școlar", "Comandantul sau directorul, după caz", "Consiliul local", "Reprezentantul părinților"],
          correct: 1,
          explanation: "Art. 39 indică expres comandantul sau directorul."
        },
        {
          prompt: "Potrivit căror reguli se face numirea conducătorului?",
          options: ["Regulamentului consiliului elevilor", "Legislației privind statutele personalului ministerelor de resort", "Exclusiv Codului civil", "Hotărârii primăriei"],
          correct: 1,
          explanation: "Numirea urmează statutele personalului Ministerului Apărării, Internelor sau Justiției."
        },
        {
          prompt: "Ce altă calitate are comandantul sau directorul unității militare?",
          options: ["Președinte al consiliului de conducere", "Inspector școlar general", "Primar", "Președinte al consiliului județean"],
          correct: 0,
          explanation: "Conducătorul unității este și președintele consiliului de conducere."
        }
      ],
      legalText: `Art. 39 — Conducerea unităților de învățământ preuniversitar militar, de apărare, ordine publică și securitate națională se exercită de comandant sau director, după caz, numit potrivit legislației care reglementează statutele personalului ministerelor de resort. Comandantul sau directorul este și președintele consiliului de conducere.`
    },
    {
      article: 40,
      title: "Structurile de conducere din învățământul militar",
      duration: "5 min",
      focus: "consiliu de conducere · maximum 15 · comandant · director · locțiitor · componență",
      narration: `Articolul 40 detaliază conducerea unităților militare. Consiliul de conducere îndeplinește atribuțiile consiliului de administrație și are maximum 15 membri.

În unitățile din Ministerul Apărării Naționale, conducerea este exercitată de comandant. La nivelul liceului militar, comandantul este ajutat de director și de locțiitor. Directorul este și președintele consiliului profesoral, iar locțiitorul îndeplinește și atribuțiile directorului adjunct.

Directorul liceului militar conduce, îndrumă și controlează activitățile procesului educațional. Funcția de director se ocupă potrivit reglementărilor emise prin ordin comun al Ministerului Educației și Ministerului Apărării.

Consiliul de conducere al liceului militar are următoarea componență: comandantul, directorul, locțiitorul, patru cadre didactice, consilierul juridic, contabilul-șef, reprezentantul eșalonului superior, reprezentantul elevilor și doi reprezentanți ai părinților.

În unitățile postliceale militare, de ordine publică și securitate națională, comandantul sau directorul este ajutat de cel mult doi locțiitori sau directori adjuncți. Unul dintre ei este și președintele consiliului profesoral. În unitățile postliceale militare ale Ministerului Apărării, atribuțiile directorului adjunct sunt îndeplinite de locțiitor.

Rețineți schema: consiliul de conducere ține locul consiliului de administrație; maximum 15; la liceu, comandant plus director și locțiitor; directorul conduce procesul educațional; în postliceal sunt cel mult doi adjuncți sau locțiitori.`,
      remember: [
        "Consiliul de conducere îndeplinește atribuțiile CA și are maximum 15 membri.",
        "La liceul militar, directorul este președintele consiliului profesoral.",
        "În postliceal, conducătorul este ajutat de cel mult 2 locțiitori/directori adjuncți."
      ],
      questions: [
        {
          prompt: "Câți membri poate avea cel mult consiliul de conducere?",
          options: ["9", "11", "13", "15"],
          correct: 3,
          explanation: "Limita stabilită de art. 40 este de maximum 15 membri."
        },
        {
          prompt: "Cine este președintele consiliului profesoral într-un liceu militar?",
          options: ["Comandantul", "Directorul", "Locțiitorul", "Contabilul-șef"],
          correct: 1,
          explanation: "Directorul liceului militar este și președintele consiliului profesoral."
        },
        {
          prompt: "De câți locțiitori/directori adjuncți poate fi ajutat cel mult conducătorul unei unități postliceale militare?",
          options: ["Unul", "Doi", "Trei", "Patru"],
          correct: 1,
          explanation: "Articolul stabilește un maximum de doi."
        }
      ],
      legalText: `Art. 40 — (1) Consiliul de conducere îndeplinește atribuțiile consiliului de administrație și are maximum 15 membri.

(2)-(4) În unitățile Ministerului Apărării, conducerea aparține comandantului. La liceu, acesta este ajutat de director — președintele consiliului profesoral — și de locțiitor, care exercită atribuțiile directorului adjunct. Directorul conduce activitățile educaționale și ocupă funcția potrivit ordinului comun al ministerelor.

(5) Consiliul liceului militar cuprinde comandantul, directorul, locțiitorul, 4 cadre didactice, consilierul juridic, contabilul-șef, reprezentantul eșalonului superior, reprezentantul elevilor și 2 reprezentanți ai părinților.

(6)-(7) În postliceal, conducătorul este ajutat de cel mult 2 locțiitori/directori adjuncți, dintre care unul prezidează consiliul profesoral. În unitățile MApN, locțiitorul îndeplinește atribuțiile directorului adjunct.`
    },
    {
      article: 41,
      title: "Consiliul de conducere în postlicealul militar",
      duration: "2 min",
      focus: "învățământ postliceal militar · limită · ordin · instituția de resort",
      narration: `Articolul 41 reglementează consiliul de conducere al unităților de învățământ postliceal militar, de apărare, ordine publică și securitate națională.

Consiliul se constituie în limita numerică stabilită la articolul 40, adică maximum 15 membri. Componența concretă nu este stabilită identic pentru toate sistemele, ci prin ordin al conducătorului fiecărui minister sau al fiecărei instituții de apărare, ordine publică și securitate națională în subordinea căreia funcționează unitatea.

Prin urmare, există o limită comună, dar constituirea concretă ține de instituția de resort. Rețineți formula: postliceal militar, maximum 15, ordinul conducătorului instituției în subordinea căreia funcționează unitatea.`,
      remember: [
        "Articolul privește consiliul de conducere al unităților postliceale militare.",
        "Se păstrează limita de maximum 15 membri.",
        "Constituirea se face prin ordin al conducătorului ministerului sau instituției de resort."
      ],
      questions: [
        {
          prompt: "Ce tip de unități vizează direct art. 41?",
          options: ["Grădinițele militare", "Unitățile postliceale militare, de apărare și ordine publică", "Numai liceele teoretice", "Palatele copiilor"],
          correct: 1,
          explanation: "Articolul se referă la consiliile unităților postliceale din sistemele de apărare și securitate."
        },
        {
          prompt: "Care este limita numerică a consiliului de conducere?",
          options: ["Maximum 9", "Maximum 11", "Maximum 15", "Nu există limită"],
          correct: 2,
          explanation: "Art. 41 trimite la limita de maximum 15 membri din art. 40 alin. (1)."
        },
        {
          prompt: "Prin ce act se stabilește constituirea consiliului?",
          options: ["Prin ordin al conducătorului ministerului sau instituției de resort", "Prin decizia primarului", "Prin votul părinților", "Prin ordinul prefectului"],
          correct: 0,
          explanation: "Constituirea se stabilește prin ordinul conducătorului instituției în subordinea căreia funcționează unitatea."
        }
      ],
      legalText: `Art. 41 — Consiliul de conducere din unitățile de învățământ postliceal militar, de apărare, ordine publică și securitate națională este constituit în limita de maximum 15 membri, prin ordin al conducătorului ministerului sau instituției de resort în subordinea căreia funcționează unitatea.`
    },
    {
      article: 42,
      title: "Finanțarea învățământului militar",
      duration: "2 min",
      focus: "finanțare de bază · complementară · specială · instruire · întreținere · buget de stat",
      narration: `Articolul 42 stabilește cine finanțează învățământul preuniversitar din sistemul de apărare, ordine publică și securitate națională.

Forma actualizată include trei componente: finanțarea de bază, finanțarea complementară și finanțarea specială. La acestea se adaugă cheltuielile de instruire și întreținere a elevilor.

Aceste cheltuieli sunt asigurate de Ministerul Apărării Naționale, Ministerul Afacerilor Interne, Ministerul Justiției și de celelalte instituții cu atribuții în domeniile apărării, informațiilor, ordinii publice și securității naționale. Sursa o reprezintă fondurile alocate din bugetul de stat.

Modificarea din 2024 a adăugat expres finanțarea specială și a clarificat aplicarea inclusiv pentru anul școlar 2023–2024. Pentru memorare, folosiți formula: trei finanțări — de bază, complementară, specială — plus instruire și întreținere, din bugetul de stat prin instituțiile de resort.`,
      remember: [
        "Articolul include finanțarea de bază, complementară și specială.",
        "Sunt acoperite și cheltuielile de instruire și întreținere a elevilor.",
        "Fondurile sunt alocate din bugetul de stat prin instituțiile de resort."
      ],
      questions: [
        {
          prompt: "Ce tipuri de finanțare enumeră forma actualizată a art. 42?",
          options: ["Numai finanțarea de bază", "Finanțarea de bază și locală", "Finanțarea de bază, complementară și specială", "Numai finanțarea specială"],
          correct: 2,
          explanation: "După modificarea din 2024, sunt enumerate toate cele trei componente."
        },
        {
          prompt: "Ce cheltuieli mai sunt acoperite, pe lângă cele trei tipuri de finanțare?",
          options: ["Numai publicitatea", "Instruirea și întreținerea elevilor", "Doar transportul profesorilor", "Exclusiv investițiile locale"],
          correct: 1,
          explanation: "Articolul menționează expres cheltuielile de instruire și întreținere."
        },
        {
          prompt: "Care este sursa fondurilor prevăzute la art. 42?",
          options: ["Cotizațiile părinților", "Bugetul de stat", "Taxele elevilor", "Fondul clasei"],
          correct: 1,
          explanation: "Finanțarea este asigurată din fondurile alocate de la bugetul de stat."
        }
      ],
      legalText: `Art. 42 — În forma modificată prin OUG nr. 10/2024 și aprobată prin Legea nr. 88/2025, finanțarea de bază, complementară și specială, precum și cheltuielile de instruire și întreținere a elevilor din sistemul de apărare, ordine publică și securitate națională sunt asigurate de Ministerul Apărării Naționale, Ministerul Afacerilor Interne, Ministerul Justiției și alte instituții de resort, din fondurile alocate din bugetul de stat. Textul modificator a precizat aplicarea inclusiv pe parcursul anului școlar 2023–2024.`
    },
    {
      article: 43,
      title: "Efectele certificatelor militare după trecerea în rezervă",
      duration: "2 min",
      focus: "certificate · competențe · rezervă · funcții civile echivalente",
      narration: `Articolul 43 reglementează efectele certificatelor de absolvire și ale competențelor profesionale obținute în învățământul din sistemul de apărare.

După trecerea în rezervă și în condițiile legii, deținătorii legali ai acestor certificate și competențe au dreptul să ocupe funcții echivalente cu cele ale absolvenților instituțiilor civile de învățământ.

Echivalența nu este generală pentru orice funcție. Funcția civilă trebuie să aibă un profil apropiat și același nivel de pregătire. Sunt, așadar, trei condiții de reținut: trecerea în rezervă, respectarea legii și corespondența de profil și nivel.

Formula scurtă este: certificat militar plus trecere în rezervă egal acces la funcție civilă echivalentă, cu profil apropiat și același nivel.`,
      remember: [
        "Dreptul se exercită după trecerea în rezervă și în condițiile legii.",
        "Funcția civilă trebuie să fie echivalentă.",
        "Se cere profil apropiat și același nivel de pregătire."
      ],
      questions: [
        {
          prompt: "Când produc certificatele efectul profesional civil prevăzut la art. 43?",
          options: ["Imediat după înscriere", "După trecerea în rezervă, în condițiile legii", "Numai înainte de absolvire", "Doar în timpul serviciului activ"],
          correct: 1,
          explanation: "Articolul leagă acest drept de trecerea în rezervă și de condițiile legii."
        },
        {
          prompt: "Ce fel de funcții pot ocupa deținătorii certificatelor?",
          options: ["Orice funcție publică", "Funcții echivalente cu cele ale absolvenților instituțiilor civile", "Numai funcții militare", "Exclusiv funcții didactice"],
          correct: 1,
          explanation: "Dreptul privește funcții civile echivalente."
        },
        {
          prompt: "Ce condiții trebuie să îndeplinească profilul funcției civile?",
          options: ["Să fie complet diferit", "Să fie apropiat și de același nivel", "Să fie doar administrativ", "Să fie stabilit de părinte"],
          correct: 1,
          explanation: "Art. 43 cere profil apropiat și același nivel de pregătire."
        }
      ],
      legalText: `Art. 43 — Certificatele de absolvire și competențele profesionale dau deținătorilor legali, după trecerea în rezervă și în condițiile legii, dreptul de a ocupa funcții echivalente cu cele ale absolvenților instituțiilor civile de învățământ cu profil apropiat și de același nivel.`
    },
    {
      article: 44,
      title: "Asigurarea calității în învățământul militar",
      duration: "2 min",
      focus: "unități militare · specializări · calificări · aceleași mecanisme de calitate",
      narration: `Articolul 44 închide secțiunea dedicată învățământului din sistemul de apărare printr-o regulă de echivalență în asigurarea calității.

Unitățile de învățământ preuniversitar din sistemul de apărare, ordine publică și securitate națională sunt supuse mecanismelor de asigurare a calității. Regula se aplică și specializărilor și calificărilor profesionale organizate în aceste unități.

Standardul de comparație este învățământul civil: unitățile și programele militare se supun mecanismelor de calitate la fel ca unitățile de învățământ preuniversitar civil. Specificul militar nu înlătură controlul calității.

Formula de memorare este: unitate, specializare, calificare — toate intră în aceleași mecanisme de asigurare a calității ca în sistemul civil.`,
      remember: [
        "Unitățile militare sunt supuse mecanismelor de asigurare a calității.",
        "Regula include specializările și calificările profesionale.",
        "Mecanismele sunt aceleași ca pentru unitățile civile."
      ],
      questions: [
        {
          prompt: "Ce unități vizează art. 44?",
          options: ["Numai unitățile particulare", "Unitățile din sistemul de apărare, ordine publică și securitate națională", "Numai universitățile", "Exclusiv cluburile sportive"],
          correct: 1,
          explanation: "Articolul se referă la unitățile preuniversitare ale sistemelor de apărare și securitate."
        },
        {
          prompt: "Ce elemente sunt incluse, pe lângă unitățile de învățământ?",
          options: ["Numai clădirile", "Specializările și calificările profesionale", "Doar uniformele", "Exclusiv bursele"],
          correct: 1,
          explanation: "Mecanismele de calitate se aplică și specializărilor și calificărilor."
        },
        {
          prompt: "Cu ce se compară mecanismele de asigurare a calității din sistemul militar?",
          options: ["Cu cele din firme private", "Cu cele aplicate unităților preuniversitare civile", "Cu regulile autorităților locale", "Cu standardele sportive"],
          correct: 1,
          explanation: "Legea stabilește aplicarea mecanismelor de calitate precum în unitățile civile."
        }
      ],
      legalText: `Art. 44 — Unitățile de învățământ preuniversitar din sistemul de apărare, ordine publică și securitate națională, precum și specializările și calificările profesionale din cadrul acestora se supun mecanismelor de asigurare a calității precum unitățile de învățământ preuniversitar civil.`
    }
  );
})();
