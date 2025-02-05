import { User } from "@/@types"
import UserCard from "./UserCard"

export default function Users({ data }: { data: User[] }) {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {data.map((user, idx) => (
                <UserCard key={idx} user={user} />
            ))}
        </div>
    )
}