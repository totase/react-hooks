# useClickOutside

Detect clicks outside a specified element.

## Usage

```tsx
const Usage = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    ...
  };

  useClickOutside(elementRef, handleClickOutside);

  return (
    <div ref={elementRef} />;
  );
};
```
