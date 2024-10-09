import styled from "styled-components";
import { pageNotFound } from "../assets";

const NotFound = () => {
  return (
    <Container>
      <img src={pageNotFound} />

      <h4>This page does not exist.</h4>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: grid;
  justify-content: center;

  img {
    width: 100%;
  }

  h4 {
    text-align: center;
  }
`;
