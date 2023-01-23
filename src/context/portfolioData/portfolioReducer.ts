import { PortfolioDataState, PortfolioDataActionsTypes } from 'interfaces'

type Action = 
  | { type: PortfolioDataActionsTypes.SET_DATA, payload: any }

export const portfolioReducer = (
  state: PortfolioDataState,
  action: Action
): PortfolioDataState => {
  switch (action.type) {
    case PortfolioDataActionsTypes.SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
