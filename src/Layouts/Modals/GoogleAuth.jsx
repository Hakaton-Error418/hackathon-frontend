import { useGoogleLogin } from "@react-oauth/google"
import { TbBrandGoogleFilled } from "react-icons/tb"

function GoogleAuth({ handleSubmit }) {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfoResponse = await fetch(
                    "https://www.googleapis.com/oauth2/v2/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`,
                        },
                    }
                )
                const userInfo = await userInfoResponse.json()
                const { name, email, picture, id } = userInfo
                const data = {
                    userName: name,
                    email: email,
                    avatar: picture,
                    password: id,
                }
                console.log(data)
                handleSubmit(data)
            } catch (error) {
                console.error(error)
            }
        },
        onError: () => console.log("Login Failed"),
    })

    return (
        <li className={getBtnLiStyled()}>
            <button
                onClick={() => login()}
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
    )
}

function getBtnLiStyled() {
    return `border-bon-jour rounded-[18px] border-2 border-solid px-[20px] py-[8px] mx-auto md:py-4 
    md:px-6.5  xl:px-7 xl:py-4`
}

function getBtnStyle() {
    return `flex items-center gap-3.5 md:text-xl w-54 md:w-64 md:gap-3 xl:gap-7 xl:w-85`
}

export default GoogleAuth
