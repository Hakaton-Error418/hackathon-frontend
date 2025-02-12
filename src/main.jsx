import { createRoot } from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router"
import "./styles/index.css"
import { GoogleOAuthProvider } from "@react-oauth/google"

const CLIENT_ID =
    "1020140561138-eciks6mn38s7d2c90f54k4oorrpsa6id.apps.googleusercontent.com"

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/">
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
)
