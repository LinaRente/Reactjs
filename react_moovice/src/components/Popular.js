import React, { Component } from 'react'
import { API_KEY } from '../service/network'
import placeholder from '../img/placeholder.png'
import Card from './movie/Card'

class Popular extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        // console.log(API_KEY)
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                // console.log('Popular.jsx json.results', json.results);
                // console.log('Popular.jsx json.results typeof', typeof json.results);

                const movies = json.results.map((elem) => {
                    // console.log('my elements',elem);

                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder
                    }
                })
                // console.log('my movies', movies)  
                this.setState({ movies })
            })
    }

    render() {
        // console.log('Popular render', this.state);
        const {
            movies
        } = this.state

        return (
            <div className="row">
                {movies.map((elem, index) => {
                    // console.log('Popular render map', elem);
                    return (
                        <div key={index} className="col-6">
                            <Card title={elem.title} description={elem.description} imgUrl={elem.imgUrl} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Popular;
