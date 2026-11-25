import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Setup, then punch: the auto-reply confesses it is the only email answered.
const LINE =
  "Out of office until Monday. " +
  "This is the only email I have answered all week, and it wrote itself.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
