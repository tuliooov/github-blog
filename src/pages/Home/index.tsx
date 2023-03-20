import { useEffect, useState } from 'react'
import { Issues } from '../../components/Issues'
import { Profile } from '../../components/Profile'
import { Root } from './styles'

export type IProfile = {
  avatar_url: string
  bio: string
  blog: string
  company: string
  created_at: string
  email: null
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string
  hireable: true
  html_url: string
  id: number
  location: string
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: false
  starred_url: string
  subscriptions_url: string
  twitter_username: null
  type: string
  updated_at: string
  url: string
}

export const HomePage = () => {
  const [profile, setProfile] = useState<IProfile>()

  const fetchGithubProfile = async () => {
    const response = await fetch('https://api.github.com/users/tuliooov').then(
      (response) => response.json(),
    )
    setProfile(response)
  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  if (!profile) {
    return <></>
  }

  return (
    <Root>
      <Profile profile={profile} />
      <Issues />
    </Root>
  )
}
