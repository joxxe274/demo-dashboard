import React from 'react';

import { cssClassName, conditionalClass } from 'utils';

// styles
import styles from 'styles/components/Input.module.scss';

interface Props {
  className?: string[];
  type?: string;
  placeholder?: string;
  value?: string | number;
  label?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<Props> = ({
  className = [],
  type = 'text',
  placeholder = '',
  value = '',
  label = '',
  name = '',
  disabled = false,
  onChange,
}) => {

  const activeLabel = conditionalClass(value !== '' || placeholder !== '', styles['label--active']);

  return (
    <div className={cssClassName([styles['input-container'], ...className])}>
      
      {label 
        ? (<label 
            onClick={(e) => e.stopPropagation()}
            className={
            cssClassName([
              styles.label, 
              activeLabel
              ])
            } htmlFor={name}>{label}
          </label> )
        : null}
      
      <input
        name={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};