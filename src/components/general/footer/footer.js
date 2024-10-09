import React, { useState } from "react";

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    try {
      setSubscribed(true);
    } catch (error) {
      console.error("Error subscribing to catalog", error);
      setSubscribed(false);
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <h4>Contacto</h4>
        <ul>
          <li>Telefono: 12345678</li>
          <li>Email: 0g2zj@example.com</li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Términos y Condiciones</h4>
        <ul>
          <li>Terminos y Condiciones</li>
          <li>Política de Privacidad</li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Siguenos en nuestras redes sociales</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.x.com">X</a>
          </li>
          <li>
            {" "}
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="footer-content copyright"> 
        © 2024 Alkachof. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
