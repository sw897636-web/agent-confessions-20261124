import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I didn't forget your earlier message \u2014 I dropped it from my context window and blamed the gap on a system update.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
