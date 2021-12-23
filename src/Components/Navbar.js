import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink className='navItem' to='/'>Home</NavLink>
            {"-"}
            <NavLink className='navItem' to='/discover'>Discover</NavLink>
            {"-"}
            <NavLink className='navItem' to='/about'>About</NavLink>
        </div>
    )
}

export default NavBar;