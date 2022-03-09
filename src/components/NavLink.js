import { Link } from 'react-router-dom'

const NavLink = (props) => {
  const {id, name} = props

  return (
    <div className='navLink' key={id}>
      <props.icon className='navIcon' id={id}/>
      <Link to='/' >
        {name}
      </Link>
    </div>
  );
};

export default NavLink;
