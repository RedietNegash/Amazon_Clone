import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "../Product/Product";
import HomeCarousel from "./HomeCarousel";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
function Home() {
  return (
    <div className="home ">
      <div className="home__container">
        <HomeCarousel />

        <div className="home__row px-4">
          <Product
            id="12321341"
            title="J.west iPad Air iPad 5th Case, Heavy Duty Luxury Bling Glitter Kickstand Sparkle Three Layers Full-Body Protective Silicone iPad Cover for iPad Air 1st 9.7 inch 2013 (A1474 A1475 A1476) Mint"
            price={511.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61UaA8yOggL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg"
          />
          <Product
            id="49538094"
            title="Up to 20% off home appliances"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/PrimeDay2023/LU_Homepage_SingleCategory_MA_379x304._SY304_CB602996938_.jpg"
          />
        </div>
        <div className="home__row px-4">
          <Product
            id="4903350"
            title="Canon EOS Rebel T7 DSLR Camera Bundle w/ Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 64GB Memory Cards, Wide Angle Lens, Telephoto Lens, 3pc Filter Kit + Accessory Kit"
            price={539.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51XX34d4KbL._AC._SR180,230.jpg"
          />

          <Product
            id="23445939"
            title="
            
            Coffee Bar AccessoriesCoffee Syrup Dispenser for Coffee Bar,YYC Pump w Labels,Glass 4 Pack,16.9oz Bottles"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71CSz0iylKL._AC_SY175_.jpg"
            // image="https://m.media-amazon.com/images/I/61vFUhUMZPS._AC_UL400_.jpg"
          />
          <Product
            id="325454345"
            title="Gildan Blank T-Shirt - Unisex Style 5000 Adult"
            price={7.17}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DPx44cnQL._AC_UX466_.jpg"
          />
        </div>
        <div className="home__row px-4">
          <Product
            id="4903350"
            title="Amazon Echo (3rd generation) I Smart Speker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/716dsQ0YXcL._AC_SY200_.jpg"
          />
          <Product
            id="4903350"
            title="Nike Men's Sportwear Club Shorts Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Ew+yRfqWL._AC_UX522_.jpg"
          />
          <Product
            id="4903350"
            title=""
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/812+Ozp7tdL._AC_SY200_.jpg"
          />

          <Product
            id="23445939"
            title="
            Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71aaOjmFYtL._AC_SY200_.jpg"
            // image="https://m.media-amazon.com/images/I/61vFUhUMZPS._AC_UL400_.jpg"
          />
          <Product
            id="325454345"
            title="Nike Men's Sportwear Club Shorts"
            price={239.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81L2HrJZxgL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row  px-4">
          <Product
            id="4903350"
            title="Amazon Echo (3rd generation) I Smart Speker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="23445939"
            title="
            Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band
           "
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            // image="https://m.media-amazon.com/images/I/61vFUhUMZPS._AC_UL400_.jpg"
          />
          <Product
            id="325454345"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer With k-beater, Dough HooK and Whisk, 5 Litre Glass bowl"
            price={239.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row car px-4">
          <Product
            id="90829332"
            title="Samsung LC49RG9OSSUXEN 49' Curved LED Gaming Monitor- Super ultra wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row  car px-4">
          <Product
            id="3254354345"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
            price={2799.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"
          />

          <Product
            id="12321341"
            title="Fnatic React Gaming Headset for Esports with 53mm Drivers, Metal Frame, Precise Stereo Sound, Broadcaster Detachable Microphone, 3.5mm Jack [PC, PS4, PS5, Xbox ONE, Xbox Series X] [Playstation_4]"
            price={64.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61m-qPp1iLL._AC_SX425_.jpg"
          />

          <Product
            id="90829332"
            title="Samsung LC49RG9OSSUXEN 49' Curved LED Gaming Monitor- Super ultra wide Dual WQHD 5120 x 1440"
            price={109.98}
            rating={4}
            // image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c0687fb7-1fd5-4fc6-99a9-3e4ab31ad840._SL853_FMjpeg_.jpg"
            image="https://m.media-amazon.com/images/I/71Fu5t6nkuL._AC_SY200_.jpg"
          />

          <Product
            id="23445930"
            title="Espresso Machine & Cappuccino Maker with Milk Steamer- 7 pc All-In-One Barista Bundle Set w/Built-In Milk Frother (Inc: Coffee Bean Grinder, Milk Frothing Cup, Spoon/Tamper & 2 Cups), Silve"
            price={219.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71cKsOKSk+L._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
