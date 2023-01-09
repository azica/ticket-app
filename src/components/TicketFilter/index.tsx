import React from 'react'
import { FilterWrap, H3 } from './style'
import { PriceFilter } from './PriceFilter'
import { TransferFilter } from './TransferFilter'

interface FilterProp {
	setFilterTags:([])=>void,
	filterTags: string[]
}
export const TicketFilter:React.FC<FilterProp> = ({filterTags, setFilterTags}) => {
  return (
	<FilterWrap>
		<H3>Валюта</H3>
		<PriceFilter/>
		<H3>Количество пересадок</H3>
		<TransferFilter setFilterTags={setFilterTags} filterTags={filterTags}/>
	</FilterWrap>
  )
}
