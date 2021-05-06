function changeVideo(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 3:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}

function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./images/TKU1.png" style="width:100%; height: auto" />`;
      break;
    case 2:
      player.innerHTML =
        '<img src="./images/TKU2.png" style="width:100%; height: auto" />';
      break;
    case 3:
      player.innerHTML = `<img src="./images/TKU3.png" style="width:100%; height: auto" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./images/TKU4.png" style="width:100%; height: auto"/>`;
      break;
    case 5:
      player.innerHTML = `<img src="./images/TKU5.png" style="width:100%; height: auto"/>`;
      break;
  }
}

function changeColor(index) {
  const p1 = document.querySelector('#heading');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#footer');
  switch (index) {
    case 1:
      p1.style.backgroundColor = 'yellow';
      break;
    case 2:
      p2.style.backgroundColor = 'azure';
      break;
    case 3:
      p3.style.backgroundColor = 'black';
      break;
  }
}

function showMenu(){
  const p = document.querySelector('#menu2');
  p.classList.remove('invisible');
}

function hideMenu(){
  const p = document.querySelector('#menu2');
  p.classList.add('invisible');
}

function reset(){
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  p1.classList.remove('invisible');

  p3.classList.remove('invisible');

  p1.style.width = "20%";
  p2.style.width = "60%";
  p3.style.width = "20%";
}

function hideMenu1(){
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  reset();
  p1.classList.add('invisible');
  p2.style.width = "80%";
}

function hideMenu2(){
  const p1 = document.querySelector('#menu2');
  const p2 = document.querySelector('#section');
  reset();

  p1.classList.add('invisible');
  p2.style.width = "80%";
}