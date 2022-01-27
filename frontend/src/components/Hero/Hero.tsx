import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../../common/CustomButton/CustomButton';
import { RoutePaths } from '../../app/routes';
import { theme } from '../../utils/theme';

const Hero = () => {
    const history = useHistory();

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section')!;
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    const navigateToDetector = () => {
        history.push(RoutePaths.detector);
    }

    return (
        <HeroStyled>
            <section>
                <h1>Welcome Nazhim!</h1>
                <h2>Get Started!</h2>

                <CustomButton width="250px" borderRadius="20px" type="primary" content="ABOUT" handleEvent={scrollToAbout}/>
                <CustomButton width="250px" borderRadius="20px" type="secondary" content="DETECTOR" handleEvent={navigateToDetector}/>
            </section>

            <section>
                <img src="./banner.PNG" alt="" />
            </section>
        </HeroStyled>
    )
}

export default Hero

const HeroStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8vh 2pc;
    height: 90vh;

    section {
        img {
            object-fit: contain;
            height: 350px;
        }
        h1 {
            font-size: 2.8em;
        }
        h2 {
            font-size: 2em;
            margin-bottom: 5pc;
            color: ${theme.buttonColor.primary};
        }
    }
`;