import { useTranslation } from "react-i18next"

import { Input } from "components/Input"
import { Button } from "components/Button"

import { ActionsContainer, Container, ContainerForm, Title } from "./styles"

export const CustomersCreate = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <Title> Usuários </Title>
            <ContainerForm>
                <Input placeholder={t('placeholder.default')} label="Nome" />

                <Input placeholder={t('placeholder.default')} label="RA" />

                <Input placeholder="Aguardando solicitação..." label="TAG" disabled={true} />
                <Button text="Cadastrar sua TAG" />

                <Input placeholder="Aguardando solicitação..." label="Biometria" disabled={true} />
                <Button text="Cadastrar biometria" />
            </ContainerForm>
            <ActionsContainer>
                <Button text={t('button.cancel')} width={120} height={50} />
                <Button text={t('button.confirm')} width={120} height={50} />
            </ActionsContainer>
        </Container>
    )
}