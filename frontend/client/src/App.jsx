import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom"

import Home
from "./pages/Home"

import Products
from "./pages/Products"

import Cart
from "./pages/Cart"

import ProductDetails
from "./pages/ProductDetails"

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute
from "./components/ProtectedRoute";

import AdminDashboard
from "./pages/AdminDashboard";

import Checkout
from "./pages/Checkout";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/products"
element={<Products />}
/>

<Route
path="/cart"
element={
  <ProtectedRoute>
    <Cart />
  </ProtectedRoute>
}
/>

<Route
path="/product/:id"
element={
<ProductDetails />
}
/>
<Route
path="/login"
element={<Login />}
/>

<Route
path="/register"
element={<Register />}
/>

<Route
path="/admin"
element={
  <ProtectedRoute>
    <AdminDashboard />
  </ProtectedRoute>
}
/>
<Route
path="/checkout"
element={
  <ProtectedRoute>
    <Checkout />
  </ProtectedRoute>
}
/>
</Routes>

</BrowserRouter>

)

}

export default App