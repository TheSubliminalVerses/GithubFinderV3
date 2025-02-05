"use client"

import { User, Response } from "@/@types"
import Users from "@/components/Users"
import { useState } from "react"

export default function Home() {
    const [text, setText] = useState<string>("")
    const [users, setUsers] = useState<User[]>([])

    const fetchUsers = async (q: string) => {
        const response = await fetch(`https://api.github.com/search/users?q=${q}`)
        const data: Response<User> = await response.json()

        setUsers(data.items)
    }

    const clearUsers = () => {
        setUsers([])
    }

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
                <div>
                    <form>
                        <div className="form-control">
                            <div className="relative">
                                <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search..." value={text} onChange={e => setText(e.target.value)} />
                                <button type="button" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" onClick={() => fetchUsers(text)}>Go</button>
                                <button type="button" className="relative btn btn-outline top-4" onClick={() => clearUsers()}>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Users data={users} />
            </div>
        </>
    )
}