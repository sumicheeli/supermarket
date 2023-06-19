import React from "react";
import './Home'
var Forms=()=>{
    var Change=()=>{
        alert("Thanks For Using This Website")
    }
    return(
        <div id="dv1">
<div id="dv2">
    <div id="dv3">
<h1><i>Join Now</i></h1>
<input type="text" placeholder="Enter Your Name" id="ip1"></input><br></br><br></br>
<input type="number" placeholder="Enter Your Phno" id="ip2"></input><br></br><br></br>
<input type="email" placeholder="Enter Your Email" id="ip3"></input><br></br><br></br>
<input type="date" placeholder="item" id="ip4"></input><br></br><br></br>
<input type="number" placeholder="quantity" id="ip6"></input><br></br><br></br>
<input type="text" placeholder="Send Your Message" id="ip7"></input><br></br><br></br>


<button type="submit" onClick={Change}>submit</button>


    
</div>
</div>
</div>
    )
}
export default Forms;