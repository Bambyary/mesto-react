import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup (props) {

    const [avatar, setAvatar] = React.useState('');
    const inputRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: inputRef.current.value
        })

        props.onClose();
        setAvatar('');
    }

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    }

    return (
        <PopupWithForm name='form-avatar' title='Обновить аватар' textButton={props.isLoading ? 'Сохранение...' : 'Сохранить'} 
            isOpen={props.isOpen} onClose={props.onClose} handleSubmit={handleSubmit}>
                        <label htmlFor="popup__input-avatar-pictire">
                            <input 
                            ref={inputRef}
                            onChange={handleAvatarChange} 
                            className="popup__input popup__input_type_avatar" 
                            id="popup__input-avatar-pictire" 
                            minLength="2" name="avatar" 
                            type="text" placeholder="Введите ссылку" 
                            value={'' || avatar} 
                            required />
                            <span className="popup__input-error popup__input-avatar-pictire-error"></span>
                        </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;