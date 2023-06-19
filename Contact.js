import React from 'react'
import './Home';
import { useNavigate, useSubmit } from 'react-router-dom'

export const Contact=()=> {
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
    var mes=()=>{
        let o=document.getElementById("d").value
        let m=document.getElementById("e").value
        let n=document.getElementById("f").value
        let l=document.getElementById("g").value
        if(o==""&& m==""&& n==""&& l==""){
            alert("please enter the above information")
        }
        else{
        alert("your message was successfully sent")
        }
    }
  return (
    <div>
        <header>
            <nav>
            <div className="inpbox">
                <ul>
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li onClick={GoAbout}><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>PRODUCTS</u></b></li>
                  
                    </ul>
                    </div>
                </nav>
            </header>
    <div id="contact">
            <div>
                <div><h1 style={{paddingBottom:"20px",color:"crimson"}}>Contact Us</h1></div>
                
                <pre><b style={{color:"deeppink"}}>First name       Last name</b></pre>
                <input  id="d"type="text" placeholder="enter your first name" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input  id="e"type="text" placeholder="enter your last name" required></input>
                
            </div>
            <div>
                <pre><b style={{color:"deeppink"}}>Email             phone number</b></pre>
                <input  id="f"type="text" placeholder="enter you mail" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input id="g" type="text" placeholder="enter your phone number"required></input>
                
            </div>
            <div>
                <pre><b style={{color:'deeppink'}}>Write a Message</b></pre>
            </div>
            <div>
                
                <input  style={{height:"90px",width:"400px",border:"0.06cm solid black",borderRadius:"1cm"}}type="text" placeholder="send your message" ></input>
            </div>
            <div>
                <input onClick={mes} style={{backgroundColor:"gold",marginTop:"20px",borderRadius:"9px"}} type="button" value="Sent"></input>
            </div>
            <h3 style={{color:"deeppink"}}>if anything urgent contact to below number</h3>
           <h2 style={{color:"orange"}}>+918985297274</h2>
        </div>
        </div>
  )
}
export default Contact;