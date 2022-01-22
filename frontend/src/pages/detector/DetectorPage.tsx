import styled from 'styled-components';
import Detector from '../../components/Detector/Detector';
import DetectorHero from '../../components/DetectorHero/DetectorHero';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const DetectorPage = () => {
    return (
        <DetectorStyled>
            <Header />
            <DetectorHero />
            <Detector />
            <Footer /> 
        </DetectorStyled>
    )
}

export default DetectorPage

const DetectorStyled = styled.div`
    margin: 1pc auto;
    max-width: 1400px;
`;