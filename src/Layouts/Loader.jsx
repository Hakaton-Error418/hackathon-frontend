import { Component } from "react"
import { BounceLoader } from "react-spinners"

class Loader extends Component {
    render() {
        return (
            <div className="bg-black-opacity fixed top-0 left-0 z-100 flex h-[100%] w-[100%] items-center justify-center">
                <BounceLoader color="#fff" />
            </div>
        )
    }
}

export default Loader
