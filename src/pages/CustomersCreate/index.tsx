import { useTranslation } from "react-i18next"
import { Controller, useForm } from "react-hook-form"

import { Input } from "components/Input"
import { Button } from "components/Button"

import { REGEX } from "constants/regex"
import { CreateCustomerFormData } from "./types"

import { ActionsContainer, Container, ContainerForm, SocketInput, Title } from "./styles"
import { Select } from "components/Select"
import { useGroup } from "hooks/useGroup"
import { useEffect } from "react"
import { useCustomer } from "hooks/useCustomer"

export const CustomersCreate = () => {

    const { t } = useTranslation()

    const { fetchGetAllGroups, groupPageData } = useGroup()

    const { fetchCreateCustomer } = useCustomer()

    const { control, handleSubmit, formState: {errors}} = useForm<CreateCustomerFormData>(
        {
            defaultValues: {
                name: '',
                ra: '',
                tag: 'teste',
                group: '',
                biometry: 'teste'
            }
        }
    )

    const onSubmit = (data: CreateCustomerFormData) => {
        fetchCreateCustomer(data)
    }

    useEffect(() => {
        fetchGetAllGroups()
    }, [fetchGetAllGroups])

    return (
        <Container>
            <Title> Usuários </Title>
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
                            placeholder={t('placeholder.default')} 
                            onChange={onChange}
                            label="Nome" 
                            errorMessage={errors.name?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="ra"
                    rules={{
                        required: t('inputErrors.required'),
                        pattern: {
                            value: REGEX.onlyNumbers,
                            message: t('inputErrors.number')
                        }
                    }}
                    render={({field: {onChange, value}}) => (
                        <Input 
                            value={value}
                            placeholder={t('placeholder.default')} 
                            onChange={onChange}
                            label="RA" 
                            errorMessage={errors.ra?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="group"
                    render={({ field: {onChange} }) => (
                        <Select 
                            options={groupPageData.map(
                                group => ({
                                    label: group.name, 
                                    value: group.id.toString()
                                }))
                            }
                            label="Grupo" 
                            onChange={onChange}
                        />
                    )}
                />

                <SocketInput>
                    <Controller
                        control={control}
                        name="tag"
                        rules={{
                            //required: t('inputErrors.required')
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input
                                value={value}
                                onChange={onChange}
                                placeholder={t('placeholder.waiting')} 
                                label="TAG" disabled={true} 
                                errorMessage={errors.tag?.message}
                            />
                        )}
                    />
                    <Button text={t('button.tag')} />
                </SocketInput>
                
                <SocketInput>
                    <Controller
                        control={control}
                        name="biometry"
                        rules={{
                            //required: t('inputErrors.required')
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input
                                value={value}
                                onChange={onChange}
                                placeholder={t('placeholder.waiting')}
                                label="Biometria" disabled={true} 
                                errorMessage={errors.biometry?.message}
                            />
                        )}
                    />
                    <Button text={t('button.biometry')} />
                </SocketInput>
                
            </ContainerForm>
            <ActionsContainer>
                <Button text={t('button.cancel')} width={120} height={50} />
                <Button onClick={handleSubmit(onSubmit)} text={t('button.confirm')} width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}