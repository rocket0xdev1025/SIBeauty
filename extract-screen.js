const fs = require("fs");
const css = fs.readFileSync("assets/index-CVpYVHXU.css", "utf8");
const names = [
  "tv-screen",
  "crt",
  "player-view",
  "tape-view",
  "sec ",
  ".sec{",
  "sec-origin",
  "playback",
  "channel",
  "screen-content",
  "now-playing",
  "vcr-screen",
  "tube",
];
for (const name of names) {
  let idx = 0, n = 0;
  while ((idx = css.indexOf(name, idx)) !== -1 && n < 3) {
    const start = css.lastIndexOf("}", idx);
    const end = css.indexOf("}", idx);
    console.log(css.slice(start + 1, end + 1).slice(0, 400));
    console.log("---");
    idx += name.length;
    n++;
  }
}
