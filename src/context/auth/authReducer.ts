import { AuthState, AuthActionsTypes } from 'interfaces'

type Action = 
  | { type: AuthActionsTypes.SET_IS_AUTHENTICATING, payload: boolean }
  | { type: AuthActionsTypes.SET_ERROR, payload: boolean }

export const authReducer = (
  state: AuthState,
  action: Action
): AuthState => {
  switch (action.type) {
    case AuthActionsTypes.SET_IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload
      }
    case AuthActionsTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
