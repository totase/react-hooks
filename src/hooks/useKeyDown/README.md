# useKeyDown

Returns a callback function to handle key down events for specified keys.

## Usage

```tsx
const Usage = () => {
  const handleAction = () => {
    ...
  }

  const onKeyDown = useKeyDown({ action: handleAction });

  return (
    <div onKeyDown={onKeyDown} />
  );
};
```
