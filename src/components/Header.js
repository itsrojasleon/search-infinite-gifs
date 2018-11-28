import React from 'react';
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
  // const [toggle, useToggle] = useState(false);
  // const toggled = () => useToggle(!toggle);
  return (
    <NavBar>
      <Toggle />
      <SearchBar />
      <a href="https://github.com/rojasleon/gifs-and-stickers" target="_blank">
        <I className="fab fa-github"></I>
      </a>
    </NavBar>
  );
}
export default Header;