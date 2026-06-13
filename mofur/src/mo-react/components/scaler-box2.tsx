import { ReactNode, useMemo, useRef } from "react";
import { npx } from "../../ax-ui";
import { useDomElementSize } from "../hooks";

type Props = {
  children: ReactNode;
  destWidth: number;
  destHeight: number;
};

export function ScalerBox2({
  children,
  destWidth: outputWidth,
  destHeight: outputHeight,
}: Props) {
  const innerDivRef = useRef<HTMLDivElement>(null);
  const innerSize = useDomElementSize(innerDivRef);

  const scale = useMemo(() => {
    if (!innerSize) return 1;
    if (innerSize.width === 0 || innerSize.height === 0) return 1;
    return Math.min(
      outputWidth / innerSize.width,
      outputHeight / innerSize.height,
    );
  }, [outputWidth, outputHeight, innerSize]);

  const isReady = innerSize && innerSize.width > 0;

  return (
    <div
      style={{
        position: "relative",
        width: npx(outputWidth),
        height: npx(outputHeight),
        overflow: "hidden",
      }}
    >
      <div
        ref={innerDivRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          visibility: isReady ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
