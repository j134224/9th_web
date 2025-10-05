import { useEffect, useState } from "react"
import type { Movie, MovieResponse } from "../types/movies"
import MovieCard from "../components/MovieCard"
import axios from 'axios'
import { LoadingSpinner } from "../components/LoadingSpinner"
import { useParams } from "react-router-dom"

export default function MoviePage () : Element {
    // 영화 담는 데이터 만들기
    const [movies, setMovies] = useState<Movie[]>([]);
    // 1. 로딩 상태
    const [isPending, setIsPending] = useState(false);

    // 2. 에러 상태
    const [isError, setIsError] = useState(false);

    // 3. 페이지
    const [page, setPage] = useState(1);

    const {category} = useParams<{
        category : string;
    }>();

    // 데이터 불러오기
    useEffect (() : void => {
        const fetchMovies = async () : Promise<void> => {
            setIsPending(true);
        try{
        const {data} = await axios.get<MovieResponse>(
            `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`,
        {
            headers : {
                Authorization : `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
        }
    );
        

        setMovies(data.results); // data.result를 movies에 넣음
        setIsPending(false);
} catch{
    setIsError(true);
} finally {
    setIsPending(false);
}
        };
       
        fetchMovies();
    }, [page, category]);

    if (isError) {
        return (
            <div className="text-red-500 text-2xl">에러가 발생했습니다</div>
        );
    }

    return (
        <>
        <div className='flex justify-center items-center gap-6 mt-5'>
            <button className='bg-[#dda5e3] text-white px-6 py-3 rounded-md shadow-md
            hover:bg-[#b2dab1] transition-all duration-200 disabled:bg-gray-300
            cursor-pointer disable:cursor-not-allowed'
            disabled={page === 1}
            onClick={():void => setPage((prev) : number => prev-1)}>{`<`}</button>
            <span>{page} 페이지</span>
            <button className='bg-[#dda5e3] text-white px-6 py-3 rounded-md shadow-md
            hover:bg-[#b2dab1] transition-all duration-200 cursor-pointer'
            onClick={():void => setPage((prev) : number => prev+1)}>{`>`}</button>
        </div>

        {isPending && (
            <div className='flex item-center justify-center h-dvh'>
                <LoadingSpinner />
            </div>
        )}

        {!isPending && (
        <div className="p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        xl:grid-cols-6">
            {movies.map((movie): React.ReactElement => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        )}

        </>
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