import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDebounce } from '../../utils'
import { Filter } from '../Filter'
import { IssueCard } from '../IssueCard'
import { ContentIssue, Root } from './styles'
import { ResponseIssue } from './type'

export function Issues() {
  const [search, setSearch] = useState<string>('')
  const [issues, setIssues] = useState<ResponseIssue>()

  const debouncedValue = useDebounce<string>(search, 500)

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const fetchGithubIssues = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/issues?q=${search}%20repo:tuliooov/ignite-2022-project-3-github-blog`,
      )
      if (response.status < 300) {
        setIssues(await response.json())
      } else {
        setIssues({ total_count: 0, incomplete_results: false, items: [] })
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchGithubIssues()
  }, [debouncedValue, fetchGithubIssues])

  if (!issues) {
    return <p>loading...</p>
  }

  return (
    <Root>
      <Filter
        handleChangeSearch={handleChangeSearch}
        totalCount={issues.total_count}
      />
      <ContentIssue>
        {issues.items.map((item) => (
          <IssueCard key={item.id} item={item} />
        ))}
      </ContentIssue>
    </Root>
  )
}
