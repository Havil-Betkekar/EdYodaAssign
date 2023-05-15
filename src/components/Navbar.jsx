import React from "react";
import { ReactComponent as LogoIcon } from "../assets/EDYODA.svg";
import { ReactComponent as SearchIcon } from "../assets/Vector.svg";

function Navbar() {
  return (
    <>
      <header className="navHead">
        <div className="navbar">
          <nav className="navbarNav">
            <ul className="navbarUl">
              <li className="navbarListItem">
                <LogoIcon fill="#0096FF" width="158px" height="45px" />
              </li>
              <li className="navbarListItem">
                Courses <span className="arrowIcon1"></span>
              </li>
              <li className="navbarListItem">
                Programs <span className="arrowIcon2"></span>{" "}
              </li>
              <li className="navbarSearchItem">
                <SearchIcon fill="#000000" />
              </li>
              <li className="navbarListItem">Log in</li>
              <li className="navbarListItem">
                <button className="joinNowButton">JOIN NOW</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
