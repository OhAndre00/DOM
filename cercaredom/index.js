const $elementiParagrafo = document.querySelectorAll(".paragrafo");

$elementiParagrafo.forEach((elemento) => {
  console.log("p:", elemento.innerText);
});

const $elemento3 = document.getElementById("elemento-3");

console.log($elemento3?.innerText);

const $elementiH2 = document.querySelectorAll("h2");

$elementiH2.forEach((elemento) => {
  console.log("h2:", elemento.innerText);
});
