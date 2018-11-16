import React from 'react';
import ReactDOM from 'react-dom';
import products from './data/products';
import ProductsList from './components/ProductsList';
import CartList from './components/CartList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

class AppComponent extends React.Component {

    constructor() {
        super();
        this.products = products.filter((product) => {
            return product.isPublished == "true";
        });
        this.cart_list = [];
        this.state = {
            products: [],
            cart_list: []
        };
        this.UpdateToCartList = this.UpdateToCartList.bind(this);
        this.RemoveFromCartList = this.RemoveFromCartList.bind(this);
    }

    componentWillMount() { 
        this.SetProducts();
    }
    
    SetProducts() {
        this.setState({products:this.products}); 
    }

    SetCartItems() {
        this.setState({cart_list:this.cart_list});    
    }

    UpdateToCartList(item) {
        this.cart_list.push(item);
        this.products = this.products.filter((product) => {
            return product.productName != item.productName;
        }); 
        this.SetProducts();
        this.SetCartItems(); 
    }

    RemoveFromCartList(item) {
        this.products.push(item);
        this.cart_list = this.cart_list.filter((product) => {
            return product.productName != item.productName;
        }); 
        this.SetProducts(); 
        this.SetCartItems();   
    }

    render() {
        return (<div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <ProductsList Products={this.state.products} 
                                UpdateToCartList={this.UpdateToCartList}/>
                        </div>
                        <hr/>
                        <div class="col-md-3">
                            <CartList CartItems={this.state.cart_list}
                                RemoveFromCartList={this.RemoveFromCartList}/>
                        </div>
                    </div>
                </div>);
    }
}

ReactDOM.render(
    <AppComponent/>,document.getElementById('content')
);