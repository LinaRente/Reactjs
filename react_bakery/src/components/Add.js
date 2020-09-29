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
            console.log(this.state.input)
        })
    }
    updatePrice(evt) {
        this.setState({
            Slider: evt.target.value
        }, () => {
            console.log(this.state.Slider)
        })
    }
    submitForm(evt) {
        this.setState({
            Slider: evt.target.value
        }, () => {
            console.log(this.state.Slider)
        })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="container" >
                <form className="form-inline " >
                    <input type="text" input={this.state.input} onChange={this.updateInput} placeholder="item" className="form-control" />
                    <button type="submit" className="btn btn-primary " onClick={this.submitForm}>Add</button>
                </form>
                <Slider></Slider>
            </div>
        )
    }
} export default Add