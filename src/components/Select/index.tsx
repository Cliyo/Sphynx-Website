import { Container, ErrorMessage, Label, SelectInput, SelectOption } from "./styles"
import { SelectProps } from "./types"

export const Select = (props: SelectProps) => {

    const { label, options, errorMessage } = props

    return (
        <Container>
            <Label>{label}</Label>
            <SelectInput>
                {options.map(option => (
                    <SelectOption key={option.value} value={option.value}>{option.label}</SelectOption>
                ))}
            </SelectInput>
            {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
        </Container>
    )
}