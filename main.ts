// Monday, Reviewed in One Line — V2 (make.fun entry)
// Gate: 100 karakter, satu baris, UTF-8, tanpa trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My Monday had five meetings about a meeting, and the meeting about the meeting got moved to Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
