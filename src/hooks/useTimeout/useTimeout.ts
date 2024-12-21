import { useCallback, useEffect, useRef } from 'react';

/**
 * Set a timeout and clear it when the component unmounts.
 *
 * @param timeout - The timeout in milliseconds
 *
 * @returns An object with setTimer and clearTimer functions
 */
const useTimeout = (timeout: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  /**
   * Set a timeout
   *
   * @param callback - The function to call after the timeout
   */
  const setTimer = useCallback((callback: () => void) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback();
    }, timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Clear the timeout
   */
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  return { setTimer, clearTimer };
};

export default useTimeout;
