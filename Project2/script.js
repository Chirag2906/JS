const buttons = document.querySelectorAll('.button');
const changes = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      changes.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      changes.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      changes.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      changes.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      changes.style.backgroundColor = e.target.id;
    }

    
  });
});