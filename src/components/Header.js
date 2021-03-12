import React from 'react';
import '../css/hero.css'
const Header = () => {
    return ( 
        <header className="hero">
            <div className="logo">
                <h2>Tu tienda Online</h2>
            </div>
            <nav className="navegacion">
                <a href='#'>Inicio</a>
                <a href='#'>Productos</a>
                <a href='#'>Carrito</a>
                <a href='#'>Blog</a>
            </nav>
        </header>
     );
}
 
export default Header;