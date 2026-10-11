const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
let i = 0, n = 0;
while ((i = s.indexOf("officer", i)) !== -1 && n < 10) {
  console.log("\n", i, s.slice(i - 120, i + 160).replace(/\s+/g, " "));
  i += 7;
  n++;
}
console.log("\n\nred eyes", s.indexOf("red eyes"));
