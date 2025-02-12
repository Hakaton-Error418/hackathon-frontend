import { Component } from "react"
import Registration from "./registration"

class RootModals extends Component {
    state = {
        isReg: false,
        isSignin: false,
    }

    changeState(name) {
        this.setState((prev) => ({
            [name]: !prev[name],
        }))
        if (name === "isSignin") {
            this.props.changeIsSignin()
        }
    }

    render() {
        const { isReg } = this.state
        const { isSignin } = this.props

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
