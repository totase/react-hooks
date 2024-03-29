# usePrevious

Returns the previous value of the provided value.

## Usage

```tsx
const Usage = () => {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  ...
};
```
