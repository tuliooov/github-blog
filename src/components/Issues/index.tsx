import { useEffect, useState } from 'react'
import { Filter } from '../Filter'
import { IssueCard } from '../IssueCard'
import { ContentIssue, Root } from './styles'
import { ResponseIssue } from './type'

export function Issues() {
  const [issues, setIssues] = useState<ResponseIssue>()

  const fetchGithubIssues = async () => {
    const response = await fetch(
      'https://api.github.com/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test',
    ).then((response) => response.json())
    setIssues(response)
  }

  useEffect(() => {
    fetchGithubIssues()
  }, [])

  if (!issues) {
    return <p>loading...</p>
  }

  return (
    <Root>
      <Filter />
      <ContentIssue>
        {issues.items.map((item) => (
          <IssueCard key={item.id} item={item} />
        ))}
      </ContentIssue>
    </Root>
  )
}
