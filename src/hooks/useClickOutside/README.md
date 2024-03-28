# useClickOutside

Detect clicks outside a specified element.

## Usage

```ts
const Usage = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    ...
  }

  useClickOutside(elementRef, handleClickOutside);

  ...
};
```
