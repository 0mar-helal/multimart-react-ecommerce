import { Fragment, useContext, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const [listSelected,setListSelected] =useState("desc");
    const [relatedProducts,setRelatedProducts] =useState([]);
    const {selectedProduct,setSelectedProduct,addToCart} =useContext(DataContainer);
    const {id} =useParams();
    if(!selectedProduct) {
        const storedProduct =localStorage.getItem(`selectedProduct-${id}`);
        setSelectedProduct(JSON.parse(storedProduct));
    }
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handelAdd =(selectedProduct,quantity)=> {
        addToCart(selectedProduct,quantity);
        toast.success("Product has been added to cart!");
    }
    useEffect(()=> {
        window.scrollTo(0,0);
        setRelatedProducts(products.filter(item => item.category === selectedProduct?.category && item.id !== selectedProduct?.id));
    },[selectedProduct])
    return ( 
        <Fragment>
            <Banner title={selectedProduct?.productName} />
            <section className="product-page">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <img loading="lazy" src={selectedProduct?.imgUrl} alt=""/>
                        </Col>
                        <Col md={6}>
                            <h2>{selectedProduct?.productName}</h2>
                            <div className="rate">
                                <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </div>
                                <span>{selectedProduct?.avgRating} ratings</span>
                            </div>
                            <div className="info">
                                <span className="price">${selectedProduct?.price}</span>
                                <span>category:{selectedProduct?.category}</span>
                            </div>
                            <p>{selectedProduct?.shortDesc}</p>
                            <input className="qty-input" type="number" placeholder="Qty" value={quantity} onChange={handleQuantityChange} />
                            <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(selectedProduct,quantity)}>Add To Cart</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="product-reviews">
                <Container>
                    <ul>
                        <li style={{color:listSelected ==="desc"?"black":"#9c9b9b"}} onClick={()=> setListSelected("desc")}>
                            Description
                        </li>
                        <li style={{color:listSelected ==="rev"?"black":"#9c9b9b"}} onClick={()=> setListSelected("rev")}>
                            Reviews ({selectedProduct?.reviews.length})
                        </li>
                    </ul>
                    {listSelected ==="desc"?
                        <p>{selectedProduct?.description}</p>:
                        <div className="rates">
                            {selectedProduct?.reviews.map(rate => (
                                <div className="rate-comment" key={rate.rating}>
                                    <span>Jhon Doe</span>
                                    <span>{rate.rating} (rating)</span>
                                    <p>{rate.text}</p>
                                </div>
                            ))}
                        </div>
                    }
                </Container>
            </section>
            <section className="related-products">
                <Container>
                    <h3>You might also like</h3>
                </Container>
                <ShopList productItems={relatedProducts} addToCart={addToCart}/>
            </section>
        </Fragment>
    );
}

export default ProductDetails;