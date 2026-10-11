const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
for (const n of ["--trk", "crt-ambient", ".noise", "track-roll", "crt-roll"]) {
  let i = 0, c = 0;
  while ((i = css.indexOf(n, i)) !== -1 && c < 8) {
    const start = css.lastIndexOf("}", Math.max(0, i - 1));
    const end = css.indexOf("}", i);
    const rule = css.slice(start + 1, end + 1);
    if (rule.length < 500) console.log(rule);
    else console.log(rule.slice(0, 400));
    i += n.length;
    c++;
  }
}
const j = s.indexOf("crt-ambient");
console.log("\nJS", s.slice(j - 100, j + 250));
