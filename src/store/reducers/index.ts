import { combineReducers } from 'redux'
import ticketReducer from './ticket-reducer'

export const rootReducer = combineReducers(
    {
        tickets: ticketReducer
    }
   
)

export type RootState = ReturnType<typeof rootReducer> 
