import { ModalProps } from './types'

import { Button } from 'components/Button'

import { ButtonsContainer, Container, Text, Title } from './styles'
import { Icon } from 'components/Icon'

export const Modal = (props: ModalProps) => {
  const { title, message, onClose, onConfirm } = props

  return (
    <Container>
      <Icon color="PRIMARY_DARK" name="IoAlertCircleOutline" size="124" />
      <Title> {title} </Title>
      <Text> {message} </Text>
      <ButtonsContainer>
        <Button onClick={onClose} text="Fechar" width={120} height={50} />
        <Button onClick={onConfirm} text="Confirmar" width={120} height={50} />
      </ButtonsContainer>
    </Container>
  )
}
