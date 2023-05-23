import React from 'react';

function PopupWithForm (props) {
    return (
        <div className={`popup ${props.isOpen && `popup_opened`}`} id={props.name}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form action="#" name={props.name} className="popup__form" id={`popup__${props.name}`} noValidate>
                    <fieldset className="popup__fieldset">
                        {props.children}
                        <button className="popup__button-save" type="submit" id="popup__button-save-add">{props.textButton}</button>
                    </fieldset>
                </form>
                <button className="popup__button-exit" type="button"
                    onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;