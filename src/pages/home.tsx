import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import { useEffect, useRef, useState } from "react";

const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  width: 100%;
  /* padding: 60px 0px; */
  background: linear-gradient(251deg, #ba6c9e 22.05%, #f7bd96 75.22%);
  margin-top: -1px;
  height: 1000px;
`;

const frameInAnimation = keyframes`
  0% {
    font-size: 50px;
  line-height: 125%;
  }

  100%{
    font-size: 100px;
    line-height: 125%;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 1px;
  font-style: normal;
  font-weight: 100;
  line-height: 125%;
  font-size: 0px;
  &.frame-in {
    animation: ${frameInAnimation} 0.8s forwards;
  }
`;

const Home = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const changeLeftLineStyle = () => {
    const box1_right: any = document.querySelector(".box1-line-right");
    const box1_bottom: any = document.querySelector(".box1-line-bottom");
    const box2_left: any = document.querySelector(".box2-line-left");
    const box2_right: any = document.querySelector(".box2-line-bottom");
    const box2_top: any = document.querySelector(".box2-line-top");
    const box2_bottom: any = document.querySelector(".box2-line-right");
    const box2_title: any = document.querySelector(".box2-title");
    const box3_top: any = document.querySelector(".box3-line-top");
    const box3_right: any = document.querySelector(".box3-line-right");
    box1_right.style.width = isHoveredLeft ? "50%" : "100%";
    box1_bottom.style.height = isHoveredLeft ? "50%" : "100%";
    box2_left.style.height = isHoveredLeft ? "50%" : "100%";
    box2_left.style.bottom = isHoveredLeft ? "0" : "0";
    box2_right.style.height = isHoveredLeft ? "50%" : "100%";
    box2_top.style.width = isHoveredLeft ? "210px" : "0";
    box3_top.style.width = isHoveredLeft ? "50%" : "100%";
    box3_right.style.height = isHoveredLeft ? "50%" : "100%";
    box2_title.style.right = isHoveredLeft ? "0px" : "114px";
    box2_bottom.style.width = isHoveredLeft ? "50%" : "0";
  };
  const changeRightLineStyle = () => {
    const box9_left: any = document.querySelector(".box9-line-left");
    const box9_top: any = document.querySelector(".box9-line-top");
    const box6_title: any = document.querySelector(".box6-title");
    const box6_top: any = document.querySelector(".box6-line-top");
    const box6_right: any = document.querySelector(".box6-line-right");
    box9_left.style.height = isHoveredRight ? "50%" : "100%";
    box9_top.style.width = isHoveredRight ? "50%" : "100%";
    box6_top.style.width = isHoveredRight ? "100%" : "0";
    box6_title.style.right = isHoveredRight ? "0" : "125px";
    box6_right.style.height = isHoveredRight ? "100%" : "0";
  };

  return (
    <>
      <HomeWrapper>
        <Header />

        <Wrapper>
          <ReactPlayer
            playing
            url={`${process.env.PUBLIC_URL}/video/intro.mp4`}
            width="100%"
            height="100%"
            loop={true}
            muted
            className={"video"}
          />
        </Wrapper>

        <MenuWrapper>
          <div className="box-wrapper">
            <Container className={isInViewport ? "frame-in" : ""} ref={ref}>
              SPACE <br /> WITHIN <br /> SPACE
            </Container>
            <div className="box1">
              <div className="box1-line-right"></div>
              <div className="box1-line-bottom"></div>
            </div>
            <div className="box-left-wrapper">
              <div
                className={`box2 ${isHoveredLeft ? "hovered" : ""}`}
                onMouseEnter={() => {
                  setIsHoveredLeft(true);
                  changeLeftLineStyle();
                }}
                onMouseLeave={() => {
                  setIsHoveredLeft(false);
                  changeLeftLineStyle();
                }}
              >
                <div className="box2-line-top"></div>
                <div className="box2-line-right"></div>
                <div className="box2-line-left"></div>
                <div className="box2-line-bottom"></div>
                <div className="box2-title">복합공간설계</div>
              </div>
              <div className={`box3 ${isHoveredLeft ? "hovered" : ""}`}>
                <div className="box3-line-top"></div>
                <div className="box3-line-right"></div>
              </div>
              <div className="box4"></div>
            </div>
            <div className="box-right-wrapper">
              <div className="box5"></div>
              <div
                className={`box6 ${isHoveredRight ? "hovered" : ""}`}
                onMouseEnter={() => {
                  setIsHoveredRight(true);
                  changeRightLineStyle(); // 호버 시 스타일 변경 함수 호출
                }}
                onMouseLeave={() => {
                  setIsHoveredRight(false);
                  changeRightLineStyle(); // 호버 해제 시 스타일 변경 함수 호출
                }}
              >
                <div className="box6-title">가구디자인</div>
                <div className="box6-line-top"></div>
                <div className="box6-line-right"></div>
                <div className="box6-line-left"></div>
                <div className="box6-line-bottom"></div>
              </div>
              <div className="box7"></div>
              <div className="box8"></div>
            </div>
            <div className="box9">
              <div className="box9-line-left"></div>
              <div className="box9-line-top"></div>
            </div>
          </div>
        </MenuWrapper>
      </HomeWrapper>

      {/* <Footer /> */}
    </>
  );
};

export default Home;