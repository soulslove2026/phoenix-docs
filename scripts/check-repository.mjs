import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const fail = (message) => { console.error(message); process.exitCode = 1; };
const read = (name) => fs.readFileSync(name, "utf8");
const parse = (name) => JSON.parse(read(name));
const required = [
  "VERSION.json", "README.md", "RELEASE.md", "RELEASE_REPORT.md", "MASTER_INDEX.md",
  "DOCUMENT_INDEX.md", "TRACEABILITY_MATRIX.md", "GOVERNANCE_CHECKLIST.md",
  "CONSTITUTION_COMPLIANCE_REPORT.md", "REPOSITORY_INTEGRITY_REPORT.md",
  "FILE_MANIFEST.json", "CHECKSUMS.sha256",
  "releases/v3.3.2-constitutional-reconciliation-hardening-r2.md"
];
for (const file of required) if (!fs.existsSync(file)) fail(`Missing required file: ${file}`);
if (process.exitCode) process.exit();

const version = parse("VERSION.json");
const manifest = parse("FILE_MANIFEST.json");
const expectedCore = "3.3.2";
const authorityFiles = ["README.md", "RELEASE.md", "RELEASE_REPORT.md", "PROJECT_BOARD.md", "ENGINEERING_ROADMAP.md"];
for (const file of authorityFiles) {
  const content = read(file);
  if (!content.includes(expectedCore) && !content.includes(version.version)) fail(`${file} does not identify the current release`);
  if (!content.includes("Candidate") && !content.includes("candidate")) fail(`${file} does not preserve Candidate status`);
}
if (version.production_ready !== false) fail("Documentation must not claim production readiness");
if (manifest.repository_version !== version.version) fail("FILE_MANIFEST version differs from VERSION.json");
if (!read("MASTER_INDEX.md").includes("v3.3.2-constitutional-reconciliation-hardening-r2.md")) fail("MASTER_INDEX current release is stale");
for (let index = 1; index <= 7; index += 1) {
  const id = `IDN-${String(index).padStart(3, "0")}`;
  if (!read("TRACEABILITY_MATRIX.md").includes(`| ${id} |`)) fail(`Missing traceability row: ${id}`);
}
for (let index = 1; index <= 6; index += 1) {
  const id = `REC-${String(index).padStart(3, "0")}`;
  if (!read("TRACEABILITY_MATRIX.md").includes(`| ${id} |`)) fail(`Missing traceability row: ${id}`);
}
const governance = read("GOVERNANCE_CHECKLIST.md");
if (governance.includes("- [ ]")) fail("Current governance checklist contains incomplete items");
if ((governance.match(/- \[x\]/g) ?? []).length < 13) fail("Governance checklist is incomplete");

const ignoredDirectories = new Set([".git", "node_modules"]);
function walk(directory = ".") {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else if (entry.isFile()) result.push(full.replace(/^\.\//, "").replaceAll("\\", "/"));
  }
  return result;
}
const actualFiles = walk().filter((file) => file !== "CHECKSUMS.sha256").sort();
const listedFiles = [...manifest.files].sort();
if (JSON.stringify(actualFiles) !== JSON.stringify(listedFiles)) {
  const actual = new Set(actualFiles);
  const listed = new Set(listedFiles);
  const extra = actualFiles.filter((file) => !listed.has(file));
  const missing = listedFiles.filter((file) => !actual.has(file));
  if (extra.length) console.error(`Unmanaged documentation files:\n- ${extra.join("\n- ")}`);
  if (missing.length) console.error(`Manifest entries missing from repository:\n- ${missing.join("\n- ")}`);
  fail("FILE_MANIFEST does not exactly match repository files");
}
if (manifest.file_count !== listedFiles.length) fail("FILE_MANIFEST file_count is incorrect");

for (const line of read("CHECKSUMS.sha256").trim().split("\n")) {
  if (!line) continue;
  const match = /^([a-f0-9]{64})  (.+)$/.exec(line);
  if (!match) { fail(`Invalid checksum line: ${line}`); continue; }
  const [, expected, file] = match;
  if (!fs.existsSync(file)) { fail(`Checksum references missing file: ${file}`); continue; }
  const actual = createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  if (actual !== expected) fail(`Checksum mismatch: ${file}`);
}

if (!process.exitCode) console.log("Documentation constitutional integrity checks passed.");
