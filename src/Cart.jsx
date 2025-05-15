import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeitem, updatequantity } from './slice/Cartslice';

const Cart = () => {

  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  function handleremove(id) {
    dispatch(removeitem(id))
  }

function handlequantity(id, quantity) {
  const q = Math.max(1, Math.min(10, parseInt(quantity)));
  dispatch(updatequantity({ id, quantity: q }));
}



  const shipping = 10.00;

 const total = useMemo(() => {
  return Math.round(cart.items.reduce((sum, item) =>
    sum + item.product.price * item.quantity, 0));
}, [cart.items]);

const tax = useMemo(() => {
  return +(total * 0.10).toFixed(2);
}, [total]);

const grandTotal = useMemo(() => {
  return (total + shipping + tax).toFixed(2);
}, [total, tax]);

const totalquantity = useMemo(() => {
  return cart.items.reduce((val, item) => val + item.quantity, 0);
}, [cart.items]);


 return (
  <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
    <h2 className="text-3xl sm:text-4xl md:text-xl font-bold mb-5 text-center">Shopping Cart</h2>

    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-5 justify-center items-start">
      
      {/* Cart items */}
      <div className="w-full max-w-md bg-white p-3 rounded-xl shadow space-y-4 text-sm">
  {cart?.items?.map((item) => (
    <div key={item.product.id} className="flex items-center justify-between gap-2 border-b pb-3 mb-3">
      
      <img
        src={item.product.thumbnail}
        alt={item.product.title}
        className="w-16 h-16 object-contain"
      />
      
      <div className="flex-1 px-2">
        <h3 className="text-sm font-semibold mb-2">{item.product.title}</h3>

        <div className="flex justify-start items-center gap-1 mb-2">
         <div className="flex justify-start items-center gap-1 mb-2">
  <button
    onClick={() => handlequantity(item.product.id, item.quantity - 1)}
    className="bg-gray-300 px-2 py-0.5 rounded text-sm"
    disabled={item.quantity <= 1}
  >
    -
  </button>

  <select
    value={item.quantity}
    onChange={(e) => handlequantity(item.product.id, e.target.value)}
    className="border px-1 py-0.5 rounded text-sm"
  >
    {[...Array(10)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
  </select>

  <button
    onClick={() => handlequantity(item.product.id, item.quantity + 1)}
    className="bg-gray-300 px-2 py-0.5 rounded text-sm"
    disabled={item.quantity >= 10}
  >
    +
  </button>
</div>

        </div>

        <button
          onClick={() => handleremove(item.id, item.product.id)}
          className="bg-yellow-400 px-2 py-1 rounded text-xs"
        >
          Remove
        </button>
      </div>

      <div className="font-bold text-sm text-right min-w-[60px]">
        ${(item.product.price * item.quantity).toFixed(2)}
      </div>
    </div>
  ))}

  <p className="text-left font-medium text-sm">Total Qty: {totalquantity}</p>
</div>

<div className="hidden md:block bg-white p-3 rounded-lg shadow w-full max-w-xs space-y-2 text-sm">
  <h3 className="text-base font-semibold text-gray-800 border-b pb-1">Summary</h3>

  <div className="text-gray-700 space-y-1">
    <div className="flex justify-between">
      <span>Items</span>
      <span className="font-medium">${total.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Shipping</span>
      <span className="font-medium">${shipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span className="font-medium">${(total + shipping).toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Tax</span>
      <span className="font-medium">${tax}</span>
    </div>
  </div>

  <div className="flex justify-between font-semibold border-t pt-2 text-sm text-gray-900">
    <span>Total</span>
    <span>${grandTotal}</span>
  </div>

  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 rounded-lg text-sm font-semibold mt-2">
    Checkout
  </button>
</div>

    </div>
  </div>
);

};

export default Cart;
