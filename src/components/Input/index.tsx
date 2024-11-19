import { Container, InputCamp, Label } from "./styles"
import { InputProps } from "./types"

export const Input = (props: InputProps) => {
    return (
        <Container>
            {props.label && <Label>{props.label}</Label>}
            <InputCamp placeholder={props.placeholder} />
        </Container>
    )
}