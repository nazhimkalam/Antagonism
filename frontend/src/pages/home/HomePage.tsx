import styled from 'styled-components';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

const HomePage = () => {
    return (
        <Container>
            <Header />
            <Hero />
            <About />
            <HowItWorks />
            <Footer />
        </Container>
    )
}

export default HomePage

const Container = styled.div``;