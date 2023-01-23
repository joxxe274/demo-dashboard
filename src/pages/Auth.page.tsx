import React from 'react';

// components
import { SignInForm } from 'components/pages/auth/SignInForm.component';

// context

// components
import { Container, CardComponent } from 'components/containers';
import { LoadingPage } from 'pages/Loading.page';
import { FullViewportLayout } from 'layouts/FullViewport.layout';

// context
import { AuthContext } from 'context';

// styles
import styles from 'styles/pages/Auth.module.scss';

export const AuthPage: React.FC = () => {

  const { isAuthenticating } = React.useContext(AuthContext);

  if (isAuthenticating) return <LoadingPage />

  return (
    <FullViewportLayout className={['flex-center-center', 'bg-secondary']}>
      <Container className={['flex-center-center']}>
        <CardComponent className={['flex-center-center', styles['auth-card']]}>
          <h1 className='font-size-subtitle'>Login</h1>
           <SignInForm />
          </CardComponent >
        </Container >
      </FullViewportLayout >
  );
};