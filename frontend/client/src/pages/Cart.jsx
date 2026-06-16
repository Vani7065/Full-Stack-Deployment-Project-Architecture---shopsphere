import { useContext } from "react";

import {
CartContext
}
from "../context/CartContext";

import { Link }
from "react-router-dom";
function Cart() {

  const {

    cart,

    increaseQty,

    decreaseQty

  } =
  useContext(CartContext);

  const total =

  cart.reduce(

    (sum,item)=>

    sum +

    item.price *

    item.quantity,

    0

  );

  return (

    <div className="cart-page">

      <h1>
        Shopping Cart
      </h1>

      {
        cart.length === 0 ? (

          <div className="empty-cart">

            <h2>
              🛒 Your Cart is Empty
            </h2>

            <p>
              Add products to start shopping.
            </p>

          </div>

        ) : (

          <>

            {

              cart.map(item=>(

                <div
                  key={item._id}
                  className="cart-item"
                >

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                  <div
                  className="qty-controls"
                  >

                    <button
                    onClick={()=>
                    decreaseQty(
                      item._id
                    )}
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                    onClick={()=>
                    increaseQty(
                      item._id
                    )}
                    >
                      +
                    </button>

                  </div>

                </div>

              ))

            }

            <div
            className="cart-total"
            >

              <h2>

                Total:

                ₹

                {total.toLocaleString()}

              </h2>
              <Link to="/checkout">

  <button
  className="checkout-btn"
  >
    Proceed To Checkout
  </button>

</Link>

            </div>

          </>

        )

      }

    </div>

  );

}

export default Cart;