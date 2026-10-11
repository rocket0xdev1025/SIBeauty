const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
for (const name of ["ken-burns", "grain", "blink"]) {
  const i = css.indexOf("@keyframes " + name);
  console.log("\n====", name, i, "====");
  console.log(css.slice(i, i + 400));
}

const i = css.indexOf(".sec-origin");
console.log("\n==== sec-origin contexts ====");
let idx = 0;
while ((idx = css.indexOf("sec-origin", idx)) !== -1) {
  console.log(css.slice(Math.max(0, idx - 80), idx + 220));
  console.log("---");
  idx += 10;
}

const j = css.indexOf(".screen");
console.log("\n==== screen related ====");
let k = 0, n = 0;
while ((k = css.indexOf(".screen", k)) !== -1 && n < 15) {
  console.log(css.slice(k, css.indexOf("}", k) + 1));
  k += 7;
  n++;
}
