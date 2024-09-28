import React from 'react';
import '../css/GreetingCard.css';

const GreentingCard = ({tumbnail, title, description}) => {
    return (
        <div className="greeting-card">
            <img src={tumbnail} alt={title} className="profile-thumbnail"/>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GreentingCard;