import { useEffect, useState } from "react";

export const useInputEvent = (): string | null => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      setKey(event.code);
    };

    const keyUpHandler = () => {
      setKey(null);
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return key;
};
