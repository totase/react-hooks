import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import usePrevious from './usePrevious';

describe('usePrevious', () => {
  test('should keep track of the previous value to the given prop', () => {
    let value = 1;
    const { result, rerender } = renderHook(() => usePrevious(value));

    value += 4;

    rerender();
    // should not have updated on the first re-render
    expect(result.current).toBe(1);

    rerender();
    expect(result.current).toBe(5);
  });
});
