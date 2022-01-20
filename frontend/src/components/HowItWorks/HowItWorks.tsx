import styled from "styled-components";
import { theme } from "../../utils/theme";

const HowItWorks = () => {
  return (
    <HowItWorksStyled>
      <h2>How it works? </h2>
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

      <img src="banner.png" alt="" />

      <br />
      <br />
      <br />
    </HowItWorksStyled>
  );
};

export default HowItWorks;

const HowItWorksStyled = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2rem;
    color: ${theme.buttonColor.primary};
    text-align: center;
  }

  > p {
    text-align: center;
    font-size: 1.2rem;
  }

  > img {
    object-fit: contain;
    height: 300px;
    padding-top: 2pc;
}
`;
