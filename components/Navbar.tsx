import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl" />
                    <Link href={"/"} className="text-lg font-bold align-middle">Github Finder</Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link href={"/"} className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                        <Link href={"/about"} className="btn btn-ghost btn-sm rounded-btn">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}