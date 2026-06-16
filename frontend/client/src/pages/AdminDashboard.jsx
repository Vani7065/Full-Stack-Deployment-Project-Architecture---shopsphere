import { useState, useEffect } from "react";
import api from "../services/api";

function AdminDashboard() {

  const [product, setProduct] =
  useState({
    name: "",
    price: "",
    image: "",
    category: ""
  });

  const [products, setProducts] =
  useState([]);

  const [editingId, setEditingId] =
  useState(null);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
  async () => {

    try {

      const res =
      await api.get("/products");

      setProducts(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const handleChange =
  (e) => {

    setProduct({

      ...product,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await api.put(
          `/products/${editingId}`,
          product
        );

        alert(
          "Product Updated!"
        );

      } else {

        await api.post(
          "/products",
          product
        );

        alert(
          "Product Added!"
        );

      }

      setProduct({
        name: "",
        price: "",
        image: "",
        category: ""
      });

      setEditingId(null);

      fetchProducts();

    } catch (err) {

      console.log(err);

    }

  };

  const editProduct =
  (product) => {

    setProduct({

      name:
      product.name,

      price:
      product.price,

      image:
      product.image,

      category:
      product.category

    });

    setEditingId(
      product._id
    );

  };

  const deleteProduct =
  async (id) => {

    try {

      await api.delete(
        `/products/${id}`
      );

      fetchProducts();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="admin-page">

      <h1>
        Admin Dashboard
      </h1>

      <p className="admin-subtitle">
        Manage Store Products
      </p>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <button>
          {editingId
            ? "Update Product"
            : "Add Product"}
        </button>

      </form>

      <h2
        style={{
          marginTop: "50px"
        }}
      >
        Product Inventory
      </h2>

      <div
        className="admin-products"
      >

        {
          products.map(
            product =>

              <div
                key={product._id}
                className="admin-product-card"
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>
                  {product.name}
                </h3>

                <p>
                  ₹{product.price}
                </p>

                <button
                  className="edit-btn"
                  onClick={() =>
                    editProduct(product)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteProduct(
                      product._id
                    )
                  }
                >
                  Delete
                </button>

              </div>
          )
        }

      </div>

    </div>

  );

}

export default AdminDashboard;