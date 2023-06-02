import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup (props) {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setTitle('');
        setLink('');
    }, [props.isOpen])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleLinkValue = (e) => {
        setLink(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        
        props.onAddPlace({
            name: title,
            link
        })
        
        props.onClose();
    }

    return (
        <PopupWithForm name='form-add-photo' title='Новое место' textButton={props.isLoading ? 'Сохранение...' : 'Создать'} 
        isOpen={props.isOpen} onClose={props.onClose} handleSubmit={handleSubmit}>
                        <label htmlFor="popup__input-title-pictire">
                            <input 
                            onChange={handleTitleChange} 
                            className="popup__input popup__input_type_title" 
                            id="popup__input-title-pictire" 
                            minLength="2" maxLength="30" 
                            name="title" type="text" placeholder="Название" 
                            value={title || ''} 
                            required />
                            <span className="popup__input-error popup__input-title-pictire-error"></span>
                        </label>
                        <label htmlFor="popup__input-link">
                            <input 
                            onChange={handleLinkValue} 
                            className="popup__input popup__input_type_link" 
                            id="popup__input-link" 
                            name="link" type="url" placeholder="Ссылка на картинку" 
                            value={link || ''} 
                            required />
                            <span className="popup__input-error popup__input-link-error"></span>
                        </label>
        </PopupWithForm>
    )
} 

export default AddPlacePopup;