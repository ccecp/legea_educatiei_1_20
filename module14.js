"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–175: verificare 12.08.2026";
  DATA.modules.push({
    id: 14,
    title: "Personalul didactic și formarea inițială",
    articles: "162–175",
    chapter: "Titlul III",
    startArticle: 162,
    endArticle: 175
  });

  DATA.lessons.push(
    L(
      162,
      "Domeniul statutului personalului didactic",
      "7 min",
      "carieră · funcții · formare · ocuparea posturilor · normă · distincții și sancțiuni",
      `Articolul 162 deschide Titlul al III-lea, dedicat statutului și carierei personalului didactic. El arată ce reglementează întregul titlu: cariera profesională a personalului din sistem, funcțiile și competențele, responsabilitățile, drepturile și obligațiile specifice, precum și formarea inițială și continuă.

Titlul stabilește și condițiile de ocupare a posturilor și funcțiilor didactice, didactice auxiliare, de conducere, de îndrumare și control. Tot aici sunt reglementate eliberarea din funcție, încetarea contractului individual de muncă, pensionarea, norma didactică, distincțiile și sancțiunile.

Al doilea alineat precizează cine poate face parte din personalul didactic. Persoana trebuie să îndeplinească cerințele legale de studii, să aibă capacitate deplină de exercițiu și o conduită morală conformă deontologiei profesionale. Trebuie, de asemenea, să fie aptă medical și psihologic și să nu se afle în situația de condamnare prevăzută la art. 168 alin. (7).

Schema de memorare are două niveluri. Mai întâi: ce reglementează titlul – carieră, funcții, formare, ocupare, normă, recompense și sancțiuni. Apoi: condițiile persoanei – studii, capacitate, conduită, aptitudine și lipsa incompatibilității penale.`,
      [
        "Titlul III reglementează întregul parcurs profesional al personalului didactic.",
        "Norma didactică, distincțiile și sancțiunile intră expres în domeniul titlului.",
        "Calitatea de personal didactic presupune studii, capacitate deplină, conduită morală și aptitudine medicală și psihologică."
      ],
      [
        Q("Care element este reglementat expres de Titlul III?", ["Taxele vamale","Norma didactică","Cursul de schimb valutar","Alegerile locale"], 1, "Art. 162 alin. (1) enumeră expres norma didactică."),
        Q("Ce capacitate trebuie să aibă persoana care face parte din personalul didactic?", ["Capacitate comercială limitată","Nicio condiție de capacitate","Capacitate de exercițiu deplină","Numai capacitate electorală"], 2, "Art. 162 alin. (2) cere capacitate de exercițiu deplină."),
        Q("La ce articol trimite art. 162 pentru situația de condamnare incompatibilă cu funcția?", ["Art. 23 alin. (1)","Art. 108¹","Art. 250 alin. (2)","Art. 168 alin. (7)"], 3, "Condiția negativă este raportată la art. 168 alin. (7).")
      ],
      "Art. 162 — Stabilește domeniul Titlului III și condițiile generale pentru a face parte din personalul didactic: studii, capacitate deplină de exercițiu, conduită morală, aptitudine medicală și psihologică și lipsa situației prevăzute la art. 168 alin. (7)."
    ),
    L(
      163,
      "Definiția carierei didactice",
      "3 min",
      "succesiune evolutivă · activități · etape de formare · scop profesional",
      `Articolul 163 oferă definiția legală a carierei didactice. Cariera nu este redusă la vechime și nici la simpla ocupare a unui post. Ea include succesiunea evolutivă a activităților și a etapelor de formare profesională.

Scopul acestei succesiuni este realizarea activității didactice în sistemul de învățământ. Cuvântul «evolutivă» sugerează dezvoltare, trecere prin etape și acumulare profesională.

Pentru concurs, reține formula exactă: activități plus etape de formare profesională, într-o succesiune evolutivă, cu scopul realizării activității didactice.`,
      [
        "Cariera didactică este o succesiune evolutivă.",
        "Ea cuprinde atât activități, cât și etape de formare profesională.",
        "Finalitatea este realizarea activității didactice în sistemul de învățământ."
      ],
      [
        Q("Cum este descrisă cariera didactică la art. 163?", ["Ca succesiune evolutivă","Ca un singur examen","Ca activitate administrativă temporară","Ca simplă vechime"], 0, "Textul legal folosește expres sintagma «succesiunea evolutivă»."),
        Q("Ce două componente include cariera didactică?", ["Exclusiv studii liceale","Activități și etape de formare profesională","Doar salariu și concediu","Numai inspecții și sancțiuni"], 1, "Definiția reunește activitățile și etapele de formare profesională."),
        Q("Care este scopul carierei didactice în definiția legală?", ["Administrarea patrimoniului local","Înființarea unei societăți comerciale","Realizarea activității didactice în sistemul de învățământ","Obținerea automată a unei funcții politice"], 2, "Scopul indicat de art. 163 este realizarea activității didactice.")
      ],
      "Art. 163 — Definește cariera didactică drept succesiunea evolutivă a activităților și etapelor de formare profesională, în scopul realizării activității didactice în sistemul de învățământ."
    ),
    L(
      164,
      "Categoriile de personal din învățământ",
      "7 min",
      "personal didactic · personal administrativ · predare · auxiliar · conducere, îndrumare și control · asociat",
      `Articolul 164 împarte personalul din învățământul preuniversitar în două mari categorii: personal didactic și personal administrativ.

Personalul didactic se subdivide în personal didactic de predare, personal didactic auxiliar și personal didactic de conducere, de îndrumare și control. Această clasificare este importantă deoarece drepturile, condițiile de ocupare și responsabilitățile diferă între categorii.

În sistem poate funcționa și personal de specialitate din alte domenii, denumit personal didactic de predare asociat. Este vorba despre personal cu specializare sau calificare corespunzătoare postului, în condițiile art. 176.

Personalul administrativ este parte integrantă a familiei ocupaționale «Învățământ», dar își desfășoară activitatea în baza Codului muncii. Nu îl confundăm cu personalul didactic auxiliar: auxiliarul este personal didactic, administrativul este cealaltă categorie mare.

Schema este: personal din învățământ egal didactic plus administrativ; didactic egal predare plus auxiliar plus conducere, îndrumare și control; asociatul vine din alte domenii, cu calificare corespunzătoare.`,
      [
        "Personalul preuniversitar este didactic sau administrativ.",
        "Personalul didactic include predarea, auxiliarul și conducerea, îndrumarea și controlul.",
        "Personalul administrativ aparține familiei ocupaționale «Învățământ», dar lucrează în baza Codului muncii."
      ],
      [
        Q("Care sunt cele două categorii mari de personal din învățământul preuniversitar?", ["Permanent și sezonier","Național și internațional","Ales și numit","Didactic și administrativ"], 3, "Art. 164 alin. (1) distinge personalul didactic de personalul administrativ."),
        Q("Personalul didactic auxiliar face parte din ce categorie?", ["Din personalul didactic","Din personalul administrativ","Din personalul medical","Din personalul operatorilor economici"], 0, "Alin. (2) include auxiliarul în personalul didactic."),
        Q("În baza cărui act își desfășoară activitatea personalul administrativ?", ["Legii electorale","Codului muncii","Codului penal","Codului silvic"], 1, "Art. 164 alin. (4) trimite la Legea nr. 53/2003 – Codul muncii.")
      ],
      "Art. 164 — Personalul preuniversitar este format din personal didactic și administrativ; personalul didactic cuprinde predarea, auxiliarul și conducerea, îndrumarea și controlul, iar personalul administrativ lucrează în baza Codului muncii."
    ),
    L(
      165,
      "Funcțiile didactice de predare",
      "13 min",
      "educație timpurie · primar · gimnazial și liceal · special · CJRAE · CCD · sport · mentorat · asociat",
      `Articolul 165 enumeră funcțiile didactice de predare pe niveluri și tipuri de unități. În educația timpurie apar educatorul sau educatoarea și profesorul pentru educație timpurie. Se normează câte un post la fiecare grupă, iar în unitățile cu program prelungit personalul se normează pe ture.

În învățământul primar funcțiile sunt învățător sau învățătoare și profesor pentru învățământ primar, cu câte un post la fiecare clasă. În gimnazial, liceal și postliceal funcțiile sunt profesor, profesor de instruire practică și maistru-instructor. Învățământul vocațional adaugă funcția de profesor corepetitor.

În învățământul special lista este mai amplă: profesor de psihopedagogie specială, personal pentru educație timpurie și primar, profesor-psihopedagog, profesor-educator, personal itinerant și de sprijin, profesor-logoped, profesor preparator pentru nevăzători, profesor audiolog școlar, profesor kinetoterapeut, profesor de instruire practică și maistru-instructor.

În CJRAE sau CMBRAE funcționează profesor-logoped, profesor-psihopedagog, profesor itinerant și de sprijin, profesor-consilier școlar și profesor-psiholog. În casele corpului didactic apar profesor-metodist, profesor-asociat, formator și mentor de dezvoltare profesională.

Legea mai enumeră funcții în cluburile sportive școlare, pentru activități extrașcolare, pentru mentoratul de inserție profesională, în centrele de documentare și informare, în sistemul de apărare, ordine publică și securitate națională și în «Școala din spital».

Alineatul al doilea explică personalul didactic de predare asociat: poate fi titular în altă unitate, persoană din categoria prevăzută la art. 176 alin. (6), pensionar încadrat la plata cu ora sau specialist din alt domeniu, dacă are specializarea ori calificarea corespunzătoare postului.

Nu este eficient să memorați lista ca pe un șir. Grupați-o pe medii: niveluri obișnuite – special și servicii de sprijin – formare și mentorat – sport și extrașcolar – structuri speciale.`,
      [
        "În educația timpurie și în primar se normează, ca regulă, câte un post la grupă, respectiv la clasă.",
        "Profesorul corepetitor este funcție suplimentară specifică învățământului vocațional.",
        "Personalul asociat poate include titulari din altă unitate, pensionari la plata cu ora și specialiști din alte domenii."
      ],
      [
        Q("Ce funcție este prevăzută suplimentar în învățământul vocațional?", ["Medic de familie","Arhitect-șef","Profesor corepetitor","Inspector fiscal"], 2, "Art. 165 alin. (1) lit. d) menționează profesorul corepetitor."),
        Q("Care funcție este prevăzută în CJRAE/CMBRAE?", ["Profesor corepetitor obligatoriu","Instructor militar exclusiv","Contabil-șef ca funcție didactică","Profesor-consilier școlar"], 3, "Profesorul-consilier școlar este una dintre funcțiile didactice din CJRAE/CMBRAE."),
        Q("Poate un pensionar încadrat în regim de plata cu ora să fie personal didactic de predare asociat?", ["Da","Nu","Numai dacă este primar","Numai fără calificare"], 0, "Alineatul (2) include expres personalul didactic pensionat încadrat la plata cu ora.")
      ],
      "Art. 165 — Enumeră funcțiile didactice de predare pentru toate nivelurile și structurile preuniversitare și definește personalul didactic de predare asociat."
    ),
    L(
      166,
      "Profilul profesional al cadrului didactic",
      "8 min",
      "competențe · etape ale carierei · niveluri · standarde profesionale · standarde de calitate · ordin al ministrului",
      `Articolul 166, în forma modificată prin OUG nr. 95/2024, definește profilul profesional al cadrului didactic ca ansamblul competențelor necesare realizării activității didactice.

Profilul nu este unic și rigid. El se adaptează pe etape ale carierei și pe niveluri de învățământ. Din profil derivă două seturi distincte: standardele de calitate pentru programele de formare inițială și standardele profesionale pentru funcțiile didactice.

Metodologia privind profilul profesional are valoare instrumentală pentru trei domenii: formarea inițială, formarea continuă și managementul carierei didactice. Metodologia, profilul, standardele profesionale și standardele de calitate pentru formarea inițială se aprobă prin ordin al ministrului educației, publicat în Monitorul Oficial.

Pentru aplicare, art. 248 alin. (7) și (8) stabilește că standardele de calitate și profilul de competențe sunt aplicabile sau obligatorii începând cu anul școlar 2025–2026. La concurs trebuie să distingeți profilul – ansamblu de competențe – de standardele care se construiesc pe baza lui.`,
      [
        "Profilul profesional este ansamblul competențelor necesare activității didactice.",
        "Profilul se adaptează etapelor carierei și nivelurilor de învățământ.",
        "Metodologia și standardele se aprobă prin ordin al ministrului și au aplicare din anul școlar 2025–2026."
      ],
      [
        Q("Ce reprezintă profilul profesional al cadrului didactic?", ["Lista sancțiunilor","Ansamblul competențelor necesare activității didactice","Doar vechimea în muncă","Numai fișa postului directorului"], 1, "Aceasta este definiția centrală din art. 166."),
        Q("La ce se adaptează profilul cadrului didactic?", ["Doar la vârsta directorului","Exclusiv la numărul de clase","La etapele carierei și nivelurile de învățământ","Numai la bugetul local"], 2, "Textul prevede adaptarea pe etape ale carierei și pe niveluri."),
        Q("Prin ce act se aprobă metodologia privind profilul profesional?", ["Hotărârea unei clase","Contract colectiv local","Decizia consiliului elevilor","Ordin al ministrului educației"], 3, "Metodologia și standardele se aprobă prin ordin al ministrului educației, publicat în Monitorul Oficial.")
      ],
      "Art. 166 — Definește profilul profesional și relația sa cu standardele profesionale și de calitate; forma actuală a articolului rezultă din OUG nr. 95/2024, iar reperele se aplică din anul școlar 2025–2026."
    ),
    L(
      167,
      "Rolurile personalului didactic",
      "7 min",
      "planificator · facilitator · conector · dezvoltator · suport · promotor al inovației",
      `Articolul 167 enumeră șase roluri ale personalului didactic în cariera profesională. Primul este planificator și organizator al procesului de predare–învățare–evaluare. Al doilea este facilitator al învățării.

Al treilea rol este de conector între beneficiarii direcți și indirecți ai procesului educațional. Al patrulea este dezvoltator de resurse educaționale și instrumente de evaluare curentă.

Al cincilea rol este de suport pentru elevi, prin consiliere și mentorat. Al șaselea este promotor al inovației în educație.

Pentru îndeplinirea acestor roluri, personalul didactic parcurge etapele de formare inițială și programe de formare continuă. Lista arată că profesorul nu este doar transmițător de conținut, ci proiectează, facilitează, conectează, creează, sprijină și inovează.

Mnemonic: P–F–C–D–S–I: planificator, facilitator, conector, dezvoltator, suport, inovație.`,
      [
        "Art. 167 enumeră șase roluri profesionale.",
        "Consilierea și mentoratul apar în rolul de suport pentru elevi.",
        "Rolurile sunt susținute prin formare inițială și continuă."
      ],
      [
        Q("Care este un rol expres al personalului didactic?", ["Facilitator al învățării","Agent fiscal","Operator de transport","Judecător"], 0, "Facilitatorul învățării este unul dintre cele șase roluri."),
        Q("Prin ce activități oferă personalul didactic suport elevilor?", ["Autorizare de construcții","Consiliere și mentorat","Control vamal","Audit bancar"], 1, "Art. 167 alin. (1) lit. e) indică sprijinul prin consiliere și mentorat."),
        Q("Ce forme de pregătire susțin îndeplinirea rolurilor?", ["Exclusiv studiul individual necertificat","Doar experiența administrativă","Formarea inițială și formarea continuă","Numai autoevaluarea anuală"], 2, "Alineatul (2) leagă rolurile de formarea inițială și continuă.")
      ],
      "Art. 167 — Stabilește șase roluri: planificator și organizator, facilitator, conector, dezvoltator de resurse și evaluări, suport pentru elevi și promotor al inovației."
    ),
    L(
      168,
      "Aptitudinea, interdicțiile și incompatibilitățile",
      "13 min",
      "certificat medical · examen complet · comisie 3–5 membri · interdicții · condamnări · incompatibilități",
      `Articolul 168 stabilește condiții de integritate și aptitudine pentru personalul din învățământ. Încadrarea și menținerea într-o funcție didactică, didactică auxiliară, administrativă, de conducere, îndrumare sau control sunt condiționate de un certificat medical eliberat de medicul de medicina muncii.

În cazul unei posibile inaptitudini psihocomportamentale, angajatorul poate solicita un nou examen medical complet. Este necesară sesizarea unui factor implicat în procesul educațional și hotărârea consiliului de administrație. Situația este analizată de o comisie județeană de 3–5 membri, medici specialiști și psihologi. Hotărârea consiliului de administrație nu este publică până la obținerea rezultatului.

Articolul interzice ocuparea funcțiilor de către persoane care desfășoară anumite activități: activități comerciale în incinta unității sau în zona limitrofă de minimum 300 de metri; comerț cu materiale obscene ori pornografice, droguri sau substanțe psihotrope; activități publice cu componentă lubrică ori exhibare obscenă.

Nu poate ocupa sau exercita funcții în sistem persoana condamnată definitiv, pentru o infracțiune săvârșită cu intenție din lista legală – contra vieții, integrității, libertății, rele tratamente aplicate minorului, hărțuire, trafic de minori, proxenetism, infracțiuni sexuale, corupție, fals sau furt calificat – dacă nu a intervenit reabilitarea.

Funcțiile de conducere, îndrumare și control sunt incompatibile cu conducerea unui partid politic la nivel local, județean sau național, cu funcțiile de primar, viceprimar, președinte sau vicepreședinte de consiliu județean și cu orice funcție de conducere sindicală.

Reține traseul procedural pentru inaptitudine: sesizare – hotărâre CA – examen – comisie de 3–5 specialiști – confidențialitate până la rezultat.`,
      [
        "Certificatul medical de medicina muncii condiționează încadrarea și menținerea în funcție.",
        "Comisia pentru inaptitudinea psihocomportamentală are 3–5 medici specialiști și psihologi.",
        "Conducerea școlară este incompatibilă cu anumite funcții politice, executive locale și sindicale de conducere."
      ],
      [
        Q("Cine eliberează certificatul medical pentru aptitudinea de muncă?", ["Consiliul elevilor","Primarul","Secretarul unității","Medicul specializat în medicina muncii"], 3, "Art. 168 alin. (1) indică medicul de medicina muncii."),
        Q("Câți membri are comisia care analizează inaptitudinea psihocomportamentală?", ["3–5 membri","Un singur membru","Exact 10 membri","Minimum 20 de membri"], 0, "Comisia județeană este formată din 3–5 medici specialiști și psihologi."),
        Q("Cu ce este incompatibilă o funcție de conducere din învățământ?", ["Cu mentoratul","Cu orice funcție de conducere într-o organizație sindicală","Cu participarea la formare continuă","Cu activitatea didactică"], 1, "Art. 168 alin. (9) lit. c) prevede incompatibilitatea cu orice funcție de conducere sindicală.")
      ],
      "Art. 168 — Reglementează aptitudinea medicală și psihocomportamentală, procedura noului examen, activitățile interzise, condamnările incompatibile și incompatibilitățile funcțiilor de conducere, îndrumare și control."
    ),
    L(
      169,
      "Etica profesională și pregătirea suplimentară",
      "8 min",
      "valori și principii · interesul superior · model de integritate · meditații interzise · registrul declarațiilor",
      `Articolul 169 așază activitatea didactică sub valorile și principiile legii și sub interesul superior al beneficiarului primar. Personalul didactic trebuie să fie un model de etică și integritate pentru elevi și societate.

Este interzisă orice activitate care aduce atingere valorilor și principiilor sistemului național de învățământ. O interdicție concretă privește pregătirea suplimentară contracost: cadrul didactic nu poate pregăti contra cost elevii de la clasa sau clasele la care este încadrat în anul școlar în curs.

Interdicția este însoțită de o obligație pozitivă de diligență. Profesorul trebuie să depună eforturi pentru ca fiecare elev să atingă competențele necesare, prin activitatea la clasă și prin programe de învățare remedială.

Pentru aplicarea interdicției, la nivelul unității se constituie Registrul declarațiilor de interese. Modelul registrului și procedura de declarare se aprobă prin ordin al ministrului educației.

Cheia pentru concurs: interdicția nu privește în mod generic orice pregătire suplimentară, ci pregătirea contracost a propriilor elevi din clasele la care cadrul didactic este încadrat în anul școlar curent.`,
      [
        "Personalul didactic urmărește interesul superior al beneficiarului primar.",
        "Pregătirea suplimentară contracost este interzisă pentru propriii elevi de la clasele curente.",
        "Unitatea constituie Registrul declarațiilor de interese."
      ],
      [
        Q("Pentru ce elevi este interzisă pregătirea suplimentară contracost?", ["Numai pentru absolvenți","Exclusiv pentru studenți","Pentru elevii claselor la care cadrul didactic este încadrat în anul școlar în curs","Pentru orice persoană adultă"], 2, "Interdicția este delimitată la elevii proprii din clasele curente."),
        Q("Ce obligație are cadrul didactic pentru atingerea competențelor de către fiecare elev?", ["Obligație de rezultat garantat la orice examen","Nicio obligație","Doar obligație financiară","Obligație de diligență"], 3, "Art. 169 alin. (3) consacră obligația de diligență."),
        Q("Ce registru se constituie la nivelul unității?", ["Registrul declarațiilor de interese","Registrul comerțului","Registrul agricol","Registrul electoral"], 0, "Registrul declarațiilor de interese este instrumentul prevăzut de alin. (4).")
      ],
      "Art. 169 — Impune respectarea valorilor, a interesului superior și a integrității; interzice pregătirea contracost a propriilor elevi și instituie Registrul declarațiilor de interese."
    ),
    L(
      170,
      "Organizarea formării inițiale și a practicii",
      "12 min",
      "minister · calificări și rute · acorduri-cadru · școli de aplicație · 10 zile · contracte 1–4 ani · parteneriate",
      `Articolul 170 reglementează arhitectura formării inițiale. Ministerul Educației, ca principal finanțator și pe baza analizei nevoilor, stabilește calificările și rutele de formare inițială, profilul și standardele profesionale, reperele curriculare și cifra de școlarizare corespunzătoare.

Persoanele care aleg profesia didactică trebuie să absolve programe de formare inițială pentru cariera didactică, conform Legii învățământului superior și Legii nr. 198/2023.

Pregătirea practică din programele universitare se desfășoară în baza acordurilor-cadru dintre instituțiile de învățământ superior și unitățile de aplicație. Avizul structurii județene este necesar numai dacă practica are loc într-o unitate care nu are deja statut de școală de aplicație. În această situație, structura județeană este informată în termen de 10 zile.

Pentru filiera vocațională pedagogică, acordurile-cadru se încheie între unitatea de învățământ pedagogic, unitatea de aplicație și structura județeană. Pe baza acordurilor se încheie contracte de colaborare cu durata de 1–4 ani școlari.

Unitățile și instituțiile care asigură formarea inițială pot încheia independent parteneriate cu instituții publice sau private și cu ONG-uri pentru activități practice de consiliere, logopedie, activități extracurriculare și alte servicii.

Practica trebuie organizată în unități de aplicație cu particularități diferite, inclusiv în școli cu mulți elevi aflați în risc de excluziune. Repartizarea se face potrivit specializării, pe criterii și metodologii aprobate prin ordin al ministrului. Formarea maiștrilor-instructori și a antrenorilor se realizează prin unități de învățământ terțiar nonuniversitar.

Pentru memorare: ministerul stabilește direcția – acordul-cadru organizează practica – contractul durează 1–4 ani – practica trebuie să fie diversă și relevantă.`,
      [
        "Ministerul stabilește calificările, rutele, standardele, reperele curriculare și cifra de școlarizare.",
        "Avizul structurii județene este cerut numai pentru o unitate fără statut de școală de aplicație; informarea se face în 10 zile.",
        "Contractele de colaborare pentru practica pedagogică au durata de 1–4 ani școlari."
      ],
      [
        Q("Când este necesar avizul structurii județene pentru practica universitară?", ["Niciodată","Când unitatea nu are deja statut de școală de aplicație","În toate cazurile, fără excepție","Numai pentru activități sportive"], 1, "Art. 170 alin. (3) limitează avizul la unitatea fără statut de școală de aplicație."),
        Q("Care este durata contractelor de colaborare pentru practica pedagogică?", ["O singură zi","Perioadă nelimitată obligatoriu","1–4 ani școlari","Exact 10 ani"], 2, "Alineatul (5) stabilește durata de 1–4 ani școlari."),
        Q("Unde se realizează formarea maiștrilor-instructori și a antrenorilor?", ["Exclusiv în școala primară","Numai în primării","Doar în universități din străinătate","În unități de învățământ terțiar nonuniversitar"], 3, "Aceasta este regula de la alin. (8).")
      ],
      "Art. 170 — Stabilește rolul ministerului în formarea inițială, acordurile și contractele pentru practica pedagogică, parteneriatele și diversitatea unităților de aplicație."
    ),
    L(
      171,
      "Practica pedagogică sau stagiatura didactică",
      "7 min",
      "masterat didactic · unități de aplicație · profesor mentor · tutore de practică · ordin al ministrului · tranziție",
      `Articolul 171 definește practica pedagogică, numită și stagiatură didactică, drept parte a masteratului didactic. Ea constă în desfășurarea de activități didactice în unități de învățământ de aplicație și în alte categorii de instituții și organizații.

Stagiarul lucrează sub îndrumarea unui profesor mentor, în colaborare cu tutorele de practică din instituția de învățământ superior. Avem, așadar, două repere de sprijin: mentorul din mediul de practică și tutorele universitar.

Alineatul al doilea, modificat prin OUG nr. 95/2024, stabilește că practica se organizează potrivit ordinului ministrului educației, publicat în Monitorul Oficial.

Pentru concurs este esențial contextul tranzitoriu. Articolul descrie noua arhitectură a carierei, dar art. 248 alin. (6) menține definitivatul, concursul național și gradele didactice în condițiile Legii nr. 1/2011 până în anul școlar 2027–2028 inclusiv. Nu confundăm regula proiectată de Titlul III cu procedura tranzitorie încă aplicabilă.`,
      [
        "Practica pedagogică este denumită și stagiatură didactică.",
        "Îndrumarea este asigurată de profesorul mentor, în colaborare cu tutorele universitar.",
        "Organizarea se face prin ordin al ministrului, iar actualul regim tranzitoriu continuă până în 2027–2028 inclusiv."
      ],
      [
        Q("Cum mai este numită practica pedagogică?", ["Stagiatură didactică","Inspecție fiscală","Mobilitate externă","Activitate administrativă"], 0, "Art. 171 alin. (1) folosește ambele denumiri."),
        Q("Cine îndrumă activitatea în unitatea de aplicație?", ["Reprezentantul operatorului de transport","Profesorul mentor","Primarul","Contabilul-șef"], 1, "Profesorul mentor îndrumă practica, în colaborare cu tutorele universitar."),
        Q("Până când continuă vechiul regim al definitivatului potrivit art. 248 alin. (6)?", ["Până în 2035","A încetat imediat la publicarea legii","Până în anul școlar 2027–2028 inclusiv","Numai până la sfârșitul anului 2023"], 2, "Regimul Legii nr. 1/2011 continuă până în anul școlar 2027–2028 inclusiv.")
      ],
      "Art. 171 — Definește practica pedagogică/stagiatura, mentorul și tutorele; alin. (2) este în forma OUG nr. 95/2024. Aplicarea se citește împreună cu tranziția de la art. 248 alin. (6)."
    ),
    L(
      172,
      "Mentoratul și Corpul de mentorat și licențiere",
      "9 min",
      "sprijin pe toată practica · gradul II · minimum 5 ani · CNFDCD · selecție prin metodologie · prorogare",
      `Articolul 172 aplică sistemul de mentorat didactic pe toată durata practicii pedagogice. Scopul este sprijinirea și îndrumarea viitorului profesor, pentru dezvoltare profesională și integrare în unitatea de învățământ.

Legea înființează Corpul de mentorat și licențiere în cariera didactică. Membrii sunt cadre didactice de predare care au cel puțin gradul didactic II și minimum 5 ani de experiență didactică. Cele două condiții sunt cumulative.

Corpul funcționează pe lângă Centrul Național pentru Formare și Dezvoltare în Cariera Didactică – CNFDCD. Procedura și criteriile de selecție se stabilesc prin metodologie aprobată prin ordin al ministrului educației.

În forma aplicabilă la 12 august 2026 trebuie reținut și cadrul tranzitoriu: funcționarea noii structuri CNFDCD, prevăzută la art. 119, este prorogată până la începutul anului școlar 2027–2028. Prin urmare, articolul descrie mecanismul noii cariere, dar implementarea sa instituțională este legată de această tranziție.

Formula de memorare: pe toată practica – mentorat; corp profesional – gradul II plus 5 ani; selecție – ordin al ministrului; structură de sprijin – CNFDCD, încă prorogată.`,
      [
        "Mentoratul se aplică pe toată durata practicii pedagogice.",
        "Membrii Corpului au minimum gradul II și cel puțin 5 ani de experiență.",
        "Funcționarea CNFDCD este prorogată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Ce grad didactic minim trebuie să aibă un membru al Corpului?", ["Definitivatul fără altă condiție","Gradul I obligatoriu","Niciun grad","Gradul didactic II"], 3, "Legea cere cel puțin gradul didactic II."),
        Q("Care este experiența didactică minimă cerută?", ["5 ani","6 luni","20 de ani","Nu există cerință"], 0, "Art. 172 alin. (2) cere cel puțin 5 ani de experiență."),
        Q("Până când este prorogată funcționarea noii structuri CNFDCD?", ["Nu este prorogată","Până la începutul anului școlar 2027–2028","Până la 1 ianuarie 2024","Până în anul 2035"], 1, "Prorogarea art. 119 privește începutul anului școlar 2027–2028.")
      ],
      "Art. 172 — Instituie mentoratul pe toată practica și Corpul de mentorat și licențiere, cu minimum gradul II și 5 ani experiență; funcționarea CNFDCD este afectată de prorogarea art. 119."
    ),
    L(
      173,
      "Coordonarea practicii pedagogice",
      "4 min",
      "instituții de învățământ superior · colaborare · Corpul de mentorat · metodologie · ordin",
      `Articolul 173 este scurt și stabilește cine coordonează activitățile din practica pedagogică. Responsabilitatea principală revine instituțiilor de învățământ superior.

Coordonarea nu se face izolat, ci în colaborare cu Corpul de mentorat și licențiere în cariera didactică. Baza de organizare este metodologia aprobată prin ordin al ministrului educației.

Articolul trebuie citit împreună cu art. 172: instituția de învățământ superior coordonează, corpul profesional colaborează, iar metodologia ministerială stabilește cadrul. În perioada tranzitorie, funcționarea efectivă a corpului este legată de operaționalizarea CNFDCD.`,
      [
        "Instituțiile de învățământ superior coordonează practica.",
        "Corpul de mentorat și licențiere are rol de colaborare.",
        "Cadrul procedural este stabilit prin metodologie aprobată de ministrul educației."
      ],
      [
        Q("Cine coordonează activitățile practicii pedagogice?", ["Operatorul de transport","Asociația de părinți","Instituțiile de învățământ superior","Consiliul local exclusiv"], 2, "Art. 173 atribuie coordonarea instituțiilor de învățământ superior."),
        Q("Cu cine colaborează instituțiile de învățământ superior?", ["Numai cu trezoreria","Cu orice partid politic","Exclusiv cu poliția locală","Cu Corpul de mentorat și licențiere în cariera didactică"], 3, "Colaborarea cu Corpul de mentorat este prevăzută expres."),
        Q("Cum se aprobă metodologia aplicabilă?", ["Prin ordin al ministrului educației","Prin referendum local","Prin decizia unui singur mentor","Prin contract comercial"], 0, "Metodologia este aprobată prin ordin al ministrului educației.")
      ],
      "Art. 173 — Practica pedagogică este coordonată de instituțiile de învățământ superior, în colaborare cu Corpul de mentorat și licențiere, potrivit metodologiei aprobate prin ordin."
    ),
    L(
      174,
      "Examenul național de licențiere în cariera didactică",
      "11 min",
      "portofoliu · probă scrisă · certificat · sesiune nouă · debutant suplinitor · condiții de studii · tranziție",
      `Articolul 174 reglementează examenul național de licențiere în cariera didactică. Examenul are obligatoriu două componente: evaluarea portofoliului personal și o probă scrisă. Organizatorul este Ministerul Educației, pe baza unei metodologii aprobate prin ordin.

Promovarea este atestată prin certificat de licențiere. Persoana care nu promovează se poate prezenta la o nouă sesiune. Până la promovare, ea poate fi angajată în sistem numai pe perioadă determinată, cu statut de cadru didactic debutant suplinitor.

Înscrierea la examen este condiționată de îndeplinirea studiilor minime pentru funcția didactică, prevăzute la art. 176. Pentru absolvenții liceului pedagogic, specializarea «Pedagogia învățământului primar», legea prevede o excepție: înscrierea este condiționată de absolvirea cu diplomă de licență a aceleiași specializări.

Pentru concurs, diferențiați textul noului mecanism de situația aplicabilă în prezent. Conform art. 248 alin. (6), examenul de definitivat, concursul național de ocupare a posturilor și gradele didactice II și I se organizează după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv. Așadar, la 12 august 2026, licențierea de la art. 174 reprezintă noul regim legal, dar definitivatul continuă în perioada tranzitorie.

Schema de memorare: licențiere egal portofoliu plus scris; promovare egal certificat; nepromovare egal sesiune nouă și angajare doar determinată; prezent egal regim tranzitoriu al definitivatului.`,
      [
        "Licențierea conține obligatoriu evaluarea portofoliului și o probă scrisă.",
        "Nepromovarea permite o nouă sesiune, dar angajarea este doar determinată, ca debutant suplinitor.",
        "Până în 2027–2028 inclusiv continuă definitivatul organizat după Legea nr. 1/2011."
      ],
      [
        Q("Care sunt componentele obligatorii ale examenului de licențiere?", ["Portofoliu fără nicio probă","Evaluarea portofoliului personal și o probă scrisă","Doar interviu","Numai inspecție financiară"], 1, "Art. 174 alin. (1) cere ambele componente."),
        Q("Cum poate fi angajată persoana care nu promovează licențierea?", ["Direct ca director","Nu poate lucra niciodată în educație","Pe perioadă determinată, ca debutant suplinitor","Automat pe perioadă nedeterminată"], 2, "Nepromovarea limitează angajarea la perioadă determinată și statut de debutant suplinitor."),
        Q("Ce examen continuă să se organizeze în perioada tranzitorie până în 2027–2028 inclusiv?", ["Exclusiv licențierea de la art. 174","Numai bacalaureatul","Niciun examen profesional","Examenul de definitivat"], 3, "Art. 248 alin. (6) menține definitivatul după regulile Legii nr. 1/2011.")
      ],
      "Art. 174 — Reglementează noul examen de licențiere, format din portofoliu și probă scrisă; regimul se corelează cu art. 248 alin. (6), care menține definitivatul până în 2027–2028 inclusiv."
    ),
    L(
      175,
      "Echivalarea definitivatului cu licențierea",
      "6 min",
      "drept dobândit · efectul legii · cadru didactic licențiat · egalitate de drepturi · tranziție",
      `Articolul 175 protejează drepturile dobândite. Personalul didactic de predare care susținuse definitivatul până la intrarea în vigoare a Legii nr. 198/2023 își păstrează dreptul dobândit.

Echivalarea se produce prin efectul legii: definitivatul deja obținut este echivalent cu statutul de cadru didactic licențiat în cariera didactică. Nu este necesară repetarea unui examen pentru recunoașterea acestui statut.

Persoanele aflate în această situație beneficiază de aceleași drepturi ca personalul care va dobândi licențierea după intrarea în vigoare a legii. Principiul este continuitatea carierei și egalitatea drepturilor.

Corelarea cu art. 248 alin. (6) este importantă: vechiul definitivat continuă să fie organizat tranzitoriu până în anul școlar 2027–2028 inclusiv, iar art. 249 conține reguli suplimentare pentru titularizare și drepturile dobândite. Pentru întrebarea strictă din art. 175, însă, formula-cheie este «drept dobândit – echivalent prin efectul legii – aceleași drepturi».`,
      [
        "Definitivatul obținut înainte de intrarea în vigoare a legii este un drept păstrat.",
        "Echivalarea cu licențierea se produce prin efectul legii.",
        "Personalul echivalat beneficiază de aceleași drepturi ca personalul licențiat potrivit noului regim."
      ],
      [
        Q("Ce se întâmplă cu definitivatul susținut înainte de intrarea în vigoare a Legii nr. 198/2023?", ["Se păstrează ca drept dobândit","Se anulează automat","Devine valabil numai un an","Trebuie repetat imediat"], 0, "Art. 175 protejează dreptul dobândit."),
        Q("Cum se realizează echivalarea cu statutul de cadru didactic licențiat?", ["Prin plata unei taxe","Prin efectul legii","Numai printr-un nou concurs","Prin hotărârea consiliului local"], 1, "Textul spune expres că echivalarea operează prin efectul legii."),
        Q("De ce drepturi beneficiază personalul cu definitivat echivalat?", ["Numai de dreptul la concediu","De niciun drept profesional","De aceleași drepturi ca personalul licențiat după intrarea în vigoare a legii","De drepturi reduse la jumătate"], 2, "Alineatul (2) consacră egalitatea drepturilor.")
      ],
      "Art. 175 — Definitivatul obținut anterior intrării în vigoare a Legii nr. 198/2023 este păstrat și echivalat, prin efectul legii, cu licențierea în cariera didactică, cu aceleași drepturi."
    )
  );
})();
