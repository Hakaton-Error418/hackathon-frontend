import { useGoogleLogin } from "@react-oauth/google"
import { TbBrandGoogleFilled } from "react-icons/tb"
import { getBtnLiStyled, getBtnStyle } from "./registration"

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

export default GoogleAuth
