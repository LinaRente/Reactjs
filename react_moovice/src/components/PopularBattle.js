import React, { Component } from 'react'
import { API_KEY } from '../service/network'
import placeholder from '../img/placeholder.png'
import Card from './movie/Card'



class PopularBattle extends Component {

    constructor() {
        super()

        this.choseFilm = this.choseFilm.bind(this)

        this.state = {
            currentPage: 1,
            movies: []
        }
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
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder
                    }
                })
                // console.log('my movies', movies)  
                this.setState({ movies })
            })
    }

    choseFilm(id) {
        // console.log('choseFilm', id);
      
        let myList = JSON.parse(localStorage.getItem('my-list')) || [];

        if(!myList.includes(id)) { 
            myList.push(id)
            // console.log('myList', myList);
            localStorage.setItem('my-list', JSON.stringify(myList))
        }
        
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    render() {

        const {
            movies,
            currentPage
        } = this.state

        const secondIndex = currentPage * 2 - 1
        const fistIndex = secondIndex - 1

        const firstMovie = movies[fistIndex]
        // console.log('firstMovie', firstMovie);

        const secondMovie = movies[secondIndex]
        // console.log('firstMovie', secondMovie);

        return (
            <div className="row">
                <div className="col-6">
                    <button onClick={() => this.choseFilm(firstMovie.id)}>
                        <Card {...firstMovie} />
                    </button>
                </div>
                <div className="col-6">
                    <button onClick={() => this.choseFilm(secondMovie.id)}>
                        <Card {...secondMovie} />
                    </button>
                </div>
            </div>
        )
    }
}
export default PopularBattle;

/*
20 films:

1er page = 1er film & 2éme film
(num page x 2 = num du 2eme film de chaque bataille)
(num du 1er film = num du 2eme film - 1)
2 = 3 & 4
3 = 5 & 6
....
10 = 19 & 20
*/