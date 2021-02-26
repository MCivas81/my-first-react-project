import "./Product.css";

function Product({image, title}) {
  return (
    <div className='Card'>
      <img className='Card-img' src={image} alt={title}/>
      <h2 className='Card-title'>{title}</h2>
    </div>
  )
}

export default Product;