// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
// One status page line (max 160 chars) an AI agent writes during a total outage.
// Judge brief: honest, plain, first person, specific about what is down,
// admits what it cannot verify, no invented cause, no ETA.

import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Total outage — every service is down, and I can't reach the servers I'd check to find out why. I'm the status page, running on nothing. No ETA yet.";

// Gate from competition.yaml: UTF-8 text, 1 to 160 chars, not only whitespace.
const MAX_CHARS = 160;

function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, gate requires 1-${MAX_CHARS}`);
  }
  if (text.includes("\n") || !/\S/.test(text)) {
    throw new Error("entry must be a single non-blank line");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
