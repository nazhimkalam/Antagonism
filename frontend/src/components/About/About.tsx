import styled from "styled-components";
import { theme } from "../../utils/theme";

const About = () => {
  return (
    <AboutStyled>
      <h2>About Antagonism</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        dicta at deserunt voluptatum explicabo quia tempore impedit, deleniti
        aperiam quae similique expedita minima libero dolores cupiditate sunt
        tenetur facilis perspiciatis eos accusantium et ad? Quos veniam rerum
        pariatur, laboriosam voluptates distinctio fugit assumenda natus cumque.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        dicta at deserunt voluptatum explicabo quia tempore impedit, deleniti
        aperiam quae similique expedita minima libero dolores cupiditate sunt
        tenetur facilis perspiciatis eos accusantium et ad? Quos veniam rerum
        pariatur, laboriosam voluptates distinctio fugit assumenda natus cumque.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        dicta at deserunt voluptatum explicabo quia tempore impedit, deleniti
        aperiam quae similique expedita minima libero dolores cupiditate sunt
        tenetur facilis perspiciatis eos accusantium et ad? Quos veniam rerum
        pariatur, laboriosam voluptates distinctio fugit assumenda natus cumque.
      </p>

      <br />
      <br />
      <br />
    </AboutStyled>
  );
};

export default About;

const AboutStyled = styled.div`
  max-width: 1400px;

  > h2 {
    font-size: 2rem;
    color: ${theme.buttonColor.primary};
    text-align: center;
  }

  > p {
    font-size: 1.2rem;
    text-align: center;
  }
`;
