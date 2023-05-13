import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { serviceData } from "../../utils/products"

const Wrapper = () => {
  return (
      <section className='wrapper background'>
        <Container>
          <Row>
          {serviceData.map((val, index) => {
            return (
              <Col md={3} sm={5} xs={9} style={{backgroundColor:val.bg}} className='feature' key={index}>
                <div className='icon'>
                  {val.icon}
                </div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            )
          })}
          </Row>
        </Container>
      </section>
  )
}

export default Wrapper
