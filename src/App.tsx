import { useEmojiFavicon, useOnMount } from './hooks';

const App = () => {
  const { setFavicon } = useEmojiFavicon();

  useOnMount(() => setFavicon('🪝'));

  return <div />;
};

export default App;
