import React, {useState}  from 'react'
import { PriceButton, PriceFilterWrap } from './style'
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

export const PriceFilter:React.FC = () => {
	const [isActive, setActive] = useState({});
	const {currencyArray, currentCurrency} = useTypedSelector(state=>state.tickets)
	const {setCurrency} = useActions()
	
	const ClickHandler =(cur:object)=>{
		setCurrency(cur, currentCurrency)
		setActive(cur)
	}

  return (
	<PriceFilterWrap>
		{currencyArray.map(cur=>{
			for(const [key, val] of Object.entries(cur)){
				return <PriceButton 
				className={cur==isActive? 'active': ''}
				onClick={()=>ClickHandler(cur)}
				key={key}
				>
				{key}
			</PriceButton>
			}
			
		}
		
			
			
		)}
	</PriceFilterWrap>
  )
}
