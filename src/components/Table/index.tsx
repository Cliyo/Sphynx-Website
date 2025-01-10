import { TableProps } from './types'

import { TableBody } from './components/Body'
import { TableHeader } from './components/Header'

import { Container, NoRegisterText } from './styles'
import { useTranslation } from 'react-i18next'

export const Table = (props: TableProps) => {
  const { t } = useTranslation()

  const { content, headers } = props

  return (
    <Container>
      <TableHeader headers={headers} />
      {content.length === 0 && (
        <NoRegisterText> {t('tableErrors.noData')} </NoRegisterText>
      )}
      {content.length > 0 && <TableBody bodyLines={content} />}
    </Container>
  )
}
