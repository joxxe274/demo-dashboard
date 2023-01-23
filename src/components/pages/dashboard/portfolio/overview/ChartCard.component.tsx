import React from 'react';
// components
import { CardComponent } from 'components/containers';

// styles
import styles from 'styles/pages/Portfolio.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<Props> = (
  {
    title,
    children
  }
) => {
  return (
    <CardComponent className={[styles['card-resume'], styles['card-chart']]}>
      <div className={styles['card-resume__header']}>
        <span className={styles['header__title']}>{title}</span>
      </div>
      <div className={styles['card-resume__content']}>
        {children}
      </div>
    </CardComponent>
  );
};