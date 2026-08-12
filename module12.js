"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–148: verificare 12.08.2026";
  DATA.modules.push({
    id: 12,
    title: "Finanțarea, baza materială și răspunderea contravențională",
    articles: "134–148",
    chapter: "Capitolele X–XI",
    startArticle: 134,
    endArticle: 148
  });

  DATA.lessons.push(
    L(
      134,
      "Pragul național al finanțării educației",
      "5 min",
      "minimum 15% · buget general consolidat · preuniversitar și superior · aplicare din 2027",
      "Articolul 134 stabilește un reper național de finanțare: cheltuielile pentru educație, la nivelul întregului sistem național de învățământ preuniversitar și superior, cu toate componentele sale, trebuie să reprezinte anual minimum 15% din cheltuielile bugetului general consolidat.\n\nPentru concurs trebuie diferențiate trei elemente. Procentul este minimum 15%, baza de raportare este totalul cheltuielilor bugetului general consolidat, iar sfera cuprinde împreună învățământul preuniversitar și învățământul superior. Articolul nu rezervă 15% numai școlilor și nici nu raportează procentul la produsul intern brut.\n\nEste esențială și regula tranzitorie. Legea nr. 141/2025 a stabilit că prevederile art. 134 se aplică începând cu anul 2027. Prin urmare, la data verificării materialului, 12 august 2026, pragul există în textul legii, dar aplicarea lui este amânată pentru 2027.\n\nFormula de memorare este: 15% – cheltuielile bugetului general consolidat – întregul sistem educațional – aplicare din 2027.",
      [
        "Pragul legal este de minimum 15%.",
        "Procentul se raportează la cheltuielile bugetului general consolidat.",
        "Aplicarea art. 134 începe în anul 2027."
      ],
      [
        Q("Care este pragul anual prevăzut de art. 134 pentru finanțarea educației?", ["Minimum 6%", "Minimum 10%", "Minimum 15%", "Exact 20%"], 2, "Art. 134 prevede minimum 15% din cheltuielile bugetului general consolidat."),
        Q("La ce bază se raportează procentul prevăzut de art. 134?", ["La produsul intern brut", "La cheltuielile bugetului general consolidat", "Numai la bugetele locale", "La veniturile proprii ale școlilor"], 1, "Baza de raportare este reprezentată de cheltuielile bugetului general consolidat."),
        Q("Din ce an se aplică art. 134, potrivit prorogării în vigoare?", ["2025", "2026", "2027", "2028"], 2, "Legea nr. 141/2025 a stabilit aplicarea art. 134 începând cu anul 2027.")
      ],
      "Art. 134 — Finanțarea anuală a educației, pentru sistemul preuniversitar și superior, reprezintă minimum 15% din cheltuielile bugetului general consolidat. Aplicarea este prevăzută începând cu anul 2027."
    ),
    L(
      135,
      "Principiile și sursele finanțării",
      "8 min",
      "resursa urmează elevul · transparență · echitate · predictibilitate · gratuitate · surse legale",
      "Articolul 135 prezintă principiile finanțării învățământului preuniversitar și sursele prin care educația poate fi susținută.\n\nPrimul principiu este că resursa financiară urmează antepreșcolarul, preșcolarul sau elevul. Urmează transparența fundamentării și alocării fondurilor, echitatea distribuirii lor pentru un învățământ de calitate, corelarea resurselor cu nevoile și obiectivele, predictibilitatea mecanismelor financiare, eficiența utilizării banilor și asigurarea veniturilor necesare prin formula de finanțare pentru unitățile cu personalitate juridică aflate sub efectiv.\n\nRegula socială centrală este gratuitatea învățământului obligatoriu de stat. Pentru anumite niveluri sau forme de studiu pot exista taxe, dar numai în condițiile stabilite de lege.\n\nFinanțarea publică nu exclude sprijinul altor actori. Învățământul poate fi susținut direct de operatori economici și de alte persoane fizice sau juridice. Poate beneficia de burse, stimulente, premii, taxe, donații, sponsorizări, surse proprii și orice alte surse legale.\n\nPentru memorare, grupează articolul în trei idei: principii de alocare, gratuitatea învățământului obligatoriu de stat și diversitatea surselor legale de sprijin.",
      [
        "Resursa financiară urmează beneficiarul primar.",
        "Învățământul obligatoriu de stat este gratuit.",
        "Operatorii economici, donațiile și sponsorizările pot susține legal educația."
      ],
      [
        Q("Care este primul principiu al finanțării enumerat la art. 135?", ["Resursa financiară urmează beneficiarul primar", "Toate fondurile sunt identice", "Finanțarea revine exclusiv autorității locale", "Școala stabilește singură costul standard"], 0, "Articolul începe cu principiul potrivit căruia resursa financiară urmează antepreșcolarul, preșcolarul sau elevul."),
        Q("Ce formă de învățământ este gratuită potrivit art. 135?", ["Orice curs privat", "Învățământul obligatoriu de stat", "Numai învățământul primar", "Exclusiv învățământul postliceal"], 1, "Art. 135 alin. (2) consacră gratuitatea învățământului obligatoriu de stat."),
        Q("Poate fi învățământul susținut prin donații și sponsorizări?", ["Da, ca surse legale", "Nu, niciodată", "Numai cu aprobarea Parlamentului", "Numai în învățământul superior"], 0, "Donațiile și sponsorizările sunt enumerate între sursele legale de susținere.")
      ],
      "Art. 135 — Stabilește principiile finanțării, gratuitatea învățământului obligatoriu de stat și posibilitatea susținerii educației din surse publice, private și alte surse legale."
    ),
    L(
      136,
      "Inițiativa financiară și contribuția autorităților locale",
      "6 min",
      "inițiativa ministerului · consultare · venituri proprii UAT · finanțare de bază și complementară · programe",
      "Articolul 136 împarte responsabilitatea între nivelul central și nivelul local.\n\nMinisterul Educației are drept de inițiativă în politica financiară și în politica de resurse umane din educație. În exercitarea acestui rol colaborează cu alte ministere, cu autorități publice locale și structurile lor asociative, cu reprezentanții elevilor și părinților, cu asociații profesionale ale cadrelor didactice și cu federațiile sindicale reprezentative din învățământul preuniversitar. Ideea este că decizia financiară națională se fundamentează prin dialog cu actorii relevanți.\n\nUnitățile administrativ-teritoriale pot contribui din veniturile proprii atât la finanțarea de bază, cât și la finanțarea complementară a unităților de învățământ preuniversitar de stat și a unităților de educație extrașcolară. Contribuția poate lua și forma finanțării directe a unor programe, cum sunt «Școală după școală» și «Învățare remedială».\n\nVerbul important este «pot»: legea permite UAT-urilor să suplimenteze finanțarea din veniturile proprii. Formula de memorare este: ministerul inițiază și consultă; autoritatea locală poate contribui și poate finanța programe.",
      [
        "Ministerul are drept de inițiativă în politica financiară și de resurse umane.",
        "UAT-urile pot contribui din venituri proprii la finanțarea de bază și complementară.",
        "«Școală după școală» și «Învățare remedială» pot fi finanțate direct local."
      ],
      [
        Q("Cine are drept de inițiativă în domeniul politicii financiare din educație?", ["Ministerul Educației", "Fiecare consiliu al elevilor", "Exclusiv primarul", "Operatorii economici"], 0, "Art. 136 acordă Ministerului Educației drept de inițiativă în politica financiară și de resurse umane."),
        Q("Din ce resurse pot contribui UAT-urile la finanțarea școlilor?", ["Numai din donațiile părinților", "Din veniturile proprii", "Exclusiv din taxe școlare", "Numai din fonduri externe"], 1, "Textul menționează expres veniturile proprii ale unităților administrativ-teritoriale."),
        Q("Care program este dat ca exemplu de finanțare directă locală?", ["Școală după școală", "Erasmus universitar obligatoriu", "Programul de rezidențiat", "Doctorat pentru toți"], 0, "«Școală după școală» și «Învățare remedială» sunt exemplele din articol.")
      ],
      "Art. 136 — Ministerul are inițiativă în politica financiară și de resurse umane, iar UAT-urile pot contribui din venituri proprii la finanțarea de bază și complementară și la programe educaționale."
    ),
    L(
      137,
      "Finanțarea învățământului particular, confesional și tehnologic",
      "10 min",
      "fonduri publice și taxe · transparența taxelor · contract tripartit · cheltuieli operatori economici",
      "Articolul 137 reglementează sursele de finanțare pentru învățământul de stat, particular și confesional și detaliază contribuția operatorilor economici la învățământul liceal tehnologic.\n\nÎnvățământul autorizat provizoriu sau acreditat poate fi finanțat din fonduri publice ori din alte surse legale. În învățământul particular și confesional, finanțarea provine din taxe, din fonduri publice pentru nivelul antepreșcolar, preșcolar și pentru învățământul obligatoriu, precum și din alte surse.\n\nÎn unitățile particulare, taxele de școlarizare sunt stabilite de consiliul de administrație. La publicarea taxelor și în contractul cu părinții trebuie precizată obligatoriu suma acoperită prin finanțarea de la bugetul de stat. Această regulă asigură transparența: familia trebuie să poată distinge contribuția publică de taxa suportată.\n\nPentru învățământul liceal tehnologic, finanțarea operatorilor economici se realizează printr-un contract de parteneriat între unitatea de învățământ, UAT-ul pe raza căruia se află școala și operatorul sau operatorii economici. Operatorii pot suporta cheltuieli pentru elevi, echipamente, transport, masă, cazare, securitate și sănătate în muncă, asigurări, materiale, evaluare și certificare, utilități, tutori și formatori, sprijinirea cadrelor didactice, dar și investiții în spații și echipamente pentru pregătirea elevilor.\n\nFormula de memorare este: surse diverse – taxă transparentă – parteneriat școală, UAT, operator – proces de învățământ și investiții.",
      [
        "Taxele în învățământul particular sunt stabilite de consiliul de administrație.",
        "Contractul și publicarea taxei trebuie să arate partea acoperită de la bugetul de stat.",
        "Parteneriatul tehnologic reunește școala, UAT-ul și operatorul economic."
      ],
      [
        Q("Cine stabilește taxele de școlarizare într-o unitate particulară?", ["Consiliul de administrație al unității", "Consiliul Național al Elevilor", "Ministerul Finanțelor pentru fiecare școală", "Comitetul de părinți"], 0, "Art. 137 alin. (3) atribuie stabilirea taxelor consiliului de administrație."),
        Q("Ce informație trebuie precizată la publicarea taxelor și în contractul cu părinții?", ["Numărul profesorilor", "Suma acoperită prin finanțarea de la bugetul de stat", "Doar programul secretariatului", "Valoarea patrimoniului UAT"], 1, "Legea impune transparența sumei acoperite din finanțarea publică."),
        Q("Cine încheie contractul de parteneriat pentru finanțarea învățământului liceal tehnologic de către operatori?", ["Doar școala și părinții", "Școala, UAT-ul și operatorul sau operatorii economici", "Numai ministerul și operatorul", "Consiliul elevilor și primăria"], 1, "Contractul este tripartit: unitatea de învățământ, UAT-ul și operatorul economic.")
      ],
      "Art. 137 — Reglementează sursele de finanțare ale învățământului, transparența taxelor în unitățile particulare și parteneriatul dintre școală, UAT și operatorii economici pentru liceul tehnologic."
    ),
    L(
      138,
      "Tipurile finanțării și costul standard",
      "13 min",
      "bază · complementară · specială · cost standard · suplimentări 25% · prorogare · alin. (10) nou",
      "Articolul 138 este nucleul sistemului de finanțare. Finanțarea unităților de stat cuprinde trei componente: finanțarea de bază, finanțarea complementară și finanțarea specială.\n\nStatul asigură finanțarea de bază pentru beneficiarii din învățământul de stat autorizat sau acreditat, pentru antepreșcolarii și preșcolarii din învățământul particular și confesional acreditat și pentru elevii din aceste unități pe durata învățământului obligatoriu. Finanțarea se realizează în baza și în limitele costului standard per antepreșcolar, preșcolar sau elev, diferențiat pe nivel, filieră și profil.\n\nCostul standard este suplimentat cu 25% pentru unitățile defavorizate, însă aplicarea acestei prevederi, art. 138 alin. (5), este prorogată până la începutul anului școlar 2027–2028. O suplimentare de 25% este prevăzută și pentru unitățile din consorții școlare sau consorții de învățământ dual formate din unități urbane și rurale.\n\nFinanțarea de bază respectă principiul «resursa financiară urmează beneficiarul»: alocația se transferă la unitatea la care acesta învață. Statul finanțează și unitățile particulare și confesionale autorizate provizoriu care nu percep taxe.\n\nÎn 2026 a fost introdus alin. (10). Pentru unitățile particulare și confesionale acreditate, precum și pentru cele autorizate fără taxe, care obțin acreditarea sau autorizarea provizorie în cursul unui an financiar, finanțarea de bază începe din anul financiar următor.\n\nFormula de memorare este: trei finanțări – cost standard – două suplimentări de 25% – resursa urmează elevul – finanțare din anul financiar următor pentru noile acreditări sau autorizări vizate de alin. (10).",
      [
        "Finanțarea unităților de stat are trei componente: de bază, complementară și specială.",
        "Art. 138 alin. (5) este prorogat până la începutul anului școlar 2027–2028.",
        "Alin. (10), introdus în 2026, leagă finanțarea noilor acreditări/autorizări de anul financiar următor."
      ],
      [
        Q("Care sunt cele trei componente ale finanțării unităților de stat?", ["De bază, complementară și specială", "Locală, regională și europeană", "Curentă, privată și facultativă", "Salarială, voluntară și externă"], 0, "Art. 138 alin. (1) enumeră finanțarea de bază, complementară și specială."),
        Q("Cu cât se suplimentează costul standard pentru unitățile defavorizate, potrivit textului art. 138 alin. (5)?", ["10%", "15%", "25%", "50%"], 2, "Suplimentarea prevăzută este de 25%, iar aplicarea alineatului este prorogată până în 2027–2028."),
        Q("Când începe finanțarea de bază pentru unitățile vizate de art. 138 alin. (10), acreditate sau autorizate în cursul unui an financiar?", ["În aceeași zi", "În luna următoare", "În anul financiar următor", "După cinci ani"], 2, "Alin. (10), introdus în 2026, stabilește începerea finanțării în anul financiar următor.")
      ],
      "Art. 138 — Definește finanțarea de bază, complementară și specială, costul standard și suplimentările. Alin. (5) este prorogat până în 2027–2028, iar alin. (10), introdus în 2026, reglementează începutul finanțării pentru unitățile nou acreditate/autorizate vizate."
    ),
    L(
      139,
      "Conținutul și repartizarea finanțării de bază",
      "15 min",
      "salarii · formare · bunuri și servicii · transport · majorări 100% și 75% · coeficienți · redistribuire",
      "Articolul 139 explică ce acoperă finanțarea de bază și cum se distribuie. Scopul ei este desfășurarea normală a procesului de învățământ, conform standardelor naționale.\n\nCostul standard include cheltuieli salariale și contribuțiile aferente, formarea continuă, bunurile și serviciile și, în textul legii, transportul personalului care nu are locuință în UAT-ul unde lucrează. Aplicarea literei privind transportul, a regulii potrivit căreia formarea și bunurile/serviciile reprezintă minimum 20% și a mecanismului special pentru unitățile cu mai puțin de 300 de beneficiari este prorogată până la începutul anului școlar 2027–2028.\n\nExistă majorări importante. Pentru școlile din spital, costul standard este majorat cu cel puțin 100%. Pentru unitățile în care sunt înscriși beneficiari cu nivel de intervenție I, II sau III, finanțarea este cel puțin la nivelul costului standard majorat cu 75%.\n\nLa 16 iulie 2026, alin. (4) a fost modificat: unitățile preuniversitare autorizate provizoriu sau acreditate, înființate în cadrul ori în subordinea instituțiilor de învățământ superior de stat, beneficiază de finanțare pe baza costului standard, prin transferuri din bugetul de stat, prin bugetul Ministerului Educației și Cercetării, incluse în contractul complementar cu instituția de învățământ superior.\n\nAlocarea ia în calcul numărul beneficiarilor și coeficienți de corecție: număr mic de elevi, izolare lingvistică sau geografică, severitatea dezavantajelor, predarea în limba minorității și alți factori. Dacă sumele sunt insuficiente, legea permite redistribuiri, după verificări și cu respectarea echității. Sumele alocate ca finanțare de bază nu pot fi executate silit pentru creanțe aflate în sarcina autorităților locale ori a unităților.\n\nFormula de memorare: categorii de cheltuieli – prorogări – majorări – corecții – redistribuire – protecția sumelor.",
      [
        "Finanțarea de bază acoperă salarii, formare, bunuri și servicii și, potrivit textului, transportul personalului eligibil.",
        "Școala din spital primește cel puțin +100%, iar nivelurile de intervenție I–III cel puțin +75%.",
        "Art. 139 alin. (4) a fost modificat în iulie 2026 pentru unitățile din cadrul/subordinea universităților de stat."
      ],
      [
        Q("Cu cât este majorat cel puțin costul standard pentru școlile din spital?", ["25%", "50%", "75%", "100%"], 3, "Art. 139 alin. (5) prevede o majorare de cel puțin 100%."),
        Q("Care este majorarea minimă pentru beneficiarii cu niveluri de intervenție I, II sau III?", ["10%", "25%", "75%", "100%"], 2, "Finanțarea este cel puțin la nivelul costului standard majorat cu 75%."),
        Q("Până când sunt prorogate art. 139 alin. (2) lit. d), alin. (3) și alin. (7)?", ["Până la începutul anului școlar 2026–2027", "Până la începutul anului școlar 2027–2028", "Până la 31 decembrie 2026", "Nu sunt prorogate"], 1, "Legea nr. 141/2025 a prorogat aceste prevederi până la începutul anului școlar 2027–2028.")
      ],
      "Art. 139 — Reglementează cheltuielile finanțării de bază, majorările pentru școala din spital și nivelurile de intervenție, coeficienții de corecție și redistribuirile. Alin. (4) este prezentat în forma modificată la 16.07.2026."
    ),
    L(
      140,
      "Finanțarea complementară",
      "10 min",
      "capital · cheltuieli sociale · bugete locale · investiții · securitate · proiecte · dotări",
      "Articolul 140 definește finanțarea complementară ca finanțarea cheltuielilor de capital, a cheltuielilor sociale și a altor cheltuieli asociate procesului de învățământ de stat care nu intră în finanțarea de bază.\n\nSursele sunt bugetele locale ale UAT-urilor de care aparțin școlile și sumele defalcate din unele venituri ale bugetului de stat, aprobate anual cu această destinație.\n\nLista principală include investiții, reparații capitale și curente, consolidări, subvenții pentru internate și cantine, evaluări periodice naționale, examinarea medicală obligatorie a salariaților, concursuri și activități extrașcolare, centre de excelență, securitate și sănătate pentru personal și beneficiari, situații de urgență, suplinirea profesorilor plecați în proiecte europene, obiecte de inventar, materiale sanitare, cărți și publicații.\n\nDin veniturile proprii, UAT-urile pot aloca suplimentar sume pentru burse, premierea școlilor cu rezultate în incluziune sau excelență și a celor cu risc sporit de abandon, atragerea personalului, concursuri, proiecte, cofinanțări și dotarea cantinelor, sălilor de sport, bibliotecilor, atelierelor și bazelor sportive.\n\nDiferența esențială față de finanțarea de bază este că finanțarea complementară acoperă investițiile, dimensiunea socială și cheltuielile conexe care nu sunt incluse în baza calculată prin cost standard.",
      [
        "Finanțarea complementară acoperă cheltuieli care nu fac parte din finanțarea de bază.",
        "Sursele principale sunt bugetele locale și sumele defalcate cu destinație specială.",
        "Investițiile, securitatea, situațiile de urgență și dotările se pot regăsi aici."
      ],
      [
        Q("Ce tip de cheltuieli acoperă finanțarea complementară?", ["Numai salariile", "Cheltuieli de capital, sociale și alte cheltuieli care nu sunt de bază", "Exclusiv bursele universitare", "Numai donațiile"], 1, "Aceasta este definiția dată de art. 140 alin. (1)."),
        Q("Din ce sursă se asigură în principal finanțarea complementară?", ["Bugetele locale și sume defalcate din venituri ale bugetului de stat", "Exclusiv taxele părinților", "Numai credite bancare", "Doar veniturile profesorilor"], 0, "Articolul indică bugetele locale și sumele defalcate aprobate anual."),
        Q("Care cheltuială poate fi finanțată complementar?", ["Consolidarea clădirii școlii", "Pensia unui absolvent", "Impozitul pe profit al unui operator", "Taxele universitare ale directorului"], 0, "Investițiile, reparațiile și consolidările sunt categorii expres prevăzute.")
      ],
      "Art. 140 — Finanțarea complementară acoperă investiții, cheltuieli sociale, securitate, urgențe, activități și dotări care nu intră în finanțarea de bază, din bugete locale și sume defalcate."
    ),
    L(
      141,
      "Contractele de management pentru finanțare",
      "6 min",
      "contract de management educațional · bugetul ministerului · contract de management · buget local · situație tranzitorie",
      "Articolul 141 leagă finanțarea de responsabilitatea managerială prin două tipuri de contracte.\n\nPentru finanțarea primită din bugetul Ministerului Educației, directorul unității de învățământ sau al unității de educație extrașcolară încheie un contract de management educațional cu directorul general al DJIP/DMBIP. Pentru finanțarea primită din bugetul autorității locale, directorul unității de învățământ încheie un contract de management cu ordonatorul principal de credite al autorității locale.\n\nEste util să reținem corespondența exactă: bugetul ministerului – contract de management educațional – structură teritorială a ministerului; bugetul local – contract de management – ordonatorul principal de credite local.\n\nÎn august 2026 există însă o situație tranzitorie: aplicarea articolelor 116–119 privind operaționalizarea DJIP/DMBIP este prorogată până la începutul anului școlar 2027–2028, iar inspectoratele școlare continuă să funcționeze. Pentru concurs trebuie cunoscut atât mecanismul proiectat de art. 141, cât și această diferență între arhitectura legală viitoare și structurile încă active.",
      [
        "Finanțarea din bugetul ministerului este legată de contractul de management educațional.",
        "Finanțarea locală este legată de contractul de management cu ordonatorul principal local.",
        "DJIP/DMBIP fac parte din arhitectura a cărei operaționalizare este prorogată până în 2027–2028."
      ],
      [
        Q("Ce contract corespunde finanțării primite din bugetul Ministerului Educației?", ["Contract de management educațional", "Contract individual al elevului", "Contract de închiriere", "Contract de voluntariat"], 0, "Art. 141 folosește contractul de management educațional pentru finanțarea din bugetul ministerului."),
        Q("Cu cine se încheie contractul pentru finanțarea primită din bugetul local?", ["Cu ordonatorul principal de credite al autorității locale", "Cu fiecare părinte", "Cu Ministerul Sănătății", "Cu sindicatul"], 0, "Directorul încheie contractul de management cu ordonatorul principal de credite local."),
        Q("Care structură apare în textul art. 141 pentru finanțarea ministerului?", ["DJIP/DMBIP", "Senatul universitar", "Consiliul Economic și Social", "Prefectura ca unic finanțator"], 0, "Articolul indică directorul general al DJIP/DMBIP, cu precizarea situației tranzitorii actuale.")
      ],
      "Art. 141 — Finanțarea de la minister și cea locală se realizează, după caz, prin contracte distincte de management, încheiate de director cu structura teritorială competentă și cu ordonatorul principal local."
    ),
    L(
      142,
      "Veniturile proprii ale unității",
      "8 min",
      "activități specifice · aprobare locală · nediminuarea finanțării · reportarea excedentului · răspundere",
      "Articolul 142 permite unităților de învățământ de stat și unităților de educație extrașcolară să obțină venituri proprii din activități specifice domeniului educației, organizate pe lângă unitate.\n\nÎnființarea activităților finanțate integral din venituri proprii se aprobă prin hotărârea autorității deliberative a administrației publice locale. Hotărârea stabilește domeniul activității, categoriile de venituri care pot fi încasate și categoriile de cheltuieli care pot fi finanțate. Bugetul acestor activități se aprobă împreună cu bugetul instituției publice de care aparțin.\n\nVeniturile proprii nu diminuează finanțarea de bază, complementară sau specială. Ele trebuie folosite în scopul pentru care au fost încasate. Excedentul rămas la sfârșitul anului bugetar se reportează în anul următor și se utilizează cu aceeași destinație.\n\nDirectorul și consiliul de administrație răspund de încadrarea în bugetul aprobat. Pentru un director, acesta este un punct practic important: obținerea veniturilor proprii aduce flexibilitate, dar și obligația respectării destinației, a bugetului și a răspunderii manageriale.\n\nFormula de memorare: aprobare locală – venit suplimentar fără diminuarea finanțării – aceeași destinație – răspunderea directorului și CA.",
      [
        "Activitățile finanțate integral din venituri proprii se aprobă local.",
        "Veniturile proprii nu diminuează cele trei forme de finanțare.",
        "Excedentul se reportează și păstrează aceeași destinație."
      ],
      [
        Q("Cine aprobă înființarea activităților finanțate integral din venituri proprii?", ["Autoritatea deliberativă a administrației publice locale", "Consiliul elevilor", "Fiecare profesor", "Operatorul de transport"], 0, "Aprobarea se face prin hotărârea autorității deliberative locale."),
        Q("Veniturile proprii diminuează finanțarea de bază, complementară sau specială?", ["Da, întotdeauna", "Nu", "Numai finanțarea specială", "Numai dacă există excedent"], 1, "Art. 142 alin. (2) precizează expres că aceste venituri nu diminuează finanțarea."),
        Q("Ce se întâmplă cu excedentul la sfârșitul anului bugetar?", ["Se pierde", "Se distribuie automat salariaților", "Se reportează și se folosește cu aceeași destinație", "Se transferă obligatoriu unei firme"], 2, "Excedentul se reportează în anul următor și păstrează destinația inițială.")
      ],
      "Art. 142 — Permite venituri proprii din activități educaționale aprobate local; acestea nu reduc finanțarea publică, se folosesc potrivit destinației, iar excedentul se reportează."
    ),
    L(
      143,
      "Bugetul anual și finanțarea învățământului special",
      "9 min",
      "buget anual · norme metodologice · salarii de la minister · condiții din bugete județene · contracte",
      "Articolul 143 cuprinde două teme: bugetul anual al unității și sursele finanțării învățământului special.\n\nFiecare unitate de învățământ preuniversitar și fiecare unitate de educație extrașcolară întocmește anual bugetul de venituri și cheltuieli, potrivit normelor metodologice aprobate prin ordin al ministrului educației. Bugetul se aprobă și se execută cu respectarea legii.\n\nPentru unitățile, clasele și elevii din învățământul special, cheltuielile salariale, sporurile, indemnizațiile, celelalte drepturi salariale și contribuțiile aferente se finanțează din bugetul Ministerului Educației. Cheltuielile necesare condițiilor unui proces educațional de calitate se finanțează din bugetele locale ale județelor și ale sectoarelor municipiului București și din sume defalcate prin aceste bugete, indiferent de domiciliul copiilor.\n\nFinanțarea învățământului special și a elevilor integrați în învățământul de masă se leagă de contractul de management educațional pentru fondurile ministerului și de contractul de management cu ordonatorii principali ai bugetelor locale județene sau ai sectoarelor.\n\nSchema de reținut este: buget anual – salarii de la minister – condiții de calitate prin județe/sectoare – două contracte de management.",
      [
        "Bugetul de venituri și cheltuieli se întocmește anual.",
        "Salariile învățământului special sunt finanțate din bugetul ministerului.",
        "Celelalte condiții sunt finanțate prin bugetele județelor și sectoarelor, indiferent de domiciliu."
      ],
      [
        Q("Cât de des se întocmește bugetul de venituri și cheltuieli al unității?", ["Lunar", "Semestrial", "Anual", "O dată la cinci ani"], 2, "Art. 143 alin. (1) prevede întocmirea anuală."),
        Q("Din ce buget se finanțează drepturile salariale din învățământul special?", ["Bugetul Ministerului Educației", "Exclusiv donații", "Bugetul fiecărui părinte", "Fondul de rezervă al elevilor"], 0, "Cheltuielile salariale și contribuțiile sunt asigurate din bugetul ministerului."),
        Q("Contează domiciliul copilului pentru finanțarea condițiilor învățământului special din bugetele județene/sectoarelor?", ["Da, întotdeauna", "Nu, finanțarea se asigură indiferent de domiciliu", "Numai pentru liceu", "Numai în București"], 1, "Textul precizează expres că finanțarea se asigură indiferent de locul de domiciliu al copiilor.")
      ],
      "Art. 143 — Reglementează bugetul anual al unității și finanțarea învățământului special: salarii din bugetul ministerului, condiții de calitate prin bugetele județelor și sectoarelor."
    ),
    L(
      144,
      "Finanțarea specială și stimulentele locale",
      "12 min",
      "programe naționale · burse · examene · investiții · concursuri · stimulente · studii la 3 ani",
      "Articolul 144 enumeră cheltuielile suportate de la bugetul de stat, ca finanțare specială, prin bugetul Ministerului Educației.\n\nAici intră programele naționale, componenta locală a proiectelor cofinanțate, bursele elevilor, bursele pentru românii din afara granițelor și pentru elevii străini, organizarea evaluărilor, simulărilor și examenelor naționale, perfecționarea salariaților pentru implementarea politicilor ministerului, programele de investiții, modernizare și dezvoltare a bazei materiale, programele de protecție socială, concursurile și olimpiadele, eliberarea actelor de studii și alte cheltuieli stabilite de lege.\n\nAutoritățile locale pot finanța întreținerea și investițiile în imobilele administrate și pot participa la finanțarea de bază și complementară. Consiliile locale, județene și Consiliul General al Municipiului București pot finanța olimpiade și concursuri și pot acorda stimulente elevilor premiați și profesorilor care i-au pregătit. Pot premia și rezultate la alte concursuri decât cele din listele ministerului, precum și media 10 la Evaluarea Națională și bacalaureat. Cuantumul se stabilește prin regulament aprobat de consiliul competent, în limita bugetului.\n\nMinisterul finanțează, din trei în trei ani, studii de impact pentru toate programele naționale. Pentru imparțialitate, studiul nu poate fi elaborat de instituția care a implementat programul analizat.\n\nFormula de memorare: finanțare specială de la minister – stimulente locale – evaluarea impactului la trei ani, realizată independent de implementator.",
      [
        "Finanțarea specială acoperă programe, burse, examene, investiții și concursuri.",
        "Autoritățile locale pot recompensa elevii și profesorii, inclusiv pentru medii de 10.",
        "Impactul programelor naționale se studiază din trei în trei ani, nu de implementator."
      ],
      [
        Q("Care cheltuială intră în finanțarea specială?", ["Organizarea examenelor naționale", "Cheltuielile personale ale părinților", "Taxele unei firme", "Creditul ipotecar al directorului"], 0, "Organizarea evaluărilor, simulărilor și examenelor naționale este prevăzută expres."),
        Q("Pot autoritățile locale premia elevii care au obținut media 10 la Evaluarea Națională sau bacalaureat?", ["Da, în baza unui regulament și în limita bugetului", "Nu", "Numai după 10 ani", "Numai prin ordin ministerial individual"], 0, "Art. 144 alin. (5^1)–(5^2) permite această premiere în condițiile stabilite."),
        Q("La ce interval se finanțează studiile de impact ale programelor naționale?", ["Anual", "Din doi în doi ani", "Din trei în trei ani", "O singură dată"], 2, "Art. 144 alin. (6) stabilește intervalul de trei ani.")
      ],
      "Art. 144 — Definește finanțarea specială prin bugetul ministerului, posibilitatea stimulentelor locale și evaluarea independentă, la trei ani, a impactului programelor naționale."
    ),
    L(
      145,
      "Finanțarea educației extrașcolare",
      "11 min",
      "buget de stat · Palatul Național · proiecte · calendare · preluare locală · destinația imobilelor",
      "Articolul 145 reglementează finanțarea unităților și proiectelor de educație extrașcolară.\n\nUnitățile de educație extrașcolară sunt finanțate de la bugetul de stat, de Ministerul Educației, prin DJIP/DMBIP, iar Palatul Național al Copiilor din București este finanțat direct de minister. Autoritățile locale și județene pot contribui prin hotărâri proprii.\n\nProiectele naționale și internaționale pot primi finanțare de la minister după evaluare, conform unui regulament. Ele pot fi concursuri, festivaluri, campionate, proiecte sociale, de voluntariat sau caritabile, spectacole, expoziții, simpozioane, concerte, turnee ori tabere. Calendarul național este aprobat anual prin ordin și cuprinde proiecte cofinanțate de minister, proiecte fără finanțare ministerială și proiecte regionale/interjudețene. Există și calendare județene sau al municipiului București.\n\nUnitățile extrașcolare, inclusiv cluburile sportive școlare, pot fi preluate de autoritățile locale la cererea acestora, prin hotărâre a Guvernului inițiată de minister. Oportunitatea se aprobă prin memorandum motivat, cu respectarea regulilor privind proprietatea terenurilor și clădirilor. Coordonarea metodologică rămâne la minister, iar finanțarea se alocă autorităților locale.\n\nTerenurile și clădirile preluate nu își pot schimba destinația. Actele făcute cu încălcarea interdicției sunt nule de drept. Reține și situația tranzitorie: DJIP/DMBIP sunt încă prorogate până în 2027–2028.",
      [
        "Palatul Național al Copiilor este finanțat direct de minister.",
        "Calendarul proiectelor extrașcolare se aprobă anual prin ordin.",
        "Unitățile, inclusiv CSS, pot fi preluate local prin hotărâre a Guvernului, fără schimbarea destinației imobilelor."
      ],
      [
        Q("Cine finanțează direct Palatul Național al Copiilor din București?", ["Ministerul Educației", "Fiecare școală din țară", "Consiliul elevilor", "Un operator privat obligatoriu"], 0, "Art. 145 alin. (2) prevede finanțarea directă de către minister."),
        Q("Prin ce act se aprobă anual calendarul proiectelor de educație extrașcolară?", ["Prin ordin al ministrului educației", "Prin regulamentul fiecărei clase", "Prin contract individual", "Prin referendum local"], 0, "Calendarul anual este aprobat prin ordin al ministrului."),
        Q("Cum pot fi preluate unitățile extrașcolare de autoritățile locale?", ["Automat, prin simplă adresă", "Prin hotărâre a Guvernului inițiată de minister, la solicitarea autorității", "Prin votul elevilor", "Prin contract de vânzare obligatoriu"], 1, "Preluarea se realizează prin hotărâre a Guvernului, în condițiile și cu justificarea prevăzute de lege.")
      ],
      "Art. 145 — Reglementează finanțarea unităților și proiectelor extrașcolare, calendarele anuale și posibilitatea preluării locale a unităților, cu protejarea destinației terenurilor și clădirilor."
    ),
    L(
      146,
      "Baza materială și schimbarea destinației",
      "15 min",
      "proprietate publică/privată · administrare · protecția bunurilor · aviz conform · 3 ani · 90 de zile · sancțiune",
      "Articolul 146 reglementează patrimoniul educației și protecția destinației sale. Unitățile de stat pot deține sau administra bunuri publice, cele particulare bunuri private, iar cele confesionale bunuri publice și/sau private, după entitatea care le-a înființat.\n\nTerenurile și clădirile școlilor de stat fac parte, de regulă, din domeniul public local și sunt administrate de consiliile locale. Pentru învățământul special, ele aparțin domeniului public județean sau al municipiului București și sunt administrate de autoritățile corespunzătoare. Celelalte componente ale bazei materiale – spații, mijloace de învățământ, biblioteci, ateliere, internate, cantine, baze sportive, bunuri din proiecte și alte bunuri destinate educației – sunt inalienabile, insesizabile și imprescriptibile cât timp sunt utilizate în sistem.\n\nSchimbarea destinației bazei materiale folosite în continuare de școală se poate face numai pentru activități care nu afectează negativ activitatea didactică și contribuie la comunitate, cu avizul conform al ministerului. Pentru terenurile și clădirile în care activitatea didactică a încetat, în primii trei ani schimbarea destinației se face numai cu aviz conform. Cererea de aviz se soluționează în 90 de zile calendaristice. După primii trei ani, autoritatea locală poate decide fără aviz, dar cu informarea scrisă a ministerului și numai pentru servicii publice ori activități care dezvoltă comunitatea.\n\nDacă educația trebuie reluată, autoritatea locală trebuie să reamenajeze imobilul la standardele necesare sau să ofere un alt spațiu corespunzător. Actele realizate cu încălcarea regulilor sunt nule de drept. Schimbarea destinației fără aviz, în cazurile în care avizul este obligatoriu, constituie infracțiune și se pedepsește cu închisoare de la 6 luni la 5 ani sau cu amendă. Închirierea terenurilor, clădirilor și a celorlalte componente se face numai cu avizul conform al ministerului.\n\nFormula de memorare: proprietate și administrare – protecție – trei ani – aviz și 90 de zile – revenire la educație – nulitate și sancțiune.",
      [
        "Terenurile și clădirile școlilor de stat sunt, de regulă, în domeniul public local.",
        "În primii trei ani de la încetarea activității didactice este necesar avizul conform pentru schimbarea destinației.",
        "Termenul de soluționare a cererii de aviz este de 90 de zile calendaristice."
      ],
      [
        Q("Cine administrează, de regulă, terenurile și clădirile școlilor de stat din domeniul public local?", ["Consiliile locale", "Fiecare elev", "Operatorii economici", "Exclusiv universitățile"], 0, "Art. 146 alin. (2) indică administrarea de către consiliile locale."),
        Q("Care este termenul pentru soluționarea cererii de aviz conform?", ["15 zile", "30 de zile", "60 de zile", "90 de zile calendaristice"], 3, "Art. 146 alin. (10) prevede 90 de zile calendaristice."),
        Q("Ce sancțiune prevede art. 146 pentru schimbarea destinației fără aviz, când avizul este obligatoriu?", ["Doar avertisment verbal", "Închisoare de la 6 luni la 5 ani sau amendă", "Suspendarea cursurilor pentru o zi", "Nicio sancțiune"], 1, "Art. 146 alin. (14) califică fapta drept infracțiune și prevede închisoare de la 6 luni la 5 ani sau amendă.")
      ],
      "Art. 146 — Reglementează proprietatea și administrarea bazei materiale, protecția bunurilor, schimbarea destinației, avizul conform, termenul de 90 de zile și sancțiunile pentru nerespectarea regulilor."
    ),
    L(
      147,
      "Înscrierea proprietății și interdicția privatizării",
      "5 min",
      "carte funciară · scutire de taxe · bunuri ale ministerului, școlilor și autorităților · interdicția privatizării",
      "Articolul 147 conține două reguli clare privind protejarea patrimoniului educațional.\n\nDreptul de proprietate asupra bunurilor imobile ale Ministerului Educației sau ale unităților de învățământ de stat, precum și asupra bunurilor autorităților locale, județene și ale Consiliului General al Municipiului București în care funcționează școli de stat, se înscrie în cartea funciară. Înscrierea se face cu scutire de plata taxelor prevăzute de lege.\n\nA doua regulă este categorică: privatizarea unităților de învățământ de stat este interzisă.\n\nPentru memorare, articolul poate fi redus la două expresii: carte funciară fără taxe și școala de stat nu se privatizează. Înscrierea clarifică și protejează dreptul de proprietate, iar interdicția păstrează natura publică a unităților de stat.",
      [
        "Bunurile imobile vizate se înscriu în cartea funciară.",
        "Înscrierea este scutită de taxele prevăzute de lege.",
        "Privatizarea unităților de învățământ de stat este interzisă."
      ],
      [
        Q("Unde se înscrie dreptul de proprietate asupra bunurilor imobile vizate de art. 147?", ["În catalogul clasei", "În cartea funciară", "În registrul matricol", "În condica de prezență"], 1, "Art. 147 prevede înscrierea în cartea funciară."),
        Q("Cum se face înscrierea din perspectiva taxelor?", ["Cu taxă dublă", "Cu scutire de plata taxelor prevăzute de lege", "Numai după o donație", "Fără documente"], 1, "Textul acordă scutire de la plata taxelor legale."),
        Q("Este permisă privatizarea unităților de învățământ de stat?", ["Da, prin decizia directorului", "Da, în fiecare an", "Nu, este interzisă", "Numai în mediul rural"], 2, "Ultima teză a art. 147 interzice privatizarea unităților de stat.")
      ],
      "Art. 147 — Înscrierea în cartea funciară a proprietății asupra imobilelor educaționale vizate este scutită de taxe, iar privatizarea unităților de învățământ de stat este interzisă."
    ),
    L(
      148,
      "Contravențiile și răspunderea",
      "12 min",
      "amendă 1.000–5.000 lei · părinte · director · contract educațional · burse · constatare · necorelare art. 108",
      "Articolul 148 reglementează răspunderea contravențională, dacă faptele nu constituie infracțiuni.\n\nPrima faptă privește părintele sau reprezentantul legal care, din culpă, împiedică participarea copilului la programul școlar ori refuză semnarea contractului educațional. Sancțiunea este amenda de la 1.000 la 5.000 de lei. Constatarea și aplicarea sancțiunii revin persoanelor împuternicite de primar.\n\nA doua faptă privește directorul care nu alocă bursele sau refuză semnarea contractului educațional. Sancțiunea este amenda de la 1.000 la 5.000 de lei sau prestarea unei activități în folosul comunității. Constatarea și sancționarea revin persoanelor cu atribuții de control din structura teritorială competentă sau din minister, în urma sesizării consiliului de administrație, a beneficiarilor primari ori a părinților/reprezentanților legali.\n\nExistă o necorelare importantă în forma consolidată la 12 august 2026: art. 148 lit. b) continuă să trimită textual la art. 108, deși art. 108 a fost abrogat la 1 septembrie 2025, iar bursele sunt reglementate prin art. 108^1. Materialul păstrează formularea legală și semnalează necorelarea; nu înlocuiește automat trimiterea.\n\nContravențiilor li se aplică regimul general din Ordonanța Guvernului nr. 2/2001. Răspunderea pentru faptele beneficiarilor primari se exercită potrivit Codului civil, în măsura în care faptele nu intră sub incidența Codului penal.\n\nFormula de memorare: două persoane – părinte și director; același interval al amenzii – 1.000–5.000 de lei; autorități constatatoare diferite; regim general contravențional și răspundere civilă ori penală.",
      [
        "Intervalul amenzii este 1.000–5.000 de lei.",
        "Pentru părinte, sancțiunea este aplicată de persoanele împuternicite de primar.",
        "Textul art. 148 păstrează trimiterea la art. 108, deși bursele sunt acum la art. 108^1."
      ],
      [
        Q("Care este intervalul amenzii prevăzute la art. 148?", ["100–500 lei", "500–900 lei", "1.000–5.000 lei", "10.000–50.000 lei"], 2, "Ambele situații contravenționale folosesc intervalul 1.000–5.000 de lei."),
        Q("Cine constată și sancționează fapta părintelui prevăzută la art. 148 alin. (1) lit. a)?", ["Persoanele împuternicite de primar", "Consiliul elevilor", "Directorul singur", "Orice profesor"], 0, "Art. 148 alin. (2) atribuie competența persoanelor împuternicite de primar."),
        Q("Ce necorelare trebuie observată în forma actuală a art. 148?", ["Trimite încă la art. 108, deși bursele sunt reglementate la art. 108^1", "Nu conține nicio amendă", "A fost abrogat integral", "Reglementează numai universități"], 0, "Forma consolidată păstrează trimiterea la art. 108, abrogat din 1 septembrie 2025 și înlocuit de art. 108^1.")
      ],
      "Art. 148 — Stabilește contravențiile privind împiedicarea participării la școală, refuzul contractului educațional și nealocarea burselor, amenda de 1.000–5.000 lei și autoritățile competente. Textul păstrează o trimitere necorelată la art. 108, abrogat."
    )
  );
})();
