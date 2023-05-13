import { Container, Row } from "react-bootstrap"
import Product from "./Product/Product"

const Section = ({ title, bgColor , productItems, addToCart }) => {
return (
    <section style={{ background:bgColor }}> 
        <Container>
            <div className='heading'>
                <h1>{title}</h1>
            </div>
            <Row className="justify-content-center">
                {productItems.map((productItem) => {
                return (
                    <Product key={productItem.id} title={title} productItem={productItem} addToCart={addToCart}/>
                )
                })}
            </Row>
        </Container>
    </section>
    )
}

export default Section
