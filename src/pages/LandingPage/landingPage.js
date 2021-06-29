import React from "react";
import Navbar from "../../components/navbar";
import "../../css/LandingPage.css";
import pic2 from "../../assets/images/pic2.jpg";
import { FcDonate } from "react-icons/fc";
import { BiDonateHeart } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaUsers, FaWhatsapp } from "react-icons/fa";
import AboutFooterSection from "../../components/landingpage/aboutFooterSection";
import Button from "../../components/Button/button";
import Timer from "../../components/timer/timer";

const LandingPage = () => {
  return (
    <main className="lp">
      <section className="lp__navbar-holder">
        <Navbar />
      </section>

      <section className="lp__parallax-image"></section>
      <section className="lp__intro">
        <div className="lp__intro-container">
          <div className="lp__intro-line top"></div>
          <article className="lp__intro-text-container">
            <h2 className="lp__intro-text-header">Save d women </h2>
            <div>&nbsp;</div>
            <div className="lp__intro-text one">
              Around the world, too many children still start life at a
              disadvantage simply because of who they are and where they are
              from.
            </div>
            <div>&nbsp;</div>
            <div className="lp__intro-text two">
              Save the Children has a bold ambition: we believe in a world in
              which all children survive, have the chance to learn, and are
              protected from abuse, neglect and exploitation.
            </div>
          </article>
          <div className="lp__intro-line bottom"></div>
        </div>
      </section>
      <section className="lp__describe">
        <div className="lp__describe-section">
          {/* <header className="lp__describe-header-container">
                        <h2 className="lp__describe-header">IGWE is the world’s №1 fundraising site <br /> for charitable causes</h2>
                    </header> */}
          <footer className="lp__describe-footer">
            <aside className="lp__describe-footer-container">
              <AboutFooterSection
                icon={<FcDonate />}
                header=" Make Donation"
                subheader=" Help us by making donation"
              >
                <p>
                  When you donate, you not only give money,
                  <br /> but also share your love, and give hope to <br />
                  those in need.
                </p>
              </AboutFooterSection>

              <AboutFooterSection
                icon={<FaUsers />}
                header=" Become a Volunteer"
                subheader=" Help us by making donation"
              >
                <p>
                  When you donate, you not only give money,
                  <br /> but also share your love, and give hope to <br />
                  those in need.
                </p>
              </AboutFooterSection>

              <AboutFooterSection
                icon={<BiDonateHeart />}
                header=" Fundraising"
                subheader="  Collect Fund All Over the World"
              >
                <p>
                  We gather voluntary contributions to help <br /> schools,
                  churches, and other non-profit
                  <br />
                  organizations.
                </p>
              </AboutFooterSection>
            </aside>
          </footer>
        </div>
      </section>

      <section className="lp__About-main">
        <div className="lp__About-main-image-container">
          <img className="lp__About-main-image" src={pic2} />
        </div>
        <div className="lp__About-main-text-container">
          <article className="lp__About-main-text">
            <header className="lp__About-main-text-head">
              <h2 className="lp__About-main-text-header">
                Help peolple get clean water in Southern Nigeria
              </h2>
            </header>
            <p className="lp__About-main-text-describe">
              population of 47 million, 37 percent of Kenyans still rely on
              unimproved water sources. You can help our project bring water
              filters that will allow them access to clean
            </p>
            <span className="lp__About-main-text-goal">
              Lorem is 10000 dollars{" "}
            </span>
            <p className="lp__About-main-text-para1">
              Want to make a donation contact us
            </p>

            <p className="lp__About-main-text-para2">
              <u>info@example.com</u> &nbsp;&nbsp;&nbsp; +1 458 236 4575
              <br /> help people affected by tprnado change
            </p>
          </article>
        </div>
      </section>

      <section className="lp__Event lp__parallax-image2">
        <div className="lp__Event-main">
          <div className="lp__Event-top-text-content">
            <div className="lp__Event-top-text-content-right">
              <h2 className="lp__Event-top-text-content-right-header">
                {" "}
                Upcomin Event{" "}
              </h2>
              <p className="lp__Event-top-text-content-right-para one">
                Charitable MERCIFUL Run Marathon
              </p>

              <p className="lp__Event-top-text-content-right-para two">
                Location: United States, Memphis, Shelby Farms Park <br />
                Date: 25 November 2017
              </p>
              <p className="lp__Event-top-text-content-right-para three">
                {" "}
                No distance is too far to save a child. You can be a superhero{" "}
                to children in <br />
                need by running the marathon and donating.
              </p>
            </div>
            <div className="lp__Event-top-text-content-left">
              <Timer number="00" unit="Days" separate=":" />
              <Timer number="06" unit="Hour" separate=":" />
              <Timer number="30" unit="Minute" separate=":" />
              <Timer number="46" unit="Second" />
            </div>
          </div>

          <aside className="lp__Event-bottom-text">
            <div>
              <label for="lp__Event-bottom-text-content-left-input"></label>
              <input
                type="text"
                className="lp__Event-bottom-text-content-left-input"
                placeholder="Enter your email address"
              ></input>
              <Button name="Join This Event" />
            </div>
          </aside>
        </div>
      </section>

      <section className="lp__Volunteer">
        <div className="lp__Volunteer one">
          <article>
            {" "}
            <h2 className="lp__Event-top-text-content-right-header">
              {" "}
              Become a volunteer <hr />
            </h2>
            <p className="lp__Event-top-text-content-right-para three">
              This HTML file is a template. If you open it directly in the
              browser, <br />
              you will see an empty page. You can add webfonts, meta tags, or
              analytics to this file.
              <br /> The build step will place the bundled scripts into the tag.
              <br />
              To begin the development, run `npm start` <br />
              or `yarn start`. To create a production bundle, use `npm run
              build` or `yarn build`.
            </p>
          </article>
        </div>
        <div className="lp__Volunteer two">
          <aside className="lp__Event-bottom-text">
            <div>
              <label for="lp__Event-bottom-text-content-left-input"></label>
              <input
                type="text"
                className="lp__Event-bottom-text-content-left-input"
                placeholder="Enter your email address"
              ></input>
              <Button name="Join Us" />
            </div>
          </aside>
        </div>
      </section>

      <section className="lp-socials">
        <div>
          <h3>Together we are stronger. Join the conversation.</h3>
        </div>
        <div>
          <aside>
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/save_children"
            > <FaFacebook /></a>
          </aside>
          <aside>
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/save_children"
            > <FaTwitter /></a>
          </aside>
          <aside>
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/save_children"
            ><FaWhatsapp /></a>
          </aside>
          <aside>
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/save_children"
            ><FaInstagram /></a>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
