export interface IUser {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
}

export interface UserState {
  loading?: boolean;
  user?: IUser;
}

export interface UserContextProps extends UserState {
  setUser: (user: IUser) => void;
}

export enum UserActionTypes {
  SET_LOADING = '[USER] Set Loading',
  SET_USER = '[USER] Set User',
}