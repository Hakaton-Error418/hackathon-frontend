import { Outlet } from "react-router"
import RootModals from "./Modals/RootModals"
import Header from "./Header"
import { Component } from "react"

export class Layout extends Component {
    state = {
        isSignin: false,
    }

    changeIsSignin = () => {
        this.setState((prev) => ({
            isSignin: !prev.isSignin,
        }))
    }

    render() {
        const { isSignin } = this.state

        return (
            <>
                <Header changeIsSignin={this.changeIsSignin} />
                <Outlet />
                <RootModals
                    isSignin={isSignin}
                    changeIsSignin={this.changeIsSignin}
                />
            </>
        )
    }
}
