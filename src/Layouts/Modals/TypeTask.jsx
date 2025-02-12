import { Component } from "react"

class TypeTask extends Component {
    chooseType = (type) => {
        this.props.changeIsTypeModal(type)
    }

    render() {
        return (
            <div className="fixed top-0 left-0 z-100 h-full w-full bg-white px-5 py-10">
                <h2 className="mb-10 text-center text-[26px]">
                    Обертання режим квести
                </h2>
                <ul className="flex flex-col gap-7.5">
                    <li
                        className="shadow-shadow rounded-[10px] px-9 py-3.5 shadow-lg"
                        onClick={this.chooseType.bind(null, "single")}
                    >
                        <button className="text-center text-[20px]">
                            Одна правильна відповідь
                        </button>
                    </li>
                    <li
                        className="shadow-shadow rounded-[10px] px-9 py-3.5 shadow-lg"
                        onClick={this.chooseType.bind(null, "multiple")}
                    >
                        <button className="text-center text-[20px]">
                            Декілька правильних відповідей
                        </button>
                    </li>
                    <li
                        className="shadow-shadow rounded-[10px] px-9 py-3.5 shadow-lg"
                        onClick={this.chooseType.bind(null, "open")}
                    >
                        <button className="text-center text-[20px]">
                            Відкрита відповідь
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TypeTask