import "./navbar.css";
import { useState, useEffect } from "react";
import logo from "../../../public/images/logo.jpg";
import logo2 from "../../../public/images/logo3.jpg";

const Navbar = () => {
  const [linkSelected, setLinkSelected] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo); // Estado para el logo

  const sendToLink = () => {
    window.location.href = "/";
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth < 710) {
        setCurrentLogo(logo2);
      } else {
        setCurrentLogo(logo);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Llamamos a handleResize una vez para establecer el logo al cargar la página
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "quienes", label: "Quienes somos", href: "#quienes" },
    { id: "equipo", label: "Equipo", href: "#equipo" },
    {
      id: "propiedades",
      label: "Propiedades",
      href: "https://www.zonaprop.com.ar/inmobiliarias/globlal-red-de-inmobiliarias_17020921-inmuebles.html",
    },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="logoContainer">
        <img
          onClick={() => sendToLink()}
          src={currentLogo.src}
          height={50}
          width={50}
          alt="Logo de la empresa"
        />
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
                {...(link.id === "propiedades" && { target: "_blank" })}
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
