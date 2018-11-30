import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

const NavBar = styled.nav`
  width: 100%;
  @media(max-width: 769px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: white;
  border-bottom: 1px solid rgb(236,235,235);
  @media(max-width: 769px) {
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Icons = styled.div`
  @media(max-width: 769px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 12px; 
    background-color: white;
  }
`;
const Icon = styled.i`
  font-size: 1.6em;
  color: black;
  display: none;
  text-align: right;
  transition: .3s;
  &:hover {
    cursor: pointer; 
    color: rgb(135,135,135);
  }
  @media(max-width: 769px) {
    display: block;
  }
`;
const I = styled.i`
  color: black;
  font-size: 2em;
  transition: .3s; 
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const SearchBarContainer = styled.div`
  width: 100%;
  background-color: rgb(250,250,250);
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
        <a href="https://github.com/rojasleon/gifs-and-stickers" target="_blank">
          <I className="fab fa-github"></I>
        </a>
      </Content>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
    </NavBar>
  );
}
export default Header;