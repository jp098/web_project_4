// Popups
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addPlacePopup = document.querySelector('.popup_type_add-place');
const imagePopup = document.querySelector('.popup_type_image');

const editProfileForm = editProfilePopup.querySelector('.form');
const addPlaceForm = addPlacePopup.querySelector('.form');

// Buttons 
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closeAddPlaceButton = addPlacePopup.querySelector('.popup__close-button');
const closeImageButton = imagePopup.querySelector('.popup__close-button');

//Form data
const profileName = document.querySelector('.profile__name');
const profileAboutme = document.querySelector('.profile__about-me');

const inputName = document.querySelector('.form__input_type_name');
const inputAboutme = document.querySelector('.form__input_type_about-me');



function togglePopup(popup) {
    popup.classList.toggle('popup_is-open');

}


editButton.addEventListener('click', () => {
    togglePopup(editProfilePopup);
});

closeEditButton.addEventListener('click', () => {
    togglePopup(editProfilePopup);
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;
    togglePopup(editProfilePopup);
}

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
    evt.preventDefault();

    const placeTitleInput = addPlaceForm.querySelector('.form__input_type_title');
    const placeLinkInput = addPlaceForm.querySelector('.form__input_type_image-link');

    list.append(createPlace({name: placeTitleInput.value, link: placeLinkInput.value}));

    togglePopup(addPlacePopup);
});


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


  const list = document.querySelector('.places__list');
  const placeTemplate = document.querySelector('.places-template').content.querySelector('.places__item');

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
            evt.preventDefault(evt);
            placeElement.remove();
        })

        placeLikeButton.addEventListener('click', (evt) => {
            //toggleHeartState
            evt.preventDefault(evt);
            toggleLikeButton(placeLikeButton);
        })

        placeImage.addEventListener('click', () => {
            //open image popup
            const popupImage = imagePopup.querySelector('.popup__image');
            const popupImageTitle = imagePopup.querySelector('.popup__image-title');

            popupImage.src = data.link;
            popupImageTitle.textContent = data.name;

            togglePopup(imagePopup);
        })

        return placeElement;
    }

  initialPlaces.forEach((data) => {
      list.append(createPlace(data));
  })
  