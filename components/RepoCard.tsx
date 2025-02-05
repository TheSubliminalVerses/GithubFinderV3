import { Repo } from "@/@types";
import { FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";

export default function RepoCard({ data }: { data: Repo }) {
    return (
        <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">{data.name}</h3>
                <p className="mb-3">{data.description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaEye className="mr-2" /> {data.watchers_count}
                    </div>
                    <div className="mr-2 badge badge-success badge-lg">
                        <FaStar className="mr-2" /> {data.stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-error badge-lg">
                        <FaInfo className="mr-2" /> {data.open_issues}
                    </div>
                    <div className="mr-2 badge badge-warning badge-lg">
                        <FaUtensils className="mr-2" /> {data.forks}
                    </div>
                </div>
            </div>
        </div>
    )
}