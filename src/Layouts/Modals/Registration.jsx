import { ErrorMessage, Field, Formik } from "formik"
import { Component } from "react"
import { object, ref, string } from "yup"
import { FaFacebook } from "react-icons/fa"
import { TbBrandGoogleFilled } from "react-icons/tb"
import { RxCross1 } from "react-icons/rx"

const schemaYup = object({
    name: string()
        .min(3, "Min value must have 3 symbol")
        .max(15, "Max value must have 15 symbol")
        .required(),
    email: string().email().required(),
    password: string()
        .min(6, "Min value must have 6 symbol")
        .max(20, "Max value must have 20 symbol")
        .required(),
    checkPassword: string()
        .min(6, "Min value must have 6 symbol")
        .max(20, "Max value must have 20 symbol")
        .oneOf([ref("password")], "Паролі не співпадають")
        .required(),
})

class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { signin } = this.props

        return (
            <div className="font-roboto scrollbar-hidden bg-black-opacity fixed top-0 left-0 flex h-[100%] w-[100%] items-center justify-center overflow-y-scroll md:px-33 md:pt-120 md:pb-22 xl:px-80 dark:bg-blue-800">
                <Formik validationSchema={schemaYup}>
                    <form className="scrollbar-hidden h-[100%] w-[100%] overflow-y-scroll bg-blue-200 px-7.5 py-15 text-base text-white md:relative md:mx-auto md:h-[870px] md:max-w-180 md:overflow-hidden md:rounded-[25px] md:px-24 md:py-20 xl:max-w-none xl:px-50">
                        <div className="mx-auto max-w-90 md:max-w-none">
                            <RxCross1
                                className="mb-4 ml-auto h-6 w-6 md:absolute md:top-10.5 md:right-16 md:h-7 md:w-[40px] xl:h-[40px] xl:min-h-[40px]"
                                color="#000"
                            />
                            <h2 className="mb-9 text-center text-[38px] font-bold xl:mb-7">
                                Sign Up
                            </h2>
                            <ul className="mb-6 flex flex-col gap-4.5">
                                <li className={getBtnLiStyled()}>
                                    <button
                                        className={getBtnStyle()}
                                        type="button"
                                    >
                                        <FaFacebook
                                            className="h-7.5 w-7.5 xl:h-10 xl:w-10"
                                            color="#fff"
                                        />
                                        Continue with Facebook
                                    </button>
                                </li>
                                <li className={getBtnLiStyled()}>
                                    <button
                                        className={getBtnStyle()}
                                        type="button"
                                    >
                                        <TbBrandGoogleFilled
                                            className="h-7.5 w-7.5 xl:h-10 xl:w-10"
                                            color="#fff"
                                        />
                                        Continue with Google
                                    </button>
                                </li>
                            </ul>
                            <p className="mb-6 text-center text-[16px] md:text-[22px] xl:mb-7 xl:text-[24px]">
                                or
                            </p>
                            <ul className="mb-9 flex flex-col gap-4">
                                {!signin && (
                                    <li>
                                        <Field
                                            className={getInputStyled()}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="name"
                                        />
                                    </li>
                                )}
                                <li>
                                    <Field
                                        className={getInputStyled()}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                    />
                                </li>
                                <li>
                                    <Field
                                        className={getInputStyled()}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                    />
                                </li>
                                {!signin && (
                                    <li>
                                        <Field
                                            className={getInputStyled()}
                                            type="password"
                                            name="checkPassword"
                                            placeholder="Check password"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="checkPassword"
                                        />
                                    </li>
                                )}
                            </ul>
                            <button
                                className="mx-auto block rounded-[18px] bg-blue-300 px-16 py-2.5 font-bold md:px-18 md:py-3.5 md:text-[22px] xl:px-20 xl:py-4.5"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </Formik>
            </div>
        )
    }
}

function getBtnLiStyled() {
    return `border-bon-jour rounded-[18px] border-2 border-solid px-[20px] py-[8px] mx-auto md:py-4 
    md:px-6.5  xl:px-7 xl:py-4`
}

function getBtnStyle() {
    return `flex items-center gap-3.5 md:text-xl w-54 md:w-67 xl:gap-7 xl:w-95`
}

function getInputStyled() {
    return `md:text-xl w-[100%] rounded-[18px] border-2 px-4 py-[9px] outline-none placeholder:text-white md:px-4.5 md:py-3.5 xl:py-[18px] xl:px-[30px]`
}

export default Registration
