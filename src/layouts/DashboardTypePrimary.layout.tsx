import React from 'react';
// components
import { Container } from 'components/containers';

// styles
import styles from 'styles/pages/Portfolio.module.scss';
import { cssClassName, conditionalClass } from 'utils';

interface Props {
  title?: string;
  showActions?: boolean;
  children: React.ReactNode;
  screen: 'overview' | 'details';
  setScreen?: (screen: 'overview' | 'details') => void;
}

export const DashboardTypePrimary: React.FC<Props> = ({ 
  title, 
  showActions = false, 
  screen = 'overview',
  setScreen = () => {},
  children 
}) => {
  return (
    <Container>
      <div className={styles.portfolio}>
        <div className={styles['portfolio__header']}>
          <h1>{title}</h1>
          {showActions 
            ? (
              <div className={styles['portfolio__header__actions']}>
                <button
                  onClick={() => setScreen('overview')}
                  className={cssClassName([
                    styles.action,
                    conditionalClass(screen === 'overview', styles['action--active'])
                  ])}>
                  Overview
                </button>
                <button
                  onClick={() => setScreen('details')}
                  className={cssClassName([
                    styles.action,
                    conditionalClass(screen === 'details', styles['action--active'])
                  ])}>
                  Portfolio details
                </button>
              </div>
            )
            : null
          }
        </div>

        <div className={styles['portfolio__content']}>
          {children}
        </div>
      </div>
    </Container>
  );
};