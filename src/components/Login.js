import React, { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    useEffect(() => {
      const auth = localStorage.getItem("user");
        if (auth){
            navigate("/");
        }
      
    })
    

    const handleLogin = async () => {
        console.log(email,password);
        let result = await fetch("http://localhost:3005/login",{
            method: "post",
            body:JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        }else{
            alert("Please Enter Correct Details");
        }
    } 
    return(
        <div className="login">
            <input type="text" placeholder="Enter Email" className="ib" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input type="password" placeholder="Enter Password" className="ib" onChange={(e)=>setPassword(e.target.value)} value={password} />
            <button type="button" onClick={handleLogin} className="appbutton">Login</button>
        </div>
    )
}

export default Login;