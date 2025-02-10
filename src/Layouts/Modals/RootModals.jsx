import Registration from "./registration"

export const RootModals = () => {
    return (
        <>
            <Registration signin={false} />
            {/* <Registration signin={true} /> */}
            <h1>Rootmodal</h1>
        </>
    )
}