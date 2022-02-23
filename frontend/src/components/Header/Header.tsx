import { Image, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';
import CustomButton from '../../common/CustomButton/CustomButton';
import { logout } from '../../redux/reducers/userReducer';

const Header = () => {
    const { Title } = Typography;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());
        history.push(RoutePaths.landing);
    }

    const navigateToHome = () => {
        history.replace(RoutePaths.home);
    }

    return (
        <Container>
            <ImageContainer onClick={navigateToHome}>
                <Image src="logos/logo1.PNG" alt="logo" title="Antagonism" preview={false} />
                <Title level={3}>Antagonism</Title>
            </ImageContainer>
            <CustomButton width="100px" borderRadius="50px" type="primary" content="Logout" handleEvent={handleLogout}/>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
        cursor: pointer;
        object-fit: contain;
    }

`;