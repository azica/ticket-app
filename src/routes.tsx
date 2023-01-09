import React from 'react'
import { Route,  Routes,  useParams } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { TicketPage } from './pages/TicketPage'

export const useRoutes = (isAuth:boolean) => {
	const {id} = useParams()
	
    if (isAuth) {
	   	return (
			<Routes>
				<Route path="/auth" element={ <AuthPage />}/>
				<Route path="/" element={ <TicketPage />}/>
			</Routes>
		)
    } else {
		return (
			<Routes>
				<Route path="/auth" element={ <AuthPage />}/>
			</Routes>
		)
	}

}
