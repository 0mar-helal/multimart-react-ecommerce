import "./customer-care.css";
import { Row, Col } from "react-bootstrap";

import { FaCcMastercard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";

import img1 from "../../Images/arm-chair-01.jpg";
import img2 from "../../Images/arm-chair-03.jpg";

const CustomerCare = () => {
  return (
    <div className="costumer-care-container">
      <div>
        <div className="costumer-title">
          <h1>Welcome to Mutimart Customer care</h1>
          <h4>What would you like help with today? Let one of our time member knows</h4>
        </div>

        <div>
          <Row>
            <Col md={4}>
              <div className="costumer-card delivery">
                <span className="costumer-icons">
                  <TbTruckDelivery />
                </span>

                <h4>Help with delivery</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="costumer-card payment">
                <span className="costumer-icons">
                  <FaCcMastercard />
                </span>

                <h4>Payment, chagers or gift cards</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="costumer-card email">
                <span className="costumer-icons">
                  <MdOutlineAlternateEmail />
                </span>

                <h4> Multimart.com</h4>
              </div>
            </Col>
          </Row>

          <div className="costumer-care-text">
            <h3>OVERVIEW</h3>
            <p>
              At Multimart, we are committed to providing excellent customer care and support. Our dedicated team is here to assist you with any questions, concerns, or issues you may have. Whether you need assistance with your order, have questions about our products, or require
              help navigating our website, we're here to help. You can reach out to our customer care team via email, phone, or live chat. We strive to provide prompt and helpful assistance to ensure your shopping experience with us is enjoyable and hassle-free. Thank you for
              choosing Multimart. We appreciate your business and look forward to serving you.
            </p>
          </div>
        </div>

          <div class="costumer-title-container">
            <div class="costumer-image-container">
              <div>
                <img src={img1} alt="chair" />
              </div>
              <div>
                <img src={img2} alt="chair" />
              </div>
            </div>
            <div class="title">
              <p>Multimart</p>
              <h5>EASIEST WAY TO SHOP</h5>
              <h6>ORIGINALS PRODUCT FOR YOU</h6>
              <small>Product from the season 2023 and 2022 are not avalible for return</small>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CustomerCare;
