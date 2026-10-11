const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");

const re = /([^{}]+)\{([^{}]*doc-[^{}]*|[^{}]*)\}/g;
// better: split rules
const rules = css.split("}");
for (const rule of rules) {
  if (/doc-|origin-/.test(rule)) {
    console.log(rule.trim() + "}");
    console.log("---");
  }
}
