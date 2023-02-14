import { ActionsDiv, HeaderContainer, NewTransactionButton } from './styles'

import logo from '../../assets/logo.svg'
import { Moon, Sun } from 'phosphor-react'

interface HeaderProps {
  handleChangeTheme: () => void
  theme: 'black' | 'white'
}

export function Header({ handleChangeTheme, theme }: HeaderProps) {
  return (
    <HeaderContainer>
      <ActionsDiv>
        <NewTransactionButton type="button" onClick={handleChangeTheme}>
          {theme === 'black' ? <Sun size={24} /> : <Moon size={24} />}
        </NewTransactionButton>
      </ActionsDiv>
    </HeaderContainer>
  )
}
