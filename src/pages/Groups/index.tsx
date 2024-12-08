import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { groupsTableHeaders } from "constants/table"

import { GroupsTableData } from "dtos/GroupsDTO"

import { Input } from "components/Input"
import { Table } from "components/Table"
import { Button } from "components/Button"

import { Container, InputsContainer, Title } from "./styles"
import { useGroup } from "hooks/useGroup"

export const Groups = () => {

  const { t } = useTranslation()

  const { groupPageData, fetchGetAllGroups } = useGroup();

  useEffect(() => {
    fetchGetAllGroups()
  }, [])
    
  return (
      <Container>
          <Title> {t('title.groups')} </Title>
          <InputsContainer>
              <Input placeholder={t('placeholder.default')} />
              <Button text={t('button.filter')} width={90}/>
              <NavLink to={"/groups/new"}>
                <Button text={t('button.create')} width={90} />
              </NavLink>
          </InputsContainer>
          <Table headers={groupsTableHeaders} content={groupPageData}/>
      </Container>
  )
}