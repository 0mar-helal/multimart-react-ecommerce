import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./product.css"
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

const Product = ({title,productItem,addToCart}) => {
    const {setSelectedProduct} =useContext(DataContainer);
    const router =useNavigate();
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const handelClick =()=> {
        setSelectedProduct(productItem);
        localStorage.setItem(`selectedProduct-${productItem.id}`,JSON.stringify(productItem));
        router(`/shop/${productItem.id}`);
    }
    const handelAdd =(productItem)=> {
        addToCart(productItem);
        toast.success("Product has been added to cart!");
    }
    return (
    <Col md={3} sm={5} xs={10} className="product mtop">
        {title ==="Big Discount"? <span className="discount">{productItem.discount}% Off</span>:null}
        <img loading="lazy" onClick={()=>handelClick()} src={productItem.imgUrl} alt=""/>
        <div className="product-like">
            <label>{count}</label> <br />
            <ion-icon name="heart-outline" onClick={increment}></ion-icon>
        </div>
        <div className="product-details">
            <h3 onClick={()=>handelClick()}>
                {productItem.productName}
            </h3>
            <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            </div>
        <div className="price">
            <h4>${productItem.price}</h4>
            <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(productItem)}>
                <ion-icon name="add"></ion-icon>
            </button>
        </div>
    </div>
    </Col>
    );
};

export default Product;
