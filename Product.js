import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
let n=useNavigate
let Login=()=>{
return(
  alert("Thank You for ordering & keep Shoping with me " )
)

}
const Product=()=>{
    return(
        <div id="div3">
            <p>Please free to Contact below numbers,for more details about the store</p>
            <p>**038839948</p>
            <p>  ** 6527033391</p>
            <p>  **48772939</p><br></br>
            
            <div id="div9">
            <center><h1><u>ORDER THE ITEMS IN BELOW LIST</u></h1></center>
          <b>   NAME : <input type="text" id="input" placeholder="name"></input><br></br><br></br>
                ADDRESS : <input type="text" id="input1" placeholder="address"></input><br></br><br></br>
                ITEMS : <input type="text" id="input2" placeholder="enter the items"></input><br></br><br></br>
                QUANTITY : <input type="text" id="input3" placeholder="Quantity" ></input><br></br><br></br>
                <center><b><button type="submit" onClick={Login}>Submit</button></b></center><br></br>
              
         </b>   
         
         </div>
            </div>
    
    )
}

let Login1=()=>{
  return(
    n('/lo')
  )
}
export default Product;
