"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–161: verificare 12.08.2026";
  DATA.modules.push({
    id: 13,
    title: "Învățarea pe tot parcursul vieții",
    articles: "149–161",
    chapter: "Titlul II",
    startArticle: 149,
    endArticle: 161
  });

  DATA.lessons.push(
    L(
      149,
      "Cadrul general și nivelurile de calificare",
      "9 min",
      "cadru integrator · niveluri 1–5 · monitorizare · Cadrul național al calificărilor · validare",
      "Articolul 149 deschide Titlul al II-lea și stabilește domeniul învățării pe tot parcursul vieții în învățământul preuniversitar. Titlul reglementează cadrul general și integrator pentru învățarea organizată sau certificată la nivelul calificărilor care pot fi obținute prin instituțiile de învățământ preuniversitar.\n\nMinisterul Educației asigură cadrul legal de organizare și funcționare pentru nivelurile de calificare 1–5. Tot ministerul participă, în domeniul său de competență, la monitorizarea, evaluarea și verificarea sistemului, direct sau prin organisme abilitate. Pentru concurs, reține limita exactă: nivelurile 1–5, nu întregul sistem al calificărilor fără delimitare.\n\nArticolul face legătura cu Legea învățământului superior nr. 199/2023. În forma corelată prin OUG nr. 95/2024, regulile privind Cadrul național al calificărilor de la art. 188 alin. (1) din Legea nr. 199/2023 se aplică și acestui titlu, iar validarea rezultatelor învățării dobândite în contexte nonformale și informale se realizează cu respectarea art. 189 din aceeași lege.\n\nSchema de memorare este: niveluri 1–5 – ministerul creează cadrul și monitorizează – calificările se raportează la cadrul național – rezultatele nonformale și informale pot fi validate după regulile legale.",
      [
        "Titlul II privește calificările de nivel 1–5 din sfera preuniversitară.",
        "Ministerul asigură cadrul legal și participă la monitorizare, evaluare și verificare.",
        "Art. 149 trimite, în forma actuală, la art. 188 alin. (1) și art. 189 din Legea nr. 199/2023."
      ],
      [
        Q("Pentru ce niveluri de calificare asigură ministerul cadrul legal potrivit art. 149?", ["Nivelurile 1–3", "Nivelurile 1–5", "Nivelurile 6–8", "Numai nivelul 5"], 1, "Art. 149 alin. (2) se referă la nivelurile de calificare 1–5."),
        Q("La ce activități participă Ministerul Educației în legătură cu sistemul de învățare pe tot parcursul vieții?", ["Numai la finanțare", "La monitorizare, evaluare și verificare", "Numai la angajarea formatorilor", "Exclusiv la emiterea diplomelor universitare"], 1, "Ministerul participă direct sau prin organisme abilitate la monitorizare, evaluare și verificare."),
        Q("În ce contexte pot fi dobândite rezultatele învățării supuse validării menționate la art. 149 alin. (4)?", ["Numai formal", "Nonformal și informal", "Numai universitar", "Exclusiv la locul de muncă"], 1, "Alin. (4) privește validarea rezultatelor învățării realizate în contexte nonformale și informale.")
      ],
      "Art. 149 — Reglementează cadrul integrator al învățării pe tot parcursul vieții pentru calificările de nivel 1–5, rolul ministerului, raportarea la Cadrul național al calificărilor și validarea învățării nonformale și informale."
    ),
    L(
      150,
      "Complementaritatea cu învățământul superior",
      "4 min",
      "Legea nr. 198/2023 · Legea nr. 199/2023 · Titlul II · complementaritate",
      "Articolul 150 este scurt, dar important pentru înțelegerea sistemului. Normele despre învățarea pe tot parcursul vieții din Legea învățământului preuniversitar nr. 198/2023 nu funcționează izolat. Ele sunt complementare regulilor cuprinse în Titlul II, «Învățarea pe tot parcursul vieții», din Legea învățământului superior nr. 199/2023.\n\nCuvântul-cheie este «complementare». Nu înseamnă că regulile preuniversitare sunt înlocuite de legea învățământului superior și nici că cele două titluri sunt identice. Înseamnă că ele se completează pentru a forma un cadru coerent, de la nivelurile de calificare din preuniversitar până la traseele și mecanismele reglementate pentru educația adulților și învățământul superior.\n\nLa concurs, dacă apare întrebarea despre relația dintre cele două legi, răspunsul exact este complementaritatea, nu subordonarea și nu excluderea reciprocă.",
      [
        "Art. 150 leagă Legea nr. 198/2023 de Legea nr. 199/2023.",
        "Relația dintre prevederi este de complementaritate.",
        "Trimiterea privește Titlul II din Legea învățământului superior."
      ],
      [
        Q("Cum sunt prevederile Titlului II din Legea nr. 198/2023 față de cele din Legea nr. 199/2023?", ["Complementare", "Contrare", "Abrogate", "Fără nicio legătură"], 0, "Art. 150 folosește expres relația de complementaritate."),
        Q("La ce lege face trimitere art. 150?", ["Legea nr. 1/2000", "Legea învățământului superior nr. 199/2023", "Codul muncii exclusiv", "Legea administrației publice locale"], 1, "Trimiterea este la Legea învățământului superior nr. 199/2023."),
        Q("Ce titlu din Legea nr. 199/2023 completează prevederile analizate?", ["Titlul I", "Titlul II – Învățarea pe tot parcursul vieții", "Titlul IV – Patrimoniul", "Numai anexele"], 1, "Art. 150 indică Titlul II, dedicat învățării pe tot parcursul vieții.")
      ],
      "Art. 150 — Prevederile despre învățarea pe tot parcursul vieții din Legea nr. 198/2023 sunt complementare celor din Titlul II al Legii învățământului superior nr. 199/2023."
    ),
    L(
      151,
      "Componentele învățării pe tot parcursul vieții",
      "5 min",
      "preuniversitar · consiliere și carieră · recunoașterea competențelor · activități pentru tineret",
      "Articolul 151 enumeră cele patru componente ale învățării pe tot parcursul vieții în sensul Legii nr. 198/2023.\n\nPrima este învățământul preuniversitar. A doua cuprinde serviciile de consiliere și orientare în carieră. A treia este recunoașterea competențelor dobândite în contexte nonformale și informale. A patra componentă o reprezintă activitățile pentru tineret.\n\nEnumerarea arată că învățarea permanentă este mai largă decât participarea la cursuri școlare. Ea include sprijinul pentru alegerile educaționale și profesionale, recunoașterea a ceea ce persoana a învățat în afara cadrului formal și experiențele educative destinate tinerilor.\n\nPentru memorare, folosește succesiunea: școală – carieră – recunoaștere – tineret. Sunt exact patru componente.",
      [
        "Art. 151 enumeră patru componente.",
        "Consilierea și orientarea în carieră fac parte din învățarea permanentă.",
        "Sunt incluse recunoașterea competențelor nonformale/informale și activitățile pentru tineret."
      ],
      [
        Q("Câte componente principale enumeră art. 151?", ["Două", "Trei", "Patru", "Șapte"], 2, "Art. 151 conține patru litere, de la a) la d)."),
        Q("Care serviciu este inclus expres în învățarea pe tot parcursul vieții?", ["Consiliere și orientare în carieră", "Numai transport școlar", "Exclusiv cazare", "Doar pază"], 0, "Serviciile de consiliere și orientare în carieră sunt enumerate la lit. b)."),
        Q("Ce competențe pot fi recunoscute potrivit art. 151?", ["Doar cele dobândite în universități", "Cele dobândite în contexte nonformale și informale", "Numai cele sportive", "Nicio competență anterioară"], 1, "Lit. c) include recunoașterea competențelor dobândite nonformal și informal.")
      ],
      "Art. 151 — Învățarea pe tot parcursul vieții cuprinde învățământul preuniversitar, consilierea și orientarea în carieră, recunoașterea competențelor nonformale și informale și activitățile pentru tineret."
    ),
    L(
      152,
      "Contextele formal, nonformal și informal",
      "8 min",
      "instituții și organizații · formal · nonformal · unități preuniversitare · palate și cluburi",
      "Articolul 152 explică unde se poate realiza învățarea în contexte formale, nonformale sau informale pentru nivelurile de calificare vizate de art. 149. Categoriile de instituții și organizații sunt corelate cu art. 183 din Legea învățământului superior nr. 199/2023, trimitere actualizată prin OUG nr. 95/2024.\n\nÎnvățarea formală se realizează și în unități și instituții de învățământ preuniversitar. Ea este organizată, intenționată și structurată într-un cadru instituțional, potrivit elementelor definite de Legea nr. 199/2023.\n\nÎnvățarea nonformală se poate realiza și în centre de îngrijire și protecție a copilului, în palate și cluburi ale elevilor sau în alte entități prevăzute de legislație. Este organizată și are scop educativ, dar se desfășoară în afara traseului formal obișnuit.\n\nArticolul menționează și contextul informal în cadrul general. Acesta privește învățarea rezultată din activitățile și experiențele cotidiene. Pentru concurs, diferența esențială este: formalul este legat de sistemul instituțional de educație; nonformalul este organizat în afara traseului formal; informalul apare din experiențele vieții, fără aceeași structurare instituțională.",
      [
        "Trimiterea actuală pentru instituții și organizații este la art. 183 din Legea nr. 199/2023.",
        "Unitățile preuniversitare sunt contexte de învățare formală.",
        "Palatele și cluburile elevilor sunt exemple de contexte nonformale."
      ],
      [
        Q("La ce articol din Legea nr. 199/2023 trimite art. 152 alin. (1), în forma actuală?", ["Art. 108", "Art. 149", "Art. 183", "Art. 251"], 2, "OUG nr. 95/2024 a corelat trimiterea cu art. 183 din Legea nr. 199/2023."),
        Q("În ce context se realizează învățarea în unitățile de învățământ preuniversitar, potrivit alin. (2)?", ["Formal", "Numai informal", "Exclusiv familial", "Fără nicio formă definită"], 0, "Alin. (2) indică învățarea în contexte formale."),
        Q("Care este un exemplu de entitate în care se realizează învățare nonformală?", ["Palatul sau clubul elevilor", "Numai tribunalul", "Exclusiv ministerul", "Doar o universitate străină"], 0, "Palatele și cluburile elevilor sunt menționate expres la alin. (3).")
      ],
      "Art. 152 — Corelează instituțiile învățării formale, nonformale și informale cu Legea nr. 199/2023 și menționează unitățile preuniversitare pentru formal, respectiv centrele de protecție, palatele și cluburile elevilor pentru nonformal."
    ),
    L(
      153,
      "Finanțarea și categoriile de competențe",
      "6 min",
      "fonduri publice și private · parteneriat public-privat · angajatori · ONG · fonduri europene · beneficiari",
      "Articolul 153 reunește două idei: finanțarea învățării pe tot parcursul vieții și formarea competențelor.\n\nFinanțarea poate proveni din fonduri publice și private, pe baza parteneriatului public-privat. Sunt prevăzute finanțarea și cofinanțarea oferite de angajatori și organizații neguvernamentale, fondurile nerambursabile din programe europene și contribuția beneficiarilor. Prin urmare, sistemul nu se bazează pe o singură sursă și nici exclusiv pe bugetul de stat.\n\nFormarea și dezvoltarea competențelor se realizează în funcție de categoriile de competențe prevăzute la art. 181 din Legea învățământului superior nr. 199/2023. Această trimitere a fost actualizată prin OUG nr. 95/2024.\n\nFormula de memorare: finanțare mixtă și partenerială – surse europene și contribuția beneficiarilor – competențe corelate cu art. 181 din Legea nr. 199/2023.",
      [
        "Finanțarea poate combina fonduri publice și private.",
        "Angajatorii, ONG-urile, programele europene și beneficiarii pot contribui.",
        "Categoriile de competențe sunt corelate cu art. 181 din Legea nr. 199/2023."
      ],
      [
        Q("Cum se poate realiza finanțarea învățării pe tot parcursul vieții?", ["Numai din taxe", "Din fonduri publice și private", "Exclusiv din donațiile elevilor", "Numai din bugetul unei școli"], 1, "Art. 153 prevede o combinație de fonduri publice și private."),
        Q("Care sursă este menționată expres la art. 153?", ["Fonduri nerambursabile din programe europene", "Amenzile rutiere ale părinților", "Numai credite personale", "Exclusiv vânzarea clădirilor școlare"], 0, "Fondurile nerambursabile din programe europene sunt enumerate expres."),
        Q("Cu ce articol din Legea nr. 199/2023 sunt corelate categoriile de competențe?", ["Art. 14", "Art. 108", "Art. 181", "Art. 250"], 2, "Forma actuală a art. 153 alin. (2) trimite la art. 181.")
      ],
      "Art. 153 — Finanțarea învățării permanente se poate realiza din surse publice, private, europene și contribuții ale beneficiarilor, iar dezvoltarea competențelor se corelează cu art. 181 din Legea nr. 199/2023."
    ),
    L(
      154,
      "Înființarea centrelor comunitare",
      "4 min",
      "autorități locale · parteneriat · furnizori de educație și formare · politici locale",
      "Articolul 154 introduce centrele comunitare de învățare permanentă. Acestea sunt înființate de autoritățile administrației publice locale, în parteneriat cu furnizorii de educație și formare.\n\nRolul centrelor este implementarea, la nivelul comunității, a politicilor și strategiilor din domeniul învățării pe tot parcursul vieții. Așadar, centrul transformă orientările generale în servicii și intervenții apropiate de nevoile locale.\n\nPentru un director, articolul sugerează o oportunitate de colaborare instituțională: școala poate deveni partener într-o construcție locală mai largă, alături de autoritate și de furnizorii de formare. Totuși, titularul inițiativei de înființare indicat de lege este autoritatea administrației publice locale.\n\nReține triada: autoritate locală – parteneriat cu furnizorii – implementare în comunitate.",
      [
        "Centrele sunt înființate de autoritățile administrației publice locale.",
        "Înființarea se face în parteneriat cu furnizorii de educație și formare.",
        "Rolul lor este implementarea locală a politicilor și strategiilor de învățare permanentă."
      ],
      [
        Q("Cine înființează centrele comunitare de învățare permanentă?", ["Autoritățile administrației publice locale", "Fiecare elev", "Exclusiv operatorii de transport", "Numai Parlamentul"], 0, "Art. 154 atribuie înființarea autorităților administrației publice locale."),
        Q("Cu cine se realizează parteneriatul pentru înființarea centrelor?", ["Cu furnizorii de educație și formare", "Numai cu firme de pază", "Exclusiv cu părinții unei clase", "Cu nicio altă entitate"], 0, "Legea menționează furnizorii de educație și formare."),
        Q("La ce nivel implementează centrele politicile de învățare permanentă?", ["La nivelul comunității", "Numai la nivel european", "Exclusiv în minister", "Numai în universități"], 0, "Misiunea centrului este formulată pentru nivelul comunității.")
      ],
      "Art. 154 — Autoritățile locale înființează, în parteneriat cu furnizorii de educație și formare, centre care implementează în comunitate politicile și strategiile de învățare pe tot parcursul vieții."
    ),
    L(
      155,
      "Organizarea locală și parteneriatele centrelor",
      "7 min",
      "școli și instituții · parteneriate · oferte adaptate · grupuri-țintă · centre de tineret",
      "Articolul 155 detaliază cine poate organiza centre comunitare de învățare permanentă și cum se adaptează acestea comunității.\n\nUnitățile și instituțiile de învățământ pot organiza asemenea centre de sine stătător sau în parteneriat cu autorități locale și cu instituții ori organisme publice și private. Legea oferă exemple: case de cultură, furnizori de formare continuă, parteneri sociali, centre de tineret și organizații neguvernamentale. Enumerarea este deschisă, putând exista și alte entități similare.\n\nOrganizarea se bazează pe oferte de servicii educaționale adaptate nevoilor specifice ale diferitelor grupuri-țintă interesate. Nu este suficientă existența formală a centrului; oferta trebuie să răspundă nevoilor reale ale comunității.\n\nInstituțiile de învățământ implicate pot fi și instituții reglementate de Legea învățământului superior nr. 199/2023. În plus, centrele de tineret pot îndeplini ele însele rolul de centre comunitare de învățare permanentă.\n\nFormula de memorare: școala singură sau în parteneriat – ofertă adaptată grupurilor-țintă – posibilă implicare universitară – centrele de tineret pot prelua rolul.",
      [
        "Unitățile de învățământ pot organiza centre singure sau în parteneriat.",
        "Oferta educațională trebuie adaptată nevoilor grupurilor-țintă.",
        "Centrele de tineret pot avea și rol de centre comunitare de învățare permanentă."
      ],
      [
        Q("Pot unitățile de învățământ organiza singure centre comunitare de învățare permanentă?", ["Da, sau în parteneriat", "Nu, niciodată", "Numai după privatizare", "Doar în străinătate"], 0, "Art. 155 permite organizarea de sine stătătoare sau în parteneriat."),
        Q("Cum trebuie construite ofertele de servicii educaționale?", ["Identic pentru orice comunitate", "Adaptate nevoilor specifice ale grupurilor-țintă", "Numai pentru angajații primăriei", "Fără analizarea nevoilor"], 1, "Adaptarea la nevoile grupurilor-țintă este o condiție centrală a articolului."),
        Q("Ce alte structuri pot îndeplini rolul de centre comunitare de învățare permanentă?", ["Centrele de tineret", "Doar instanțele judecătorești", "Numai inspectoratele fiscale", "Exclusiv spitalele"], 0, "Alin. (3) prevede expres această posibilitate pentru centrele de tineret.")
      ],
      "Art. 155 — Unitățile și instituțiile de învățământ pot organiza local centre, singure sau în parteneriat, pe baza unor oferte adaptate grupurilor-țintă; centrele de tineret pot îndeplini același rol."
    ),
    L(
      156,
      "Finanțarea și veniturile proprii ale centrelor",
      "4 min",
      "fonduri publice · fonduri private · venituri proprii · rămân la dispoziția centrului",
      "Articolul 156 stabilește regimul financiar al centrelor comunitare de învățare permanentă. Finanțarea lor se face din fonduri publice și private, cu respectarea legii.\n\nRegula distinctivă privește veniturile obținute de aceste centre: toate sunt venituri proprii și rămân la dispoziția centrelor. Ele nu sunt preluate automat de altă instituție și nici nu se transformă în venituri ale bugetului general fără destinația centrului. Folosirea lor trebuie însă să respecte cadrul legal și scopurile activității.\n\nPentru memorare: două categorii de fonduri – publice și private; o singură regulă pentru veniturile obținute – sunt proprii și rămân centrului.",
      [
        "Centrele pot fi finanțate din fonduri publice și private.",
        "Toate veniturile obținute sunt venituri proprii.",
        "Veniturile rămân la dispoziția centrelor."
      ],
      [
        Q("Din ce tipuri de fonduri se finanțează centrele comunitare?", ["Publice și private", "Numai din amenzi", "Exclusiv din taxe universitare", "Doar din împrumuturi personale"], 0, "Art. 156 menționează fondurile publice și private."),
        Q("Ce natură au veniturile obținute de centre?", ["Venituri proprii", "Venituri ale fiecărui angajat", "Datorii publice", "Amenzi contravenționale"], 0, "Textul le califică drept venituri proprii."),
        Q("La dispoziția cui rămân veniturile obținute?", ["A centrelor comunitare", "A unui operator ales aleatoriu", "Numai a ministerului", "A unei singure familii"], 0, "Veniturile proprii rămân la dispoziția centrelor.")
      ],
      "Art. 156 — Centrele comunitare sunt finanțate din fonduri publice și private, iar veniturile obținute sunt venituri proprii și rămân la dispoziția lor."
    ),
    L(
      157,
      "Atribuțiile și serviciile centrelor comunitare",
      "14 min",
      "analiză de nevoi · plan local · servicii · evaluare și certificare · programe remediale · consiliere · metodologie",
      "Articolul 157 este nucleul practic al Modulului 13. El descrie atribuțiile, tipurile de programe și serviciile de consiliere ale centrelor comunitare de învățare permanentă.\n\nLa nivel local, centrele analizează nevoia de educație și formare profesională și elaborează planuri locale de intervenție. Oferă servicii educaționale pentru copii, tineri și adulți, precum și informare, orientare și consiliere. Pot oferi evaluarea și certificarea rezultatelor învățării nonformale și informale, asigură accesul la mijloace moderne de informare și comunicare și promovează parteneriatul cu mediul economic.\n\nCentrele implementează instrumente europene precum Europass și Youthpass, pașaportul lingvistic și componenta de învățare pe tot parcursul vieții a portofoliului educațional. Ele gestionează și informații despre participarea beneficiarilor la servicii.\n\nServiciile educaționale pot lua forma programelor remediale, inclusiv «A doua șansă» și intervenții pentru persoanele care au părăsit timpuriu educația sau nu au calificare. Sunt incluse programe de validare a învățării nonformale și informale, calificare, recalificare, reconversie, perfecționare, specializare și inițiere profesională. Centrele pot organiza educație antreprenorială, financiară și juridică, dezvoltare personală, activități de timp liber și acțiuni de promovare a participării la învățarea permanentă.\n\nInformarea, orientarea și consilierea privesc accesul la educație și formare, validarea rezultatelor nonformale și informale și pregătirea pentru ocuparea unui loc de muncă. Metodologia de acreditare, evaluare periodică, organizare și funcționare a centrelor se aprobă prin hotărâre a Guvernului.\n\nPentru memorare, grupează articolul în patru blocuri: diagnoză și plan local – servicii și instrumente – programe pentru competențe și angajare – metodologie aprobată de Guvern.",
      [
        "Centrele pornesc de la studii de nevoi și planuri locale de intervenție.",
        "Pot evalua și certifica rezultatele învățării nonformale și informale.",
        "Metodologia centrelor se aprobă prin hotărâre a Guvernului."
      ],
      [
        Q("Care este o atribuție a centrului comunitar la nivel local?", ["Realizarea studiilor privind nevoia de educație și formare", "Stabilirea cursului valutar", "Emiterea legilor", "Organizarea alegerilor parlamentare"], 0, "Art. 157 începe cu analiza nevoilor locale de educație și formare."),
        Q("Ce program remedial este menționat expres?", ["A doua șansă", "Prima amendă", "Un singur manual", "Doar program universitar doctoral"], 0, "«A doua șansă» este inclus între programele remediale."),
        Q("Prin ce act se aprobă metodologia de acreditare și funcționare a centrelor?", ["Hotărâre a Guvernului", "Decizia unui elev", "Contract individual al directorului", "Regulamentul unei clase"], 0, "Art. 157 alin. (4) prevede aprobarea prin hotărâre a Guvernului.")
      ],
      "Art. 157 — Stabilește atribuțiile centrelor comunitare, programele educaționale și de dezvoltare profesională, serviciile de informare și consiliere și aprobarea metodologiei prin hotărâre a Guvernului."
    ),
    L(
      158,
      "Sistemul național de asigurare a calității",
      "5 min",
      "preuniversitar · superior · formare profesională inițială · formare profesională continuă",
      "Articolul 158 arată că asigurarea calității în învățarea pe tot parcursul vieții este un sistem național compus din patru subsisteme.\n\nPrimul este sistemul de asigurare a calității în învățământul preuniversitar. Al doilea este cel din învățământul superior. Al treilea privește formarea profesională inițială, iar al patrulea formarea profesională continuă.\n\nSensul integrator este important: calitatea nu se verifică doar în școală sau universitate, ci de-a lungul întregului traseu de educație și formare. Fiecare componentă își păstrează mecanismele proprii, dar toate aparțin sistemului național al calității educației permanente.\n\nFormula de memorare: două niveluri de învățământ – preuniversitar și superior – plus două etape ale formării profesionale – inițială și continuă.",
      [
        "Sistemul național cuprinde patru componente.",
        "Sunt incluse atât preuniversitarul, cât și învățământul superior.",
        "Formarea profesională este acoperită în faza inițială și în cea continuă."
      ],
      [
        Q("Câte sisteme componente enumeră art. 158?", ["Două", "Trei", "Patru", "Opt"], 2, "Articolul enumeră patru sisteme de asigurare a calității."),
        Q("Ce două forme ale formării profesionale sunt incluse?", ["Inițială și continuă", "Publică și secretă", "Locală și internațională", "Obligatorie și interzisă"], 0, "Sunt menționate formarea profesională inițială și formarea profesională continuă."),
        Q("Este învățământul superior inclus în sistemul național descris la art. 158?", ["Da", "Nu", "Numai în anii pari", "Doar pentru elevi minori"], 0, "Asigurarea calității în învățământul superior este una dintre cele patru componente.")
      ],
      "Art. 158 — Sistemul național al calității educației permanente cuprinde asigurarea calității în preuniversitar, învățământ superior, formare profesională inițială și formare profesională continuă."
    ),
    L(
      159,
      "GNACEFP și rețeaua europeană EQAVET",
      "8 min",
      "structură informală · punct național de referință · EQAVET · coordonare · armonizare · ordin comun",
      "Articolul 159 reglementează Grupul Național pentru Asigurarea Calității în Educație și Formare Profesională, prescurtat GNACEFP. Deși are o funcție națională importantă, legea îl califică drept structură informală.\n\nGNACEFP funcționează ca punct național de referință al rețelei europene EQAVET pentru asigurarea calității în educație și formare profesională. Funcția sa principală este coordonarea și armonizarea sistemelor de asigurare a calității din educație și formare profesională.\n\nGrupul este constituit din reprezentanți desemnați ai Ministerului Educației, Ministerului Muncii și Solidarității Sociale, Autorității Naționale pentru Calificări – ANC, Centrului Național de Învățământ Tehnologic și Tehnologic Dual – CNITTD și Agenției Române pentru Asigurarea Calității și Inspecție în Învățământul Preuniversitar – ARACIIP. Componența se stabilește prin ordin comun al ministrului educației și al ministrului muncii și solidarității sociale.\n\nPentru aplicare, forma consolidată indică ordinele comune nr. 3.978/2025 și nr. 1.149/2025. Pentru concurs, însă, reține mai ales aparenta contradicție: GNACEFP este o structură informală, dar are rol oficial de punct național de referință și de armonizare.\n\nFormula de memorare: GNACEFP – informal – EQAVET – coordonare și armonizare – componență stabilită prin ordin comun.",
      [
        "GNACEFP este o structură informală.",
        "Este punctul național de referință pentru EQAVET.",
        "Componența sa se stabilește prin ordin comun al miniștrilor educației și muncii."
      ],
      [
        Q("Ce tip de structură este GNACEFP potrivit art. 159?", ["Structură informală", "Societate comercială", "Instanță judecătorească", "Unitate de învățământ"], 0, "Art. 159 alin. (1) îl definește ca structură informală."),
        Q("Pentru ce rețea europeană este GNACEFP punct național de referință?", ["EQAVET", "Erasmus Student Network exclusiv", "NATO", "Eurostat"], 0, "GNACEFP este punctul național de referință al rețelei EQAVET."),
        Q("Prin ce act se stabilește componența GNACEFP?", ["Ordin comun al ministrului educației și ministrului muncii", "Decizia unei singure școli", "Hotărârea consiliului elevilor", "Contract privat"], 0, "Art. 159 alin. (2) prevede un ordin comun al celor doi miniștri.")
      ],
      "Art. 159 — GNACEFP este o structură informală, punct național de referință EQAVET, care coordonează și armonizează sistemele de calitate; componența sa se stabilește prin ordin comun."
    ),
    L(
      160,
      "Funcțiile personalului din învățarea permanentă",
      "9 min",
      "cadre didactice · formatori · evaluatori · mediatori · consilieri · mentori · facilitatori online · tineret",
      "Articolul 160 enumeră funcțiile pe care le poate ocupa personalul din domeniul învățării pe tot parcursul vieții. Lista reflectă diversitatea serviciilor: predare, formare, evaluare, mediere, consiliere, mentorat, sprijin și activități pentru tineret.\n\nSunt menționate cadrul didactic și cadrul didactic auxiliar, formatorul, instructorul de practică și evaluatorul de competențe. Apar apoi mediatorul, facilitatorul învățării permanente, consilierul și mentorul. Pentru mediul digital, legea include facilitatorul sau tutorele online.\n\nÎn sfera tineretului sunt prevăzute funcțiile de lucrător de tineret și consilier pentru tineret. Lista continuă cu consilierul de orientare privind cariera, profesorul de sprijin și alte funcții asociate activităților desfășurate în scopul învățării pe tot parcursul vieții. Formularea finală arată că enumerarea nu este închisă.\n\nPrevederile sunt aplicabile, după caz, și cadrului din Titlul II al Legii învățământului superior nr. 199/2023.\n\nPentru memorare, grupează funcțiile: educație și formare – practică și evaluare – mediere și consiliere – online și tineret – sprijin și alte funcții asociate.",
      [
        "Lista funcțiilor este diversă și nu este limitată strict la cadre didactice.",
        "Evaluatorul de competențe și facilitatorul/tutorele online sunt incluși expres.",
        "Prevederile se aplică, după caz, și Titlului II din Legea nr. 199/2023."
      ],
      [
        Q("Care funcție este enumerată expres la art. 160?", ["Evaluator de competențe", "Judecător constituțional", "Primar obligatoriu", "Pilot comercial"], 0, "Evaluatorul de competențe apare în lista funcțiilor."),
        Q("Articolul include o funcție specifică mediului online?", ["Da, facilitator/tutore online", "Nu", "Numai administrator de rețea", "Doar programator"], 0, "Facilitatorul sau tutorele online este prevăzut expres."),
        Q("Este lista funcțiilor complet închisă?", ["Nu, sunt permise și alte funcții asociate activităților de învățare permanentă", "Da, fără nicio excepție", "Da, cu o singură funcție", "Nu există nicio funcție enumerată"], 0, "Textul se încheie cu «alte funcții asociate», ceea ce păstrează lista deschisă.")
      ],
      "Art. 160 — Enumeră funcțiile personalului din învățarea pe tot parcursul vieții, de la cadre didactice, formatori și evaluatori la consilieri, mentori, tutori online, lucrători de tineret și alte funcții asociate."
    ),
    L(
      161,
      "Statutul și ruta de profesionalizare",
      "6 min",
      "Ministerul Educației · Ministerul Muncii · Ministerul Culturii · ANC · norme metodologice · hotărâre a Guvernului",
      "Articolul 161 încheie Titlul al II-lea și reglementează profesionalizarea personalului care lucrează în educația pe tot parcursul vieții.\n\nNormele metodologice privind elaborarea statutului și a rutei de profesionalizare sunt stabilite în comun de Ministerul Educației, Ministerul Muncii și Solidarității Sociale, Ministerul Culturii și Autoritatea Națională pentru Calificări.\n\nColaborarea celor patru autorități reflectă natura transversală a domeniului: educație, muncă și ocupații, cultură și calificări. Normele nu se aprobă prin simplu ordin al unui singur ministru, ci prin hotărâre a Guvernului.\n\nDistinge cele două elemente reglementate: statutul personalului și ruta sa de profesionalizare. Formula de memorare este: trei ministere plus ANC – statut și rută profesională – hotărâre a Guvernului.",
      [
        "Patru autorități participă la stabilirea normelor: trei ministere și ANC.",
        "Normele privesc statutul și ruta de profesionalizare a personalului.",
        "Aprobarea se face prin hotărâre a Guvernului."
      ],
      [
        Q("Care autoritate participă, alături de cele trei ministere, la stabilirea normelor?", ["Autoritatea Națională pentru Calificări", "Consiliul unei clase", "O singură firmă privată", "Inspectoratul pentru situații de urgență"], 0, "ANC este enumerată expres împreună cu cele trei ministere."),
        Q("Ce reglementează normele metodologice de la art. 161?", ["Statutul și ruta de profesionalizare a personalului", "Calendarul vacanțelor exclusiv", "Prețul manualelor", "Alegerile locale"], 0, "Normele privesc statutul și ruta de profesionalizare a personalului din domeniu."),
        Q("Prin ce act sunt aprobate normele?", ["Hotărâre a Guvernului", "Decizie verbală", "Proces-verbal al unei clase", "Contract de sponsorizare"], 0, "Art. 161 prevede aprobarea prin hotărâre a Guvernului.")
      ],
      "Art. 161 — Trei ministere și ANC stabilesc normele privind statutul și ruta de profesionalizare a personalului din educația permanentă, aprobate prin hotărâre a Guvernului."
    )
  );
})();
