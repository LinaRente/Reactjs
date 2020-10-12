import React, { Component } from 'react'

class Card extends Component {

    render() {

        const {   // DESTRUCTURATION PROPS
            title,
            description,
            imgUrl
        } = this.props

        return (
            <div>
                <img src={imgUrl} alt="movie_poster" />
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        )
    }
}
export default Card