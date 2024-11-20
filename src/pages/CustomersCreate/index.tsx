import { Input } from "components/Input"
import { ActionsContainer, Container, CustomerForm, Title } from "./styles"
import { Button } from "components/Button"

export const CustomersCreate = () => {
    return (
        <Container>
            <Title> Usuários </Title>
            <CustomerForm>
                <Input placeholder="Digite aqui..." label="Nome" />
                <Input placeholder="Digite aqui..." label="RA" />
                <Input placeholder="Digite aqui..." label="TAG" />
            </CustomerForm>
            <ActionsContainer>
                <Button text="Cancelar" width={120}/>
                <Button text="Confirmar" width={120}/>
            </ActionsContainer>
        </Container>
    )
}