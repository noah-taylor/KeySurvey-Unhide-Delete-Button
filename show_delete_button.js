var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText.match(/delete/gi)) {
    buttons[i].style.display = 'block';
  }
}
