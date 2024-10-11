import React from "react";
import {
  generalManager1,
  generalManager2,
  generalManager3,
} from "../../assets";
import styled from "styled-components";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers1: TeamMember[] = [
  { name: "Michael Scott", role: "General Manager", imageSrc: generalManager1 },
  { name: "Michael Scott", role: "General Manager", imageSrc: generalManager1 },
  { name: "Michael Scott", role: "General Manager", imageSrc: generalManager1 },
];

const teamMembers2: TeamMember[] = [
  {
    name: "Dwight Schrute",
    role: "General Manager",
    imageSrc: generalManager2,
  },
  { name: "Pam Beesley", role: "General Manager", imageSrc: generalManager3 },
  { name: "Pam Beesley", role: "General Manager", imageSrc: generalManager3 },
  { name: "Pam Beesley", role: "General Manager", imageSrc: generalManager3 },
];

const Team: React.FC = () => {
  return (
    <Container>
      <h5>Our team</h5>

      <h1>The people behind the work</h1>

      <p>
        Conversion angel investor entrepreneur first mover advantage. Handshake
        infographic mass market crowdfunding iteration. Traction stock user
        experience deployment beta innovator incubator focus.
      </p>

      <TeamFlex>
        {teamMembers1.map((member, index) => (
          <TeamMember1 key={index}>
            <img src={member.imageSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </TeamMember1>
        ))}
      </TeamFlex>

      <TeamGrid>
        {teamMembers2.map((member, index) => (
          <TeamMember2 key={index}>
            <img src={member.imageSrc} alt={member.name} />

            <Title>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </Title>
          </TeamMember2>
        ))}
      </TeamGrid>
    </Container>
  );
};

const Container = styled.section`
  padding: 124px 250px;

  h5,
  h1,
  p {
    margin: 56px 50px;
    font-weight: 400;
  }

  h5 {
    margin-top: 0;
    color: #777777;
    font-size: 20px;
    line-height: 32px;
  }

  h1 {
    font-family: var(--secondary-font);
    font-size: 48px;
    line-height: 72px;
  }

  p {
    color: #777777;
    font-size: 20px;
    line-height: 32px;
  }

  @media screen and (max-width: 1280px) {
    padding: 120px 150px;
  }

  @media screen and (max-width: 980px) {
    h5,
    h1,
    p {
      margin: 56px 0px;
    }

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

const TeamFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const TeamMember1 = styled.div`
  h3 {
    font-family: var(--secondary-font);
    font-size: 28px;
    font-weight: 400;
  }

  p {
    margin: 0 0 24px;
    color: #777777;
    font-size: 20px;
  }

  @media screen and (max-width: 324px) {
    img {
      width: 100%;
    }
  }
`;

const TeamGrid = styled.div`
  margin-top: 110px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TeamMember2 = styled.div`
  display: flex;

  img {
    margin-right: 24px;
  }

  @media screen and (max-width: 424px) {
    flex-direction: column;

    img {
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 324px) {
    img {
      width: 100%;
    }
  }
`;

const Title = styled.div`
  h3 {
    font-family: var(--secondary-font);
    font-size: 28px;
    font-weight: 400;
    white-space: nowrap;
  }

  p {
    margin: 0 0 24px;
    color: #777777;
    font-size: 20px;
  }
`;

export default Team;
