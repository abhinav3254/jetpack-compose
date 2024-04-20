import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import moviesJson from '../assets/movies.json'

const PostDetails = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const selectedMovie = moviesJson.find(movie => movie.id === id);
        setMovie(selectedMovie);
    }, [id]);

    return (
        <div>
            <div>PostDetails {id}</div>
            {!movie && (
                <div>loading...</div>
            )}
            {movie && (
                <div>
                    <img src={movie.images[0]} alt="" />
                </div>
            )}
        </div>
    )
}

export default PostDetails