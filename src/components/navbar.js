import React from "react";
import "../css/navbar.css";
import Button from "./Button/button";

const Navbar = () => {
    return (
       <nav className="navbar">
           <main className="navbar__main">
                <section className="navbar__main-logo-holder">
                    <div className="navbar__main-logo-holder-image ">
                   
                        <img src="../../public/logo192.png" alt="logo"/>

                    </div>
                    <div className="navbar__main-logo-holder-text">
                        <p>Initiative for women</p>
                        <p>and girls empowerment</p>
                    </div>

                </section>
                   

                <section className="navbar__main-links">
                     <div className="navbar__main-links-holder">
                        <ul className="navbar__main-links-holder">
                           <li className="navbar__main-links-1"><a href = "#"> News</a></li> 
                           <li className="navbar__main-links-1"><a href = "#"> Events</a></li> 
                           <li className="navbar__main-links-1"><a href = "#"> Contact</a></li> 
                           <li className="navbar__main-links-1"><a href = "#"> Become a volunteer</a></li> 
                           <li className="navbar__main-links-1"><a href = "#"> About us</a></li> 
                        </ul>
                    </div>

                </section>
                   

               <Button name="Donate Now "/>
           </main>
       </nav>     
    )
}

export default Navbar;