import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Issue } from '../../components/Issue'
import { IIssue } from '../../components/Issues/type'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Post } from './styles'

export const IssuePage = () => {
  const { number } = useParams()

  const [issue, setIssue] = useState<IIssue>()

  const fetchGithubProfile = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/repos/tuliooov/ignite-2022-project-3-github-blog/issues/${number}`,
    ).then((response) => response.json())
    setIssue(response)
  }, [number])

  useEffect(() => {
    fetchGithubProfile()
  }, [fetchGithubProfile])

  if (!issue) {
    return <></>
  }

  return (
    <div>
      <Issue issue={issue} />
      <Post>
        <ReactMarkdown
          children={issue.body}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </Post>
    </div>
  )
}
