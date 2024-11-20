import { render, renderHook } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import useEmojiFavicon from './useEmojiFavicon';

describe('useEmojiFavicon', () => {
  const setup = (includeLink = true) => {
    render(<head>{includeLink && <link rel="icon" href="favicon.ico" />}</head>);
  };

  test('should set favicon to emoji', () => {
    setup();

    const { result } = renderHook(() => useEmojiFavicon());

    result.current.setFavicon('🎉');

    const faviconLink = document.querySelector("link[rel='icon']");
    const faviconHref = faviconLink?.getAttribute('href');

    console.log(faviconHref);
    expect(faviconHref).toContain('🎉');
  });

  test('should warn if favicon link is not found', () => {
    setup(false);

    const { result } = renderHook(() => useEmojiFavicon());
    const consoleSpy = vitest.spyOn(console, 'warn');

    document.querySelector("link[rel='icon']")?.remove();
    result.current.setFavicon('🥸');

    expect(consoleSpy).toHaveBeenCalledWith('Favicon link not found.');
    consoleSpy.mockRestore();
  });
});
