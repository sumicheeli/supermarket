import React from "react";
import './Home';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

    var Signup=()=>{
        var n=useNavigate()
        var Login2=()=>{
    
            n("/log")
        }
        var Login3=()=>{
            let x=document.getElementById("it1").value
    let y=document.getElementById("it2").value
    let z=document.getElementById("it3").value
    let s=document.getElementById("it4").value
  
       
           /* if(x==""&& y=="" && z=="" && s==""){
                alert("information not entered")
                
            }
            else if(x==""){
                alert("enter name")
            }
            else if(y==""){
                alert("enter Ph Number")
            }
            else if(z==""){
            alert("enter email")
        }
        else if(s==""){
            alert("enter password")
                    }
                    else
                    {
                        alert("/successfully completed")
                        n("/home")
                    }*/
                    const handleSubmit = async(e) => {
                        if(y=='')
                        {
                           
                           alert('please enter username' )
                        }
                        else if(z=='')
                        {
                           alert('please enter email id' )
                        }
                        else if(s=='')
                        {
                           alert('please enter password' )
                        }
                        else{
                           let data={username:y,password:z,email:s}
                           let result=await axios.post('http://localhost:8080/signdata/Signmodule',data)
                           alert(result.data)
                          
                        }
                       }
                   
                   
            
        }
 
    return(
            <div id="di1">
                <section id="container1">
                    <form>
                        <p id="signup">SignUp</p>
                        <input placeholder="Name" type="text" id="it1"></input>
                        <input placeholder="Ph.Number" type="number" id="it2" required></input>
                        <input placeholder="Email" type="email" id="it3"required></input>
                        <input placeholder="Password" type="password" id="it4."></input>
                        
                        <button style={{backgroundColor:"azure"}} type="submit" onClick={Login3}>create Account</button>
                        <button style={{marginTop:"1cm",backgroundColor:"azure"}} type="submit" onClick={Login2}>login</button>
                    </form>
                </section>
                
            </div>
    )
}
 
 
 export default Signup;