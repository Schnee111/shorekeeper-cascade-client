/**
 * id-number-words.ts — Convert numbers to Indonesian words for natural TTS
 *
 * Fish Audio reads raw digits awkwardly ("2.000.000" → "dua titik nol nol nol...").
 * This module normalizes numbers into spoken Indonesian BEFORE sending to TTS:
 *   "05.40"      → "lima lewat empat puluh menit" (time context) or "lima koma empat puluh"
 *   "2.000.000"  → "dua juta"
 *   "1500"       → "seribu lima ratus"
 *   "3,5"        → "tiga koma lima"
 */

const ONES = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];

function underThousand(n: number): string {
  if (n === 0) return "";
  if (n < 12) return ONES[n];
  if (n < 20) return ONES[n - 10] + " belas";
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const rest = n % 10;
    return ONES[tens] + " puluh" + (rest ? " " + ONES[rest] : "");
  }
  if (n < 200) {
    const rest = n % 100;
    return "seratus" + (rest ? " " + underThousand(rest) : "");
  }
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  return ONES[hundreds] + " ratus" + (rest ? " " + underThousand(rest) : "");
}

/** Integer to Indonesian words. Handles up to triliun (10^12). */
export function intToIndonesianWords(n: number): string {
  if (n === 0) return "nol";
  if (n < 0) return "minus " + intToIndonesianWords(-n);

  const units: [number, string][] = [
    [1_000_000_000_000, "triliun"],
    [1_000_000_000, "miliar"],
    [1_000_000, "juta"],
    [1_000, "ribu"],
  ];

  let result = "";
  let remaining = n;

  for (const [value, name] of units) {
    if (remaining >= value) {
      const count = Math.floor(remaining / value);
      remaining %= value;
      // "seribu"/"sejuta" instead of "satu ribu"/"satu juta"
      if (count === 1 && (value === 1_000 || value === 1_000_000)) {
        result += "se" + name + " ";
      } else {
        result += underThousand(count) + " " + name + " ";
      }
    }
  }

  if (remaining > 0) {
    result += underThousand(remaining);
  }

  return result.trim();
}

/**
 * Normalize numbers in text for Indonesian TTS.
 * - "2.000.000" (ID thousand separator) → "dua juta"
 * - "05.40" or "05:40" (time) → "jam lima lewat empat puluh menit" → actually keep simple: "lima empat puluh"
 * - "3,5" (ID decimal) → "tiga koma lima"
 * - "1500" → "seribu lima ratus"
 */
export function normalizeNumbersForTTS(text: string): string {
  let result = text;

  // 1. Time patterns: HH.MM or HH:MM (e.g. "05.40", "17:30")
  result = result.replace(/\b(\d{1,2})[.:](\d{2})\b/g, (_m, h, min) => {
    const hour = parseInt(h, 10);
    const minute = parseInt(min, 10);
    if (hour <= 24 && minute < 60) {
      const hourWords = intToIndonesianWords(hour);
      const minWords = minute === 0 ? "" : " lewat " + intToIndonesianWords(minute) + " menit";
      return hourWords + minWords;
    }
    return _m;
  });

  // 2. Indonesian thousand-separated numbers: "2.000.000", "1.500"
  //    Pattern: digit followed by groups of .### (must look like grouping, not time)
  result = result.replace(/\b(\d{1,3}(?:\.\d{3})+)\b/g, (m) => {
    const n = parseInt(m.replace(/\./g, ""), 10);
    return intToIndonesianWords(n);
  });

  // 3. Indonesian decimal with comma: "3,5" → "tiga koma lima"
  result = result.replace(/\b(\d+),(\d+)\b/g, (_m, intPart, decPart) => {
    const intWords = intToIndonesianWords(parseInt(intPart, 10));
    const decWords = decPart.split("").map((d: string) => intToIndonesianWords(parseInt(d, 10))).join(" ");
    return intWords + " koma " + decWords;
  });

  // 4. Plain integers: "1500", "42", "2025"
  //    Years (1900-2099) read as-is digit grouping is complex; read 2025 as "dua ribu dua puluh lima" — fine.
  result = result.replace(/\b(\d+)\b/g, (m) => {
    const n = parseInt(m, 10);
    if (n > 999_999_999_999) return m; // too big, leave as-is
    return intToIndonesianWords(n);
  });

  return result;
}
