import './Product.css'

function Product({title, price , description = "this is a Good product"}){
    return(
        <div className="Product">
        <h3>{title}</h3>
        <h5>Price: {price}</h5>
        <p>description: {description}</p>
        </div>
    )
}

export default Product;