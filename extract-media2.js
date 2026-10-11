const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
function context(needle) {
  let i = 0;
  while ((i = css.indexOf(needle, i)) !== -1) {
    const media = css.lastIndexOf("@media", i);
    const condEnd = css.indexOf("{", media);
    console.log("\nAT", i, css.slice(media, condEnd));
    console.log(css.slice(i - 30, i + needle.length + 80));
    i += needle.length;
  }
}
context(".origin-main");
context(".doc-film");
context(".sec{");
context(".crt{");
