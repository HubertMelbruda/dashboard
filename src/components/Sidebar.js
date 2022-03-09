import reactLogo from "../assets/img/reactlogo.png";
import NavLink from "./NavLink";
import {
  FaBuromobelexperte,
  FaHouseUser,
  FaBtc,
  FaYammer,
  FaDeviantart,
  FaMapMarkedAlt,
  FaRegStickyNote,
} from "react-icons/fa";

const Sidebar = () => {
  const navLabels = [
    { id: 1, name: "Dashboard", icon: [FaBuromobelexperte] },
    { id: 2, name: "User Profile", icon: [FaHouseUser] },
    { id: 3, name: "Portfolio", icon: [FaBtc] },
    { id: 4, name: "News", icon: [FaYammer] },
    { id: 5, name: "Assets", icon: [FaDeviantart] },
    { id: 6, name: "Calender", icon: [FaMapMarkedAlt] },
    { id: 7, name: "Notifications", icon: [FaRegStickyNote] },
  ];

  const navList = navLabels.map(label => {
    return (
      <NavLink
        key={label.id}
        id={label.id}
        name={label.name}
        icon={label.icon[0]}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={reactLogo} alt="Logo" /> USER DASHBOARD
      </div>
      <div className="navLinkList">{navList}</div>
    </div>
  );
};

export default Sidebar;
