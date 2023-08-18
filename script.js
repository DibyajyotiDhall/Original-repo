const colorButton = document.getElementById('colorButton');
const body = document.body;
const colors = ['#ff6347', '#42f55d', '#3498db', '#f39c12', '#8e44ad'];

colorButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  body.style.backgroundColor = randomColor;
});
