import React, { Component } from "react";

class ProductsList extends Component {

    constructor() {
        super();
        this.AddCartEvent = this.AddCartEvent.bind(this); 
    }

    AddCartEvent(item) {
        this.props.UpdateToCartList(item);
    }

    render() {
        var listItems = this.props.Products.map(function(item) {
            return (
              <section class="col-md-4 text-center tmargin-bottom">
                <div class="card tcard"> 
                    <div class="card-header tprod-heading">
                        <h6>{item.productName}</h6>
                    </div>
                    <div class="card-body"> 
                        <p>
                            <img src={item.productImage} 
                                alt="Image Not Found"
                                class="img-dimensions" ></img>
                        </p>
                        <p>
                            ${item.price}
                        </p>
                        <button aria-label="Add to Cart" type="button" 
                            class="btn btn-primary btn-sm tbutton-round"
                            onClick={()=> this.AddCartEvent(item)}>
                            Add to Cart
                        </button> 
                    </div>
                </div>
              </section> 
            ); 
          },this)
        return (
                <div>
                    <h5>Product List</h5>
                    <hr/>
                    <div class="row">
                        {listItems}
                    </div>
                </div>);
    }
}

export default ProductsList
