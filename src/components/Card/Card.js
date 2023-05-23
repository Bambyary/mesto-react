import React from "react";

function Card (props) {
    const handleClick  = () => {
        props.onCardClick(props.card);
    }
    
    return (
        <article className="element">
                <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
                <div className="element__place">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__like-box">
                        <button className="element__button-like" type="button"></button>
                        <p className="element__like-length">{props.card.like}</p>
                    </div>
                </div>
                <button className="element__button-trash " type="button"></button>
        </article>
    )
}

export default Card;