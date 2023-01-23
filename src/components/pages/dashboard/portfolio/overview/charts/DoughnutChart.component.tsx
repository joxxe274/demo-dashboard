import React from 'react';

// components
import { ChartCard } from '../';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// context
import { PortfolioContext } from 'context';

// utils
import { cssClassName, conditionalClass } from 'utils';
import { INITIAL_DATA } from 'interfaces';

// styles
import styles from 'styles/components/DoughnutChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_OPTIONS: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}

export const DoughnutChart: React.FC = () => {

  const state = React.useContext(PortfolioContext);
  const { sector_split } = state;

  return(
    <ChartCard title='Total value'>
      <div className={styles['doughnut-chart']}>
        <div className={styles['chart-container']}>
          <div className={styles['canvas-container']}>
            <Doughnut data={sector_split?.chart || INITIAL_DATA} options={CHART_OPTIONS} /> 
          </div>
        </div>
        <div className={styles['chart-labels']}>
          <ul className={styles['labels-list']}>
            {sector_split?.labels?.map((label, index) => (
              <li
                onClick={() => sector_split?.filterByIndex && sector_split?.filterByIndex(index)}
                key={index}
                className={cssClassName([
                  styles['label-item'],
                  conditionalClass(!label.active, styles['label-item--deactivated'])
                ])}>
                <span className={styles['label-item__color']} style={{ backgroundColor: label.color }}></span>
                <span className={styles['label-item__label']}>{label.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChartCard>
  )
}