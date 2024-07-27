import './Product.css'

function Product({title, price , description = "this is a Good product", features}){
    
    let isDescount = price > 3000;
    let style = {backgroundColor: isDescount ? "pink" : "green"};

    return(
        <div className="Product" style={style}>
        <h3>{title}</h3>
        <h5>Price: {price}</h5>
        { isDescount && <p>Descount is 5%</p>}
        {/* { price > 3000? <p>Descount is 5%</p>: null} */}
        </div>
    )
}

export default Product;