"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–206: verificare 12.08.2026";
  DATA.modules.push({
    id: 16,
    title: "Personalul auxiliar și funcțiile de conducere",
    articles: "192–206",
    chapter: "Titlul III",
    startArticle: 192,
    endArticle: 206
  });

  DATA.lessons.push(
    L(
      192,
      "Categoriile personalului didactic auxiliar",
      "9 min",
      "funcții auxiliare · personal de sprijin · abordare integrată · metodologie",
      `Articolul 192 stabilește cine face parte din personalul didactic auxiliar. Lista este amplă și trebuie învățată pe familii de activități.

În zona informării și a documentării se află bibliotecarul, documentaristul și redactorul. În zona digitală și tehnică apar informaticianul, analistul programator, laborantul și tehnicianul. Pentru activitatea educativă și de sprijin sunt prevăzuți pedagogul școlar, instructorul de educație extrașcolară, asistentul social, corepetitorul și mediatorul școlar.

În administrarea unității intră secretarul, administratorul financiar sau contabilul și administratorul de patrimoniu. Lista cuprinde și instructorul-animator, funcțiile de referent din unitățile de învățământ și formare profesională nonuniversitară ale Ministerului Apărării Naționale, precum și auditorul, consilierul juridic, consilierul, expertul și referentul din structurile județene prevăzute de lege. În educația timpurie sunt menționate infirmierele și îngrijitoarele, iar pentru supravegherea internatelor apare supraveghetorul de noapte.

Articolul nu se limitează la această enumerare. Profesioniștii din sănătate, consiliere, evaluare sau terapie psihologică și asistență socială, care sprijină procesul educațional printr-o abordare integrată a nevoilor copilului sau adolescentului, sunt încadrați în sistem cu statut de personal didactic auxiliar. Procedura și criteriile de selecție a acestor profesioniști se stabilesc prin metodologie aprobată prin ordin al ministrului.

Pentru concurs, rețineți diferența dintre personalul didactic de predare și personalul didactic auxiliar. Articolul 192 definește categoriile auxiliare, iar articolul 193 stabilește condițiile de studii pentru ocuparea lor.`,
      [
        "Art. 192 enumeră funcțiile didactice auxiliare și include profesioniști din domenii de sprijin.",
        "Secretarul, administratorul financiar și administratorul de patrimoniu sunt personal didactic auxiliar.",
        "Profesioniștii din sănătate, psihologie și asistență socială pot avea statut de personal didactic auxiliar.",
        "Procedura de selecție a profesioniștilor de sprijin se aprobă prin ordin al ministrului."
      ],
      [
        Q("Care dintre următoarele funcții este didactică auxiliară potrivit art. 192?", ["Administrator financiar","Primar","Prefect","Consilier local"], 0, "Administratorul financiar, denumit și contabil, este inclus expres în lista personalului didactic auxiliar."),
        Q("Ce statut au profesioniștii din sănătate, psihologie și asistență socială încadrați pentru sprijinirea integrată a elevului?", ["Personal didactic auxiliar","Personal ales local","Exclusiv voluntari","Personal militar"], 0, "Art. 192 alin. (2) le recunoaște statutul de personal didactic auxiliar."),
        Q("Prin ce act se stabilesc procedura și criteriile de selecție a profesioniștilor de sprijin?", ["Prin hotărârea consiliului elevilor","Prin metodologie aprobată prin ordin al ministrului educației","Prin dispoziția primarului","Prin contractul colectiv, exclusiv"], 1, "Alineatul (3) trimite la o metodologie aprobată prin ordin al ministrului educației.")
      ],
      "Art. 192 — Enumeră funcțiile personalului didactic auxiliar și acordă același statut profesioniștilor din domenii fundamentale ale dezvoltării copilului, selectați potrivit metodologiei aprobate prin ordin al ministrului."
    ),
    L(
      193,
      "Condițiile de studii pentru personalul didactic auxiliar",
      "12 min",
      "studii de profil · bacalaureat · formare profesională · mediator școlar · funcții noi",
      `Articolul 193 leagă fiecare funcție didactică auxiliară de un nivel sau domeniu de studii. Nu este util să memorați toate condițiile ca pe o singură listă; grupați-le după natura postului.

Pentru bibliotecar, documentarist și redactor sunt prevăzute studii de profil în biblioteconomie, la nivel superior, postliceal sau liceal. Pot fi angajați pe perioadă determinată și alți absolvenți cu diplomă, dacă au urmat un curs de inițiere în domeniu. Informaticianul trebuie să absolve o instituție de învățământ superior ori o unitate preuniversitară de profil. Pentru laborant sunt acceptate studii superioare, postliceale sau liceale în domeniu, iar pentru tehnician sunt cerute studii postliceale sau liceale în domeniu ori în profilul postului, completate, după caz, cu un curs de inițiere.

Pedagogul școlar trebuie să fie absolvent de liceu cu bacalaureat. Instructorul de educație extrașcolară poate proveni din învățământ superior, postliceal de specialitate, liceu pedagogic sau alt liceu. Asistentul social trebuie să aibă studii superioare acreditate în asistență socială, iar corepetitorul, liceu de specialitate.

Pentru mediatorul școlar există mai multe rute: licență în orice specializare; liceu pedagogic, specializarea mediator școlar, cu bacalaureat; sau orice profil liceal cu bacalaureat, urmat de un curs recunoscut de minister. În comunitățile cu populație romă semnificativă, unde nu există mediator care să îndeplinească regula generală, legea permite, prin excepție, absolvirea cel puțin a clasei a XII-a sau a XIII-a fără bacalaureat, urmată de cursul de formare recunoscut.

Secretarul trebuie să aibă liceu cu bacalaureat, învățământ postliceal de tehnician în activități de secretariat sau studii superioare. Administratorul financiar și administratorul de patrimoniu trebuie să îndeplinească cerințele legislației pentru contabil sau contabil-șef, respectiv pentru inginer, subinginer ori economist. Supraveghetorul de noapte are nevoie de liceu cu bacalaureat.

Pentru funcțiile reglementate prin legislație specială, condițiile sunt stabilite de actele care guvernează activitatea. Pentru informatician și analist programator, studiile, vechimea și competențele se stabilesc prin ordin al ministrului. Ministerul Educației, împreună cu ministerul muncii, poate propune noi funcții didactice auxiliare, care se reglementează prin hotărâre a Guvernului.`,
      [
        "Pedagogul școlar și supraveghetorul de noapte au nevoie de liceu cu bacalaureat.",
        "Mediatorul școlar are mai multe rute de calificare și o excepție pentru anumite comunități rome.",
        "Condițiile pentru informatician și analist programator se detaliază prin ordin al ministrului.",
        "Noi funcții didactice auxiliare pot fi stabilite prin hotărâre a Guvernului."
      ],
      [
        Q("Ce condiție de studii este prevăzută pentru pedagogul școlar?", ["Liceu absolvit cu examen de bacalaureat","Exclusiv doctorat","Numai școala generală","Orice curs de o zi"], 0, "Art. 193 alin. (1) lit. e) cere absolvirea liceului cu examen de bacalaureat."),
        Q("Care este una dintre rutele generale pentru funcția de mediator școlar?", ["Orice liceu cu bacalaureat, urmat de un curs recunoscut de minister","Numai studii militare","Exclusiv master în drept","Fără nicio formare"], 0, "Legea permite această rută, alături de licență și liceul pedagogic în specializarea mediator școlar."),
        Q("Prin ce act pot fi stabilite și reglementate noi funcții didactice auxiliare?", ["Prin hotărâre a Guvernului","Prin votul unei clase","Printr-o notă de serviciu","Prin decizia unui elev"], 0, "Ministerul Educației și ministerul muncii pot propune stabilirea lor prin hotărâre a Guvernului.")
      ],
      "Art. 193 — Stabilește condițiile de studii pentru funcțiile didactice auxiliare, excepția privind mediatorul școlar și mecanismul de reglementare a unor funcții noi."
    ),
    L(
      194,
      "Profilul managerului și funcțiile de conducere, îndrumare și control",
      "10 min",
      "profil profesional · formare managerială · mentor · Corpul Managerilor · regim tranzitoriu",
      `Articolul 194 așază managementul școlar pe baza unor standarde profesionale. Recrutarea, încadrarea, formarea și evaluarea persoanelor care conduc unitățile de învățământ se raportează la profilul profesional al managerului școlar, aprobat prin ordin al ministrului educației.

Legea enumeră funcțiile de conducere, îndrumare și control: director general și director general adjunct la nivelul structurilor județene prevăzute de noua arhitectură; directori ai birourilor județene ale agenției pentru calitate și ai caselor corpului didactic; inspectori școlari; iar la nivelul unității de învățământ sau al unității de educație extrașcolară, director și director adjunct.

Directorul și directorul adjunct au obligația de a urma, în primul an al fiecărui mandat, un program de formare profesională în management școlar. Îndeplinirea acestei obligații constituie criteriu de evaluare managerială. Programul este furnizat de centrul național prevăzut de lege, inclusiv prin casele corpului didactic sau prin furnizori acreditați.

Persoana aflată la primul mandat este consiliată de un mentor pentru management educațional. Legea prevede Corpul Managerilor Educaționali, alcătuit din acești mentori și coordonat de minister. Corpul are rol în dezvoltarea politicilor publice, mentorat, monitorizarea conduitei etice și colaborarea pentru formarea continuă a personalului de conducere, îndrumare și control.

O precizare esențială pentru anul 2026: art. 116–119, care instituie noua arhitectură DJIP/DMBIP, ARACIIP și CNFDCD, sunt prorogate până la începutul anului școlar 2027–2028. În perioada tranzitorie funcționează inspectoratele școlare, ARACIP și casele corpului didactic, iar denumirile din art. 194 descriu arhitectura-țintă a legii. Funcțiile enumerate nu sunt funcții publice în sensul Codului administrativ.`,
      [
        "Managementul școlar se raportează la profilul profesional aprobat prin ordin al ministrului.",
        "Formarea în management școlar este obligatorie în primul an al fiecărui mandat.",
        "Directorul aflat la primul mandat beneficiază de mentorat.",
        "În 2026, structurile noi sunt încă prorogate; funcționează instituțiile tranzitorii."
      ],
      [
        Q("Când trebuie directorul să urmeze programul de formare în management școlar?", ["În primul an al fiecărui mandat","Numai după pensionare","În ultimul an de studii liceale","Nu există nicio obligație"], 0, "Art. 194 alin. (4) stabilește obligația pentru primul an al fiecărui mandat managerial."),
        Q("Cine îl sprijină pe directorul aflat la primul mandat?", ["Un mentor pentru management educațional","Exclusiv un elev ales","Un notar, în toate cazurile","Nicio persoană"], 0, "Legea prevede consilierea de către un mentor pentru management educațional."),
        Q("Care este situația structurilor DJIP/DMBIP, ARACIIP și CNFDCD în anul 2026?", ["Aplicarea dispozițiilor de înființare este prorogată până la începutul anului școlar 2027–2028","Au fost desființate definitiv prin art. 194","Funcționează din 2011 fără întrerupere","Sunt societăți comerciale"], 0, "Legea nr. 141/2025 a prorogat art. 116–119 până la începutul anului școlar 2027–2028.")
      ],
      "Art. 194 — Reglementează profilul managerului, funcțiile de conducere, formarea managerială, mentoratul și Corpul Managerilor Educaționali; se aplică împreună cu regimul tranzitoriu al structurilor județene."
    ),
    L(
      195,
      "Directorul și conducerea executivă a unității",
      "12 min",
      "reprezentant legal · ordonator de credite · CA · raportul calității · decizii",
      `Articolul 195 este un articol central pentru concurs. Regula de bază este că directorul exercită conducerea executivă a unității de învățământ. În unitățile cu predare integrală în limba unei minorități, directorul trebuie să cunoască limba respectivă. Dacă unitatea are doar secții cu predare sau studiu în limba minorității, cel puțin unul dintre directori trebuie să o cunoască. Numirea se face cu consultarea organizației care reprezintă minoritatea în Parlament sau, dacă nu există reprezentare parlamentară, a Grupului parlamentar al minorităților naționale.

Directorul este reprezentantul legal și ordonatorul de credite al unității. Împreună cu consiliul de administrație, își asumă răspunderea publică pentru performanțele școlii. El propune consiliului de administrație spre aprobare regulamentul de organizare și funcționare, proiectul de buget și raportul de execuție bugetară. Observați verbul: directorul propune, iar consiliul de administrație aprobă.

În domeniul resurselor umane, directorul răspunde, după caz, de selecția, angajarea, evaluarea periodică, formarea, motivarea și încetarea raporturilor de muncă. El îndeplinește atribuțiile stabilite legal și pe cele stabilite de consiliul de administrație în limitele legii.

Directorul prezintă anual raportul asupra calității educației. Raportul este prezentat consiliului profesoral, consiliului școlar al elevilor, consiliului reprezentativ al părinților și conducerii asociației de părinți, dacă există. Este adus la cunoștința autorității locale și structurii județene și este publicat pe site-ul unității.

Directorul coordonează colectarea datelor statistice, propune consiliului de administrație obiectivele privind asigurarea calității și colaborează cu elevii, părinții și federațiile sindicale. În exercitarea atribuțiilor emite decizii și note de serviciu. În liceele militare, atribuțiile prevăzute pentru directorul unității de stat sunt exercitate de comandant. Pentru unitățile particulare și confesionale, structurile, atribuțiile și mandatele sunt stabilite prin regulamente proprii, în concordanță cu legea.`,
      [
        "Directorul exercită conducerea executivă, este reprezentant legal și ordonator de credite.",
        "Directorul propune, iar consiliul de administrație aprobă regulamentul și bugetul.",
        "Raportul anual asupra calității este prezentat organismelor reprezentative și publicat pe site.",
        "Directorul emite decizii și note de serviciu."
      ],
      [
        Q("Cine aprobă regulamentul de organizare și funcționare propus de director?", ["Consiliul de administrație","Consiliul elevilor, exclusiv","Primarul, în toate cazurile","Bibliotecarul"], 0, "Directorul propune regulamentul, iar consiliul de administrație îl aprobă."),
        Q("Ce calitate financiară are directorul unității de învățământ de stat?", ["Ordonator de credite al unității","Auditor extern obligatoriu","Trezorier al consiliului local","Casier al asociației de părinți"], 0, "Art. 195 alin. (2) lit. b) îl definește ca ordonator de credite al unității."),
        Q("Unde trebuie publicat raportul anual asupra calității educației?", ["Pe site-ul unității de învățământ","Numai într-un registru secret","Exclusiv pe pagina primăriei","Nu se publică"], 0, "Raportul este prezentat organismelor prevăzute de lege, comunicat autorităților și postat pe site-ul unității.")
      ],
      "Art. 195 — Stabilește conducerea executivă și atribuțiile directorului, relația cu consiliul de administrație, raportarea asupra calității și actele emise în exercitarea funcției."
    ),
    L(
      196,
      "Concursul pentru director și director adjunct",
      "15 min",
      "evaluare de competențe · probă scrisă · interviu · condiții · mandat 4 ani · contracte",
      `Articolul 196 descrie procedura de recrutare și selecție pentru directorii și directorii adjuncți din unitățile de stat. Procesul are trei etape, în această ordine: evaluarea de competențe, proba scrisă și interviul.

La evaluarea de competențe se testează capacitățile și aptitudinile personale ale candidatului. Evaluarea este realizată de comisia de concurs împreună cu specialiști în psihometrie. Proba scrisă verifică elementele stabilite prin metodologie. La interviu sunt evaluate capacitățile și aptitudinile personale, precum și calitatea planului managerial și a planului de acțiune.

Recrutarea se face prin concurs național, organizat la nivel județean sub coordonarea Ministerului Educației, potrivit metodologiei aprobate prin ordin al ministrului. În perioada tranzitorie, atribuțiile structurilor județene sunt exercitate de inspectoratele școlare. Metodologia concursului din 2026 este aprobată prin Ordinul nr. 4.155/2026 și trebuie citită împreună cu legea.

Poate participa personalul didactic de predare titular în învățământul preuniversitar care îndeplinește cumulativ patru condiții: are diplomă de licență sau atestat de echivalare; are cel puțin 5 ani vechime în învățământ; nu a fost condamnat pentru fapte incompatibile cu funcția didactică; și, pentru învățământul vocațional teologic, a obținut avizul cultului.

Câștigătorul este numit pentru 4 ani și încheie contract de management educațional cu conducătorul structurii județene. Directorul supune avizării consiliului de administrație și apoi aprobării primarului planul de management administrativ-financiar pentru mandat și încheie cu primarul contractul corespunzător. Conținutul celor două contracte se aprobă prin ordin al ministrului și include indicatori de performanță adaptați unității și obiectivelor naționale și locale.

Autoritatea publică locală evaluează anual respectarea planului de management administrativ-financiar și poate propune eliberarea directorului. Hotărârea finală aparține structurii județene competente.`,
      [
        "Cele trei etape sunt: evaluare de competențe, probă scrisă și interviu.",
        "Candidatul trebuie să fie titular, să aibă licență și minimum 5 ani vechime.",
        "Mandatul directorului și al directorului adjunct este de 4 ani.",
        "Există contract de management educațional și contract de management administrativ-financiar."
      ],
      [
        Q("Care este prima etapă a procedurii de recrutare și selecție prevăzute la art. 196?", ["Evaluarea de competențe","Interviul","Numirea directă","Evaluarea medicală"], 0, "Ordinea legală este: evaluare de competențe, probă scrisă, interviu."),
        Q("Ce vechime minimă în învățământ trebuie să aibă candidatul la funcția de director?", ["5 ani","1 an","10 ani în toate cazurile","20 de ani"], 0, "Art. 196 alin. (3) cere o vechime de cel puțin 5 ani."),
        Q("Care este durata mandatului obținut prin concurs?", ["4 ani","6 luni","Exact 10 ani","Pe viață"], 0, "Directorul și directorul adjunct câștigători sunt numiți pentru o perioadă de 4 ani.")
      ],
      "Art. 196 — Reglementează cele trei etape ale concursului, condițiile cumulative de participare, mandatul de 4 ani și contractele de management."
    ),
    L(
      197,
      "Evaluarea medicală pentru contractul de management",
      "3 min",
      "apt medical · condiție prealabilă · funcție vizată",
      `Articolul 197 conține o condiție simplă, dar obligatorie: contractul de management educațional poate fi încheiat numai după prezentarea unei evaluări medicale care atestă că persoana este aptă pentru funcția vizată.

Nu este o etapă de concurs distinctă în sensul art. 196, ci o condiție prealabilă încheierii contractului de management educațional după promovarea procedurii. Evaluarea trebuie să privească aptitudinea medicală pentru funcția concretă.

Formula de memorare este: promovarea concursului nu înlocuiește aptitudinea medicală; fără evaluarea medicală favorabilă nu se poate încheia contractul de management educațional.`,
      [
        "Evaluarea medicală este obligatorie înaintea contractului de management educațional.",
        "Documentul trebuie să ateste aptitudinea pentru funcția vizată.",
        "Art. 197 se aplică după selecție și înainte de încheierea contractului."
      ],
      [
        Q("Când poate fi încheiat contractul de management educațional?", ["Numai după prezentarea evaluării medicale care atestă aptitudinea","Înaintea oricărei evaluări","Fără nicio condiție","Numai după pensionare"], 0, "Art. 197 condiționează contractul de o evaluare medicală favorabilă."),
        Q("Ce trebuie să ateste evaluarea medicală?", ["Că persoana este aptă pentru funcția vizată","Că persoana locuiește în județ","Că a publicat o carte","Că este membră a consiliului local"], 0, "Evaluarea privește aptitudinea pentru funcția de management vizată."),
        Q("Este evaluarea medicală una dintre cele trei probe enumerate la art. 196 alin. (1)?", ["Nu; este condiție pentru încheierea contractului","Da; înlocuiește proba scrisă","Da; înlocuiește interviul","Da; este singura probă"], 0, "Art. 196 enumeră evaluarea de competențe, proba scrisă și interviul; art. 197 reglementează condiția medicală pentru contract.")
      ],
      "Art. 197 — Contractul de management educațional poate fi încheiat numai după prezentarea evaluării medicale care confirmă aptitudinea pentru funcție."
    ),
    L(
      198,
      "Comisia, validarea, eliberarea din funcție și interimatul",
      "13 min",
      "comisie · observatori · validare · 2/3 · audit · detașare interimară",
      `Articolul 198 reglementează organizarea comisiei de concurs, validarea rezultatelor, situațiile de eliberare din funcție și conducerea interimară.

Comisia pentru directorul sau directorul adjunct al unei unități ori al unei unități de educație extrașcolară este numită de structura județeană competentă. Pentru funcțiile de conducere din Palatul Național al Copiilor, comisia este constituită la nivelul ministerului, prin ordin al ministrului.

Componența se stabilește prin metodologia aprobată prin ordin. Din comisie fac parte și reprezentanți ai mediului economic și de afaceri. Participă ca observatori reprezentanți ai federațiilor sindicale reprezentative, un reprezentant al elevilor desemnat de Consiliul Național al Elevilor și un reprezentant desemnat de federațiile reprezentative ale asociațiilor de părinți.

Consiliul de administrație al structurii județene validează rezultatele, iar conducătorul acesteia emite decizia de numire. Directorul sau directorul adjunct numit în urma concursului poate fi eliberat: la propunerea motivată a conducătorului structurii județene, cu avizul consiliului său de administrație; la propunerea motivată a două treimi dintre membrii consiliului de administrație al școlii; la propunerea consiliului profesoral, cu vot secret de două treimi, situație în care auditul structurii județene este obligatoriu; sau pentru încălcarea cu vinovăție a obligațiilor contractului de management, după cercetare disciplinară.

În unitatea particulară sau confesională, directorul poate fi eliberat la propunerea consiliului de administrație, cu votul a două treimi, prin decizia persoanei juridice fondatoare.

La vacantarea funcției, interimatul este asigurat până la concurs, dar nu mai târziu de sfârșitul anului școlar, de un cadru didactic titular numit prin detașare în interesul învățământului. Sunt necesare decizia conducătorului structurii județene, avizul consiliului său de administrație și acordul scris al persoanei solicitate.`,
      [
        "În comisie intră și reprezentanți ai mediului economic și de afaceri.",
        "Sindicatele, elevii și părinții au reprezentanți cu statut de observator.",
        "Propunerea consiliului profesoral cere vot secret de 2/3 și audit obligatoriu.",
        "Interimatul se realizează prin detașarea unui titular, cu acord scris, cel târziu până la sfârșitul anului școlar."
      ],
      [
        Q("Ce majoritate este necesară pentru propunerea consiliului profesoral de eliberare a directorului?", ["Două treimi, prin vot secret","Majoritate de un vot, public","Unanimitatea elevilor","Nu este necesar vot"], 0, "Art. 198 alin. (4) lit. c) cere votul secret a 2/3 dintre membrii consiliului profesoral."),
        Q("Ce măsură este obligatorie după propunerea consiliului profesoral de eliberare?", ["Un audit realizat de structura județeană","Desființarea școlii","Un referendum local","Suspendarea tuturor cursurilor"], 0, "În această situație, legea impune realizarea auditului."),
        Q("Cum se asigură, ca regulă, conducerea interimară după vacantarea funcției?", ["Prin detașarea în interesul învățământului a unui cadru didactic titular, cu acord scris","Prin alegerea unui elev","Prin numirea automată a primarului","Prin tragere la sorți"], 0, "Art. 198 alin. (6) stabilește această soluție până la concurs, fără depășirea sfârșitului anului școlar.")
      ],
      "Art. 198 — Reglementează comisia și observatorii, validarea, cazurile de eliberare din funcție și conducerea interimară prin detașare."
    ),
    L(
      199,
      "Conducerea structurilor județene și funcțiile de control",
      "10 min",
      "director general · proiect managerial · grad I · 10 ani · mandat 4 ani · evaluare anuală",
      `Articolul 199 privește ocuparea funcțiilor de director general și director general adjunct ale structurilor județene din arhitectura nouă a legii. Concursul este organizat de Ministerul Educației și are trei etape: probă scrisă, evaluarea proiectului managerial depus de candidat și interviu în fața comisiei.

Se poate înscrie personalul didactic de predare titular care are diplomă de licență, gradul didactic I, cel puțin 10 ani vechime în învățământ și nu a fost condamnat pentru fapte incompatibile cu funcția didactică. Condițiile sunt cumulative.

Metodologia se aprobă prin ordin al ministrului. Câștigătorii sunt numiți pentru 4 ani, prin ordin al ministrului, și încheie contract de management cu ministrul educației. Evaluarea lor este anuală și se raportează la clauzele contractului de management.

Articolul se referă și la personalul de îndrumare și control care a promovat concursul: numirea se face prin decizia directorului general, cu avizul ministerului, pentru 4 ani, iar persoana încheie contract de management cu directorul general.

În 2026, dispozițiile privind înființarea noilor structuri județene sunt prorogate până la începutul anului școlar 2027–2028. De aceea, pentru pregătirea concursului trebuie să distingeți între modelul instituțional stabilit de art. 199 și inspectoratele școlare care funcționează în perioada tranzitorie.`,
      [
        "Concursul cuprinde probă scrisă, proiect managerial și interviu.",
        "Sunt cerute licență, gradul I și minimum 10 ani vechime.",
        "Mandatul este de 4 ani, iar evaluarea este anuală.",
        "Structurile județene noi sunt încă în regim de prorogare în 2026."
      ],
      [
        Q("Ce grad didactic trebuie să dețină candidatul la funcția de director general al structurii județene?", ["Gradul didactic I","Numai definitivatul","Niciun grad","Gradul didactic II este suficient în toate cazurile"], 0, "Art. 199 alin. (2) cere gradul didactic I."),
        Q("Care este vechimea minimă cerută?", ["10 ani în învățământ","2 ani","5 luni","25 de ani"], 0, "Candidatul trebuie să aibă cel puțin 10 ani vechime în învățământ."),
        Q("Cine numește câștigătorul în funcția de director general?", ["Ministrul educației, prin ordin","Consiliul elevilor","Primarul, prin dispoziție","Directorul unei școli"], 0, "Numirea pentru 4 ani se face prin ordin al ministrului educației.")
      ],
      "Art. 199 — Stabilește concursul, condițiile, mandatul și evaluarea conducerii structurilor județene, precum și numirea personalului de îndrumare și control."
    ),
    L(
      200,
      "Conducerea unităților de educație extrașcolară",
      "4 min",
      "concurs public · subordonare · numire · contract · 4 ani",
      `Articolul 200 reglementează directorii unităților destinate activităților extrașcolare. Numirea este făcută de conducătorul structurii județene sau de ministrul educației, în funcție de subordonarea unității.

Funcția se ocupă în urma unui concurs public, organizat potrivit unei metodologii aprobate prin ordin al ministrului. Directorul încheie contract de management cu autoritatea corespunzătoare subordonării: conducătorul structurii județene sau ministrul.

Durata contractului și a mandatului este de 4 ani. Schema de memorare este: subordonare – concurs public – numire – contract de management – 4 ani. În perioada de tranziție, atribuțiile județene sunt exercitate de structurile aflate efectiv în funcțiune potrivit actelor tranzitorii.`,
      [
        "Directorii unităților extrașcolare sunt selectați prin concurs public.",
        "Autoritatea de numire depinde de subordonarea unității.",
        "Contractul de management se încheie pe 4 ani."
      ],
      [
        Q("Cum se ocupă funcția de director al unei unități de educație extrașcolară?", ["Prin concurs public","Prin moștenire","Prin alegerea aleatorie a elevilor","Fără procedură"], 0, "Art. 200 impune concurs public pe baza metodologiei aprobate prin ordin."),
        Q("Cine numește directorul?", ["Conducătorul structurii județene sau ministrul, potrivit subordonării","Exclusiv consiliul local în toate cazurile","Doar asociația de părinți","Orice cadru didactic"], 0, "Autoritatea de numire este determinată de subordonarea unității."),
        Q("Pe ce perioadă se încheie contractul de management?", ["4 ani","30 de zile","Nelimitat","Exact 12 ani"], 0, "Art. 200 prevede o perioadă de 4 ani.")
      ],
      "Art. 200 — Directorii unităților de educație extrașcolară sunt numiți, după concurs public, de autoritatea corespunzătoare subordonării și încheie contract de management pe 4 ani."
    ),
    L(
      201,
      "Funcțiile de îndrumare și control",
      "9 min",
      "titular · licență · grad II · probă scrisă · interviu · observatori · 4 ani",
      `Articolul 201 reglementează funcțiile de îndrumare și control din structurile județene prevăzute de lege. Ele se ocupă prin concurs de cadre didactice titulare în învățământul preuniversitar.

Candidatul trebuie să aibă diplomă de licență, cel puțin gradul didactic II și să nu fi fost condamnat pentru fapte incompatibile cu funcția didactică. Spre deosebire de art. 199, aici legea cere cel puțin gradul II și nu fixează în articol un prag de 10 ani vechime.

Concursul constă într-o probă scrisă și un interviu, organizate după metodologia aprobată prin ordin. Comisia este formată din directorul general, ca președinte, și doi reprezentanți ai Ministerului Educației. Unul dintre cei doi poate fi profesor sau conferențiar universitar în profilul postului.

La concurs participă de drept, ca observatori, reprezentanții federațiilor sindicale reprezentative, un reprezentant al elevilor desemnat de Consiliul Național al Elevilor și un reprezentant al federațiilor reprezentative ale asociațiilor de părinți.

Numirea câștigătorului se face pentru 4 ani, prin decizia directorului general, cu avizul ministerului. Persoana numită încheie contract de management cu directorul general. Și acest articol trebuie citit în contextul prorogării noilor structuri județene până la începutul anului școlar 2027–2028.`,
      [
        "Candidatul trebuie să fie titular, să aibă licență și cel puțin gradul II.",
        "Concursul are probă scrisă și interviu.",
        "Comisia are trei membri: directorul general și doi reprezentanți ai ministerului.",
        "Numirea este pentru 4 ani, cu avizul ministerului."
      ],
      [
        Q("Care este gradul didactic minim cerut pentru funcțiile de îndrumare și control de la art. 201?", ["Gradul didactic II","Numai debutant","Gradul I obligatoriu în toate cazurile","Niciun grad"], 0, "Art. 201 cere cel puțin gradul didactic II."),
        Q("Din ce probe constă concursul?", ["Probă scrisă și interviu","Numai probă sportivă","Doar portofoliu artistic","Exclusiv evaluare medicală"], 0, "Concursul prevăzut la art. 201 are o probă scrisă și un interviu."),
        Q("Care este durata numirii în funcție după promovarea concursului?", ["4 ani","Un semestru","Pe viață","15 ani"], 0, "Numirea se face pentru o perioadă de 4 ani.")
      ],
      "Art. 201 — Reglementează condițiile, probele, comisia, observatorii și mandatul pentru funcțiile de îndrumare și control din structurile județene."
    ),
    L(
      202,
      "Directorii birourilor de calitate și ai caselor corpului didactic",
      "8 min",
      "concurs național · portofoliu managerial · probă scrisă · interviu · grad I · 10 ani",
      `Articolul 202 privește funcția de director al unui birou județean al agenției pentru calitate și funcțiile de director ale caselor corpului didactic. Ocuparea se face prin concurs național organizat de Ministerul Educației, potrivit metodologiei aprobate prin ordin.

Candidatul trebuie să aibă diplomă de licență, cel puțin gradul didactic I, minimum 10 ani vechime în învățământ și să nu fi fost condamnat pentru fapte incompatibile cu funcția didactică.

Concursul are trei componente: evaluarea portofoliului managerial întocmit de candidat, proba scrisă și proba de interviu în fața comisiei. Rețineți diferența față de art. 199, unde este evaluat proiectul managerial; la art. 202 formularea este portofoliu managerial.

Reprezentanții organizațiilor sindicale afiliate federațiilor sindicale reprezentative participă de drept cu statut de observatori.

Regimul tranzitoriu contează: în 2026 funcționează încă ARACIP și casele corpului didactic în cadrul actual, deoarece art. 116–119 privind noua arhitectură sunt prorogate până la începutul anului școlar 2027–2028. Articolul trebuie învățat ca model legal pentru structurile ce urmează să funcționeze.`,
      [
        "Concursul este național și este organizat de minister.",
        "Sunt cerute gradul I și minimum 10 ani vechime.",
        "Probele sunt: portofoliu managerial, probă scrisă și interviu.",
        "Sindicatele participă cu statut de observator."
      ],
      [
        Q("Ce document managerial este evaluat la concursul prevăzut de art. 202?", ["Portofoliul managerial","Catalogul clasei","Planul urbanistic","Fișa medicală a elevilor"], 0, "Art. 202 alin. (3) indică evaluarea portofoliului managerial întocmit de candidat."),
        Q("Ce grad didactic minim este cerut?", ["Gradul didactic I","Gradul II este suficient","Numai definitivatul","Niciun grad"], 0, "Candidatul trebuie să aibă cel puțin gradul didactic I."),
        Q("Cine organizează concursul național?", ["Ministerul Educației","Fiecare clasă separat","Asociația de locatari","Exclusiv primăria"], 0, "Concursul național este organizat de Ministerul Educației.")
      ],
      "Art. 202 — Reglementează concursul național pentru directorii birourilor județene ale agenției pentru calitate și ai CCD: portofoliu managerial, probă scrisă și interviu."
    ),
    L(
      203,
      "Pragul minim de promovare la concursurile de conducere",
      "4 min",
      "nota 7 · probă scrisă · proiect managerial · interviu · condiție de promovare",
      `Articolul 203 stabilește pragurile minime de promovare pentru concursurile de conducere, îndrumare și control reglementate în articolele anterioare.

Pentru a ajunge la interviu, candidatul trebuie să obțină minimum nota 7 la proba scrisă sau, după caz, la proba de evaluare a proiectului managerial. La interviu, punctajul minim este tot 7.

Regula se aplică participanților la concursurile pentru director și director adjunct în unitățile de învățământ, pentru conducerea unităților de educație extrașcolară și pentru funcțiile de conducere, îndrumare și control din structurile județene, casele corpului didactic și birourile județene ale agenției pentru calitate.

Nu este suficientă o medie finală de 7 dacă o probă pentru care legea fixează pragul a fost sub 7. Formula de memorare este: minimum 7 pentru accesul la interviu și minimum 7 la interviu.`,
      [
        "Pragul minim la proba scrisă sau evaluarea proiectului este 7.",
        "Pragul minim la interviu este 7.",
        "Pragul trebuie îndeplinit la fiecare probă relevantă, nu doar ca medie finală."
      ],
      [
        Q("Ce notă minimă trebuie obținută la proba scrisă pentru a promova la interviu?", ["7","5","9,50","Nu există prag"], 0, "Art. 203 stabilește minimum nota 7."),
        Q("Care este punctajul minim la interviu?", ["7","4","10 obligatoriu","6"], 0, "Și la interviu trebuie obținut minimum 7."),
        Q("Este suficientă o medie finală de 7 dacă proba scrisă a fost sub 7?", ["Nu, pragul de 7 trebuie atins la proba relevantă","Da, în toate situațiile","Da, dacă decide candidatul","Da, fără nicio condiție"], 0, "Candidatul trebuie să obțină minimum 7 pentru a promova la interviu.")
      ],
      "Art. 203 — Pentru promovarea la interviu este necesar minimum 7 la proba scrisă sau evaluarea proiectului managerial, iar la interviu punctajul minim este 7."
    ),
    L(
      204,
      "Coordonarea învățământului din sistemul de apărare și ordine publică",
      "4 min",
      "instituții de apărare · coordonare · control · Ministerul Educației · structura județeană",
      `Articolul 204 deschide capitolul privind personalul unităților de învățământ militar. El stabilește autoritățile care coordonează și controlează aceste unități.

Ministerul Apărării Naționale, Ministerul Afacerilor Interne, Ministerul Justiției și celelalte instituții cu atribuții în apărare, ordine publică și securitate națională exercită coordonarea și controlul împreună cu Ministerul Educației, prin structura județeană prevăzută de lege.

Ideea centrală este dubla coordonare: instituția de sistem asigură componenta specifică domeniului militar, de ordine publică sau securitate, iar Ministerul Educației asigură integrarea în sistemul național de învățământ. În perioada tranzitorie, referirea la structura județeană se corelează cu inspectoratele școlare aflate în funcțiune.`,
      [
        "Unitățile militare sunt coordonate de instituțiile de sistem împreună cu Ministerul Educației.",
        "Legea include apărarea, ordinea publică și securitatea națională.",
        "Articolul exprimă o coordonare comună, nu exclusivă."
      ],
      [
        Q("Cine coordonează unitățile de învățământ din sistemul de apărare?", ["Instituțiile de sistem împreună cu Ministerul Educației","Numai consiliul elevilor","Exclusiv primarul","Doar inspectorul de muncă"], 0, "Art. 204 prevede coordonarea și controlul comun."),
        Q("Care minister este menționat expres alături de MApN și MAI?", ["Ministerul Justiției","Ministerul Turismului, exclusiv","Ministerul Agriculturii, exclusiv","Niciun alt minister"], 0, "Ministerul Justiției este enumerat pentru unitățile din sfera sa de competență."),
        Q("Ce idee descrie cel mai bine art. 204?", ["Coordonare comună între instituția de sistem și autoritatea educațională","Autonomie totală față de sistemul educațional","Conducerea unităților de către elevi","Finanțarea exclusiv privată"], 0, "Învățământul militar rămâne coordonat și din perspectiva sistemului național de educație.")
      ],
      "Art. 204 — Instituțiile din apărare, ordine publică și securitate națională coordonează și controlează unitățile proprii împreună cu Ministerul Educației."
    ),
    L(
      205,
      "Componența personalului didactic din unitățile militare",
      "3 min",
      "statut general · instructori militari · ordine publică · securitate",
      `Articolul 205 definește componența personalului didactic din unitățile de învățământ preuniversitar ale sistemului de apărare, ordine publică și securitate națională.

Acesta este alcătuit din două mari categorii. Prima este personalul didactic prevăzut în statutul general al personalului didactic din învățământul preuniversitar. A doua este corpul instructorilor militari, de ordine și securitate publică.

Prin urmare, unitățile militare nu au numai instructori militari. Ele includ și categoriile didactice reglementate general de Legea nr. 198/2023, la care se adaugă personalul specific sistemului.`,
      [
        "Personalul include atât categoriile didactice generale, cât și instructorii specifici.",
        "Corpul instructorilor acoperă domeniul militar, ordinea și securitatea publică.",
        "Art. 205 este o regulă de compunere a personalului."
      ],
      [
        Q("Din ce este format personalul didactic al unităților militare?", ["Din personalul didactic general și corpul instructorilor militari, de ordine și securitate publică","Numai din elevi","Exclusiv din funcționari ai primăriei","Numai din personal administrativ"], 0, "Art. 205 combină personalul prevăzut de statutul general cu instructorii specifici."),
        Q("Sunt instructorii militari singura categorie de personal didactic din aceste unități?", ["Nu","Da, fără excepție","Da, numai în licee","Da, numai în școli postliceale"], 0, "Legea include și personalul didactic reglementat de statutul general."),
        Q("Ce domenii sunt asociate corpului instructorilor?", ["Militar, ordine și securitate publică","Exclusiv turism","Numai biblioteconomie","Doar contabilitate"], 0, "Aceste domenii sunt enumerate expres în art. 205.")
      ],
      "Art. 205 — Personalul didactic din unitățile militare este format din personalul prevăzut în statutul general și din corpul instructorilor militari, de ordine și securitate publică."
    ),
    L(
      206,
      "Statutul și selecția instructorilor din sistemul militar",
      "15 min",
      "drepturi și îndatoriri · funcții specifice · selecție · vechime · formare psihopedagogică · OUG 28/2026",
      `Articolul 206 detaliază statutul personalului didactic din unitățile de învățământ ale sistemului de apărare, ordine publică și securitate națională. Personalul are drepturile și îndatoririle care rezultă atât din Legea învățământului, cât și din calitatea de cadru militar în activitate sau de funcționar public cu statut special.

Funcțiile specifice diferă după instituție. În Ministerul Apărării Naționale sunt instructor, instructor principal și instructor superior. În Ministerul Afacerilor Interne sunt instructor militar sau instructor de poliție, instructor principal și instructor specialist. În Ministerul Justiției, Administrația Națională a Penitenciarelor, funcția este de ofițer profesor. Funcțiile sunt prevăzute în statele de organizare cu grade militare sau profesionale, după caz.

Posturile vacante se ocupă potrivit legislației speciale aplicabile fiecărei instituții, iar procedura se stabilește prin ordin al ministrului de resort. Pentru funcțiile de instructor ocupate de ofițeri sau ofițeri de poliție sunt cerute licența ori diploma de inginer în domeniul relevant, pregătirea psihopedagogică sau masteratul didactic, minimum 3 ani vechime ca ofițer, ofițer de poliție, subofițer, maistru militar ori agent de poliție și calificativul cel puțin „Foarte bun” sau „Foarte bine” în ultimii 3 ani. Extinderea categoriilor de vechime a fost introdusă prin OUG nr. 28/2026.

Pentru posturile ocupate de maiștri militari, subofițeri sau agenți de poliție sunt cerute studii postliceale acreditate în sistem, minimum 3 ani vechime în categoria respectivă și calificativul cel puțin „Foarte bun” sau „Foarte bine” în ultimii 3 ani.

Pentru funcțiile din Ministerul Afacerilor Interne, formarea psihopedagogică sau masteratul didactic prevăzut pentru anumite funcții se poate absolvi în maximum 3 ani de la numire. OUG nr. 28/2026 a introdus alin. (7¹): funcțiile vacante de instructor din unitățile MAI se ocupă prin concurs sau examen, aplicând corespunzător normele specifice categoriei de personal.

Există excepții pentru anumite specialități, precum informatica, limbile străine și educația fizică, pentru candidații care au gradul didactic II. Pentru ofițerul profesor din sistemul penitenciar sunt cerute licență în domeniul relevant și minimum 2 ani vechime potrivit sursei de încadrare; formarea psihopedagogică ori masteratul didactic trebuie absolvite în 3 ani de la numire.

În toate cazurile se aplică și condițiile generale și criteriile specifice ale fiecărei categorii de personal. Legea permite și instructori militari asociați, în condițiile ordinelor și instrucțiunilor proprii.`,
      [
        "Personalul cumulează drepturile și îndatoririle educaționale cu statutul militar sau special.",
        "Funcțiile specifice diferă între MApN, MAI și sistemul penitenciar.",
        "OUG nr. 28/2026 a extins categoriile de vechime acceptate și a introdus concursul sau examenul pentru posturile vacante din MAI.",
        "Pentru mai multe funcții, formarea psihopedagogică poate fi finalizată în maximum 3 ani de la numire."
      ],
      [
        Q("Ce a introdus OUG nr. 28/2026 la art. 206 alin. (7¹)?", ["Ocuparea prin concurs sau examen a funcțiilor vacante de instructor din unitățile MAI","Desființarea tuturor școlilor militare","Numirea instructorilor de către elevi","Eliminarea oricărei condiții de studii"], 0, "Noul alin. (7¹) impune concursul sau examenul, potrivit normelor specifice categoriei de personal."),
        Q("Care este vechimea minimă prevăzută, ca regulă, pentru candidații la funcțiile de instructor de la alin. (6)?", ["3 ani","3 luni","10 ani în toate cazurile","Nu există vechime"], 0, "Atât lit. a), cât și lit. b) folosesc pragul de cel puțin 3 ani pentru categoriile reglementate."),
        Q("În cât timp trebuie finalizată, în cazurile prevăzute de lege, formarea psihopedagogică după numirea în funcție?", ["Maximum 3 ani","30 de zile în toate cazurile","15 ani","Nu există termen"], 0, "Art. 206 prevede pentru funcțiile indicate un termen de maximum 3 ani de la numire.")
      ],
      "Art. 206 — Reglementează funcțiile, drepturile, condițiile de selecție și formarea instructorilor din sistemul militar; alin. (6) lit. a) și alin. (7¹) sunt în forma rezultată din OUG nr. 28/2026."
    )
  );
})();
