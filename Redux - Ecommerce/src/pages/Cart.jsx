import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt, FaCartArrowDown } from 'react-icons/fa'; 
import "../../src/App.css";
import cartSlice from '../Redux/Cartslice';

let { remove, updateQuantity, clearCart } = cartSlice.actions

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const handleQuantityChange = (id, change) => {
        dispatch(updateQuantity({ id, change }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className='cart'>
   
            <div className='cartWrapper'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cartCard'>
                        <img src={item.image} alt="Product" className='productImage' />
                        <div className='quantityControl font-bold'>
                            <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <h5 className='productTitle'>{item.title}</h5>
                        <h5>${item.price.toFixed(2)}</h5>
                        <h5>Total: ${(item.price * item.quantity).toFixed(2)}</h5>
                        <button className='btn removeBtn' onClick={() => handleRemove(item.id)}>
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
            </div>
            <div className='totalPrice flex  mt-4'>
                <h3>Total Price: ${getTotalPrice()}</h3>
                <button className='clearBtn right-6' onClick={handleClearCart}>
                    <FaTrashAlt/>
                </button>
            </div>
        </div>
    );
};

export default Cart;
