import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className='flex justify-center py-2'>
            <ul className='flex justify-between w-1/2'>
                <li className='cursor-pointer'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to='/post'>Post</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav