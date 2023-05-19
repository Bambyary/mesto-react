import React from 'react';
import api from '../../utils/api.js';
import Card from '../Card/Card.js';

function Main (props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo().then(response => {
            setUserName(response.name);
            setUserDescription(response.about);
            setUserAvatar(response.avatar);
        }).catch(err => console.log(err));

        api.getCards().then(data => {
            setCards(data.map(card => {
                return {
                    name: card.name,
                    link: card.link,
                    id: card._id,
                    ownerId: card.owner._id,
                    like: card.likes.length
                }
            }));
        }).catch(err => console.log(err));
    }, [])


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-wrapper"
                    onClick={props.onEditAvatar}>
                    <div className='profile__avatar' style={{ backgroundImage: `url(${userAvatar})` }} 
></div>
                </div>
                <div className="profile__info">
                    <div className="profile__flex">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button"
                            onClick={props.onEditProfile}
                            type="button"></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {
                    cards.map(({id, ...props}) => {
                        return (
                            <Card key={id} {...props} />
                        )
                    })
                }
            </section>

        </main>
    );
}

export default Main;