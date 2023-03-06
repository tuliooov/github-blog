import { Input } from '../Input'
import { Root } from './styles'

export function Filter() {
  return (
    <Root>
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>
      <Input type="text" placeholder="Buscar conteúdo" />
    </Root>
  )
}
