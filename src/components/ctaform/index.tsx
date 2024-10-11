import React, { useState } from "react";
import { Button } from "../../styles/common";
import styled from "styled-components";
import { toast } from "react-toastify";

const CTAForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      toast.success(`Form submitted with email: ${email}`);

      setEmail("");

      setLoading(false);
    } catch (error: any) {
      toast.error(error.text);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Eclipse></Eclipse>

      <h2>An enterprise template to ramp up your company website</h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button>{loading ? "loading..." : "Start now"}</Button>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--primary-color);
  color: #ffffff;
  border-radius: 12px;
  margin: 124px 100px;
  padding: 72px 242px;
  text-align: center;

  h2 {
    position: relative;
    font-family: var(--secondary-font);
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
  }

  @media screen and (max-width: 1368px) {
    padding: 72px 150px;
  }

  @media screen and (max-width: 1101px) {
    padding: 72px 100px;
  }

  @media screen and (max-width: 900px) {
    margin: 100px 40px;
    padding: 56px 50px;

    h2 {
      font-size: 32px;
      line-height: 48px;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 32px 20px;

    h2 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const Form = styled.form`
  position: relative;
  margin-top: 48px;

  button {
    border-radius: 56px;
    padding: 16px 56px;
    font-size: 20px;
    font-family: 700;
    line-height: 28px;

    @media screen and (max-width: 1024px) {
      padding: 8px 16px;
      font-size: 16px;
    }

    @media screen and (max-width: 682px) {
      margin-top: 24px;
    }
  }
`;

const Input = styled.input`
  width: min(370px, 100%);
  background-color: #ffffff;
  color: #000000;
  padding: 12px 32px;
  font-size: 20px;
  font-family: 400;
  line-height: 32px;
  border: none;
  border-radius: 240px;
  outline-color: var(--secondary-color);
  margin-right: 24px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 6px 16px;
    font-size: 16px;
  }
`;

const Eclipse = styled.div`
  width: 1293px;
  height: 1293px;
  background-color: #1c3d5b;
  border-radius: 50%;
  position: absolute;
  bottom: 30%;
  right: -30%;
  z-index: 0;
`;

export default CTAForm;
