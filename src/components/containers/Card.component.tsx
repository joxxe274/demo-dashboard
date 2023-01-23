import React from 'react';

import { cssClassName } from 'utils';

// styles
import styles from 'styles/components/Card.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string[];
}

export const CardComponent: React.FC<Props> = ({ children, className = [] }) => {
  return (
    <div className={cssClassName([styles.card, ...className])}>
      {children}
    </div>
  );
};