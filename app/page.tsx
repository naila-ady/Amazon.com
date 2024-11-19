import Image from "next/image";
import img from "../public/assets/hero1.jpg"
import img1 from "../public/assets/headset-img.jpg";
import img2 from "../public/assets/keyboard-img.jpg";
import img3 from "../public/assets/computermice-img.jpg";
import img4 from "../public/assets/chairs-img.jpg";
import img5 from "../public/assets/jeansunder$50-img.jpg";
import img6 from "../public/assets/topsUnder$25-img.jpg";
import img7 from "../public/assets/DressessUnder$30-img.jpg";
import img8 from "../public/assets/ShoesUnder$50.jpg";
import img9 from "../public/assets/dinning-img.jpg";
import img10 from "../public/assets/home-img.jpg";
import img11 from "../public/assets/kitchen-img.jpg";
import img12 from "../public/assets/health&beauty-img.jpg";
import img13 from "../public/assets/toysunder$25-img.jpg";
import img14 from "../public/assets/Beautystealsunder$25-img.jpg";
import img15 from "../public/assets/Getyourgameon-img.jpg";
import img16 from "../public/assets/bountytissue-img.jpg";
import img17 from "../public/assets/stainly-img.jpg";
import img18 from "../public/assets/bottle-img.jpg";
import img19 from "../public/assets/gloves-img.jpg";
import img20 from "../public/assets/plates-img.jpg";
import img21 from "../public/assets/scrapper-img.jpg";

export default function Home() {
  return (
    <div>
     
    <div className="Shop-sec">
    <Image src={img} alt={"shop-sec"} width={1500} height={400}/>
      </div>
    
         <div className="main-box"> 
        <div className="box1">
             <div className="box1-content">
                        <h2>Gaming Accessories</h2>
                        </div>
                   
            <div className="box1-img1"> 
            <Image src={img1} alt={"headset"} width={220} height={115}  className="mt-20"/>      
           <p>Headsets</p>
            </div>
            <div className="box1-img2">
            <Image src={img2} alt={"keyboard"} width={220} height={115}  className="mt-20"/>
                <p>Keyboards</p>
            </div>
            <div className="box1-img3">
            <Image src={img3} alt={"Computermice"} width={220} height={115} className="mt-20"/>
                <p>Computermice</p>
            </div>
            <div className="box1-img4">
            <Image src={img4} alt={"Chairs"} width={220} height={115} className="mt-20"/>
                <p>Chairs</p>
            </div>
            <span id="details">see more</span>
        </div>
      
        
           
           {/* <!-- div for box2 --> */}
           <div className="box2">
            <div className="box2-content">
                <h2>Shop deals in Fashion</h2>
            </div>
            <div className="box2-img4">
            <Image src={img5} alt={"Jeans under $50"} width={220} height={115}  className="mt-20"/>
                <p>Jeans under $50</p>
           </div>
           <div className="box2-img2">
           <Image src={img6} alt={"Tops under $25"} width={220} height={115}  className="mt-20"/>
            <p>Tops under $25</p>
       </div>
       <div className="box2-img3">
               <Image src={img7} alt={"Dresss under $30"} width={220} height={115}  className="mt-20"/>
        <p>Dresss under $30</p>
    </div>
    <div className="box2-img4">
    <Image src={img8} alt={"Shoes under $50"} width={220} height={115}  className="mt-20"/>
        <p>Shoes under $50</p>
    </div>
    <span id="details2" >See all details</span>
                </div>
               

                {/* <!-- div for box3  --> */}
         <div className="box3">
            <div className="box3-content">
                <h3>Refresh Your Space</h3>
            </div>            
                  <div className="box3-img1">
                  <Image src={img9} alt={"Dining"} width={220} height={115}  className="mt-20"/>
                    <p>Dining</p>
                  </div>     
                 <div className="box3-img2">
                 <Image src={img10} alt={"Home"} width={220} height={115}  className="mt-20"/>
                    <p>Home</p>
                 </div>
                 <div className="box3-img3">
                 <Image src={img11} alt={"Kitchen"} width={220} height={115}  className="mt-20"/>
                    <p>Kitchen</p>
                 </div>
                 <div className="box3-img4">
                 <Image src={img12} alt={"Health & Beauty"} width={220} height={115}  className="mt-20"/>
                    <p>Health & Beauty</p>
                 </div>
                      <span id="details3">See more</span> 
                      </div>
                
                      </div>
                     
                  
               
                    {/* <!--div for box4  --> */}
                    
    <div className="shopware">
    <div className="box4">
    <div className="box4-content">
        <h2>Toys under $25</h2>
    </div>
    <div className="box4-img1">
    <Image src={img13} alt={"Toys under $25"} width={450} height={300}  className="mt-6"/>
    </div>
    <span id="details4">Shop now</span>
    </div>
   
      {/* <!--div for box5  --> */}
    <div className="box5">
        <div className="box5-content">
            <h2>Beauty steal under $25</h2>
        </div>
        <div className="box5-img1">
        <Image src={img14} alt={"Health & Beauty"} width={450} height={300}  className="mt-6"/>
        </div>
        <span id="details5">Shop now</span>
        </div>
          {/* <!--div for box6  --> */}
        <div className="box6">
            <div className="box6-content">
                <h2>Get your game now</h2>
            </div>
            <div className="box6-img1">
            <Image src={img15} alt={"Shop Gaming"} width={450} height={300}  className="mt-6"/>
            </div>
            <span id="details6">Shop Gaming</span>
            </div>
            </div> 
    
    <div className="kitchen-dining">
    <div className ="Box7">
        <h2>Best Sellers in Kitchen & Dining</h2></div>
        <div className="box7-content">
                <div className="box7-img1">
                <Image src={img16} alt={"bountytissue"} width={250} height={400}/>
                </div>               
                <div className="box7-img2">
                <Image src={img17} alt={"stainly"} width={250} height={400}  />
                </div>
                <div className="box7-img3">
                <Image src={img18} alt={"bottle"} width={250} height={400}/>
                </div>
                <div className="box7-img4" >
                <Image src={img19} alt={"gloves"} width={250} height={400}  />
                </div>
                <div className="box7-img5">
                <Image src={img20} alt={"plates"} width={250} height={400}  />
                </div>
                <div className="box7-img6">
                <Image src={img21} alt={"scrapper"} width={250} height={400} />
                </div>
            </div>
        </div>
        </div>
    
        
    
  );
}
