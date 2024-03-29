import { useEffect } from 'react';

/**
 * Trigger a callback function when the component is mounted.
 *
 * @param callback - Callback function to be executed when the component is mounted.
 *
 * @returns void
 */
const useOnMount = (callback: () => void) => {
  useEffect(() => {
    callback();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnMount;
