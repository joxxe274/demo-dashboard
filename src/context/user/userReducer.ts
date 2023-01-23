import {
  UserState,
  UserActionTypes,
  IUser,
} from 'interfaces'

type Action =
  | { type: UserActionTypes.SET_LOADING; payload: boolean }
  | { type: UserActionTypes.SET_USER; payload: IUser }

export const userReducer = (
  state: UserState,
  action: Action
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
