import { Component } from "react"
import { NavLink } from "react-router"
export default class ProfileButton extends Component {
    render() {
        const { name, svg, src } = this.props
        return (
            <li className="shadow-shadow w-36 rounded-xl shadow-sm md:w-65 xl:w-110">
                <NavLink
                    to={src}
                    className="flex items-center justify-between gap-0.5 pt-2.5 pr-2 pb-2.5 pl-1.5 md:justify-normal md:gap-6 md:pt-5.5 md:pr-10 md:pb-6 md:pl-10 xl:gap-10 xl:pt-9 xl:pr-4 xl:pb-7 xl:pl-12"
                >
                    <svg className="h-12.5 w-12.5 xl:h-22.5 xl:w-22.5">
                        <use href={svg}></use>
                    </svg>
                    <p className="text-lg font-medium md:text-2xl xl:text-5xl">
                        {name}
                    </p>
                </NavLink>
            </li>
        )
    }
}
