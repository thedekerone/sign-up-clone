const first = document.getElementById('first');
const button = document.getElementById('button');
const form = document.getElementById('form');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('.input');
const errors = document.querySelectorAll('.error');
button.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      labels[i].classList = 'warning';
      errors[i].classList.add('show');
    } else {
      labels[i].classList = '';
      errors[i].classList.remove('show');
    }
  }

  // labels.forEach(label => {
  //   label.classList = "warning";
  // });
});
