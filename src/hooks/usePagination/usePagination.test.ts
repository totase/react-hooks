import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import usePagination from './usePagination';

describe('usePagination', () => {
  const setup = () => {
    const items = Array.from({ length: 50 }, (_, i) => i + 1);
    const { result } = renderHook(() => usePagination(items, 5));

    return { result };
  };

  test('returns the correct page of items', () => {
    const { result } = setup();

    expect(result.current.currentItems).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns the correct page number', () => {
    const { result } = setup();

    expect(result.current.page).toBe(1);

    act(() => {
      result.current.setPage(5);
    });

    expect(result.current.page).toBe(5);
  });
});
