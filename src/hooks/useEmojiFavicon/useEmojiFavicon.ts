import { useCallback } from 'react';

/**
 * Set the browser tab's favicon to a specified emoji.
 *
 * @returns - An object containing the `setFavicon` function.
 */
const useEmojiFavicon = () => {
  /**
   * This function takes an emoji as an argument and sets it as the favicon
   * of the current document. It leverages SVG data URLs to create the favicon dynamically.
   *
   * @param emoji - The emoji to set as the favicon. Example: "😀", "🚀", "🎉".
   */
  const setFavicon = useCallback((emoji: string) => {
    const faviconLink = document.querySelector("link[rel='icon']");

    const template = `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${emoji}
        </text>
      </svg>`;

    if (faviconLink) faviconLink.setAttribute('href', `data:image/svg+xml,${template}`);
    else console.warn('Favicon link not found.');
  }, []);

  return { setFavicon };
};

export default useEmojiFavicon;
