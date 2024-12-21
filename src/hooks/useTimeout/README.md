# useTimeout

Set a timeout and clear it when the component unmounts.

## Usage

```tsx
const Usage = () => {
  const { setTimer, clearTimer } = useTimeout(2000);

  useOnMount(() => {
    setTimer(() => console.log('What up'));
  });

  ...
};
```
