import React, { useState } from "react";

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    try {
      await subscribeToCatalog();
      setSubscribed(true);
    } catch (error) {
      console.error("Error subscribing to catalog", error);
      setSubscribed(false);
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* <div>
        <h4>Contacto</h4>
        <ul>
          <li>Telefono: 12345678</li>
          <li>Email: 0g2zj@example.com</li>
        </ul>
      </div>
      <div>
        <h4>Términos y Condiciones</h4>
        <ul>
          <li>Terminos y Condiciones</li>
        </ul>
      </div>
      <div>
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
      </div> */}
      <div>
        <h4>Suscribete a mi catalogo y enterate cuando tengo mas productos!</h4>
        <button className="subscribe-button" onClick={handleSubscribe}>
          {subscribed ? "✔ Suscrito" : "Suscribirme"}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
