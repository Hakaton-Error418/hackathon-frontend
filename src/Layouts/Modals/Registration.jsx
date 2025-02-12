import { ErrorMessage, Field, Form, Formik } from "formik"
import { Component } from "react"
import { object, ref, string } from "yup"
import { FaFacebook } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { gql } from "@apollo/client"
import { client } from "../../constans/client"
import { setToken } from "../../constans/token"
import Loader from "../Loader"
import GoogleAuth from "./GoogleAuth"

const schemaYup = object({
    userName: string()
        .min(3, "Символів повино бути прийнані 3")
        .max(15, "Символів повино бути не більше 15")
        .required("Поле name є обов'язковим"),
    email: string()
        .email("Неправельний емейл")
        .required("Поле email є обов'язковим"),
    password: string()
        .min(6, "Символів повино бути прийнані 6")
        .max(20, "Символів повино бути не більше 20")
        .required("Поле password є обов'язковим"),
    checkPassword: string()
        .min(6, "Символів повино бути прийнані 6")
        .max(20, "Символів повино бути не більше 20")
        .oneOf([ref("password")], "Паролі не співпадають")
        .required("Поле check password є обов'язковим"),
})

const signinSchemaYup = object({
    email: string()
        .email("Неправельний емейл")
        .required("Поле email є обов'язковим"),
    password: string()
        .min(6, "Символів повино бути прийнані 6")
        .max(20, "Символів повино бути не більше 20")
        .required("Поле password є обов'язковим"),
})

const REGISTER_USER = gql`
    mutation RegisterUser(
        $email: String!
        $password: String!
        $userName: String!
    ) {
        registerUser(email: $email, password: $password, userName: $userName) {
            token
        }
    }
`

const SIGNIN_USER = gql`
    mutation RegisterUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            user {
                token
            }
        }
    }
`

export class Registration extends Component {
    state = {
        loader: false,
    }

    handleSubmit = async (values) => {
        this.setState({ loader: true })
        const info = this.getData(values)
        let data
        const { signin, changeSignin, changeReg } = this.props
        try {
            if (signin) {
                data = await this.doSignin(info)
                setToken(data.loginUser.user.token)
                changeSignin()
            } else {
                data = await this.doRegistration(info)
                setToken(data.registerUser.token)
                changeReg()
            }
        } catch (error) {
            console.log(error)
        } finally {
            this.setState({ loader: false })
        }
    }

    async doRegistration(info) {
        const { data } = await client.mutate({
            mutation: REGISTER_USER,
            variables: info,
        })
        return data
    }

    async doSignin(info) {
        const { data } = await client.mutate({
            mutation: SIGNIN_USER,
            variables: info,
        })
        return data
    }

    // componentDidMount() {
    //     this.googleLogin = googleTokenClient({
    //       client_id: "YOUR_CLIENT_ID",
    //       callback: (response) => console.log(response),
    //     });
    //   }

    getData(values) {
        const data = { ...values }
        delete data.checkPassword
        return data
    }

    render() {
        const { signin, changeSignin, changeReg } = this.props

        const { loader } = this.state
        return (
            <div className="font-roboto scrollbar-hidden bg-black-opacity fixed top-0 left-0 z-100 flex h-[100%] w-[100%] items-center justify-center overflow-y-scroll md:px-33 md:pt-120 md:pb-22 xl:px-80">
                {loader && <Loader />}
                <Formik
                    validationSchema={signin ? signinSchemaYup : schemaYup}
                    initialValues={{
                        userName: "",
                        email: "",
                        password: "",
                        checkPassword: "",
                    }}
                    onSubmit={this.handleSubmit}
                >
                    <Form className="scrollbar-hidden h-[100%] w-[100%] overflow-y-scroll bg-blue-200 px-7.5 py-15 text-base text-white md:relative md:mx-auto md:h-[870px] md:max-w-180 md:overflow-hidden md:rounded-[25px] md:px-24 md:py-20 xl:max-w-250 xl:px-50 dark:bg-blue-600">
                        <div className="mx-auto flex max-w-90 flex-col items-center md:max-w-none">
                            <RxCross1
                                onClick={signin ? changeSignin : changeReg}
                                className="mb-4 ml-auto h-6 w-6 fill-black md:absolute md:top-10.5 md:right-16 md:h-7 md:w-[40px] xl:h-[40px] xl:min-h-[40px] dark:fill-white"
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
                                <GoogleAuth handleSubmit={this.handleSubmit} />
                            </ul>
                            <p className="mb-6 text-center text-[16px] md:text-[22px] xl:mb-7 xl:text-[24px]">
                                or
                            </p>
                            <ul className="mb-9 flex w-[100%] flex-col gap-4">
                                {!signin && (
                                    <li className="relative">
                                        <Field
                                            className={getInputStyled()}
                                            type="text"
                                            name="userName"
                                            placeholder="Name"
                                            required
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="userName"
                                            className={getErrorStyled()}
                                        />
                                    </li>
                                )}
                                <li className="relative">
                                    <Field
                                        className={getInputStyled()}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        required
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className={getErrorStyled()}
                                    />
                                </li>
                                <li className="relative">
                                    <Field
                                        className={getInputStyled()}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className={getErrorStyled()}
                                    />
                                </li>
                                {!signin && (
                                    <li className="relative">
                                        <Field
                                            className={getInputStyled()}
                                            type="password"
                                            name="checkPassword"
                                            placeholder="Check password"
                                            required
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="checkPassword"
                                            className={getErrorStyled()}
                                        />
                                    </li>
                                )}
                            </ul>
                            <button
                                className="mb-6 block rounded-[18px] bg-blue-300 px-16 py-2.5 font-bold transition-colors hover:bg-blue-400 md:mb-4 md:px-18 md:py-3.5 md:text-[22px] xl:px-20 xl:py-4.5 dark:hover:bg-blue-200"
                                type="submit"
                            >
                                Sign Up
                            </button>
                            {signin && (
                                <button
                                    onClick={() => {
                                        changeReg()
                                        changeSignin()
                                    }}
                                    type="button"
                                    className="text-xl hover:border-b-2 hover:border-solid hover:border-white md:text-2xl xl:text-[26px]"
                                >
                                    Create an account
                                </button>
                            )}
                        </div>
                    </Form>
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
    return `flex items-center gap-3.5 md:text-xl w-54 md:w-64 md:gap-3 xl:gap-7 xl:w-85`
}

function getInputStyled() {
    return `autofill:!text-white md:text-xl w-[100%] rounded-[18px] border-2 px-4 py-[9px] outline-none placeholder:text-white md:px-4.5 md:py-3.5 xl:py-[18px] xl:px-[30px]`
}

function getErrorStyled() {
    return `absolute bottom-0 left-4 text-rose-900 dark:text-red-500 text-sm md:text-base md:left-5 xl:left-8`
}

export default Registration
