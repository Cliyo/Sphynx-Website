import { NavLink } from "react-router-dom"

import { groupsTableHeaders } from "constants/table"

import { GroupsTableData } from "dtos/GroupsDTO"

import { Input } from "components/Input"
import { Table } from "components/Table"
import { Button } from "components/Button"

import { Container, InputsContainer, Title } from "./styles"

export const Groups = () => {

    const groupsTableData: GroupsTableData[] = [
      {
            id: 1,
            groupName: "Professor"
        
      },
      {
            id: 2,
            groupName: "Aluno"
      },
      {
            id: 3,
            groupName: "Diretor"
      },
    ];
      
    return (
        <Container>
            <Title> Grupos </Title>
            <InputsContainer>
                <Input placeholder="Digite aqui..." />
                <Button text="Filtrar" width={90}/>
                <NavLink to={"/groups/new"}>
                  <Button text="Criar" width={90} />
                </NavLink>
            </InputsContainer>
            <Table headers={groupsTableHeaders} content={groupsTableData}/>
        </Container>
    )
}