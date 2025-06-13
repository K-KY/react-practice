import React, {useCallback, useEffect, useState} from 'react';
import axios from "../api/axios";
import "./Row.css"

const Row = ({title, id, fetchURL}) => {
    const [movies, setMovies] = useState([])


    const fetchMovie = useCallback(async () => {
            const response = await axios.get(fetchURL);
            setMovies(response.data.results);
        }, [fetchURL]
    );

    useEffect(() => {
        fetchMovie();
    }, [fetchMovie]);

    return (
        <div>ROW
            <h1>{title}</h1>
            <div className={"slider"}>
                <div className={"slider__arrow-left"}>
                    <span className={"arrow"}>
                        {"<"}
                    </span>
                </div>
                <div id={id} className={"row__posters"}>
                    {movies.map(movie => (
                        <img className={"row__poster"} key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                             alt={movie.name}/>
                    ))}
                </div>

                <div className={"slider__arrow-right"}>
                    <span className={"arrow"}>
                        {">"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Row;