import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header(props) {
  return (
    <HeaderContainer>
      <h1>Fruit Emporium</h1>
        <LinkContainer>
          <Link to="/">Home </Link>
          <Link to="/about">About</Link>
        </LinkContainer>
    </HeaderContainer>
  )
}

//-------------- STYLES --------------
const HeaderContainer = styled.div`
  display: flex;
  height: 90px;
  font-family: Fantasy;
`
const LinkContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 40px;

  a {
    font-family: arial;
    text-decoration: none;
    margin: 20px;
  }
`


export default Header;
