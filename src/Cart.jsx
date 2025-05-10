import React, { useEffect, useMemo, useState } from 'react';

const Cart = () => {
  const [Items, setItem] = useState([]);

  useEffect(() => {
    let cartItems = localStorage.getItem("cart");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    }
    else {
      cartItems = [];
    }
    setItem(cartItems)
  }, [])
const shipping = 10.00;



  const total = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < Items.length; i++) {
      sum += Items[i].price * Items[i].quantity;
    }
    return Math.round(sum);
  }, [Items])

  const tax=useMemo(()=>{
const taxes = +(total * 0.10).toFixed(2); 
return taxes;
},[total]);

const grandTotal=useMemo(()=>{
const grand = (total + shipping + tax).toFixed(2);
return grand;
},[total,tax])

  const totalquantity = useMemo(() => {
    let val = 0;
    for (let i = 0; i < Items.length; i++) {
      val += Items[i].quantity
    }
    return val;
  }, [Items])

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-6xl font-bold mb-12 text-center">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
        {/* Cart Items */}
        <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl">
          {Items?.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b-2 pb-8 mb-8">
              <img src={item.thumbnail} alt={item.title} className="w-40 h-40 object-contain" />
              <div className="flex-1 px-8">
                <h3 className="text-3xl font-semibold">{item.title}</h3>
                <p className="text-2xl text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-3xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <p>Total Quanity : {totalquantity} </p>
        </div>

        {/* Summary */}
      <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-2xl h-fit">
  <h3 className="text-4xl font-bold mb-8">Order Summary</h3>

  <div className="text-2xl text-gray-700 space-y-4">
    <div className="flex justify-between">
      <span>Items:</span>
      <span className="font-bold">${total.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Shipping & handling:</span>
      <span className="font-bold">${shipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Total before tax:</span>
      <span className="font-bold">${(total + shipping).toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Estimated tax:</span>
      <span className="font-bold">${tax}</span>
    </div>
  </div>

  <div className="flex justify-between text-3xl font-bold border-t pt-6 mt-6">
    <span>Order total:</span>
    <span>${grandTotal}</span>
  </div>

  <button className="mt-10 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-5 rounded-2xl text-3xl font-bold">
    Proceed to checkout
  </button>
</div>


      </div>
    </div>
  );
};

export default Cart;
