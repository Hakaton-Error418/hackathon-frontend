import { gql } from "@apollo/client"
import { Component } from "react"
import { Link } from "react-router"
import { client } from "../../constans/client"
import { getId } from "../../constans/id"

const GET_HISTORY = gql`
    query GetQuests {
        getQuests {
            name
            description
        }
    }
`
let data

try {
    const info = await client.mutate({
        mutation: GET_HISTORY,
    })
    data = info.data.getQuests
} catch (error) {
    console.log(error)
}

class Quests extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <Link
                        to="/profile/quests/new"
                        className="bg-grey-light mx-auto flex w-60 justify-center rounded-[10px] px-5 py-3 text-xl"
                    >
                        Cтворити квест
                    </Link>
                    <ul className="flex flex-col gap-5">
                        {data &&
                            data.map((info) => {
                                return (
                                    <li key={info.description}>
                                        <h2>name: {info.name}</h2>
                                        <p>description: {info.description}</p>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </>
        )
    }
}

export default Quests
