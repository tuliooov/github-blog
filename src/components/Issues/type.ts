export type IIssue = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: false
  }
  labels: []
  state: string
  locked: false
  assignee: null
  assignees: []
  milestone: null
  comments: number
  created_at: string
  updated_at: string
  closed_at: null
  author_association: string
  active_lock_reason: null
  body: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\nlet foo = 42;    // foo is now a number\r\nfoo     = 'bar'; // foo is now a string\r\nfoo     = true;  // foo is now a boolean"
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
  score: number
}

export type ResponseIssue = {
  total_count: 1
  incomplete_results: false
  items: IIssue[]
}
