import React,{useState} from "react";

const authcontex= React.createContext({
    token:'',
    isloggedin:false,
    login:(token)=>{},
    logout:()=>{}

});

 export const AuthcontexProvider=(props)=>{

        const localstorgaevalue=localStorage.getItem('token');
    const[token,setToken]=useState(localstorgaevalue);

    const userisLoggedIn=!!token;

    const loggedInHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token)
    }
    const loggedOutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }


    const contextvalue={

        token:token,
        isloggedin:userisLoggedIn,
        login:loggedInHandler,
        logout:loggedOutHandler
    };



return <authcontex.Provider value={contextvalue}>
    {props.children}
</authcontex.Provider>


}
export default authcontex;
