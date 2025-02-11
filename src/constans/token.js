export function getToken() {
    localStorage.getItem("token", token)
}

export function setToken(token) {
    localStorage.setItem("token", token)
}