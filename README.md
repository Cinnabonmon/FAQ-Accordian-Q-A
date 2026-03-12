# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![./assets/images/Screenshot 2026-03-12 012514.png]

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- Media Queries
- Vanilla Javascript

### What I learned

I learned a lot about Javascript and how to use it to manipulate the DOM effectively. It showed me that thinking through a problem step by step can help debug and also help see what is going on in the code. The css part also helped me figure out better ways to implement animations when certain properties can't be animated.

```js
// I think this was my favorite piece of code as I was able to problem solve this by trial and error and the outcome was very satisfying!
document.addEventListener("click", (e) => {
  if (e.target.matches(".answer-icon")) {
    const answer = e.target.parentElement.nextElementSibling;
    answer.classList.toggle("open");
  }
});
```

### Continued development

I would like to revisit this in the future adding the ability to make the accordion open only towards the bottom so the container does not move up when opening the answers. I'd also like to be able to implement a feature where only one can be opened at a time. When you click on another when one is already opened. it will close the one opened and then open the one that was clicked.

### Useful resources

- [AI] - I was able to use AI during this project but I used the pre-made context files to allow the AI not to just give me the answers but steer me in the right direction. Very much a great tool.
- [MDN Web Docs]https://developer.mozilla.org) - This helped me figure out how to dwindle my javascript code. I had been using 4 different functions to manage the event clicks for showing the accordion answers. I was able to use parentNode and nextElementSibling to solve the problem with only a few lines instead of like 50 lol! Very useful site.
