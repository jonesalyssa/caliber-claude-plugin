import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skillPath = path.resolve(
  __dirname,
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
