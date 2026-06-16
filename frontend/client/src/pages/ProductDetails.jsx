import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import api from "../services/api";

function ProductDetails() {

  const { id } =
  useParams();

  const [product, setProduct] =
  useState(null);

  const { addToCart } =
  useContext(CartContext);

  useEffect(() => {

    fetchProduct();

  }, []);

  const fetchProduct =
  async () => {

    try {

      const res =
      await api.get("/products");

      const foundProduct =
      res.data.find(
        p => p._id === id
      );

      setProduct(
        foundProduct
      );

    } catch (err) {

      console.log(err);

    }

  };

  if (!product) {

    return (

      <div className="details-page">

        <h1>
          Loading Product...
        </h1>

      </div>

    );

  }

  return (

    <div className="details-page">

      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <div className="details-content">

        <h1>
          {product.name}
        </h1>

        <h2>
          ₹{product.price}
        </h2>

        <p>
          Category:
          {" "}
          {product.category}
        </p>

        <p>
          Premium quality product
          carefully selected for
          modern shoppers.
        </p>

        <button
          className="details-btn"
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>

        <Link to="/products">

          <button
            className="back-btn"
          >
            Back To Products
          </button>

        </Link>

      </div>

    </div>

  );

}

export default ProductDetails;