export function iife<T>(fn: () => T) {
  return fn();
}

export function assignTyped<T extends object>(obj: T, attrs: Partial<T>) {
  Object.assign(obj, attrs);
}

export function getObjectKeys<T extends Record<string, unknown>>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

export function pickObjectMembers<T extends {}, K extends keyof T>(
  obj: T,
  keys: K[] | Record<K, 1 | true>,
): Pick<T, K> {
  const fieldNames = Array.isArray(keys) ? keys : (Object.keys(keys) as K[]);
  return Object.fromEntries(
    fieldNames.map((fieldName) => [fieldName, obj[fieldName]]),
  ) as Pick<T, K>;
}

export function shallowEqual<T extends object>(
  a: T | undefined,
  b: T,
): boolean {
  if (a === undefined) return false;
  const keys = Object.keys(b) as (keyof T)[];
  return keys.every((key) => Object.is(a[key], b[key]));
}

export function mapObjectEntries<P, Q>(
  obj: Record<string, P>,
  fn: (key: string, value: P) => Q,
): Record<string, Q> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(k, v)]));
}
