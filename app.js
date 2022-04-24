const buttons = document.querySelectorAll('.password-btn');
const inputRange = document.querySelector('#slider');
const passwordLength = document.querySelector('#input-range p span');

inputRange.addEventListener('input', () => {
  const newValue = inputRange.value;
  passwordLength.textContent = newValue;
});


console.log(inputRange);















buttons.forEach(button => {
  button.innerHTML = '<img src="assets/Icon-dots.png" alt="Icon-dots">';
});
