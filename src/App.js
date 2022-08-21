import React, { Component } from 'react';
import axios from 'axios'


const FilmesApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=a5e04285a5e5085c51d1ae9fb4ccbccf&language=en-US&page=1'
})


class Movies extends Component {
state={
    movies:[]
}

componentDidMount(){
    this.getMovies()
}

getMovies = async () => {
    const resposta = await FilmesApi.get()
    

    const allFilmes = resposta.data.results.map((item) => {
        return{
          ...item,
          nome:item.original_title
        }
    })
    this.setState({
        movies:allFilmes
    })
    console.log(this.state.movies)
}

    render() {
        return (
            <div>
                {this.state.movies.map((item) => (
                    <ul>
                        <li>{item.nome}</li>
                        <li>{item.overview}</li>
                    </ul>
                ))}
            </div>
        );
    }
}

export default Movies;
