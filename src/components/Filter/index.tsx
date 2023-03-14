import { ChangeEvent } from 'react'
import { Input } from '../Input'
import { Root } from './styles'

interface FilterProps {
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  totalCount: number
}
export function Filter({ handleChangeSearch, totalCount }: FilterProps) {
  return (
    <Root>
      <div>
        <p>Publicações</p>
        <span>
          {totalCount} {totalCount === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <Input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChangeSearch}
      />
    </Root>
  )
}
