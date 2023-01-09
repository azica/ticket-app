import styled from "styled-components";
import { Row, Column } from "../../globalStyles";

export const TicketCardRow = styled(Row)`
	background: #fff;
	border-radius: 10px;
	align-items: start;
	margin-bottom: 20px;
	&:hover {
		transition: box-shadow .2s linear,background .2s,-webkit-box-shadow .2s linear;
		box-shadow: 0 8px 16px rgba(0,0,0,.08);
	}
`
export const TicketCardColumn = styled(Column)`
	padding: 25px 20px;
	color: #636363;
	&:first-child {
		border-right:1px solid #e4e7e8;
		text-align: center;
	}
	&:nth-child(2) {
		display: flex;
		justify-content: space-between;
	}
`
export const Dep = styled.div`
	width: 55%;
	h2 {
		font-weight: 500;
		margin-bottom: 10px;
		font-size: 40px;
	}
	h4 {
		font-weight: 600;
		margin-bottom: 4px;
		font-size: 14px;
		
	}
	&:nth-child(2) {
		padding-left: 10px;
	}
	@media(max-width: 940px) {
		h2 {
			font-size: 25px;
		}
		h4 {
			font-size: 12px;
		}
	}
`
export const Line = styled.div`
	height: 1px;
	background: #636363;
	width: 100%;
	margin: 20px 55px 20px 20px;
	position: relative;
	svg {
		position: absolute;
		top: -12px;
		right: -25px;
		transform: rotate(45deg);

	}
	span {
		position: absolute;
		top: -16px;
		font-size: 13px;
		text-align: center;
		width: 100%;
		text-transform: uppercase;
	}
`
export const Button = styled.button`
	background: #ff6d00;
	color: #fff;
	border: none;
	border-radius: 10px;
	padding: 10px;
	display: block;
	width: 100%;
	font-size: 18px;
	margin-top: 20px;
`
