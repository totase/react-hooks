import { renderHook, act } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useScreenSize from './useScreenSize';

describe('useScreenSize', () => {
  test('should return the initial screen size', () => {
    const { result } = renderHook(() => useScreenSize());

    const width = window.innerWidth;
    const height = window.innerHeight;
    expect(result.current).toEqual({ width, height });
  });

  test('should update the screen size when the screen is resized', () => {
    const { result } = renderHook(() => useScreenSize());

    window.innerWidth = 500;
    window.innerHeight = 500;

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 500, height: 500 });
  });
});
