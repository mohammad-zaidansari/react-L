import Product from "./Product";

function ProductTab(){
    // let Options = [<ol><li>hi-tech</li><li>durable </li><li>fast</li></ol>]
    let Options2 = ["hi-tech", "durable", "fast"];
    return(
        <>
        <Product title="Phone" price="300" description="This is Phone" features={Options2}/>
        <Product title="Laptop" price="40000"/>
        <Product title="Smart Watch" price={400 + 100} description="This is SmartWatch"/>
        </>
    )
}

export default ProductTab;