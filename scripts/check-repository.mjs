import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
const fail=(message)=>{console.error(message);process.exitCode=1;};
const read=(name)=>fs.readFileSync(name,"utf8");
const parse=(name)=>JSON.parse(read(name));
const required=["VERSION.json","README.md","RELEASE.md","RELEASE_REPORT.md","MASTER_INDEX.md","DOCUMENT_INDEX.md","TRACEABILITY_MATRIX.md","GOVERNANCE_CHECKLIST.md","CONSTITUTION_COMPLIANCE_REPORT.md","REPOSITORY_INTEGRITY_REPORT.md","TECHNOLOGY_STACK.json","FILE_MANIFEST.json","CHECKSUMS.sha256","releases/v3.6.0-identity-slice2-phase-c-release1.md",...Array.from({length:10},(_,i)=>`docs/15_Identity_Slice2/${String(i+25).padStart(3,"0")}_${["Phase_C_Charter","Real_Browser_Passkey_Validation","Production_Notification_Provider_Validation","Operations_Monitoring_and_Alerting","Identity_Key_Rotation","Backup_Restore_and_Recovery","Incident_Response_and_Forensics","Supply_Chain_Provenance","Phase_C_ASVS_and_NIST_Traceability","Phase_C_Evidence_and_Exit_Gates"][i]}.md`)];
for(const file of required)if(!fs.existsSync(file))fail(`Missing required file: ${file}`);
if(process.exitCode)process.exit();
const version=parse("VERSION.json"),manifest=parse("FILE_MANIFEST.json"),stack=parse("TECHNOLOGY_STACK.json");
if(version.version!=="3.6.0-identity-slice2-phase-c-r1"||version.status!=="candidate"||version.production_ready!==false)fail("Release authority invalid");
if(stack.version!=="3.6.0"||!stack.production_assurance)fail("Technology stack authority stale");
for(const file of ["README.md","RELEASE.md","RELEASE_REPORT.md"]){const text=read(file);if(!text.includes("3.6.0")||!text.toLowerCase().includes("candidate"))fail(`${file} authority stale`);}
for(let index=1;index<=34;index+=1){const id=`ID2-${String(index).padStart(3,"0")}`;if(!read("TRACEABILITY_MATRIX.md").includes(`| ${id} |`))fail(`Missing traceability ${id}`);}
if(!read("MASTER_INDEX.md").includes("releases/v3.6.0-identity-slice2-phase-c-release1.md"))fail("MASTER_INDEX current release stale");
if(read("GOVERNANCE_CHECKLIST.md").includes("- [ ]"))fail("Governance checklist contains unresolved design items");
if(manifest.repository_version!==version.version)fail("Manifest version mismatch");
const ignored=new Set([".git","node_modules","dist"]);function walk(directory="."){const result=[];for(const entry of fs.readdirSync(directory,{withFileTypes:true})){if(entry.isDirectory()&&ignored.has(entry.name))continue;const full=path.join(directory,entry.name);if(entry.isDirectory())result.push(...walk(full));else if(entry.isFile())result.push(full.replace(/^\.\//,"").replaceAll("\\","/"));}return result;}
const actual=walk().filter(file=>file!=="CHECKSUMS.sha256").sort(),listed=[...manifest.files].sort();if(JSON.stringify(actual)!==JSON.stringify(listed)){const a=new Set(actual),l=new Set(listed);console.error("Extra",actual.filter(file=>!l.has(file)));console.error("Missing",listed.filter(file=>!a.has(file)));fail("FILE_MANIFEST mismatch");}if(manifest.file_count!==listed.length)fail("Manifest count mismatch");
for(const line of read("CHECKSUMS.sha256").trim().split("\n")){const match=/^([a-f0-9]{64})  (.+)$/.exec(line);if(!match){fail(`Invalid checksum ${line}`);continue;}const digest=createHash("sha256").update(fs.readFileSync(match[2])).digest("hex");if(digest!==match[1])fail(`Checksum mismatch ${match[2]}`);}
if(!process.exitCode)console.log("Documentation constitutional integrity checks passed.");
