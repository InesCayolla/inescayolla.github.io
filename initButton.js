const button = document.querySelector('.button');
const text = document.querySelector('.text');

const first = "<h1>Hi, my name is Ines! <br> I'm a fullstack developer and...<br></h1><p>(1/2)</p>"
const second = "<h1>now I know JavaScript and have to complete the text. Ouch!<br></h1><p>(2/2)</p>"

button.addEventListener('click', () => {
  if (text.innerHTML === second) {
    text.innerHTML = first;
  } else {
    text.innerHTML = second;
  }
});
