import { linearInterpolate } from "../ax/number-utils.js";

export function mapKnobGainDb(
  value: number,
  knobCenter: number,
  dbBottom = -60,
  dbTop = 12,
) {
  let db = 0;
  if (value > knobCenter) {
    db = linearInterpolate(value, knobCenter, 1, 0, dbTop);
  } else {
    db = linearInterpolate(value, 0, knobCenter, dbBottom, 0);
  }
  return 10 ** (db / 20);
}
