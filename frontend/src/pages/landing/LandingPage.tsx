import { Image, Typography } from 'antd';
import React from 'react'
import styled from 'styled-components';
import CustomButton from '../../common/CustomButton/CustomButton';

const LandingPage = () => {
    const { Title } = Typography;

    return (
        <Container>
            <Image src="logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Welcome to Antagonism</Title>
            <ButtonContainer>
                <CustomButton type="primary" content="Login" handleEvent={() => {}}/>
                <CustomButton type="secondary" content="Sign up" handleEvent={() => {}}/>
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