import { KnobFrame } from "mofur/mo-react";
import { CellFrame } from "./cell-frame";

export function NumberSliderBoxView({
  value,
  fracDigits = 2,
}: {
  value: number;
  fracDigits?: number;
}) {
  return (
    <div className="border border-[#444] w-[48px] h-[28px] flex-c">
      {value.toFixed(fracDigits)}
    </div>
  );
}

export function FeNumberSliderBox({
  label,
  value,
  min = 0,
  max = 1,
  step = 0.01,
  fracDigits = 2,
  onChange,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  fracDigits?: number;
  onChange: (value: number) => void;
}) {
  return (
    <CellFrame label={label}>
      <KnobFrame
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      >
        <NumberSliderBoxView value={value} fracDigits={fracDigits} />
      </KnobFrame>
    </CellFrame>
  );
}
