# usePagination

Manages the pagination of items.

## Usage

```tsx
const Usage = () => {
  const items = [
    { name: "Test" },
    ...
  ]

  const { currentItems, page, pages, setPage } = usePagination(items, 3);

  ...
};
```
