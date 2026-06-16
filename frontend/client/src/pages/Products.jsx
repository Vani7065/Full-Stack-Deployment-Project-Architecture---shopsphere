import { useState, useEffect } from "react";

import ProductCard
from "../components/ProductCard";

import SearchBar
from "../components/SearchBar";

import api
from "../services/api";

function Products(){

  const [products,setProducts] =
  useState([]);

  const [search,setSearch] =
  useState("");

  useEffect(()=>{

    fetchProducts();

  },[]);

  const fetchProducts =
  async()=>{

    try{

      const res =
      await api.get("/products");

      setProducts(
        res.data
      );

    }catch(err){

      console.log(err);

    }

  };

  const filteredProducts =
  products.filter(product=>

    product.name
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )

  );

  return(

    <div className="products-page">

      <h1>
        Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">

        {
          filteredProducts.map(
          product=>

          <ProductCard
            key={product._id}
            product={product}
          />

          )
        }

      </div>

    </div>

  );

}

export default Products;