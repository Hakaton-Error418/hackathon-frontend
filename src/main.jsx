import { createRoot } from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router"
import "./styles/index.css"

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
)
