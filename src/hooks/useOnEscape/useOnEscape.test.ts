import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vitest } from 'vitest';

import useOnEscape from './useOnEscape';

describe('useOnEscape', () => {
  const setup = () => {
    const user = userEvent.setup();

    const callback = vitest.fn();

    renderHook(() => {
      useOnEscape(callback);
    });

    expect(callback).toHaveBeenCalledTimes(0);

    return { user, callback };
  };

  test('should call the callback when escape key is pressed', async () => {
    const { user, callback } = setup();

    await user.keyboard('{escape}');

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should NOT call the callback when another key is pressed', async () => {
    const { user, callback } = setup();

    await user.keyboard('{k}');

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
