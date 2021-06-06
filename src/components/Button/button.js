import React from "react";
import "./button.css"

const Button = (props) => {
    return (
        <section className="main-button">
 
<button className="button">
  {props.name}
</button>


</section>
    )
}

export default Button;