import { Image, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';
import CustomButton from '../../common/CustomButton/CustomButton';
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import { login } from '../../redux/reducers/userReducer';

const LoginPage = () => {
    const { Title } = Typography;
    const history = useHistory();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (!username || !password) {
            alert('Please enter your username and password');
            return;
        }
        dispatch(login({ id: 1, username, password }));
        history.push(RoutePaths.home);
    }

    const navigateToRegister = () => {
        history.push(RoutePaths.register);
    }   

    return (
        <Container>
            <Image src="logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Login</Title>
            <TextfieldContainer>
                <CustomTextField value={username} setValue={setUsername} type="text" isRequired={true} placeholder="Username" width="250px"/>
                <CustomTextField value={password} setValue={setPassword} type="password" isRequired={true} placeholder="Password" width="250px"/>
            </TextfieldContainer>
            <ButtonContainer>
                <CustomButton width="250px" borderRadius="8px" type="primary" content="Sign in" handleEvent={handleLogin}/>
                <CustomButton width="250px" borderRadius="8px" type="secondary" content="Go to register" handleEvent={navigateToRegister}/>
            </ButtonContainer>
        </Container>
    )
}

export default LoginPage

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