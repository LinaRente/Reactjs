import React, { Component } from 'react';
import Slider from './core/Slider'



class Add extends Component {


    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)

        this.state = {
            input: "",
            price: 1,
        }
    }
    updateInput(evt) {
        this.setState({
            input: evt.target.value
        }, () => {
            // console.log(this.state.input)
        })
    }
    updatePrice(val) {
        this.setState({
            price: val
        }, () => {
            // console.log(this.state.price)
        })
    }
    submitForm() {
        this.props.callback(this.state.input, this.state.price)
    }

    handleClick = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-sm Add" >
                <form className="form-inline " onClick={this.handleClick}>
                    {/* <span className="form-inline"> */}
                    <input type="text" input={this.state.input} onChange={this.updateInput} placeholder="item" className="form-control" />
                    <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Add</button>
                    {/* </span> */}
                </form>
                {/* preventDefault()  */}
                <Slider max={this.props.max}
                    min={this.props.min}
                    value={this.state.price}
                    onChange={this.updatePrice} />
                <p>{this.state.price}€</p>
            </div>
        )
    }
} export default Add