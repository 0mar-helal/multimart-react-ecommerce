import { Row } from "react-bootstrap";
import { useEffect } from "react";
import Product from "./Product/Product";

const ShopList = ({productItems,addToCart}) => {
    useEffect(()=> {
    },[productItems])
    if(productItems.length ===0) {
        return (
            <h1 className="not-found">Product Not Found !!</h1>
        );
    }
    else {
        return (
            <Row className="justify-content-center">
                {productItems.map((productItem) => {
                return (
                    <Product key={productItem.id} title={null} productItem={productItem} addToCart={addToCart}/>
                )
                })}
            </Row>
        );
    }
}
export default ShopList;