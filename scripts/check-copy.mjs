import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const blocked = [
  "TODO",
  "placeholder",
  "mock 데이터",
  "요청사항",
  "구현 완료",
  "테스트용",
  "검수",
  "AI가 생성",
  "클라이언트와 협의",
  "1차 시안",
  "추후 수정",
  "검토 필요",
  "임시 문구",
];

const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    if (["node_modules", "dist", ".git"].includes(entry)) continue;
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    if (stat.isFile() && /\.(html|css|js|md)$/.test(path)) files.push(path);
  }
};

walk(root);

const hits = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const word of blocked) {
    if (text.includes(word)) hits.push(`${file}: ${word}`);
  }
}

if (hits.length) {
  console.error(hits.join("\n"));
  process.exit(1);
}

console.log("copy check passed");
