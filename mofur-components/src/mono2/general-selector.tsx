import { SelectorOption } from "../common/selector-option";

type Props<T extends string | number> = {
  options: SelectorOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function GeneralSelector<T extends string | number>({
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      // className="border border-gray-400 px-1 py-2 w-[400px]"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
