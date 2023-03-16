import { IIssue } from '../Issues/type'
import { Root } from './styles'

interface IssueCardProps {
  item: IIssue
}
export function IssueCard({ item }: IssueCardProps) {
  const dateFormatted = new Date(item.updated_at).toLocaleDateString()

  return (
    <Root
      to={{
        pathname: `/issue/${item.number}`,
      }}
    >
      <div>
        <p>{item.title}</p>
        <span>{dateFormatted}</span>
      </div>
      <p>{item.body.slice(0, 100)}...</p>
    </Root>
  )
}
