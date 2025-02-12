import { Component } from "react"

class BottomPanel extends Component {
    render() {
        const { number } = this.props
        const arr = []
        for (let i = 1; i <= number; i++) {
            arr[i - 1] = i
        }

        return (
            <div className="flex min-h-14 justify-between bg-blue-200 px-[9px] py-[11px]">
                <ul className="mr-2 flex gap-2 overflow-x-scroll">
                    {arr.map((item) => {
                        return (
                            <li
                                key={item}
                                className="flex min-w-[50px] items-center justify-center rounded-[10px] bg-white px-[3px] py-[4px]"
                            >
                                <h4 className="text-center">№{item}</h4>
                            </li>
                        )
                    })}
                </ul>
                <button
                    type="submit"
                    className="h-[34px] w-[34px] rounded-[10px] bg-white"
                >
                    +
                </button>
            </div>
        )
    }
}

export default BottomPanel