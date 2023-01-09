import { Dispatch } from "redux"
import axios from 'axios'
import { TicketAction, TicketActionTypes } from '../types';


const url = process.env.REACT_APP_DB_URL

export const fetchTickets = () => {
	return async(dispatch:Dispatch<TicketAction>)=> {
	  const response = await axios.get(`tickets.json`)
	  dispatch({type: TicketActionTypes.FETCH_TICKETS, payload: response.data.tickets})
   }
}
export const setCurrency = (currency:object, currentCurrency:{}) => {
	return async(dispatch:Dispatch<TicketAction>)=> {
		for(const [key, value] of Object.entries(currency)){

			var myHeaders = new Headers();
			myHeaders.append("apikey", "TmRDujHMck2xqdcOIgzckkYFE4r2UhJo");

			const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${Object.keys(currentCurrency)}&base=${key}`, { 
				method: 'GET',
			redirect: 'follow',
			headers: myHeaders})
			const data = await response.text()
			let text = await JSON.parse(data)
			let curCurrency = Number(Object.values(text.rates) )
			dispatch({type: TicketActionTypes.SET_CURRENT_CURRENCY, payload: currency})
			dispatch({type: TicketActionTypes.SET_CURRENCY, payload:text.rates})

	 
		}

		
   }
}
