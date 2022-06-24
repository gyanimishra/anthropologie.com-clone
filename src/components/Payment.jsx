import React,{ useState,useEffect } from "react";
import styles from "./Payment.module.css";
 

const Payment = (props) => {
  const [total, settTotal] = useState(0);
  
  const handleChange =()=>{
   
    let t = props.data.reduce(function(acc,ele){
        return acc + (ele.total);
    },0)
    settTotal(t)

    console.log("Inside payment",props.data);
}
useEffect(() => {
  handleChange();
},[props.data]);

  return (
    <div
    className={styles.mainDiv}
      style={{top:`${props.top}`}}
    >
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 className={styles.orderSummary}>Order Summary</h2>
       
      </div>
      <div className="border px-4 py-3">
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Shipping</p>
          <p>TBD</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Estimated Tax</p>
          <p>$0.00</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p style={{ color: "black" }}>Total</p>
          <p style={{ color: "black" }}>${total}</p>
        </div>
        <div>
          <button className={styles.button} onClick={()=>props.clickMe()} >{props.title } </button>
          <div className={`d-flex justify-content-center ${styles.payPal}`}>
            <img
              height="25px"
              src="https://www.anthropologie.com/static/v3/images/paypal-logo-ef75c426f33092b001a8a3d1a90d391f.svg"
              alt=""
            />
          </div>
        </div>

        <hr />

        
      
      </div>
    </div>
  );
};

export default Payment;