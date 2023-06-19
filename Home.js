import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
var Homepg=()=>{
    let n=useNavigate()

    let GoHome=()=>{
       n('/Home')
    }
    let GoAbout=()=>{
        n('/About')
    }
    let GoContact=()=>{
        n('/Contact')
    }
    let GoService=()=>{
        n('/Service')
    }
   
    return(
        <div id="id1">   
        <header>
            <nav>
                <div className="inpbox">
                <ul>
                 
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li onClick={GoAbout}><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>Products</u></b></li>
                  
                   
                   
                    </ul>
                </div>
                </nav>
            </header>
            
            <div>
            
           
                <h1 style={{color:"orangered",marginLeft:"10.5cm",marginTop:"1cm"}}><i><p>WELCOME TO OUR GROCERY STORE</p></i></h1>
            </div>
           
              </div>
        )
    }
    export default Homepg;