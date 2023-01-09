import React from 'react'
import { Checkbox, CheckboxLabel } from './style'

interface FilterProp {
	setFilterTags:([])=>void
	filterTags: string[]
}
export const TransferFilter:React.FC<FilterProp> = ({filterTags, setFilterTags}) => {
	const onChangeHandler = (e:any) => {
		if (e.target.checked) {
			setFilterTags([...filterTags, e.target.value])
		  } else {
			setFilterTags(
			  filterTags.filter((filterTag) => filterTag !== e.target.value)
			)
		  }
		
	}
  return (
	<div>
		<CheckboxLabel>
			<Checkbox 
			onChange={onChangeHandler}
			value='all'
			type="checkbox"/>
			Все
		</CheckboxLabel>
		<CheckboxLabel>
			<Checkbox 
			onChange={onChangeHandler}
			value="0"
			type="checkbox"/>
			  Без пересадок
		</CheckboxLabel>
		<CheckboxLabel>
			<Checkbox 
			onChange={onChangeHandler}
			value="1"
			type="checkbox"/>
			1 пересадка
		</CheckboxLabel>
		<CheckboxLabel>
			<Checkbox 
			onChange={onChangeHandler}
			value="2"
			type="checkbox"/>
			2 пересадки
		</CheckboxLabel>
		<CheckboxLabel>
			<Checkbox 
			onChange={onChangeHandler}
			value="3"
			type="checkbox"/>
			3 пересадки
		</CheckboxLabel>
	</div>
  )
}
