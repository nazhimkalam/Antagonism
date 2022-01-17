import { Image, Typography } from 'antd';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';
import CustomButton from '../../common/CustomButton/CustomButton';

const LandingPage = () => {
    const { Title } = Typography;
    const history = useHistory();

    const navigateToLogin = () => {
        history.push(RoutePaths.login);
    }

    const navigateToRegister = () => {
        history.push(RoutePaths.register);
    }

    return (
        <Container>
            <Image src="logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Welcome to Antagonism</Title>
            <ButtonContainer>
                <CustomButton width="120px" borderRadius="8px" type="primary" content="Login" handleEvent={navigateToLogin}/>
                <CustomButton width="120px" borderRadius="8px" type="secondary" content="Sign up" handleEvent={navigateToRegister}/>
            </ButtonContainer>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    img {
        width: 180px;
        object-fit: contain;
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;