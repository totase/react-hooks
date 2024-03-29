import { useEffect } from 'react';

/**
 * Triggers a callback when the 'Escape' key is pressed.
 *
 * @param onEscape - Callback function to be executed when the 'Escape' key is pressed.
 *
 * @returns  void
 */
const useOnEscape = (onEscape: () => void) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onEscape();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onEscape]);
};

export default useOnEscape;
