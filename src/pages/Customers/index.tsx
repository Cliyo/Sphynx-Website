import { Input } from "components/Input"
import { Container, InputsContainer, Title } from "./styles"
import { Button } from "components/Button"
import { Table } from "components/Table"
import { customersTableHeaders } from "constants/table"

export const Customers = () => {
    return (
        <Container>
            <Title> Usuários </Title>
            <InputsContainer>
                <Input placeholder="Digite aqui..." />
                <Button text="Filtrar" width={90} />
                <Button text="Criar" width={90} />
            </InputsContainer>
            <Table headers={customersTableHeaders} content={[[]]}/>
        </Container>
    )
}