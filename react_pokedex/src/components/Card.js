import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <div>
                <p>name : {this.props.name}</p>
                <p>height : {this.props.height}</p>
                <p>weight : {this.props.weight}</p>
                <p>type : {this.props.type}</p>
            </div>
        )
    }
}
export default Card;