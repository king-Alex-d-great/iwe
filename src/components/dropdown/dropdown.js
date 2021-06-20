import React, { useState } from "react";
import "./dropdown.css";
import { GoTriangleDown } from "react-icons/go";

const DropDown = (props) => {
  // const [dropDownState, setDropDownState] = useState("");

  // const toggleDropDown = () => {
  //   const toggler = !dropDownState ? "show" : "";
  //   setDropDownState(toggler);
  // };


  return (
    <div class="dropdown">
      <button class="dropbtn" onClick={toggleDropDown}>
        {props.info.name} <GoTriangleDown />{" "}
      </button>
      <div class={`${dropDownState} dropdown-content`} id="myDropdown">
        <a data-name="#" href="#" >{props.info.content1}</a>
        <a href="#">{props.info.content2}</a>
        <a href="#">{props.info.content3}</a>
        <a href="#">{props.info.content4}</a>
        <a href="#">{props.info.content5}</a>
      </div>
    </div>
  );
};
export default DropDown;
