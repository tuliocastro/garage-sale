import React, { Component } from 'react';
import './App.css';
import Product from './product/Product';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.products = [
      { name: "Bathroom shelving unit with cabinet", sold: true, storeValue: 54.00, value: 25.00 },
      { name: "Living room Coffee Table", sold: false, storeValue: 56.00, value: 25.00 },
      { name: "2x Pouffe", sold: false, storeValue: 130.00, value: 60.00 },
      { name: "4x Lamp Shade", sold: true, storeValue: 25.00, value: 10.00 },
      { name: "Office Chair", sold: false, storeValue: 24.00, value: 12.00 },
      { name: "Vacuum Cleaner", description: "POLTI Forzaspira C110 Plus (A ‐ 80 dB)", sold: true, storeValue: 71.99, value: 35.00 },
      { name: "Abs Roller", sold: false, storeValue: 10.00, value: 5.00 },
      { name: "Massage Roller", sold: false, storeValue: 9.00, value: 4.50 },
      { name: "Gym Carpet 8x tiles", sold: false, storeValue: 45.00, value: 25.00 },
      { name: "Dumbbel Set 50kg Max + 2 bars", sold: false, storeValue: 60.00, value: 33.00 },
      { name: "Vida XL. Flywheel ", description: "Computer functions. Bottle holder and belt drive", sold: false, storeValue: 165.00, value: 92.00 },
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

        <section className="Products">
          {
            this.products.map((item, key) => 
              <Product product={item} key={key}/>
            )
          }
        </section>
      </div>
    );
  }
}

