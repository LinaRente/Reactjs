import React, { Component } from 'react'
import { API_KEY } from '../service/network'



class MyList extends Component {

    constructor() {
        super()
        this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
        this.state = {
            movies: [],
            movieIds: this.getFromLocalStorage()
        }
    }

    getFromLocalStorage() {
        let mylist = JSON.parse(localStorage.getItem('my-list')) || [];
        console.log(mylist)

    }

    componentDidMount() {
        console.log(API_KEY)
        const getList = (getMovies) =>
        fetch(`http://api.themoviedb.org/3/movie/${getMovies}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => data)

            const idPromises = this.state.movieIds.map((getMovies) => { 
                
            })
            Promise.all(idPromises)
                .then((getList) => {

                })
                this.setState({
                    movies: getList
                })
                console.log(getList)
    }



    render() {
        return (
            <div>
                <h1>{this.getFromLocalStorage()}</h1>
            </div>
        )
    }
}
export default MyList;