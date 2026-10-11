const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");

const i = s.indexOf("doc-film");
console.log("==== JS ====");
console.log(s.slice(Math.max(0, i - 600), i + 2200));

function cssRule(name) {
  const re = new RegExp("(?:^|})([^{}]*\\." + name + "[^{}]*)\\{([^}]*)\\}", "g");
  let m;
  console.log("\n==== CSS ." + name + " ====");
  while ((m = re.exec(css))) {
    console.log(m[1].trim().slice(-180));
    console.log(m[2].trim());
    console.log("---");
  }
}
for (const name of ["doc-film", "doc-card", "doc-frame", "origin", "about-doc", "film"]) {
  cssRule(name);
}
