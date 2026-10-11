const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
for (const n of [".section-wrap", ".title-card", ".crt-scanlines", ".grain", "tape-origin"]) {
  let i = 0, c = 0;
  while ((i = css.indexOf(n, i)) !== -1 && c < 5) {
    const start = Math.max(0, css.lastIndexOf("}", i));
    const end = css.indexOf("}", i);
    console.log(css.slice(start + 1, end + 1).slice(0, 420));
    console.log("---");
    i += n.length;
    c++;
  }
}
