import React,{useContext,useEffect,useState,useRef} from 'react'
import classes from './Header.module.css'
import ContextApi from './Context_Api'
import {NavLink} from 'react-router-dom'
import userContext from '../store/auth-context'


const Header = ( props) => {

  const cartext=useContext(ContextApi);

  const usercntex=useContext(userContext);
  const isLoggedIn=usercntex.isloggedin;


    //var num=cartext.items.length;

   
    const logouthandler=()=>{
      usercntex.logout();
    }
    
  return (
    <>      
      <div className={classes.main}>
        <div className={classes.span}>
     
        {isLoggedIn && (<>
        <NavLink to="/store"><span>STORE</span></NavLink>
       </>)}
        {!isLoggedIn&& <NavLink to="/login"><span>LOGIN</span></NavLink>}
        {isLoggedIn &&<NavLink to='/profile'><span>UPDATE PASSWORD</span></NavLink>}
        {isLoggedIn &&<NavLink to='/contact'><span>CHECKOUT PAGE</span></NavLink>}     
          
          {isLoggedIn &&<button className={classes.button}  onClick={logouthandler} style={{backgroundColor:"red"}}>Logout</button>}
          
          

        </div>

        {isLoggedIn && <button className={classes.button} onClick={props.open}
         >Cart {props.num}</button>}

        

    </div>
        <div className={classes.title}>
            <p className={classes.para}>Event game booking</p>
        </div>
       {!isLoggedIn && <p className={classes.p}>welcome </p>}

    </>
  )
}

export default Header
