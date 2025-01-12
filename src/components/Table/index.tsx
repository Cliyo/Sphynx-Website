import { TableProps } from './types'

import { TableBody } from './components/Body'
import { TableHeader } from './components/Header'

import { Container } from './styles'

export const Table = (props: TableProps) => {
  const { content, headers } = props

  return (
    <Container>
      <TableHeader headers={headers} />
      <TableBody bodyLines={content} />
    </Container>
  )
}
