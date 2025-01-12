import { Icon } from 'components/Icon'
import { Container, ErrorMessage, InputCamp, Label } from './styles'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const { placeholder, disabled, label, errorMessage, value } = props

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputCamp
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={props.onChange}
        hasError={!!errorMessage}
      />
      {errorMessage && (
        <ErrorMessage>
          <Icon color="ERROR_MAIN" name="IoAlertCircleSharp" size="10" />
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  )
}
