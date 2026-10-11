const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
const i = s.indexOf("stack-cover");
console.log(s.slice(Math.max(0, i - 700), i + 500));
console.log("\n==== CSS ====");
let p = 0;
while ((p = css.indexOf("stack-cover", p)) !== -1) {
  const start = css.lastIndexOf("}", p);
  console.log(css.slice(start + 1, css.indexOf("}", p) + 1));
  p += 12;
}
console.log("\n==== preview ====");
const j = s.indexOf("cover-preview");
console.log(s.slice(Math.max(0, j - 200), j + 600));
