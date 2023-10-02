import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import SubHeader from "./subHeader";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const _Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 450px;
`;

const Logo = styled.img``;

const Space = styled.div`
  width: 100px;
`;

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <_Header>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/"
        >
          HOME
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/intro"
        >
          INTRO
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/profile"
        >
          PROFILE
        </NavLink>
        <NavLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/project"
        >
          PROJECT
          {isDropdownVisible && <SubHeader />}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/event"
        >
          EVENT
        </NavLink>
      </_Header>
      <Space>ㅤ</Space>
    </HeaderWrapper>
  );
};

export default Header;