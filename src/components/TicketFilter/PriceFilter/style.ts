import styled from "styled-components";

export const PriceFilterWrap = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`
export const PriceButton = styled.button`
	border: 1px solid #636363;
	line-height: 36px;
	display: block;
	width: calc(100%/3);
	color: #2196f3;
	font-size: 16px;
	text-transform: uppercase;
	cursor: pointer;
	background: #fff;
	font-weight: 500;
	transition: all .3s ease-in;
	&:hover {
		border-color: #2196f3;
		background: #f2fcff;
	}
	&.active {
		background: #2196f3;
		color: #fff;
		border-color: #2196f3;
	}
	&:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px
	}
	&:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`