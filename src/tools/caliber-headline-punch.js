import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skillPath = path.resolve(
  __dirname,
  "..",
  "skills",
  "caliber-headline-punch.md",
);

export function buildHeadlinePunch() {
  try {
    return fs.readFileSync(skillPath, "utf8");
  } catch (error) {
    return `# Caliber Headline Punch\n\nError: caliber-headline-punch.md could not be loaded.\n\nResolved path:\n\n${skillPath}\n\nActual error:\n\n${error.message}`.trim();
  }
}
