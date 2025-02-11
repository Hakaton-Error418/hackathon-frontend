import { Component } from "react"
import Registration from "./registration"

class RootModals extends Component {
    state = {
        isReg: false,
        isSignin: true,
    }

    changeState(name) {
        this.setState((prev) => ({
            [name]: !prev[name],
        }))
    }

    render() {
        const { isReg, isSignin } = this.state

        return (
            <>
                {isSignin && (
                    <Registration
                        changeReg={this.changeState.bind(this, "isReg")}
                        changeSignin={this.changeState.bind(this, "isSignin")}
                        signin={true}
                    />
                )}
                {isReg && (
                    <Registration
                        signin={false}
                        changeReg={this.changeState.bind(this, "isReg")}
                    />
                )}
            </>
        )
    }
}

export default RootModals
