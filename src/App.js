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
      { name: "Office Chair", sold: false, storeValue: 24.00, value: 12.00, category: "Home", images: ["chair.png"] },
      { name: "Vacuum Cleaner", description: "POLTI Forzaspira C110 Plus (A ‐ 80 dB)", sold: true, storeValue: 71.99, value: 35.00, category: "Home", images: ["vacumcleaner.jpg"] },
      { name: "Abs Roller", sold: false, storeValue: 10.00, value: 5.00, category: "Gym", images: ["absroller.png"] },
      { name: "Massage Roller", sold: false, storeValue: 9.00, value: 4.50, category: "Gym", images: ["massage_roller.png"] },
      { name: "Gym Carpet 8x tiles", sold: false, storeValue: 45.00, value: 25.00, category: "Gym", images: [""] },
      { name: "Dumbbel Set 50kg Max + 2 bars", description: "Used for only 2 months", sold: false, storeValue: 60.00, value: 33.00, category: "Gym", images: ["dumbbell1.png", "dumbbell2.png"] },
      { name: "Vida XL. Flywheel ", description: "Used for only 2 months, brand new with Computer functions. Bottle holder and belt drive", sold: false, storeValue: 165.00, value: 92.00, category: "Gym", images: ["byke.png"] },
      { name: "Pilates ball ", description: "With inflatter", sold: false, storeValue: 8.00, value: 5.00, category: "Gym", images: ["pilatesball.png"] },
    ];
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          Selling
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

