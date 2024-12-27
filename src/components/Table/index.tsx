import { Icon } from "components/Icon";
import { Body, BodyItem, BodyLine, Container, Header, HeaderItem } from "./styles";
import { TableProps } from "./types";
import { CustomerTableData } from "dtos/CustomerDTO";
import { LocalTableData } from "dtos/LocalDTO";
import { AccessTableData } from "dtos/AccessDTO";
import { GroupsTableData } from "dtos/GroupsDTO";

const renderRow = (data: CustomerTableData | LocalTableData | AccessTableData | GroupsTableData) => {
    if ('ra' in data) {
        // Renderiza para CustomerTableData
        return (
            <>
                <BodyItem> {data.name} </BodyItem>
                <BodyItem> {data.ra} </BodyItem>
                <BodyItem> {data.tag} </BodyItem>
                <BodyItem> {data.group} </BodyItem>
                <BodyItem> {!!data.biometry ? 'Cadastrada' : "Não cadastrada"} </BodyItem>
                <BodyItem>
                    <Icon color="NEUTRAL_900" size="16" name="IoPencil" />
                    <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" />
                </BodyItem>
            </>
        )
    }
    else if('situation' in data){
        return (
            <>
                <BodyItem> {data.id} </BodyItem>
                <BodyItem> {data.customer} </BodyItem>
                <BodyItem> {data.local} </BodyItem>
                <BodyItem> {data.situation} </BodyItem>
                <BodyItem>
                    <Icon color="NEUTRAL_900" size="16" name="IoPencil" />
                    <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" />
                </BodyItem>
            </>
        )
    }
    else if('groupName' in data){
        return (
            <>
                <BodyItem> {data.id} </BodyItem>
                <BodyItem> {data.groupName} </BodyItem>
                <BodyItem>
                    <Icon color="NEUTRAL_900" size="16" name="IoPencil" />
                    <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" />
                </BodyItem>
            </>
        )
    }
    else {
        // Renderiza para LocalTableData
        return (
            <>
                <BodyItem> {data.name} </BodyItem>
                <BodyItem> {data.mac} </BodyItem>
                <BodyItem> {data.grupos.join(', ')} </BodyItem>
                <BodyItem>
                    <Icon color="NEUTRAL_900" size="16" name="IoPencil" />
                    <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" />
                </BodyItem>
            </>
        );
    }
};

export const Table = (props: TableProps) => {
    return (
        <Container>
            <Header>
                {
                    props.headers.map((header) => (
                        <HeaderItem> {header} </HeaderItem>
                    ))
                }
            </Header>
            <Body>
                {props.content.map((data, index) => (
                    <BodyLine key={index}>
                        {renderRow(data)}
                    </BodyLine>
                ))}
            </Body>
        </Container>
    );
};