import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { boldoLogo } from "../../assets";
import { Button } from "../../styles/common";

type TMenu = {
  animate?: boolean;
  changeWidth?: boolean;
};

const MobileNav = () => {
  const [animate, setAnimate] = useState(false);
  const [changeWidth, setChangeWidth] = useState(false);

  const openMenu = () => {
    setAnimate(!animate);

    setTimeout(() => setChangeWidth(!changeWidth), 300);
  };

  return (
    <Container>
      <MenuIcon animate={animate} onClick={openMenu}>
        <div className={`bar ${animate ? "animate" : ""}`}></div>
      </MenuIcon>

      <Menu changeWidth={changeWidth} className={animate ? "show" : "hide"}>
        <MenuChildren>
          <ul>
            <li>
              <NavLink to="/" onClick={openMenu}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={openMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={openMenu}>
                About
              </NavLink>
            </li>

            <Button type="secondary">Log In</Button>
          </ul>

          <img src={boldoLogo} />
        </MenuChildren>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  .show {
    right: 0%;
    opacity: 1;
  }

  .hide {
    opacity: 0;
    right: 100%;
  }

  .show a {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    color: var(--primary-color);
    opacity: 1;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuChildren = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  img {
    margin-top: 100px;
  }
`;

const Menu = styled.div<TMenu>`
  background: var(--secondary-color);
  position: fixed;
  top: 0;
  width: ${(props) => (props.changeWidth ? "70vw" : "100%")};
  height: 100vh;
  text-align: center;
  transition: 0.2s ease;
  transition: opacity 0.5s ease;
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  transition: all 0.5s ease-in-out;

  ul {
    padding-inline: 0;
    list-style: none;

    button {
      margin-top: 33px;
    }
  }

  li {
    margin-top: 33px;

    &:first-of-type {
      margin-top: 0;
    }

    a {
      text-align: center;
      font-size: 4vw;
      color: var(--primary-color);
      opacity: 0;
      transition: all 0.9s ease-in-out;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const MenuIcon = styled.div<TMenu>`
  position: relative;

  z-index: 2;
  width: 40px;
  height: 40px;
  border: 1px solid var(--primary-color);
  border-radius: 100%;
  cursor: pointer;
  transition: ${(props) =>
    props.animate ? "all 500ms 0ms" : "all 500ms 500ms"};

  .bar,
  .bar:after,
  .bar:before {
    width: 30px;
    height: 2px;
  }

  .bar {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: var(--primary-color);
    transition: all 0ms 500ms;
  }

  .bar.animate {
    background: rgba(255, 255, 255, 0);
  }

  .bar:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 6px;
    background: var(--primary-color);
    transition: bottom 500ms 500ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar:after {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    background: var(--primary-color);
    transition: top 500ms 500ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar.animate:after {
    background: var(--primary-color);
    top: 0;
    transform: rotate(45deg);
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 500ms 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar.animate:before {
    background: var(--primary-color);
    bottom: 0;
    transform: rotate(-45deg);
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 500ms 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export default MobileNav;
