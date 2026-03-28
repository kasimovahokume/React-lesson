export default function Product({title, price, category}) {
  return(
    <div>
      <h3>Mehsulun adi: {title}</h3>
      <h3>Qiymeti: {price}</h3>
      <h3>Kateqoriyasi: {category}</h3>
    </div>
  )
}