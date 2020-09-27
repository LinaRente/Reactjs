import React, { Component } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
class Add extends Component {
    // constructor() {
    //     super()
    //     this.updateInput = this.updateInput.bind(this)
    //     this.updatePrice = this.updatePrice.bind(this)
    //     this.submitForm = this.submitForm.bind(this)
    // }
    // state = {
    //     input: "",
    //     price: 1
    // }
    // updateInput(evt) {
    //     this.setState({ items: evt.target.value }, () => {
    //         console.log(this.state.input)
    //     })
    // }
    // updatePrice(evt) {
    //     this.setState({ Slider: evt.target.value }, () => {
    //         console.log(this.state.Slider)
    //     })
    // }
    // submitForm(evt) {
    //     this.setState({ Slider: evt.target.value }, () => {
    //         console.log(this.state.Slider)
    //     })
    // }
    render() {
        return (
            <div className="container" >
                <form className="form-inline " >
                    {/* <input input={this.state.input} type="text" onChange={this.updateInput} className="form-control" placeholder="item" /> */}
                    {/* <button type="submit" className="btn btn-primary " onClick={this.submitForm}>Add</button> */}
                    <h1>Add</h1>
                </form>
                {/* <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.updatePrice}>
                </Slider> */}
            </div>
        )
    }
} export default Add