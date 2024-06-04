import React from 'react';

class App extends React.Component {
    state = {
        product: "Lenova ryzen 5",
        price: 30000,
        inputValue: '' // Add state to store input value
    };

    // No need for constructor to bind methods

    render() {
        return (
            <>
                <h2>Flipkart Big Billion Days</h2>
                <p>Get 20% off on branded laptops by applying coupons</p>
                <h4>Product: {this.state.product}</h4>
                <h4>Actual price: {this.state.price}</h4>
                <input id='price' type='' value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.updatePrice}>Add to Cart</button>
            </>
        );
    }

    updatePrice = () => {
        // Update state using setState
        this.setState({
            price: this.state.inputValue
        });
    };

    handleInputChange = (event) => {
        // Update inputValue state when input value changes
        this.setState({
            inputValue: event.target.value
        });
    };
}

export default App;
