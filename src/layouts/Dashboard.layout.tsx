import React from 'react';
import { AnimateContainer } from 'react-animate-container';
import { cssClassName } from 'utils';

interface Props {
  className?: string[];
  children: React.ReactNode;
}
export const DashboardLayout: React.FC<Props> = ({ children, className = [] }) => {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <AnimateContainer.fadeIn 
      duration={.2}
      active={true}
      manualActive={true}
      delay={350}
      setOpacityNone={true} 
      className={cssClassName([...className])}>
      {children}
    </AnimateContainer.fadeIn>
  );
};
