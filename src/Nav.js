import './Nav.css';
import logo from "./assets/doge.png";

const Nav = () => {
    return(
        <div className='Nav'>
            <div className='Nav-logo'><img src={logo} alt='logo'/> <span>Dog Finder</span></div>
        </div>
    )
}

export default Nav;