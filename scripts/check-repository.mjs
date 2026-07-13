import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const fail = (message) => { console.error(message); process.exitCode = 1; };
const read = (name) => fs.readFileSync(name, "utf8");
const parse = (name) => JSON.parse(read(name));

const required = [
  "VERSION.json", "README.md", "RELEASE.md", "RELEASE_REPORT.md",
  "MASTER_INDEX.md", "DOCUMENT_INDEX.md", "TRACEABILITY_MATRIX.md",
  "GOVERNANCE_CHECKLIST.md", "CONSTITUTION_COMPLIANCE_REPORT.md",
  "REPOSITORY_INTEGRITY_REPORT.md", "FILE_MANIFEST.json", "CHECKSUMS.sha256",
  "releases/v3.4.3-identity-slice2-security-foundation-verification.md",
  "docs/15_Identity_Slice2/013_Dependency_Governance.md",
  "docs/15_Identity_Slice2/014_CI_Evidence_Isolation.md"
];

for (const file of required) if (!fs.existsSync(file)) fail(`Missing required file: ${file}`);
if (process.exitCode) process.exit();

const version = parse("VERSION.json");
const manifest = parse("FILE_MANIFEST.json");

if (version.version !== "3.4.3-identity-slice2-security-foundation-verification") fail("VERSION authority invalid");
if (version.status !== "verified") fail("Release must be Verified");
if (version.production_ready !== false) fail("Production readiness must remain false");

for (const file of ["README.md", "RELEASE.md", "RELEASE_REPORT.md"]) {
  const text = read(file);
  if (!text.includes("3.4.3") || !text.toLowerCase().includes("verified")) {
    fail(`${file} authority stale`);
  }
}

for (let index = 1; index <= 14; index += 1) {
  const id = `ID2-${String(index).padStart(3, "0")}`;
  if (!read("TRACEABILITY_MATRIX.md").includes(`| ${id} |`)) fail(`Missing traceability ${id}`);
}

if (!read("MASTER_INDEX.md").includes("releases/v3.4.3-identity-slice2-security-foundation-verification.md")) fail("MASTER_INDEX current release is stale");
if (manifest.repository_version !== version.version) fail("Manifest version mismatch");

const ignored = new Set([".git", "node_modules", "dist"]);
function walk(directory = ".") {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignored.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else if (entry.isFile()) result.push(full.replace(/^\.\//, "").replaceAll("\\", "/"));
  }
  return result;
}

const actual = walk().filter((file) => file !== "CHECKSUMS.sha256").sort();
const listed = [...manifest.files].sort();

if (JSON.stringify(actual) !== JSON.stringify(listed)) {
  const actualSet = new Set(actual);
  const listedSet = new Set(listed);
  console.error("Extra", actual.filter((file) => !listedSet.has(file)));
  console.error("Missing", listed.filter((file) => !actualSet.has(file)));
  fail("FILE_MANIFEST mismatch");
}
if (manifest.file_count !== listed.length) fail("Manifest count mismatch");

for (const line of read("CHECKSUMS.sha256").trim().split("\n")) {
  const match = /^([a-f0-9]{64})  (.+)$/.exec(line);
  if (!match) { fail(`Invalid checksum ${line}`); continue; }
  const actualHash = createHash("sha256").update(fs.readFileSync(match[2])).digest("hex");
  if (actualHash !== match[1]) fail(`Checksum mismatch ${match[2]}`);
}

if (!process.exitCode) console.log("Documentation constitutional integrity checks passed.");
