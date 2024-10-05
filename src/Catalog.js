import React from 'react';
import './Catalog.css';
import GreentingCard from './widgets/GreetingCard';
import ItemGrid from './widgets/ItemGrid';
import Footer from './widgets/Footer';


const Catalog = () => {

    const items = [
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 1', price: '$10', id:'1' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 2', price: '$20', id:'2' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 3', price: '$30', id:'3' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 4', price: '$40', id:'4' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 5', price: '$50', id:'5' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 6', price: '$60', id:'6' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 5', price: '$50', id:'5' },
        { thumbnail: 'https://via.placeholder.com/150', title: 'Item 6', price: '$60', id:'6' },
    ];

    return (
        <div className="catalog">
            <GreentingCard
                tumbnail="https://via.placeholder.com/50"
                title="Mi Tienda online"
                description="Ropa Americana y de segunda mano. Nueva mercancia todos los martes."
            />
            <ItemGrid items={items} />
            <Footer />
        </div>
    );
};

export default Catalog;