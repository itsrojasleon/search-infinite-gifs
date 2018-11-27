import React from 'react';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

function Header() {
  // const [toggle, useToggle] = useState(false);
  // const toggled = () => useToggle(!toggle);
  return (
    <>
      <Toggle />
      <SearchBar />
    </>
  );
}
export default Header;