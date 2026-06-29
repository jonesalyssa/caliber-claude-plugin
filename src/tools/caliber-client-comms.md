import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const **filename = fileURLToPath(import.meta.url);
const **dirname = path.dirname(\_\_filename);

const skillPath = path.resolve(
\_\_dirname,
"..",
"skills",
"caliber-client-comms.md",
);

export function buildClientComms() {
try {
return fs.readFileSync(skillPath, "utf8");
} catch (error) {
return `# Caliber Client Comms\n\nError: caliber-client-comms.md could not be loaded.\n\nResolved path:\n\n${skillPath}\n\nActual error:\n\n${error.message}`.trim();
}
}
