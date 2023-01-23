import React from 'react';

// components
import { LoadingPage } from './Loading.page';
import { FullViewportLayout } from 'layouts/FullViewport.layout';
import { NavbarComponent } from 'components/ui/Navbar.component';
import { Outlet } from "react-router-dom";
// context
import { AuthContext } from 'context';

// styles
import styles from 'styles/pages/Dashboard.module.scss';

export const DashboardPage: React.FC = () => {
  const { isAuthenticating } = React.useContext(AuthContext);

  if (isAuthenticating) return <LoadingPage />;

  return (
    <FullViewportLayout className={['bg-secondary']}>
      <NavbarComponent />

      <div className={styles.dashboard}>
        <Outlet />
      </div>
    </FullViewportLayout>
  );
};