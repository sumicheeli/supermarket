import React from "react";
import './Home';
import { useNavigate } from "react-router-dom";
var About=()=>{
    let n=useNavigate()

    let GoHome=()=>{
       n('/Home')
    }
    
    let GoContact=()=>{
        n('/Contact')
    }
    let GoService=()=>{
        n('/Service')
    }
 
    return(
        <div>
            <header>
            <nav>
            <div className="inpbox">
                <ul>
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>PRODUCTS</u></b></li>
                   
                    </ul>
                    </div>
                </nav>
            </header>
          <img id="img7" src="data:image/jpeg;base64,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"></img>

<h1 id="id4">fresh and quality products are available</h1>
<h3>Nutritional Benefits: Vegetables are packed with vitamins, minerals, and antioxidants that support overall health. They are typically low in calories and fat while being high in fiber, which aids digestion and helps maintain a healthy weight.

Types of Vegetables: There are numerous types of vegetables, including leafy greens (spinach, kale, lettuce), cruciferous vegetables (broccoli, cauliflower, cabbage), root vegetables (carrots, potatoes, beets), legumes (beans, peas, lentils), nightshade vegetables (tomatoes, peppers, eggplant), and many more.

Health Benefits: Regular consumption of vegetables has been linked to a lower risk of chronic diseases, such as heart disease, certain cancers, and obesity. They can also contribute to improved digestion, increased energy levels, and a strengthened immune system.

Cooking and Preparation: Vegetables can be prepared in various ways, including steaming, boiling, roasting, grilling, or consuming them raw. Different cooking methods can affect the taste, texture, and nutrient content of vegetables.

Recommended Intake: Dietary guidelines generally recommend consuming a variety of vegetables to ensure a diverse nutrient intake. The specific recommendations may vary based on factors like age, sex, and activity level, but aiming for several servings of vegetables per day is typically advised.

Growing Vegetables: Many people enjoy growing their own vegetables in gardens, containers, or even indoor settings. This allows them to have access to fresh produce and engage in a rewarding and sustainable activity.

Remember that while vegetables offer numerous health benefits, it's important to consider individual dietary needs and potential allergies or sensitivities. Consulting with a healthcare professional or nutritionist can provide personalized advice on incorporating vegetables into your diet.






</h3>

<h1 style={{marginLeft:"8cm",fontSize:"1cm"}}><b>veges and home products</b></h1>
            <h2 style={{fontSize:"0.5cm",marginLeft:"1cm"}}>Furniture: Items such as sofas, chairs, tables, beds, cabinets, and shelves used for seating, storage, and organization.

Appliances: Electrical or mechanical devices used for various purposes, including kitchen appliances like refrigerators, ovens, microwaves, dishwashers, and laundry appliances like washing machines and dryers.

Kitchenware: Utensils, cookware, and gadgets used in the kitchen, such as pots, pans, knives, cutting boards, mixing bowls, blenders, coffee makers, toasters, and more.

Home Decor: Items used to enhance the aesthetics and ambiance of a home, including wall art, mirrors, rugs, curtains, decorative pillows, vases, candles, and other decorative accessories.

Bedding and Linens: Products used for sleeping and dressing up beds, such as sheets, pillowcases, blankets, comforters, duvets, mattress protectors, and pillows.

Cleaning Supplies: Products used to maintain cleanliness and hygiene in the home, including all-purpose cleaners, disinfectants, brooms, mops, vacuum cleaners, dusters, and laundry detergents.

Bathroom Essentials: Products used in the bathroom, including towels, bath mats, shower curtains, soap dispensers, toothbrush holders, toilet paper holders, and bathroom scales.

Lighting: Various types of lighting fixtures and bulbs, including ceiling lights, lamps, chandeliers, pendant lights, and LED bulbs.

Storage and Organization: Products designed to help keep belongings organized, such as storage containers, bins, baskets, shelving units, closet organizers, and drawer dividers.

Home Improvement Tools: Tools and equipment used for DIY projects or home repairs, including hammers, screwdrivers, drills, saws, measuring tape, paint brushes, and safety equipment.

These are just a few examples of home products. The range is extensive, and it includes items for different rooms, purposes, and personal preferences.






</h2>
             </div>
    )
}
export default About;