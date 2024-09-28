import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ItemCard.css';

const ItemCard = ({ id, thumbnail, title, price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${id}`);
    }
    return (
        <div className="item-card" onClick={handleClick}>
            <img src={thumbnail} alt={title} className="item-image" />
            <div className="item-footer">
                <p>{title}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default ItemCard;