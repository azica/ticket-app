import React from 'react'
import { Button, TicketCardColumn, TicketCardRow, Dep, Line } from './style'
import { ITicket } from '../../store/types'
import { useTypedSelector } from '../../hooks/useTypedSelector';
interface PropsTicket {
	ticket: ITicket
}
export const TicketCard:React.FC<PropsTicket> = ({ticket}) => {
	const {currentCurrency} = useTypedSelector(state=>state.tickets)
  return (
		<TicketCardRow>
			<TicketCardColumn flex='30%'>
				<h3>{ticket.carrier}</h3>
				<Button>Купить <br/> за {ticket.price }{Object.values(currentCurrency)}</Button>
			</TicketCardColumn>
			<TicketCardColumn flex='70%' className="aaa">
				<Dep>
					<h2>{ticket.departure_time}</h2>
					<h4>{ticket.origin}, {ticket.origin_name}</h4>
					<p>{ticket.departure_date}</p>
				</Dep>
				<Line>
					{ticket.stops == 0?<span>без пересадка</span> : <span>{ticket.stops} пересадка</span>}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-test-id="icon" aria-hidden="true"><path d="M18.703 4c-.675-.01-1.486.405-2.163 1.081-1.107.997-2.195 2.114-3.243 3.243L4.65 6.594 4 7.893l6.486 3.243-3.675 4.325c-.843-.278-2.162-.593-2.162.432 0 .203.05.411.216.649l2.594 2.594c.238.166.446.216.649.216 1.025 0 .71-1.319.432-2.162l4.325-3.675L16.108 20l1.297-.649-1.73-8.648c1.13-1.048 2.247-2.136 3.244-3.243.676-.677 1.091-1.488 1.08-2.163-.005-.363-.12-.709-.352-.944-.235-.232-.581-.347-.944-.353z"></path></svg>
				</Line>
				<Dep>
					<h2>{ticket.arrival_time}</h2>
					<h4>{ticket.destination}, {ticket.destination_name}</h4>
					<p>{ticket.arrival_date}</p>
				</Dep>
			</TicketCardColumn>
		</TicketCardRow>
  )
}

