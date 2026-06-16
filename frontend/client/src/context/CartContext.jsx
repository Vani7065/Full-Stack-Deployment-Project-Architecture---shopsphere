import {
  createContext,
  useState
}
from "react";

export const CartContext =
createContext();

export function CartProvider({
  children
}) {

  const [cart,setCart] =
  useState([]);

  const addToCart =
  (product)=>{

    const existingItem =
    cart.find(
      item =>
      item._id === product._id
    );

    if(existingItem){

      setCart(

        cart.map(item=>

          item._id === product._id

          ? {
              ...item,
              quantity:
              item.quantity + 1
            }

          : item

        )

      );

    }else{

      setCart([

        ...cart,

        {
          ...product,
          quantity:1
        }

      ]);

    }

  };

  const increaseQty =
  (id)=>{

    setCart(

      cart.map(item=>

        item._id === id

        ? {
            ...item,
            quantity:
            item.quantity + 1
          }

        : item

      )

    );

  };

  const decreaseQty =
  (id)=>{

    setCart(

      cart.map(item=>

        item._id === id

        ? {
            ...item,
            quantity:
            item.quantity - 1
          }

        : item

      )

      .filter(
        item =>
        item.quantity > 0
      )

    );

  };

  return(

    <CartContext.Provider
      value={{

        cart,

        addToCart,

        increaseQty,

        decreaseQty

      }}
    >

      {children}

    </CartContext.Provider>

  );

}