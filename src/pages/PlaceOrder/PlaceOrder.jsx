import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext); // Access getTotalCartAmount from context
  

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Details</p>
        <div className="multi-fields">
          <input type="text" placeholder='Full Name' />
        </div>

        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Address' />
        <input type="tel" placeholder='Phone Number' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs.{getTotalCartAmount()}</p> {/* Subtotal from context */}
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs.{getTotalCartAmount() === 0 ? 0 :100}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs.{getTotalCartAmount () === 0 ? 0 : getTotalCartAmount() +100}</b> {/* Total including delivery fee */}
          </div>
        </div>
        <button>
           PAY AMOUNT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
