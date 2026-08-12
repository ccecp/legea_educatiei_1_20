"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–94: verificare 12.08.2026";
  DATA.modules.push({
    id: 8,
    title: "Curriculumul național",
    articles: "85–94",
    chapter: "Capitolul VI",
    startArticle: 85,
    endArticle: 94
  });

  DATA.lessons.push(
    L(
      85,
      "Finalități, competențe și curriculum național",
      "9 min",
      "competențe · plan individualizat · portofoliu · curriculum · metode active",
      "Articolul 85 pornește de la finalitatea principală a învățământului preuniversitar: formarea competențelor. Competența este înțeleasă ca un ansamblu multifuncțional și transferabil de cunoștințe, abilități și atitudini. Nu este suficient ca elevul să memoreze; el trebuie să poată utiliza ceea ce știe în contexte diferite.\n\nLegea leagă competențele de zece direcții majore: împlinirea și dezvoltarea personală; integrarea socială și participarea cetățenească; contribuția la o economie durabilă; formarea unei concepții de viață bazate pe valori umaniste și științifice, cultură națională și universală și dialog intercultural; respectarea demnității, toleranței și drepturilor fundamentale; etica și integritatea în selectarea, utilizarea și citarea surselor; sensibilitatea față de problematica umană și valorile moral-civice; adaptarea și participarea activă în contextul transformării digitale; utilizarea internetului în siguranță; și formarea unui stil de viață sănătos.\n\nFormarea competențelor trebuie susținută prin învățare colaborativă, inclusiv prin proiecte, prin rezolvarea de probleme, prin resurse educaționale online, prin tehnici și tehnologii inovative și prin abordări transdisciplinare, interdisciplinare sau pluridisciplinare. Aceste metode arată că elevul este participant activ la propria învățare.\n\nCadrele didactice realizează planuri individualizate de învățare. Planul pornește de la evaluările formative și sumative, ține seama de nevoile diferite ale elevului, valorifică experiențele anterioare, stabilește obiective imediate și pe termen lung și proiectează noi experiențe în funcție de nevoi, interese și ritm. El se dezvoltă prin interacțiunea dintre profesor, elev și părinte și devine parte a portofoliului educațional al elevului.\n\nCurriculumul național oferă oportunități prin care fiecare elev își poate valorifica potențialul. El este ansamblul coerent care reglementează activitatea didactică și include trei elemente: planurile-cadru de învățământ, programele școlare și standardele naționale de evaluare. Manualele școlare alternative și metodologiile specifice sunt instrumente de sprijin pentru aplicarea curriculumului.\n\nFormula de memorare este: competențe transferabile, metode active, plan individualizat, portofoliu și cele trei componente ale curriculumului — planuri-cadru, programe, standarde de evaluare.",
      [
        "Finalitatea principală este formarea competențelor: cunoștințe, abilități și atitudini transferabile.",
        "Planul individualizat se construiește prin profesor–elev–părinte și face parte din portofoliul educațional.",
        "Curriculumul național include planuri-cadru, programe școlare și standarde naționale de evaluare."
      ],
      [
        Q("Ce include curriculumul național, potrivit art. 85?", ["Numai manualele și auxiliarele", "Planurile-cadru, programele școlare și standardele naționale de evaluare", "Exclusiv programele opționale", "Numai planurile individualizate"], 1, "Cele trei componente sunt planurile-cadru, programele școlare și standardele naționale de evaluare."),
        Q("Unde este inclus planul individualizat de învățare?", ["În regulamentul intern", "În dosarul de personal al profesorului", "În portofoliul educațional al elevului", "Exclusiv în arhiva inspectoratului"], 2, "Art. 85 alin. (5) stabilește că planul individualizat este parte a portofoliului educațional al elevului."),
        Q("Ce tehnică este prevăzută pentru formarea competențelor?", ["Învățarea colaborativă, inclusiv bazată pe proiecte", "Repetarea mecanică exclusivă", "Eliminarea resurselor online", "Separarea strictă a disciplinelor"], 0, "Legea indică învățarea colaborativă, inclusiv prin proiecte, alături de rezolvarea problemelor și abordările interdisciplinare.")
      ],
      "Art. 85 — Finalitatea principală a învățământului preuniversitar este formarea competențelor, ca ansamblu transferabil de cunoștințe, abilități și atitudini. Cadrele didactice realizează planuri individualizate de învățare, parte a portofoliului educațional. Curriculumul național include planurile-cadru, programele școlare și standardele naționale de evaluare; manualele alternative și metodologiile specifice sprijină implementarea acestuia."
    ),
    L(
      86,
      "Planurile-cadru, trunchiul comun și CDEOȘ",
      "8 min",
      "plan-cadru · trunchi comun · CDEOȘ · consultare · consiliul de administrație",
      "Articolul 86 explică structura planurilor-cadru și modul de constituire a curriculumului la decizia elevului din oferta școlii, prescurtat CDEOȘ. Planurile-cadru prevăd disciplinele, domeniile de studiu, modulele de pregătire obligatorii și opționale, precum și bugetul de timp alocat. Ele se evaluează și se pot revizui periodic, dar modificările nu produc efecte în timpul anului școlar în curs.\n\nTrunchiul comun cuprinde disciplinele, domeniile de studiu și modulele obligatorii pentru toți elevii din învățământul primar, gimnazial și liceal, indiferent de filieră, profil ori specializare sau calificare. Trunchiul comun se stabilește la nivel central, prin ordin al ministrului educației.\n\nCDEOȘ este partea care permite alegerea elevului din oferta școlii, în funcție de propriile nevoi și interese de cunoaștere. Pentru învățământul primar, gimnazial și liceal, filierele teoretică și vocațională, oferta poate fi elaborată la nivel național, regional, local sau la nivelul unității de învățământ. Implementarea CDEOȘ este obligatorie. Activitățile pot reuni elevi din clase diferite și pot fi organizate modular.\n\nLa nivelul școlii, pentru învățământul primar, gimnazial și liceal teoretic sau vocațional, consiliul de administrație stabilește CDEOȘ după consultarea elevilor și a părinților sau reprezentanților legali și în funcție de resursele disponibile. Rețineți succesiunea: consultare, analiza resurselor, decizia consiliului de administrație.\n\nPentru liceul tehnologic, CDEOȘ este elaborat de unitatea de învățământ în parteneriat cu operatorii economici și cu autoritățile administrației publice locale. Scopul este adaptarea formării profesionale la nevoile locale ale pieței muncii, iar implementarea se realizează în cadrul stagiilor de pregătire practică, în limita orelor din planul-cadru. Proiectarea și aprobarea se stabilesc prin metodologii specifice aprobate prin ordin al ministrului.\n\nAplicarea art. 86 privind CDEOȘ a început din anul școlar 2025–2026, iar în 2026 a fost aprobată metodologia de aplicare prin Ordinul nr. 3.454/2026.\n\nFormula de memorare este: trunchiul comun se stabilește central; CDEOȘ pornește de la alegerea elevului; consiliul de administrație decide după consultare; pentru tehnologic, școala lucrează cu partenerii economici și autoritățile locale.",
      [
        "Trunchiul comun este obligatoriu și se stabilește central prin ordin al ministrului.",
        "Implementarea CDEOȘ este obligatorie și poate reuni elevi din clase diferite, inclusiv modular.",
        "Consiliul de administrație stabilește oferta după consultarea elevilor și părinților și în funcție de resurse."
      ],
      [
        Q("Cine stabilește CDEOȘ la nivelul unității pentru primar, gimnazial și liceal teoretic sau vocațional?", ["Consiliul de administrație, după consultare și în funcție de resurse", "Numai directorul", "Consiliul elevilor fără alte consultări", "Autoritatea locală în mod exclusiv"], 0, "Consiliul de administrație stabilește CDEOȘ după consultarea elevilor și părinților/reprezentanților legali și pe baza resurselor disponibile."),
        Q("Cum poate fi implementat CDEOȘ?", ["Numai cu elevii aceleiași clase și numai anual", "Opțional pentru școală și fără consultare", "Cu elevi din clase diferite și în sistem modular", "Exclusiv în afara programului școlar"], 2, "Implementarea este obligatorie, poate include elevi din clase diferite și poate avea organizare modulară."),
        Q("Cu cine elaborează liceul tehnologic CDEOȘ?", ["Numai cu părinții", "Cu operatorii economici și autoritățile administrației publice locale", "Exclusiv cu universitățile", "Numai cu Ministerul Muncii"], 1, "Parteneriatul cu operatorii economici și autoritățile locale adaptează formarea la piața muncii locală.")
      ],
      "Art. 86 — Planurile-cadru includ disciplinele, domeniile, modulele obligatorii și opționale și bugetul de timp. Trunchiul comun este obligatoriu și se stabilește central. CDEOȘ permite alegerea elevului, este obligatoriu de implementat, poate fi modular și poate reuni clase diferite. Consiliul de administrație stabilește oferta după consultare; în filiera tehnologică, aceasta se elaborează cu operatorii economici și autoritățile locale."
    ),
    L(
      87,
      "Disciplina Religie și opțiunea elevului",
      "5 min",
      "religie · trunchi comun · cerere scrisă · prezență în școală · avizul cultului",
      "Articolul 87 reglementează disciplina Religie. Planurile-cadru pentru învățământul primar, gimnazial și liceal includ Religia ca disciplină școlară, parte a trunchiului comun. Elevii care aparțin cultelor recunoscute de stat au dreptul constituțional de a participa la ora de religie potrivit propriei confesiuni, indiferent de numărul lor într-o unitate de învățământ.\n\nParticiparea nu este automată. Înscrierea la orele de religie se face prin cerere scrisă. Pentru elevul major, cererea este formulată de acesta; pentru elevul minor, de părinte sau reprezentantul legal. Schimbarea opțiunii se face tot prin cerere scrisă.\n\nDacă elevul nu frecventează orele de religie, situația sa școlară se încheie fără disciplina Religie. Aceeași regulă se aplică elevului căruia, din motive obiective, nu i-au putut fi asigurate condițiile necesare pentru frecventarea disciplinei. Pe durata orei, școala trebuie să îi asigure elevului prezența în unitatea de învățământ. Așadar, neparticiparea la Religie nu înseamnă că elevul poate fi lăsat fără supraveghere sau trimis automat în afara școlii.\n\nDisciplina poate fi predată numai de personal didactic calificat și avizat de cultul religios recunoscut oficial de stat. Condițiile sunt stabilite prin metodologia aprobată prin ordin al ministrului educației, iar Ministerul încheie protocoale de colaborare cu respectivele culte.\n\nFormula de memorare este: Religie în trunchiul comun, participare prin cerere scrisă, situație școlară fără Religie pentru neparticipanți, prezență asigurată în școală și profesor calificat cu avizul cultului.",
      [
        "Religia este parte a trunchiului comun în primar, gimnazial și liceal.",
        "Înscrierea și schimbarea opțiunii se fac prin cerere scrisă.",
        "Elevului care nu participă i se asigură prezența în școală pe durata cursurilor."
      ],
      [
        Q("Cum se realizează înscrierea elevului la orele de religie?", ["Automat, la înscrierea în școală", "Prin cerere scrisă a elevului major sau a părintelui/reprezentantului legal pentru minor", "Prin votul clasei", "Prin decizia exclusivă a dirigintelui"], 1, "Participarea se exprimă prin cerere scrisă, iar schimbarea opțiunii se face în aceeași formă."),
        Q("Cum se încheie situația școlară a elevului care nu frecventează Religia?", ["Cu media 10 din oficiu", "Cu mențiunea absent", "Fără disciplina Religie", "Prin amânarea situației școlare"], 2, "Pentru elevul care nu frecventează orele, situația școlară se încheie fără disciplina Religie."),
        Q("Ce condiție trebuie să îndeplinească profesorul de Religie?", ["Să fie doar membru al comunității locale", "Să fie calificat și avizat de cultul recunoscut oficial", "Să fie numit de consiliul elevilor", "Să predea fără aviz în primul an"], 1, "Legea cere atât calificarea didactică, cât și avizul cultului religios recunoscut oficial.")
      ],
      "Art. 87 — Religia este inclusă în trunchiul comun. Participarea se face prin cerere scrisă și opțiunea poate fi schimbată tot în scris. Pentru elevul care nu participă, situația școlară se încheie fără această disciplină, iar școala îi asigură prezența pe durata orei. Predarea este realizată de personal calificat și avizat de cultul recunoscut."
    ),
    L(
      88,
      "Programe școlare, discipline și teme obligatorii",
      "10 min",
      "programe școlare · discipline istorice · teme obligatorii · CDEOȘ · limba semnelor române",
      "Articolul 88 este unul dintre cele mai dense articole ale capitolului. El definește programele școlare ca documente curriculare reglatoare. Programele stabilesc oferta educațională pentru discipline, domenii de studiu și module de pregătire, în limita unui buget de timp și a unui parcurs școlar determinat, în concordanță cu planurile-cadru. Planurile-cadru și programele pentru disciplinele și modulele obligatorii sunt elaborate de instituțiile și organismele abilitate ale Ministerului Educației și se aprobă prin ordin al ministrului.\n\nÎn trunchiul comun al liceului sunt incluse două discipline: „Istoria evreilor. Holocaustul” și „Istoria comunismului din România”. Oferta națională de opționale pentru gimnaziu și liceu include disciplina modulară „Istoria, robia și deportarea romilor”. Pentru fiecare dintre aceste domenii, legea stabilește colaborarea Ministerului cu instituțiile de specialitate, atât pentru programe, manuale și materiale didactice, cât și pentru formarea profesorilor.\n\nArticolul enumeră teme care trebuie avute în vedere în mod obligatoriu în planurile-cadru și programele disciplinelor și modulelor obligatorii: educație pentru mediu și schimbări climatice, sănătate, primul ajutor, educație financiară, juridică, antreprenorială, tehnologică și rutieră, educație civică, istorie și civilizație locală, educație interculturală și pentru cetățenie democratică, egalitate de șanse, etică, gândire critică, oratorie și dezvoltare personală, cetățenie europeană, securitate cibernetică și alimentație sănătoasă. Aceste teme pot fi integrate în discipline și programe, fără ca legea să impună pentru fiecare o disciplină separată.\n\nPentru disciplinele CDEOȘ din învățământul primar, gimnazial și liceal teoretic sau vocațional, programele se pot elabora național ori la nivelul școlii. La elaborarea lor se consultă, după caz, consiliul profesoral, consiliul școlar al elevilor, structura asociativă a părinților, comunitatea locală și operatorii economici parteneri. Aprobarea aparține consiliului de administrație al școlii, în baza avizului de specialitate al comisiei pentru curriculum și după avizarea de către structura județeană competentă.\n\nPentru alternativele educaționale, reprezentanții alternativelor elaborează planurile și programele, iar Ministerul le aprobă prin ordin. În învățământul particular și confesional pot fi utilizate planurile și programele aprobate pentru sistemul național ori variante similare sau alternative aprobate prin ordin. Pentru învățământul teologic și confesional, documentele se elaborează de Minister în colaborare cu fiecare cult. Pentru învățământul militar se aplică regulile speciale ale art. 38.\n\nPlanurile-cadru și programele trebuie să respecte Legea limbii semnelor române și să prevadă pentru elevii surzi și sau hipoacuzici cel puțin două ore săptămânale de limba semnelor române.\n\nFormula de memorare este: programe reglatoare aprobate prin ordin, două discipline istorice obligatorii la liceu, o disciplină modulară opțională despre istoria romilor, teme transversale obligatoriu avute în vedere, CDEOȘ aprobat de CA și minimum două ore de LSR.",
      [
        "„Istoria evreilor. Holocaustul” și „Istoria comunismului din România” sunt în trunchiul comun liceal.",
        "Programele CDEOȘ elaborate la nivelul școlii sunt aprobate de consiliul de administrație, după avizele prevăzute de lege.",
        "Pentru elevii surzi și/sau hipoacuzici se prevăd cel puțin 2 ore săptămânale de LSR."
      ],
      [
        Q("Ce discipline istorice sunt incluse în trunchiul comun al liceului?", ["Istoria artei și Istoria Europei", "Istoria evreilor. Holocaustul și Istoria comunismului din România", "Istoria religiilor și Istoria ideilor", "Numai Istoria României"], 1, "Art. 88 alin. (3) include expres cele două discipline în trunchiul comun liceal."),
        Q("Cine aprobă programele CDEOȘ elaborate la nivelul unității, după avizele prevăzute de lege?", ["Consiliul de administrație al unității", "Consiliul local", "Consiliul școlar al elevilor", "Comisia de disciplină"], 0, "Aprobarea aparține consiliului de administrație, în baza avizului comisiei pentru curriculum și după avizarea structurii județene competente."),
        Q("Câte ore săptămânale de limba semnelor române trebuie prevăzute cel puțin pentru elevii surzi și/sau hipoacuzici?", ["O oră", "Două ore", "Trei ore", "Patru ore"], 1, "Legea prevede minimum două ore de predare săptămânal pentru LSR.")
      ],
      "Art. 88 — Programele școlare sunt documente curriculare reglatoare și se corelează cu planurile-cadru. Articolul reglementează disciplinele „Istoria evreilor. Holocaustul”, „Istoria comunismului din România” și opționalul modular „Istoria, robia și deportarea romilor”, temele obligatoriu avute în vedere, aprobarea programelor CDEOȘ, regulile pentru alternative, particular/confesional, militar și minimum două ore săptămânale de LSR pentru elevii surzi și/sau hipoacuzici."
    ),
    L(
      89,
      "Profilul absolventului și flexibilitatea 75%–25%",
      "5 min",
      "competențe europene · profilul absolventului · 75% · 25% · flexibilitate",
      "Articolul 89 leagă curriculumul național de competențele promovate la nivel european și internațional pentru învățarea pe tot parcursul vieții. Aceste competențe stau la baza profilului de formare al absolventului.\n\nProfilul de formare este o componentă reglatoare a curriculumului național. El funcționează ca referențial pentru trei procese: proiectarea curriculumului, implementarea lui și evaluarea rezultatelor. Profilul este aprobat prin ordin al ministrului educației și indică nivelurile preconizate de dobândire a competențelor, în funcție de stadiile de dezvoltare ale elevilor.\n\nO regulă foarte importantă pentru concurs este raportul 75%–25%. Pentru fiecare disciplină și domeniu de studiu, programa școlară acoperă 75% din orele de predare și evaluare. Restul de 25% din timpul alocat rămâne la dispoziția cadrului didactic. Această marjă permite adaptarea activității la nevoile clasei, consolidare, aprofundare, remediere sau activități de învățare adecvate contextului, fără a abandona programa.\n\nÎn situații justificate, Ministerul Educației poate modifica, pe o durată limitată și prin ordin al ministrului, numărul de ore alocat disciplinelor sau modulelor în planurile-cadru și ponderea orelor de predare, evaluare și învățare stabilită prin programă. Rețineți cele trei condiții: situație justificată, durată limitată și ordin al ministrului.\n\nFormula de memorare este: profilul absolventului reglează proiectarea, implementarea și evaluarea; programa ocupă 75%, profesorul dispune de 25%; modificarea temporară aparține Ministerului prin ordin.",
      [
        "Profilul absolventului este referențial pentru proiectarea, implementarea și evaluarea curriculumului.",
        "Programa acoperă 75% din ore, iar 25% rămâne la dispoziția cadrului didactic.",
        "Modificarea temporară se poate face în situații justificate, prin ordin al ministrului."
      ],
      [
        Q("Ce pondere din ore acoperă programa școlară pentru fiecare disciplină?", ["50%", "60%", "75%", "100%"], 2, "Programa acoperă 75% din orele de predare și evaluare."),
        Q("Ce reprezintă profilul de formare al absolventului?", ["Un referențial pentru proiectarea, implementarea și evaluarea curriculumului", "O fișă de post a directorului", "Un regulament al consiliului de administrație", "Un catalog al disciplinelor opționale"], 0, "Profilul absolventului este componentă reglatoare și referențial curricular."),
        Q("Cum poate Ministerul modifica temporar orele sau ponderile din programă?", ["Prin hotărârea fiecărui profesor", "Prin ordin al ministrului, în situații justificate și pe durată limitată", "Prin votul părinților", "Fără act administrativ"], 1, "Articolul cere o situație justificată, o durată limitată și un ordin al ministrului.")
      ],
      "Art. 89 — Curriculumul se raportează la competențele pentru învățarea pe tot parcursul vieții și la profilul absolventului. Programa acoperă 75% din orele disciplinei, iar 25% rămâne la dispoziția cadrului didactic. În situații justificate, Ministerul poate modifica temporar orele și ponderile prin ordin."
    ),
    L(
      90,
      "Curriculumul pentru educația timpurie",
      "4 min",
      "educație timpurie · dezvoltare integrală · intervenție timpurie · echipe multidisciplinare",
      "Articolul 90 se referă la curriculumul național pentru educația timpurie. Acesta este centrat pe dezvoltarea integrală a copilului în patru dimensiuni: fizică, cognitivă, emoțională și socială. În același timp, curriculumul urmărește remedierea timpurie a eventualelor întârzieri în dezvoltare. Ideea esențială este că intervenția nu trebuie amânată până când dificultățile devin stabile sau produc decalaje școlare mari.\n\nPentru copiii identificați cu abilități cognitive scăzute și sau cu dificultăți de adaptare socioemoțională raportate la vârstă și la nivelul de școlarizare, legea prevede echipe multidisciplinare. Aceste echipe se constituie la nivelul structurilor județene de învățământ, al CJRAE sau CMBRAE ori al altor structuri abilitate.\n\nEchipele au cinci roluri principale: evaluarea, depistarea, intervenția timpurie, asistența psihopedagogică și monitorizarea copiilor identificați. Constituirea și modul lor de funcționare se stabilesc prin ordin al ministrului educației.\n\nPentru memorare, legați articolul de expresia „dezvoltare integrală și intervenție timpurie”: fizic, cognitiv, emoțional, social; apoi evaluare, depistare, intervenție, asistență și monitorizare.",
      [
        "Curriculumul timpuriu vizează dezvoltarea fizică, cognitivă, emoțională și socială.",
        "Întârzierile în dezvoltare trebuie identificate și remediate timpuriu.",
        "Echipele multidisciplinare evaluează, depistează, intervin, asistă și monitorizează."
      ],
      [
        Q("Pe ce dimensiuni este centrat curriculumul pentru educația timpurie?", ["Numai pe dezvoltarea cognitivă", "Pe dezvoltarea fizică, cognitivă, emoțională și socială", "Exclusiv pe pregătirea profesională", "Numai pe activitatea fizică"], 1, "Art. 90 urmărește dezvoltarea integrală: fizică, cognitivă, emoțională și socială."),
        Q("Ce urmărește curriculumul în raport cu eventualele întârzieri în dezvoltare?", ["Remedierea timpurie", "Amânarea evaluării până la liceu", "Excluderea copilului din colectiv", "Doar informarea statistică"], 0, "Textul legii menționează expres remedierea timpurie a întârzierilor în dezvoltare."),
        Q("Prin ce act se stabilește funcționarea echipelor multidisciplinare?", ["Prin hotărârea consiliului elevilor", "Prin regulamentul fiecărei clase", "Prin ordin al ministrului educației", "Prin contractul educațional"], 2, "Constituirea și funcționarea echipelor multidisciplinare se stabilesc prin ordin al ministrului.")
      ],
      "Art. 90 — Curriculumul pentru educația timpurie este centrat pe dezvoltarea fizică, cognitivă, emoțională și socială și pe remedierea timpurie a întârzierilor. Echipele multidisciplinare realizează evaluarea, depistarea, intervenția timpurie, asistența psihopedagogică și monitorizarea, potrivit ordinului ministrului."
    ),
    L(
      91,
      "Cele opt competențe-cheie",
      "6 min",
      "literație · multilingvism · STEM · digital · personal-social · civic-juridic · antreprenorial · cultural",
      "Articolul 91 enumeră competențele-cheie pe care se axează curriculumul național pentru învățământul primar, gimnazial și liceal. Aceste competențe sunt promovate la nivel european și determină profilul de formare al elevului. Sunt opt grupe și merită învățate în ordinea legii.\n\nPrima este competența de citire, scriere și înțelegere a mesajului — baza alfabetizării funcționale. A doua este competența în multilingvism. A treia reunește competența matematică și competențele în științe, tehnologie și inginerie.\n\nA patra este competența digitală, care include explicit siguranța pe internet și securitatea cibernetică. A cincea este competența personală, socială și de a învăța să înveți. A șasea este competența civică, juridică și de protejare a mediului.\n\nA șaptea este competența antreprenorială, iar a opta este competența de sensibilizare și exprimare culturală.\n\nO formulă simplă de memorare este: mesaj, limbi, matematică și științe, digital, personal și social, civic și juridic, antreprenorial, cultural. Observați că legea actualizează competența digitală prin referirea directă la siguranța online și securitatea cibernetică și extinde dimensiunea civică spre domeniul juridic și protecția mediului.",
      [
        "Articolul enumeră 8 competențe-cheie.",
        "Competența digitală include siguranța pe internet și securitatea cibernetică.",
        "Competența civică include dimensiunea juridică și protejarea mediului."
      ],
      [
        Q("Câte grupe de competențe-cheie enumeră art. 91?", ["Șase", "Șapte", "Opt", "Zece"], 2, "Articolul enumeră opt competențe-cheie."),
        Q("Ce include în mod expres competența digitală?", ["Doar utilizarea unui procesor de text", "Siguranța pe internet și securitatea cibernetică", "Exclusiv programare avansată", "Numai accesul la rețele sociale"], 1, "Siguranța pe internet și securitatea cibernetică sunt menționate explicit."),
        Q("Cum este formulată competența civică?", ["Civică, juridică și de protejare a mediului", "Exclusiv electorală", "Civică și sportivă", "Juridică și financiară"], 0, "Legea reunește competența civică, dimensiunea juridică și protejarea mediului.")
      ],
      "Art. 91 — Curriculumul pentru primar, gimnazial și liceal se axează pe opt competențe-cheie: citire-scriere-înțelegere, multilingvism, matematică-științe-tehnologie-inginerie, digital, personal-social-a învăța să înveți, civică-juridică-protejarea mediului, antreprenorială și sensibilizare-exprimare culturală."
    ),
    L(
      92,
      "Clase intensive și bilingve",
      "6 min",
      "limbă modernă · intensiv · bilingv · CDEOȘ · ordin ministerial · modificare 2026",
      "Articolul 92 reglementează clasele cu predarea unei limbi moderne în regim intensiv sau bilingv. Aceste clase pot funcționa în unitățile de învățământ preuniversitar și se pot organiza începând cu învățământul primar.\n\nRegimul intensiv înseamnă că limba modernă se studiază cu cel puțin două ore mai mult decât numărul prevăzut în trunchiul comun prin planul-cadru. Orele suplimentare se alocă din curriculumul la decizia elevului din oferta școlii, CDEOȘ.\n\nRegimul bilingv presupune cel puțin trei ore în plus pentru limba modernă față de trunchiul comun, alocate tot din CDEOȘ. În forma actuală a legii, disciplinele care se studiază în limba modernă la clasele bilingve se stabilesc prin ordin al ministrului educației și cercetării, publicat în Monitorul Oficial.\n\nAici există o modificare importantă pentru concurs. Până în aprilie 2026, art. 92 alin. (4) prevedea că cel puțin o treime dintre disciplinele nonlingvistice se studiază în limba modernă respectivă. Prin OUG nr. 28/2026, regula a fost înlocuită: legea nu mai fixează direct fracția de o treime, ci trimite stabilirea disciplinelor la ordinul ministrului.\n\nFormula de memorare este: intensiv egal minimum două ore în plus; bilingv egal minimum trei ore în plus; ambele pornesc din primar și folosesc ore din CDEOȘ; disciplinele predate în limba modernă la bilingv se stabilesc prin ordin ministerial.",
      [
        "Clasele intensive și bilingve se pot organiza începând cu învățământul primar.",
        "Intensiv: minimum 2 ore în plus; bilingv: minimum 3 ore în plus, din CDEOȘ.",
        "Din aprilie 2026, disciplinele predate în limba modernă la bilingv se stabilesc prin ordin al ministrului."
      ],
      [
        Q("Cu câte ore în plus se studiază limba modernă în regim intensiv?", ["Cu cel puțin o oră", "Cu cel puțin două ore", "Cu cel puțin trei ore", "Cu exact patru ore"], 1, "Regimul intensiv presupune minimum două ore în plus față de trunchiul comun."),
        Q("Cu câte ore în plus se studiază limba modernă în regim bilingv?", ["Cu cel puțin două ore", "Cu exact două ore", "Cu cel puțin trei ore", "Cu cel puțin cinci ore"], 2, "Regimul bilingv presupune minimum trei ore în plus față de trunchiul comun."),
        Q("Cine stabilește, în forma actuală a legii, disciplinele studiate în limba modernă la clasele bilingve?", ["Fiecare elev, individual", "Consiliul local", "Ministrul educației și cercetării, prin ordin publicat în Monitorul Oficial", "Operatorul economic partener"], 2, "OUG nr. 28/2026 a înlocuit regula de o treime cu stabilirea disciplinelor prin ordin al ministrului.")
      ],
      "Art. 92 — Clasele intensive și bilingve se pot organiza din învățământul primar. Intensivul presupune minimum 2 ore suplimentare, iar bilingvul minimum 3 ore, alocate din CDEOȘ. În forma modificată prin OUG nr. 28/2026, disciplinele studiate în limba modernă la clasele bilingve se stabilesc prin ordin al ministrului publicat în Monitorul Oficial."
    ),
    L(
      93,
      "Manuale, auxiliare și resurse educaționale",
      "7 min",
      "manuale alternative · gratuitate · libertate profesională · resurse deschise · dispozitive digitale",
      "Articolul 93 reglementează manualele școlare alternative, auxiliarele didactice și resursele necesare învățării. În unitățile de stat, particulare și confesionale autorizate provizoriu sau acreditate se utilizează manuale alternative și auxiliare didactice aprobate de Ministerul Educației. Utilizarea lor se face potrivit metodologiei aprobate prin ordin al ministrului. În 2026 au fost aprobate metodologiile de aplicare la care articolul face trimitere.\n\nManualele alternative se elaborează și se evaluează pe baza programelor școlare aprobate de Minister. Modul în care manualele sunt asigurate elevilor se reglementează tot prin metodologii aprobate prin ordin.\n\nPersonalul didactic selectează și recomandă elevilor manuale alternative din lista celor aprobate de Ministerul Educației. Această alegere se bazează pe libertatea inițiativei profesionale, dar nu permite utilizarea ca manual școlar a unui material neaprobat.\n\nElevii și personalul didactic din învățământul de stat, precum și cei din învățământul obligatoriu particular acreditat sau autorizat și confesional beneficiază de manuale gratuite. Gratuitatea se aplică atât învățământului în limba română, cât și celui în limbile minorităților naționale, în condițiile legii.\n\nProfesorul poate selecta și utiliza la clasă materiale și auxiliare aprobate sau avizate de Minister și resurse educaționale deschise, pentru îmbunătățirea calității procesului educațional. Pentru învățământul de stat, Ministerul, prin structurile sale teritoriale, asigură elevilor și personalului didactic infrastructura și dispozitivele din sălile de clasă necesare accesării materialelor digitale de învățare.\n\nFormula de memorare este: Ministerul aprobă lista și metodologia; profesorul selectează în baza libertății profesionale; manualele sunt gratuite pentru categoriile prevăzute de lege; resursele deschise și infrastructura digitală sprijină învățarea.",
      [
        "Profesorul selectează manuale alternative din lista aprobată de Minister.",
        "Manualele sunt gratuite pentru elevii și profesorii din categoriile prevăzute de lege.",
        "Pot fi utilizate auxiliare aprobate/avizate și resurse educaționale deschise."
      ],
      [
        Q("Din ce listă selectează profesorul manualele alternative?", ["Din orice listă comercială", "Din lista manualelor aprobate de Ministerul Educației", "Numai din recomandările părinților", "Din lista stabilită de consiliul local"], 1, "Libertatea inițiativei profesionale se exercită în interiorul listei aprobate de Minister."),
        Q("Cine beneficiază de manuale gratuite potrivit art. 93?", ["Numai directorii", "Elevii și personalul didactic din învățământul de stat și din învățământul obligatoriu particular/confesional prevăzut de lege", "Numai elevii din clasele primare", "Exclusiv elevii care studiază în limba română"], 1, "Gratuitatea acoperă categoriile prevăzute de alin. (4), atât în limba română, cât și în limbile minorităților."),
        Q("Ce poate utiliza profesorul la clasă, în baza libertății profesionale?", ["Orice material, fără nicio condiție", "Materiale și auxiliare aprobate/avizate și resurse educaționale deschise", "Doar notițe personale", "Exclusiv manualul unic"], 1, "Legea permite auxiliare aprobate sau avizate și resurse educaționale deschise.")
      ],
      "Art. 93 — Manualele alternative și auxiliarele se aprobă și se utilizează potrivit metodologiilor ministeriale. Profesorul selectează manuale din lista aprobată, elevii și personalul prevăzut de lege beneficiază de gratuitate, iar la clasă pot fi folosite auxiliare aprobate/avizate și resurse educaționale deschise. Pentru învățământul de stat se asigură infrastructura și dispozitivele necesare materialelor digitale."
    ),
    L(
      94,
      "Bibliotecile școlare și centrele de documentare",
      "3 min",
      "bibliotecă școlară · bibliotecă virtuală · CDI · regulament · ordin ministerial",
      "Articolul 94 este scurt, dar fixează cadrul juridic pentru bibliotecile școlare și centrele de documentare și informare. În sfera sa intră bibliotecile școlare clasice, bibliotecile școlare virtuale susținute de Ministerul Educației și centrele de documentare și informare, cunoscute ca CDI.\n\nToate aceste structuri se organizează și funcționează pe baza unui regulament. Regulamentul nu este adoptat separat de fiecare școală ca unic temei, ci este aprobat prin ordin al ministrului educației. Unitatea de învățământ își poate organiza activitatea concretă cu respectarea acestui cadru național.\n\nPentru memorare, folosiți formula: bibliotecă fizică, bibliotecă virtuală, centru de documentare și informare — un singur cadru, regulament aprobat prin ordin al ministrului.",
      [
        "Articolul include bibliotecile școlare, inclusiv cele virtuale susținute de Minister.",
        "Sunt incluse și centrele de documentare și informare.",
        "Organizarea și funcționarea se bazează pe regulament aprobat prin ordin al ministrului."
      ],
      [
        Q("Ce structuri sunt reglementate de art. 94?", ["Numai bibliotecile universitare", "Bibliotecile școlare, inclusiv cele virtuale, și centrele de documentare și informare", "Exclusiv arhivele inspectoratelor", "Numai bibliotecile publice locale"], 1, "Articolul acoperă bibliotecile școlare fizice și virtuale și CDI-urile."),
        Q("Pe baza cărui document se organizează și funcționează aceste structuri?", ["A unui regulament", "A unui contract individual de muncă", "A statutului elevului", "A planului de școlarizare"], 0, "Organizarea și funcționarea se realizează pe baza unui regulament."),
        Q("Cum este aprobat regulamentul prevăzut la art. 94?", ["Prin hotărârea consiliului local", "Prin decizia bibliotecarului", "Prin ordin al ministrului educației", "Prin votul consiliului elevilor"], 2, "Regulamentul este aprobat prin ordin al ministrului educației.")
      ],
      "Art. 94 — Bibliotecile școlare, inclusiv cele virtuale susținute de Ministerul Educației, și centrele de documentare și informare se organizează și funcționează pe baza unui regulament aprobat prin ordin al ministrului educației."
    )
  );
})();
