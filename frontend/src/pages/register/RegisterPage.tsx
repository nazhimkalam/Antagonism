import { Image, Typography } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';
import CustomButton from '../../common/CustomButton/CustomButton';
import CustomTextField from '../../common/CustomTextField/CustomTextField';

const RegisterPage = () => {
    const { Title } = Typography;
    const history = useHistory();
    const [fullName, setFullName] = useState<string>()
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleRegister = () => {}

    const navigateToLogin = () => {
        history.push(RoutePaths.login);
    }

    return (
        <Container>
            <Image src="logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Register</Title>
            <TextfieldContainer>
                <CustomTextField value={fullName} setValue={setFullName} type="text" isRequired={true} placeholder="Full name" width="250px"/>
                <CustomTextField value={username} setValue={setUsername} type="text" isRequired={true} placeholder="Username" width="250px"/>
                <CustomTextField value={password} setValue={setPassword} type="password" isRequired={true} placeholder="Password" width="250px"/>
            </TextfieldContainer>
            <ButtonContainer>
                <CustomButton width="250px" borderRadius="8px" type="primary" content="Sign up" handleEvent={handleRegister}/>
                <CustomButton width="250px" borderRadius="8px" type="secondary" content="Go to login" handleEvent={navigateToLogin}/>
            </ButtonContainer>
        </Container>
    )
}

export default RegisterPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;

    img {
        width: 180px;
        object-fit: contain;
    }
`;

const TextfieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;