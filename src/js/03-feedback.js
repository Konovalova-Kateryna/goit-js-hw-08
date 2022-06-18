import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onFormlInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправили форму');
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function onFormlInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

function populateTextarea() {
    
    const savedFields = localStorage.getItem(STORAGE_KEY);

    if (savedFields) {
        const parsedFields = JSON.parse(savedFields);
        console.log(parsedFields);

        form.email.value = parsedFields.email || "";
        form.message.value = parsedFields.message || "";
    }
}