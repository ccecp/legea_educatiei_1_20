"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–84: verificare 12.08.2026";
  DATA.modules.push({
    id: 7,
    title: "Educația incluzivă de calitate",
    articles: "67–84",
    chapter: "Capitolul V",
    startArticle: 67,
    endArticle: 84
  });

  DATA.lessons.push(
    L(
      67,
      "Dreptul la educație incluzivă",
      "8 min",
      "incluziune · risc de excluziune · CNEI · colaborare · protecția copilului",
      "Articolul 67 garantează tuturor beneficiarilor primari dreptul la o educație incluzivă de calitate. Incluziunea nu înseamnă doar prezența copilului în școală, ci asigurarea condițiilor prin care fiecare copil își poate atinge finalitățile educaționale, își poate dezvolta abilitățile cognitive și comportamentele adaptative, poate construi relații afective pozitive și poate avea o stare de bine. Accentul cade pe nevoile și particularitățile individuale.\n\nEducația incluzivă îi privește pe toți copiii, cu o atenție specială pentru cei expuși marginalizării, excluderii ori rezultatelor școlare scăzute. Legea enumeră numeroase situații de risc: dezavantaj social, economic sau cultural, apartenența la o minoritate, remigrația, refugiul, mediile marginalizate, cerințele educaționale speciale, dizabilitatea, separarea de părinți, sarcina sau maternitatea minoră, apartenența la comunități rome vulnerabile, privarea de libertate, violența, abuzul, neglijarea, exploatarea ori consumul de droguri.\n\nArticolul prevede Centrul Național pentru Educație Incluzivă, CNEI, care sprijină politicile publice, coordonarea metodologică a serviciilor, evaluarea și orientarea elevilor cu CES, formarea personalului și cercetarea. Atenție la aplicarea în timp: prevederile privind înființarea CNEI, organizarea sa, posibilitatea de finanțare și camerele-resursă, adică alin. (4), (6)–(8), sunt prorogate până la începutul anului școlar 2027–2028.\n\nȘcoala trebuie să colaboreze cu instituțiile sociale, medicale, de ordine publică și cu furnizorii acreditați. Orice suspiciune de rele tratamente aplicate unui minor trebuie comunicată autorităților abilitate. Personalul păstrează confidențialitatea informațiilor economice, sociale, familiale, juridice și medicale, exceptând situațiile în care informațiile sunt necesare pentru o decizie sau o intervenție în interesul superior al copilului.\n\nFormula de memorare este: incluziune pentru toți, atenție sporită riscului de excluziune, colaborare interinstituțională, raportarea relelor tratamente și confidențialitate.",
      [
        "Educația incluzivă de calitate este garantată tuturor beneficiarilor primari.",
        "Suspiciunile de rele tratamente aplicate minorilor se comunică autorităților abilitate.",
        "Aplicarea art. 67 alin. (4), (6)–(8) este prorogată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Cui garantează statul dreptul la o educație incluzivă de calitate?", ["Numai copiilor cu dizabilități", "Tuturor beneficiarilor primari ai educației", "Numai elevilor din mediul rural", "Exclusiv elevilor din învățământul special"], 1, "Art. 67 garantează educația incluzivă tuturor beneficiarilor primari."),
        Q("Ce trebuie să facă școala atunci când există suspiciuni de rele tratamente aplicate unui minor?", ["Să aștepte confirmarea familiei", "Să comunice autorităților abilitate", "Să publice situația", "Să transfere automat elevul"], 1, "Unitatea de învățământ are obligația de a comunica suspiciunile autorităților abilitate."),
        Q("Până când sunt prorogate prevederile art. 67 alin. (4), (6)–(8)?", ["Până la începutul anului școlar 2026–2027", "Până la 31 decembrie 2026", "Până la începutul anului școlar 2027–2028", "Nu sunt prorogate"], 2, "Legea nr. 141/2025 a prorogat aceste prevederi până la începutul anului școlar 2027–2028.")
      ],
      "Art. 67 — Statul garantează educația incluzivă de calitate tuturor beneficiarilor primari, cu atenție specială pentru copiii expuși excluziunii. Sunt reglementate atribuțiile CNEI, standardele pentru integrarea copiilor cu CES, colaborarea interinstituțională, raportarea suspiciunilor de rele tratamente și confidențialitatea datelor. Aplicarea alin. (4), (6)–(8) este prorogată până la începutul anului școlar 2027–2028."
    ),
    L(
      68,
      "Educația specială și special integrată",
      "7 min",
      "CES · învățământ de masă · învățământ special · TSI · evaluare standardizată",
      "Articolul 68 definește educația specială ca formă flexibilă de educație pentru copiii cu cerințe educaționale speciale care au nevoie de resurse și sprijin specializat. Nevoia poate rezulta din dizabilități mintale, psihice, intelectuale, senzoriale, fizice, motorii sau neuromotorii, din tulburări emoționale ori de neurodezvoltare, inadaptare socială, boli, tulburări sau afecțiuni cronice ori genetice.\n\nEducația specială se realizează prin învățământ special și special integrat. Ea îi cuprinde pe elevii cu CES integrați în învățământul de masă și care urmează curriculumul de masă, pe cei din grupe sau clase speciale organizate în școli de masă, pe elevii din învățământul special, pe cei spitalizați mai mult de patru săptămâni pentru care se organizează Școala din spital și pe copiii nedeplasabili pentru care se organizează școlarizare la domiciliu pe perioadă determinată.\n\nEducația specială se asigură de la nivelul antepreșcolar până la nivelul postliceal inclusiv. Procesul se diferențiază prin adaptarea curriculumului, intervenții specifice și activități complementare. Metodologia-cadru privind serviciile, stabilirea nivelului de sprijin și implementarea planului individualizat de servicii se aprobă prin hotărâre a Guvernului.\n\nPentru tulburările specifice de învățare — dislexie, disgrafie, disortografie și discalculie — se folosesc metode psihopedagogice specifice. Evaluarea și diagnosticarea tulburărilor de neurodezvoltare includ teste standardizate pentru fiecare arie evaluată, potrivit unui protocol național aprobat prin ordin comun al miniștrilor educației și sănătății.\n\nÎnvățământul special și special integrat este parte a sistemului național, este gratuit și se organizează, de regulă, cu frecvență. Învățământul special integrat se desfășoară în școala de masă. Școlile de masă pot colabora cu facultăți de psihologie și licee pedagogice, astfel încât studenții și elevii aflați în practică să asiste elevii cu CES sau dizabilități.\n\nFormula de memorare este: educație flexibilă, de la antepreșcolar la postliceal, integrare în școala de masă, gratuitate și intervenție specializată.",
      [
        "Educația specială se asigură de la nivelul antepreșcolar până la nivelul postliceal inclusiv.",
        "Școala din spital se organizează pentru beneficiarii cu CES care necesită spitalizare mai mare de 4 săptămâni.",
        "Învățământul special și special integrat este gratuit."
      ],
      [
        Q("Între ce niveluri se asigură educația specială?", ["Numai primar–gimnazial", "De la antepreșcolar până la postliceal inclusiv", "Numai liceal", "Exclusiv preșcolar"], 1, "Art. 68 acoperă nivelurile de la antepreșcolar până la postliceal inclusiv."),
        Q("Pentru ce durată a spitalizării este menționată organizarea Școlii din spital în art. 68?", ["Mai mult de o săptămână", "Mai mult de două săptămâni", "Mai mult de patru săptămâni", "Numai peste un an"], 2, "Articolul indică o perioadă de spitalizare mai mare de patru săptămâni."),
        Q("Cum este învățământul special și special integrat din punctul de vedere al costurilor pentru beneficiar?", ["Cu taxă anuală", "Gratuit", "Gratuit numai la nivel primar", "Finanțat exclusiv de familie"], 1, "Legea stabilește expres caracterul gratuit.")
      ],
      "Art. 68 — Educația specială este forma flexibilă de educație destinată copiilor cu CES care au nevoie de resurse și sprijin specializat. Se realizează prin învățământ special și special integrat, de la antepreșcolar la postliceal, inclusiv prin Școala din spital și școlarizare la domiciliu. Este gratuită și include adaptări curriculare, servicii specializate și evaluări standardizate."
    ),
    L(
      69,
      "Cele patru niveluri de sprijin",
      "9 min",
      "intervenție timpurie · nivel I–IV · orientare · plan educațional personalizat · contestație",
      "Articolul 69 introduce sistemul de sprijin pentru educația specială. La nivel antepreșcolar se pot organiza grupe de intervenție timpurie pentru copiii cu CES. Acestea pot oferi terapii de recuperare și compensare, asistență socială, medicală și psihologică, consiliere psihopedagogică și alte servicii adaptate nevoilor copilului.\n\nÎn învățământul obligatoriu, începând cu grupa mică, sprijinul este organizat pe patru niveluri: nivelul I — bazal; nivelul II — suplimentar; nivelul III — intensiv; nivelul IV — special. La nivelul I, copilul urmează curriculumul de masă în sala de clasă, iar profesorul flexibilizează predarea și permite instrumente compensatorii, dispensări ori tehnologii asistive. Nivelurile II și III presupun intervenții suplimentare sau intensive, adaptări și sprijinul echipei multidisciplinare. Nivelul IV se adresează situațiilor în care obiectivele de dezvoltare și învățare nu pot fi atinse prin celelalte măsuri și implică activități și terapii în învățământul special.\n\nNivelul de sprijin se stabilește pe baza evaluării de specialitate, prin comisii județene. Până la operaționalizarea CNEI, inspectoratele școlare, prin CJRAE sau CMBRAE, nominalizează aceste comisii. Componența comisiei de orientare școlară și profesională se publică anual. Orientarea poate fi reevaluată ori de câte ori este necesar.\n\nPentru fiecare beneficiar identificat cu CES, echipa multidisciplinară constituită de CJRAE sau CMBRAE elaborează planul educațional personalizat. Acesta include servicii pentru familie, servicii psihologice, asistență psihopedagogică, sprijin în învățare, terapii specifice, kinetoterapie și facilitare. Planul face parte din portofoliul educațional al elevului.\n\nOrientarea abuzivă către învățământul special constituie abatere disciplinară. Elevii cu CES beneficiază de egalizarea șanselor atât în procesul de învățare, cât și la evaluarea națională, bacalaureat și examenele de certificare. Părinții sunt consultați la orientare sau reorientare și pot contesta decizia la structura județeană în termen de 45 de zile de la comunicare.\n\nFormula de memorare este: bazal, suplimentar, intensiv, special; evaluare multidisciplinară; plan personalizat; contestație în 45 de zile.",
      [
        "Sistemul cuprinde 4 niveluri: bazal, suplimentar, intensiv și special.",
        "Planul educațional personalizat face parte din portofoliul educațional al elevului.",
        "Decizia de orientare sau reorientare poate fi contestată în 45 de zile de la comunicare."
      ],
      [
        Q("Care este ordinea celor patru niveluri de sprijin?", ["Bazal, suplimentar, intensiv, special", "General, profesional, dual, special", "Primar, gimnazial, liceal, postliceal", "Preventiv, curativ, remedial, final"], 0, "Art. 69 stabilește nivelurile I bazal, II suplimentar, III intensiv și IV special."),
        Q("Unde este inclus planul educațional personalizat?", ["În dosarul de personal al profesorului", "În portofoliul educațional al elevului", "În registrul agricol", "Numai în arhiva CJRAE"], 1, "Planul educațional personalizat face parte din portofoliul educațional al elevului."),
        Q("În ce termen pot părinții contesta decizia de orientare sau reorientare?", ["5 zile", "15 zile", "30 de zile", "45 de zile"], 3, "Termenul prevăzut de lege este de 45 de zile de la comunicarea deciziei.")
      ],
      "Art. 69 — Sprijinul special se organizează pe patru niveluri: bazal, suplimentar, intensiv și special. Nivelul se stabilește prin evaluare de specialitate, iar pentru elevul cu CES se întocmește un plan educațional personalizat, parte a portofoliului său. Orientarea abuzivă este abatere disciplinară, iar decizia poate fi contestată în 45 de zile."
    ),
    L(
      70,
      "Organizarea și gratuitatea sprijinului",
      "7 min",
      "proximitate · CJRAE/CMBRAE · achiziție servicii · gratuitate · sprijin social",
      "Articolul 70 stabilește locul și modul în care se asigură serviciile pentru elevii cu CES. Regula este organizarea educației speciale în unitatea de învățământ aflată în proximitatea domiciliului. Dacă școala apropiată nu poate asigura nivelul de sprijin necesar, elevului i se atribuie un loc la cea mai apropiată unitate care poate oferi acel sprijin.\n\nServiciile sunt asigurate de specialiștii CJRAE sau CMBRAE și de specialiștii unităților de învățământ special, care au rol de centre-resursă. Dacă nu există personalul necesar, directorul, cu acordul consiliului de administrație, poate achiziționa serviciile necesare îndeplinirii obligațiilor legale, iar costurile se acoperă din finanțarea de bază.\n\nO regulă esențială este gratuitatea: toate activitățile și serviciile de educație specială sunt gratuite, indiferent de nivelul de sprijin.\n\nCopiii și elevii cu CES, indiferent dacă sunt școlarizați în unități de masă sau speciale, de stat ori particulare și inclusiv într-un alt județ decât cel de domiciliu, beneficiază pe durata anului școlar de forme de sprijin. Legea prevede vouchere educaționale în cuantum fix pentru servicii, intervenții psihopedagogice și materiale-suport, precum și asistență socială completă: hrană, rechizite, cazarmament, îmbrăcăminte, încălțăminte și găzduire gratuită în internatele sistemului de protecție a copilului.\n\nAtenție la aplicarea în timp: acordarea voucherelor prevăzute la art. 70 alin. (5) lit. a) este suspendată până la începutul anului școlar 2027–2028. Unitățile care școlarizează elevi cu CES pot primi și sprijinul instituțiilor de protecție socială, al organismelor private autorizate și al persoanelor fizice ori juridice.\n\nFormula de memorare este: proximitate, servicii specializate, posibilitatea achiziției cu acordul CA, gratuitate și sprijin social.",
      [
        "Educația specială se organizează, de regulă, în școala din proximitatea domiciliului.",
        "Directorul poate achiziționa servicii în lipsa personalului, cu acordul consiliului de administrație.",
        "Toate activitățile și serviciile de educație specială sunt gratuite."
      ],
      [
        Q("Unde se organizează, de regulă, educația specială?", ["Numai în capitala județului", "În unitatea din proximitatea domiciliului elevului", "Exclusiv la domiciliu", "Numai în școli particulare"], 1, "Regula este școlarizarea în proximitatea domiciliului."),
        Q("Cine trebuie să își dea acordul pentru achiziționarea serviciilor necesare în lipsa personalului?", ["Consiliul de administrație", "Consiliul elevilor", "Biblioteca județeană", "Operatorul de transport"], 0, "Directorul poate achiziționa serviciile cu acordul consiliului de administrație."),
        Q("Cum sunt activitățile și serviciile de educație specială?", ["Gratuite numai la nivelul I", "Cu taxă în școala de masă", "Gratuite indiferent de nivelul de sprijin", "Plătite integral de familie"], 2, "Art. 70 stabilește gratuitatea tuturor activităților și serviciilor, indiferent de nivel.")
      ],
      "Art. 70 — Educația specială se organizează, de regulă, în proximitatea domiciliului. Serviciile sunt asigurate de CJRAE/CMBRAE și unitățile speciale; în lipsa personalului, directorul le poate achiziționa cu acordul CA. Toate serviciile sunt gratuite. Aplicarea voucherelor de la alin. (5) lit. a) este suspendată până la începutul anului școlar 2027–2028."
    ),
    L(
      71,
      "Durata școlarizării și calificarea elevilor cu CES",
      "6 min",
      "prelungire · adaptare · finanțare · calificări · ateliere protejate",
      "Articolul 71 reglementează durata, resursele curriculare și calificarea profesională a elevilor cu CES. Prin excepție de la durata obișnuită a școlarizării, aceasta poate fi prelungită cu până la trei ani. Decizia se raportează la nevoile individuale și la tipul și nivelul de severitate a dizabilității și a cerințelor educaționale speciale, în condițiile metodologiei aprobate prin ordin ministerial.\n\nEducația specială dispune de planuri de învățământ, programe școlare, programe de asistență psihopedagogică, manuale, metodologii alternative și metode de evaluare adaptate. Pentru elevii din școlile de masă care beneficiază de nivelurile de sprijin I și II și, după caz, III, finanțarea de bază se calculează prin aplicarea unui coeficient de multiplicare la costul standard per elev.\n\nElevii cu CES de la toate cele patru niveluri pot dobândi calificări profesionale corespunzătoare tipului și gradului dizabilității, în unități speciale sau de masă. Liceele speciale, inclusiv cele tehnologice speciale, pot oferi calificări de nivel 3 sau 4 din Cadrul național al calificărilor și acces direct pe piața muncii, pe baza probelor profesionale ori a examenului de certificare.\n\nPentru obținerea unei calificări și integrarea în viața activă, Ministerul Educației și Ministerul Muncii organizează ateliere protejate. Acestea pot funcționa și prin furnizori acreditați de servicii sociale, întreprinderi sociale sau în unitățile de învățământ special. Autoritățile creează cadrul pentru accesul și participarea beneficiarilor cu CES pe piața muncii și în învățământul superior.\n\nFormula de memorare este: maximum trei ani prelungire, adaptări curriculare și de evaluare, calificări 3 sau 4 și ateliere protejate.",
      [
        "Durata școlarizării elevilor cu CES poate fi prelungită cu până la 3 ani.",
        "Liceele speciale pot oferi calificări de nivel 3 sau 4.",
        "Atelierele protejate sprijină calificarea și integrarea în viața activă."
      ],
      [
        Q("Cu cât poate fi prelungită durata școlarizării elevilor cu CES?", ["Cu maximum un an", "Cu până la 2 ani", "Cu până la 3 ani", "Cu minimum 5 ani"], 2, "Art. 71 permite o prelungire de până la trei ani."),
        Q("Ce niveluri de calificare pot oferi liceele speciale?", ["Nivelurile 1 și 2", "Nivelurile 3 sau 4", "Numai nivelul 5", "Exclusiv nivelul 8"], 1, "Liceele speciale pot oferi calificări de nivel 3 sau 4."),
        Q("Care este rolul atelierelor protejate?", ["Doar activități recreative", "Obținerea unei calificări și integrarea în viața activă", "Înlocuirea evaluărilor naționale", "Organizarea transportului"], 1, "Atelierele protejate urmăresc calificarea și integrarea socioprofesională.")
      ],
      "Art. 71 — Școlarizarea elevilor cu CES poate fi prelungită cu până la trei ani. Procesul dispune de curriculum, resurse și evaluări adaptate. Elevii pot dobândi calificări, iar liceele speciale pot oferi nivelurile 3 sau 4. Atelierele protejate sprijină calificarea și integrarea profesională."
    ),
    L(
      72,
      "Școala din spital și școlarizarea la domiciliu",
      "9 min",
      "boală · spital · domiciliu · rezervarea locului · admitere specială · adaptare",
      "Articolul 72 protejează continuitatea educației pentru copiii cu boli cronice, boli maligne sau alte afecțiuni care impun spitalizare, tratament, monitorizare ori recuperare. Pentru aceștia se organizează Școala din spital, unde învățarea se poate desfășura individual, în grupe sau clase, în unitatea sanitară.\n\nPentru copiii care, din motive medicale sau din cauza unei dizabilități, sunt nedeplasabili, se organizează școlarizare la domiciliu pe perioadă determinată. Înscrierea în Școala din spital sau în școlarizarea la domiciliu se face la cererea părintelui ori a reprezentantului legal, potrivit metodologiei aprobate prin ordin comun al miniștrilor educației și sănătății.\n\nCopilului i se rezervă locul în unitatea de învățământ de proveniență și acesta poate reveni oricând în timpul anului școlar. Pentru preșcolarii din grupa mare cu afecțiuni grave se rezervă locul la clasa pregătitoare în unitatea din circumscripție. Elevii de clasa a VIII-a cu afecțiunile grave prevăzute de lege pot fi admiși pe locuri speciale în clasa a IX-a fără susținerea evaluării naționale, în condițiile metodologiei de admitere.\n\nDacă elevul înscris în Școala din spital revine temporar la domiciliu, poate opta, potrivit recomandării medicului specialist și solicitării părintelui, pentru școlarizare la domiciliu cu prezența fizică a profesorului, pentru revenirea în școala de proveniență sau pentru regim online ori hibrid.\n\nȘcolile din spital pot fi organizate în instituții de învățământ superior cu facultăți de medicină sau prin structurile județene competente. Procesul este susținut și de Corpul național al profesorilor pentru Școala din spital și se adaptează bolii și anului de studiu. CJRAE sau CMBRAE oferă evaluare și asistență psihoeducațională, iar elevilor cu CES li se asigură egalizarea șanselor la învățare și examene.\n\nFormula de memorare este: continuitate educațională în spital ori acasă, cererea părintelui, loc rezervat, revenire oricând și proces adaptat medical.",
      [
        "Înscrierea în Școala din spital sau la domiciliu se face la cererea părintelui/reprezentantului legal.",
        "Locul din unitatea de proveniență se rezervă, iar elevul poate reveni oricând în anul școlar.",
        "Elevii de clasa a VIII-a aflați în situațiile medicale prevăzute pot fi admiși pe locuri speciale fără evaluare națională."
      ],
      [
        Q("La cererea cui se realizează înscrierea în Școala din spital sau școlarizarea la domiciliu?", ["A operatorului de transport", "A părintelui sau reprezentantului legal", "A primarului", "A consiliului elevilor"], 1, "Înscrierea se face la cererea părintelui ori a reprezentantului legal."),
        Q("Ce se întâmplă cu locul elevului în școala de proveniență?", ["Se pierde automat", "Se rezervă, iar elevul poate reveni oricând în anul școlar", "Este ocupat definitiv de alt elev", "Se transferă la spital"], 1, "Legea garantează rezervarea locului și dreptul de revenire."),
        Q("Cum pot fi admiși în clasa a IX-a elevii de clasa a VIII-a aflați în situațiile medicale grave prevăzute?", ["Numai după repetarea clasei", "Pe locuri speciale, fără evaluarea națională", "Exclusiv în învățământ particular", "Fără înscriere"], 1, "Art. 72 prevede admiterea pe locuri speciale fără susținerea evaluării naționale.")
      ],
      "Art. 72 — Pentru copiii care necesită spitalizare, tratament, monitorizare sau recuperare se organizează Școala din spital; pentru cei nedeplasabili, școlarizare la domiciliu. Înscrierea se face la cererea părintelui. Locul din școala de proveniență se rezervă, procesul se adaptează situației medicale, iar legea prevede măsuri speciale pentru clasa pregătitoare și admiterea în clasa a IX-a."
    ),
    L(
      73,
      "Consilierea și monitorizarea elevului spitalizat",
      "5 min",
      "consiliere administrativă · inspector desemnat · cadru didactic monitor · loc rezervat",
      "Articolul 73 completează protecția educațională a copilului spitalizat prin trei garanții clare.\n\nPrima este consilierea administrativă. Pe toată perioada școlarizării în spital, copilul și părintele ori reprezentantul legal primesc, din oficiu și obligatoriu, informații despre drepturile educaționale. Consilierea este realizată de un inspector desemnat de structura județeană competentă. Tot inspectorul întocmește instituțional dosarul cu documentele necesare înscrierii în Școala din spital și revenirii ulterioare cu prezență fizică în școala de bază, în baza cererii părintelui.\n\nA doua garanție este desemnarea unui cadru didactic monitor. Acesta urmărește parcursul educațional al copilului, păstrează permanent legătura cu unitatea în care copilul era înmatriculat înainte de spitalizare și propune măsurile educaționale necesare în interesul copilului.\n\nA treia garanție este rezervarea locului. Copilul îndelung spitalizat are dreptul la păstrarea locului în grupa sau clasa din unitatea de proveniență, indiferent de durata spitalizării.\n\nFormula de memorare este: inspector pentru drepturi și dosar, profesor monitor pentru parcurs, loc rezervat fără limită legată de durata spitalizării.",
      [
        "Consilierea administrativă este oferită din oficiu și obligatoriu.",
        "Cadrul didactic monitor păstrează legătura cu școala de proveniență.",
        "Locul în grupa sau clasa de proveniență se rezervă indiferent de durata spitalizării."
      ],
      [
        Q("Cum se acordă consilierea administrativă elevului spitalizat și familiei?", ["Numai la cerere și contra cost", "Din oficiu, obligatoriu", "Doar după externare", "Exclusiv online"], 1, "Consilierea administrativă se realizează din oficiu și este obligatorie."),
        Q("Care este una dintre obligațiile cadrului didactic monitor?", ["Să emită diagnosticul medical", "Să țină legătura cu școala de proveniență", "Să stabilească tarifele de transport", "Să aprobe bugetul local"], 1, "Profesorul monitor urmărește parcursul și menține legătura cu unitatea de proveniență."),
        Q("Pentru ce perioadă se rezervă locul elevului îndelung spitalizat?", ["Maximum 30 de zile", "Numai un semestru", "Indiferent de perioada spitalizării", "Doar până la prima vacanță"], 2, "Rezervarea locului nu depinde de durata spitalizării.")
      ],
      "Art. 73 — Copilul spitalizat și familia beneficiază obligatoriu de consiliere administrativă din partea unui inspector desemnat. Se numește un cadru didactic monitor care urmărește parcursul și legătura cu școala de proveniență. Locul copilului în grupa sau clasa de proveniență este rezervat indiferent de durata spitalizării."
    ),
    L(
      74,
      "Programul Școala după școală",
      "7 min",
      "program complementar · analiză de nevoi · CA · parteneriate · finanțare",
      "Articolul 74 reglementează programul Școala după școală. Acesta este complementar programului școlar și poate include consolidarea, remedierea sau aprofundarea competențelor, precum și activități recreative ori de timp liber care susțin dreptul la educație.\n\nProgramul este organizat de unitatea de învățământ, în parteneriat cu autorități locale, CJRAE sau CMBRAE, alte școli, biblioteci, asociații de părinți, culte recunoscute, voluntari sau organizații neguvernamentale din domeniul educației ori domenii conexe.\n\nDecizia de derulare este luată de consiliul de administrație, pe baza unei analize de nevoi. Activitățile pot fi organizate înainte sau după ore, dacă școala dispune de infrastructura și personalul de specialitate necesare.\n\nLegea prevede finanțarea programului de către stat pentru elevii din învățământul primar, gimnazial și liceal, în limita sumelor alocate. Atenție: aplicarea art. 74 alin. (4), adică această finanțare de la bugetul de stat în forma prevăzută de articol, este suspendată până la începutul anului școlar 2027–2028. Programul poate fi finanțat și din fonduri externe nerambursabile, bugete centrale ori locale sau de universități.\n\nActivitățile pot fi realizate în regim de plată cu ora de personal didactic. În parteneriate cu ONG-uri sau culte recunoscute, persoane cu pregătire pedagogică pot participa și în regim de voluntariat.\n\nFormula de memorare este: program complementar, analiză de nevoi, hotărâre CA, parteneriate și finanțări multiple.",
      [
        "Școala după școală este complementar programului școlar.",
        "Consiliul de administrație decide derularea programului pe baza unei analize de nevoi.",
        "Aplicarea finanțării prevăzute la alin. (4) este suspendată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Ce caracter are programul Școala după școală față de programul școlar?", ["Îl înlocuiește", "Este complementar", "Este obligatoriu numai în vacanță", "Este exclusiv sportiv"], 1, "Programul are caracter complementar."),
        Q("Cine adoptă hotărârea de derulare a programului?", ["Consiliul de administrație, pe baza analizei de nevoi", "Consiliul local, fără consultarea școlii", "Un singur profesor", "Operatorul economic"], 0, "Hotărârea aparține consiliului de administrație și se bazează pe analiza de nevoi."),
        Q("Până când este suspendată aplicarea art. 74 alin. (4)?", ["Până la începutul anului școlar 2027–2028", "Până la 1 ianuarie 2026", "Până la sfârșitul clasei a IV-a", "Nu este suspendată"], 0, "Suspendarea operează până la începutul anului școlar 2027–2028.")
      ],
      "Art. 74 — Școala după școală este un program complementar pentru consolidare, remediere, aprofundare și activități recreative. Se organizează prin parteneriate, iar CA decide pe baza analizei de nevoi. Sunt posibile mai multe surse de finanțare. Aplicarea alin. (4) este suspendată până la începutul anului școlar 2027–2028."
    ),
    L(
      75,
      "Programul Învățare remedială",
      "7 min",
      "decalaje · risc de abandon · analiză de nevoi · vacanțe · evaluare · finanțare",
      "Articolul 75 instituie programul Învățare remedială pentru elevii cu dificultăți de învățare sau rămâneri în urmă față de cerințele curriculare. Sunt vizați elevii cu decalaje în dobândirea competențelor-cheie, cei aflați în risc de abandon ori părăsire timpurie și copiii români reveniți din afara granițelor.\n\nProgramul poate fi realizat și în cooperare cu organizații neguvernamentale sau cu entități ale cultelor recunoscute, cu condiția ca persoanele implicate în predare să aibă studiile de specialitate și pregătirea psihopedagogică necesare. Activitățile pot implica întreaga familie dacă acest lucru susține învățarea copilului.\n\nLa nivelul școlii se realizează o analiză a nevoilor, se stabilesc obiectivele și se formulează activitățile corespunzătoare. Propunerea se transmite structurii județene competente spre aprobare, conform normelor metodologice.\n\nÎn situații justificate, de exemplu pentru pregătirea corigențelor, încheierea situației școlare sau actualizarea competențelor înaintea noului an, activitățile se pot desfășura în vacanțe sau zile libere. Decizia aparține consiliului de administrație și se ia cu consultarea beneficiarilor primari și secundari.\n\nActivitățile sunt evaluate periodic de ARACIIP și urmăresc reducerea abandonului, creșterea rezultatelor la evaluările naționale și dobândirea competențelor-cheie. Finanțarea poate proveni de la bugetul de stat, din fonduri externe, din surse rambursabile sau din bugetele locale. Ministerul poate organiza granturi, iar eficiența lor este evaluată.\n\nFormula de memorare este: elevi cu decalaje, analiza nevoilor, aprobarea structurii județene, CA pentru vacanțe, evaluare periodică.",
      [
        "Programul se adresează elevilor cu decalaje, risc de abandon și copiilor români reveniți din străinătate.",
        "Activitățile din vacanțe se pot decide de CA, cu consultarea beneficiarilor.",
        "Programul este evaluat periodic de ARACIIP."
      ],
      [
        Q("Cui se adresează programul Învățare remedială?", ["Numai elevilor olimpici", "Elevilor cu decalaje, risc de abandon și copiilor români reveniți din străinătate", "Numai absolvenților", "Exclusiv profesorilor debutanți"], 1, "Acestea sunt categoriile principale prevăzute de art. 75."),
        Q("Cine poate decide desfășurarea activităților remediale în vacanțe sau zile libere?", ["Consiliul de administrație, cu consultarea beneficiarilor", "Un operator privat", "Consiliul județean al elevilor", "Medicul școlar"], 0, "Decizia aparține CA, cu consultarea beneficiarilor primari și secundari."),
        Q("Cine evaluează periodic activitățile remediale?", ["ARACIIP", "ANAF", "Inspectoratul pentru situații de urgență", "Operatorul de transport"], 0, "Art. 75 atribuie evaluarea periodică ARACIIP.")
      ],
      "Art. 75 — Învățarea remedială sprijină elevii cu dificultăți, decalaje, risc de abandon și copiii români reveniți din străinătate. Școala realizează analiza de nevoi și propunerea de activități. În situații justificate, CA poate decide activități și în vacanțe. Programul este finanțat din surse multiple și evaluat periodic de ARACIIP."
    ),
    L(
      76,
      "Elevele gravide și elevii părinți",
      "9 min",
      "acces egal · program adaptat · facilități · monitor · rezervarea locului · mediator",
      "Articolul 76 garantează accesul egal la educație pentru elevele gravide și elevii care au devenit părinți. Școala are obligația de a-i proteja de stigmatizare și discriminare și de a asigura un mediu sigur și incluziv.\n\nAcești elevi beneficiază de un program de studiu adaptat, care să permită continuarea studiilor, inclusiv prin învățare online acolo unde este posibil. O metodologie specială reglementează școlarizarea lor, iar autoritățile promovează programe de prevenire a sarcinilor nedorite și a maternității timpurii, adaptate vârstei și dezvoltării elevilor.\n\nLegea acordă cu prioritate facilități pentru combaterea abandonului: motivarea unui număr limitat de absențe, grupe speciale cu program flexibil, asistență medicală, învățare remedială, Școala după școală, A doua șansă, consiliere școlară și psihologică, consiliere administrativă și facilități pentru înscrierea copilului elevului părinte la servicii de educație timpurie. Examenele pot fi amânate când coincid cu nașterea sau îngrijirea copilului. Grupele speciale create în aceste condiții nu constituie segregare.\n\nPe durata școlarizării se desemnează un cadru didactic monitor care urmărește parcursul educațional și propune măsuri. Locul în școală se rezervă, iar elevul poate reveni oricând în timpul anului școlar. Dacă există dificultăți financiare privind rechizitele, hainele sau alte resurse, se acordă sprijin potrivit metodologiei.\n\nStructurile județene monitorizează situația și progresul, iar monitorizarea integrată se desfășoară sub coordonarea managerului de caz din DGASPC. Consilierea administrativă se acordă din oficiu de un inspector desemnat. În localitățile cu un număr crescut de cazuri se alocă suplimentar un post de mediator școlar în unitatea unică sau în cea cu cele mai multe asemenea situații.\n\nFormula de memorare este: acces fără discriminare, program flexibil, facilități prioritare, profesor monitor, loc rezervat și monitorizare integrată.",
      [
        "Elevele gravide și elevii părinți au dreptul la un program de studiu adaptat.",
        "Se desemnează un cadru didactic monitor, iar locul de școlarizare se rezervă.",
        "Grupele speciale cu program flexibil create în condițiile legii nu constituie segregare."
      ],
      [
        Q("Ce tip de program de studiu primesc elevele gravide și elevii părinți?", ["Un program adaptat nevoilor lor", "Numai program seral", "Exclusiv studiu individual fără profesori", "Niciun program până după naștere"], 0, "Art. 76 garantează un program adaptat care permite continuarea studiilor."),
        Q("Cine urmărește parcursul educațional pe durata școlarizării?", ["Un cadru didactic monitor", "Operatorul de transport", "Bibliotecarul județean", "Exclusiv familia"], 0, "Școala desemnează un cadru didactic monitor."),
        Q("Grupele speciale cu program flexibil constituie segregare?", ["Da, întotdeauna", "Nu, dacă sunt organizate conform metodologiei", "Da, dacă au mai puțin de 20 de elevi", "Numai la nivel liceal"], 1, "Legea precizează expres că aceste grupe nu constituie segregare.")
      ],
      "Art. 76 — Elevele gravide și elevii părinți beneficiază de acces egal, protecție împotriva discriminării, program adaptat și facilități pentru continuarea studiilor. Se desemnează un cadru didactic monitor, se rezervă locul în școală și se asigură monitorizare și consiliere interinstituțională."
    ),
    L(
      77,
      "Reducerea abandonului și Programul Masă sănătoasă",
      "8 min",
      "absenteism · abandon · transport · burse · rechizite · PNMS · prioritate",
      "Articolul 77 reglementează Programul național integrat de reducere a abandonului școlar. Acesta stabilește priorități, programe, activități și servicii pentru reducerea absenteismului, abandonului și părăsirii timpurii la toate nivelurile de învățământ. Programul este aprobat prin hotărâre a Guvernului.\n\nCei trei piloni principali sunt ușor de memorat: transportul gratuit, bursele sociale și rechizitele școlare. Structurile județene publică anual situația abandonului și a părăsirii timpurii la nivel județean.\n\nArticolul reglementează și Programul național Masă sănătoasă, PNMS, care urmărește sprijinirea participării la educație. Legea prevede extinderea și generalizarea sa treptată, pe baza criteriilor și fondurilor aprobate. Lista unităților beneficiare se aprobă și se completează anual, iar structurile județene transmit periodic indicatorii de eficiență și impact. În 2026, programul continuă potrivit măsurilor bugetare și actelor anuale de punere în aplicare; pentru concurs trebuie distinsă norma permanentă din lege de regulile bugetare valabile într-un anumit an.\n\nElevii identificați în risc de abandon participă cu prioritate la Școala după școală, Învățare remedială și consiliere psihopedagogică și beneficiază de gratuitate la taberele organizate în centrele de agrement aflate în domeniul statului.\n\nFormula de memorare este: program integrat, trei piloni — transport, bursă socială, rechizite —, Masă sănătoasă și prioritate la măsurile de sprijin.",
      [
        "Pilonii principali sunt transportul gratuit, bursele sociale și rechizitele.",
        "Situația abandonului școlar la nivel județean se publică anual.",
        "Elevii în risc de abandon au prioritate la Școala după școală, Învățare remedială și consiliere."
      ],
      [
        Q("Care sunt cei trei piloni principali ai programului de reducere a abandonului?", ["Transport gratuit, burse sociale și rechizite", "Manuale, examene și transferuri", "Sport, teatru și muzică", "Internat, uniformă și excursii"], 0, "Art. 77 enumeră transportul gratuit, bursele sociale și rechizitele."),
        Q("Cât de des se publică situația județeană privind abandonul școlar?", ["Lunar", "Semestrial", "Anual", "O dată la zece ani"], 2, "Structura județeană publică anual această situație."),
        Q("La ce activități participă cu prioritate elevii în risc de abandon?", ["Școala după școală, Învățare remedială și consiliere", "Numai concursuri sportive", "Exclusiv activități online", "Numai excursii în străinătate"], 0, "Legea acordă prioritate la aceste măsuri de sprijin.")
      ],
      "Art. 77 — Ministerul derulează Programul național integrat de reducere a abandonului, având ca piloni transportul gratuit, bursele sociale și rechizitele. Articolul reglementează PNMS și monitorizarea impactului. Elevii în risc de abandon au prioritate la programele de sprijin și gratuitate la taberele din centrele de agrement ale statului."
    ),
    L(
      78,
      "Zonele de investiții prioritare în educație",
      "7 min",
      "decalaje · excluziune socială · cartografiere · măsuri integrate · consilii de coordonare",
      "Articolul 78 urmărește reducerea decalajelor de acces, participare și rezultate școlare prin programe pentru zone de investiții prioritare în educație.\n\nSunt considerați în risc de excluziune socială elevii din medii dezavantajate socioeconomic ori izolate, cei din grupuri marginalizate, elevii cu dizabilități sau CES și copiii și tinerii din comunități rome vulnerabile, aflați în risc de abandon ori eșec școlar.\n\nMinisterul și instituțiile sale, împreună cu parteneri sociali, mediul privat, culte și ONG-uri, cartografiază periodic aceste zone potrivit unei metodologii. Pe baza cartografierii se organizează măsuri integrate de suport educațional și socioeconomic, prin oferta școlară și servicii complementare.\n\nSe constituie consilii de coordonare care reunesc reprezentanți ai consiliilor județene, structurilor educaționale, CNEI, CJRAE sau CMBRAE, statisticii, universităților și societății civile. Dacă sunt vizați elevi ai unei minorități naționale, consiliul include și reprezentanți ai organizației minorității respective.\n\nLegea prevede finanțare de bază suplimentară pentru aceste zone și stimulente financiare lunare pentru personal, în funcție de nivelul intervenției. Atenție: aplicarea art. 78 alin. (8), referitoare la aceste măsuri financiare, este suspendată până la începutul anului școlar 2027–2028.\n\nFormula de memorare este: cartografiere, zone prioritare, măsuri integrate, consilii de coordonare și alin. (8) suspendat.",
      [
        "Scopul este reducerea decalajelor de acces, participare și rezultate.",
        "Zonele se identifică prin cartografiere periodică.",
        "Aplicarea art. 78 alin. (8) este suspendată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Care este scopul programelor pentru zone de investiții prioritare?", ["Reducerea decalajelor de acces, participare și rezultate", "Selectarea exclusivă a elevilor performanți", "Închiderea școlilor rurale", "Înlocuirea curriculumului național"], 0, "Art. 78 urmărește reducerea acestor decalaje."),
        Q("Cum sunt identificate zonele prioritare?", ["Prin tragere la sorți", "Prin cartografiere periodică", "Doar la cererea unui elev", "După vechimea directorului"], 1, "Ministerul și partenerii realizează cartografierea periodică."),
        Q("Până când este suspendată aplicarea art. 78 alin. (8)?", ["Până la începutul anului școlar 2027–2028", "Până la sfârșitul anului 2025", "Nu este suspendată", "Până la absolvirea primei generații"], 0, "Suspendarea este valabilă până la începutul anului școlar 2027–2028.")
      ],
      "Art. 78 — Ministerul coordonează programe în zone de investiții prioritare pentru reducerea decalajelor. Zonele sunt cartografiate periodic, iar măsurile sunt educaționale și socioeconomice. Consiliile de coordonare reunesc instituțiile și comunitatea. Aplicarea alin. (8) privind măsurile financiare este suspendată până la începutul anului școlar 2027–2028."
    ),
    L(
      79,
      "Interzicerea segregării școlare",
      "7 min",
      "interdicție · criterii · discriminare gravă · separare fizică · intervenție imediată",
      "Articolul 79 interzice segregarea școlară la toate nivelurile învățământului preuniversitar. Regulile legii se completează cu legislația generală privind prevenirea și sancționarea discriminării și cu metodologia ministerială pentru monitorizare, identificare, prevenire și combatere.\n\nSegregarea este interzisă pe criteriul etnic, al dizabilității ori CES, al statutului socioeconomic, al apartenenței la o categorie defavorizată, al mediului de rezidență sau al performanțelor școlare.\n\nLegea califică segregarea drept o formă gravă de discriminare. Ea restrânge exercitarea egală a dreptului la educație, generează acces inegal la o educație de calitate și încalcă demnitatea umană.\n\nÎn sensul legii, segregarea poate apărea prin separarea fizică a copiilor unui anumit grup în grupe, clase, clădiri, structuri sau chiar bănci, atunci când ponderea grupului devine disproporționată față de ponderea sa în populația de vârstă corespunzătoare din unitatea administrativ-teritorială.\n\nMinisterul, prin structurile județene, monitorizează și intervine pentru prevenirea și eliminarea segregării, în colaborare cu reprezentanții elevilor, părinților și sindicatelor. Când se constată situații de segregare, se dispun măsuri de intervenție imediată.\n\nFormula de memorare este: interdicție totală, criterii multiple, separare fizică disproporționată și intervenție imediată.",
      [
        "Segregarea școlară este interzisă la toate nivelurile.",
        "Segregarea este o formă gravă de discriminare.",
        "Separarea poate viza grupe, clase, clădiri, structuri sau bănci."
      ],
      [
        Q("La ce niveluri este interzisă segregarea școlară?", ["Numai la nivel primar", "Numai la liceu", "La toate nivelurile", "Numai în învățământul special"], 2, "Interdicția se aplică la toate nivelurile."),
        Q("Cum califică legea segregarea?", ["Măsură administrativă obișnuită", "Formă gravă de discriminare", "Metodă de evaluare", "Formă de curriculum"], 1, "Art. 79 definește segregarea ca formă gravă de discriminare."),
        Q("Ce trebuie dispus când se constată o situație de segregare?", ["Măsuri de intervenție imediată", "Amânarea până la anul următor", "Doar o informare verbală", "Transferul tuturor profesorilor"], 0, "Structurile competente dispun măsuri de intervenție imediată.")
      ],
      "Art. 79 — Segregarea școlară este interzisă la toate nivelurile și pe criterii etnice, de dizabilitate/CES, socioeconomice, de rezidență, categorie defavorizată sau performanță. Este o formă gravă de discriminare și poate rezulta din separarea fizică disproporționată. Situațiile constatate impun intervenție imediată."
    ),
    L(
      80,
      "Comisia Națională pentru Desegregare Școlară",
      "4 min",
      "CNDS · organism consultativ · fără personalitate juridică · plan de acțiune",
      "Articolul 80 reglementează Comisia Națională pentru Desegregare Școlară, prescurtat CNDS.\n\nCNDS este un organism de specialitate, consultativ, fără personalitate juridică, aflat în coordonarea Ministerului Educației. Rolul său principal este să elaboreze și să coordoneze implementarea Planului de acțiune pentru desegregare școlară în unitățile de învățământ preuniversitar.\n\nPlanul conține obiective, măsuri strategice și activități pentru prevenirea și eliminarea oricărei forme de segregare din sistem. Regulamentul de organizare și funcționare al CNDS se aprobă prin ordin al ministrului educației.\n\nFormula de memorare este: CNDS — consultativă, fără personalitate juridică, coordonată de minister, responsabilă de planul de desegregare.",
      [
        "CNDS este un organism de specialitate consultativ.",
        "CNDS nu are personalitate juridică.",
        "CNDS elaborează și coordonează Planul de acțiune pentru desegregare."
      ],
      [
        Q("Ce tip de organism este CNDS?", ["Organism consultativ de specialitate", "Societate comercială", "Unitate de învățământ", "Sindicat"], 0, "CNDS este un organism consultativ de specialitate."),
        Q("Are CNDS personalitate juridică?", ["Da, întotdeauna", "Nu", "Numai la nivel județean", "Numai pentru proiecte europene"], 1, "Art. 80 precizează că CNDS nu are personalitate juridică."),
        Q("Ce document elaborează și coordonează CNDS?", ["Planul de acțiune pentru desegregare școlară", "Planul-cadru pentru bacalaureat", "Bugetul fiecărei școli", "Calendarul vacanțelor"], 0, "Acesta este rolul central al CNDS.")
      ],
      "Art. 80 — CNDS este organism consultativ de specialitate, fără personalitate juridică, coordonat de Ministerul Educației. El elaborează și coordonează Planul de acțiune pentru desegregare școlară. Regulamentul său se aprobă prin ordin ministerial."
    ),
    L(
      81,
      "Protocoalele pentru desegregare",
      "3 min",
      "CNDS · Ministerul Educației · protocoale · autorități · minorități",
      "Articolul 81 este scurt, dar important pentru colaborarea instituțională.\n\nLa propunerea Comisiei Naționale pentru Desegregare Școlară, Ministerul Educației încheie protocoale de colaborare cu autorități și instituții publice. Protocoalele pot fi încheiate și cu organizațiile cetățenilor aparținând minorităților naționale.\n\nScopul este asigurarea colaborării necesare prevenirii și combaterii segregării, în condițiile regulamentului de organizare și funcționare al CNDS.\n\nFormula de memorare este: CNDS propune, Ministerul încheie, autoritățile și organizațiile minorităților colaborează.",
      [
        "Protocoalele sunt încheiate de Ministerul Educației.",
        "Inițiativa este formulată la propunerea CNDS.",
        "Partenerii pot include organizațiile cetățenilor aparținând minorităților naționale."
      ],
      [
        Q("Cine încheie protocoalele de colaborare prevăzute la art. 81?", ["Ministerul Educației", "Fiecare elev", "Operatorul de transport", "Numai consiliul local"], 0, "Ministerul Educației încheie protocoalele."),
        Q("La propunerea cui sunt încheiate protocoalele?", ["CNDS", "ANAF", "Consiliului medical", "Furnizorului de manuale"], 0, "Inițiativa aparține CNDS."),
        Q("Cu cine pot fi încheiate protocoale, pe lângă autorități și instituții publice?", ["Cu organizațiile cetățenilor aparținând minorităților naționale", "Numai cu firme de transport", "Exclusiv cu universități străine", "Numai cu asociații sportive"], 0, "Art. 81 menționează expres aceste organizații.")
      ],
      "Art. 81 — La propunerea CNDS, Ministerul Educației încheie protocoale cu autorități, instituții publice și organizații ale cetățenilor aparținând minorităților naționale, pentru colaborarea necesară în domeniul desegregării."
    ),
    L(
      82,
      "Serviciile de medicină școlară",
      "8 min",
      "cabinete medicale · stomatologie · gratuitate · autorități locale · finanțare · autorizare",
      "Articolul 82 reglementează medicina școlară. În fiecare unitate de învățământ preuniversitar cu personalitate juridică se înființează sau se organizează cabinete medicale ori stomatologice școlare autorizate sanitar. Pentru fiecare unitate de învățământ special, legea prevede organizarea unui cabinet de medicină școlară până în anul 2027.\n\nServiciile medicale și stomatologice oferite de aceste cabinete sunt gratuite pentru antepreșcolari, preșcolari și elevi. Conducerea, profesorii și personalul administrativ și auxiliar colaborează cu personalul medico-sanitar. Până la înființarea cabinetelor, școala este arondată cabinetului medical din cea mai apropiată unitate.\n\nDacă o școală nu are cabinet medical, autoritatea administrației publice locale are obligația să îl înființeze până în anul 2030. Asistența este asigurată de medici cu drept de liberă practică și asistenți medicali. În sistemul de stat, personalul medical este angajat de autoritățile locale, cu avizul Ministerului Sănătății.\n\nCheltuielile de personal și cele pentru dotări, consumabile, medicamente, materiale sanitare, înființare și amenajare se finanțează potrivit mecanismelor prevăzute de lege. Finanțarea poate fi completată din fonduri externe, donații sau sponsorizări. Unitățile administrativ-teritoriale trebuie să mențină funcționale cabinetele create prin proiecte europene.\n\nÎn școlile particulare, medicina școlară poate fi realizată și prin contract cu un medic sau asistent medical. Examinarea periodică a sănătății elevilor se desfășoară după metodologia comună a ministerelor educației și sănătății. Autorizarea sanitară a unităților de stat se obține fără taxe de către autoritatea locală.\n\nFormula de memorare este: cabinet în fiecare unitate cu personalitate juridică, servicii gratuite, cabinet special până în 2027, obligația autorității locale până în 2030.",
      [
        "Serviciile medicale și stomatologice școlare sunt gratuite.",
        "În unitățile speciale se organizează cabinet de medicină școlară până în 2027.",
        "Dacă nu există cabinet, autoritatea locală trebuie să îl înființeze până în 2030."
      ],
      [
        Q("Cum sunt serviciile medicale și stomatologice școlare pentru elevi?", ["Cu taxă", "Gratuite", "Gratuite numai la liceu", "Plătite de profesor"], 1, "Art. 82 stabilește gratuitatea serviciilor."),
        Q("Până în ce an se organizează cabinet de medicină școlară în fiecare unitate de învățământ special?", ["2026", "2027", "2028", "2030"], 1, "Termenul special prevăzut este anul 2027."),
        Q("Până în ce an trebuie autoritatea locală să înființeze cabinetul acolo unde acesta lipsește?", ["2025", "2027", "2029", "2030"], 3, "Obligația autorității locale are termen anul 2030.")
      ],
      "Art. 82 — Unitățile cu personalitate juridică trebuie să dispună de cabinete medicale/stomatologice autorizate, iar serviciile sunt gratuite. În școlile speciale cabinetul se organizează până în 2027; unde lipsește, autoritatea locală are obligația înființării până în 2030. Articolul reglementează personalul, finanțarea, funcționarea și autorizarea."
    ),
    L(
      83,
      "Transportul gratuit și celelalte facilități",
      "10 min",
      "gratuitate · transport · sumă forfetară · internat · vouchere culturale · PNSILLR",
      "Articolul 83, modificat substanțial și în 2026, reglementează transportul și mai multe facilități pentru elevi.\n\nElevii din învățământul acreditat sau autorizat, inclusiv cei din unitățile înscrise în registrul special care folosesc un curriculum străin, beneficiază de gratuitate, în condițiile legii, la transportul public local, metropolitan și județean, rutier, naval, cu metroul și feroviar la toate categoriile de trenuri, clasa a II-a, pe tot parcursul anului școlar.\n\nPentru transportul județean și interjudețean, Legea nr. 12/2026 diferențiază situațiile. Elevilor de liceu școlarizați în altă localitate decât domiciliul li se asigură transportul dus-întors pe durata cursurilor și pentru probele fără taxă ale bacalaureatului. Elevilor din primar și gimnaziu li se asigură transportul dacă nu pot fi școlarizați în unitatea administrativ-teritorială de domiciliu, inclusiv pentru evaluările naționale. Prin excepție, elevii din primar și gimnaziu înscriși la învățământ special sau vocațional în altă localitate au acest drept.\n\nElevilor cazați la internat sau în gazdă li se decontează patru călătorii dus-întors pe lună și câte o călătorie dus-întors în perioada fiecărei sărbători legale. Dacă nu există serviciu de transport public și elevul nu este școlarizat în localitatea de domiciliu, se acordă o sumă forfetară lunară stabilită în funcție de distanță. Și elevii din învățământul special care nu se pot deplasa cu transportul public pot primi suma, cu aprobarea CA. Elevul transportat prin curse școlare nu poate primi simultan suma forfetară.\n\nDovada calității de elev se face prin cardul național de elev sau printr-un înscris emis de școală. Sumele pentru transport sunt neimpozabile și nu intră în calculul venitului pentru bursa socială ori alte beneficii.\n\nArticolul mai prevede programul O carte pentru fiecare, gratuitatea mesei și cazării pentru elevii din internate, cu excepția postlicealului, și Vouchere culturale pentru elevi, în cuantum de 250 de lei pe card reutilizabil. PNSILLR sprijină învățarea limbii române în școlile minorităților. Elevii beneficiază de reducere de minimum 75% la activități culturale și sportive organizate de instituții publice.\n\nFormula de memorare este: gratuitate diversificată la transport, patru călătorii pentru internat, sumă forfetară când nu există transport, 250 lei voucher cultural și reducere de minimum 75%.",
      [
        "Gratuitatea feroviară se acordă la toate categoriile de trenuri, clasa a II-a.",
        "Elevii cazați la internat sau în gazdă au 4 călătorii dus-întors pe lună, plus câte una la fiecare sărbătoare legală.",
        "Voucherul cultural prevăzut de lege este de 250 lei."
      ],
      [
        Q("La ce clasă feroviară se acordă gratuitatea elevilor?", ["Clasa I", "Clasa a II-a", "Numai vagon de dormit", "Orice clasă fără condiții"], 1, "Art. 83 prevede gratuitatea feroviară la toate categoriile de trenuri, clasa a II-a."),
        Q("Câte călătorii dus-întors pe lună se decontează elevilor cazați la internat sau în gazdă?", ["Una", "Două", "Patru", "Zece"], 2, "Legea prevede contravaloarea a patru călătorii dus-întors pe lună."),
        Q("Care este valoarea voucherului cultural prevăzut de art. 83?", ["100 lei", "200 lei", "250 lei", "500 lei"], 2, "Programul Vouchere culturale pentru elevi prevede 250 lei.")
      ],
      "Art. 83 — Elevii beneficiază de gratuitate la transportul local, metropolitan, județean, rutier, naval, cu metroul și feroviar, în condițiile legii. Forma modificată în 2026 diferențiază drepturile pentru liceal și pentru primar/gimnazial. Sunt reglementate decontarea elevilor din internat sau gazdă, suma forfetară, cursele școlare, gratuitatea mesei și cazării, programele O carte pentru fiecare, Vouchere culturale și PNSILLR, precum și reducerea culturală de minimum 75%."
    ),
    L(
      84,
      "Cardul național de elev",
      "4 min",
      "card nominal · facilități · distribuire gratuită · fiecare ciclu",
      "Articolul 84 reglementează cardul național de elev.\n\nÎncepând cu învățământul primar, elevii primesc acest card. Cardul este nominal și dovedește că titularul are calitatea de beneficiar al facilităților prevăzute de Legea învățământului preuniversitar sau de alte legi speciale.\n\nPe baza cardului, și operatorii economici pot acorda facilități elevilor. Cardul se distribuie gratuit, prin unitățile de învățământ, la începutul fiecărui ciclu de învățământ.\n\nFormula de memorare este: de la primar, nominal, atestă facilitățile, gratuit la începutul fiecărui ciclu.",
      [
        "Cardul național se acordă începând cu învățământul primar.",
        "Cardul este nominal și atestă calitatea de beneficiar al facilităților.",
        "Cardul se distribuie gratuit la începutul fiecărui ciclu de învățământ."
      ],
      [
        Q("Începând cu ce nivel primesc elevii cardul național?", ["Antepreșcolar", "Preșcolar", "Primar", "Postliceal"], 2, "Cardul se acordă începând cu învățământul primar."),
        Q("Ce caracter are cardul național de elev?", ["Anonim", "Nominal", "Transferabil între elevi", "Valabil numai pentru profesori"], 1, "Cardul este nominal."),
        Q("Când se distribuie gratuit cardul?", ["În fiecare lună", "La începutul fiecărui ciclu de învățământ", "Numai după bacalaureat", "Doar la cererea operatorilor economici"], 1, "Distribuirea gratuită are loc la începutul fiecărui ciclu.")
      ],
      "Art. 84 — Începând cu învățământul primar, elevii primesc cardul național de elev. Cardul este nominal, atestă calitatea de beneficiar al facilităților și poate fi folosit și pentru facilități oferite de operatori economici. Se distribuie gratuit prin școli, la începutul fiecărui ciclu."
    )
  );
})();
