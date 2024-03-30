import { useMemo, useState } from 'react';

/**
 * Manages the pagination of items.
 *
 * @template T - Generic reference to the type of items.
 *
 * @param items - An array of items to be paginated.
 * @param pageSize - The number of items per page (defaults to 10).
 *
 * @returns An object containing the current page of `items`, current page number, total number of pages, and a function to set the current page.
 */
const usePagination = <T>(items: T[], pageSize = 10) => {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(items.length / pageSize);
  const currentItems = useMemo(() => items.slice((page - 1) * pageSize, page * pageSize), [items, page, pageSize]);

  return { currentItems, page, pages, setPage };
};

export default usePagination;
