import { renderHook } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import useOnUnmount from './useOnUnmount';

describe('useOnUnmount', () => {
  test('should call the callback once on unmount', async () => {
    const callback = vitest.fn();

    const { unmount } = renderHook(() => {
      useOnUnmount(callback);
    });

    unmount();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
