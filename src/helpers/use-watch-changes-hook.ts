import { useEffect, useRef } from "react";

type FuncTypeA = () => void;
type FuncTypeB = () => () => void;

export const useWatchChangesEffect = (
  func: FuncTypeA | FuncTypeB,
  deps?: any[]
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return func();
    else didMount.current = true;
  }, deps);
};
