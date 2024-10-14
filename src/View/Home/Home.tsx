import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../../RootRoute.js';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export function Home() {
  return (
    <div className={'Home'}>
      <h1>This is home page</h1>
    </div>
  );
}
