import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Table } from "components/Table"
import { Input } from "components/Input"
import { Button } from "components/Button"

import { LocalItemDTO } from "dtos/LocalDTO"

import { localsTableHeaders } from "constants/table"

import { Container, InputsContainer, Title } from "./styles"

export const Locals = () => {

    const { t } = useTranslation();

    const localTableData: LocalItemDTO[] = [
      {
          name: "João Silva",
          mac: "00:1A:2B:3C:4D:5E",
          grupos: ["Clientes Premium", "VIP"],
      },
      {
          name: "Maria Oliveira",
          mac: "11:2B:3C:4D:5E:6F",
          grupos: ["Clientes Básicos"],
      },
      {
          name: "Pedro Santos",
          mac: "22:3C:4D:5E:6F:7G",
          grupos: ["Clientes Premium"],
      },
      {
          name: "Ana Paula",
          mac: "33:4D:5E:6F:7G:8H",
          grupos: ["Clientes Novos", "Testes"],
      },
    ];
      
    return (
        <Container>
            <Title> {t('title.locals')} </Title>
            <InputsContainer>
                <Input placeholder={t('placeholder.default')} />
                <Button text={t('button.filter')} width={90} />
                <NavLink to={"/locals/new"}>
                  <Button text={t('button.create')} width={90} />
                </NavLink>
            </InputsContainer>
            <Table headers={localsTableHeaders} content={localTableData.map(obj => Object.values(obj))}/>
        </Container>
    )
}