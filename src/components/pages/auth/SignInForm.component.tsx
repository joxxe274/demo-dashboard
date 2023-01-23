import React from 'react';

// components
import { InputComponent } from 'components/forms/Input.component';
import { ButtonComponent } from 'components/buttons/Button.component';

// context
import { AuthContext } from 'context';

// styles
import styles from 'styles/pages/Auth.module.scss';


export const SignInForm: React.FC = () => {

  const { isAuthenticating, signIn, error } = React.useContext(AuthContext);
  
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const isValidData = userData.password.length > 0 && userData.username.length > 0;

  const login = () => signIn(userData.username, userData.password)

  return (

    <div className={styles['form-container']}>

      <InputComponent
        label='Username'
        name='username'
        value={userData.username}
        onChange={onChange} />
      <InputComponent
        label='Password'
        type='password'
        name='password'
        value={userData.password}
        onChange={onChange} />

      {error
        ? (<p className={styles.error}>Invalid username or password</p>)
        : null
      }


      <ButtonComponent
        onClick={login}
        disabled={!isValidData || isAuthenticating}
        className={['flex-center-center']}>
        <span>Login</span>
      </ButtonComponent>

    </div>
  )
}