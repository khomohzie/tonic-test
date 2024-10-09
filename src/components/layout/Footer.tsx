import React from "react";
import styled from "styled-components";
import { boldoLogo } from "../../assets";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/common";

const Footer: React.FC = () => {
  return (
    <Container>
      <UpperSection>
        <FirstDiv>
          <img src={boldoLogo} />

          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </FirstDiv>

        <List>
          <li>Landings</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
        </List>

        <List>
          <li>Company</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className="careers">
              Careers
            </NavLink>
            <Button>Hiring!</Button>
          </li>
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
        </List>

        <List>
          <li>Resources</li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
        </List>
      </UpperSection>

      <p>All rights reserved.</p>
    </Container>
  );
};

const Container = styled.footer`
  padding: 56px 100px;

  p {
    color: #777777;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 900px) {
    padding: 56px 40px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const UpperSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 170px;

  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstDiv = styled.div`
  max-width: 300px;

  img {
    width: 120.25px;
    height: 41px;
  }

  p {
    margin-top: 40px;
    color: #777777;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 1100px) {
    max-width: 200px;
  }

  @media screen and (max-width: 768px) {
    max-width: none;
  }
`;

const List = styled.ul`
  padding-inline: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }

  li {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin-top: 32px;
    margin-left: 28px;

    &:first-of-type {
      margin-top: -15px;
    }

    a {
      white-space: nowrap;
      font-size: 20px;
      font-weight: 400;

      line-height: 32px;
      color: #777777;
      cursor: pointer;
    }

    button {
      cursor: default;
      padding: 4px 14px;

      &:hover {
        background-color: var(--secondary-color);
      }
    }

    .careers {
      margin-right: 10px;
    }
  }
`;

export default Footer;
