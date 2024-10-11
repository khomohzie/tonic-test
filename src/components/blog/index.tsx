import styled from "styled-components";

interface IValue {
  point: string;
  details: string;
}

const values: IValue[] = [
  {
    point: "We are <span>commited.</span>",
    details:
      "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
  },
  {
    point: "We are <span>responsible.</span>",
    details:
      "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.",
  },
  {
    point: "We aim for <span>progress.</span>",
    details:
      "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus.",
  },
];

const Blog: React.FC = () => {
  return (
    <Container>
      <h5>Our Blog</h5>

      <h2>Value proposition accelerator product management venture</h2>

      <hr />

      {values.map((value, index) => (
        <MainDiv key={index}>
          <Left dangerouslySetInnerHTML={{ __html: value.point }}></Left>

          <Right>{value.details}</Right>
        </MainDiv>
      ))}
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 96px 200px 120px;
  text-align: center;

  hr {
    margin: 64px 0;
  }

  h5 {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }

  h2 {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;

    @media screen and (max-width: 1200px) {
      font-size: 32px;
      line-height: 48px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 96px 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 96px 40px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  text-align: left;
  margin-bottom: 80px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 900px) {
    gap: 20px;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Left = styled.div`
  flex: 1;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  span {
    color: var(--secondary-color);
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const Right = styled.div`
  flex: 1;
  color: #f1f1f1;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
`;

export default Blog;
