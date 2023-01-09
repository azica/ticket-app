import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  body {
	background: #f3f7fa;
	font-family: 'Roboto', sans-serif;
  }

`;

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`
interface Flex {
  direction?: string;
  align?: string;
  justify?: string;
  flex?: string;
}

export const Row =styled.div<Flex>`
  display: ${props => props.flex || 'flex'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: wrap;
  margin: 0 -10px;
  @media(max-width: 940px) {
	margin: 0 10px;
  }
`
interface Column {
  flex?: string,
  align?: string,
  mFlex?: string
  
}
export const Column = styled.div<Column>`
	text-align: ${props => props.align || "left"};
	padding: 0 10px;
	flex: ${props => props.flex || "100%"};
	width: ${props => props.flex || "100%"};
	
`
interface Button {
  
}

interface Button {
  
}
export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #1E2832;
  height: 46px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 23px;
  line-height: 100%;
  text-transform: capitalize;
  color: #FFFFFF;
  padding: 0 26px;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;

`
export const Subtitle = styled.h2`
    margin: 70px 0 20px 0;
    text-align: center;
    font-size: 28px;
    color: #1E2832;
    font-family: 'Poppins',sans-serif;
`
