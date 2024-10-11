import { useRef } from "react";
import styled from "styled-components";
import { useScrollNumberAnimation } from "../../utils";

const Statistics: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const firstCount = useScrollNumberAnimation(ref, 120);
  const secondCount = useScrollNumberAnimation(ref, 10000);
  const thirdCount = useScrollNumberAnimation(ref, 240);

  return (
    <Container>
      <h5>Our numbers</h5>

      <h2>Handshake infographic mass market crowdfunding iteration.</h2>

      <NumberSectionWrapper>
        <NumberSection>
          <Number ref={ref}>{firstCount}m</Number>

          <p>Cool feature title</p>
        </NumberSection>

        <NumberSection>
          <Number ref={ref}>{secondCount}</Number>

          <p>Cool feature title</p>
        </NumberSection>

        <NumberSection>
          <Number ref={ref}>{thirdCount}</Number>

          <p>Cool feature title</p>
        </NumberSection>
      </NumberSectionWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 96px 200px 120px;
  text-align: center;

  h5 {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }

  h2 {
    color: var(--primary-color);
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;

    @media screen and (max-width: 1200px) {
      font-size: 32px;
      line-height: 48px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 96px 40px;
  }
`;

const NumberSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 141px;
  margin-top: 84px;

  @media screen and (max-width: 1200px) {
    gap: 40px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const NumberSection = styled.div`
  text-align: left;

  p {
    color: var(--primary-color);
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    white-space: nowrap;
  }
`;

const Number = styled.div`
  color: var(--primary-color);
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 96px;
  line-height: 56px;
  margin-bottom: 32px;

  @media screen and (max-width: 1200px) {
    font-size: 72px;
    line-height: 32px;
  }
`;

export default Statistics;
