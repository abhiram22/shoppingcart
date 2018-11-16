import React, { Component } from "react";

class CartList extends Component {

    constructor() {
        super();
        this.RemoveFromCartList = this.RemoveFromCartList.bind(this); 
    }

    RemoveFromCartList(item) {
        this.props.RemoveFromCartList(item);
    }

    render() {
        var listItems = this.props.CartItems.map(function(item) {
            return (
              <div class="row tmargin-bottom tround-border"> 
                <div class="col-md-8">
                        <a href={item.link}>{item.productName}</a>
                </div>
                <div class="col-md-4">
                    <button aria-label="Remove from Cart" type="button" 
                                class="btn btn-secondary btn-sm tbutton-round float-right"
                                onClick={()=> this.RemoveFromCartList(item)}>
                                Remove
                    </button>
                </div>
              </div> 
            ); 
          },this)
        return (
            <div>
                <h5>My Cart ({this.props.CartItems.length})</h5>
                <hr/>
                <p>
                    {listItems}
                </p>
            </div>
        );
    }
}

export default CartList
