"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–114: verificare 12.08.2026";
  DATA.modules.push({
    id: 10,
    title: "Drepturi, obligații, sancțiuni, burse și excelență",
    articles: "105–114",
    chapter: "Capitolul VIII",
    startArticle: 105,
    endArticle: 114
  });

  DATA.lessons.push(
    L(
      105,
      "Beneficiarii sistemului și participarea la decizie",
      "9 min",
      "beneficiari primari · secundari · terțiari · Statutul elevului · consultare · alfabetizare funcțională",
      "Articolul 105 stabilește mai întâi cine sunt beneficiarii sistemului. Beneficiarii primari sunt antepreșcolarii, preșcolarii, elevii și persoanele adulte înscrise într-o unitate de învățământ. Beneficiarii secundari sunt părinții, tutorii sau reprezentanții legali ai copiilor și elevilor. Beneficiarii terțiari sunt comunitatea locală și societatea în ansamblul ei. Formula de memorare este simplă: primarii învață, secundarii îi reprezintă și îi sprijină, terțiarii beneficiază de rezultatele educației.\n\nDrepturile și îndatoririle elevilor sunt detaliate în Statutul elevului, aprobat prin ordin al ministrului educației după consultarea Consiliului Național al Elevilor și a altor asociații reprezentative. Pentru sistemul de apărare, ordine publică și securitate națională există un statut propriu, iar pentru învățământul postliceal militar regulile sunt stabilite prin regulamentele specifice.\n\nÎnvățământul preuniversitar este centrat pe beneficiari. De aceea, deciziile majore presupun consultarea reprezentanților elevilor, părinților, mediului de afaceri, autorităților locale, societății civile și personalului din învățământ. Elevii pot participa și la voluntariat, putând primi stimulente în condițiile stabilite prin ordin și cu respectarea legii voluntariatului.\n\nMinisterul evaluează periodic nivelul de alfabetizare funcțională. Legea prevede și un program național de formare a cadrelor didactice pentru creșterea alfabetizării funcționale, însă aplicarea alin. (10) este suspendată până la începutul anului școlar 2027–2028. Pentru concurs este important să distingem norma existentă de termenul ei de aplicare.\n\nUnitățile de învățământ au obligația de a înscrie în învățământul obligatoriu și persoanele care nu dețin cod numeric personal, potrivit normelor metodologice. Transferul beneficiarilor primari se realizează pe baza metodologiei aprobate prin ordin al ministrului.\n\nFormula de memorare este: trei categorii de beneficiari; Statutul elevului pentru drepturi și îndatoriri; consultare la deciziile majore; înscriere și fără CNP; transfer prin metodologie.",
      [
        "Beneficiarii primari sunt copiii, elevii și adulții înscriși; cei secundari sunt părinții/reprezentanții legali; cei terțiari sunt comunitatea și societatea.",
        "Drepturile și îndatoririle elevilor sunt prevăzute în Statutul elevului.",
        "Aplicarea programului de la alin. (10) este suspendată până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Cine sunt beneficiarii terțiari ai sistemului de învățământ preuniversitar?", ["Numai cadrele didactice", "Comunitatea locală și societatea în ansamblul ei", "Exclusiv părinții", "Doar autoritățile centrale"], 1, "Art. 105 alin. (3) definește drept beneficiari terțiari comunitatea locală și societatea în ansamblul ei."),
        Q("În ce document sunt prevăzute drepturile și îndatoririle elevilor?", ["În Statutul elevului", "Numai în contractul individual de muncă", "În regulamentul Parlamentului", "Exclusiv în hotărârile consiliului local"], 0, "Drepturile și îndatoririle elevilor sunt prevăzute în Statutul elevului, aprobat prin ordin al ministrului."),
        Q("Ce obligație are școala față de persoanele fără cod numeric personal?", ["Să refuze înscrierea", "Să amâne înscrierea până la majorat", "Să le înscrie în învățământul obligatoriu, potrivit normelor", "Să le primească doar la activități extrașcolare"], 2, "Accesul la învățământul obligatoriu trebuie asigurat și persoanelor care nu dețin CNP.")
      ],
      "Art. 105 — Beneficiarii sunt primari, secundari și terțiari. Drepturile și îndatoririle elevilor sunt reglementate prin Statutul elevului, cu reguli speciale pentru sistemul militar. Deciziile majore se iau prin consultarea reprezentanților beneficiarilor și a personalului. Elevii pot participa la voluntariat, alfabetizarea funcțională este evaluată periodic, iar aplicarea programului de la alin. (10) este suspendată până la începutul anului școlar 2027–2028. Persoanele fără CNP se înscriu în învățământul obligatoriu, iar transferurile se fac potrivit metodologiei."
    ),
    L(
      106,
      "Drepturile, îndatoririle și interdicțiile elevilor",
      "14 min",
      "educație gratuită · demnitate · evaluare · contestație · obligații · interdicții · telefoane · părinți",
      "Articolul 106 este unul dintre cele mai dense articole ale modulului. El grupează drepturile beneficiarilor primari, îndatoririle lor, interdicțiile aplicabile elevilor și obligațiile beneficiarilor secundari.\n\nDrepturile pornesc de la accesul la educație de calitate și gratuită în sistemul de stat. Accesul include posibilitatea studierii în limba maternă, informare și consiliere școlară, profesională și psihologică, biblioteci, spații sportive, resurse digitale și manuale gratuite, în limitele resurselor disponibile. Elevii au dreptul la spații adecvate și sigure, la libertate de expresie fără încălcarea drepturilor altora, la protecție împotriva discriminării, la respectarea imaginii, demnității, personalității și datelor personale.\n\nEvaluarea trebuie să fie obiectivă și corectă, iar rezultatele lucrărilor scrise pot fi contestate. Elevul trebuie informat înainte ca nota să fie consemnată, trebuie să cunoască planificarea materiei și să primească rezultatele evaluărilor scrise în cel mult 15 zile lucrătoare. Există drepturi la sprijin pentru finalizarea învățământului obligatoriu, la adaptări pentru CES, la alegerea disciplinelor din CDEOȘ potrivit vârstei, la concursuri, pregătire suplimentară, premii, asistență medicală, psihologică și logopedică și la burse.\n\nÎndatoririle elevilor includ frecventarea cursurilor și pregătirea la discipline, respectarea Statutului elevului, a regulamentelor și deciziilor școlii, ținuta decentă, toleranța și respectul, sesizarea ilegalităților ori situațiilor de pericol, folosirea corectă a facilităților, protejarea bazei materiale și restituirea manualelor, păstrarea curățeniei și ordinii, respectarea regulilor de securitate și anunțarea îmbolnăvirii.\n\nInterdicțiile vizează falsificarea sau distrugerea documentelor școlare, deteriorarea bunurilor, materialele violente ori intolerante, blocarea accesului, drogurile, alcoolul, tutunul, jocurile de noroc, armele și produsele pirotehnice, materialele electorale, de prozelitism, obscene sau pornografice, comportamentele jignitoare, discriminarea și violența. Elevii nu pot părăsi școala în timpul programului, cu excepțiile legale, și nu pot facilita intrarea persoanelor străine fără acord.\n\nÎn preșcolar, primar și gimnazial, telefoanele și celelalte echipamente de comunicații electronice nu se utilizează în timpul cursurilor și al activităților educaționale din afara școlii, cu excepția scopului educativ ori a spațiilor autorizate prin regulament. În liceu, regulamentul intern poate interzice utilizarea acestor dispozitive în toată incinta sau într-o parte a ei și la activitățile din afara școlii. Excepția privește echipamentele pe care elevii cu CES sunt autorizați să le folosească. Încălcarea regulii poate conduce la preluarea temporară a dispozitivului, conform regulamentului, pentru predarea lui părintelui ori elevului.\n\nBeneficiarii secundari au obligația să înscrie copilul și să asigure frecvența, întreținerea necesară finalizării studiilor, legătura cu școala, semnarea contractului educațional, sprijinirea integrării și respectarea regulilor de comunicare și a regulamentului școlii.\n\nFormula de memorare este: drepturi pentru acces, demnitate, evaluare și sprijin; obligații pentru participare, respect și siguranță; interdicții pentru protejarea comunității; reguli diferențiate pentru telefoane la gimnaziu și liceu.",
      [
        "Rezultatele evaluărilor scrise se comunică în maximum 15 zile lucrătoare și pot fi contestate.",
        "În preșcolar, primar și gimnazial, telefoanele sunt interzise în timpul cursurilor, cu excepțiile prevăzute de lege.",
        "Părinții trebuie să asigure înscrierea, frecvența și colaborarea cu școala."
      ],
      [
        Q("În ce termen trebuie comunicate rezultatele evaluărilor scrise?", ["Maximum 5 zile calendaristice", "Maximum 10 zile lucrătoare", "Maximum 15 zile lucrătoare", "La finalul anului școlar"], 2, "Art. 106 garantează informarea asupra rezultatelor evaluărilor scrise în maximum 15 zile lucrătoare."),
        Q("Când poate un elev din gimnaziu utiliza telefonul în timpul cursurilor?", ["Oricând dorește", "Numai în scop educativ sau în condițiile/spațiile autorizate prin regulament", "Numai pentru rețele sociale", "Doar dacă este elev major"], 1, "Pentru preșcolar, primar și gimnazial există interdicția utilizării, cu excepția scopului educativ ori a spațiilor autorizate explicit."),
        Q("Care este o obligație a beneficiarilor secundari?", ["Să stabilească singuri notele elevului", "Să asigure înscrierea și frecventarea regulată a cursurilor", "Să aprobe curriculumul național", "Să organizeze examenele naționale"], 1, "Părinții/reprezentanții legali trebuie să înscrie copilul și să asigure frecventarea regulată a cursurilor.")
      ],
      "Art. 106 — Beneficiarii primari au drepturi la educație de calitate, spații sigure, nediscriminare, demnitate, protecția datelor, evaluare obiectivă, sprijin, consiliere și burse. Ei au obligații privind frecvența, pregătirea, respectarea regulamentelor, siguranța și protejarea bunurilor și sunt supuși interdicțiilor prevăzute de lege. Utilizarea telefoanelor este reglementată diferențiat pe niveluri, cu excepții educative și pentru echipamentele autorizate elevilor cu CES. Beneficiarii secundari trebuie să asigure înscrierea, frecvența și colaborarea cu școala."
    ),
    L(
      107,
      "Sancțiunile elevilor și garanțiile procedurale",
      "12 min",
      "răspundere disciplinară · drept la apărare · sancțiuni · suspendare · exmatriculare · contestare · remediere",
      "Articolul 107 reglementează răspunderea disciplinară a elevilor. Analiza disciplinară poate porni în urma încălcării regulamentelor sau a unui comportament inadecvat. Elevul și părinții ori tutorii sunt informați asupra faptei și convocați la o întâlnire formală. Elevul are dreptul la apărare și nu poate fi supus unei sancțiuni colective.\n\nFapta sancționabilă trebuie să se producă în perimetrul școlii, la activități extrașcolare sau în cadrul activităților desfășurate în mediul online. Sancțiunile, în ordinea gravității, sunt: observația individuală, mustrarea scrisă, retragerea temporară sau pentru întregul an a bursei, mutarea disciplinară la o clasă paralelă, suspendarea pentru o perioadă limitată, preavizul de exmatriculare și formele de exmatriculare prevăzute de lege. Exmatricularea fără drept de reînscriere este rezervată elevilor din învățământul postliceal.\n\nSancțiunea se comunică individual, în scris, elevului și părintelui sau tutorelui. Mustrarea în fața colectivului clasei ori al școlii este interzisă. În învățământul primar nu se aplică mutarea disciplinară, suspendarea, preavizul de exmatriculare și formele de exmatriculare prevăzute la literele d)-h). În învățământul obligatoriu, preavizul și exmatricularea cu drept de reînscriere în aceeași unitate pot fi folosite numai în situații foarte grave, când prezența elevului pune în pericol siguranța sau afectează dreptul la educație ori la muncă.\n\nSuspendarea are limite clare: maximum 5 zile lucrătoare pentru o măsură și cel mult 15 zile lucrătoare cumulat într-un an școlar. Elevii sancționați cu suspendare, preaviz ori exmatriculare cu drept de reînscriere beneficiază de consiliere, intervenție psihologică, psihoterapie și activități remediale. Sancțiunile pot fi însoțite de scăderea notei la purtare.\n\nProcedura din Statutul elevului trebuie să cuprindă obligatoriu informarea, intervievarea elevului în prezența părinților sau tutorilor, consultarea managerului de caz atunci când este necesar și posibilitatea contestării. Comunicarea cu părinții în etapa de sesizare și analiză are loc confidențial, în absența elevilor, cu participarea consilierului școlar și, dacă este necesar, a mediatorului.\n\nPentru bunurile deteriorate sau sustrase se acoperă cheltuielile, se restituie bunul ori se suportă înlocuirea. Manualul deteriorat se înlocuiește sau se achită, dar elevul nu poate primi scăderea notei la purtare numai pentru deteriorarea manualului.\n\nFormula de memorare este: fără sancțiuni colective; comunicare individuală și scrisă; suspendare 5 zile o dată și 15 pe an; drept la apărare și contestare; sancțiunea este însoțită de măsuri de sprijin.",
      [
        "Elevii au dreptul la apărare și nu pot primi sancțiuni colective.",
        "Suspendarea este de maximum 5 zile lucrătoare o dată și maximum 15 zile într-un an școlar.",
        "Procedura trebuie să includă informare, intervievare, după caz manager de caz și posibilitatea contestării."
      ],
      [
        Q("Care dintre următoarele este interzisă în orice context?", ["Comunicarea scrisă a sancțiunii", "Mustrarea elevului în fața colectivului clasei sau al școlii", "Contestarea sancțiunii", "Consilierea elevului"], 1, "Legea interzice mustrarea în fața colectivului și sancțiunile colective."),
        Q("Care este durata maximă cumulată a suspendării într-un an școlar?", ["5 zile lucrătoare", "10 zile lucrătoare", "15 zile lucrătoare", "30 de zile calendaristice"], 2, "Un elev nu poate fi suspendat mai mult de 15 zile lucrătoare cumulat într-un an școlar."),
        Q("Ce garanție trebuie să conțină obligatoriu procedura de sancționare?", ["Aplicarea automată fără audiere", "Posibilitatea contestării sancțiunii", "Mustrarea publică", "Eliminarea dreptului la apărare"], 1, "Posibilitatea de contestare este una dintre garanțiile procedurale obligatorii.")
      ],
      "Art. 107 — Elevii răspund disciplinar cu respectarea dreptului la apărare și fără sancțiuni colective. Legea stabilește sancțiunile, limitele lor pe niveluri, comunicarea individuală și scrisă, durata suspendării și măsurile de sprijin. Procedura include informare, intervievare, consultarea managerului de caz când este necesar și posibilitatea contestării. Deteriorarea bunurilor atrage răspundere materială, cu regula specială privind manualele."
    ),
    L(
      108,
      "Bursele elevilor: art. 108 abrogat și art. 108¹ în vigoare",
      "10 min",
      "abrogare · art. 108¹ · merit · socială · tehnologică · confidențialitate · mame minore",
      "Regimul burselor trebuie învățat în forma aplicabilă, nu din versiunea inițială a legii. Articolul 108 a fost abrogat la 1 septembrie 2025. La aceeași dată a intrat în vigoare articolul 108¹, introdus prin Legea nr. 141/2025. Așadar, la concurs trebuie precizat clar: art. 108 este abrogat, iar cadrul curent se află la art. 108¹.\n\nElevii de la cursurile cu frecvență de zi din învățământul preuniversitar de stat obligatoriu beneficiază de burse. Metodologia-cadru și cuantumurile se aprobă prin hotărâre a Guvernului, inițiată de Ministerul Educației și Cercetării, la propunerea CNFÎP.\n\nSunt trei tipuri de burse de la bugetul de stat: bursa de merit, bursa socială și bursa tehnologică pentru elevii care frecventează învățământul profesional. În particular și confesional, statul poate acorda burse sociale elevilor școlarizați fără taxe și burse tehnologice elevilor din învățământul profesional care îndeplinesc condițiile metodologiei.\n\nBeneficiarii bursei sociale au dreptul la confidențialitatea identității, a datelor personale și a informațiilor despre situația de dificultate. Pentru familiile care primesc venit minim de incluziune, dreptul se stabilește pe baza deciziei și a listelor comunicate de agențiile pentru plăți și inspecție socială. În mod obișnuit, bursa socială poate depinde de venitul mediu net pe membru de familie. Excepțiile necondiționate de venit privesc, între altele, anumite situații medicale speciale, elevii școlarizați în Școala din Spital sau la domiciliu, elevii reveniți din Școala din Spital, copiii aflați sub măsură de protecție specială și elevii orfani de unul sau ambii părinți.\n\nSumele pentru burse sunt neimpozabile și nu se includ în calculul venitului pentru anumite beneficii sociale. Elevii pot primi și burse de la operatori economici, persoane juridice sau fizice ori autorități locale și județene, cumulabile cu bursele de stat. Elevii străini pot beneficia de burse potrivit legii. Mamele minore reintegrate în școală primesc o bursă lunară de 700 de lei în perioada activităților didactice, cu condiția frecventării cursurilor.\n\nFormula de memorare este: 108 abrogat; 108¹ activ din 1 septembrie 2025; trei burse — merit, socială, tehnologică; confidențialitate pentru bursa socială; 700 de lei pentru mama minoră reintegrată și prezentă la cursuri.",
      [
        "Art. 108 este abrogat de la 1 septembrie 2025; regimul actual este în art. 108¹.",
        "Bursele de stat sunt: de merit, socială și tehnologică pentru învățământul profesional.",
        "Mamele minore reintegrate primesc 700 lei/lună în perioada activităților didactice, cu condiția frecventării cursurilor."
      ],
      [
        Q("Care este situația juridică a art. 108 începând cu 1 septembrie 2025?", ["A rămas neschimbat", "A fost abrogat și înlocuit, în materie de burse, de art. 108¹", "Se aplică numai liceelor private", "A devenit metodologie"], 1, "Legea nr. 141/2025 a pus în vigoare art. 108¹ la 1 septembrie 2025 și a abrogat art. 108 la aceeași dată."),
        Q("Care sunt cele trei tipuri de burse prevăzute de art. 108¹ pentru sistemul de stat?", ["Excelență, reziliență și sportivă", "Merit, socială și tehnologică", "Socială, culturală și de transport", "Merit, olimpică I și olimpică II"], 1, "Art. 108¹ enumeră bursa de merit, bursa socială și bursa tehnologică pentru elevii din învățământul profesional."),
        Q("Ce drept au beneficiarii bursei sociale?", ["Publicarea obligatorie a situației familiei", "Confidențialitatea identității și a informațiilor privind dificultatea", "Scutirea automată de toate evaluările", "Alegerea cuantumului bursei"], 1, "Legea protejează identitatea, datele personale și informațiile privind situația de dificultate.")
      ],
      "Art. 108 — Abrogat la 1 septembrie 2025. Art. 108¹ — Elevii din învățământul de stat obligatoriu, la cursuri cu frecvență de zi, beneficiază de burse de merit, sociale și tehnologice. Metodologia și cuantumurile se aprobă prin hotărâre a Guvernului. Sunt reglementate confidențialitatea bursei sociale, excepțiile de la condiția de venit, cumulul cu alte burse, bursele elevilor străini și bursa de 700 lei/lună pentru mamele minore reintegrate și prezente la cursuri."
    ),
    L(
      109,
      "Reprezentarea elevilor",
      "6 min",
      "Consiliul Național al Elevilor · rol consultativ · consilii județene · consilii școlare · alegeri fără ingerință",
      "Articolul 109 reglementează reprezentarea elevilor. Consiliul Național al Elevilor este partener al Ministerului Educației și are rol consultativ în procesul decizional. Elevii pot fi reprezentați și prin alte asociații reprezentative la nivel național, tot cu rol consultativ. Consiliul Național al Elevilor funcționează pe baza unui regulament aprobat prin ordin al ministrului.\n\nStructura reprezentării este pe niveluri. La nivel național funcționează Consiliul Național al Elevilor. În fiecare județ există un consiliu județean al elevilor, iar în București Consiliul Municipal al Elevilor. În fiecare unitate de învățământ se constituie consiliul școlar al elevilor.\n\nAlegerile pentru funcțiile vacante din consiliile elevilor se organizează fără ingerința cadrelor didactice. Influențarea alegerilor constituie abatere disciplinară a personalului și se sancționează potrivit legii. Aceasta este o garanție a autenticității reprezentării elevilor.\n\nConsiliile județene și cel municipal sunt structuri partenere ale DJIP/DMBIP. La nivelul școlii trebuie să existe colaborare între consiliul școlar al elevilor, reprezentanții elevilor în consiliul de administrație și echipa de conducere. Ministerul și unitățile de învățământ au obligația de a sprijini activitatea Consiliului Național al Elevilor și a structurilor sale.\n\nFormula de memorare este: CNE — partener consultativ al ministerului; județean, municipal și școlar — structuri de reprezentare; alegeri fără ingerință; colaborare cu autoritățile și conducerea școlii.",
      [
        "Consiliul Național al Elevilor este partener consultativ al Ministerului Educației.",
        "În fiecare școală se constituie un consiliu școlar al elevilor.",
        "Influențarea alegerilor elevilor de către cadrele didactice constituie abatere disciplinară."
      ],
      [
        Q("Ce rol are Consiliul Național al Elevilor în raport cu Ministerul Educației?", ["Rol executiv", "Rol jurisdicțional", "Rol consultativ în procesul decizional", "Rol de inspecție financiară"], 2, "CNE este partener al Ministerului Educației, cu rol consultativ."),
        Q("Unde se constituie consilii școlare ale elevilor?", ["Numai în licee", "În fiecare unitate de învățământ preuniversitar", "Numai la nivel județean", "Exclusiv în București"], 1, "Art. 109 prevede consilii școlare ale elevilor în fiecare unitate de învățământ preuniversitar."),
        Q("Cum trebuie organizate alegerile pentru funcțiile din consiliul elevilor?", ["Sub conducerea directă a profesorilor", "Fără ingerința cadrelor didactice", "Numai prin numirea directorului", "Prin decizia consiliului local"], 1, "Alegerile trebuie să fie lipsite de ingerința cadrelor didactice; influențarea lor este abatere disciplinară.")
      ],
      "Art. 109 — Consiliul Național al Elevilor este partener consultativ al ministerului și funcționează după un regulament aprobat prin ordin. Are structuri județene, municipale și școlare. Alegerile se organizează fără ingerința cadrelor didactice, iar ministerul și școlile sprijină activitatea structurilor de reprezentare."
    ),
    L(
      110,
      "Centrele de excelență",
      "5 min",
      "performanțe înalte · centre județene · București · unități extrașcolare · personalitate juridică · coordonare metodologică",
      "Articolul 110 arată cadrul instituțional prin care statul sprijină elevii capabili de performanțe înalte. Activitățile pot fi organizate atât în unitățile de învățământ, cât și în centrele județene de excelență și în Centrul Municipiului București pentru Excelență. Organizarea și funcționarea acestor centre se aprobă prin ordin al ministrului educației.\n\nCentrele de excelență au statut de unități de educație extrașcolară cu personalitate juridică. Acest detaliu este important: ele nu sunt simple programe ale inspectoratului și nici structuri fără identitate proprie. Coordonarea lor metodologică este realizată de Centrul Național pentru Excelență.\n\nPentru director, articolul clarifică două niveluri: sprijinul direct se poate desfășura în școală și în centrul de excelență, iar unitatea națională asigură coordonarea metodologică. Formula de memorare este: școală plus centru județean sau al Bucureștiului; centru cu personalitate juridică; coordonare metodologică națională.",
      [
        "Sprijinul pentru performanță înaltă se organizează în școli și în centrele de excelență.",
        "Centrele de excelență sunt unități de educație extrașcolară cu personalitate juridică.",
        "Coordonarea metodologică aparține Centrului Național pentru Excelență."
      ],
      [
        Q("Unde se pot organiza activități pentru elevii capabili de performanțe înalte?", ["Numai în universități", "În școli și în centrele de excelență", "Exclusiv online", "Numai în cadrul ministerului"], 1, "Art. 110 permite activități atât în unitățile de învățământ, cât și în centrele de excelență."),
        Q("Ce statut au centrele de excelență?", ["Comisii temporare fără personalitate juridică", "Unități de educație extrașcolară cu personalitate juridică", "Societăți comerciale", "Structuri ale consiliului elevilor"], 1, "Centrele sunt unități de educație extrașcolară cu personalitate juridică."),
        Q("Cine coordonează metodologic centrele de excelență?", ["Consiliul local", "Fiecare părinte", "Centrul Național pentru Excelență", "Operatorii economici"], 2, "Coordonarea metodologică este realizată de Centrul Național pentru Excelență.")
      ],
      "Art. 110 — Statul sprijină elevii capabili de performanțe înalte prin activități în școli și în centrele județene de excelență/Centrul Municipiului București pentru Excelență. Centrele sunt unități extrașcolare cu personalitate juridică, organizate prin ordin și coordonate metodologic de Centrul Național pentru Excelență."
    ),
    L(
      111,
      "Programele și resursele pentru performanță înaltă",
      "6 min",
      "aprofundare · extindere · aptitudini · mentorat · accelerare · resurse · autorități locale",
      "Articolul 111 descrie ce se poate face concret pentru elevii capabili de performanțe înalte. În unitățile de învățământ și în centrele de excelență se pot desfășura activități suplimentare de învățare și programe adaptate particularităților, intereselor, potențialului și ritmului fiecărui elev.\n\nLegea enumeră mai multe tipuri de intervenții: aprofundarea și extinderea învățării din curriculumul național sau din alte domenii, dezvoltarea aptitudinilor specifice, mentoratul și transferul de competență, precum și accelerarea promovării potrivit ritmului individual. Prin urmare, excelența nu înseamnă doar pregătire pentru olimpiade, ci un traseu educațional diferențiat.\n\nResursele umane, curriculare, informaționale, materiale și financiare sunt asigurate de Ministerul Educației prin DJIP/DMBIP, potrivit normelor metodologice aprobate prin ordin. Administrațiile publice locale pot, la rândul lor, să susțină programele centrelor de excelență.\n\nFormula de memorare este: programe personalizate — aprofundare, aptitudini, mentorat, accelerare; resurse de la minister prin structurile județene; sprijin local posibil.",
      [
        "Programele se adaptează particularităților, intereselor, potențialului și ritmului elevului.",
        "Ele pot include aprofundare, extindere, aptitudini specifice, mentorat și accelerarea promovării.",
        "Ministerul asigură resursele prin DJIP/DMBIP; autoritățile locale pot sprijini programele."
      ],
      [
        Q("Care dintre următoarele poate face parte din programele pentru performanță înaltă?", ["Doar repetarea curriculumului fără adaptare", "Mentoratul și accelerarea promovării potrivit ritmului individual", "Excluderea activităților de aprofundare", "Numai activități administrative"], 1, "Art. 111 include mentorat, transfer de competență și accelerarea promovării, alături de aprofundare și extindere."),
        Q("Prin cine asigură Ministerul Educației resursele necesare?", ["Prin DJIP/DMBIP", "Numai prin primării", "Exclusiv prin consiliile elevilor", "Prin operatorii economici în mod obligatoriu"], 0, "Resursele sunt asigurate de minister prin DJIP/DMBIP, potrivit normelor metodologice."),
        Q("Pot administrațiile publice locale susține programele centrelor de excelență?", ["Nu, este interzis", "Da", "Numai cu aprobarea fiecărui elev", "Doar după desființarea centrului"], 1, "Legea prevede expres că administrațiile publice locale pot susține aceste programe.")
      ],
      "Art. 111 — Școlile și centrele de excelență pot organiza programe adaptate pentru elevii capabili de performanțe înalte: aprofundare, extindere, dezvoltarea aptitudinilor, mentorat, transfer de competență și accelerarea promovării. Ministerul asigură resursele prin DJIP/DMBIP, iar autoritățile locale pot susține programele."
    ),
    L(
      112,
      "Identificarea elevilor capabili de performanță înaltă",
      "7 min",
      "echipă multidisciplinară · obiectivitate · fidelitate · validitate · fiabilitate · instrumente · echitate",
      "Articolul 112 reglementează identificarea tinerilor capabili de performanță înaltă. Procesul este realizat de echipe formate din specialiști în domeniu, psihologi, pedagogi și profesori. Identificarea trebuie să respecte patru exigențe: obiectivitate, fidelitate, validitate și fiabilitate.\n\nExistă și o regulă de imparțialitate: membrii echipei care realizează identificarea nu pot desfășura activități de pregătire cu tinerii selectați. Astfel se evită suprapunerea dintre evaluator și persoana care beneficiază ulterior de selecție.\n\nIdentificarea nu se bazează pe o singură notă sau pe impresia unui profesor. Pot fi utilizate profiluri psihocomportamentale, studii de caz, ghiduri de nominalizare, chestionare, teste psihologice individuale și colective, teste de inteligență, creativitate și aptitudini speciale, analiza activității și a rezultatelor școlare, precum și alte instrumente elaborate de specialiști.\n\nPentru tinerii proveniți din medii socioeconomice dezavantajate, procedurile se adaptează specificului lor și implică reprezentanți ai comunității locale. Aceasta este o măsură de echitate: potențialul trebuie identificat și atunci când oportunitățile anterioare au fost limitate.\n\nFormula de memorare este: echipă multidisciplinară; patru criterii de calitate; evaluatorul nu pregătește elevul selectat; instrumente multiple; proceduri adaptate pentru mediile dezavantajate.",
      [
        "Identificarea este realizată de specialiști, psihologi, pedagogi și profesori.",
        "Membrii echipei de identificare nu pot pregăti tinerii selectați.",
        "Pentru mediile dezavantajate, procedurile se adaptează și implică reprezentanți ai comunității."
      ],
      [
        Q("Ce exigențe trebuie să respecte identificarea performanței înalte?", ["Rapiditate, popularitate și competiție", "Obiectivitate, fidelitate, validitate și fiabilitate", "Doar media generală", "Exclusiv recomandarea directorului"], 1, "Legea enumeră obiectivitatea, fidelitatea, validitatea și fiabilitatea."),
        Q("Pot membrii echipei de identificare să pregătească ulterior tinerii selectați?", ["Da, fără nicio limită", "Nu", "Numai dacă sunt diriginți", "Numai în vacanță"], 1, "Art. 112 interzice membrilor echipei de identificare să desfășoare pregătirea tinerilor selectați."),
        Q("Cum se procedează pentru tinerii din medii socioeconomice dezavantajate?", ["Se folosesc proceduri adaptate specificului lor și se implică reprezentanți ai comunității", "Sunt excluși din selecție", "Se ia în calcul numai venitul", "Nu se mai aplică niciun instrument"], 0, "Procedurile trebuie adaptate pentru a asigura identificarea echitabilă a potențialului.")
      ],
      "Art. 112 — Identificarea performanței înalte este realizată de echipe multidisciplinare și trebuie să fie obiectivă, fidelă, validă și fiabilă. Membrii echipei nu pot pregăti tinerii selectați. Se folosesc instrumente multiple, iar procedurile pentru mediile dezavantajate se adaptează cu implicarea comunității locale."
    ),
    L(
      113,
      "Olimpiadele, admiterea și accelerarea studiilor",
      "9 min",
      "competiții · burse · admitere fără examen · clasa a III-a · doi ani într-un an · excepție militară",
      "Articolul 113 reunește formele de sprijin și facilitățile pentru elevii capabili de performanțe înalte. Ministerul Educației organizează olimpiade, competiții școlare, extrașcolare și extracurriculare, tabere de profil, simpozioane și alte activități și poate acorda burse ori alte forme de sprijin material și financiar. Normele, inclusiv stimulentele pentru profesorii pregătitori și unitățile de proveniență ale premianților, se aprobă prin hotărâre a Guvernului.\n\nAbsolvenții clasei a VIII-a pot fi înscriși în clasa a IX-a fără Evaluarea Națională sau concursul de admitere dacă, pe parcursul gimnaziului, au obținut premiul I la etapa națională a olimpiadelor organizate și finanțate de minister ori premiile I, II sau III la competiții internaționale recunoscute de minister. Aplicarea concretă se face conform metodologiei aprobate prin ordin.\n\nElevii cu performanțe deosebite pot fi admiși fără examen și în învățământul superior, la filiera, profilul sau specializarea corespunzătoare olimpiadei ori competiției. Condițiile de performanță sunt aceleași repere principale: premiul I la etapa națională a olimpiadei finanțate de minister sau premiile I, II ori III la competițiile internaționale recunoscute. Corespondența dintre competiție și specializare se aprobă anual prin ordin.\n\nIdentificarea elevilor care vor urma programe în școli sau centre de excelență poate începe de la vârsta specifică clasei a III-a. Elevii capabili de performanțe înalte pot promova doi ani de studii într-un singur an școlar, potrivit metodologiei. Această posibilitate nu se aplică elevilor din unitățile sistemului de apărare, ordine publică și securitate națională.\n\nFormula de memorare este: competiții și sprijin; admitere fără examen pentru performanțe precise; identificare de la clasa a III-a; doi ani într-un an, cu excepția sistemului militar.",
      [
        "Premiul I la etapa națională sau premiile I–III la competiții internaționale pot permite admiterea fără examen, în condițiile metodologiei.",
        "Identificarea pentru programele de excelență poate începe de la vârsta clasei a III-a.",
        "Elevii pot promova doi ani într-un an, cu excepția unităților din sistemul de apărare, ordine publică și securitate națională."
      ],
      [
        Q("Care performanță poate permite înscrierea în clasa a IX-a fără Evaluarea Națională sau concurs?", ["Orice mențiune la o competiție locală", "Premiul I la etapa națională a unei olimpiade finanțate de minister sau premiile I–III la o competiție internațională recunoscută", "Media 9 la purtare", "Participarea la cercul școlar"], 1, "Legea stabilește expres aceste rezultate și trimite la metodologia de aplicare."),
        Q("De la ce nivel de vârstă poate începe identificarea pentru programele de excelență?", ["Clasa pregătitoare obligatoriu", "Clasa I", "Clasa a III-a", "Clasa a IX-a"], 2, "Identificarea poate începe de la nivelul de vârstă specific clasei a III-a."),
        Q("Cui nu i se aplică posibilitatea de a promova doi ani într-un an?", ["Elevilor de gimnaziu", "Elevilor din unitățile sistemului de apărare, ordine publică și securitate națională", "Elevilor olimpici internaționali", "Elevilor din mediul rural"], 1, "Excepția privește unitățile din sistemul de apărare, ordine publică și securitate națională.")
      ],
      "Art. 113 — Ministerul organizează competiții și activități pentru performanță și poate acorda sprijin material și financiar. Performanțele naționale și internaționale prevăzute de lege pot permite admiterea fără examen în clasa a IX-a sau în învățământul superior, conform metodologiilor. Identificarea poate începe de la clasa a III-a, iar promovarea a doi ani într-unul este posibilă, cu excepția sistemului militar."
    ),
    L(
      114,
      "Centrul Național pentru Excelență",
      "8 min",
      "organism al ministerului · fără personalitate juridică · coordonare · monitorizare · loturi olimpice · finanțare",
      "Articolul 114 definește Centrul Național pentru Excelență. Acesta este un organism de specialitate al Ministerului Educației, fără personalitate juridică. Să nu îl confundăm cu centrele județene de excelență, care, potrivit art. 110, sunt unități extrașcolare cu personalitate juridică.\n\nCentrul Național are rol de organizare și coordonare metodologică, monitorizare și evaluare a activităților pentru elevii capabili de performanțe înalte. El elaborează strategiile de identificare și selecție, inițiază acțiuni de identificare și promovare și coordonează metodologic centrele județene, centrul din București și unitățile de învățământ implicate.\n\nPrintre atribuții se află constituirea și pregătirea grupelor de excelență, dezvoltarea parteneriatelor cu instituții din țară și străinătate, organizații neguvernamentale și comunități locale, cercetarea didactică și conferințele, organizarea taberelor naționale și pregătirea loturilor olimpice naționale, județene și ale municipiului București. Centrul creează contexte în care elevii pot reflecta asupra transformărilor din domeniile lor de excelență și implică instituțiile de învățământ superior în programe.\n\nRegulamentul de organizare și funcționare se aprobă prin ordin al ministrului educației. Centrul Național sprijină centrele de excelență, iar finanțarea sa și a activităților centrelor de excelență se asigură din bugetul Ministerului Educației.\n\nFormula de memorare este: național — fără personalitate juridică, strategie și coordonare; județean — cu personalitate juridică, activitate directă; regulament prin ordin; finanțare din bugetul ministerului.",
      [
        "Centrul Național pentru Excelență este organism al ministerului fără personalitate juridică.",
        "El coordonează metodologic centrele și organizează inclusiv taberele și pregătirea loturilor olimpice.",
        "Regulamentul se aprobă prin ordin, iar finanțarea provine din bugetul Ministerului Educației."
      ],
      [
        Q("Ce statut are Centrul Național pentru Excelență?", ["Unitate școlară cu personalitate juridică", "Organism de specialitate al ministerului, fără personalitate juridică", "Societate comercială", "Structură a consiliului local"], 1, "Art. 114 îl definește ca organism de specialitate al Ministerului Educației, fără personalitate juridică."),
        Q("Care este una dintre atribuțiile Centrului Național pentru Excelență?", ["Stabilirea taxelor locale", "Coordonarea metodologică a centrelor de excelență și pregătirea loturilor olimpice", "Numirea tuturor directorilor de școli", "Aprobarea bugetelor consiliilor locale"], 1, "Coordonarea metodologică și organizarea pregătirii loturilor olimpice se află între atribuțiile centrului."),
        Q("Din ce sursă se finanțează Centrul Național și activitățile centrelor de excelență?", ["Exclusiv din taxele elevilor", "Din bugetul Ministerului Educației", "Numai din donații", "Din bugetul fiecărei familii"], 1, "Finanțarea se asigură din bugetul Ministerului Educației.")
      ],
      "Art. 114 — Centrul Național pentru Excelență este organism de specialitate al Ministerului Educației, fără personalitate juridică. El elaborează strategii, coordonează metodologic, monitorizează și evaluează activitățile de excelență, sprijină centrele, organizează tabere și pregătirea loturilor olimpice și dezvoltă parteneriate. Regulamentul se aprobă prin ordin, iar finanțarea se asigură din bugetul ministerului."
    )
  );
})();
