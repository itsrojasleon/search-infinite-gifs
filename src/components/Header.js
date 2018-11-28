import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

const NavBar = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: black;
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const I = styled.i`
  color: white;
`;

function Header() {
  // const [toggle, useToggle] = useState(false);
  // const toggled = () => useToggle(!toggle);
  return (
    <NavBar>
      <Toggle />
      <SearchBar />
      <I className="fab fa-github"></I>
    </NavBar>
  );
}
export default Header;