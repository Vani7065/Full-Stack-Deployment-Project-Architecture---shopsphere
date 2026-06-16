import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const { cart } =
  useContext(CartContext);

  const [formData,setFormData] =
  useState({

    name:"",
    phone:"",
    address:""

  });

  const handleChange =
  (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const total =

  cart.reduce(

    (sum,item)=>

    sum +

    item.price *

    item.quantity,

    0

  );

  const handleOrder =
  (e)=>{

    e.preventDefault();

    alert(
      "🎉 Order Placed Successfully!"
    );

  };

  return(

    <div className="checkout-page">

      <h1>
        Checkout
      </h1>

      <div className="checkout-container">

        <form
        className="checkout-form"
        onSubmit={handleOrder}
        >

          <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          />

          <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          />

          <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
          />

          <button>
            Place Order
          </button>

        </form>

        <div
        className="order-summary"
        >

          <h2>
            Order Summary
          </h2>

          {

            cart.map(item=>

              <div
              key={item._id}
              >

                <p>

                  {item.name}

                  ×

                  {item.quantity}

                </p>

              </div>

            )

          }

          <hr />

          <h3>

            Total:

            ₹

            {total.toLocaleString()}

          </h3>

        </div>

      </div>

    </div>

  );

}

export default Checkout;