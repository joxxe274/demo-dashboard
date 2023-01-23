import React from 'react';

// components
import { DoughnutChart } from './charts';

// utils
import { cssClassName } from 'utils';

// styles
import styles from 'styles/pages/Portfolio.module.scss';

export const ChartsComponent: React.FC = () => {
  return (
    <div className={cssClassName([
      styles['overview-row__item'],
      styles['overview-row__item--charts']
    ])}>
      <DoughnutChart />
      <DoughnutChart />
      <DoughnutChart />
      <DoughnutChart />
    </div>
  )
}