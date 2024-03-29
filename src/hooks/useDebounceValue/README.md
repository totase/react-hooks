# useDebounceValue

Delays the update of a value by the specified delay time.

## Usage

```ts
const Usage = () => {
  const [count, setCount] = useState(0);

  const debouncedCount = useDebounceValue(count, 100);

  ...
};
```
