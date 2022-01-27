import styled from "styled-components";

const DetectorHero = () => {
  return (
    <DetectorHeroStyled>
      <section className="left">
        <h2>Discover the truth</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          unde totam commodi, quaerat temporibus ipsum asperiores explicabo cum
          velit ab blanditiis minima alias inventore eius illum est laborum!
          Blanditiis consequuntur similique minus, assumenda nihil quae veniam
          dolorem dolores ea aliquid ducimus tempore vitae hic architecto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          unde totam commodi, quaerat temporibus ipsum asperiores explicabo cum
          velit ab blanditiis minima alias inventore eius illum est laborum!
          Blanditiis consequuntur similique minus, assumenda nihil quae veniam
          dolorem dolores ea aliquid ducimus tempore vitae hic architecto?
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
    }
  }
`;
