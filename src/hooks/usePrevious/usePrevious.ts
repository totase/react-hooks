import { useEffect, useRef } from 'react';

/**
 * Returns the previous value of the provided value.
 *
 * @template T - Generic reference to the type of the value.
 *
 * @param value - The current value.
 *
 * @returns The previous value of the provided `value`.
 */
const usePrevious = <T>(value: T) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
