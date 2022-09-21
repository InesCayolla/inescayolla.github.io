const button = document.querySelector('.button');
const text = document.querySelector('.text');
const bi = document.querySelector('i');

const first = "<h3>Hi, my name is Ines! I'm a fullstack developer and...<br></h3>"
const second = "<h3>let's discover some cool projects!<br></h3>"
const third = "bi bi-hand-index"
const fourth = "bi bi-emoji-smile"

button.addEventListener('click', () => {
  if (text.innerHTML === second) {
    text.innerHTML = first;
    bi.className = third;
  } else {
    text.innerHTML = second, fourth;
    bi.className = fourth;
  }
});
