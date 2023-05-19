import React from "react";

function Card (props) {
    return (
        <article className="element">
                <img className="element__image" src={props.link} alt={props.name} />
                <div className="element__place">
                    <h2 className="element__title">{props.name}</h2>
                    <div className="element__like-box">
                        <button className="element__button-like" type="button"></button>
                        <p className="element__like-length">{props.like}</p>
                    </div>
                </div>
                <button className="element__button-trash " type="button"></button>
        </article>
    )
}

export default Card;