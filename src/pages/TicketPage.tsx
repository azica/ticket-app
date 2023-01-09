
import { Column, Container, Row } from '../globalStyles'
import { TicketCard } from '../components/TicketCard'
import { TicketFilter } from '../components/TicketFilter'
import { useEffect, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useFilter } from '../hooks/useFilter'

export const TicketPage = () => {
	const {tickets} = useTypedSelector(state=>state.tickets)
	const [filterTags, setFilterTags] = useState<string[]>([])
	const {fetchTickets} = useActions()
	useEffect(()=>{
		fetchTickets()
	}, [])

	const filteredTickets = useFilter(filterTags, tickets)
  return (
	<Container>
		<Row align='start'>
			<Column flex="30%" className="d-none">
				<TicketFilter setFilterTags={setFilterTags} filterTags={filterTags}/>
			</Column>
			<Column flex="70%">
				{filteredTickets?.map((ticket, index)=><TicketCard key={index} ticket={ticket}/>)}
			</Column>
		</Row>
	</Container>
  )
}
