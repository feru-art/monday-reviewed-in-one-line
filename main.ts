// Monday, Reviewed in One Line — V2 (meeting berlapis, absurd birokrasi).
// Menulis satu baris review Senin sendiri ke /output/entry.txt.
// Gate: UTF-8, 1-200 karakter, satu baris, bukan hanya whitespace.
// Verified: 100 karakter, satu baris, tanpa trailing newline.
// Entry slot 1 — V2 pemenang adu lokal.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My Monday had five meetings about a meeting, and the meeting about the meeting got moved to Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
