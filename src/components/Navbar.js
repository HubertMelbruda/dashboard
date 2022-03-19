import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
      <Link to="/">Wallet</Link>
      <Link to="/search">Search</Link>
      </div>
      <Link to="/account">Account</Link>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/logout">Log Out</Link>
    </div>
  );
};

export default Navbar;