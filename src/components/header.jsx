import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faPaw, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';



import 'bootstrap/dist/css/bootstrap.min.css';

import Insta_logo from '../images/insta_logo.png'


const Header = (props) => {

  const { onHeaderClick, scrollIndex, controlHeader } = props;

  const [toggleSwitch, setToggleSwitch] = useState(false);



  const handleToggle = () => {
    setToggleSwitch(toggleSwitch => !toggleSwitch);
    console.log(toggleSwitch);
  }

  const test123 = () => {

    console.log(window.pageYOffset);

  }

  return <nav className={!controlHeader ? 'header header__onTop' : 'header header__offTop'}>

    {/* <div className='header__logo' onClick={() => { onPortfolioClick(0) }}> */}
    <div className='header__logo' onClick={() => { onHeaderClick(0) }}>
      <FontAwesomeIcon icon={faBarcode} />
      <span>MARK'S ARCHIVE</span>
    </div>

    <ul className={toggleSwitch ? 'header__menu menu__on' : 'header__menu menu__off'}>
      <li id={scrollIndex === 2 ? 'selected' : 'unselected'} onClick={() => { onHeaderClick(1) }}>ABOUT <FontAwesomeIcon icon={faPaw} /></li>
      <li id={scrollIndex === 3 ? 'selected' : 'unselected'} onClick={() => { onHeaderClick(2) }}>PORTFOLIO</li>
      <li id={scrollIndex === 4 ? 'selected' : 'unselected'} onClick={() => { onHeaderClick(3) }}>POSTS</li>
      <li id={scrollIndex === 5 ? 'selected' : 'unselected'} onClick={() => { onHeaderClick(4) }}>CONTACT</li>
    </ul>

    <ul className={toggleSwitch ? 'header__toggle toggle__on' : 'header__toggle toggle__off'} onClick={handleToggle}>
      <li>MENU {toggleSwitch ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</li>
    </ul>



  </nav>;
};

export default Header;
