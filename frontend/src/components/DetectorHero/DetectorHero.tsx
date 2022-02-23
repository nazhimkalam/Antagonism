import styled from "styled-components";

const DetectorHero = () => {
  return (
    <DetectorHeroStyled>
      <section className="left">
        <h2>Discover the truth</h2>
        <p>
          Hate speech is defined as any sort of spoken, written, or behavioral communication that attacks or utilizes disparaging or discriminating terminology towards a person or group because of who they are, such as their religion, ethnicity, nationality, race, color, ancestry, sex, or any identification factor. When there are large volumes of emails which needs to be sent with in a company/organization, reviewing all of them will be challenging and this is where Antagonism kicks in. Moreover, this can be used anywhere related to do with reviewing text/speech for any such event etc...
        </p>
        <p>
          The application will be able to scan the text and classify it as either "Hate" or "Not Hate" text. Naviagte to the detection section and paste the text you want to scan and click on the scan button. The result will be displayed. The result will also be saved into the database, along with the user who scanned the text.
        </p>
      </section>

      <section className="right">
        <img src="banner-2.PNG" alt="" />
      </section>
    </DetectorHeroStyled>
  );
};

export default DetectorHero;

const DetectorHeroStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8vh 2pc;

  section {
    img {
      object-fit: contain;
      height: 250px;
    }
    h2 {
      font-size: 2em;
    }
    p {
        font-size: 1.2em;
        width: 45vw;
        text-align: justify;
    }
  }
`;
