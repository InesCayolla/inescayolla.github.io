const button = document.querySelector('.button');
const text = document.querySelector('.text');
const bi = document.querySelector('i');

const first = "<h2><br><br> I'm a fullstack developer and...<br><br><br<br></h2>"
const second = "<h2><br><br>let's discover some cool projects!<br><br><br><br></h2>"
const third = "bi bi-hand-index"
const fourth = "bi bi-emoji-smile"
const delay = ms => new Promise(res => setTimeout(res, ms));


button.addEventListener('click', async () => {
  if (text.innerHTML === second) {
    text.innerHTML = first;
    bi.className = third;
  } else {
    text.innerHTML = (first, second);
    bi.className = fourth;
    await delay(700);
    document.getElementById('p-corpo').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
});


function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "vh";
      elem.style.bottom = pos + "vh";
    }
  }
}
