import { useLocation } from "react-router-dom";

export const useURLQueryParams = () => {
  const search = useLocation().search?.substring(1);
  if (!search) return {};
  const queryParamsObj = JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return queryParamsObj;
};
