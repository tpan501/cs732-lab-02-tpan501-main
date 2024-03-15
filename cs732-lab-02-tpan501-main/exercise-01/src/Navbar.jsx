import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
export default function Navbar() {
    return (
        <nav className={styles.navBar}>
        <NavLink to="/" className={({isActive}) => (isActive?styles.activeLink:undefined)}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive?styles.activeLink:undefined)}>About</NavLink>
        </nav>
    );
}