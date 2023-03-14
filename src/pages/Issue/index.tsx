import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IIssue } from '../../components/Issues/type'

export const IssuePage = () => {
  const { id } = useParams()

  const [issue, setIssue] = useState<IIssue>()

  const fetchGithubProfile = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/repos/tuliooov/ignite-2022-project-3-github-blog/issues/${id}`,
    ).then((response) => response.json())
    setIssue(response)
  }, [id])

  useEffect(() => {
    fetchGithubProfile()
  }, [fetchGithubProfile])

  if (!issue) {
    return <p>loading...</p>
  }

  return <div>{JSON.stringify(issue)}</div>
}
