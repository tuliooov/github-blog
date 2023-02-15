import { Effects, HeaderContainer } from './styles'

import effectRight from '../../assets/effect-right.svg'
import effectLeft from '../../assets/effect-left.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Effects>
        <div>
          <img src={effectLeft} alt="effect header left" />
        </div>
        <img src={logo} alt="logo github blog" />
        <div>
          <img src={effectRight} alt="effect header right" />
        </div>
      </Effects>
    </HeaderContainer>
  )
}
