const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
let p = 0;
while ((p = css.indexOf("@media", p)) !== -1) {
  const end = css.indexOf("{", p);
  const cond = css.slice(p, end);
  const bodyStart = end;
  // find matching close is hard; print a window
  const window = css.slice(p, p + 500);
  if (/origin|doc-film|crt|section-wrap|player/.test(window)) {
    console.log("\n" + cond);
    console.log(window.slice(cond.length, cond.length + 400));
  }
  p = end + 1;
}
