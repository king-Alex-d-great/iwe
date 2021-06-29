import React, { useState } from "react";
import "../css/navbar.css";
import Button from "./Button/button";
import DropDown from "./dropdown/dropdown";
import { dropDownInfo } from "../DataLibrary/dropdowninfo";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [responsiveState, setResponsiveState] = useState("");
  const dropdowndata = dropDownInfo.map((dropdown) => {
    return (
      <li className="navbar__main-links-dropdown">
        <a href="#">
          <DropDown info={dropdown} />
        </a>
      </li>
    );
  });

  const showResponsiveNav = () => {
    const responsive = !responsiveState ? "responsive" : "";
    setResponsiveState(responsive);
  };

  return (
    <nav className="navbar  ">
      <main
        className={`navbar_main ${responsiveState} navbar__main `}
      >
        <section className="navbar__main-logo-holder">
          <div className="navbar__main-logo-holder-image ">
            <img src="../../public/logo192.png" alt="logo" />
          </div>
          <div className="navbar__main-logo-holder-text">
            <p>Initiative for women</p>
            <p>and girls empowerment</p>
          </div>
        </section>

        <section className="navbar__main-links">
          <div className="navbar__main-links-holder">
            <ul className="navbar__main-links-holder">{dropdowndata}</ul>
          </div>
        </section>

        <a href="#" className="icon">
          <AiOutlineBars onClick={showResponsiveNav} className="burgerIcon" />
        </a>
        <Button name="Donate Now " />

        {/* </section> */}
      </main>
    </nav>
  );
};

export default Navbar;
