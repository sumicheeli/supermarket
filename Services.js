import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

const Service=()=>{
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
    let Product1=()=>{
      alert('Successfully logedin')
      n('/pro')
    }
    return(
        <div>   
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
         <div><h1 style={{textAlign:"center",color:"blue"}}>ITEMS</h1></div><div id="re">
          
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>GRAPES</h1>
             <h1 style={{color:"red"}}>₹30</h1>
           <button type="sumbit" onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>orderNow</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;

           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/1486675485/photo/ripe-and-juicy-delicious-mango-on-a-black-wooden-table.jpg?s=612x612&w=0&k=20&c=9M0gNzgjYIA4I-ySFtKpClX1cpLE0O3licaHV5RKNyM="></img>
             <h2>MANGOES</h2>
                   <h2 style={{color:"red"}}>₹90</h2>
           
           <button type="sumbit" onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;


           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/578273202/photo/fresh-sliced-watermelon-wooden-background.jpg?s=612x612&w=0&k=20&c=jyRCeZdU2GOP1uE0lQfIBaZusqzAZO3e6sa0j5cNww4="></img>
             <h2>WATERMELON</h2>
             <h2 style={{color:"red"}}>$100</h2>
           
           <button type="sumbit" onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;

           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://www.foodnetwork.com/content/dam/images/food/fullset/2018/4/30/0/FNK_Ice-Cream-in-a-Bag_s4x3.jpg"></img>
             <h1>ICECREAM</h1>
             
           
           <h2 style={{color:"red"}}>₹50</h2>

           <button  type="sumbit" onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>

          </div>
          </div>
          </div>
         
         <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/11942006/pexels-photo-11942006.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>SOFTDRINKS</h1>
           <h2 style={{color:"red"}}>₹60</h2>
   
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;


           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/1297545703/photo/onions-in-a-bowl-with-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=qtf7TjaKAHjD6pZo8x72Q0F3BkOrc-kAPBjzdUxUe1U="></img>
             <h1>ONIONS</h1>
           <h2 style={{color:"red"}}>₹50</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp; 
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/2280550/pexels-photo-2280550.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CARROTS</h1>
           <h2 style={{color:"red"}}>₹30</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;        
     <div id="res">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CUCUMBER</h1>
           <h2 style={{color:"red"}}>₹20</h2>
          
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           
           </div>
         </div>
     </div>
     </div>
     <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/10434722/pexels-photo-10434722.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CORINADER</h1>
           <h2 style={{color:"red"}}>₹15</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/3883858/pexels-photo-3883858.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CHACOBAR</h1>
           <h2 style={{color:"red"}}>₹20</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/3342301/pexels-photo-3342301.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>MILKSHAKE</h1>
           <h2 style={{color:"red"}}>₹30</h2>
          
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
     <div id="res">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/844027922/photo/cleaning-supplies.jpg?s=612x612&w=0&k=20&c=nqyiBSrQo5Jo3_WnNC8wQVU6YxT9iRS-1qffCGNLv3c="></img>
             <h1>HomeProducts</h1>
           <h2 style={{color:"red"}}>₹2000</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
         </div>
     </div>
     </div>

     <div id="re">
         <div style={{borderRadius:"2cm",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"5cm",width:"5cm",borderRadius:"2cm"}}  src="https://media.istockphoto.com/id/478482323/photo/cleaning-product-plastic-container-for-house-clean.jpg?s=612x612&w=0&k=20&c=fsG7e9lRa2IDiY52gau9FMDea5vUTzQ5o15HQLi2XgY="></img>
             <h1>HomeProducts</h1>
           <h2 style={{color:"red"}}>₹3500</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>strawberries</h1>
           <h2 style={{color:"red"}}>₹70</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/2985162/pexels-photo-2985162.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>  Eggs</h1>
           <h2 style={{color:"red"}}>₹60</h2>
          
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
     <div id="res">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>FruitSalad</h1>
           <h2 style={{color:"red"}}>₹2000</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
         </div>   
     </div>

         </div>
         
                     
         <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>BREAD</h1>
           <h2 style={{color:"red"}}>₹50</h2>
   
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;


           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CORN</h1>
           <h2 style={{color:"red"}}>₹35</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/10566502/pexels-photo-10566502.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>CLEANING PRODUCTS</h1>
           <h2 style={{color:"red"}}>₹5000</h2>
           
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
     <div id="res">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>BEANS</h1>
           <h2 style={{color:"red"}}>₹30</h2>
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
         </div>
     </div>
     </div> 
     <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://images.pexels.com/photos/1838596/pexels-photo-1838596.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
             <h1>RED CHILLES</h1>
           <h2 style={{color:"red"}}>₹80</h2>
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/1032003246/vector/glass-transparent-blank-bottle-with-olives-oil-package-mock-up-label-design.jpg?s=612x612&w=0&k=20&c=IU04gvNmvg5WP9Czrc32jBdrXlg3Ue1et-PQKPQIQW4="></img>
             <h1>OLIVE OIL</h1>
           <h2 style={{color:"red"}}>₹200</h2>
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           <div id="re">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/1193878232/photo/pure-sunflower-oil-in-plastic-bottle-seasoning-for-salads.jpg?s=612x612&w=0&k=20&c=VdoEPzOP59g1qJojVjkDdEu96h_kEBXUuh4YlnX5CQc="></img>
             <h1>FREEDOM OIL</h1>
           <h2 style={{color:"red"}}>₹300</h2>
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
     <div id="res">
         <div style={{border:"solid",height:"15cm" ,width:"10cm",marginTop:"20px"}}>
             <img style={{backgroundSize:"cover",height:"8cm",width:"9.9cm",border:"solid"}}  src="https://media.istockphoto.com/id/1397270700/photo/raw-chickpea-beans-and-chickpea-cold-pressed-oil-in-bottle-on-yellow-background.jpg?s=612x612&w=0&k=20&c=MRN11cS94eSpyKBAnQX_vpPaMADedABOI__t_hLK7Wc="></img>
             <h1>GROUND-NUT OIL</h1>
           <h2 style={{color:"red"}}>₹250</h2>
          
           <button onClick={Product1} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>order Now</button>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
           </div>
         </div>
         </div>
         </div>  
         )
}
export default Service;