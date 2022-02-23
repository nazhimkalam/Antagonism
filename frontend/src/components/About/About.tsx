import styled from "styled-components";
import { theme } from "../../utils/theme";

const About = () => {
  return (
    <AboutStyled id="about-section">
      <h2>About Antagonism</h2>
      <p>
        Hate speech is defined as any sort of spoken, written, or behavioral communication that attacks or utilizes disparaging or discriminating terminology towards a person or group because of who they are, such as their religion, ethnicity, nationality, race, color, ancestry, sex, or any identification factor.
      </p>

      <p>
        This a web application that will be able to classify if the input message is of type ‘hate’ or ‘not’. Moreover, the areas where the level of hate was detected from the input message will be highlighted.
      </p>

      <p>
        When there are large volumes of emails which needs to be sent with in a company/organization, reviewing all of them will be challenging and this is where Antagonism kicks in. Moreover, this can be used anywhere related to do with reviewing text/speech for any such event etc...
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
    text-align: justify;
  }
`;
