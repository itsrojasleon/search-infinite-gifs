import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

const NavBar = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: rgb(51,51,51);
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 769px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media(max-width: 769px) {
    display: ${props => props.open ? 'block' : 'none'};
  }
`;
const Icons = styled.div`
  @media(max-width: 769px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;
const Icon = styled.i`
  font-size: 1.6em;
  color: white;
  display: none;
  text-align: right;
  &:hover {
    cursor: pointer; 
  }
  @media(max-width: 769px) {
    display: block;
  }
`;
const I = styled.i`
  color: white;
  font-size: 2em;
  transition: .3s; 
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

function Header() {
  const [menu, useMenu] = useState(false);
  const toggleMenu = () => useMenu(!menu);
  return (
    <NavBar showContent={menu}>
      <Icons>
        {!menu ? <Icon onClick={toggleMenu} className="fa fa-bars" aria-hidden="true"></Icon>
        : <Icon onClick={toggleMenu} className="fa fa-times" aria-hidden="true"></Icon>
        }
      </Icons>
      <Content open={menu}>
        <Toggle />
        <SearchBar />
        <a href="https://github.com/rojasleon/gifs-and-stickers" target="_blank">
          <I className="fab fa-github"></I>
        </a>
      </Content>
    </NavBar>
  );
}
export default Header;