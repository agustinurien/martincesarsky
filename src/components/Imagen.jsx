import { useEffect, useState } from "react";
import img from "../../public/images/imagentotal.jpg";
import "./imagen.css";

const Imagen = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // Ajusta el factor de movimiento
      const y = (e.clientY / innerHeight - 0.5) * 20;

      setOffsetX(x);
      setOffsetY(y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div>
      <img src={img.src} alt="imagen" className="imagen"></img>
    </div>
  );
};

export default Imagen;
