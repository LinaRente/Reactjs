import React from 'react';
import Card from '../components/product/Card'



class Pay extends React.Component {

    state = {
        basket: [],
        total: 0,
        totalVat: 0,
        totalEcoTax: 0
    }

    onClickProduct(name, price) {
        console.log("test ", name, price);
    }

    renderCards() {
        return this.props.items.map((elem, index) => {
            return <Card key={index} itemName={elem.itemName} price={elem.price} onClickFn={this.onClickProduct}></Card>
        })

    }
    render() {
        return (
            <div className='container-sm'>
                <h1 className='titlesStyle'>Pay</h1>
                <div> Total : {this.state.total} €</div>
                {this.renderCards()}
            </div>
        )
    }
}
export default Pay;