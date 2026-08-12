"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–191: verificare 12.08.2026";
  DATA.modules.push({
    id: 15,
    title: "Ocuparea funcțiilor, formarea continuă și mobilitatea",
    articles: "176–191",
    chapter: "Titlul III",
    startArticle: 176,
    endArticle: 191
  });

  DATA.lessons.push(
    L(
      176,
      "Condițiile minime de studii pentru funcțiile didactice",
      "15 min",
      "studii minime · educație timpurie · primar · profesor · învățământ special · situații excepționale",
      `Articolul 176 este unul dintre cele mai dense articole ale statutului personalului didactic. El stabilește condițiile minime de studii pentru ocuparea funcțiilor enumerate la art. 165. Pentru concurs este mai ușor să îl învățați pe familii de funcții, nu ca pe o listă continuă.

În educația timpurie, educatorul sau educatoarea trebuie să absolve liceul pedagogic, specializarea „Educație timpurie”, cu diplomă de bacalaureat, iar profesorul pentru educație timpurie trebuie să absolve cu diplomă de licență specializarea „Educație timpurie”. Pentru învățătorul debutant suplinitor este cerut liceul pedagogic, specializarea „Pedagogia învățământului primar”. Pentru profesorul pentru învățământ primar legea prevede rute care combină pregătirea pedagogică liceală ori licența de profil cu studiile universitare cerute.

Pentru profesorul din gimnaziu, liceu și învățământ terțiar nonuniversitar, profesorul de instruire practică, profesorul documentarist și profesorul corepetitor sunt prevăzute mai multe rute. OUG nr. 95/2024 a actualizat această parte: între variante se află licența în profilul postului, formarea psihopedagogică de 30 de credite ECTS și masteratul didactic de un an; licența în Științe ale educației plus masterat didactic de un an pentru posturile asociate domeniului; licența în profil plus masterat didactic de un an și jumătate; sau licența didactică cu dublă specializare în profilul postului.

Pentru maistru-instructor sunt necesare bacalaureatul, pregătirea postliceală, de colegiu terțiar sau de școală de maiștri în domeniu și formarea psihopedagogică. Pentru funcțiile din învățământul special se adaugă, după caz, modulul de educație specială și un stagiu practic de un an școlar sub îndrumarea unui profesor mentor cu experiență în educația specială. Articolul detaliază separat profesorul-psihopedagog, logopedul, profesorul itinerant și de sprijin, profesorul-psiholog, profesorul-consilier școlar și alte funcții specifice.

Există și reguli speciale. Pentru profesorii din învățământul vocațional teologic este necesar avizul cultului recunoscut oficial de stat. Condițiile pentru CCD, școlile din spital și profesorul-mentor se stabilesc prin metodologie. În lipsă justificată de personal, legea permite, cu avizul structurii județene și în condițiile metodologiei, angajarea temporară a unor cadre asociate, suplinitori debutanți ori, în ultimă instanță, persoane fără studii corespunzătoare postului.

Regimul tranzitoriu este esențial: art. 249 păstrează mai multe rute și drepturi pentru absolvenții formelor vechi de pregătire, iar obligația generală de respectare a noilor condiții de la art. 176 pentru studenții și absolvenții care optează pentru cariera didactică este stabilită începând cu anul 2029. Nu confundați, așadar, modelul-țintă din art. 176 cu toate excepțiile tranzitorii aplicabile până atunci.`,
      [
        "Art. 176 grupează condițiile de studii în funcție de tipul funcției didactice.",
        "OUG nr. 95/2024 a actualizat rutele de pregătire pentru funcțiile de profesor de la alin. (1) lit. e).",
        "Pentru învățământul special apar frecvent modulul de educație specială și stagiul practic de un an.",
        "Art. 249 conține excepții tranzitorii, iar noile condiții devin reper general pentru noii candidați din 2029."
      ],
      [
        Q("Ce studii sunt cerute, ca regulă, pentru funcția de profesor pentru educație timpurie?", ["Licență în specializarea Educație timpurie","Numai gimnaziul","Orice liceu fără bacalaureat","Exclusiv un curs de prim ajutor"], 0, "Art. 176 alin. (1) lit. b) cere diploma de licență în specializarea Educație timpurie."),
        Q("Ce element apare frecvent suplimentar pentru funcțiile din învățământul special?", ["Permis de conducere categoria C","Certificat de urbanism","Modul de educație specială și stagiu practic","Mandat electoral"], 2, "Pentru numeroase funcții din învățământul special sunt cerute modulul de educație specială și un stagiu practic de un an școlar."),
        Q("Ce act a actualizat în 2024 rutele de studii de la art. 176 alin. (1) lit. e)?", ["Legea nr. 6/2026","OUG nr. 95/2024","Codul rutier","Legea nr. 141/2025"], 1, "OUG nr. 95/2024 a modificat pct. (ii) și a introdus ruta licenței didactice cu dublă specializare.")
      ],
      "Art. 176 — Stabilește condițiile minime de studii pentru funcțiile didactice, regulile speciale pentru anumite domenii și posibilitățile temporare de încadrare în situații justificate de lipsă de personal; se citește împreună cu excepțiile tranzitorii din art. 249."
    ),
    L(
      177,
      "Concursul pentru ocuparea posturilor didactice",
      "9 min",
      "concurs național unic · caracter deschis · validare · director · jumătate de normă · învățământ particular",
      `Articolul 177 descrie modelul legal pentru ocuparea posturilor didactice și a catedrelor vacante sau rezervate. În învățământul de stat, acestea se ocupă prin concurs național unic, organizat de structura județeană, potrivit unei metodologii-cadru aprobate prin ordin al ministrului după consultarea partenerilor de dialog social. Legea fixează ca termen data de 15 noiembrie a fiecărui an.

Concursul are caracter deschis. Poate participa orice persoană care îndeplinește condițiile de studii de la art. 176. În sistemul de stat, structura județeană validează concursul, iar directorul unității, ca reprezentant legal, încheie contractul individual de muncă pe baza deciziei de repartizare.

Pentru concursul național unic, catedra trebuie să cuprindă cel puțin o jumătate de normă didactică de predare și poate fi constituită la nivelul uneia sau mai multor unități. Procedura de constituire a posturilor se aprobă prin ordin al ministrului.

În învățământul particular, concursul poate fi organizat la nivelul unității sau prin asociere temporară locală, județeană ori interjudețeană, după reglementări proprii. Unitățile particulare pot opta și pentru mecanismul concursului național. Pentru unitățile tehnice care școlarizează exclusiv învățământ tehnic și au o pondere majoritară a dualului, candidatura este însoțită de avizul consiliului de administrație.

Pentru forma aplicabilă în prezent este obligatorie precizarea tranzitorie: potrivit art. 248 alin. (6), concursul național de ocupare a posturilor se organizează după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv. În plus, structurile DJIP/DMBIP din textul noii legi sunt prorogate până la începutul anului școlar 2027–2028, astfel că atribuțiile sunt exercitate în prezent de inspectoratele școlare.`,
      [
        "Concursul pentru posturile de stat este național unic și are caracter deschis.",
        "Catedra pentru concursul național cuprinde cel puțin o jumătate de normă.",
        "Directorul încheie contractul pe baza deciziei de repartizare.",
        "Până în anul școlar 2027–2028 inclusiv, concursul continuă după regulile Legii nr. 1/2011."
      ],
      [
        Q("Ce caracter are concursul pentru ocuparea posturilor didactice vacante sau rezervate?", ["Închis publicului","Exclusiv local","Deschis","Secret"], 2, "Art. 177 alin. (3) stabilește caracterul deschis al concursului."),
        Q("Care este dimensiunea minimă a catedrei constituite pentru concursul național unic?", ["O jumătate de normă","Două norme","Un sfert de normă în toate cazurile","Nu există nicio regulă"], 0, "Art. 177 alin. (7) cere cel puțin o jumătate de normă didactică de predare."),
        Q("Cine încheie contractul individual de muncă în unitatea de stat, pe baza deciziei de repartizare?", ["Consiliul elevilor","Primarul","Directorul unității","Sindicatul"], 2, "Directorul este reprezentantul legal care realizează angajarea pe baza deciziei de repartizare.")
      ],
      "Art. 177 — Reglementează concursul deschis pentru ocuparea posturilor didactice, validarea și angajarea, constituirea catedrei și particularitățile sistemului privat; aplicarea se corelează cu regimul tranzitoriu din art. 248 alin. (6)."
    ),
    L(
      178,
      "Ocuparea posturilor didactice auxiliare și administrative",
      "4 min",
      "director · consiliul de administrație · comisii · validarea rezultatelor · înscriere online",
      `Articolul 178 separă concursurile pentru personalul didactic auxiliar și administrativ de concursul național al personalului de predare. În unitatea de învățământ de stat, organizarea și desfășurarea concursului sunt coordonate de director.

Consiliul de administrație are două atribuții-cheie: aprobă comisiile de concurs și validează rezultatele. Angajarea se face de director, prin încheierea contractului individual de muncă, cu aprobarea consiliului de administrație.

În unitatea particulară, directorul încheie contractul în baza hotărârii consiliului de administrație. Legea permite expres ca înscrierea la concurs să fie realizată și online.

Schema de memorare este simplă: directorul coordonează și angajează; consiliul de administrație aprobă comisiile, validează rezultatele și aprobă sau hotărăște angajarea, după tipul unității.`,
      [
        "Directorul coordonează concursul pentru posturile auxiliare și administrative.",
        "Consiliul de administrație aprobă comisiile și validează rezultatele.",
        "Înscrierea la concurs poate avea loc și online."
      ],
      [
        Q("Cine coordonează concursul pentru posturile didactice auxiliare și administrative într-o unitate de stat?", ["Directorul","Consiliul local","Consiliul elevilor","Prefectul"], 0, "Art. 178 alin. (1) atribuie coordonarea directorului."),
        Q("Cine validează rezultatele concursului într-o unitate de stat?", ["Comitetul de părinți","Consiliul de administrație","Biblioteca județeană","Operatorul economic"], 1, "Consiliul de administrație validează rezultatele."),
        Q("Cum se poate realiza înscrierea la concurs?", ["Numai prin poștă","Exclusiv verbal","Și în format online","Numai prin notar"], 2, "Art. 178 alin. (3) permite și înscrierea online.")
      ],
      "Art. 178 — Directorul coordonează concursul pentru personalul didactic auxiliar și administrativ și încheie contractele, iar consiliul de administrație aprobă comisiile și validează rezultatele; înscrierea poate fi online."
    ),
    L(
      179,
      "Evaluarea anuală și stimularea excelenței didactice",
      "8 min",
      "evaluare anuală · calificativ · gradație de merit · management · excelență didactică",
      `Articolul 179 instituie evaluarea anuală a activității personalului didactic de predare și didactic auxiliar în fiecare unitate și instituție din sistemul național de învățământ preuniversitar. Metodologia este stabilită prin ordin al ministrului educației.

Rezultatele evaluării fundamentează hotărârea consiliului de administrație privind calificativul anual și gradația de merit. Este importantă formularea „stau la baza hotărârii”: evaluarea produce informația, iar consiliul de administrație adoptă hotărârea în limitele procedurilor aplicabile.

Articolul distribuie și competențele pentru evaluarea managerială. În modelul noii legi, structura județeană evaluează directorii și directorii adjuncți ai unităților de stat, iar consiliul de administrație evaluează directorii unităților particulare. Ministerul evaluează conducerea structurii județene, iar ARACIIP evaluează directorul biroului județean propriu. Până la reorganizarea prevăzută de lege, aceste denumiri trebuie citite împreună cu regimul tranzitoriu al inspectoratelor și ARACIP.

Ministerul dezvoltă Programul național de stimulare a excelenței didactice. Sunt vizate trei categorii: profesorii cu rezultate excelente în practica didactică, cei care aplică practici inovative și cei care lucrează cu elevi în risc educațional și demonstrează progres în învățarea acestora. Programul este finanțat din bugetul ministerului, iar metodologia sa se aprobă prin ordin.`,
      [
        "Evaluarea personalului didactic de predare și auxiliar are loc anual.",
        "Rezultatele evaluării fundamentează calificativul anual și gradația de merit.",
        "Excelența didactică include rezultatele excelente, inovarea și progresul elevilor aflați în risc."
      ],
      [
        Q("Cât de des se realizează evaluarea activității personalului didactic?", ["O dată la zece ani","Anual","Numai la pensionare","Doar la cerere"], 1, "Art. 179 alin. (1) prevede evaluarea anuală."),
        Q("La baza căror hotărâri ale consiliului de administrație stau rezultatele evaluării?", ["Calificativ anual și gradație de merit","Înființarea unui județ","Admiterea la facultate","Acordarea permisului auto"], 0, "Alineatul (2) leagă rezultatele de calificativ și gradația de merit."),
        Q("Cine poate fi premiat prin Programul național de stimulare a excelenței didactice?", ["Numai profesorii fără activitate la clasă","Profesorii care demonstrează progres cu elevi în risc educațional","Exclusiv personalul administrativ","Numai membrii consiliului local"], 1, "Programul include profesorii care lucrează cu elevi în risc și demonstrează progresul acestora.")
      ],
      "Art. 179 — Reglementează evaluarea anuală a personalului și managementului, legătura cu calificativul și gradația de merit și Programul național de stimulare a excelenței didactice."
    ),
    L(
      180,
      "Contractul pe durata viabilității postului",
      "4 min",
      "contract determinat · viabilitatea postului · licențiere · nota 7 · ultimii 6 ani · mobilitate",
      `Articolul 180 permite consiliului de administrație să propună transformarea unui contract individual de muncă încheiat pe un an într-un contract pe durata de viabilitate a postului sau catedrei.

Sunt cumulative trei condiții principale. Cadrul didactic trebuie să fi promovat examenul de licențiere în cariera didactică, să fi obținut cel puțin nota sau media 7 la un concurs național de ocupare a posturilor în ultimii 6 ani și postul trebuie să fie vacant.

Cadrele didactice care beneficiază de această modificare pot participa la etapele mobilității personalului didactic, potrivit metodologiei aprobate prin ordin al ministrului după consultarea partenerilor de dialog social.

Rețineți că articolul exprimă modelul noii cariere. În perioada tranzitorie, licențierea și concursul trebuie corelate cu definitivatul și titularizarea organizate după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv.`,
      [
        "Consiliul de administrație poate propune trecerea la contract pe durata viabilității postului.",
        "Sunt cerute licențierea, minimum 7 la concurs în ultimii 6 ani și existența unui post vacant.",
        "Beneficiarul poate participa la etapele de mobilitate."
      ],
      [
        Q("Ce notă sau medie minimă este cerută la concurs pentru modificarea contractului?", ["5","6","7","10 exclusiv"], 2, "Art. 180 alin. (1) cere cel puțin nota/media 7."),
        Q("În ce interval trebuie să fi fost obținut rezultatul la concurs?", ["În ultimii 6 ani","În ultimii 20 de ani","Numai în anul curent","Nu există interval"], 0, "Legea stabilește intervalul ultimilor 6 ani."),
        Q("Ce condiție trebuie să îndeplinească postul?", ["Să fie desființat","Să fie vacant","Să aparțină unei firme","Să aibă exclusiv două ore"], 1, "Transformarea este posibilă dacă postul este vacant.")
      ],
      "Art. 180 — Permite, în condiții cumulative, transformarea contractului de un an într-un contract pe durata viabilității postului și recunoaște accesul beneficiarilor la mobilitate."
    ),
    L(
      181,
      "Formele de angajare și organizarea concursurilor",
      "12 min",
      "nedeterminat · viabilitatea postului · determinat · plata cu ora · publicarea posturilor · probe",
      `Articolul 181 reglementează formele în care poate fi angajat personalul didactic de predare: contract pe perioadă nedeterminată, contract pe durata viabilității postului, contract pe perioadă determinată de cel mult un an școlar, cu posibilitatea prelungirii, sau regim de plata cu ora.

Posturile se constituie pe baza planurilor-cadru și a normativelor privind formațiunile de studiu. Activitățile de laborator și instruire practică din liceu se pot desfășura pe grupe, în limitele normativelor.

Pentru posturile ocupate pe perioadă nedeterminată sau determinată, concursul din sistemul de stat cuprinde inspecție specială la clasă ori probă practică și probă scrisă. Pentru plata cu ora, personalul asociat și pensionat, concursul este organizat la nivelul unității, potrivit metodologiei, până la 15 noiembrie.

Consiliul de administrație stabilește posturile disponibile, durata posibilă a angajării și statutul de post vacant sau rezervat, apoi le comunică structurii județene. Lista se publică la structură, la unități și pe site-urile acestora cu cel puțin 30 de zile înainte de începerea selecției și angajării.

Candidatul care dorește să predea într-o limbă diferită de limba în care și-a făcut studiile susține o probă de competențe lingvistice de specialitate. Subiectele probei scrise la concursul național sunt stabilite de minister, iar lucrările sunt evaluate în centre pe specialități. Legea prevede și o probă de evaluare a competențelor digitale.

Și aici se aplică precizarea tranzitorie: concursul național continuă după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv, iar atribuțiile indicate în text pentru DJIP/DMBIP sunt exercitate în prezent prin structurile existente.`,
      [
        "Legea permite patru regimuri principale de angajare: nedeterminat, viabilitatea postului, determinat și plata cu ora.",
        "Lista posturilor se publică cu cel puțin 30 de zile înaintea procedurilor.",
        "Concursul național include inspecție/probă practică, probă scrisă și, în modelul legii, evaluarea competențelor digitale."
      ],
      [
        Q("Care este durata maximă obișnuită a contractului pe perioadă determinată prevăzut la art. 181 alin. (1)?", ["Cel mult un an școlar","Exact zece ani","Nelimitată","O singură zi"], 0, "Textul stabilește cel mult un an școlar, cu posibilitatea prelungirii."),
        Q("Cu cât timp înainte de selecție trebuie publicată lista posturilor?", ["Cu o zi","Cu cel puțin 30 de zile","După concurs","Cu exact 5 ani"], 1, "Art. 181 alin. (9) stabilește minimum 30 de zile."),
        Q("Ce susține candidatul care dorește să predea în altă limbă decât cea în care a studiat?", ["O probă sportivă","O probă de competențe lingvistice de specialitate","Numai un interviu financiar","Nicio probă"], 1, "Alineatul (10) cere proba de competențe lingvistice de specialitate.")
      ],
      "Art. 181 — Stabilește formele de angajare, constituirea și publicarea posturilor, probele concursului, competențele consiliului de administrație și condiția lingvistică."
    ),
    L(
      182,
      "Concursul și angajarea în învățământul particular",
      "3 min",
      "validare · comunicare scrisă · conducerea unității · decizie de repartizare · aviz",
      `Articolul 182 concentrează într-o singură regulă traseul concursului din învățământul particular. Validarea concursului este realizată de conducerea unității de învățământ particular și se comunică în scris structurii județene.

Angajarea pe post este făcută tot de conducerea unității particulare. Ea se bazează pe decizia de repartizare emisă de conducerea unității și avizată de directorul general al structurii județene.

Pentru memorare, rețineți succesiunea: conducerea validează — comunică în scris — emite decizia de repartizare — realizează angajarea, cu avizul cerut de lege.`,
      [
        "Conducerea unității particulare validează concursul.",
        "Validarea se comunică în scris structurii județene.",
        "Decizia de repartizare este emisă de conducerea unității și avizată potrivit legii."
      ],
      [
        Q("Cine validează concursul în învățământul particular?", ["Conducerea unității particulare","Consiliul elevilor","Primăria în toate cazurile","Biblioteca națională"], 0, "Art. 182 atribuie validarea conducerii unității particulare."),
        Q("Cum se comunică validarea structurii județene?", ["Numai telefonic","În scris","Prin elevi","Nu se comunică"], 1, "Textul cere comunicarea în scris."),
        Q("Cine realizează angajarea pe post?", ["Conducerea unității particulare","Ministerul Muncii direct","Consiliul local","Comisia de bacalaureat"], 0, "Angajarea este realizată de conducerea unității de învățământ particular.")
      ],
      "Art. 182 — În învățământul particular, conducerea unității validează concursul, comunică validarea și realizează angajarea pe baza deciziei de repartizare avizate potrivit legii."
    ),
    L(
      183,
      "Efectele concursului și tipurile de contract",
      "14 min",
      "titularizare · contract determinat · 6 ani · 3 ani · plata cu ora · posturi rămase neocupate · încetare",
      `Articolul 183 explică efectele rezultatului la concurs asupra contractului. Candidații licențiați ori cei care au drept de practică și ocupă prin concurs național un post publicat pentru angajare pe perioadă nedeterminată devin titulari. Directorul încheie contractul pe perioadă nedeterminată pe baza deciziei de repartizare.

Absolventul liceului pedagogic, specializarea „Pedagogia învățământului primar”, poate încheia o singură dată un contract pe 6 ani pentru funcția de învățător. Dacă în acest termen finalizează licența cerută și promovează licențierea, consiliul de administrație poate transforma contractul în unul pe perioadă nedeterminată pentru funcția de profesor pentru învățământ primar.

Candidatul fără licențiere, care ocupă un post vacant prin concurs, primește un contract pe perioadă determinată de cel mult un an școlar. Dacă promovează licențierea în termen de 3 ani de la ocuparea postului, consiliul de administrație hotărăște trecerea la perioadă nedeterminată. Pentru un post publicat pe perioadă determinată sau rezervat, contractul durează până la revenirea titularului, fără a depăși sfârșitul anului școlar; consiliul de administrație poate decide prelungirea pentru anul următor în condițiile metodologiei.

Cadrele didactice asociate și pensionate selectate pentru posturi sau ore în regim de plata cu ora încheie cu directorul un contract de acest tip. Din 1 septembrie 2025, alin. (5¹), introdus prin Legea nr. 141/2025, stabilește tariful prin raportarea salariului de bază al cadrului didactic, cu vechimea și gradul corespunzătoare și anumite sporuri prevăzute de lege, la numărul mediu lunar de ore lucrătoare stabilit anual prin hotărâre a Guvernului.

Posturile rămase neocupate ori vacantate în cursul anului pot fi acoperite temporar prin detașare sau plata cu ora. Dacă nu sunt ocupate înainte de cursuri, structura județeană organizează concursuri pentru angajare determinată. În mod excepțional pot exista testări prin interviu și lucrare scrisă pentru personal fără studii corespunzătoare, în condițiile metodologiei.

Încetarea contractului în unitatea de stat cu personalitate juridică este dispusă prin decizia directorului, cu aprobarea consiliului de administrație, în condițiile legii. În unitatea particulară, competența aparține conducerii. Regimul tranzitoriu păstrează până în 2028 posibilitatea titularizării pe baza definitivatului, conform art. 249 alin. (14), iar concursurile continuă după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv.`,
      [
        "Postul publicat pentru perioadă nedeterminată, ocupat prin concurs de un candidat cu dreptul cerut, conduce la titularizare.",
        "Termene-cheie: 6 ani pentru traseul absolventului de liceu pedagogic și 3 ani pentru obținerea licențierii de către candidatul încadrat determinat.",
        "Alin. (5¹), aplicabil din 1 septembrie 2025, reglementează calculul tarifului la plata cu ora.",
        "Încetarea contractului în unitatea de stat se dispune de director, cu aprobarea consiliului de administrație."
      ],
      [
        Q("Ce devine candidatul cu drept de practică care ocupă prin concurs un post publicat pentru perioadă nedeterminată?", ["Titular în învățământul preuniversitar","Elev audient","Funcționar public automat","Membru al consiliului local"], 0, "Art. 183 alin. (1) leagă ocuparea postului nedeterminat de dobândirea titularizării."),
        Q("În ce termen poate candidatul încadrat determinat să promoveze licențierea pentru trecerea la perioadă nedeterminată?", ["30 de zile","3 ani","15 ani","Nu există termen"], 1, "Alineatul (3) stabilește termenul de 3 ani de la ocuparea postului."),
        Q("Cine aprobă încetarea contractului dispusă de director într-o unitate de stat cu personalitate juridică?", ["Consiliul de administrație","Consiliul elevilor","Operatorul de transport","Nicio structură"], 0, "Art. 183 alin. (11) cere aprobarea consiliului de administrație.")
      ],
      "Art. 183 — Reglementează titularizarea, contractele determinate și pe post rezervat, plata cu ora, ocuparea posturilor rămase libere și încetarea contractului; alin. (5¹) a fost introdus prin Legea nr. 141/2025."
    ),
    L(
      184,
      "Rezervarea postului sau a catedrei",
      "10 min",
      "funcții publice · sindicat · misiuni externe · creșterea copilului · concediu fără plată · invaliditate",
      `Articolul 184 enumeră situațiile în care cadrul didactic titular își păstrează postul sau catedra pe perioada exercitării unei alte funcții ori a suspendării activității.

Rezervarea operează pentru titularii care devin Președintele României, sunt aleși în Parlament, numiți în Guvern, ocupă funcții de specialitate în aparatul autorităților centrale ori sunt aleși de Parlament în organisme centrale. Regula se extinde la prefecți, subprefecți, conducerile consiliilor județene, primari și viceprimari, precum și la funcții de conducere, îndrumare și control din educație, cultură, tineret și sport și la alte structuri enumerate de lege.

Persoanele desemnate de federațiile sindicale reprezentative beneficiază de rezervare potrivit legii și contractului colectiv. Rezervarea se acordă și titularilor trimiși în misiuni diplomatice, instituții ale Uniunii Europene ori organizații internaționale, precum și celor solicitați în străinătate pentru predare, cercetare, activitate artistică sau sportivă în baza acordurilor prevăzute.

Pentru creșterea copilului, activitatea poate fi suspendată cu rezervarea postului până la 2 ani, respectiv până la 3 ani în cazul copilului cu handicap; de drept poate beneficia numai unul dintre părinți sau reprezentanții legali. Perioada de rezervare în situațiile de la alin. (1)–(7) constituie vechime în învățământ.

Titularul poate beneficia și de concediu fără plată pentru un an școlar, o dată la 10 ani consecutivi, cu aprobarea unității și rezervarea postului. În cazul pensiei de invaliditate, postul se rezervă pe durata invalidității până la clarificarea capacității de muncă; rezervarea încetează când autoritatea competentă constată pierderea definitivă a capacității de muncă.`,
      [
        "Art. 184 protejează postul titularului în situații publice, sindicale, internaționale și familiale.",
        "Concediul pentru creșterea copilului permite rezervarea până la 2 ani, respectiv 3 ani pentru copilul cu handicap.",
        "Concediul fără plată cu rezervarea postului poate dura un an școlar, o dată la 10 ani consecutivi.",
        "Perioadele de rezervare prevăzute la alin. (1)–(7) constituie vechime în învățământ."
      ],
      [
        Q("Până la ce vârstă a copilului cu handicap se poate suspenda activitatea cu rezervarea postului?", ["1 an","2 ani","3 ani","7 ani"], 2, "Art. 184 alin. (6) stabilește limita de 3 ani pentru copilul cu handicap."),
        Q("Cât poate dura concediul fără plată cu rezervarea postului prevăzut de art. 184 alin. (9)?", ["Un an școlar","Cinci ani obligatoriu","O lună în întreaga carieră","Nelimitat"], 0, "Legea permite un an școlar, o dată la 10 ani consecutivi."),
        Q("Cum se consideră perioada de rezervare din situațiile alin. (1)–(7)?", ["Absență nemotivată","Vechime în învățământ","Concediu medical automat","Suspendare fără efecte"], 1, "Alineatul (8) o recunoaște ca vechime în învățământ.")
      ],
      "Art. 184 — Enumeră situațiile de rezervare a postului sau catedrei și reglementează efectele asupra vechimii, concediul pentru creșterea copilului, concediul fără plată și invaliditatea."
    ),
    L(
      185,
      "Gradele didactice și evoluția în carieră",
      "14 min",
      "gradul II · gradul I · vechime 4 ani · evaluări · repetare · media 10 · concediu pentru copil",
      `Articolul 185 definește formarea continuă ca dezvoltare profesională prin programe și activități de formare, împreună cu etapele de evoluție în carieră după dobândirea dreptului de practică. Evoluția se realizează prin gradul didactic II, gradul didactic I și titlul de profesor emerit.

Gradul didactic II se obține, în modelul noii legi, după cel puțin 4 ani de la licențiere. Evaluarea cuprinde observarea la clasă, autoevaluarea, analiza portofoliului și a evaluărilor periodice, interviul cu evaluatorul și proba de competențe pedagogice și de didactica specialității.

Gradul didactic I se obține după cel puțin 4 ani de la gradul II. Sunt prevăzute analiza portofoliului și recomandarea corpului de mentorat, o inspecție specială precedată de cel puțin două inspecții curente eșalonate în cei 4 ani și apreciate cu calificativul maxim, apoi elaborarea și susținerea unei lucrări metodico-științifice bazate pe microcercetări aplicate și resurse educaționale.

În caz de nepromovare, examenul pentru grad poate fi repetat după cel puțin 2 ani școlari. Persoana care a obținut media 10 la licențiere sau la gradul II se poate prezenta cu un an mai devreme la examenul următor. Licențierea și gradele obținute la una dintre specializările dobândite prin studii sunt recunoscute pentru celelalte specializări, iar gradele se acordă prin ordin al ministrului.

Legea nr. 235/2025 a introdus alin. (10¹). Candidatul programat la licențiere sau definitivat ori la gradul II sau I, care intră la cerere în concediu pentru creșterea copilului ori în concediu de acomodare, poate continua inspecțiile sau susține examenul la prima sesiune după reluarea activității, fără să refacă inspecțiile, probele sau examenele deja efectuate. Regula se aplică și concediilor succesive.

Pentru concurs, distingeți din nou modelul viitor de regula tranzitorie: definitivatul și gradele II și I se organizează după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv. Noul alin. (10¹) protejează însă continuitatea probelor și în această perioadă, fiind pus în aplicare și prin Ordinul nr. 3.350/2026.`,
      [
        "Evoluția în carieră cuprinde gradul II, gradul I și titlul de profesor emerit.",
        "În modelul noii legi, între etapele principale există perioade de cel puțin 4 ani.",
        "Media 10 permite prezentarea cu un an mai devreme la etapa următoare.",
        "Concediul pentru creșterea copilului sau de acomodare nu obligă candidatul să refacă probele deja susținute."
      ],
      [
        Q("Care este vechimea minimă prevăzută în noul model pentru gradul II după licențiere?", ["1 an","2 ani","4 ani","10 ani"], 2, "Art. 185 alin. (5) stabilește cel puțin 4 ani."),
        Q("După cât timp poate fi repetat un examen de grad nepromovat?", ["Cel puțin 2 ani școlari","Imediat în aceeași zi","După 15 ani","Nu poate fi repetat"], 0, "Alineatul (9) stabilește un interval de cel puțin 2 ani școlari."),
        Q("Ce protecție oferă alin. (10¹) candidatului care intră în concediu pentru creșterea copilului?", ["Îl obligă să refacă toate inspecțiile","Îi permite continuarea fără refacerea probelor deja efectuate","Îi anulează definitiv înscrierea","Îi acordă automat gradul"], 1, "Legea nr. 235/2025 păstrează valabile inspecțiile și probele deja efectuate.")
      ],
      "Art. 185 — Reglementează evoluția prin grade didactice, etapele evaluării, termenele și efectele rezultatelor; alin. (10¹), introdus prin Legea nr. 235/2025, protejează candidații aflați în concedii pentru creșterea copilului sau de acomodare."
    ),
    L(
      186,
      "Titlul de profesor emerit și calitatea de mentor",
      "6 min",
      "gradul I · performanțe deosebite · ordin al ministrului · mentor · prioritate",
      `Articolul 186 reglementează titlul de profesor emerit. Îl poate dobândi personalul didactic de predare care are gradul didactic I și performanțe deosebite în activitatea didactică. Titlul se acordă prin ordin al ministrului educației, după criterii stabilite prin metodologie.

Profesorul emerit dobândește calitatea de mentor pentru formarea continuă și beneficiază de recunoașterea expertizei de către autoritățile și instituțiile naționale și județene. Ministerul îi poate solicita sprijinul pentru activități desfășurate în teritoriu.

Titlul oferă prioritate la ocuparea unui post prin transfer sau pretransfer și prioritate la ocuparea posturilor didactice în situații de medii egale.

Calitatea de mentor nu este rezervată exclusiv profesorilor emeriți. Prin excepție, poate fi acordată și personalului didactic care are gradul I, dar nu titlul de profesor emerit, potrivit metodologiei aprobate prin ordin.`,
      [
        "Profesorul emerit trebuie să aibă gradul I și performanțe deosebite.",
        "Titlul se acordă prin ordin al ministrului.",
        "Profesorul emerit este mentor și are anumite priorități la mobilitate și ocuparea posturilor.",
        "Calitatea de mentor poate fi acordată și unui profesor cu gradul I fără titlul de emerit."
      ],
      [
        Q("Ce grad trebuie să aibă persoana care poate dobândi titlul de profesor emerit?", ["Gradul didactic I","Niciun grad","Numai definitivat","Exclusiv gradul II"], 0, "Art. 186 alin. (1) cere gradul didactic I."),
        Q("Prin ce act se dobândește titlul de profesor emerit?", ["Hotărârea consiliului elevilor","Ordin al ministrului educației","Decizia primarului","Contract comercial"], 1, "Titlul este acordat prin ordin al ministrului."),
        Q("Poate primi calitatea de mentor un profesor cu gradul I care nu este profesor emerit?", ["Da, conform metodologiei","Nu, niciodată","Numai după pensionare","Numai prin referendum"], 0, "Alineatul (5) permite această excepție.")
      ],
      "Art. 186 — Stabilește condițiile și efectele titlului de profesor emerit, inclusiv mentoratul și prioritățile, și permite acordarea calității de mentor unor profesori cu gradul I fără titlul de emerit."
    ),
    L(
      187,
      "Strategia formării continue și portofoliul profesional",
      "13 min",
      "CNFDCD · CCD · nevoi de formare · competențe · ECTS · portofoliu profesional",
      `Articolul 187 stabilește arhitectura formării continue. Ministerul definește strategia și coordonează implementarea, monitorizarea și evaluarea acesteia. În modelul noii legi, CNFDCD cartografiază periodic nevoile, stabilește prioritățile și gestionează programe de formare, inclusiv în colaborare cu universitățile.

CNFDCD și casele corpului didactic sunt centre de resurse, asistență și sprijin pentru dezvoltarea profesională și managerială și furnizori de formare. CCD-urile sunt autorizate, acreditate și evaluate periodic de Autoritatea Națională pentru Calificări. Deoarece înființarea și funcționarea CNFDCD au fost prorogate până la începutul anului școlar 2027–2028, aceste prevederi descriu structura-țintă, iar până atunci funcționează cadrul instituțional tranzitoriu.

Dezvoltarea profesională se bazează pe profilul profesional și standardele pentru funcțiile didactice. Scopurile includ aprofundarea specialității și psihopedagogiei, pregătirea pentru grade, competențe de conducere și control, conversie profesională, competențe digitale, consiliere și orientare, educația adulților, limbi străine, competențe transversale, combaterea segregării, adaptarea curriculară, lucrul cu elevi în risc și prevenirea bullyingului.

Evaluarea și certificarea acestor competențe se realizează prin ECTS. Certificatele sunt însoțite de un supliment descriptiv care precizează rezultatele învățării.

Portofoliul profesional reprezintă totalitatea documentelor despre activitatea profesională, didactică și de învățare pe tot parcursul vieții. El este folosit la evaluarea anuală, la evaluarea pentru restrângerea de activitate și la analiza dosarelor pentru gradele II și I. Cuprinde obligatoriu certificările formării continue și documentele relevante despre activitatea didactică, management și leadership.

Pentru învățământul tehnologic, programele de formare continuă se realizează numai împreună cu mediul de afaceri.`,
      [
        "CNFDCD reprezintă structura-țintă pentru cartografierea nevoilor și coordonarea programelor de formare.",
        "Competențele urmărite acoperă specialitatea, cariera, managementul, digitalul, consilierea, incluziunea și prevenirea violenței.",
        "Portofoliul este utilizat la evaluare, restrângere de activitate și gradele didactice.",
        "Formarea continuă din învățământul tehnologic se realizează împreună cu mediul de afaceri."
      ],
      [
        Q("În ce situație este utilizat portofoliul profesional?", ["La evaluarea privind restrângerea de activitate","La stabilirea taxelor vamale","La eliberarea permisului auto","La recensământul agricol"], 0, "Art. 187 alin. (15) include evaluarea pentru restrângerea de activitate."),
        Q("Cine autorizează, acreditează și evaluează periodic CCD-urile ca furnizori de formare?", ["Autoritatea Națională pentru Calificări","Consiliul elevilor","Ministerul Transporturilor","Primăria"], 0, "Art. 187 alin. (4) atribuie rolul ANC."),
        Q("Cu cine se realizează programele de formare continuă în învățământul tehnologic?", ["Numai cu părinții","Numai cu bibliotecile","Cu mediul de afaceri","Exclusiv cu operatorii de transport"], 2, "Alineatul (17) cere realizarea lor împreună cu mediul de afaceri.")
      ],
      "Art. 187 — Organizează sistemul formării continue, definește scopurile dezvoltării competențelor și reglementează portofoliul profesional și utilizările sale; CNFDCD se citește în contextul prorogării instituționale."
    ),
    L(
      188,
      "Dreptul și obligația de formare continuă",
      "10 min",
      "drept și obligație · credite ECTS · priorități naționale și locale · conversie · finanțare · prim ajutor",
      `Articolul 188 formulează principiul central: pentru personalul didactic, formarea continuă este simultan un drept și o obligație.

Programele, asigurarea calității și acumularea creditelor ECTS se reglementează prin metodologie. Distribuția creditelor pornește de la trei categorii: minimum 5 credite pentru competențele prioritare din planul național; minimum 5 credite pentru prioritățile școlii sau ale nivelului local, stabilite pe baza nevoilor; și maximum 5 credite la decizia cadrului didactic. Sursele de finanțare diferă, dar includ programe naționale, bugetele CCD și finanțarea unităților.

Dobândirea unei noi specializări didactice se consideră formare continuă. Cadrele didactice pot dobândi și competențe pentru discipline din același domeniu fundamental cu domeniul licenței, prin programe de formare a adulților. Conversia profesională postuniversitară este organizată de instituțiile de învățământ superior.

Personalul didactic trebuie să participe cel puțin o dată la 2 ani la cel puțin un program acreditat, în baza planului unității și a analizei nevoilor. Angajatorul suportă cheltuielile cel puțin pentru numărul minim de credite cerut de reglementări, din fondurile prevăzute de lege.

Unitățile pot susține stagii de dezvoltare profesională pentru gradele II și I, pe baza unui regulament aprobat de consiliul de administrație. Formarea continuă trebuie să includă obligatoriu și periodic un curs de prim ajutor.`,
      [
        "Formarea continuă este atât drept, cât și obligație.",
        "Creditele se distribuie între priorități naționale, priorități școlare sau locale și opțiunea cadrului didactic.",
        "Participarea la un program acreditat este cerută cel puțin o dată la 2 ani.",
        "Cursul de prim ajutor este obligatoriu și periodic."
      ],
      [
        Q("Cum califică legea formarea continuă pentru personalul didactic?", ["Numai drept","Numai obligație","Drept și obligație","Activitate interzisă"], 2, "Art. 188 alin. (1) folosește ambele calificări."),
        Q("Cât de des trebuie personalul didactic să participe la cel puțin un program acreditat?", ["Cel puțin o dată la 2 ani","O dată la 20 de ani","Numai înainte de pensionare","În fiecare zi"], 0, "Alineatul (7) stabilește frecvența de cel puțin o dată la 2 ani."),
        Q("Ce curs trebuie inclus obligatoriu și periodic în formarea continuă?", ["Curs de prim ajutor","Curs de pilotaj","Curs de pescuit","Curs de cadastru"], 0, "Art. 188 alin. (11) menționează cursul de prim ajutor.")
      ],
      "Art. 188 — Consacră formarea continuă ca drept și obligație, reglementează distribuția creditelor, participarea periodică, conversia, finanțarea și cursul obligatoriu de prim ajutor."
    ),
    L(
      189,
      "Responsabilități corelate cu etapa carierei",
      "3 min",
      "responsabilități didactice · responsabilități extradidactice · competențe · etapă de carieră",
      `Articolul 189 este scurt, dar exprimă un principiu de management al carierei: responsabilitățile didactice și extradidactice trebuie definite în corelație cu competențele dobândite în fiecare etapă parcursă.

Aceasta înseamnă că atribuțiile nu sunt gândite separat de formarea și evoluția profesională. Pe măsură ce cadrul didactic dobândește competențe și avansează în carieră, poate asuma responsabilități corespunzătoare nivelului său profesional.

Formula de memorat este: responsabilitate — competență — etapă de carieră.`,
      [
        "Articolul privește atât responsabilitățile didactice, cât și pe cele extradidactice.",
        "Responsabilitățile sunt corelate cu competențele dobândite.",
        "Corelarea se raportează la fiecare etapă de carieră parcursă."
      ],
      [
        Q("Cu ce se corelează responsabilitățile personalului didactic?", ["Cu competențele dobândite în etapa de carieră","Cu valoarea impozitului local","Cu numărul de autovehicule","Cu rezultatul alegerilor"], 0, "Aceasta este regula unică a art. 189."),
        Q("Ce tipuri de responsabilități sunt vizate?", ["Numai financiare","Didactice și extradidactice","Numai politice","Exclusiv sportive"], 1, "Articolul menționează planul didactic și extradidactic."),
        Q("La ce unitate de timp se raportează corelarea?", ["La fiecare etapă de carieră parcursă","La fiecare zi calendaristică","La un mandat politic","La fiecare vacanță"], 0, "Textul se referă la fiecare etapă de carieră didactică parcursă.")
      ],
      "Art. 189 — Responsabilitățile didactice și extradidactice sunt definite în raport cu competențele dobândite în fiecare etapă a carierei didactice."
    ),
    L(
      190,
      "Restrângerea de activitate, transferul și pretransferul",
      "13 min",
      "restrângere · jumătate de normă · transfer · pretransfer · prioritate · primă de instalare",
      `Articolul 190 deschide capitolul mobilității. Restrângerea de activitate există când postul sau norma nu se mai încadrează în sistemul de normare ori competențele dobândite nu permit constituirea normei, precum și când numărul de ore scade sub nivelul unei jumătăți de normă.

Pentru titulari, restrângerea se soluționează potrivit metodologiei, până la 15 noiembrie, prin transfer consimțit între unități pe aceeași specialitate sau prin transfer pentru restrângere, cu repartizare pe posturi ori catedre vacante coordonată de structura județeană.

Pretransferul este o etapă la cererea titularului. El permite trecerea de la o unitate la alta ori dintr-o specializare în alta, în aceeași unitate sau în altă unitate, cu păstrarea statutului de titular în sistem. Se realizează în condițiile metodologiei, inclusiv pentru domiciliu sau apropierea de domiciliu.

La transferul pentru restrângere și la pretransfer pot participa titularii din sistemul de stat și anumite categorii de titulari din învățământul particular: cei titularizați prin concursul național de stat, cei transferați sau pretransferați din sistemul de stat și cei care au obținut minimum 7 la un concurs național unic de titularizare în ultimii 6 ani.

Legea nr. 141/2025 a modificat alin. (6). Personalul repartizat ca titular în unități aflate în zone din mediul rural, defavorizate sau izolate, stabilite prin ordin, beneficiază de o primă de instalare neimpozabilă egală cu un salariu minim brut pe țară, cu obligația de a rămâne titular în unitate 5 ani școlari. Prima se acordă o singură dată și este suportată din bugetul ministerului. Aplicarea a fost prorogată până la începutul anului școlar 2026–2027.

Profesorul emerit are prioritate la ocuparea posturilor prin formele de mobilitate indicate de lege. În interiorul unui consorțiu școlar sau dual au prioritate, la transfer ori pretransfer în unitățile membre, titularii unităților care fac parte din consorțiu.`,
      [
        "Scăderea numărului de ore sub o jumătate de normă reprezintă restrângere de activitate.",
        "Transferul pentru restrângere răspunde unei pierderi de normă; pretransferul se realizează la cererea titularului.",
        "Prima de instalare actuală este de un salariu minim brut, se acordă o singură dată și presupune rămânerea 5 ani.",
        "Aplicarea primei începe cu anul școlar 2026–2027."
      ],
      [
        Q("Când există restrângere prin diminuarea orelor?", ["Când orele scad sub o jumătate de normă","Când cresc peste două norme","Numai la cererea elevilor","Doar la pensionare"], 0, "Art. 190 alin. (1) lit. b) folosește pragul unei jumătăți de normă."),
        Q("Cine inițiază pretransferul?", ["Cadrul didactic titular, la cerere","Consiliul elevilor","Operatorul economic obligatoriu","Ministerul Sănătății"], 0, "Pretransferul este o etapă de mobilitate la cererea titularului."),
        Q("Care este cuantumul primei de instalare în forma modificată prin Legea nr. 141/2025?", ["Un salariu minim brut pe țară","Cinci salarii minime în forma actuală","Zece salarii de bază","Nu este prevăzut niciun cuantum"], 0, "Legea nr. 141/2025 a redus cuantumul la un salariu minim brut și a prorogat aplicarea până în anul școlar 2026–2027.")
      ],
      "Art. 190 — Definește restrângerea de activitate, transferul și pretransferul, categoriile participante și prioritățile; alin. (6), modificat prin Legea nr. 141/2025, prevede prima de instalare aplicabilă din anul școlar 2026–2027."
    ),
    L(
      191,
      "Detașarea personalului didactic",
      "11 min",
      "detașare în interes · acord · conducere interimară · 60 de zile · maximum 5 ani · detașare la cerere · religie",
      `Articolul 191 reglementează detașarea. Legea nr. 6/2026 a modificat alin. (1) și a lărgit sfera sa: personalul didactic de predare titular și personalul didactic auxiliar angajat pe perioadă nedeterminată pot fi detașați în interesul învățământului, cu acordul lor, la solicitarea unităților sau instituțiilor, pentru posturi în unități de învățământ, unități de educație extrașcolară, structuri județene, case ale corpului didactic și funcții de specialitate în minister.

Personalul didactic de predare titular care se distinge prin calități profesionale, manageriale și morale poate fi detașat, cu acord, pentru a asigura temporar conducerea unităților și a altor structuri ori funcții de îndrumare și control. Durata este de cel mult un an școlar.

Dacă numirea prin detașare nu poate fi realizată, conducerea interimară a unei unități este asigurată de un cadru didactic membru al consiliului de administrație, cu acordul său, prin delegarea atribuțiilor. Delegarea durează până la concurs, dar nu mai mult de 60 de zile calendaristice și fără a depăși sfârșitul anului școlar.

Detașarea în interesul învățământului pe posturi didactice sau catedre poate dura cel mult 5 ani școlari consecutivi, cu păstrarea titularizării. Detașarea la cerere se realizează prin concurs sau concurs specific și are aceeași limită de 5 ani consecutivi.

În învățământul particular, conducerea temporară poate fi asigurată prin numirea unui cadru didactic al unității sau a unui pensionar de către persoana juridică finanțatoare, la propunerea consiliului de administrație, ori prin detașarea unui titular din sistemul de stat sau din altă unitate particulară, cu acordul scris.

În consorții, titularii unităților membre au prioritate la detașarea între unități. Pentru catedrele de Religie sunt necesare avizele cultelor recunoscute, iar avizul trebuie să indice etapa de mobilitate pentru care a fost emis. Referirile la DJIP/DMBIP se aplică în contextul prorogării acestor structuri; până la reorganizare funcționează inspectoratele școlare.`,
      [
        "Din 12 ianuarie 2026, detașarea în interes poate privi și personalul didactic auxiliar angajat pe perioadă nedeterminată.",
        "Detașarea pentru conducere este de cel mult un an școlar.",
        "Delegarea interimară este limitată la 60 de zile și nu poate depăși sfârșitul anului școlar.",
        "Detașarea pe post/catedră și detașarea la cerere au limita de 5 ani școlari consecutivi."
      ],
      [
        Q("Ce categorie a fost inclusă expres în art. 191 alin. (1) prin Legea nr. 6/2026?", ["Personalul didactic auxiliar angajat pe perioadă nedeterminată","Toți elevii majori","Exclusiv primarii","Personalul oricărei societăți comerciale"], 0, "Legea nr. 6/2026 a extins detașarea în interes și la această categorie."),
        Q("Care este durata maximă a delegării atribuțiilor de conducere când detașarea nu poate fi asigurată?", ["60 de zile calendaristice, fără depășirea sfârșitului anului școlar","5 ani fără condiții","10 ani","O perioadă nelimitată"], 0, "Art. 191 alin. (3) fixează limita de 60 de zile și sfârșitul anului școlar."),
        Q("Care este durata maximă a detașării pe post didactic/catedră în interesul învățământului?", ["Un semestru în toate cazurile","Cel mult 5 ani școlari consecutivi","Nelimitată","Exact 20 de ani"], 1, "Alineatul (4) stabilește limita de 5 ani școlari consecutivi.")
      ],
      "Art. 191 — Reglementează detașarea în interesul învățământului și la cerere, conducerea temporară și delegarea, prioritățile în consorțiu și avizul pentru Religie; alin. (1) este în forma modificată prin Legea nr. 6/2026."
    )
  );
})();
