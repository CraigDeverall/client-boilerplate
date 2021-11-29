import { useLocation } from "react-router-dom";

export const useURLQueryParam = (name: string) => {
  const search = new URLSearchParams(useLocation().search);
  return search.get(name);
};
