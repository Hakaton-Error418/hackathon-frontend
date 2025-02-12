import { useQuery, gql } from "@apollo/client";
import { Outlet } from "react-router";
import SettingsButton from "../components/profile-components/ProfileSettings";

const GET_USER = gql`
query {
  getUsers {
    userName
    avatar
  }
}
`;

export const ProfileLayout = () => {
  const { loading, error, data  } = useQuery(GET_USER);
  console.log(useQuery(GET_USER))
  return (
    <div className="container">
      <div className=" md:flex md:justify-center md:items-center md:gap-15 xl:gap-22.25">
        <div className="flex justify-center items-center h-28 md:block md:h-auto ">
          <img
            src={data?.getUsers[0]?.avatar || "default.jpg"}
            alt="avatar"
            className="w-28 h-28 object-cover rounded-full md:w-45 md:h-45 xl:w-80 xl:h-80"
          />
        </div>
        <div>
          <h1 className="text-2xl mt-7 text-center md:text-4xl md:mt-0 xl:text-5xl">{data?.getUsers[1]?.userName || "Unknown User"}</h1>
          <SettingsButton />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
