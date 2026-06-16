import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const [name,setName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const navigate =
  useNavigate();

  const handleSubmit =
  async(e)=>{

    e.preventDefault();

    try{

      await api.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");

    }catch(err){

      alert(
        "User Already Exists"
      );

      console.log(err);
    }
  };

  return(

    <div className="auth-page">

      <form
      className="auth-form"
      onSubmit={handleSubmit}
      >

        <h1>
          Register
        </h1>

        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
        />

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(
            e.target.value
          )
        }
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
        />

        <button>
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;