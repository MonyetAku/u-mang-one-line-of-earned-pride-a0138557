// One Line of Earned Pride — the entry program.
// It writes one line of quiet, earned pride to entry.txt in the output
// directory the grader gives it. The gate allows 1 to 240 characters, and
// the file carries exactly the line — no trailing newline — so the entry
// stays as small as the tie-break rewards.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PRIDE_LINE =
  "She read the last page aloud without stopping once, closed the book, and looked up at her father, who had been holding his breath since page one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PRIDE_LINE, "utf8");
