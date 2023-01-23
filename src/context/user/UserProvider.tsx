import React from 'react'

import { UserContext, userReducer } from './';
import {
  UserState,
  IUser
} from 'interfaces';


interface Props {
  children: React.ReactNode
}

const User_INITAL_SATATE: UserState = {
  loading: true,
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    userReducer,
    User_INITAL_SATATE
  )

  const setUser = (user: IUser) => {
    console.log('setUser', user)
  }


  return (
    <UserContext.Provider
      value={
        {
          ...state,
          setUser
        }
      }
    >
      {children}
    </UserContext.Provider>
  )
}
