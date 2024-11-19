import { Container } from "./styles"
import { ButtonProps } from "./types"

export const Button = (props: ButtonProps) => {
    return (
        <Container width={props.width}> {props.text} </Container>
    )
}