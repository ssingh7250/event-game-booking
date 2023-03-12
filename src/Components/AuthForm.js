import { useState, useRef,useContext } from 'react';
import authcontex from '../store/auth-context';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {

    const history=useHistory();
  const emailinputRef = useRef();
  const passwordinputRef = useRef();
  const cntex=useContext(authcontex);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {

    event.preventDefault();

    const enteredEamil = emailinputRef.current.value;
    const enterpassword = passwordinputRef.current.value;

    setisLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSE_cPFTb3v2sCB3EcaP51i0sdK27pj9U';
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSE_cPFTb3v2sCB3EcaP51i0sdK27pj9U';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEamil,
        password: enterpassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setisLoading(false);
      if (res.ok) {
        return res.json();
      }
      else {

        return res.json().then((data) => {

          let errormessage = 'authencation failed';
          if (data && data.error && data.error.message) {
            errormessage = data.error.message;
          }

          //alert(errormessage);
          throw new Error(errormessage);
        })
      }
    }).then((data)=>{
      //console.log(data);
      cntex.login(data.idToken)
      history.replace('/');
    })

    .catch((err)=>alert(err.message))



  }





  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordinputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>request is loading....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
