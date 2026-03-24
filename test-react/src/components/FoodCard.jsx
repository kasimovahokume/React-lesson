export function FoodCard ({ name ,price ,isAvailable, onOrder }) {
  return (
    <div style={{
      backgroundColor:"black",
      color:"white",
      border:"2px solid",
      borderColor: isAvailable ? "green" : "red",
      margin:"10px",
      padding:"10px",
      borderRadius:"5px"
    }}>
      <h1>Name: {name}</h1>
      <p>Price: {price}</p>
      <p>Available: {isAvailable ? "beli" : "xeyr"}</p>
      <button onClick={()=>onOrder(name)}>
        Sifaris et
      </button>
    </div>
  );
}
