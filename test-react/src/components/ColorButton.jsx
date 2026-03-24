

export function ColorButton({ reng, xeberVer}) {
    return(
        <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => xeberVer(reng)}
        >
            {reng} duymesi
        </button>
    )
}