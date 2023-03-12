import ContextApi from "./Context_Api";
import React, { useState} from 'react'

const CardProvider = (props) => {

      const[items,setitems]=useState([]);
        //const cntext=useContext(ContextApi);
        const addcarditemhandler=(item)=>{
            setitems([...items,item]);  
        }
        const removecarditemhandler=(id)=>{
            items.shift(id);
                 setitems([...items]);
        }


        const Contextapi={

                items:items,
                totalamount:0,
                addItems:addcarditemhandler,
                removeItems:removecarditemhandler

        }

  return (
   <>
    <ContextApi.Provider value={Contextapi}>

        {props.children}
    </ContextApi.Provider>
   
   
   </>
  )
}

export default CardProvider;
