/**
 * CI / Vercel: fail the build if required static assets are missing.
 * The marketing site has no compile step; this is the real "build" check.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const required = [
  "index.html",
  path.join("public", "js", "emailjs-config.js"),
];

for (const rel of required) {
  const p = path.join(root, rel);
  try {
    fs.accessSync(p, fs.constants.R_OK);
  } catch {
    console.error(`JamPort web build: missing or unreadable file: ${rel}`);
    process.exit(1);
  }
}

console.log("JamPort web: static site verification OK");
