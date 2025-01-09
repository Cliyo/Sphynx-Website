import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"

import { Input } from "components/Input"
import { Button } from "components/Button"

import { REGEX } from "constants/regex"

import { useGroup } from "hooks/useGroup"

import { CreateGroupFormData } from "./types"

import { ActionsContainer, Container, ContainerForm, Title } from "./styles"

export const GroupsCreate = () => {

    const { t } = useTranslation()

    const navigate = useNavigate()

    const {fetchCreateGroup} = useGroup()

    const {control, handleSubmit, formState: {errors}} = useForm<CreateGroupFormData>(
        {
            defaultValues: {
                name: ''
            }
        }
    )

    const handleCancel = () => {
        navigate('/groups')
    }

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
                        required: t('inputErrors.required'),
                        pattern: {
                            value: REGEX.onlyString,
                            message: t('inputErrors.text')
                        }
                    }}
                    render={({field: {onChange, value}}) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            placeholder={t('placeholder.default')}
                            label={t('inputLabel.name')}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />
            </ContainerForm>
            <ActionsContainer>
                <Button onClick={handleCancel} text={t('button.cancel')} width={120} height={50} />
                <Button onClick={handleSubmit(onSubmit)} text={t('button.confirm')} width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}