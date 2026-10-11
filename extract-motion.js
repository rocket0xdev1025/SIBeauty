const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
let i = 0;
while ((i = css.indexOf("prefers-reduced-motion", i)) !== -1) {
  console.log(css.slice(i, i + 500));
  console.log("---");
  i += 20;
}
console.log("\ncount", (css.match(/prefers-reduced-motion/g) || []).length);
