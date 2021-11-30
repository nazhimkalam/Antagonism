import styled from "styled-components"
import { theme } from "../../utils/theme"

type Props = {
    width: string,
    placeholder: string,
    setValue: Function,
    value?: string,
    isRequired: boolean,
    type: "text" | "password" | "email" | "number" | "tel" | "date" | "time" | "datetime-local" | "month" | "week" | "url" | "search" | "color" | "file" | "range" | "radio" | "checkbox" | "hidden" | "image" | "submit" | "reset" | "button",
}
type TextfieldContainerProps = {
    width: string
}

const CustomTextField = (props: Props) => {
    const { width, placeholder, setValue, value, isRequired, type } = props

    return (
        <TextfieldContainer width={width}>
            <input type={type} placeholder={placeholder} onChange={e => setValue(e.target.value)} required={isRequired} value={value}/>
        </TextfieldContainer>
    )
}

export default CustomTextField

const TextfieldContainer = styled.div<TextfieldContainerProps>`
    margin: .5pc ;
    > input {
        width: ${props => props.width};
        border: 1px solid ${theme.borderColor.primary};
        border-width: .5px;
        outline: none;
        border-radius: 5px;
        padding: .3pc;
    }
`;