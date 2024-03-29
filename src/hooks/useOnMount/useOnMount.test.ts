import { renderHook } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import useOnMount from './useOnMount';

describe('useOnMount', () => {
  test('should call the callback once on mount', async () => {
    const callback = vitest.fn();

    renderHook(() => {
      useOnMount(callback);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
