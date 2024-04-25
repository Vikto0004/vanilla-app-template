const formData = {
  email: '',
  message: '',
};

const elForm = document.querySelector('.feedback-form');
const elInputEmail = elForm.elements.email;
const elInputMess = elForm.elements.message;

elForm.addEventListener('input', () => {
  formData.email = elInputEmail.value.trim();
  formData.message = elInputMess.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state')) {
  const newFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  elInputEmail.value = formData.email = newFormData.email;
  elInputMess.value = formData.message = newFormData.message;
}

elForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!elInputMess.value || !elInputEmail.value) {
    console.warn('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
  }
});
