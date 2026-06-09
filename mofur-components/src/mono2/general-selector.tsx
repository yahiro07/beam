import { useMemo } from "react";
import { SelectorOption } from "../common/selector-option";

type Props<T extends string | number> = {
  options: SelectorOption<T>[];
  value: T;
  onChange: (value: T) => void;
  reverseOptionsOrder?: boolean;
};

export function GeneralSelector<T extends string | number>({
  options,
  value,
  onChange,
  reverseOptionsOrder = false,
}: Props<T>) {
  const orderedOptions = useMemo(() => {
    if (reverseOptionsOrder) {
      return [...options].reverse();
    }
    return options;
  }, [options, reverseOptionsOrder]);

  const wrapOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isNumber = typeof options[0].value === "number";
    const newValue = isNumber ? parseFloat(e.target.value) : e.target.value;
    onChange(newValue as T);
  };
  return (
    <select
      value={value}
      onChange={wrapOnChange}
      // className="border border-gray-400 px-1 py-2 w-[400px]"
    >
      {orderedOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
