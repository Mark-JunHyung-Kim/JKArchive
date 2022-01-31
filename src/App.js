import { useState, useEffect, useRef } from "react";

// import components
import Header from './components/header'
import Main from './components/main'

import Dots from "./components/dots";

// import external libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";



function App() {

  const [scrollIndex, setScrollIndex] = useState(1);
  // const [divNumber, setDivNumber] = useState(0);
  const [controlHeader, setControlHeader] = useState(false);
  const [controlMenu, setControlMenu] = useState(0);

  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  const outerDivRef = useRef(null);

  // const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  // 디바이더 넣을꺼면 넣고 아니면 뺄것
  // const DIVIDER_HEIGHT = 5;

  // control click event on header menus
  const onHeaderClick = (menuID) => {
    // outerDivRef.current.scrollIntoView({ behavior: 'smooth' })
    outerDivRef.current.scrollTo({
      // top: pageHeight * 1 + DIVIDER_HEIGHT * 1,
      top: pageHeight * menuID,
      left: 0,
      behavior: "smooth",
    });
  }

  // handle scroll event by current scroll position
  /*  const wheelHandler = (e) => {
     // console.log(e);
   } */
  const wheelHandler = (e) => {

    // prevent default event
    e.preventDefault();

    // console.log(e);

    // set current scroll positions
    const { deltaY } = e;
    const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치    
    // setScrollPosition(scrollTop);
    // const currentPosition = pageHeight - 1; // 화면 오차 소숫점때문에 1을 빼줌

    // console.log(scrollTop);

    // if scroll position is changed,
    if (deltaY > 0) {

      // console.log(scrollPosition);

      // 1. move to next pages when user scroll-down
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //처음에서 2페이지로 넘어가는거
        // console.log("현재 2페이지, down");
        outerDivRef.current.scrollTo({
          top: pageHeight,
          // top: pageHeight,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(2);
        // console.log("scrollTop : " + scrollTop, "pageHeight : " + pageHeight);
        // console.log(scrollIndex);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        console.log("현재 3페이지, down");
        outerDivRef.current.scrollTo({
          // top: pageHeight * 2 + DIVIDER_HEIGHT,
          top: pageHeight * 2,
          left: 0,
          behavior: "smooth",
        });
        console.log("scrollTop : " + scrollTop, "pageHeight : " + pageHeight);
      } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
        console.log("현재 4페이지, down");
        outerDivRef.current.scrollTo({
          top: pageHeight * 3,
          left: 0,
          behavior: "smooth",
        });
        console.log("scrollTop : " + scrollTop, "pageHeight : " + pageHeight);
      } else {
        // 현재 3페이지
        console.log("마지막페이지", "down");
        outerDivRef.current.scrollTo({
          // top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
          top: pageHeight * 4,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(4);
        console.log("scrollTop : " + scrollTop, "pageHeight : " + pageHeight);
      }

      // 2. when user scroll-up (deltaY is minus)
    } else {
      // 스크롤 올릴 때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        console.log("현재 1페이지, up");
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(1);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        console.log("현재 2페이지, up");
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(1);
      } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
        //현재 3페이지
        console.log("현재 3페이지, up");
        outerDivRef.current.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(2);
      } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
        //현재 4페이지
        console.log("현재 4페이지, up");
        outerDivRef.current.scrollTo({
          top: pageHeight * 2,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(2);
      } else {
        // 현재 5페이지
        console.log("현재 5페이지, up");
        outerDivRef.current.scrollTo({
          // top: pageHeight + DIVIDER_HEIGHT,
          top: pageHeight * 3,
          left: 0,
          behavior: "smooth",
        });
        // setScrollIndex(3);
      }
    }
  };

  const scrollHandler = (e) => {

    const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치    

    console.log("스크롤탑 : " + scrollTop, " & 페이지높이 : " + pageHeight);

    // 원하는 부분 조정하면 됨
    // 1. 현재 페이지가 웰컴페이지라면 - 첫번째 페이지, 
    if (scrollTop === 0 && scrollTop < pageHeight) {
      setControlHeader(false);
      setScrollIndex(1);
    }
    // 2. 현재 페이지가 ABOUTME - 두번째 페이지라면
    else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      setControlHeader(true);
      setScrollIndex(2);
    }
    // 3. 현재 페이지가 PORTFOLIO - 세번째 페이지에 있다면,
    else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
      setControlHeader(true);
      setScrollIndex(3);
    }
    // 4. 현재 페이지가 POST에 있다면 - 네번째 페이지에 있다면,
    else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
      setControlHeader(true);
      setScrollIndex(4);
    }
    // 5. 현재 페이지가 CONTACT에 있다면 - 다섯번째 페이지에 있다면,
    else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
      setControlHeader(true);
      setScrollIndex(5);
      console.log("스크롤탑 : " + scrollTop, " & 현재페이지높이 : " + pageHeight * 4)
    }
  };

  window.onresize = function (e) {

    e.preventDefault();

    setPageHeight(window.innerHeight);
  }

  useEffect(() => {

    // setPageHeight(window.innerHeight);

    const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치    
    console.log("PH: " + pageHeight + " ST : " + scrollTop);

    // ScrollTOP이 실시간으로 변경이 안되서 생기는 문제임!!!!!!

  }, [pageHeight, outerDivRef.current]);




  return (
    <div className="App">
      <Header
        onHeaderClick={onHeaderClick}
        scrollIndex={scrollIndex}
        controlHeader={controlHeader}>
      </Header>
      <Main
        scrollIndex={scrollIndex}
        setScrollIndex={setScrollIndex}
        onHeaderClick={onHeaderClick}
        wheelHandler={wheelHandler}
        scrollHandler={scrollHandler}
        ref={outerDivRef}
      >
      </Main>
      <Dots scrollIndex={scrollIndex} />




    </div >
  );
}

export default App;