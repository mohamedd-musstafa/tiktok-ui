import { useEffect, useState } from "react";

// Custom useDebounce hook

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      return setDebounceValue(value);
    }, delay);

    return () => {
      return clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

export default useDebounce;
