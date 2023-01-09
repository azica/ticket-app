export interface ITicket {
	id?: number
	origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: number
    price: number
}

export interface TicketState {
	tickets: ITicket[],
	currencyArray: object[],
	currentCurrency: {}
}
export enum TicketActionTypes {
	FETCH_TICKETS = 'FETCH_TICKETS',
	SET_CURRENCY = 'SET_CURRENCY',
	SET_CURRENT_CURRENCY= 'SET_CURRENT_CURRENCY'

}

interface fetchTickets {
	type: TicketActionTypes.FETCH_TICKETS,
	payload: ITicket[]
}
interface setCurrency {
	type: TicketActionTypes.SET_CURRENCY,
	payload: object
}
interface setCurrentCurrency {
	type: TicketActionTypes.SET_CURRENT_CURRENCY,
	payload: object
}
export type TicketAction = 
	fetchTickets |
	setCurrency |
	setCurrentCurrency

