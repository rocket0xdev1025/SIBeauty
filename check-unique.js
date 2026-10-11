const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const a = "useState)(e?0:ap.length)";
const b = "tag:`Watch this first`,tilt:1}";
console.log("state", s.split(a).length - 1);
console.log("tilt", s.split(b).length - 1);
console.log("context", s.slice(s.indexOf(b) - 80, s.indexOf(b) + b.length + 40));
