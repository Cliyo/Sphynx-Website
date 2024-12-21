import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { accessTableHeaders, customersTableHeaders } from "constants/table"

import { Input } from "components/Input"
import { Table } from "components/Table"
import { Button } from "components/Button"

import { Container, InputsContainer, Title } from "./styles"
import { useAccess } from "hooks/useAccess"
import { useEffect } from "react"

export const Access = () => {

    const { t } = useTranslation()

    const { accessTableData, fetchGetAllAccess } = useAccess()

    useEffect(() => {
        fetchGetAllAccess()
    }, [])

    return (
        <Container>
            <Title> {t('title.access')} </Title>
            <InputsContainer>
                <Input placeholder={t('placeholder.default')} />
                <Button text={t('button.filter')} width={90}/>
            </InputsContainer>
            <Table headers={accessTableHeaders} content={accessTableData}/>
        </Container>
    )
}