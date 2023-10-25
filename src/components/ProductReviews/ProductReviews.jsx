import { useState } from "react";
import { Container } from "react-bootstrap";
import "./product-review.css";

const ProductReviews = ({ selectedProduct }) => {
  const [listSelected, setListSelected] = useState("desc");
  return (
    <section className="product-reviews">
      <Container>
        <ul>
          <li
            style={{ color: listSelected === "desc" ? "black" : "#9c9b9b" }}
            onClick={() => setListSelected("desc")}
          >
            Description
          </li>
          <li
            style={{ color: listSelected === "rev" ? "black" : "#9c9b9b" }}
            onClick={() => setListSelected("rev")}
          >
            Reviews ({selectedProduct?.reviews.length})
          </li>
        </ul>
        {listSelected === "desc" ? (
          <p>{selectedProduct?.description}</p>
        ) : (
          <div className="rates">
            {selectedProduct?.reviews.map((rate) => (
              <div className="rate-comment" key={rate.rating}>
                <span>Jhon Doe</span>
                <span>{rate.rating} (rating)</span>
                <p>{rate.text}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductReviews;
