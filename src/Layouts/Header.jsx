import { Component } from "react"
import GetUserSvgIcon from "../img/getUserSvgIcon"
import GetSunSvg from "../img/getSunSvg"
import GetMoonSvg from "../img/getMoonSvg"
import GetLogoSvg from "../img/getLogoSvg"

class Header extends Component {
    changeTheme() {
        const html = window.document.documentElement
        html.classList.toggle("dark")
    }

    render() {
        const { changeIsSignin } = this.props

        return (
            <header className="dark:bg-black-opacity bg-cool-grey mx-[3px] mt-[3px] rounded-[20px] text-white duration-500 md:mx-[7px] md:mt-[10px] xl:mx-[16px] xl:mt-[10px]">
                <div className="flex min-w-[314px] items-center justify-between px-1.5 py-3.5 md:min-w-[754px] md:pt-5 md:pr-6 md:pl-16 xl:min-w-[1408px] xl:py-5 xl:pr-8 xl:pl-52">
                    <a
                        href="#"
                        className="flex h-12.5 w-12.5 items-center justify-center md:h-20 md:w-20 xl:h-25 xl:w-25"
                    >
                        <GetLogoSvg />
                    </a>
                    <div className="flex">
                        <ul className="mr-[11px] flex items-center gap-1.5 md:mr-4 md:gap-4 xl:mr-7.5 xl:gap-11.5">
                            <li>
                                <button className={getBtnStyle()}>
                                    Join quest
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={changeIsSignin}
                                    className={getBtnStyle()}
                                >
                                    Sign In/up
                                </button>
                            </li>
                        </ul>
                        <div className="dark:text-color-grey mr-1 h-11 w-11 rounded-[50%] bg-blue-200 p-[3.5px] duration-500 md:mr-4 md:h-21 md:w-21 md:p-[7px] xl:mr-7.5 xl:h-25 xl:w-25 xl:p-[9.5px] dark:bg-blue-600">
                            <GetUserSvgIcon className="text-2xl" />
                        </div>
                        <label className="bg-grey relative flex w-7.5 flex-col justify-between rounded-[20px] px-1.25 py-0.75 transition-colors duration-500 md:h-21 md:w-[46px] md:rounded-[30px] md:p-2 xl:h-[100px] xl:w-[60px] xl:p-2.5 dark:bg-blue-600">
                            <div className="text-grey dark:bon-jour z-10 flex h-5 w-5 items-center justify-between rounded-[50%] p-0.5 duration-500 md:h-7.5 md:w-7.5 xl:h-[40px] xl:w-[40px] xl:p-1 dark:text-blue-600">
                                <GetSunSvg />
                            </div>
                            <div className="text-grey z-10 flex h-5 w-5 items-center justify-between rounded-[50%] p-0.5 transition-colors duration-500 md:h-7.5 md:w-7.5 xl:h-[40px] xl:w-[40px] xl:p-1 dark:text-blue-600">
                                <GetMoonSvg />
                            </div>
                            <input
                                className="is-hidden"
                                type="checkbox"
                                onChange={this.changeTheme}
                            />
                            <span className="dark:bg-bon-jour absolute top-0.75 left-1.25 z-5 h-5 w-5 translate-y-[20px] rounded-[20px] bg-blue-600 transition-transform duration-500 md:top-2 md:left-2 md:h-[30px] md:w-[30px] md:translate-y-[38px] xl:top-2.5 xl:left-2.5 xl:h-10 xl:w-10 xl:translate-y-[40px] dark:translate-0"></span>
                        </label>
                    </div>
                </div>
            </header>
        )
    }
}

function getBtnStyle() {
    return `
        md:rounded-[20px] xl:text-[34px] xl:p-5 md:hover:shadow-xl md:rounded-[30px] md:py-4 md:px-4.5 md:text-[30px] hover:shadow-grey-opacity hover:bg-grey-blue rounded-[20px] px-1.5 py-2.5 text-sm transition-all duration-500 hover:shadow-lg dark:hover:bg-blue-500
    `
}

export default Header
