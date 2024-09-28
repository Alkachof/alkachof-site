import React from 'react';
import ItemCard from './ItemCard';
import '../css/ItemGrid.css';

const ItemGrid = ({items}) => {
    return (
        <div className="item-grid">
            {items.map((item, index) => (
                <ItemCard
                    key={index}
                    id={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default ItemGrid;