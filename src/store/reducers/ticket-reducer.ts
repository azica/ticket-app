import { TicketAction, TicketActionTypes, TicketState, ITicket } from '../types';

let initialState:TicketState = {
	tickets: [],
	currencyArray: [{RUB: 'P'}, {USD: '$'}, {EUR: '€'}],
	currentCurrency: {RUB: 'P'}
}

const ticketReducer = (state=initialState, action:TicketAction):TicketState=> {
	switch(action.type) {
		case TicketActionTypes.FETCH_TICKETS:
			return {
				...state,
				tickets: action.payload
			}
		case TicketActionTypes.SET_CURRENT_CURRENCY: 
				return {
					...state,
					currentCurrency: action.payload
				}
		case TicketActionTypes.SET_CURRENCY:
			return {
				...state,
				tickets: state.tickets.map(el=>{
					var newPrice = el.price / Number(Object.values(action.payload))
					return {...el, price: Math.floor(newPrice)};			
				})
			}
		
		default: 
            return state;
	}
}

export default ticketReducer;