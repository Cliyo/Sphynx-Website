import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { customersTableHeaders } from "constants/table"

import { useEffect } from "react"
import { useCustomer } from "hooks/useCustomer"

import { Table } from "components/Table"
import { Input } from "components/Input"
import { Button } from "components/Button"

import { Container, InputsContainer, Title } from "./styles"

export const Customers = () => {

  const { t } = useTranslation()

  const { customerTableData, fetchGetAllCustomers } = useCustomer()

  useEffect(() => {
    fetchGetAllCustomers()
  }, [])
      
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
        <Table headers={customersTableHeaders} content={customerTableData.map(obj => Object.values(obj))}/>
    </Container>
  )
}