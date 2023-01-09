import { ITicket } from '../store/types';

export const useFilter =(filterTags:string[], tickets: ITicket[])=> {

	const filteredTickets = tickets.filter(ticket=>
		filterTags.some(filter=> {
				if(filter=== "all"){
					return tickets
				}
				return [ticket.stops].includes(Number(filter))}
			)
		)
	if(filteredTickets.length > 0) {
		return filteredTickets
	}
	return tickets;

}
