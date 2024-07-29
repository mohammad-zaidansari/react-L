import './Product.css'
import Price from './Price'
import Button from './Button';
import HoverButton from './Hover';

function Product({ title, idx}){

    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,100", "899", "278"];
    let description = ["8,000 DPI", "intuitive surface", "designed for iPad Pro", "wireless"]

    return(
        <div className="Product" >
        <h3>{title}</h3>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        <Button/>
        <HoverButton/>
        </div>
    )
}

export default Product;