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

                <Input placeholder="Aguardando solicitação..." label="TAG" disabled={true} />
                <Button text="Cadastrar sua TAG" />

                <Input placeholder="Aguardando solicitação..." label="Biometria" disabled={true} />
                <Button text="Cadastrar biometria" />
            </CustomerForm>
            <ActionsContainer>
                <Button text="Cancelar" width={120} height={50} />
                <Button text="Confirmar" width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}