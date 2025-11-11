import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"
import {searchMovie, getPopularMovies} from "../services/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "John Wick" ,release_date: "2020"},
        {id: 2, title: "Spongebob" ,release_date: "2006"},
        {id: 3, title: "John Wick" ,release_date: "2011"}
    ]

    const handleSearch = (e) => {
        alert(searchQuery)
        e.preventDefault()
        setSearchQuery("------")
    } 
    
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            className="search-input" 
            placeholder="Search for movie..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        
        <div className="movies-grid">
            {movies.map(movie =>
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id}/>))}
        </div>  
    </div>
}

export default Home