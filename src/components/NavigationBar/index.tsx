import { Container, LogoContainer, LogoImg, LogoText, MenuOption } from "./styles"

import Logo from "assets/logo.png"

export const NavigationBar = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoImg src={Logo} />
                <LogoText> Sphynx </LogoText>
            </LogoContainer>

            <MenuOption>
            </MenuOption>
        </Container>
    )
}