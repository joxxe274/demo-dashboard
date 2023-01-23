import React from 'react'

import { AuthContext, authReducer, UserContext } from 'context'
import { AuthState, AuthActionsTypes } from 'interfaces'
import { login, validateToken } from 'services';
import { useNavigate } from 'react-router-dom';
import { removeLocalStorage, getLocalStorage, setLocalStorage } from 'utils/localStorage';
import { useCookies } from 'react-cookie';


interface Props {
  children: React.ReactNode
}

const AuthInitialState: AuthState = {
  isAuthenticating: true,
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    authReducer,
    AuthInitialState
  )
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserContext);
  const[cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const redirectToDashboard = () => {
    // validate if current router include dashboard
    if (window.location.pathname.includes('dashboard')) return;

    navigate('/dashboard');
  }

  React.useEffect(() => {
    const tokenNew = 'TOKEN' as 'cookie-name';
    setCookie(tokenNew, 'asdasd', { path: '/' });

    const validateUser = async (token: string) => {
      const res = await validateToken(token)
      if (res.id) {
        setUser(res);
        setLoading(false);
        redirectToDashboard();
        return;
      }

      navigate('/auth');
      setLoading(false);
      removeLocalStorage('token')
    }
    const token = getLocalStorage('token');

    if (token) {
      validateUser(token);
      return;
    }
    navigate('/auth');
    setLoading(false);
  }, [])

  const setLoading = (loading: boolean) => {
    dispatch({
      type: AuthActionsTypes.SET_IS_AUTHENTICATING,
      payload: loading
    })
  }

  const setError = (error: boolean) => {
    dispatch({
      type: AuthActionsTypes.SET_ERROR,
      payload: error
    })
  }

  const signIn = async (username: string, password: string) => {
    
    setLoading(true);
    setError(false);

    const response = await login(username, password);

    if (!response || response.error) {
      setError(true)
      setLoading(false);
      return;
    }

    setUser(response.user);
    setLoading(false);
    setLocalStorage('token', response.token);
    redirectToDashboard();
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
