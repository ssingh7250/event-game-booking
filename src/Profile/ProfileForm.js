import classes from './ProfileForm.module.css';
import {useRef,useContext} from 'react'
import authcontex from '../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
    const history=useHistory();
    const changepassword=useRef();
    const cntex=useContext(authcontex);

    const submitHandler=(event)=>{
      event.preventDefault();

      const changenewpassword=changepassword.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBSE_cPFTb3v2sCB3EcaP51i0sdK27pj9U',{
          method:"POST",
          body:JSON.stringify({
            isToken:cntex.token,
            password:changenewpassword,
            retrunSecureToken:false
          })
        })

        history.replace('/');

    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7"  ref={changepassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
