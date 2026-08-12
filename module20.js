"use strict";

(() => {
  const DATA = window.LEGE_DATA;
  const Q = (prompt, options, correct, explanation) => ({ prompt, options, correct, explanation });
  const N = (...paragraphs) => paragraphs.join("\n\n");
  const L = (article, title, duration, focus, narration, remember, questions, legalText) => ({
    article, title, duration, focus, narration, remember, questions, legalText
  });

  DATA.sourceVersion = "art. 1–11: actualizare 20.06.2025 · art. 12–66: verificare 11.08.2026 · art. 67–251: verificare 12.08.2026";
  DATA.modules.push({
    id: 20,
    title: "Dispoziții tranzitorii și finale",
    articles: "248–251",
    chapter: "Titlul V",
    startArticle: 248,
    endArticle: 251
  });

  DATA.lessons.push(
    L(
      248,
      "Calendarul aplicării noii legi",
      "18 min",
      "intrare în vigoare · termene · examene · carieră didactică · digitalizare · transport · dual · vouchere culturale",
      N(
        "Articolul 248 este calendarul de trecere de la vechea reglementare la Legea nr. 198/2023. Legea a intrat în vigoare la 60 de zile de la publicare, iar Ministerul Educației a primit termen până la 1 septembrie 2025 pentru elaborarea măsurilor, metodologiilor, regulamentelor și celorlalte acte normative necesare aplicării.",
        "Pentru elevi, termenele trebuie memorate separat. Grupa mică devine obligatorie din anul școlar 2030–2031. Noul regim al admiterii la liceu și al evaluării naționale se aplică generației care a intrat în clasa a V-a în 2023–2024. Noul bacalaureat se aplică generației care a intrat în clasa a IX-a în 2025–2026. Evaluările și examenele naționale trebuie să fie integral standardizate și administrate digital din anul școlar 2027–2028.",
        "Pentru cariera didactică există o regulă tranzitorie esențială pentru concurs: examenul de definitivat, concursul național de ocupare a posturilor și gradele didactice II și I continuă să fie organizate după Legea nr. 1/2011 până în anul școlar 2027–2028 inclusiv. Standardele pentru formarea inițială și profilul de competențe al cadrului didactic se aplică începând cu anul școlar 2025–2026.",
        "Aplicarea educației incluzive prevăzute la art. 69 începe gradual cu generația înscrisă în clasa pregătitoare în 2025–2026 și depinde de existența infrastructurii conforme și a resursei umane de specialitate. Curriculumul la decizia elevului din oferta școlii — CDEOȘ — și unele reguli privind transportul elevilor au ca reper anul școlar 2025–2026.",
        "Articolul cuprinde și tranziții instituționale și organizatorice: efectivele formațiunilor deja existente urmează vechile reguli până la finalizarea nivelului; activitățile de management al clasei sunt echivalate cu dirigenția; finanțarea cabinetelor medicale și preluarea personalului medical sunt corelate cu autoritățile locale; cluburile sportive școlare dobândesc statutul de unități de educație extrașcolară cu personalitate juridică sau, după caz, sunt arondate.",
        "În învățământul tehnologic, legea fixează trecerea exclusivă la sistemul dual pentru toate liceele tehnologice începând cu anul școlar 2029–2030. Pentru licee, principiul asumării filierei și pragul de minimum două treimi se aplică potrivit regulilor și excepțiilor tranzitorii prevăzute de articol.",
        "Actualizare importantă la 12 august 2026: calendarul Programului național «Vouchere culturale pentru elevi» de la alin. (34) este suspendat până la începutul anului școlar 2027–2028, prin OUG nr. 1/2026. Totodată, alin. (22) păstrează o trimitere la art. 108, deși acesta a fost abrogat la 1 septembrie 2025, iar bursele sunt reglementate acum prin art. 108¹. Aceste diferențe trebuie citite ca situații tranzitorii și de corelare legislativă.",
        "Formula de memorare este: 2027–2028 pentru digitalizarea integrală a examenelor și finalul regimului vechi al carierei didactice; 2029–2030 pentru tehnologic exclusiv dual; 2030–2031 pentru obligativitatea grupei mici."
      ),
      [
        "Definitivatul, titularizarea și gradele II/I urmează Legea nr. 1/2011 până în 2027–2028 inclusiv.",
        "Evaluările și examenele naționale devin integral standardizate și digitale din 2027–2028.",
        "Învățământul tehnologic devine exclusiv dual din 2029–2030.",
        "Grupa mică devine obligatorie din 2030–2031.",
        "Calendarul voucherelor culturale este suspendat până la începutul anului școlar 2027–2028."
      ],
      [
        Q("Până când continuă definitivatul, concursul național și gradele didactice II și I după regulile Legii nr. 1/2011?", ["Până în anul școlar 2027–2028 inclusiv", "Numai până la sfârșitul anului 2026", "Până în anul școlar 2030–2031", "Fără niciun termen tranzitoriu"], 0, "Art. 248 alin. (6) menține vechiul regim până în anul școlar 2027–2028 inclusiv."),
        Q("Din ce an școlar sunt prevăzute evaluările și examenele naționale integral standardizate și administrate digital?", ["2025–2026", "2026–2027", "2027–2028", "2030–2031"], 2, "Art. 248 alin. (10) fixează anul școlar 2027–2028."),
        Q("Care este situația calendarului voucherelor culturale la 12 august 2026?", ["Este suspendat până la începutul anului școlar 2027–2028", "Este aplicat integral tuturor elevilor", "A fost mutat definitiv în anul 2035", "Nu a fost niciodată reglementat"], 0, "OUG nr. 1/2026 suspendă aplicarea art. 248 alin. (34) până la începutul anului școlar 2027–2028.")
      ],
      N(
        "Art. 248 — Stabilește intrarea în vigoare și calendarul etapizat pentru aplicarea Legii nr. 198/2023 în materia examenelor, carierei didactice, incluziunii, transportului, organizării și învățământului dual.",
        "Repere actuale: regimul vechi al definitivatului, titularizării și gradelor continuă până în 2027–2028 inclusiv; examenele devin integral standardizate și digitale din 2027–2028; tehnologic exclusiv dual din 2029–2030; grupa mică obligatorie din 2030–2031.",
        "Alin. (34), privind voucherele culturale, este suspendat până la începutul anului școlar 2027–2028."
      )
    ),
    L(
      249,
      "Protejarea drepturilor și tranziția personalului didactic",
      "16 min",
      "drepturi dobândite · titularizare · studii pedagogice · educație timpurie · funcții echivalate · termene 2027–2029",
      N(
        "Articolul 249 protejează drepturile profesionale deja dobândite și stabilește rutele tranzitorii prin care personalul existent sau aflat în formare se adaptează noilor condiții de studii și noilor denumiri ale funcțiilor didactice.",
        "Elevii înscriși la intrarea în vigoare a legii în liceele pedagogice, specializarea învățător/învățătoare, precum și absolvenții acelei specializări pot fi încadrați ca învățători în învățământul primar. Personalul didactic titular își păstrează dreptul dobândit prin concurs național, repartiție guvernamentală sau altă formă legală, iar personalul didactic auxiliar își păstrează dreptul dobândit prin concurs sau altă formă legală.",
        "Începând cu anul școlar 2025–2026, candidații care au promovat definitivatul și concursul național organizate după Legea nr. 1/2011 și ocupă un post publicat pentru angajare pe perioadă nedeterminată devin titulari. Textul indică decizia de repartizare emisă de DJIP/DMBIP; în anul 2026, până la operaționalizarea noilor structuri județene, atribuțiile sunt exercitate tranzitoriu de inspectoratele școlare.",
        "Pentru educația timpurie și învățământul primar există mai multe rute tranzitorii. Absolvenții anumitor specializări ale liceului pedagogic pot ocupa funcția de educator sau învățător, iar absolvenții pedagogiei învățământului primar și preșcolar pot ocupa funcții corespunzătoare, dacă respectă termenele și formările suplimentare prevăzute. Reperele frecvente sunt anii 2027 și 2028, inclusiv 1 septembrie 2028 pentru cursurile de educație timpurie în anumite situații.",
        "Pentru profesorii din gimnazial, liceal și terțiar nonuniversitar, studiile universitare în profilul postului împreună cu formarea psihopedagogică, finalizate în condițiile tranzitorii până în 2027, pot fi recunoscute pentru îndeplinirea condiției de studii. Candidații care au promovat definitivatul pot ocupa prin concurs național un post pe perioadă nedeterminată până în anul 2028, potrivit excepției prevăzute de articol.",
        "Articolul transformă și denumirile unor funcții: educator-puericultor devine educator; profesor-psiholog școlar sau psiholog din învățământul special devine profesor-psiholog; logopedul devine profesor-logoped; kinetoterapeutul devine profesor kinetoterapeut; profesorul pentru învățământ preșcolar devine profesor pentru educație timpurie; profesorul de psihodiagnoză și psihopedagogul din învățământul special devin profesor-psihopedagog, după caz.",
        "Profesorul sociolog din CJRAE/CMBRAE și din cabinetele de asistență psihopedagogică trece în funcția de profesor consilier școlar, cu obligația absolvirii până la 1 septembrie 2028 a masteratului în consiliere școlară și în carieră. Pentru persoanele care optează pentru cariera didactică, noile condiții de ocupare de la art. 176 devin obligatorii începând cu anul 2029.",
        "Ideea centrală este continuitatea: legea nu anulează drepturile legal dobândite, ci stabilește echivalări, formări și termene pentru trecerea la noul sistem."
      ),
      [
        "Titularii și personalul auxiliar își păstrează drepturile dobândite legal.",
        "Art. 249 conține rute tranzitorii de studii, echivalări și schimbări de denumire a funcțiilor.",
        "Profesorul sociolog devine profesor consilier școlar, cu master până la 1 septembrie 2028.",
        "Noile condiții de ocupare de la art. 176 devin obligatorii din 2029."
      ],
      [
        Q("Ce se întâmplă cu dreptul personalului didactic titular dobândit legal înaintea noii legi?", ["Se păstrează", "Se anulează automat", "Se transformă într-un contract de voluntariat", "Se păstrează numai un an"], 0, "Art. 249 alin. (3) protejează dreptul dobândit prin titularizare, repartiție sau altă formă legală."),
        Q("Ce condiție trebuie să îndeplinească profesorul sociolog trecut pe funcția de profesor consilier școlar?", ["Să obțină gradul I până în 2026", "Să absolve până la 1 septembrie 2028 un masterat în consiliere școlară și în carieră", "Să ocupe funcția de director", "Să urmeze numai un curs de prim ajutor"], 1, "Art. 249 alin. (21) stabilește specializarea și termenul."),
        Q("De când devin obligatorii pentru noii candidați condițiile de ocupare prevăzute la art. 176?", ["Din 2025", "Din 2027", "Din 2028", "Din 2029"], 3, "Art. 249 alin. (23) stabilește anul 2029.")
      ],
      N(
        "Art. 249 — Păstrează drepturile dobândite de personalul didactic și auxiliar și reglementează traseele tranzitorii de studii, titularizare, echivalare și redenumire a funcțiilor.",
        "Termene-cheie: 2027 și 2028 pentru mai multe rute de studii; 1 septembrie 2028 pentru formări specifice; 2029 pentru aplicarea obligatorie a noilor condiții de ocupare prevăzute la art. 176."
      )
    ),
    L(
      250,
      "Abrogări și continuitatea normelor de calitate",
      "11 min",
      "abrogare · Legea nr. 1/2011 · OUG nr. 75/2005 · ARACIP · ARACIIP · CNITTD · norme care continuă",
      N(
        "Articolul 250 precizează ce norme vechi sunt abrogate și ce reglementări continuă temporar să producă efecte, pentru ca trecerea la noua lege să nu creeze un vid juridic.",
        "La intrarea în vigoare a Legii nr. 198/2023 au fost abrogate titlurile I și II și capitolul 1 al titlului IV din Legea nr. 1/2011, cu excepția expresă prevăzută pentru anumite dispoziții ale art. 361. Au fost abrogate și OUG nr. 75/2005 privind asigurarea calității educației, precum și acte privind angajamentele din învățământul militar, siguranța în unitățile de învățământ, educația tinerilor capabili de performanță înaltă, bursele de merit olimpic internațional și anumite dispoziții referitoare la marginalizarea socială. Clauza finală elimină orice alte dispoziții contrare.",
        "Unele abrogări sunt însă condiționate de apariția noilor acte de organizare. Hotărârea Guvernului nr. 155/2022, referitoare la organizarea ARACIP, se abrogă la intrarea în vigoare a hotărârii Guvernului privind organizarea și funcționarea ARACIIP. În mod similar, Hotărârea Guvernului nr. 855/1998 privind centrul pentru învățământ profesional și tehnic se abrogă la intrarea în vigoare a hotărârii privind organizarea CNITTD.",
        "Pentru asigurarea calității, Hotărârea Guvernului nr. 993/2020 privind metodologia de autorizare, acreditare și evaluare periodică continuă să producă efecte până la emiterea noii hotărâri prevăzute la art. 233 alin. (1). Pentru furnizorii de educație timpurie antepreșcolară continuă să producă efecte Ordinul comun nr. 4.869/2.698/2022 până la emiterea noului ordin prevăzut la art. 233 alin. (2).",
        "Pentru concurs, regula practică este: abrogarea unui act vechi poate fi imediată sau condiționată. Când legea menține expres o metodologie până la adoptarea celei noi, instituțiile continuă să aplice actul vechi. În 2026, prorogarea reorganizării instituționale menține relevanța ARACIP și a structurilor existente până la operaționalizarea arhitecturii noi."
      ),
      [
        "Art. 250 combină abrogări imediate cu abrogări condiționate de apariția noilor acte.",
        "OUG nr. 75/2005 privind calitatea a fost abrogată la intrarea în vigoare a noii legi.",
        "HG nr. 155/2022 se abrogă numai când intră în vigoare hotărârea de organizare a ARACIIP.",
        "HG nr. 993/2020 și Ordinul comun nr. 4.869/2.698/2022 continuă temporar să producă efecte."
      ],
      [
        Q("Ce act privind asigurarea calității a fost abrogat la intrarea în vigoare a Legii nr. 198/2023?", ["OUG nr. 75/2005", "HG nr. 993/2020", "Ordinul comun nr. 4.869/2.698/2022", "Codul muncii"], 0, "Art. 250 alin. (1) lit. b) abrogă OUG nr. 75/2005."),
        Q("Când se abrogă HG nr. 155/2022 privind organizarea ARACIP?", ["La orice schimbare de ministru", "La intrarea în vigoare a hotărârii Guvernului privind organizarea și funcționarea ARACIIP", "La finalul fiecărui an școlar", "Nu poate fi abrogată"], 1, "Art. 250 alin. (2) condiționează abrogarea de noua hotărâre de organizare."),
        Q("Ce se întâmplă cu HG nr. 993/2020 până la emiterea noii hotărâri prevăzute la art. 233 alin. (1)?", ["Își încetează imediat toate efectele", "Se aplică numai universităților", "Continuă să producă efecte juridice", "Este înlocuită de regulamentul intern al fiecărei școli"], 2, "Art. 250 alin. (4) asigură continuitatea metodologiei de evaluare instituțională.")
      ],
      N(
        "Art. 250 — Abrogă principalele reglementări vechi înlocuite de Legea nr. 198/2023, dar păstrează temporar actele metodologice necesare continuității.",
        "HG nr. 155/2022 și HG nr. 855/1998 se abrogă la intrarea în vigoare a noilor hotărâri de organizare; HG nr. 993/2020 și Ordinul comun nr. 4.869/2.698/2022 continuă până la adoptarea noilor acte."
      )
    ),
    L(
      251,
      "Anexa de definiții – parte integrantă a legii",
      "10 min",
      "anexă · definiții legale · abandon școlar · autorizare · acreditare · calitate · interpretare unitară",
      N(
        "Articolul 251 încheie legea printr-o regulă foarte scurtă, dar importantă: termenii și expresiile utilizate în cuprinsul legii sunt definiți în anexă, iar anexa face parte integrantă din lege. Definițiile nu sunt simple explicații orientative; ele au aceeași forță juridică în interpretarea și aplicarea normelor.",
        "Pentru concurs, trebuie diferențiate noțiunile apropiate. Autorizarea de funcționare provizorie este procesul prin care furnizorul, în urma evaluării externe, dobândește dreptul de a face înscrieri și de a desfășura procesul de învățământ. Acreditarea adaugă dreptul de a organiza examene de finalizare și de a emite diplome și certificate recunoscute de Ministerul Educației.",
        "Calitatea educației reprezintă ansamblul caracteristicilor programului și ale furnizorului prin care sunt îndeplinite standardele și așteptările beneficiarilor. Asigurarea calității exprimă capacitatea organizației de a oferi programe conforme standardelor, prin acțiuni de dezvoltare instituțională, planificare și implementare.",
        "Anexa definește și abandonul școlar: încetarea frecventării învățământului obligatoriu, demonstrată prin absențe nemotivate care au condus la imposibilitatea finalizării a doi ani școlari succesivi. Beneficiarii primari sunt antepreșcolarii, preșcolarii, elevii și persoanele adulte cuprinse într-o formă de educație preuniversitară.",
        "Într-o întrebare de concurs, dacă sensul unui termen pare ambiguu, reperul corect este definiția legală din anexă, corelată cu articolul care reglementează procedura respectivă."
      ),
      [
        "Anexa de definiții este parte integrantă a Legii nr. 198/2023.",
        "Autorizarea permite înscrieri și desfășurarea procesului; acreditarea permite și examene finale și acte de studii recunoscute.",
        "Calitatea combină standardele cu așteptările beneficiarilor.",
        "Abandonul școlar presupune imposibilitatea finalizării a 2 ani școlari succesivi din cauza absențelor nemotivate."
      ],
      [
        Q("Care este statutul juridic al anexei cu definiții?", ["Este un material facultativ", "Este parte integrantă din lege", "Este doar o recomandare pentru profesori", "Se aplică numai unităților private"], 1, "Art. 251 stabilește expres că anexa face parte integrantă din lege."),
        Q("Ce drept suplimentar aduce acreditarea față de autorizarea provizorie?", ["Dreptul de a evita orice evaluare", "Dreptul de a funcționa fără personal", "Dreptul de a organiza examene de finalizare și de a emite diplome și certificate recunoscute", "Dreptul de a elimina curriculumul"], 2, "Definițiile din anexă disting acreditarea de autorizarea provizorie prin aceste efecte suplimentare."),
        Q("Cum este demonstrat abandonul școlar în definiția legală?", ["Prin orice absență într-o singură zi", "Prin absențe nemotivate care au făcut imposibilă finalizarea a doi ani școlari succesivi", "Numai prin cererea părintelui", "Exclusiv prin transferul la altă școală"], 1, "Anexa leagă abandonul de absențele nemotivate și imposibilitatea finalizării a doi ani școlari succesivi.")
      ],
      N(
        "Art. 251 — Termenii și expresiile folosite de Legea nr. 198/2023 sunt definiți în anexă, care face parte integrantă din lege.",
        "Definițiile din anexă sunt obligatorii pentru interpretarea noțiunilor precum abandon școlar, autorizare, acreditare, calitate și beneficiari primari."
      )
    )
  );
})();
