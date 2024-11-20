import { Icon } from "components/Icon";
import { Body, BodyItem, BodyLine, Container, Header, HeaderItem } from "./styles";
import { TableProps } from "./types";

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
                    {        
                        props.content.map((customer) => (
                            <BodyLine>
                                <BodyItem> {customer.name} </BodyItem>
                                <BodyItem> {customer.ra} </BodyItem>
                                <BodyItem> {customer.tag} </BodyItem>
                                <BodyItem> {customer.grupo} </BodyItem>
                                <BodyItem> <Icon color="NEUTRAL_900" size="16" name="IoPencil" /> </BodyItem>
                                <BodyItem> <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" /> </BodyItem>
                            </BodyLine>
                        ))       
                    }
            </Body>
        </Container>
    )
}