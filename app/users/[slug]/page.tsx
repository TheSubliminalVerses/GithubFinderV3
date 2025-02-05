import { Repo, User } from "@/@types"
import RepoCard from "@/components/RepoCard"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"

export default async function Slug({ params }: { params: Promise<{ slug: string }> }) {
    const user_response = await fetch(`https://api.github.com/users/${(await params).slug}`)
    const user: User = await user_response.json()

    const repo_response = await fetch(`https://api.github.com/users/${(await params).slug}/repos`)
    const repos: Repo[] = await repo_response.json()

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link href={"/"} className="btn btn-circle">
                        <FaArrowLeft />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="mb-6 md:mb-0">
                    <div className="shadow-xl card image-full">
                        <figure>
                            <Image src={user.avatar_url} alt="profile image" width={500} height={500} />
                        </figure>
                        <div className="card-body justify-end relative top-[350px]">
                            <h2 className="card-title mb-0">{user.name}</h2>
                            <p>{user.login}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">
                            {user.name}
                            <div className="ml-2 mr-1 badge badge-success">{user.type}</div>
                            {user.hireable && (
                                <div className="mx-1 badge badge-info">Hireable</div>
                            )}
                        </h1>
                        <p>{user.bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-ghost">Visit Github Profile</a>
                        </div>
                    </div>

                    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                        {user.location && (
                            <div className="stat">
                                <div className="stat-title">Location</div>
                                <div className="text-lg stat-value">{user.location}</div>
                            </div>
                        )}
                        {user.twitter_username && (
                            <div className="stat">
                                <div className="stat-title">Twitter/X</div>
                                <div className="text-lg stat-value">{user.twitter_username}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Followers</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.followers}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Following</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.following}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCodepen className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Repos</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.public_repos}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Gists</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.public_gists}</div>
                </div>
            </div>

            <div className="rounded-lg shadow-lg card bg-base-100">
                <div className="card-body">
                    <h2 className="text-3xl my-4 font-bold card-title">Repositories</h2>
                    {repos.map((repo, idx) => (
                        <RepoCard data={repo} key={idx} />
                    ))}
                </div>
            </div>
        </>
    )
}