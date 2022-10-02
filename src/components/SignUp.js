import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

    useEffect(()=>{
        const auth  =localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:3005/register", {
        method: "post",
        body: JSON.stringify({name, email, password}),
        headers: {
            "content-type" : "application/json"
        },
    })
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if(result){
        navigate('/')
    }

  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
        className="ib"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
        className="ib"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
        className="ib"
      />
      <button type="button" onClick={collectData} className="appbutton">
        Sign UP
      </button>
    </div>
  );
};

export default SignUp;
