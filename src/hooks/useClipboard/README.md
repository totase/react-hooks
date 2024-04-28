# useClipboard

Provides functionality to copy text to the clipboard.

## Usage

```tsx
const Usage = () => {
  const { copyToClipboard } = useClipboard();

  return <button onClick={() => copyToClipboard('what up')}>Click to copy</button>;
};
```
