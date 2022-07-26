import React from 'react';
import Card1 from './Card1';
import "./previously.css";
function Previously(){
    return(
        <div className="previously">
        <p className="prevcategory">Previously Browsed Items</p>
        <div class="previousgrid">
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
            <div><Card1 img="/Images/image 26.png" Card1_title="Vicks vapourub 50ml,Relief from cold,cou.." Card1_text="MRP ₹145.00" price="₹116.00" off="20% OFF"/></div>
        </div>
        <hr className="gap2"/>
    </div> 
    );
}
export default Previously;