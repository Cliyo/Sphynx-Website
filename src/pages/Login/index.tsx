import { useTranslation } from "react-i18next"
import { Controller, useForm } from "react-hook-form"

import { Button } from "components/Button"
import { Input } from "components/Input"

import { LoginFormData } from "./types"

import { REGEX } from "constants/regex"

import Icon from "assets/logo.png"

import { Banner, Container, ContainerForm, Form, Image } from "./styles"
import { useAuth } from "hooks/useAuth"

export const Login = () => {

    const { t } = useTranslation()

    const { fetchLogin } = useAuth()

    const {control, handleSubmit, formState: {errors} } = useForm<LoginFormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data: LoginFormData) => {
        console.log("enviou: ", data)
        await fetchLogin(data)
    }

    return (
        <Container>
            <Banner>
                <Image src={Icon} />
            </Banner>
            <ContainerForm>
                <Form>
                    <Controller
                        control={control}
                        name="email"
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
                                label={t('inputLabel.email')}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: t('inputErrors.required')
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input
                                value={value}
                                onChange={onChange}
                                placeholder={t('placeholder.default')}
                                label={t('inputLabel.password')}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />
                    <Button onClick={handleSubmit(onSubmit)} text={t('button.login')} height={50} />
                </Form>
            </ContainerForm>
        </Container>
    )
}