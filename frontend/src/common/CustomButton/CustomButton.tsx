import React from 'react'
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import { theme } from '../../utils/theme';
import styled from 'styled-components';

type Props = {
    type: 'primary' | 'secondary',
    content: string,
    handleEvent: React.MouseEventHandler<HTMLElement>,
    width: string,
    borderRadius: string,
}

type ButtonContainerProps = {
    width: string,
    borderRadius: string,
}

const CustomButton = (props: Props) => {
    const { type, content, handleEvent, width, borderRadius } = props

    return (
        <ButtonContainer width={width} borderRadius={borderRadius}>
            <Button className={type} onClick={handleEvent}>{content}</Button>
        </ButtonContainer>
    )
}

export default CustomButton

const ButtonContainer = styled.div<ButtonContainerProps>`
    button{
        width: ${props => props.width};
        border-radius: ${props => props.borderRadius};
        margin: .3pc;
        height: 2.2pc;
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