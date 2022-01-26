import { Image, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';
import CustomButton from '../../common/CustomButton/CustomButton';
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import { auth } from '../../firebase';
import { login } from '../../redux/reducers/userReducer';

const LoginPage = () => {
    const { Title } = Typography;
    const history = useHistory();
    const [password, setPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter your email and password');
            return;
        }

        setIsLoading(true);
        auth.signInWithEmailAndPassword(email, password).then((userAuth: any) => {
            dispatch( login({ uid: userAuth.user.uid, email: userAuth.user.email, displayName: userAuth.user.displayName }) );
            history.push(RoutePaths.home);
        })
        .catch((error: any) => alert(error))
        .finally(() => setIsLoading(false));
    }

    const navigateToRegister = () => {
        history.push(RoutePaths.register);
    }   

    return (
        <Container>
            <Image src="logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Login</Title>
            <TextfieldContainer>
                <CustomTextField value={email} setValue={setEmail} type="email" isRequired={true} placeholder="Email" width="250px"/>
                <CustomTextField value={password} setValue={setPassword} type="password" isRequired={true} placeholder="Password" width="250px"/>
            </TextfieldContainer>
            <ButtonContainer>
                <CustomButton width="250px" borderRadius="8px" type="primary" content={isLoading ? "Processing..." : "Sign in"} handleEvent={handleLogin} isDisabled={isLoading}/>
                <CustomButton width="250px" borderRadius="8px" type="secondary" content="Go to register" handleEvent={navigateToRegister} isDisabled={isLoading}/>
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