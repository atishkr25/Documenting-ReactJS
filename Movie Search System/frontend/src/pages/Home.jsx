import Moviecard from "../Components/Moviecard";
import { useState, useEffect } from "react";
import { getPopularmovies, searchMovies } from "../Service/Api";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularmovies = async () => {
            try {
                const popularmovie = await getPopularmovies();
                // Artificial delay to show loading state
                await new Promise(resolve => setTimeout(resolve, 2500));
                setMovies(popularmovie);
            } catch (err) {
                console.log(err);
                setError("Something went wrong while loading movies");
            } finally {
                setLoading(false);
            }
        };

        loadPopularmovies();
    }, []);



    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        try {
            setLoading(true);
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.log(err);
            setError("Search failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && (<div className="error-message-div"> {error} </div>)}

            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">थोड़ा सा इंतज़ार कर लाडले</p>
                </div>
            ) :
                (<div className="movies-grid">
                    {movies.map(movie => (
                        <Moviecard
                            movie={movie}
                            key={movie.id}
                        />
                    ))
                    }
                </div>)}

        </div>
    );
}

export default Home;