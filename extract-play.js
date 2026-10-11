const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");

const i = s.indexOf("function op()");
console.log(s.slice(i, i + 80));

// find where op( is used
let idx = 0, n = 0;
while ((idx = s.indexOf("op()", idx)) !== -1 && n < 8) {
  console.log("\n-- call", idx);
  console.log(s.slice(Math.max(0, idx - 180), idx + 40));
  idx += 4;
  n++;
}

const j = css.indexOf("@media");
let m = 0, p = 0;
while ((p = css.indexOf("@media", p)) !== -1 && m < 20) {
  const chunk = css.slice(p, p + 120);
  if (/origin|doc-film|max-width|min-width/.test(css.slice(p, p + 2500))) {
    const end = css.indexOf("{", p);
    console.log("\nMEDIA", css.slice(p, end));
    const body = css.slice(end, end + 1800);
    if (body.includes("doc-film") || body.includes("origin-main")) {
      const a = body.indexOf("origin-main");
      const b = body.indexOf("doc-film");
      const at = Math.min(a < 0 ? 9999 : a, b < 0 ? 9999 : b);
      console.log(body.slice(Math.max(0, at - 80), at + 200));
    }
  }
  p += 6;
  m++;
}
