import React from "react";

//class CartItems extends React.Component{

const CartItems = (props) => {
  //State : It is a simple javascript object used to store data.

  // constructor() {
  //     super();

  //     this.state = {
  //         price: 49999,
  //         title: 'Mobile Phone',
  //         qty: 1,
  //         img: ''
  //     }
  // }

  //Function to increase Qty , We used arrow function because it doesnot have its own 'this', so there is no
  //confusion and we don't get undefined when this is used.

  // increaseQty = () =>
  // {
  //     //You may think that to increase qty by 1 we can do this.state.qty+=1; this will work but react wouldn't know
  //     // that it has to re-render the page and that something has changed in state. For this React has provided us
  //     // with setState(). It is inherited from the React.component.

  //     //Method-1 of using setState() -> By passing object
  //     // this.setState({
  //     //     qty: this.state.qty+1    // this will merge this object with the state and it will do shallow merging.
  //     //                             // It means no other property will be touched instead of Qty while merging.
  //     // });

  //     //Method-2 of Using setState() -> By passing function i.e callback.
  //     this.setState((prevState)=>{
  //         return {
  //             qty: prevState.qty + 1 //this will agin perform shallow merging.
  //         }
  //     })
  // }

  // decreaseQty = () =>
  // {
  //     if(this.state.qty>0)
  //     {
  //         this.setState((prevState)=>{
  //             return {
  //                 qty: prevState.qty - 1
  //             }
  //         });
  //     }
  //     else
  //     {
  //         return;
  //     }
  // }

  //for class component to become react component we have to
  // use render () method and this method return JSX which describe the UI of that component.

  // Object Destructuring so that we dont have to use this.state.title or this.state.qty
  // again and again instead, we can simply use title, qty etc.
  // const {price,title,qty } = this.state;

  //Same is done for props.
  const { price, title, qty, img } = props.product;
  const { increaseQty, decreaseQty, deleteItem } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div> {/* Method 2 of styling */}
        <div style={{ color: "#777" }}>RS {price}</div>
        <div style={{ color: "#777" }}>Oty: {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}

          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            onClick={() => increaseQty(props.product)}
          />

          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => decreaseQty(props.product)}
          />

          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1634106812~hmac=c82500cfb03eb7b8f4b91999e885ed20"
            onClick={() => deleteItem(props.product.id)}
          />
        </div>
      </div>
    </div>
  );
};

//Method-1 Using objects
const styles = {
  image: {
    height: 120,
    width: 150,
    borderRadius: 4,
  },
};

export default CartItems;
