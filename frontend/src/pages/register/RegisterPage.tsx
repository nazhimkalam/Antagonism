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

const RegisterPage = () => {
    const { Title } = Typography;
    const history = useHistory();
    const [fullName, setFullName] = useState<string>()
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleRegister = () => {
        if (!fullName || !email || !password) {
            alert('Please enter your full name, email and password');
            return;
        }

        setIsLoading(true);
        auth.createUserWithEmailAndPassword(email, password).then((userAuth: any) => {
            userAuth.user.updateProfile({ displayName: fullName }).then(() => {
                dispatch( login({ uid: userAuth.user.uid, email: userAuth.user.email, displayName: fullName }) );
                history.push(RoutePaths.home);
            });
        })
        .catch((error: any) => alert(error.message))
        .finally(() => setIsLoading(false));
    }

    const navigateToLogin = () => {
        history.push(RoutePaths.login);
    }

    return (
        <Container>
            <Image src="/logos/logo1.png" alt="logo" title="Antagonism" preview={false} />
            <Title level={2}>Register</Title>
            <TextfieldContainer>
                <CustomTextField value={fullName} setValue={setFullName} type="text" isRequired={true} placeholder="Full name" width="250px"/>
                <CustomTextField value={email} setValue={setEmail} type="email" isRequired={true} placeholder="Email" width="250px"/>
                <CustomTextField value={password} setValue={setPassword} type="password" isRequired={true} placeholder="Password" width="250px"/>
            </TextfieldContainer>
            <ButtonContainer>
                <CustomButton width="250px" borderRadius="8px" type="primary" content={isLoading ? "Processing..." : "Sign up"} handleEvent={handleRegister} isDisabled={isLoading}/>
                <CustomButton width="250px" borderRadius="8px" type="secondary" content="Go to login" handleEvent={navigateToLogin} isDisabled={isLoading}/>
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