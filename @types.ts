export type Response<T> = {
    total_count: number
    incomplete_resutls: boolean
    items: T[]
}

export type User = {
    id: number
    login: string
    avatar_url: string
    gravatar_id: string
    url: string
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: string
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
    type: string
    html_url: string
}

export type Repo = {
    name: string
    html_url: string
    forks: number
    open_issues: number
    watchers: number
    created_at: string
    description: string
    stargazers_count: number
    watchers_count: number
}