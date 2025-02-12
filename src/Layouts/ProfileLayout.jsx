import { useQuery, gql } from "@apollo/client"
import { Outlet } from "react-router"
import SettingsButton from "../components/profile-components/ProfileSettings"

const GET_USER = gql`
    query {
        getUsers {
            userName
            avatar
        }
    }
`

export const ProfileLayout = () => {
    const { loading, error, data } = useQuery(GET_USER)
    console.log(useQuery(GET_USER))
    return (
        <div className="container">
            <div className="md:flex md:items-center md:justify-center md:gap-15 xl:gap-22.25">
                <div className="flex h-28 items-center justify-center md:block md:h-auto">
                    <img
                        src={data?.getUsers[0]?.avatar || "default.jpg"}
                        alt="avatar"
                        className="h-28 w-28 rounded-full object-cover md:h-45 md:w-45 xl:h-80 xl:w-80"
                    />
                </div>
                <div>
                    <h1 className="mt-7 text-center text-2xl md:mt-0 md:text-4xl xl:text-5xl">
                        {data?.getUsers[1]?.userName || "Unknown User"}
                    </h1>
                    <SettingsButton />
                </div>
            </div>
            <Outlet />
        </div>
    )
}
