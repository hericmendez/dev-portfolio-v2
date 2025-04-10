import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent.tsx";
import { konamiCode } from "@/constants/konamiCode.ts";

export const useSecretCode = (secretCode: string[]): boolean => {
  const [count, setCount] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const key: string | null = useInputEvent();
  console.log("key ==> ", key);

  useEffect(() => {
    if (key == null) return;

    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    setCount((state) => state + 1);
    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
  }, [key, count, secretCode]);

  return success;
};

export const useKonamiCode = () => {
  const success = useSecretCode(konamiCode);
  return success;
};