import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

function Header() {
  //Initial data of toggle
  const [toggle, useToggle] = useState(false);

  //Update the value
  const toggleUpdate = () => useToggle(!toggle);

  return (
    <>
      <Toggle clicked={toggleUpdate} toggled={toggle} />
      <SearchBar toggle={toggle} />
    </>
  );
}
export default Header;