import { act, renderHook } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import useDebounceValue from './useDebounceValue';

describe('useDebounceValue', () => {
  vitest.useFakeTimers();

  test('should debounce the given value update', () => {
    let value = 1;
    const { result, rerender } = renderHook(() => useDebounceValue(value, 100));

    expect(result.current).toBe(1);

    rerender((value += 4));

    expect(result.current).toBe(1);

    act(() => {
      vitest.advanceTimersByTime(200);
    });

    expect(result.current).toBe(5);
  });
});
