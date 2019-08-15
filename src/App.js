import React, { Component } from 'react';
import './App.scss';
import Product from './product/Product';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.products = [
      { name: "Bathroom shelving unit with cabinet", description: "Size: 40x27x134 cm", sold: true, storeValue: 56.00, value: 25.00, category: "Home", images: ["bath_shelving1.webp", "bath_shelving2.webp"] },
      { name: "Living room Coffee Table", description: "Base color: black, Size: 90x46 cm", sold: true, storeValue: 56.00, value: 25.00, category: "Home", images: ["table.jpeg", "table2.jpeg", "coffee_table.webp"] },
      { name: "2x Pouffe", description: "The cover is easy to clean, is removable and can be machine washed. ", sold: false, storeValue: 130.00, value: 80.00, category: "Home", images: ["pouff.jpeg", "pouff2.jpeg", "pouffe1.webp"] },
      { name: "4x Lamp Shade", sold: true, storeValue: 25.00, value: 10.00, category: "Home", images: ["lampshade.png"] },
      { name: "Office Chair", description: "Color red. Structure in metal and light weight.", sold: false, storeValue: 25.00, value: 13.00, category: "Home", images: ["chair.jpeg"] },
      { name: "Vacuum Cleaner", description: "POLTI Forzaspira C110 Plus (A ‐ 80 dB)", sold: true, storeValue: 71.99, value: 35.00, category: "Home", images: ["vacumcleaner.jpg"] },
      { name: "Abs Roller", description: "Two non-skid wheels for added stability. Easy-grip handles to prevent slippage. Strengthen and tone abs, shoulder, arms and back. Lightweight and portable", sold: false, storeValue: 10.00, value: 5.00, category: "Gym", images: ["abs.jpeg", "abs2.jpeg"] },
      { name: "Massage Roller", description: "Great for stretch exercises. Release tight muscles. Use before and after exercise. ", sold: false, storeValue: 10.00, value: 5, category: "Gym", images: ["roller.jpeg", "roller2.jpeg"] },
      { name: "Gym Carpet 8x tiles", description: "Protect the floor from weight damage and use to exercise.", sold: false, storeValue: 45.00, value: 25.00, category: "Gym", images: ["tile.jpeg", "tile2.jpeg", "tile3.jpeg"] },
      { name: "Dumbbel Set", description: "Used for only 2 months, 3 bars + 6 (5kg) + 4 (2.5kg) + 6 (1kg)", sold: false, storeValue: 65.00, value: 33.00, category: "Gym", images: ["dumbbell1.jpeg", "dumbbell2.jpeg", "dumbbell3.jpeg"] },
      { name: "Spinning Bike. Vida XL. Flywheel ", description: "Compact Spinning bike, Perfect for exercise in high intensity. Used for only 2 months, brand new with Computer functions. Bottle holder and belt drive", sold: false, storeValue: 165.00, value: 92.00, category: "Gym", images: ["bike.jpeg", "bike2.jpg","bike3.jpg","bike4.jpg"] },
      { name: "Pilates ball ", description: "Brand new, with inflatter.", sold: false, storeValue: 11.00, value: 6.00, category: "Gym", images: ["ball1.jpeg", "ball2.jpeg", "ball3.jpeg"] },
    ];
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">

          <div className="logo">
            <label className="title">Tulio & Vanessa <span>Garage Sale</span></label>
          </div>

          <div className="intro">

            <p>Hi Guys, these are the items that we are selling before we move.</p>

            <p>If you want any of those, please call us at <span><a href="tel:0830537207" className="badge">083 053 7207</a> (Vanessa) or <span><a href="tel:0833875787" className="badge">083 387 5787</a> (Tulio)</span> </span></p>
          </div>
        </header>

        <section className="Filter">

        </section>

        <section className="products">
          {
            this.products.map((item, key) =>
              <Product product={item} key={key} />
            )
          }
        </section>
      </div>
    );
  }
}

