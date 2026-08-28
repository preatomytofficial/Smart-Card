import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'create' }
  | { name: 'features' }
  | { name: 'examples' }
  | { name: 'publish' };

export function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash || hash === '/') return { name: 'home' };
  if (hash === 'create') return { name: 'create' };
  if (hash === 'features') return { name: 'features' };
  if (hash === 'examples') return { name: 'examples' };
  if (hash === 'publish') return { name: 'publish' };
  return { name: 'home' };
}

export function navigate(path: string) {
  window.location.hash = path;
  window.scrollTo(0, 0);
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const handler = () => setRoute(parseHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return route;
}
