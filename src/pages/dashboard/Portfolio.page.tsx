import React from 'react';

// components
import { DashboardTypePrimary } from 'layouts/DashboardTypePrimary.layout';
import { OverviewComponent } from 'components/pages/dashboard/portfolio';

// context
import { PortfolioProvider } from 'context';

export const PortfolioPage: React.FC = () => {

  const [screen, setScreen] = React.useState<'overview' | 'details'>('overview');

  return (
    <DashboardTypePrimary title='Portfolio' showActions={true} screen={screen} setScreen={setScreen}>
      <PortfolioProvider>
        <OverviewComponent />
      </PortfolioProvider>
    </DashboardTypePrimary>
  );
};