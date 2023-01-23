import React from 'react';

import { cssClassName } from 'utils';

// styles
import styles from 'styles/components/Button.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string[];
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent: React.FC<Props> = ({
  children,
  className = [],
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={cssClassName([styles.button, ...className])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};