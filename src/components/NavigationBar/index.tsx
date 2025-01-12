import { Icon } from 'components/Icon'
import {
  Container,
  LogoContainer,
  LogoImg,
  LogoText,
  MenuLeaveOption,
  MenuOption,
  MenuOptionText,
} from './styles'

import Logo from 'assets/logo.png'
import { routes } from 'constants/routes'
import { useAlert } from 'hooks/useAlert'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const NavigationBar = () => {
  const { alert } = useAlert()
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const onConfirmLogout = () => {
    signOut()
    navigate('/auth/login')
  }

  const handleLogout = () => {
    alert({
      title: 'Sair',
      message: 'Deseja realmente sair?',
      onConfirm: onConfirmLogout,
    })
  }

  return (
    <Container>
      <LogoContainer>
        <LogoImg src={Logo} />
        <LogoText> Sphynx </LogoText>
      </LogoContainer>

      {routes.map((route) => (
        <MenuOption to={route.path} key={route.name}>
          <Icon color={'NEUTRAL_0'} size="20" name={route.iconName} />
          <MenuOptionText> {route.name} </MenuOptionText>
        </MenuOption>
      ))}

      <MenuLeaveOption onClick={handleLogout}>
        <Icon color={'NEUTRAL_0'} size="20" name={'IoExit'} />
        <MenuOptionText> Sair </MenuOptionText>
      </MenuLeaveOption>
    </Container>
  )
}
