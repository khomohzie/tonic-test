import styled from "styled-components";

const Jumbotron: React.FC = () => {
  return (
    <Container>
      <p>About</p>

      <MainDiv>
        <Right>We love to make great things, things that matter.</Right>

        <Left>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Left>
      </MainDiv>
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--secondary-color);
  padding: 40px 100px 96px;

  p {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }

  @media screen and (max-width: 900px) {
    padding: 40px 40px 96px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media screen and (max-width: 900px) {
    gap: 20px;
  }

  @media screen and (max-width: 400px) {
    display: block;
  }
`;

const Right = styled.div`
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
  }
`;

const Left = styled.div`
  color: var(--primary-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
`;

export default Jumbotron;
