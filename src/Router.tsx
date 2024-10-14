import { createRouter, type Router } from '@tanstack/react-router';

import { rootRoute } from './RootRoute.js';
import { homeRoute } from './View/Home/Home.js';
import { tenantDashboardRoute } from './View/Tenant/TenantDashboard.js';

export const routeTree = rootRoute.addChildren([
  homeRoute,
  tenantDashboardRoute,
]);

export const router: Router<typeof routeTree, 'always'> = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
