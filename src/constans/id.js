export function getId() {
    return localStorage.getItem("id")
}

export function setId(id) {
    return localStorage.setItem("id", id)
}