var letters = document.querySelectorAll("h2 span");

letters.forEach((element) => {
  element.style.color = `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(
    255 * Math.random()
  )},${Math.floor(255 * Math.random())})`;
});

setTimeout(() => {
  $("section").fireworks();
}, 10000);
