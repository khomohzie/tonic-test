import {
  Blog,
  CTAForm,
  Jumbotron,
  Statistics,
  Story,
  Team,
} from "../components";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Statistics />
      <Story />
      <Team />
      <Blog />
      <CTAForm />
    </>
  );
};

export default Home;
