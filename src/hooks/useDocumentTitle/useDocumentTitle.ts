import { useEffect } from 'react';

const APPLICATION_NAME = 'Hooks';

/**
 * Dynamically sets the document title. Title is reset when hook is unmounted.
 *
 * @param title - The title to set.
 * @param appendName - Whether to append the application name to the title.
 *
 * @returns void
 */
const useDocumentTitle = (title: string, appendName = true) => {
  useEffect(() => {
    if (appendName) document.title = `${title} | ${APPLICATION_NAME}`;
    else document.title = title;

    return () => {
      document.title = APPLICATION_NAME;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
};

export default useDocumentTitle;
