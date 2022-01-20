import styled from 'styled-components';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <Hero />
            <About />
            <HowItWorks />
            <Footer />
        </HomePageContainer>
    )
}

export default HomePage

const HomePageContainer = styled.div`
    margin: 1pc auto;
    max-width: 1400px;
`;