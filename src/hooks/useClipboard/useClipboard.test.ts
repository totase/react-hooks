import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test, vitest } from 'vitest';

import useClipboard from './useClipboard';

describe('useClipboard', () => {
  beforeEach(() => {
    const mockClipboard = {
      writeText: vitest.fn().mockImplementationOnce(() => Promise.resolve()),
    };

    // @ts-expect-error - clipboard is read-only, but we need to override it with a mock
    global.navigator.clipboard = mockClipboard;
  });

  test('should copy text to clipboard', async () => {
    const textToCopy = 'What up';

    const { result } = renderHook(() => useClipboard());

    expect(result.current.copiedText).toBe(null);

    await act(async () => {
      await result.current.copyToClipboard(textToCopy);
    });

    expect(result.current.copiedText).toBe(textToCopy);
  });
});
