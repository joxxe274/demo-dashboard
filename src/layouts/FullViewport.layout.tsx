import React from 'react';

import { cssClassName } from 'utils';


interface Props {
  children: React.ReactNode;
  className?: string[];
}
export const FullViewportLayout: React.FC<Props> = ({ children, className = [] }) => {
  return (
    <div className={cssClassName(['full-viewport', ...className])}>
      {children}
    </div>
  );
};