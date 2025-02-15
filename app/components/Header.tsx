import "../style/Header.css";
import Image from "next/image";
import img from "../../public/assets/amazon-logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

export default function Header(){
    return(
<div> 



<div className="navbar">    
<div className="nav-logo">
    <div className="logo">
        <Image src={img} alt={"logo"} width={160} height={80} className="bg-cover"/>
    </div>
    </div>
    {/* <!-- second div inside main div for selscting country  --> */}
    <div className="nav-address border">
        <p className="add-first">Deliver toooooooo</p>
        <div className="add-icon">
                <IoLocationOutline />

             <p className="add-sec">Pakistan</p>
        </div>
    </div>
    {/* <!-- third main div for seaching item in amzazon --> */}
    <div className="nav-search">
        <select className="search-select">
            <option>All</option>
        </select>
        <input placeholder="Search Amazon" className="search-input"></input>
        <div className="search-icon">
            < FaMagnifyingGlass/>
        </div>
    </div>
   {/* <!-- 4th div for siging in --> */}
<div className="nav-signin border" >
    <p><span>Hello,sign in</span></p>
    <p className="nav-acc">Accounts & Lists</p>
</div>
{/* <!-- 5th   div for return orders--> */}
<div className="nav-Returns border" >
    <p><span>Returns</span></p>
    <p className="nav-second">& Orders</p>
</div>
{/* <!-- 6th div for cart --> */}
<div className="nav-cart border">
<CgShoppingCart />
    Cart
</div>
</div>
{/* <!-- 7th div for panel  --> */}
<div className="panel">
{/* <!-- inside div for "All"  -->  */}
<div className="Panel-All">
   <FaBars/>
    All
</div>
{/* <!-- 8th div for panel-options --> */}
<div className="panel-options">
    <p>Today's Deal</p>
    <p>Customer Service</p>
    <p>Registry</p>
    <p>Gift Cards</p>
    <p>Sell</p>    
</div>
{/* <!-- 9thdiv for panel-deals --> */}
<div className="panel-deals">
            <p>Shop deals in Electronics</p>
</div>
</div>
</div>
     
)
}
