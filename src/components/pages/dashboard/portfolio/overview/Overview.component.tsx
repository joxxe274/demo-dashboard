/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// components
import { ResumeComponent, ChartsComponent } from 'components/pages/dashboard/portfolio';
import { CardComponent } from 'components/containers/Card.component';

// context
import { PortfolioContext } from 'context';

// utils
import { cssClassName } from 'utils';

// styles
import styles from 'styles/pages/Portfolio.module.scss';

export const OverviewComponent: React.FC = () => {

  const { getData } = React.useContext(PortfolioContext);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles['overview-container']}>
      <div className={cssClassName([
        styles['overview-row'],
        styles['overview-row--first']
      ])}>
        <ResumeComponent />
        <ChartsComponent />
      </div>
      <div className={cssClassName([
        styles['overview-row'],
        styles['overview-row--second']
      ])}>
        <CardComponent>
          <p>hola</p>
        </CardComponent>
      </div>
    </div>
  );
};