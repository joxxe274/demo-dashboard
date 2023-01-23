import React from 'react';
// components
import { CardComponent } from 'components/containers';

// utils
import { cssClassName, conditionalClass } from 'utils';

// styles
import styles from 'styles/pages/Portfolio.module.scss';

// assets
import trendUpIcon from 'assets/img/icons/trend-up.svg';
import trendDownIcon from 'assets/img/icons/trend-down.svg';

interface Props {
  title: string;
  value: string;
  trend?: number;
  currency?: string;
}

export const CardResumeComponent: React.FC<Props> = (
  {
    title,
    value,
    currency,
    trend = 0,
  }
) => {

  const trendDirection = trend > 0 ? 'up' : 'down';

  const trendClass = cssClassName([
    styles['header__trend'],
    conditionalClass(trendDirection === 'up', styles['header__trend--positive'], styles['header__trend--negative']),
  ]);

  const trendIcon = trendDirection === 'up' ? trendUpIcon : trendDownIcon;
  return (
    <CardComponent className={[styles['card-resume']]}>
      <div className={styles['card-resume__header']}>
        <span className={styles['header__title']}>{title}</span>
        {trend !== 0 
          ? (
              <span className={trendClass}>
                {trend}
                <img src={trendIcon} alt="trend" />
              </span>
            ) 
          : null
        }
      </div>
      <div className={styles['card-resume__content']}>
        <span className={styles['content__value']}>
          {currency ? (<span>{currency}</span>) : null}
          {value}
        </span>
      </div>
    </CardComponent>
  );
};