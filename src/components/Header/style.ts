import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
// import search from '../../images/search.svg';
// import user from '../../images/User.svg';
import { Row } from '../../globalStyles';

export const HeaderWrap = styled.header`

`


// export const Logo = styled.img.attrs({
//   src: `${logo}`
// })`
// width: 180px;
// height: 34px;
// `;
export const Nav = styled.nav`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const NavLink = styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 15px;
    display: inline-block;
`
// export const SearchIcon = styled.img.attrs({
//   src: `${search}`
// })`
//   display: inline-block;
// `
export const HeaderText = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0B0B0B;
  margin-left: 25px;
  cursor: pointer;
` 
// export const UserIcon = styled.img.attrs({
//   src: `${user}`
// })`
// display: inline-block;
// margin-right: 7px;
// `
// export const ShoppingIcon = styled.img.attrs({
//   src: `${shoppingIcon}`
// })`
// display: inline-block;
// margin-right: 7px;
// `
