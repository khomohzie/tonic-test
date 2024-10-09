import React from "react";
import styled from "styled-components";
import { boldoLogo } from "../../assets";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/common";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={boldoLogo} />

      <LinksWrapper>
        <NavLink to="/">Product</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">About</NavLink>

        <Button type="secondary">Log In</Button>
      </LinksWrapper>
    </Container>
  );
};

const Container = styled.header`
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 56px 100px;

  @media screen and (max-width: 900px) {
    padding: 56px 40px;
  }
`;

const LinksWrapper = styled.div`
  margin: 0 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: var(--primary-color);
    pointer-events: all;
    white-space: nowrap;
    padding-left: 40px;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 40px;
    }
  }

  a.active {
    color: var(--text-color);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Header;
