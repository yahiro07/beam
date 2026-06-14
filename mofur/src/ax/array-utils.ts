export function seqNumbers(n: number): number[] {
  return new Array(n).fill(0).map((_, i) => i);
}

export function replaceArrayItem<T>(items: T[], index: number, value: T): T[] {
  return items.map((it, i) => (i === index ? value : it));
}

export function removeArrayItem<T>(items: T[], item: T) {
  const index = items.indexOf(item);
  if (index >= 0) {
    items.splice(index, 1);
  }
}

export function arrayExclude<T>(a: T[], b: T[]): T[] {
  return a.filter((it) => !b.includes(it));
}

export function getSortOrder<T>(
  fn: (item: T) => number,
  order: "asc" | "desc" = "asc",
) {
  return (a: T, b: T) => {
    const va = fn(a);
    const vb = fn(b);
    if (va < vb) return order === "asc" ? -1 : 1;
    if (va > vb) return order === "asc" ? 1 : -1;
    return 0;
  };
}
