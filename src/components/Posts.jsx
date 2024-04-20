import { Link } from 'react-router-dom';
import movies from '../assets/movies.json';

const Posts = (props) => {
    const viewDetails = (id) => {
        <Link to={`post/${id}`}></Link>
    }
    return (
        <div>
            <div className='flex flex-wrap gap-5 p-2'>
                {movies.map((movie) => (
                    <div className='text-center h-[320px] w-[15%] border cursor-pointer'>
                        <img className='h-[80%] w-[100%] object-cover' src={movie.images[1]} alt="" />
                        <p className='text-[20px]'>{movie.title}</p>
                        <Link to={`/post/${movie.id}`}>
                            <button>view details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts