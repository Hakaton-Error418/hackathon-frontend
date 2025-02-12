import { useQuery, gql } from "@apollo/client";
import { Outlet } from "react-router";
import SettingsButton from "../components/profile-components/ProfileSettings";
import {ProfileRating} from "../components/profile-components/Rating-user";
import { gql } from "@apollo/client"
import { Outlet } from "react-router"
import SettingsButton from "../components/profile-components/ProfileSettings"
import { Component } from "react"
import { client } from "../constans/client"
import Loader from "./Loader"
import { Profile } from "../components/pages/Profile"

const GET_USER = gql`
    query {
        getUsers {
            userName
            avatar
        }
    }
`

export class ProfileLayout extends Component {
    state = {
        loading: true,
        data: null,
    }

    async componentDidMount() {
        try {
            const response = await client.query({
                query: GET_USER,
            })

            this.setState({
                data: response.data,
                loading: false,
            })
        } catch (error) {
            console.error(error)
            this.setState({ loading: false })
        }
    }

    render() {
        const { data, loading } = this.state

        if (loading) {
            return <Loader />
        }

        const user = data?.getUsers?.[0] || {
            userName: "Unknown User",
            avatar: "default.jpg",
        }

        return (
            <>
                <div className="container mt-4 md:mt-6 xl:mt-10">
                    <div className="md:flex md:items-center md:justify-center md:gap-15 xl:gap-22.25">
                        <div className="flex h-28 items-center justify-center md:block md:h-auto">
                            <img
                                src={user.avatar}
                                alt="avatar"
                                className="h-28 w-28 rounded-full object-cover md:h-45 md:w-45 xl:h-80 xl:w-80"
                            />
                        </div>
                        <div>
                            <h1 className="mt-7 text-center text-2xl md:mt-0 md:text-4xl xl:text-5xl">
                                {user.userName}
                            </h1>
                            <SettingsButton />
                        </div>
                    </div>
                    <Outlet />
                </div>
                <Profile />
            </>
        )
    }
}
`;

export const ProfileLayout = () => {
  const { loading, error, data  } = useQuery(GET_USER);
  console.log(useQuery(GET_USER))
  return (
    <div className="container mt-4 md:mt-5 xl:mt-8">
      <div className=" md:flex md:justify-center md:items-center md:gap-15 xl:gap-22.25">
        <div className="flex justify-center items-center h-28 md:block md:h-auto ">
          <img
            src={data?.getUsers[0]?.avatar || "default.jpg"}
            alt="avatar"
            className="w-28 h-28 object-cover rounded-full md:w-45 md:h-45 xl:w-80 xl:h-80"
          />
        </div>
        <div>
        <div className="flex justify-center items-center h-auto mt-2.5 md:mt-0 ">
          <ProfileRating />
        </div>
          <h1 className="text-2xl mt-7 text-center md:text-4xl md:mt-5 xl:text-5xl ">{data?.getUsers[1]?.userName || "Unknown User"}</h1>
          <SettingsButton />
          
        </div>
      </div>
      <Outlet />
    </div>
  );
};

