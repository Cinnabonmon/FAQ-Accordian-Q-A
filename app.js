document.addEventListener("click", (e) => {
  if (e.target.matches(".answer-icon")) {
    const answer = e.target.parentElement.nextElementSibling;
    answer.classList.toggle("open");
  }
});
