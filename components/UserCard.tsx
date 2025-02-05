import Image from "next/image";
import { User } from "@/@types";
import Link from "next/link";


export default function UserCard({ user }: { user: User }) {
    return (
        <div className="card shadow-md compact bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <Image src={user.avatar_url} alt="avatar" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{user.login}</h2>
                    <Link href={`/users/${user.login}`} className="text-base-content text-opacity-40">Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}