document.addEventListener("click", (e) => {
  if (e.target.matches(".answer-icon")) {
    const answer = e.target.parentElement.nextElementSibling;
    answer.classList.toggle("open");
  }
  if(e.target.getAttribute('src') === './assets/images/icon-plus.svg'){
    e.target.src = './assets/images/icon-minus.svg'
  } else {
    e.target.src = './assets/images/icon-plus.svg'
  }
}); 
