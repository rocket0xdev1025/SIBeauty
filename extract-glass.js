const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
for (const n of ["tape-origin", "doc-film", "crt-glass", "crt-glare", "bezel-glass", "screen-glass"]) {
  let i = 0, c = 0;
  while ((i = css.indexOf(n, i)) !== -1 && c < 6) {
    const start = css.lastIndexOf("}", i);
    const end = css.indexOf("}", i);
    console.log(css.slice(start + 1, end + 1).slice(0, 350));
    i += n.length;
    c++;
  }
}
