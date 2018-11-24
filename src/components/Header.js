import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Header(props) {
  const [toggle, useToggle] = useState(false);

  const _toggleUpdate = () => {
    return useToggle
  }
  return (
    <div>
      <div>My Toggle</div>
      <SearchBar />
    </div>
  );
}
export default Header;