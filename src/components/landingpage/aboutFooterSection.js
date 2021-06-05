import React from 'react';
import "../../css/LandingPage.css"

const AboutFooterSection = (props) => {
    return (
        

<div className="lp__describe-footer-section one">
                                <p className="lp__describe-footer-section-icon one"> {props.icon}</p>
                                <p className="lp__describe-footer-section-header one">{props.header}</p>
                                <p className="lp__describe-footer-section-subheader one">{props.subheader}</p>
                                <p className="lp__describe-footer-section-para one">{props.children}</p>
                            </div>
    )
}
export default AboutFooterSection;