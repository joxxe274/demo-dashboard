import React from 'react';

// components
import { CardComponent } from 'components/containers';

// utils
import { cssClassName } from 'utils';

// styles
import styles from 'styles/pages/Portfolio.module.scss';
import { CardResumeComponent } from './CardResume.component';

export const ResumeComponent: React.FC = () => {
  return (
    <div className={cssClassName([
      styles['overview-row__item'],
      styles['overview-row__item--resume']
    ])}>
      <CardResumeComponent
        title='Total value'
        value='1,000,000'
        currency='€'
        trend={0.4} />
      <CardResumeComponent
        title='Total value'
        value='1,000,000'
        trend={0.4} />
      <CardResumeComponent
        title='Total value'
        value='1,000,000'
        trend={0.4} />
      <CardResumeComponent
        title='Total value'
        value='1,000,000'
        trend={0.4} />
    </div>
  )
}