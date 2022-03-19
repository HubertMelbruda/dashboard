import reactLogo from "../assets/img/reactlogo.png";
import NavLink from "./NavLink";
import {
  FaBuromobelexperte,
  FaHouseUser,
  FaBtc,
  FaChartBar,
  FaDeviantart,
  FaMapMarkedAlt,
  FaRegStickyNote,
} from "react-icons/fa";

const Sidebar = () => {

  const navLabels = [
    { id: 1, name: "Dashboard", path: "dashboard", icon: [FaBuromobelexperte] },
    { id: 2, name: "User Profile", path: "user-profile", icon: [FaHouseUser] },
    { id: 3, name: "Portfolio", path: "portfolio", icon: [FaBtc] },
    { id: 4, name: "Prices", path: "prices", icon: [FaChartBar] },
    { id: 5, name: "Exchange", path: "exchange", icon: [FaDeviantart] },
    { id: 6, name: "Calender", path: "calender", icon: [FaMapMarkedAlt] },
    { id: 7, name: "Notes", path: "notifications", icon: [FaRegStickyNote] },
  ];

  const navList = navLabels.map(label => {
    return (
      <NavLink
        key={label.id}
        id={label.id}
        name={label.name}
        path={label.path}
        icon={label.icon[0]}
      />
    );
  });

  return (
    <div className="side-panel">
      <div className="logo">
        <img src={reactLogo} alt="Logo" /> USER DASHBOARD
      </div>
      <div className="navLinkList">{navList}</div>
    </div>
  );
};

export default Sidebar;
