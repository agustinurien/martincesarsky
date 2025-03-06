import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1>Logo</h1>
            </div>

            <div className='navLinksContainer'>
                <ul className='navLinks'>
                    <li><a href=''>Home</a></li>
                    <li><a href='#about'>Quienes somos</a></li>
                    <li><a href='#services'>Equipo</a></li>
                    <li><a href='#contact'>Propiedades</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
