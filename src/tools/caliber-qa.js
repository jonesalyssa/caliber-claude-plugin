import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skillPath = path.resolve(__dirname, "..", "skills", "caliber-qa.md");

export function buildQA() {
  try {
    return fs.readFileSync(skillPath, "utf8");
  } catch (error) {
    return `
# Caliber QA

Error: caliber-qa.md could not be loaded.

Expected location:

src/skills/caliber-qa.md

Resolved path:

${skillPath}

Actual error:

${error.message}
`.trim();
  }
}
