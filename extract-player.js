const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const i = s.indexOf("var Ap=");
console.log(s.slice(i, i + 2500));
