import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 300; // 300 milliseconds;

/**
 * Delays the update of a value by the specified delay time.
 *
 * @template T - Generic reference to the type of the value.
 *
 * @param value - The value to be debounced.
 * @param delay - The delay time in milliseconds (defaults to 300 milliseconds).
 *
 * @returns The debounced value.
 */
const useDebounceValue = <T>(value: T, delay = DEFAULT_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceValue;
