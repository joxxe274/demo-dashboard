import React from 'react';

// components
import { FullViewportLayout } from 'layouts/FullViewport.layout';

export const LoadingPage: React.FC = () => {
  return (
    <FullViewportLayout className={['flex-center-center']}>
      <span className='font-size-title'>
        Loading...
      </span>
    </FullViewportLayout>
  );
};