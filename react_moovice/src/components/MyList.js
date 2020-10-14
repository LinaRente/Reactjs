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