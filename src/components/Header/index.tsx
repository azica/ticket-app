import React from 'react'
import { HeaderWrap, Nav, NavLink } from './style'
import { Column, Container } from '../../globalStyles'

export const Header = () => {
  return (
	<HeaderWrap>
		<Container>
			<Nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/auth">Login</NavLink>
			</Nav>
		</Container>
	</HeaderWrap>
  )
}
