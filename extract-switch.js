const fs = require("fs");
const s = fs.readFileSync("assets/index-BMCTT2YB.js", "utf8");
const needles = ["`origin`", "slug===", "sec-origin", "function op()", "op={", ",op(", "(0,R.jsx)(op"];
for (const n of ["sec-origin", "origin-main", "doc-film"]) {
  let i = s.indexOf(n);
  console.log(n, i);
}
// find component switch on tape slug
const re = /slug===`[a-z]+`/g;
console.log("slug compares", [...s.matchAll(re)].map(m => m[0]));

const re2 = /case `([a-z]+)`/g;
console.log("cases", [...new Set([...s.matchAll(re2)].map(m => m[1]))].slice(0, 40));

const idx = s.indexOf("sec-origin");
console.log("\nfunction start search");
const fn = s.lastIndexOf("function ", idx);
console.log("nearest function", fn, s.slice(fn, fn + 60));
