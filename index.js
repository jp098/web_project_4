const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');


function togglePopup() {
    popup.classList.toggle('popup_is-open');
}



editButton.addEventListener('click', togglePopup)


closeButton.addEventListener('click', () => {
    togglePopup();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('.form__input_type_name');
    const inputAboutme = document.querySelector('.form__input_type_about-me');

    const profileName = document.querySelector('.profile__name');
    const profileAboutme = document.querySelector('.profile__about-me');

    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;

    togglePopup();
})

