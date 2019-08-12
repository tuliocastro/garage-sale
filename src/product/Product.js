import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    render() {

        return (

            <div key={this.props.key} className="Product" >

                <div className="thumbnail">

                </div>

                <label>{this.props.product.name}</label>

            </div>

        );

    }
}