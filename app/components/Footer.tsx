import "../style/Footer.css";
import Image from "next/image";
import img from "../../public/assets/amazon-logo.png";
  
  export default function Footer(){
    return(

    
  

    <div>
{/* // <!--main footer div --> */}
       
      <div className="footer">
    <div className="ft-heading1">Get To Know Us
    {/* <!-- 1st footer div --> */}
       <ul className="footer-getTo">
        <li>Career</li>
         <li>Blog</li>
        <li>AboutAmazon</li>
         <li>InvesterRelation</li>
        <li>AmazonDevices</li>
        <li>AmazonScience</li>
           </ul>
    </div>

    {/* <!-- 2nd footer div --> */}
    <div className="ft-heading2">Make Money with us
            <ul className="footer-makeMoney">
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Buisness</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise your Products</li>
            <li>Host an Amazon Hub</li>
            <li>Self-Publish with Us</li>
             </ul>
        </div>
        {/* <!-- 3rd  footer div  --> */}
        <div className="ft-heading3">Amazon Payment Products
    <ul className="footer-Payment">
        <li>Amazon Buisness Card</li>
        <li>Shop with Points</li>
        <li>Reload Your Balance</li>
        <li>Amazon Currency Converter</li>
         
        </ul>
    </div>
    {/* <!-- 4th  footer div  --> */}
    <div className="ft-heading4">Amazon Payment Products
        <ul className="footer-Help">
           <li>Amazon and Covid 19</li>
           <li>Your Accounts</li>
           <li>Your Ordres</li>
              <li>Shipping Rates and Policies</li>
           <li>Manage your Contents And Device</li>
               <li>Help</li>
        </ul>       
    </div>

{/* <!-- </div> --> */}
<div className="ft-Bttn">
     <div className="mono">
        <Image src={img} alt={"logo"} width={100} height={80} /> 
    </div> 
<button id="one" >English</button>
<button id="two">$ USD-U.S. Dollars</button>
<button id="three">UnitedStates</button>
</div>
</div>
</div>
)
}