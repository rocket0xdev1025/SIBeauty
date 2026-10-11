const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const i = s.indexOf("phase:`inserting`");
console.log(s.slice(i - 200, i + 1800));
