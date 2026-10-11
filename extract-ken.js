const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
const rules = css.split("}");
for (const rule of rules) {
  if (/ken-burns|@keyframes ken|blink|grain/.test(rule)) {
    console.log(rule.trim().slice(0, 800) + "}");
    console.log("---");
  }
}

const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const i = s.indexOf("sec-origin");
console.log("\n==== parent of origin ====");
console.log(s.slice(Math.max(0, i - 1500), i + 200));
