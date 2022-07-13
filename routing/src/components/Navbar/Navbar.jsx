import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'activePage' : ''}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'activePage' : ''}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/trabajos" className={({ isActive }) => isActive ? 'activePage' : ''}>Trabajos</NavLink>
                </li>

            </ul>
        </nav >
    );
}

export default Navbar;