import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { accessTableHeaders } from 'constants/table'

import { Input } from 'components/Input'
import { Table } from 'components/Table'
import { Button } from 'components/Button'

import { useAccess } from 'hooks/useAccess'

import { Container, InputsContainer, NoRegisterText, Title } from './styles'

export const Access = () => {
  const { t } = useTranslation()

  const { accessTableData, fetchGetAllAccess } = useAccess()

  useEffect(() => {
    fetchGetAllAccess()
  }, [fetchGetAllAccess])

  return (
    <Container>
      <Title> {t('title.access')} </Title>
      <InputsContainer>
        <Input placeholder={t('placeholder.default')} />
        <Button text={t('button.filter')} width={90} />
      </InputsContainer>

      {accessTableData.length === 0 ? (
        <NoRegisterText> {t('tableErrors.noData')} </NoRegisterText>
      ) : (
        <Table
          headers={accessTableHeaders}
          content={accessTableData.map((obj) => Object.values(obj))}
        />
      )}
    </Container>
  )
}
