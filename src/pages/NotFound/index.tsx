import { Button } from 'components/Button'
import { Container, ErrorContainer, Text, Title } from './styles'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()

  const handleBack = () => {
    window.history.back()
  }

  return (
    <Container>
      <ErrorContainer>
        <Title> 404 </Title>
        <Text> {t('httpErrors.404')} </Text>
        <Button text="Voltar" height={50} onClick={handleBack} />
      </ErrorContainer>
    </Container>
  )
}
