import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }


  return (
    <div className="page">
        <Header />

        <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
        <Footer />
 
        <PopupWithForm name='form-profile' title='Редактировать профиль' textButton='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                        <label htmlFor="popup__input-name">
                            <input onChange={(e) => e.target.value} className="popup__input popup__input_type_name" id="popup__input-name" minLength="2" maxLength="40" name="name" type="text" placeholder="Имя" value="Жак-Ив Кусто" required />
                            <span className="popup__input-error popup__input-name-error"></span>
                        </label>
                        <label htmlFor="popup__input-profession">
                            <input onChange={(e) => e.target.value} className="popup__input popup__input_type_profession" id="popup__input-profession" minLength="2" maxLength="200" name="about" type="text" placeholder="Вид деятельности" value="Исследователь океана" required />
                            <span className="popup__input-error popup__input-profession-error"></span>
                        </label>
        </PopupWithForm>

        <PopupWithForm name='form-add-photo' title='Новое место' textButton='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                        <label htmlFor="popup__input-title-pictire">
                            <input onChange={(e) => e.target.value} className="popup__input popup__input_type_title" id="popup__input-title-pictire" minLength="2" maxLength="30" name="title" type="text" placeholder="Название" value="" required />
                            <span className="popup__input-error popup__input-title-pictire-error"></span>
                        </label>
                        <label htmlFor="popup__input-link">
                            <input onChange={(e) => e.target.value} className="popup__input popup__input_type_link" id="popup__input-link" name="link" type="url" placeholder="Ссылка на картинку" value="" required />
                            <span className="popup__input-error popup__input-link-error"></span>
                        </label>
        </PopupWithForm>

        <PopupWithForm name='form-avatar' title='Обновить аватар' textButton='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                        <label htmlFor="popup__input-avatar-pictire">
                            <input onChange={(e) => e.target.value} className="popup__input popup__input_type_avatar" id="popup__input-avatar-pictire" minLength="2" name="avatar" type="text" placeholder="Введите ссылку" value="" required />
                            <span className="popup__input-error popup__input-avatar-pictire-error"></span>
                        </label>
        </PopupWithForm>

        <PopupWithForm name='form-confirm' title='Вы уверены?' textButton='Да'></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

    </div>
  );
}

export default App;