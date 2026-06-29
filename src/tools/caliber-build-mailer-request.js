// src/tools/caliber-build-mailer-request.js

import fs from "node:fs";
import path from "node:path";

const skillPath = path.resolve(
  process.cwd(),
  "src",
  "skills",
  "caliber-mailer-request.md",
);

function readSkillFile() {
  try {
    return fs.readFileSync(skillPath, "utf8");
  } catch (error) {
    return "Caliber Mailer Request skill file not found.";
  }
}

function listItems(items, fallback) {
  if (!Array.isArray(items) || items.length === 0) {
    return `- ${fallback}`;
  }

  return items.map((item) => `- ${item}`).join("\n");
}

export function buildMailerRequest(input = {}) {
  const skill = readSkillFile();

  const missing = [];

  if (!input.candidate) missing.push("Candidate");
  if (!input.pieceType) missing.push("Piece type");
  if (!input.objective) missing.push("Objective");
  if (!input.audience) missing.push("Audience");
  if (!input.coreMessage) missing.push("Core message");
  if (!input.size) missing.push("Size / format");
  if (!input.desiredEmotion) missing.push("Desired emotion");

  return `
# Caliber Mailer Request

## Strategic Intake

### Candidate
${input.candidate || "[Missing]"}

### Opponent / Target
${input.opponent || "[None provided]"}

### Piece Type
${input.pieceType || "[Missing]"}

### Objective
${input.objective || "[Missing]"}

### Audience
${input.audience || "[Missing]"}

### Core Message
${input.coreMessage || "[Missing]"}

---

## Supporting Points

${listItems(input.supportingPoints, "[Missing]")}

---

## Sources

${listItems(input.sources, "[No sources provided]")}

---

## Format / Production

### Size
${input.size || "[Missing]"}

### Orientation
${input.orientation || "[Unspecified]"}

### Number of Sides
${input.numberOfSides || "[Unspecified]"}

### Required Elements
${listItems(input.requiredElements, "[None provided]")}

---

## Creative Direction

### Desired Emotion
${input.desiredEmotion || "[Missing]"}

### Visual Theme
${input.visualTheme || "[Not specified]"}

### Notes
${input.notes || "[None provided]"}

---

## Missing Information

${listItems(missing, "No critical intake fields missing.")}

---

## Recommended Next Step

Use the Caliber Mailer Request framework to generate:

1. Strategic assessment
2. Recommended contrast frame
3. Headline options
4. Creative concepts
5. Layout recommendation
6. Fact-check concerns
7. Production notes
8. QA observations

---

# Reference Framework

${skill}
`.trim();
}
