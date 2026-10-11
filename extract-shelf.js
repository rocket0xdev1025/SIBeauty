const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const n = "Currently in the VCR";
const i = s.indexOf(n);
console.log(s.slice(Math.max(0, i - 800), i + 200));
