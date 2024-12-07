import { Input } from "components/Input"
import { Button } from "components/Button"

import { ActionsContainer, Container, ContainerForm, Title } from "./styles"

export const GroupsCreate = () => {
    return (
        <Container>
            <Title> Grupos </Title>
            <ContainerForm>
                <Input placeholder="Digite aqui..." label="Nome" />
            </ContainerForm>
            <ActionsContainer>
                <Button text="Cancelar" width={120} height={50} />
                <Button text="Confirmar" width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}