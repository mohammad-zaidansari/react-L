import Product from "./Product";

function ProductTab(){
    return(
        <>
        <Product title="Phone" price="30K" description="This is Phone"/>
        <Product title="Laptop" price="40000"/>
        <Product title="Smart Watch" price={400 + 100} description="This is SmartWatch"/>
        </>
    )
}

export default ProductTab;