import { RefObject, useCallback, useEffect } from 'react';

/**
 * Detect clicks outside a specified element.
 *
 * @template T - Generic reference to the element type.
 *
 * @param ref - Reference to the DOM element to which the click outside detection should be applied.
 * @param callback - A function to be called when a click outside the specified element occurs.
 *
 * @returns void
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (e?: MouseEvent) => void,
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Node;
      if (!ref.current || ref.current.contains(target)) return;

      callback(e);
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useClickOutside;
