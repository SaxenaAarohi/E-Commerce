import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeitem, updatequantity } from './slice/Cartslice';

const Cart = () => {

  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  function handleremove(id) {
    dispatch(removeitem(id))
  }

function handlequantity(id,Quantity){
dispatch(updatequantity({id,quantity : Quantity}))
}

  const shipping = 10.00;

  const total = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < cart?.items.length; i++) {
      sum += cart.items[i].product.price * cart.items[i].quantity;
    }
    return Math.round(sum);
  }, [cart.items.product])

  const tax = useMemo(() => {
    const taxes = +(total * 0.10).toFixed(2);
    return taxes;
  }, [total]);

  const grandTotal = useMemo(() => {
    const grand = (total + shipping + tax).toFixed(2);
    return grand;
  }, [total, tax])

  const totalquantity = useMemo(() => {
    let val = 0;
    for (let i = 0; i < cart?.items.length; i++) {
      val += cart.items[i].quantity
    }
    return val;
  }, [cart.items])

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-6xl font-bold mb-12 text-center">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-12 justify-center item.product-start">
        {/* Cart item.product */}
        <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl">

          {cart?.items?.map((item) => (
            <div key={item.product.id} className="flex item.product-center justify-between border-b-2 pb-8 mb-8">
              <img src={item.product.thumbnail} alt={item.product.title} className="w-40 h-40 object-contain" />
              <div className="flex-1 px-8">
                <h3 className="text-3xl font-semibold">{item.product.title}</h3>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={()=>handlequantity(item.product.id,item.quantity-1)} className="bg-gray-300 px-3 py-1 rounded text-xl">-</button>

                  <select value={item.quantity} onChange={(e)=>handlequantity(item.product.id,(e.target.value))} className="border px-2 py-1 rounded text-lg">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                  <button onClick={()=>handlequantity(item.product.id,item.quantity+1)} className="bg-gray-300 px-3 py-1 rounded text-xl">+</button>
                </div>
                <button onClick={() => handleremove(item.id,item.product.id)} className='bg-yellow-400 p-2 mt-5 rounded-lg'>Remove</button>
              </div>
              <div className="text-3xl font-bold">${(item.product.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}

          <p>Total Quanity : {totalquantity} </p>

        </div>

        {/* Summary */}
        <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-2xl h-fit">

          <h3 className="text-4xl font-bold mb-8">Order Summary</h3>

          <div className="text-2xl text-gray-700 space-y-4">

            <div className="flex justify-between">
              <span>item.product:</span>
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
