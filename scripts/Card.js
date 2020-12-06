const togglePopup = (popup) => { 
    popup.classList.toggle('popup_is-open'); 
      if(popup.classList.contains('popup_is-open')) { 
        popup.addEventListener('click', outsideClick); 
        document.addEventListener('keydown', escHandler); 
      } else { 
        popup.removeEventListener('click', outsideClick); 
        document.removeEventListener('keydown', escHandler); 
      }; 
  } 

const escHandler = (evt) => { 
    const openPopup = document.querySelector('.popup_is-open'); 
      if(evt.key === "Escape") { 
      togglePopup(openPopup); 
    } 
  } 
  
const outsideClick = (evt) => { 
    togglePopup(evt.target); 
  } 

const imagePopup = document.querySelector('.popup_type_image'); 

class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

    _getPlaceTemplate (){
        return document.querySelector(this._templateSelector).content.querySelector('.places__item').cloneNode(true);
    }

    _setEventListeners() {
        const placeLikeButton = this._placeElement.querySelector('.places__like-button');
        const placeDeleteButton = this._placeElement.querySelector('.places__delete-button');
        const placeImage = this._placeElement.querySelector('.places__image'); 
 

        const handleLike = (evt) => {
              evt.target.classList.toggle('places__like-button_active')
            };
            
        const handleDelete = (evt) => {
              evt.target.closest('.place').remove();
            };
            
        const handleImagePopup = () => {
            const popupImage = document.querySelector('.popup__image');
            const popupImageTitle = imagePopup.querySelector('.popup__image-title'); 
              popupImage.src = this._link;
              popupImage.alt = this._name;
              popupImageTitle.textContent = this._name;
              togglePopup(imagePopup);
            }


        placeLikeButton.addEventListener('click', handleLike);
        placeDeleteButton.addEventListener('click', handleDelete);
        placeImage.addEventListener('click', () => handleImagePopup());
    }

    createPlace() {
        this._placeElement = this._getPlaceTemplate(); 
        const placeImage = this._placeElement.querySelector('.places__image'); 
        const placeTitle = this._placeElement.querySelector('.places__title');
 
        placeTitle.textContent = this._name; 
        placeImage.style.backgroundImage = 'url(' + this._link + ')';
        placeImage.alt = this._name;

        this._setEventListeners();

        return this._placeElement;
    }
};

export default Card;
export {togglePopup, imagePopup};
