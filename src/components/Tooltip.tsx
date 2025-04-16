import { ReactNode, useRef, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  delay?: number;
}

const Tooltip = ({ content, children, delay = 400 }: TooltipProps) => {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const wrapperRef = useRef<HTMLDivElement>(null);
  let timeout: ReturnType<typeof setTimeout>;

  const showTip = () => {
    timeout = setTimeout(() => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const hasSpaceAbove = rect.top >= 60; // margem mínima pra exibir acima
        setPosition(hasSpaceAbove ? "top" : "bottom");
      }
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="inline-block relative"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 z-50 whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded shadow-md font-sans ${
            position === "top" ? "-top-28" : "top-full mt-2"
          }`}
        >
          {content}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent ${
              position === "top"
                ? "top-full border-t-6 border-t-black"
                : "-top-3 border-b-6 border-b-black"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
