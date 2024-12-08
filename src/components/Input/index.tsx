import { Container, ErrorMessage, InputCamp, Label } from "./styles"
import { InputProps } from "./types"

export const Input = (props: InputProps) => {

    const {
        placeholder,
        disabled,
        label,
        errorMessage,
        value
    } = props

    return (
        <Container>
            {label && <Label>{label}</Label>}
            <InputCamp placeholder={placeholder} disabled={disabled} value={value} onChange={props.onChange} />
            {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
        </Container>
    )
}