import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="navlinks">
        <Link to='/'>NameOfPage</Link>
        <Link to='/search'>Search</Link>
        <Link to='/account'>Account</Link>
        <Link to='/dropdown'>Dropdown</Link>
        <Link to='/logout'>Log Out</Link>
      </div>
      
    </div>
  );
};

export default Navbar;

{/* <div className="navLeftContainer">
        <div className="navBarSection pageName">Name od Page </div>
        <div className="navBarSection search">Search</div>
      </div>
      <div className="navRightContainer">
        <div className="navBarSection account">Account</div>
        <div className="navBarSection dropdown">Dropdown</div>
        <div className="navBarSection logout">Log Out</div>
      </div> */}
