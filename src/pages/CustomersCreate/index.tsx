import { useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Controller, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import { Input } from "components/Input"
import { Button } from "components/Button"
import { Select } from "components/Select"

import { REGEX } from "constants/regex"
import { CreateCustomerFormData } from "./types"

import { useGroup } from "hooks/useGroup"
import { useCustomer } from "hooks/useCustomer"

import { ActionsContainer, Container, ContainerForm, SocketInput, Title } from "./styles"

export const CustomersCreate = () => {

    const { id } = useParams()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { fetchGetAllGroups, groupPageData } = useGroup()
    const { fetchCreateCustomer, fetchGetCustomerById, fetchDeleteCustomerById } = useCustomer()

    const isEditing = !!id && window.location.pathname.includes('/edit/')

    const { control, handleSubmit, setValue, formState: {errors}} = useForm<CreateCustomerFormData>(
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

    const fillCustomerFields = useCallback(async () => {
        try {
            const customerData = await fetchGetCustomerById(id as string)

            if(customerData) {
                const { name, ra, tag, group, biometry } = customerData
                const groupValue = group.id.toString()

                setValue('name', name)
                setValue('ra', ra)
                setValue('group', groupValue)
                setValue('tag', tag)
                setValue('biometry', biometry)
            }
        } catch (error) {
            console.error(error)
        }
    }, [fetchGetCustomerById, id, setValue])

    const handleDelete = async () => {
        await fetchDeleteCustomerById(id as string);
    }

    const handleCancel = () => {
        navigate('/customers')
    }

    const onSubmit = async (data: CreateCustomerFormData) => {
        if(isEditing) {
            //fetchUpdateCustomer(data)
        } else {
            await fetchCreateCustomer(data)
        }
    }

    useEffect(() => {
        fetchGetAllGroups()
    }, [fetchGetAllGroups])

    useEffect(() => {
        if(isEditing) {
            fillCustomerFields()
        }
    }, [isEditing, id, fillCustomerFields])

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
                    render={({ field: {value, onChange} }) => (
                        <Select 
                            options={groupPageData.map(
                                group => ({
                                    label: group.name, 
                                    value: group.id.toString()
                                }))
                            }
                            label="Grupo" 
                            value={value}
                            onChange={(selectedOption) => onChange(selectedOption)} 
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
                {isEditing && <Button onClick={handleDelete} text={t('button.delete')} width={120} height={50} /> }
                <Button onClick={handleCancel} text={t('button.cancel')} width={120} height={50} />
                <Button onClick={handleSubmit(onSubmit)} text={t('button.confirm')} width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}