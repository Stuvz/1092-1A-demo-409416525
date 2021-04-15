function changeVideo(i) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (i) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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

function changeColor(i) {
  const p = document.querySelector('#section');
  console.log('section', p);
  switch (i) {
    case 1:
      p.style.backgroundColor = 'yellow';
      break;
    case 2:
      p.style.backgroundColor = 'white';
      break;
    case 3:
      p.style.backgroundColor = 'black';
      break;
  }
}

function changeImg(i) {
  const p = document.querySelector("#player");
  console.log("player", p);
  switch (i) {
    case 1:
      p.innerHTML = `<img src="img1.jpg" style="width: 100%; height: auto; position:absolute; top: 0; bottom: 0; left: 0; right: 0; margin:auto" />`;
      break;      
    case 2:
      p.innerHTML = `<img src="img2.jpg" style="width: 100%; height: auto; position:absolute; top: 0; bottom: 0; left: 0; right: 0; margin:auto" />`;
      break;
    case 3:
      p.innerHTML = `<img src="img3.jpg" style="width: 100%; height: auto; position:absolute; top: 0; bottom: 0; left: 0; right: 0; margin:auto" />`;
      break;
    case 4:
      p.innerHTML = `<img src="img4.jpg" style="width: 100%; height: auto; position:absolute; top: 0; bottom: 0; left: 0; right: 0; margin:auto" />`;
      break;
    case 5:
      p.innerHTML = `<img src="img5.jpg" style="width: 100%; height: auto; position:absolute; top: 0; bottom: 0; left: 0; right: 0; margin:auto" />`;
      break;
  }

}