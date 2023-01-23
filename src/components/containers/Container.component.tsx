import React from 'react';

import { cssClassName } from 'utils';

interface Props {
  children: React.ReactNode;
  className?: string[];
}

export const Container: React.FC<Props> = ({ children, className = [] }) => {
  return (
    <div className={cssClassName(['container', ...className])}>
      {children}
    </div>
  );
}