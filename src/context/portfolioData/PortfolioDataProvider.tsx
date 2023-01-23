import React from 'react'

import { PortfolioContext, portfolioReducer  } from 'context'
import { PortfolioDataState, PortfolioDataActionsTypes, INITIAL_DATA } from 'interfaces'
import { getData as getPortfolioData } from 'services';
import { useChartSector } from '../../hooks/ChartSector.hook';


interface Props {
  children: React.ReactNode
}

const PortfolioInitialState: PortfolioDataState = {
  error: false,
}

export const PortfolioProvider: React.FC<Props> = ({ children }) => {
  
  const [state, dispatch] = React.useReducer(
    portfolioReducer,
    PortfolioInitialState
  )
  const [sector_split] = useChartSector(state.data?.sector_split)


  const getData = async () => {
    const res = await getPortfolioData()
    if (res.sector_split) {
      dispatch({
        type: PortfolioDataActionsTypes.SET_DATA,
        payload: res
      })
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        ...state,
        getData,
        sector_split,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
