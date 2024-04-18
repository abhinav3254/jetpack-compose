import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className='flex items-center justify-center'>
                <ul className="flex w-1/4">
                    <li className="hover:text-blue-500 m-1">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="hover:text-blue-500 m-1">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="hover:text-blue-500 m-1">
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav