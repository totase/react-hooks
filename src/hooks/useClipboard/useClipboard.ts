import { useCallback, useState } from 'react';

/**
 * Provides functionality to copy text to the clipboard.
 *
 * @returns An object containing the copied text and a function to copy text to the clipboard.
 */
const useClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator.clipboard as boolean) {
      console.warn('Clipboard is not supported');
      return;
    }

    await navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);

        setCopiedText(text);
      })
      .catch((error: unknown) => {
        console.warn('Failed to copy', error);
        setCopiedText(null);
      });
  }, []);

  return {
    copiedText,
    copyToClipboard,
  };
};

export default useClipboard;
