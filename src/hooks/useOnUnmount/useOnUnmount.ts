import { useEffect } from 'react';

/**
 * Trigger a callback function when the component is unmounted.
 *
 * @param callback - Callback function to be executed when the component is unmounted.
 *
 * @returns void
 */
const useOnUnmount = (callback: () => void) => {
  useEffect(() => {
    return () => {
      callback();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnUnmount;
