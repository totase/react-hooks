import { renderHook, act } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import useTimeout from './useTimeout';

describe('useTimeout', () => {
  const setup = () => {
    vitest.useFakeTimers();

    const callback = vitest.fn();
    const { result } = renderHook(() => useTimeout(1000));

    return { result, callback };
  };

  test('should call the callback after the timeout', () => {
    const { result, callback } = setup();

    act(() => {
      result.current.setTimer(callback);
    });

    vitest.advanceTimersByTime(1200);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should clear the timeout', () => {
    const { result, callback } = setup();

    act(() => {
      result.current.setTimer(callback);

      result.current.clearTimer();
    });

    vitest.advanceTimersByTime(1200);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
