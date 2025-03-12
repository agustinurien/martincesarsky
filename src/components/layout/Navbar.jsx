import "./navbar.css";
import { useState } from "react";
import logo from "../../../public/images/logo.jpg";

const Navbar = () => {
  const [linkSelected, setLinkSelected] = useState("home");

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "quienes", label: "Quienes somos", href: "#quienes" },
    { id: "equipo", label: "Equipo", href: "#equipo" },
    {
      id: "propiedades",
      label: "Propiedades",
      href: "https://www.globalreddeinmobiliarias.com/",
    },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo.src} height={50} width={50} alt="Logo de la empresa" />
      </div>

      <div className="navLinksContainer">
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.id}>
              {linkSelected === link.id && <div className="imgContainer"></div>}
              <a
                href={link.href}
                onClick={() => setLinkSelected(link.id)}
                style={{ color: linkSelected === link.id && "white" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
