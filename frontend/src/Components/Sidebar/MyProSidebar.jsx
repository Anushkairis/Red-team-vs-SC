import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTasks,
  faTrophy,
  faUser,
  faSignOutAlt,
  faArrowRight,
  faArrowLeft,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const MyProSidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "C" : "CDAC"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
              <Link to="/userdashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
              <Link to="/team">Leaderboard</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTasks} />}>
              <Link to="/tasks">Tasks</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTrophy} />}>
              <Link to="/tournaments">Tournaments</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
              <Link to="/">Logout</Link>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>

      {/* Footer section, moved outside the header */}
      <footer className="footer">
        <p> 2024&copy; SecureCoders. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default MyProSidebar;
