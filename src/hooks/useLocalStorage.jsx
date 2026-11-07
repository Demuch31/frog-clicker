import { useState, useEffect } from "react";

export default function useLocalStorage(key, inValue) {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : inValue,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
