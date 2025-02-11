import { Outlet } from "react-router"
import { Header } from "./Header"
import RootModals from "./Modals/RootModals"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <RootModals />
        </>
    )
}
