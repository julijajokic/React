import { Link } from "react-router-dom";
import logo from "../images/logo2.png"

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='slika' />
                </div>

            </div>
            <ul className="nav-links">
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/">Početna</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/kontakt">Kontakt</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/narucivanje">Naručivanje</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;