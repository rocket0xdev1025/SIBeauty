const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");

const needles = ["crt-content", "crt-scroll", "screen-scroll", "player-body"];
for (const n of needles) {
  let i = 0, c = 0;
  while ((i = s.indexOf(n, i)) !== -1 && c < 4) {
    console.log("\nJS", n, i);
    console.log(s.slice(Math.max(0, i - 120), i + 200).replace(/\s+/g, " "));
    i += n.length;
    c++;
  }
}

for (const n of [".crt-content", ".crt ", "overflow-y", "sec-wrap", ".stage"]) {
  let i = 0, c = 0;
  while ((i = css.indexOf(n, i)) !== -1 && c < 4) {
    const start = css.lastIndexOf("}", i);
    const end = css.indexOf("}", i);
    console.log("CSS", css.slice(start + 1, end + 1).slice(0, 300));
    i += n.length;
    c++;
  }
}
