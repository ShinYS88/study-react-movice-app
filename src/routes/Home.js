import React from 'react';
import Axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await Axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        console.log(movies);
        // this.setState({ movies: movies, isLoading:false });
        this.setState({ movies, isLoading: false });

    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;

        console.log(movies);
        return (
            <section className="container">
                {isLoading ? (
                    <div className="lodder">
                        <span className="lodder__text">
                            loadding...
                        </span>
                    </div>
                ) : (
                        <div className="movies">

                            {
                                movies.map(movie => {
                                    // console.log(movie);
                                    return (
                                        <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                                    )
                                })
                            }

                        </div>
                    )
                }
            </section>
        );
    }

}

export default Home;