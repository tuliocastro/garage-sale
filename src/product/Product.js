import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        }
    }

    toggleDetail(product) {
        product.showDetail = !product.showDetail;
        this.setState({ showDetail: product.showDetail });
    }

    close() {
        this.setState({ showDetail: false });
    }

    render() {

        const product = this.props.product;

        return (

            <div>
                <div key={this.props.key} className={"Product " + (product.sold ? " sold" : "")} onClick={this.toggleDetail.bind(this, product)} >

                    <span className="sold-tape">sold</span>

                    <label className="title">{this.props.product.name}</label>

                    <div className="thumbnail">

                        <img src={'imgs/' + this.props.product.images[0]} alt="img" />

                        <p className="description">{this.props.product.description}</p>

                    </div>

                    <div className="prices">
                        <label className="paid">We paid: <span>€{product.storeValue}</span></label>
                        <label className="now">Selling for: <span>€{product.value}</span></label>
                        <label className="percentage">{(100 - (product.value * 100 / product.storeValue)).toFixed(0)}% OFF</label>
                    </div>

                </div>


                <div className={"thumbnails" + (this.state.showDetail ? " show-detail" : "")}>

                    <div className="button-close" onClick={this.toggleDetail.bind(this, product)}>x</div>

                    <div className="images">
                        {
                            product.images.map((image, key) =>
                                <img src={"imgs/" + image} key={key} alt="thumbnail" />
                            )
                        }
                    </div>

                </div>

            </div>
        );

    }
}