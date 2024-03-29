import { useLayoutEffect, useState } from 'react';

/**
 * Tracks the size of the screen (width and height) and updates when the screen size changes.
 *
 * @returns An object containing the current width and height of the screen.
 */
const useScreenSize = () => {
  const [size, setSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export default useScreenSize;
