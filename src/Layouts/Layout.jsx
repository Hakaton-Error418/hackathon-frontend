import { Outlet } from "react-router"
import { Header } from "./Header"
import { RootModals } from "./Modals/rootModals"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <RootModals />
        </>
    )
}
