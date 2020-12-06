import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {togglePopup, imagePopup} from './Card.js';

const defaultConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

// Popups 
const editProfilePopup = document.querySelector('.popup_type_edit-profile'); 
const addPlacePopup = document.querySelector('.popup_type_add-place'); 
 
const editProfileForm = editProfilePopup.querySelector('.popup__form'); 
const addPlaceForm = addPlacePopup.querySelector('.popup__form'); 
 
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
const addFormValidator = new FormValidator(defaultConfig, addPlaceForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
// Buttons  
const editButton = document.querySelector('.profile__edit-button'); 
const closeEditButton = document.querySelector('.popup__close-button'); 
const addPlaceButton = document.querySelector('.profile__add-button'); 
const closeAddPlaceButton = addPlacePopup.querySelector('.popup__close-button'); 
const closeImageButton = imagePopup.querySelector('.popup__close-button'); 
 
//Form data 
const profileName = document.querySelector('.profile__name'); 
const profileAboutme = document.querySelector('.profile__about-me'); 
 
const inputName = document.querySelector('.popup__input_type_name'); 
const inputAboutme = document.querySelector('.popup__input_type_about-me'); 
 
const placeTitleInput = addPlaceForm.querySelector('.popup__input_type_title'); 
const placeLinkInput = addPlaceForm.querySelector('.popup__input_type_image-link'); 
 
const list = document.querySelector('.places__list');  
 
const initialPlaces = [ 
  { 
    name: "Yosemite Valley", 
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg" 
  }, 
  { 
    name: "Lake Louise", 
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg" 
  }, 
  { 
    name: "Bald Mountains", 
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg" 
  }, 
  { 
    name: "Latemar", 
    link: "https://code.s3.yandex.net/web-code/latemar.jpg" 
  }, 
  { 
    name: "Vanoise National Park", 
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg" 
  }, 
  { 
    name: "Lago di Braies", 
    link: "https://code.s3.yandex.net/web-code/lago.jpg" 
  } 
]; 
 
//Functions
 function addEventListener(evt) { 
  evt.preventDefault(); 
} 

const formSubmitHandler = (evt) => { 
  evt.preventDefault(); 
  profileName.textContent = inputName.value; 
  profileAboutme.textContent = inputAboutme.value; 
  togglePopup(editProfilePopup); 
} 

//EventListeners
editButton.addEventListener('click', () => { 
  togglePopup(editProfilePopup); 
}); 
 
closeEditButton.addEventListener('click', () => { 
  togglePopup(editProfilePopup); 
}); 
 
editProfileForm.addEventListener('submit', formSubmitHandler); 
 
addPlaceButton.addEventListener('click', () => { 
  togglePopup(addPlacePopup); 
}) 
 
closeAddPlaceButton.addEventListener('click', () => { 
  togglePopup(addPlacePopup); 
}) 
 
closeImageButton.addEventListener('click', () => { 
  togglePopup(imagePopup); 
}) 
 
addPlaceForm.addEventListener('submit', (evt) => { 
 
  renderCard(({ name: placeTitleInput.value, link: placeLinkInput.value }), list); 
 
  togglePopup(addPlacePopup); 
});

// Page Content
const renderCard = (data, list) => {
  const card = new Card(data, '.places-template');
  list.append(card.createPlace());
}

 initialPlaces.forEach((data) => {
    renderCard(data, list);
  });