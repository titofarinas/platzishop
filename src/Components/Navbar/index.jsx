import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Shopi</NavLink></li>
            <li><NavLink to="/">All</NavLink></li>
            <li><NavLink to="/clothes">Clothes</NavLink></li>
            <li><NavLink to="/Electronics">Electronics</NavLink></li>
            <li><NavLink to="/Furnitures">Furnitures</NavLink></li>
            <li><NavLink to="/toys">Toys</NavLink></li>
        </ul>

        <ul>
            <li>titofarinas@outlook.com</li>
            <li><NavLink to="/my-orders">My Orders</NavLink></li>
            <li><NavLink to="/my-account">My Account</NavLink></li>
            <li><NavLink to="/sign-in">Sign In</NavLink></li>
            <li>🛒 9</li>            
        </ul>
    </nav>
  )
}
