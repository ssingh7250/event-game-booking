import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
const ShowCartBigger = (props) => {
    console.log("is this bigger image");
  return (
    <div>
        <Row style={{paddingTop : "10%"}} className='productpage-main container'>
        <Col style={{"margin" :"0 auto"}}><img src={props.itemdata[0].imageUrl} alt="ProductPage" width="90%" height="90%" /><button  style={{width : "90%" , backgroundColor:"blue" , color:"white"}}>Buy Now</button></Col>
        <Col className='pt-5 ps-5'> 
            <h3>Title : ${props.itemdata[0].title}</h3> 
            <p style={{color : "green" , fontWeight:"bold"}}>Special Price</p>
            <h2>Price : Rs ${props.itemdata[0].price}/-</h2> 
            <div>15,433 Ratings and 1,692 Reviews</div> 
            <div>Available offers</div>
            <div>Buy With HDFC Bank credit card and get 10% discount</div>
            <div>Buy With Indiusind Bank credit card and get 5% discount</div> 
        </Col>
    </Row>
   
      
    </div>
  )
}

export default ShowCartBigger
