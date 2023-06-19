import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
var Login=()=>{
    var n=useNavigate()
    var Login1=()=>{
        let a=document.getElementById("inp1").value
        let b=document.getElementById("inp3").value
   
    if(a=="" && b==""){
            alert("information not entered")
        }
    else if(a==""){
        alert("enter your email")
    }

    else if(b==""){
        alert("enter your password")
    }
    else{
        alert("Successfully loged in" )
        n ('/Home')
    }   
}

return(
<div id="div1">



<div id="di6">
<h1><i><u>LOGIN PAGE</u></i></h1>
EMAIL: <input type="text" placeholder="email" id="inp1"></input><br></br><br></br>
PASSWORD: <input type="password" placeholder="password" id="inp3"></input><br></br><br></br>

<center><button type="submit" onClick={Login1}>login</button></center><br></br>

  <b>  <a href="#">Forgot Password ?</a> or <a href="#">Sign Up</a></b>
    
</div>

</div>

)
}

export default Login;