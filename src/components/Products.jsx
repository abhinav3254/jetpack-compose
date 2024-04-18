import { useNavigate } from "react-router-dom"
import movies from '../assets/movies.json'

const Products = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-wrap gap-5 p-1 items-center justify-start">
                {movies.map((movie, key) => (
                    <div key={key} onClick={() => navigate('order-summary')} className="w-[180px] h-[260px] border border-black text-center">
                        <img className="h-[90%] object-cover" src={movie.images[1]} alt="" />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Products