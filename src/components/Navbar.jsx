import lucreLogo from "/logoLucre.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={lucreLogo} className="logoimg" alt="Lucre logo" />
            </Link>
            <div className="linksNav">
                <NavLink className="link" to="/">
                    Projects
                </NavLink>
                <NavLink className="link" to="/gallery">
                    Gallery
                </NavLink>
                <NavLink className="link" to="/about">
                    About
                </NavLink>
            </div>
        </nav>
    );
}
