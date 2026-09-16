import fs from "node:fs";

const sourcePath = new URL("../../lege_2023.txt", import.meta.url);
const outputPath = new URL("../data.js", import.meta.url);

let source = fs.readFileSync(sourcePath, "utf8")
  .replaceAll("\f", "")
  .replaceAll("\r", "");

const marker = /^Articolul (\d+)(\^1)?\s*$/gm;
const matches = [...source.matchAll(marker)].filter((match) => {
  const number = Number(match[1]);
  return number >= 1 && number <= 251;
});

const unique = [];
const seen = new Set();
for (const match of matches) {
  const key = `${match[1]}${match[2] || ""}`;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(match);
  }
}

function cleanBody(value) {
  return value
    .replace(/^\s*(?:Titlul [IVX]+|Capitolul [IVX]+|Secțiunea \d+)\s+[A-ZĂÂÎȘȚ][^\n]*\n/gm, "")
    .split(/\n\s*\n+/)
    .map((block) => block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .join(" ")
      .replace(/\s+([,.;:!?])/g, "$1")
      .replace(/(\w)-\s+(\w)/g, "$1$2")
      .replace(/\s+/g, " ")
      .trim())
    .filter(Boolean)
    .join("\n\n")
    .trim();
}

const articles = unique.map((match, index) => {
  const start = match.index + match[0].length;
  const end = unique[index + 1]?.index ?? source.length;
  const suffix = match[2] ? "¹" : "";
  return {
    article: `${match[1]}${suffix}`,
    articleNumber: Number(match[1]),
    legalText: cleanBody(source.slice(start, end))
  };
});

if (articles.length !== 252) {
  throw new Error(`Au fost extrase ${articles.length} articole/dispoziții; erau așteptate 252 (1-251 și 108¹).`);
}

const modules = [
  [1, "Dispoziții generale. Principii și valori", 1, 11],
  [2, "Formele de organizare", 12, 18],
  [3, "Rețeaua școlară", 19, 29],
  [4, "Organizarea unităților - partea I", 30, 44],
  [5, "Organizarea unităților - partea a II-a", 45, 57],
  [6, "Organizarea unităților - partea a III-a", 58, 66],
  [7, "Educația incluzivă", 67, 84],
  [8, "Curriculumul național", 85, 94],
  [9, "Evaluările și bacalaureatul", 95, 104],
  [10, "Drepturi, obligații, sancțiuni, burse și excelență", 105, 114],
  [11, "Conducerea sistemului și a unităților", 115, 133],
  [12, "Finanțarea, baza materială și contravențiile", 134, 148],
  [13, "Învățarea pe tot parcursul vieții", 149, 161],
  [14, "Personalul didactic și formarea inițială", 162, 175],
  [15, "Ocuparea funcțiilor, formarea continuă și mobilitatea", 176, 191],
  [16, "Personalul auxiliar și funcțiile de conducere", 192, 206],
  [17, "Norma și răspunderea disciplinară", 207, 216],
  [18, "Drepturi, obligații, distincții și pensionare", 217, 229],
  [19, "Asigurarea internă și evaluarea externă a calității", 230, 247],
  [20, "Dispoziții tranzitorii și finale", 248, 251]
].map(([id, title, startArticle, endArticle]) => ({
  id, title, startArticle, endArticle,
  articles: `Art. ${startArticle}-${endArticle}`
}));

const payload = {
  source: "Legea nr. 198/2023 a învățământului preuniversitar",
  sourceVersion: "text consolidat din documentul furnizat, generat la 15.09.2026",
  documentNotice: "Conținut reprodus din documentul PDF furnizat. Pentru aplicare juridică, verificați și Monitorul Oficial/Portalul Legislativ.",
  modules,
  articles
};

fs.writeFileSync(outputPath, `window.LEGE_DATA = ${JSON.stringify(payload, null, 2)};\n`, "utf8");
console.log(`data.js generat: ${articles.length} articole/dispoziții.`);
