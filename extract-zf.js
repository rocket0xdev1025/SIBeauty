const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const i = s.indexOf("function Zf(");
console.log(s.slice(i, i + 900));
console.log("\n\n==== select ====");
const j = s.indexOf("onSelect");
// find insertTape or setTape
for (const n of ["insertTape", "loadTape", "phase:`inserting`", "selectTape"]) {
  const k = s.indexOf(n);
  console.log(n, k);
  if (k > 0) console.log(s.slice(k - 80, k + 180));
}
