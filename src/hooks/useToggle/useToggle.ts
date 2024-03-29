import { useCallback, useState } from 'react';

/**
 * Manages a toggle value.
 *
 * @param initial - The initial toggle value.
 *
 * @returns An object with the current toggle value, a function to toggle the value, and a function to reset the value.
 */
const useToggle = (initial = false) => {
  const [active, setActive] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setActive((value) => !value);
  }, []);

  const reset = useCallback(() => setActive(false), []);

  return { active, toggle, reset };
};

export default useToggle;
