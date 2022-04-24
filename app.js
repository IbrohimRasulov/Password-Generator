const buttons = document.querySelectorAll('.password-btn');
const inputRange = document.querySelector('#slider');
const passwordLength = document.querySelector('#input-range p span');
const symbolsCheckbox = document.querySelector('#symbols');
const lettersCheckbox = document.querySelector('#letters');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

inputRange.addEventListener('input', () => {
  const newValue = inputRange.value;
  passwordLength.textContent = newValue;
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.toggleAttribute('checked');
    console.log('clicked');
  });
});

let charset = "";

switch (true) {
  case (symbolsCheckbox.checked && lettersCheckbox.checked):
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~-=`|{}[]:;?<>,./";
    break;
  case (symbolsCheckbox.checked):
    charset = "0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    break;
  case (lettersCheckbox.checked):
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    break
  default:
    charset = "0123456789";
    break;
}




// console.log(checkboxes);















buttons.forEach(button => {
  button.innerHTML = '<img src="assets/Icon-dots.png" alt="Icon-dots">';
});
