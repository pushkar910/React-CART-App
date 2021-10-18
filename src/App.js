import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 50000,
          title: "IPhone",
          qty: 1,
          img: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?cs=srgb&dl=pexels-martin-sanchez-5750001.jpg&fm=jpg",
          id: 1,
        },
        {
          price: 15000,
          title: "Apple Watch",
          qty: 1,
          img: "https://images.pexels.com/photos/5081931/pexels-photo-5081931.jpeg?cs=srgb&dl=pexels-cottonbro-5081931.jpg&fm=jpg",
          id: 2,
        },
        {
          price: 70000,
          title: "MacBook Air",
          qty: 1,
          img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty > 0) products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };

  handleDeleteItem = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach((item) =>{
      count+= item.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let price = 0;

    products.forEach((item) =>{
      price+= item.qty * item.price;
    })

    return price;
  }
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        
        <Cart
          products={products}
          increaseQty={this.handleIncreaseQty}
          decreaseQty={this.handleDecreaseQty}
          deleteItem={this.handleDeleteItem}
        />

        <div style={ {fontSize:20, padding:10, backgroundColor: 'cyan', width:250, marginTop: 40, marginLeft:20} }>TOTAL PRICE : RS {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
