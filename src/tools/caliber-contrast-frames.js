import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skillPath = path.resolve(
  __dirname,
  "..",
  "skills",
  "caliber-contrast-frames.md",
);

export function buildContrastFrames() {
  try {
    return fs.readFileSync(skillPath, "utf8");
  } catch (error) {
    return `# Caliber Contrast Frames\n\nError: caliber-contrast-frames.md could not be loaded.\n\nResolved path:\n\n${skillPath}\n\nActual error:\n\n${error.message}`.trim();
  }
}
