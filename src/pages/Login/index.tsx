import { useTranslation } from 'react-i18next'
import { Controller, useForm } from 'react-hook-form'

import { useAuth } from 'hooks/useAuth'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { LoginFormData } from './types'

import { REGEX } from 'constants/regex'

import Icon from 'assets/logo.png'

import {
  Banner,
  Container,
  ContainerForm,
  Form,
  FormTitle,
  Image,
} from './styles'

export const Login = () => {
  const { t } = useTranslation()

  const { fetchLogin } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      user: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    await fetchLogin(data)
  }

  return (
    <Container>
      <Banner>
        <Image src={Icon} alt="sphynx-icon" />
      </Banner>
      <ContainerForm>
        <Form>
          <FormTitle> Login </FormTitle>
          <Controller
            control={control}
            name="user"
            rules={{
              required: t('inputErrors.required'),
              pattern: {
                value: REGEX.email,
                message: t('inputErrors.email'),
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder={t('placeholder.default')}
                label={t('inputLabel.email')}
                errorMessage={errors.user?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: t('inputErrors.required'),
              minLength: {
                value: 2,
                message: t('inputErrors.minLength', { length: 2 }),
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder={t('placeholder.default')}
                label={t('inputLabel.password')}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            text={t('button.login')}
            height={50}
          />
        </Form>
      </ContainerForm>
    </Container>
  )
}
