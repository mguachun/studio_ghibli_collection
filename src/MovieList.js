import React, { useState, useEffect } from "react";
import HowTo from "./HowTo";
export default function MovieList({ setter }) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const url = "https://ghibliapi.herokuapp.com/films";

        fetch(url)
            .then(response => response.json())
            .then(response => setFilms(response))
    }, []);

    return (
        <div className="films">
            <HowTo />

            {films && films.map(film => (
                <div key={film.id} onClick={e => setter(film)}>
                    <h2 className="list">{film.title}</h2>
                    
                </div>
            ))}



        </div>  
    )
}