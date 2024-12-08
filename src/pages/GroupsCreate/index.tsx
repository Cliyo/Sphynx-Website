import { Controller, useForm } from "react-hook-form"

import { Input } from "components/Input"
import { Button } from "components/Button"

import { REGEX } from "constants/regex"

import { useGroup } from "hooks/useGroup"

import { CreateGroupFormData } from "./types"

import { ActionsContainer, Container, ContainerForm, Title } from "./styles"

export const GroupsCreate = () => {

    const {fetchCreateGroup} = useGroup()

    const {control, handleSubmit, formState: {errors}} = useForm<CreateGroupFormData>(
        {
            defaultValues: {
                name: ''
            }
        }
    )

    const onSubmit = (data: CreateGroupFormData) => {
        fetchCreateGroup(data)
    }

    return (
        <Container>
            <Title> Grupos </Title>
            <ContainerForm>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: 'Campo obrigatório',
                        pattern: {
                            value: REGEX.onlyString,
                            message: "Campo deve ser um texto"
                        }
                    }}
                    render={({field: {onChange, value}}) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            placeholder="Digite aqui..."
                            label="Nome"
                            errorMessage={errors.name?.message}
                        />
                    )}
                />
            </ContainerForm>
            <ActionsContainer>
                <Button text="Cancelar" width={120} height={50} />
                <Button onClick={handleSubmit(onSubmit)} text="Confirmar" width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}