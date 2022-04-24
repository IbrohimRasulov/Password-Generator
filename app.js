const buttons = document.querySelectorAll('.password-btn');
const inputRange = document.querySelector('#slider');
const passwordLength = document.querySelector('#input-range p span');
const symbolsCheckbox = document.querySelector('#symbols');
const lettersCheckbox = document.querySelector('#letters');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const generatorBtn = document.querySelector('#generator-btn button');

let charset;
let password = "";

buttons.forEach(button => {
  button.innerHTML = '<img src="assets/Icon-dots.png" alt="Icon-dots">';
});

inputRange.addEventListener('input', () => {
  const newValue = inputRange.value;
  passwordLength.textContent = newValue;
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.toggleAttribute('checked');
  });
});

const generatePassword = function () {
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

  for (let i = 0; i < inputRange.value; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
};

generatorBtn.addEventListener('click', () => {
  buttons.forEach(button => {
    password = "";
    button.textContent = generatePassword();
  });
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerHTML !== '<img src="assets/Icon-dots.png" alt="Icon-dots">') {
      navigator.clipboard.writeText(button.innerHTML);
    }
  });
});
