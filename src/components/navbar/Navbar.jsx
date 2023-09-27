import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { motion as m } from "framer-motion";
import {navVariants, textVariant} from "../../utils/motion"
const Menu = () => (
  <>
    <m.p
    variants={textVariant(.2)}
    initial="hidden"
    whileInView="show"
    >
      <a href="#home">Home</a>
    </m.p>
    <m.p
    variants={textVariant(.3)}
    initial="hidden"
    whileInView="show"
    >
      <a href="#wgpt3">What is GPT3?</a>
    </m.p>
    <m.p
    variants={textVariant(.4)}
    initial="hidden"
    whileInView="show"
    >
      <a href="#possibility">Open AI</a>
    </m.p>
    <m.p
    variants={textVariant(.5)}
    initial="hidden"
    whileInView="show"
    >
      <a href="#features">Case Studies</a>
    </m.p>
    <m.p
    variants={textVariant(.6)}
    initial="hidden"
    whileInView="show"
    >
      <a href="#blog">Library</a>
    </m.p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
    
     className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <m.img 
          variants={navVariants}
    initial="hidden"
    whileInView="show"
    src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <m.div variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </m.div>
      <m.div
      variants={navVariants}
    initial="hidden"
    whileInView="show"
     className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </m.div>
    </div>
  );
};

export default Navbar;
