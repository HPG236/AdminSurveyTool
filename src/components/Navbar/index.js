import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Header = () => {
  function logout() {
    localStorage.clear();
  }
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://th.bing.com/th/id/OIP.1DG0P9HHZB6ORYruetuf_gHaDt?w=346&h=174&c=7&r=0&o=5&pid=1.7"
            alt="logo"
            height="40"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          {localStorage.getItem("user-info") ? (
            <>
              <NavLink to="/about" activeStyle>
                Create
              </NavLink>
              <NavLink to="/services" activeStyle>
                MySurveys
              </NavLink>
              <NavBtn>
                <NavBtnLink to="/signin" onClick={logout}>
                  Logout
                </NavBtnLink>
              </NavBtn>
            </>
          ) : (
            <>
              <NavLink to="/signup" activeStyle>
                Sign Up
              </NavLink>
              <NavLink to="/signin" activeStyle>
                Sign In
              </NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
