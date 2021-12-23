import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            {"-"}
            <Link to='/discover'>Discover</Link>
            {"-"}
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavBar;