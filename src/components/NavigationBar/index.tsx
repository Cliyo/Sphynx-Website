import { Icon } from "components/Icon"
import { Container, LogoContainer, LogoImg, LogoText, MenuOption, MenuOptionText } from "./styles"

import Logo from "assets/logo.png"
import { routes } from "constants/routes"

export const NavigationBar = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoImg src={Logo} />
                <LogoText> Sphynx </LogoText>
            </LogoContainer>

            {
                routes.map((route) => (
                    <MenuOption to={route.path} key={route.name}>
                        <Icon color={'NEUTRAL_0'} size="20" name={route.iconName} />
                        <MenuOptionText> {route.name} </MenuOptionText>
                    </MenuOption>
                ))
            }
        </Container>
    )
}