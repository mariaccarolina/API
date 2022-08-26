import React, {Component} from "react"
import { BrowserRouter,Link, Routes,Route } from "react-router-dom"
import Home from "../Components/Home.js"
import Filmes from "../Components/Filmes.js"
import Series from "../Components/Series.js"

export default class App extends Component{

    render(){
        return(
            <BrowserRouter>
            <nav>
                <ul>
                    <li>
                       <Link to ="/" > Home</Link>
                    </li>
                    <li>
                    <Link to ="/filmes" > Filmes</Link>
                    </li>
                    <li>
                    <Link to ="/series"> Séries</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes" element={<Filmes/>}/>
                <Route path="/series" element={<Series/>}/>
            </Routes>
            </BrowserRouter>
        )
    }
}