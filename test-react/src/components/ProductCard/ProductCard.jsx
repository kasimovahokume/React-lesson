

export const ProductCard = ({name, price, onBuy})=>{
    return(
        <div>
        <h1>Meiset esyalari</h1>
        <p>Ad:{name}</p>
        <p>Qiymet:{price}</p>
        <button onClick={() => onBuy(price)}>Satin al</button>
        </div>
        )
}