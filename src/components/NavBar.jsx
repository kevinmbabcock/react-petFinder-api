import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/pets'>List of Pets</Link>
      <Link to='/search'>Search Pets</Link>
    </div>

  );
}

export default NavBar;
