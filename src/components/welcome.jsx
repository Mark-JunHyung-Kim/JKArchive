import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faAngleDoubleDown, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faHtml5, faJsSquare, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';


const Welcome = (props) => {

  const { scrollIndex, onHeaderClick } = props;
  const [icon, setIcon] = useState(faPaw);
  const [iconIndex, setIconIndex] = useState(0);

  let number = 0;

  const iconSet = [faPaw, faCss3Alt, faHtml5, faJsSquare, faPython, faReact, faNodeJs];

  useEffect(() => {

    const iconChanger = setInterval(() => {
      number === iconSet.length ? number = 0 : setIcon(iconSet[number]); number = number + 1;
    }, 2000);
    return () => clearInterval(iconChanger)
  }, []);




  return <div className='inner welcome'>

    <div className='welcome__intro'>
      <FontAwesomeIcon icon={icon} className={scrollIndex === 1 ? "intro__icon icon__ontop" : "intro__icon icon__offtop"} />
      {/* {icon} */}
      {/* <FontAwesomeIcon icon={icons} className={scrollIndex === 1 ? "intro__icon icon__ontop" : "intro__icon icon__offtop"} /> */}
      <ul className={scrollIndex === 1 ? "intro__myname myname__ontop" : "intro__myname myname__offtop"}>- junhyung kim -</ul>
      <ul className={scrollIndex === 1 ? "intro__title title__ontop" : "intro__title title__offtop"}>Junior Web Developer Portfolio</ul>
    </div>

    <hr className={scrollIndex === 1 ? "welcome__midline midline__ontop" : "welcome__midline midline__offtop"} />


    <div className={scrollIndex === 1 ? "welcome__subintro subintro__ontop" : "welcome__subintro subintro__offtop"}>"Insightful junior web developer with<br />careful thinking, improving various experience, and passionate<br />to be core member of web development group"</div>

    <div className={scrollIndex === 1 ? "welcome__moreinfo moreinfo__ontop" : "welcome__moreinfo moreinfo__offtop"}
      onClick={() => { onHeaderClick(1) }}

    >
      MORE <FontAwesomeIcon icon={faAngleDoubleDown} />
    </div>






  </div>;
};


export default Welcome;