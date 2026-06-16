require("dotenv")
.config()

const express =
require("express")

const mongoose =
require("mongoose")

const cors =
require("cors")

const authRoutes =
require("./routes/authRoutes")

const productRoutes =
require("./routes/productRoutes")

const app =
express()

app.use(cors())

app.use(express.json())

mongoose
.connect(
process.env.MONGO_URI
)
.then(()=>{

console.log(
"MongoDB Connected"
)

})

app.use(
"/api/auth",
authRoutes
)

app.use(
"/api/products",
productRoutes
)

app.get(
"/",
(req,res)=>{

res.send(
"ShopSphere API Running"
)

}
)

app.listen(
process.env.PORT,
()=>{

console.log(
"Server Running"
)

}
)