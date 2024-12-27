import { Icon } from "components/Icon"
import { Container, BodyItem, BodyLine } from "./styles"
import { BodyProps } from "./types"

export const TableBody = (props: BodyProps) => {

    const { bodyLines } = props

    return (
        <Container>
            {
                bodyLines.map((line, index) => (
                    <BodyLine key={index}>
                        {
                            line.map((text, index) => (
                                <BodyItem key={index}> {text} </BodyItem>
                            ))
                        }
                        <BodyItem>
                            <Icon color="NEUTRAL_900" size="16" name="IoPencil" />
                            <Icon color="NEUTRAL_900" size="16" name="IoTrashOutline" />
                        </BodyItem>
                    </BodyLine>
                ))
            }
        </Container>
    )
}