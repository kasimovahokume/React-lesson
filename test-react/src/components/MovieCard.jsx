

export const MovieCard = ({title, year, rating, OnFlim})=>{
    return(
        <div>
            <p>Title: {title}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            <button onClick={()=>OnFlim(title)}>Izle</button>
        </div>
    )
}
