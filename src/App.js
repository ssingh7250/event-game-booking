import React,{useState,useContext} from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import CardProvider from "./Components/CardProvider";
import {Redirect, Route} from 'react-router-dom';


import Loginpage from "./Components/AuthForm";
import Profile from './Profile/UserProfile'
import userCont from './store/auth-context'
import ShowCartBigger from "./Components/ShowCartBigger";
import Contact from "./Pages/Contactpage";
function App() {

  const [openmodal,setopenmodal]=useState(false);
  const[isLoading ,setisLoading]=useState(true);

  const usercntex=useContext(userCont);
  const isLoggedIn=usercntex.isloggedin;

    const handlemodal=()=>{
      setopenmodal(false);
    }
    const openhandlemodal=()=>{
      setopenmodal(true);
    }
    const loading=()=>{
      setisLoading(true);
       setTimeout(()=>setisLoading(false),1000);   
    }

    async function addmoviestodatabase(movies)
    {

      const data = await fetch('https://movies-app-ecb3d-default-rtdb.firebaseio.com/movies.json',{
        method:"POST",
        body:JSON.stringify(movies)
      })

      const res=data.json();
      console.log(res);

    }
    const[data,setdata]=useState([]);

    const addcartdata=(d)=>{
      setdata([d]);
      console.log(d);
    }
    const[newnum,setnewnum]=useState(0);
    const numhandler=(num)=>{
      setnewnum(num);
    }
    
 

  return (
    
      <>
     <CardProvider>
      <switch>
      { openmodal &&<Modal close={handlemodal} num={numhandler}/>}
      <Header open={openhandlemodal} loadingpage={loading} num={newnum} />

   

   {isLoggedIn  &&  <><Route path='/' exact>
      <Redirect to="/"/>
        <Cart/>
      </Route>
  
      
      <Route path="/store">
        
      <Cart open={openhandlemodal}  cartdata={addcartdata} num={numhandler}/>
      </Route></>}
     {!isLoggedIn && <Route path="/login">
      <Loginpage onAddMovie={addmoviestodatabase}/>
      </Route>}
     {isLoggedIn && <><Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/product">
        <ShowCartBigger itemdata={data}/>
      </Route></>}
      <Footer/>
     
      </switch>
      
      </CardProvider>
      </>
  
  );
}

export default App;
