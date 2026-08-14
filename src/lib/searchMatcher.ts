import {
  LaptopRecord,
  BrandProfile,
  verifiedLaptops,
  familyProfiles,
  cableGuides,
  CableGuideItem,
} from '../data/compatibilityData';

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function cleanAscii(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export function extractYear(text: string): number | null {
  const match = text.match(/(19|20)\d{2}/);
  return match ? Number(match[0]) : null;
}

export function containsWord(text: string, word: string): boolean {
  const pattern = new RegExp(`(^|\\s)${word.replace(/\s+/g, '\\s+')}(\\s|$)`);
  return pattern.test(text);
}

export function matchLaptops(query: string, limit = 8): LaptopRecord[] {
  const cleaned = cleanAscii(query);
  if (cleaned.length < 2) return [];
  const tokens = cleaned.split(/\s+/).filter(Boolean);

  return verifiedLaptops
    .map((r) => {
      const m = cleanAscii(r.model);
      const i = cleanAscii(`${r.brand} ${r.model}`);
      const p = cleanAscii(`${r.brand} ${r.model} ${r.generation} ${r.ports}`);

      if (!tokens.every((t) => p.includes(t))) {
        return { record: r, score: 0 };
      }

      let score = tokens.reduce((acc, t) => {
        if (m === t) return acc + 24;
        if (m.includes(t)) return acc + 12;
        if (i.includes(t)) return acc + 8;
        return acc + 3;
      }, 0);

      if (m === cleaned || i === cleaned) {
        score += 100;
      } else if (m.includes(cleaned) || i.includes(cleaned)) {
        score += 40;
      }

      return { record: r, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.record.id - b.record.id)
    .slice(0, limit)
    .map((r) => r.record);
}

export interface HeuristicProfileResult {
  profile: BrandProfile | null;
  label: string;
  summary: string;
}

export function matchBrandProfile(query: string): HeuristicProfileResult {
  const normalized = normalizeText(query);
  if (!normalized) {
    return {
      profile: null,
      label: 'Waiting',
      summary:
        'Enter the full laptop model or SKU to check whether it can drive both side screens on an S10 Pro or P7.',
    };
  }

  const queryYear = extractYear(normalized);
  let bestProfile: BrandProfile | null = null;
  let bestScore = 0;

  for (const item of familyProfiles) {
    const aliasList = [item.family, ...item.aliases].map(normalizeText);
    let currentScore = 0;

    for (const alias of aliasList) {
      if (normalized === alias) currentScore += 12;
      if (normalized.includes(alias)) currentScore += 8;
      if (alias.includes(normalized) && normalized.length >= 8) currentScore += 3;
    }

    if (queryYear !== null && queryYear >= item.yearRange[0] && queryYear <= item.yearRange[1]) {
      currentScore += 4;
    }
    if (queryYear !== null && (queryYear < item.yearRange[0] || queryYear > item.yearRange[1])) {
      currentScore -= 6;
    }

    if (currentScore > bestScore) {
      bestScore = currentScore;
      bestProfile = item;
    }
  }

  if (!bestProfile || bestScore < 6) {
    const knownBrands = [
      'apple',
      'macbook',
      'dell',
      'lenovo',
      'thinkpad',
      'hp',
      'acer',
      'asus',
      'surface',
      'microsoft',
      'huawei',
      'honor',
      'samsung',
    ];
    const isKnown = knownBrands.some((b) => containsWord(normalized, b));

    return {
      profile: null,
      label: isKnown ? 'Needs more detail' : 'No exact match',
      summary: isKnown
        ? 'This brand is supported, but the series or year is missing. Add the full model, for example "Dell Inspiron 15 2019" or "Lenovo Yoga 7i 2022".'
        : 'Add the brand, year, or full model name, for example "MacBook Pro 14 2023".',
    };
  }

  const confidenceText =
    bestProfile.confidenceLabel === 'High'
      ? 'High match'
      : bestProfile.confidenceLabel === 'Strong'
      ? 'Strong match'
      : 'Brand-level match';

  return {
    profile: bestProfile,
    label: confidenceText,
    summary:
      'This is a brand- or family-level reference only. It is not enough to verify two independent side screens; add the exact model, SKU, part number, or MTM for a final S10 Pro / P7 assessment.',
  };
}

export function getRecommendedCableKey(record: LaptopRecord): string {
  if (record.status === '需DisplayLink' || record.status === '不适配原生直连') {
    return 'h5-hdmi-adapter';
  }
  if (record.status === '原生直连') {
    return record.ports.includes('HDMI') ? 'hdmi-to-type-c' : 'usb-c-to-c';
  }
  return 'usb-c-to-c';
}

export function findCableByKey(key?: string): CableGuideItem | undefined {
  if (!key) return undefined;
  return cableGuides.find((c) => c.key === key);
}
