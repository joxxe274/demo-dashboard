import React from 'react';

import { RouteObject } from 'react-router-dom';

import { DashboardLayout } from 'layouts/Dashboard.layout';
import { HomeDashboard, PortfolioPage } from 'pages/dashboard';

const PageWithLayout = (Page: React.FC) => {
  return (
    <DashboardLayout>
      <Page />
    </DashboardLayout>
  )
};

export const DashboardRouter: RouteObject[] = [
  {
    path: '/dashboard/',
    element: PageWithLayout(HomeDashboard)
  },
  {
    path: '/dashboard/portfolio',
    element: PageWithLayout(PortfolioPage)
  },
]