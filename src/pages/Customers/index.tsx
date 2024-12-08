import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { customersTableHeaders } from "constants/table"

import { CustomerTableData } from "dtos/CustomerDTO"

import { Table } from "components/Table"
import { Input } from "components/Input"
import { Button } from "components/Button"

import { Container, InputsContainer, Title } from "./styles"

export const Customers = () => {

  const { t } = useTranslation()

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
            <Title> {t('title.users')} </Title>
            <InputsContainer>
                <Input placeholder={t('placeholder.default')} />
                <Button text={t('button.filter')} width={90} />
                <NavLink to={"/customers/new"}>
                  <Button text={t('button.create')} width={90} />
                </NavLink>
            </InputsContainer>
            <Table headers={customersTableHeaders} content={customerTableData}/>
        </Container>
    )
}