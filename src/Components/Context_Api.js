import React from 'react'

const Context_Api=React.createContext ({
  
 items:[],
 totalAmount:0,
 addItems:(items)=>{},
 removeItems:(id)=>{} 
  
});

export default Context_Api;
