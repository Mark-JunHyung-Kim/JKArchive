import React from 'react';
import { useState, useEffect, useRef, forwardRef } from "react";

import Welcome from '../components/welcome'
import AboutMe from '../components/aboutme'
import PortfolioReact from '../components/portfolioReact';
import PortfolioPython from '../components/portfolioPython';
import Contact from '../components/contact'

const Main = (props, ref) => {

    const { wheelHandler, scrollHandler, scrollIndex, onHeaderClick } = props;

    useEffect(() => {
        const outerDivRefWheel = ref.current;
        const outerDivRefScroll = ref.current;
        // set EventListener to current reference(outer) with wheel
        outerDivRefWheel.addEventListener("wheel", wheelHandler);
        outerDivRefScroll.addEventListener("scroll", scrollHandler)
        return () => {
            outerDivRefWheel.removeEventListener("wheel", wheelHandler);
            outerDivRefScroll.removeEventListener("scroll", scrollHandler)
        };
    }, []);

    return <div ref={ref} className='outer'>

        <Welcome
            scrollIndex={scrollIndex}
            onHeaderClick={onHeaderClick}

        />
        <AboutMe></AboutMe>
        {/* 디바이더 넣을지 여부는 나중에 항목별 제목 필요할지 결정하고 넣어야할듯. css있음 */}
        {/* <div className="divider"></div> */}
        <PortfolioReact></PortfolioReact>
        {/* <div className="divider"></div> */}
        <PortfolioPython></PortfolioPython>
        {/* <div className="divider"></div> */}
        <Contact></Contact>
        {/* <div className="inner bg-yellow">1</div> */}

        {/* <div className="inner bg-blue">2</div> */}
        {/* <div className="divider"></div> */}
        {/* <div className="inner bg-pink">3</div> */}
    </div>;
};

export default forwardRef(Main);
