import React from "react";
import styled from "styled-components";

const Story: React.FC = () => {
  return (
    <Container>
      <h5>Our story</h5>

      <h1>Handshake infographic mass market crowdfunding iteration.</h1>

      <p>
        Conversion angel investor entrepreneur first mover advantage. Handshake
        infographic mass market crowdfunding iteration. Traction stock user
        experience deployment beta innovator incubator focus. Sales user
        experience branding growth hacking holy grail monetization conversion
        prototype stock network effects. Learning curve network effects return
        on investment bootstrapping business-to-consumer.
      </p>
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 120px 300px;

  h5 {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }

  h1 {
    font-family: var(--secondary-font);
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
  }

  p {
    color: #f1f1f1;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }

  @media screen and (max-width: 1280px) {
    padding: 120px 150px;
  }

  @media screen and (max-width: 980px) {
    h1 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 500px) {
    padding: 80px 40px;
  }
`;

export default Story;
