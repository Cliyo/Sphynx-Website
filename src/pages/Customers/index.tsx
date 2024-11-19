import { Input } from "components/Input"
import { Container, InputsContainer, Title } from "./styles"

export const Customers = () => {
    return (
        <Container>
            <Title> Usuários </Title>
            <InputsContainer>
                <Input placeholder="Digite aqui..." />
            </InputsContainer>
        </Container>
    )
}