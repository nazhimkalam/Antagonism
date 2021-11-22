import React from 'react'
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import { theme } from '../../utils/theme';
import styled from 'styled-components';

type Props = {
    type: 'primary' | 'secondary',
    content: string,
    handleEvent: React.MouseEventHandler<HTMLElement>
}

const CustomButton = (props: Props) => {
    const { type, content, handleEvent } = props

    return (
        <ButtonContainer>
            <Button className={type} onClick={handleEvent}>{content}</Button>
        </ButtonContainer>
    )
}

export default CustomButton

const ButtonContainer = styled.div`
    button{
        width: 100px;
        border-radius: 999px;
        margin: .3pc;
    }
    .primary {
        background-color: ${theme.buttonColor.primary};
        color: ${theme.buttonColor.secondary};
    }
    .secondary {
        background-color: ${theme.buttonColor.secondary};
        color: ${theme.buttonColor.primary};
        border: 1px solid ${theme.buttonColor.primary};
    }
`;