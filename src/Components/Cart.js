import React ,{useContext, useState}from 'react'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import ContextApi from './Context_Api'
import ShowCartBigger from './ShowCartBigger'
const cartElements = [

    {
    
    title: 'puch challenge',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Bow & arrow',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'catch fish',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    },
    {
    
        title: 'ludo',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 1,
        
        },
        
        {
        
        title: 'javelin throw',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 1,
        
        },
        
        {
        
        title: 'boxing',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
    ]



const Cart = ( props) => {

        const context=useContext(ContextApi);
        const addtocart=(data)=>{
            alert("your item is added");
            context.items.push(data);
           

            props.num(context.items.length);
           
        }
        
        

      return (
<>
    <div className={classes.main}>
{
    cartElements.map((data)=>
        <>
    <div className={classes.cart}>
        <h1>{data.title}</h1>
      <Link to="/product">  <div  onClick={()=>{props.cartdata(data)}} className={classes.image}><img src={data.imageUrl} alt="imag" style={{width:"300px" ,height:"250px"}}/></div></Link>
        <h3>${data.price}</h3>
        <button className={classes.btn} onClick={()=>addtocart(data)} >Add To Cart</button>
      
    </div>
    </>
    )};
        
    </div>
    <button className={classes.cartbtn}onClick={props.open}> See the Cart</button>
</>
  )
}

export default Cart
