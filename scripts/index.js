// Popups
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addPlacePopup = document.querySelector('.popup_type_add-place');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');

const editProfileForm = editProfilePopup.querySelector('.popup__form');
const addPlaceForm = addPlacePopup.querySelector('.popup__form');

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

const popupImageTitle = imagePopup.querySelector('.popup__image-title');

const list = document.querySelector('.places__list');
const placeTemplate = document.querySelector('.places-template').content.querySelector('.places__item');

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

function escHandler(evt) {
  const openPopup = document.querySelector('.popup_is-open');
    if(evt.key === "Escape") {
    togglePopup(openPopup);
  }
}

function outsideClick(evt) {
  togglePopup(evt.target);
}

function togglePopup(popup) {
  popup.classList.toggle('popup_is-open');
    if(popup.classList.contains('popup_is-open')) {
      popup.addEventListener('click', outsideClick);
      document.addEventListener('keydown', escHandler);
    } else {
      popup.removeEventListener('click', outsideClick);
      document.removeEventListener('keydown', escHandler);
    };
}

function addEventListener(evt) {
  evt.preventDefault();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAboutme.textContent = inputAboutme.value;
  togglePopup(editProfilePopup);
}

function toggleLikeButton(placeLikeButton) {
  placeLikeButton.classList.toggle('places__like-button_active');
}

function createPlace(data) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.places__image');
  const placeTitle = placeElement.querySelector('.places__title');
  const placeLikeButton = placeElement.querySelector('.places__like-button');
  const placeDeleteButton = placeElement.querySelector('.places__delete-button');

  placeTitle.textContent = data.name;
  placeImage.style.backgroundImage = 'url(' + data.link + ')';

  placeDeleteButton.addEventListener('click', (evt) => {
    //remove card
    placeElement.remove();
  })

  placeLikeButton.addEventListener('click', (evt) => {
    //toggleHeartState
    toggleLikeButton(placeLikeButton);
  })

  placeImage.addEventListener('click', () => {
    //open image popup
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupImageTitle.textContent = data.name;

    togglePopup(imagePopup);
  })

  return placeElement;
}

//Handlers
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

  list.prepend(createPlace({ name: placeTitleInput.value, link: placeLinkInput.value }));

  togglePopup(addPlacePopup);
});



//Page content 
initialPlaces.forEach((data) => {
  list.append(createPlace(data));
})