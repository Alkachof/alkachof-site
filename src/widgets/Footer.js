import React, { useState } from 'react';
import { subscribeToCatalog } from '../services/subscriptionService'
import '../css/Footer.css';

const Footer = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = async () => {
        try {
            await subscribeToCatalog();
            setSubscribed(true);
        }catch (error) {
            console.error('Error subscribing to catalog', error);
            setSubscribed(false);
        }
    }

    return (
        <footer className="footer">
            <h3>Suscribete a mi catalogo y enterate cuando tengo mas productos!</h3>
            <button className="subscribe-button" onClick={handleSubscribe}>
                {subscribed ? '✔ Suscrito' : 'Suscribirme'}
            </button>
        </footer>
    );
};

export default Footer;