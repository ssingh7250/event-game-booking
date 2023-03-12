import React,{useContext} from 'react'
import classes from './Modal.module.css';
import ContextApi from './Context_Api';


const Modal = (props) => {

    const cntext=useContext(ContextApi);
    const deleteitem=(data)=>{
        cntext.removeItems(data);
        props.num(cntext.items.length);

    }

    var TotalAmount=0;
    cntext.items.map((data)=>TotalAmount+=data.price);

  return (
    <div className={classes.main}>
        <button className={classes.btn_close} onClick={props.close}> X</button>
        <div className={classes.title}>Cart</div>

        <div className={classes.list}>
            <h2>ITEM</h2>
            <h2>PRICE</h2>
            <h2>QUNANTITY</h2>

        </div>
        {
            cntext.items.map((data)=>(
            <div className={classes.list}>
                <div className={classes.list2}>
            <h2><img src={data.imageUrl} alt="img" style={{width:"50px", height:"50px"}}/></h2>
            <h2>{data.price}</h2>
            <h2>{data.quantity}</h2>
            </div>
            <button className={classes.remove} onClick={()=>deleteitem(data)}>Remove</button>
            
             </div>
        ))};
    
        <div className={classes.total}>Total {TotalAmount}</div>

        <button className={classes.btn_buy}>PURCHASE</button>

    </div>
  )
}

export default Modal
