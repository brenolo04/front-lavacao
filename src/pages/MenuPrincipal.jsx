export default function MenuPrincipal({isAdm}) {
    return (
        <>
            <h1>Menu Principal</h1>
            <p>{isAdm ? "é" : "não é"}</p>
        </>       
    )
}