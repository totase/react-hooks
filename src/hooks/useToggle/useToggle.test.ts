import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useToggle from './useToggle';

describe('useToggle', () => {
  test('should toggle the given value', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.active).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.active).toBe(true);
  });

  test('should reset the value', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.active).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.active).toBe(false);
  });
});
