const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const i = css.indexOf("@keyframes crt-wobble");
console.log(css.slice(i, i + 300));

const j = s.indexOf("(0,R.jsx)(op,");
console.log("jsx op", j);
const k = s.indexOf(",op)");
console.log(",op)", k, s.slice(Math.max(0, k - 200), k + 30));

// map of tape components
const idx = s.indexOf("transmission");
// search for object mapping slugs to components near the end
const m = s.lastIndexOf("origin:");
console.log("origin:", m);
if (m > 0) console.log(s.slice(m - 100, m + 400));
