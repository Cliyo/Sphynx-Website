import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { groupsTableHeaders } from 'constants/table'

import { Input } from 'components/Input'
import { Table } from 'components/Table'
import { Button } from 'components/Button'

import { useGroup } from 'hooks/useGroup'
import { Container, InputsContainer, NoRegisterText, Title } from './styles'

export const Groups = () => {
  const { t } = useTranslation()

  const { groupPageData, fetchGetAllGroups } = useGroup()

  useEffect(() => {
    fetchGetAllGroups()
  }, [fetchGetAllGroups])

  return (
    <Container>
      <Title> {t('title.groups')} </Title>
      <InputsContainer>
        <Input placeholder={t('placeholder.default')} />
        <Button text={t('button.filter')} width={90} />
        <NavLink to={'/groups/new'}>
          <Button text={t('button.create')} width={90} />
        </NavLink>
      </InputsContainer>

      {groupPageData.length === 0 ? (
        <NoRegisterText> {t('tableErrors.noData')} </NoRegisterText>
      ) : (
        <Table
          headers={groupsTableHeaders}
          content={groupPageData.map((obj) => Object.values(obj))}
        />
      )}
    </Container>
  )
}
