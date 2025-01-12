import { Container } from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { text, isDanger, height, onClick, width } = props

  return (
    <Container
      width={width || 0}
      height={height || 0}
      onClick={onClick}
      isDanger={isDanger || false}
    >
      {text}
    </Container>
  )
}
