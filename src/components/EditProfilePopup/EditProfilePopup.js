import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup (props) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
       
        props.onUpdateUser({
            name,
            about: description
        })

        props.onClose();
    }

    return (
        <PopupWithForm name='form-profile' title='Редактировать профиль' textButton={props.isLoading ? 'Сохранение...' : 'Сохранить'} 
            isOpen={props.isOpen} onClose={props.onClose} handleSubmit={handleSubmit}>
            <label htmlFor="popup__input-name">
                <input 
                onChange={handleNameChange} 
                className="popup__input popup__input_type_name" 
                id="popup__input-name" 
                minLength="2" maxLength="40" 
                name="name" type="text" placeholder="Имя" 
                value={name || ''} 
                required />
                <span className="popup__input-error popup__input-name-error"></span>
            </label>
            <label htmlFor="popup__input-profession">
                <input 
                onChange={handleDescriptionChange} 
                className="popup__input popup__input_type_profession" 
                id="popup__input-profession" 
                minLength="2" maxLength="200" 
                name="about" type="text" placeholder="Вид деятельности" 
                value={description || ''} 
                required />
                <span className="popup__input-error popup__input-profession-error"></span>
            </label>
        </PopupWithForm> 
    );
}

export default EditProfilePopup;