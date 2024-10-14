import { createRoute, useParams } from '@tanstack/react-router';

import { rootRoute } from '../../RootRoute.js';

export const tenantDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tenants/$tenantId',
  component: TenantDashboard,
});

export function TenantDashboard() {
  const params = useParams({ from: '/tenants/$tenantId' });

  return (
    <div className={'TenantDashboard'}>
      <h2>Dashboard for {params.tenantId}</h2>
    </div>
  );
}
