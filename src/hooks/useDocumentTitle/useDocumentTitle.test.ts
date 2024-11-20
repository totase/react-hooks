import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useDocumentTitle, { APPLICATION_NAME } from './useDocumentTitle';

describe('useDocumentTitle', () => {
  const updatedTitle = 'New Title';

  test('should update document title and append application name', () => {
    renderHook(() => useDocumentTitle(updatedTitle));

    expect(document.title).toBe(`${updatedTitle} | ${APPLICATION_NAME}`);
  });

  test('should update document title without appending application name', () => {
    renderHook(() => useDocumentTitle(updatedTitle, false));

    expect(document.title).toBe(updatedTitle);
  });

  test('should reset document title when unmounted', () => {
    const { unmount } = renderHook(() => useDocumentTitle(updatedTitle));

    unmount();

    expect(document.title).toBe(APPLICATION_NAME);
  });
});
