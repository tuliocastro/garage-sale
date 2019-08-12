import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    render() {

        const product = this.props.product;

        return (

            <div key={this.props.key} className={"Product " + (this.props.product.sold ? "sold" : "")} >

                <span className="sold-tape">sold</span>

                <label className="title">{this.props.product.name}</label>

                <div className="thumbnail">

                    <img src={'imgs/' + this.props.product.images[0]} alt="img" />

                </div>

                <p className="description">{this.props.product.description}</p>

                <div className="prices">
                    <label className="store">We paid: <span>€{product.storeValue}</span>.00</label>
                    <label className="our">Selling for: <span>€{product.value}</span>.00</label>
                </div>
            </div>

        );

    }
}