const express =
require("express")

const bcrypt =
require("bcryptjs")

const jwt =
require("jsonwebtoken")

const User =
require("../models/User")

const router =
express.Router()

router.post(
"/register",

async(req,res)=>{

try{

const {
name,
email,
password
}
=
req.body

const exists =
await User.findOne({
email
})

if(exists){

return res
.status(400)
.json({
msg:"User Exists"
})

}

const hashed =
await bcrypt.hash(
password,
10
)

const user =
new User({

name,
email,
password:hashed

})

await user.save()

res.json({
msg:"Registered"
})

}catch(err){

res.status(500)
.json(err)

}

}
)

router.post(
"/login",

async(req,res)=>{

try{

const {
email,
password
}
=
req.body

const user =
await User.findOne({
email
})

if(!user){

return res
.status(400)
.json({
msg:"User Not Found"
})

}

const valid =
await bcrypt.compare(
password,
user.password
)

if(!valid){

return res
.status(400)
.json({
msg:"Wrong Password"
})

}

const token =
jwt.sign(

{
id:user._id
},

process.env.JWT_SECRET

)

res.json({
token
})

}catch(err){

res.status(500)
.json(err)

}

}
)

module.exports =
router