import { Input } from "components/Input"
import { Container, InputsContainer, Title } from "./styles"
import { Button } from "components/Button"
import { Table } from "components/Table"
import { customersTableHeaders } from "constants/table"
import { CustomerTableData } from "dtos/CustomerDTO"

export const Customers = () => {

    const customerTableData: CustomerTableData[] = [
        {
          name: "João Silva",
          ra: "12345",
          tag: "VIP",
          grupo: "Clientes Premium",
        },
        {
          name: "Maria Oliveira",
          ra: "67890",
          tag: "Regular",
          grupo: "Clientes Básicos",
        },
        {
          name: "Pedro Santos",
          ra: "54321",
          tag: "VIP",
          grupo: "Clientes Premium",
        },
        {
          name: "Ana Paula",
          ra: "98765",
          tag: "Novo",
          grupo: "Clientes Novos",
        },
      ];
      
    return (
        <Container>
            <Title> Usuários </Title>
            <InputsContainer>
                <Input placeholder="Digite aqui..." />
                <Button text="Filtrar" width={90} />
                <Button text="Criar" width={90} />
            </InputsContainer>
            <Table headers={customersTableHeaders} content={customerTableData}/>
        </Container>
    )
}