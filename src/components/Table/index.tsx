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
                <BodyLine>
                    {
                        props.content.map((line) => (
                            <BodyItem> {line} </BodyItem>
                        ))
                    }
                </BodyLine>
            </Body>
        </Container>
    )
}