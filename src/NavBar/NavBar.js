import React from 'react';
import {
    Logo,
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';
  
const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <Logo>Logo</Logo>
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/' activeStyle>
            Universities
          </NavLink>
          <NavLink to='/' activeStyle>
            Programs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default NavBar;