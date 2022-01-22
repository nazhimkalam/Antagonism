import styled from 'styled-components';
import { theme } from '../../utils/theme';

const Footer = () => {
    return (
        <FooterStyled>
            <p>@nazhimkalam</p>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.div`
    border-top: 1px solid ${theme.buttonColor.primary};
    color: ${theme.buttonColor.primary};
    padding: 1pc;
    text-align: center;
    font-size: 1rem;
    height: 80px;
`;