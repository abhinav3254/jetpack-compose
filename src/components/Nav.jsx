import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className='flex items-center justify-center'>
                <ul className="flex w-1/4">
                    <li className="hover:text-blue-500 m-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-500 m-1">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-blue-500 m-1">
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav