import React, { Component } from 'react';
import './App.scss';
import Product from './product/Product';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.products = [
      { name: "Bathroom shelving unit with cabinet", description: "Size: 40x27x134 cm", sold: true, storeValue: 56.00, value: 25.00, category: "Home", images: ["bath_shelving1.webp", "bath_shelving2.webp"] },
      { name: "Living room Coffee Table", description: "Base color: black, Size: 90x46 cm", sold: false, storeValue: 56.00, value: 25.00, category: "Home", images: ["coffee_table.webp", "coffee_table2.webp"] },
      { name: "2x Pouffe", description: "The cover is easy to clean, is removable and can be machine washed. ", sold: false, storeValue: 130.00, value: 80.00, category: "Home", images: ["pouffe1.webp", "pouffe2.webp"] },
      { name: "4x Lamp Shade", sold: true, storeValue: 25.00, value: 10.00, category: "Home", images: ["lampshade.png"] },
      { name: "Office Chair", description: "Color red. Structure in metal and light weight.", sold: false, storeValue: 25.00, value: 13.00, category: "Home", images: ["chair.png"] },
      { name: "Vacuum Cleaner", description: "POLTI Forzaspira C110 Plus (A ‐ 80 dB)", sold: true, storeValue: 71.99, value: 35.00, category: "Home", images: ["vacumcleaner.jpg"] },
      { name: "Abs Roller", description: "Two non-skid wheels for added stability. Easy-grip handles to prevent slippage. Strengthen and tone abs, shoulder, arms and back. Lightweight and portable", sold: false, storeValue: 10.00, value: 5.00, category: "Gym", images: ["absroller.png"] },
      { name: "Massage Roller", description: "Great for stretch exercises. Release tight muscles. Use before and after exercise. ", sold: false, storeValue: 10.00, value: 5, category: "Gym", images: ["massage_roller.png"] },
      { name: "Gym Carpet 8x tiles", description: "Protect the floor from weight damage and use to exercise.", sold: false, storeValue: 45.00, value: 25.00, category: "Gym", images: [""] },
      { name: "Dumbbel Set (50kg)", description: "Great dumbbell set, with 3 bars included. Set of 50kg of halteres. Used for only 2 months", sold: false, storeValue: 60.00, value: 33.00, category: "Gym", images: ["dumbbell1.png", "dumbbell2.png"] },
      { name: "Spinning Bike. Vida XL. Flywheel ", description: "Compact Spinning bike, Perfect for exercise in high intensity. Used for only 2 months, brand new with Computer functions. Bottle holder and belt drive", sold: false, storeValue: 165.00, value: 92.00, category: "Gym", images: ["byke.png"] },
      { name: "Pilates ball ", description: "Brand new, with inflatter.", sold: false, storeValue: 8.00, value: 5.00, category: "Gym", images: ["pilatesball.png"] },
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

