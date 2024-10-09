import styled from "styled-components";

type ButtonProps = {
  type?: "secondary" | "primary";
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.type === "secondary" ? "transparent" : "var(--secondary-color)"};
  border: 2px solid
    ${(props) =>
      props.type === "secondary" ? "var(--primary-color)" : "transparent"};
  color: var(--primary-color);
  padding: 8px 40px;
  border-radius: 24px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  transition: 0.2s ease-in-out 0s;
  transform: width 200ms linear;

  &:hover {
    background-color: ${(props) =>
      props.type === "secondary" ? "var(--primary-color)" : "transparent"};
    color: ${(props) =>
      props.type === "secondary"
        ? "var(--secondary-color)"
        : "var(--primary-color)"};
  }
`;
