import { useEffect, useState } from "react"
import type { Movie, MovieResponse } from "../types/movies"
import MovieCard from "../components/MovieCard"
import axios from 'axios'

export default function MoviePage () : Element {
    // 영화 담는 데이터 만들기
    const [movies, setMovies] = useState<Movie[]>([]);

    // 데이터 불러오기
    useEffect (() : void => {
        const fetchMovies = async () : Promise<void> => {
        const {data} = await axios.get<MovieResponse>(
            'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
        {
            headers : {
                Authorization : `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
        }
    );
        

        setMovies(data.results); // data.result를 movies에 넣음
        };
       
        fetchMovies();
    }, []);


    return (
        <div className="p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        xl:grid-cols-6">
            {movies.map((movie): React.ReactElement => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

// axios 데이터에 대한 결과값이 data 안에 담겨 옴 -> 
//     const {data} = await axios(
//         'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
//     {
//         headers : {
//             Authorization : `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
//         },
//     }
 // ); 이렇게 하면 바로 구조분해 할당으로 result 받아올 수 있음