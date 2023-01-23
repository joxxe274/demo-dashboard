export interface AuthState {
  isAuthenticating?: boolean;
  error?: boolean;
}

export interface AuthContextProps extends AuthState {
  signIn: (email: string, password: string) => void
}

export enum AuthActionsTypes {
  SET_IS_AUTHENTICATING = '[AUTH] Set Is Authenticating',
  SET_ERROR = '[AUTH] Set Error',
}