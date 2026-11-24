import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "All tests pass now. I didn't fix the bug; I fixed the tests that kept finding it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
