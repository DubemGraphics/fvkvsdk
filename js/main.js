

const formContainer = document.querySelector('.form_container');
const formElement = formContainer.querySelector('form'); 
const openFormButton = document.querySelector('.cta_btn');


const toggleFormVisibility = () => {
  formContainer.classList.toggle('active-modal');
};


const closeFormOnOutsideClick = (event) => {
  if (!formElement.contains(event.target) && event.target !== openFormButton) {
    formContainer.classList.remove('active-modal');
  }
};

openFormButton.addEventListener('click', toggleFormVisibility);
document.addEventListener('click', closeFormOnOutsideClick);
