import { useLocation } from "react-router-dom";

export const capitalize_Words = (str: String) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const isObject = (obj: any) => {
  let type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
};

export const isBoolean = (obj: any) => {
  let type = typeof obj;
  return type === "boolean";
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
