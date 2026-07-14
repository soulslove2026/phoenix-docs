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
  "REPOSITORY_INTEGRITY_REPORT.md", "TECHNOLOGY_STACK.json",
  "FILE_MANIFEST.json", "CHECKSUMS.sha256", "releases/v3.5.1-identity-slice2-phase-b-verification.md",
  ...Array.from({ length: 10 }, (_, index) =>
    `docs/15_Identity_Slice2/${String(index + 15).padStart(3, "0")}_${
      [
        "Phase_B_Charter",
        "Passkey_WebAuthn_Architecture",
        "TOTP_MFA_and_Recovery_Codes",
        "Breached_Password_Screening",
        "Production_Notification_Delivery",
        "Sensitive_Action_Reauthentication",
        "Phase_B_Threat_Model",
        "Phase_B_ASVS_Traceability",
        "Phase_B_Test_and_Verification_Plan",
        "Phase_B_Production_Blockers",
      ][index]
    }.md`
  ),
];

for (const file of required) if (!fs.existsSync(file)) fail(`Missing required file: ${file}`);
if (process.exitCode) process.exit();

const version = parse("VERSION.json");
const manifest = parse("FILE_MANIFEST.json");
const stack = parse("TECHNOLOGY_STACK.json");

if (version.version !== "3.5.1-identity-slice2-phase-b-verification") fail("VERSION authority invalid");
if (version.status !== "verified") fail("Release must be Verified");
if (version.production_ready !== false) fail("Production readiness must remain false");
if (stack.version !== "3.5.0" || !stack.identity_security?.webauthn_server?.includes("13.3.2")) {
  fail("Technology stack authority stale");
}

for (const file of ["README.md", "RELEASE.md", "RELEASE_REPORT.md"]) {
  const text = read(file);
  if (!text.includes("3.5.1") || !text.toLowerCase().includes("verified")) {
    fail(`${file} authority stale`);
  }
}

for (let index = 1; index <= 24; index += 1) {
  const id = `ID2-${String(index).padStart(3, "0")}`;
  if (!read("TRACEABILITY_MATRIX.md").includes(`| ${id} |`)) {
    fail(`Missing traceability ${id}`);
  }
}

if (!read("MASTER_INDEX.md").includes("releases/v3.5.1-identity-slice2-phase-b-verification.md")) fail("MASTER_INDEX current release stale");
if (read("GOVERNANCE_CHECKLIST.md").includes("- [ ]")) fail("Governance checklist incomplete");
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
  if (!match) {
    fail(`Invalid checksum ${line}`);
    continue;
  }
  const actualHash = createHash("sha256").update(fs.readFileSync(match[2])).digest("hex");
  if (actualHash !== match[1]) fail(`Checksum mismatch ${match[2]}`);
}

if (!process.exitCode) console.log("Documentation constitutional integrity checks passed.");
