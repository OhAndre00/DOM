const addProduct = () => {
  const input = document.querySelector(".textbox");
  const button = document.querySelector(".add");

  button.addEventListener("click", () => {
    const value = input.value;
    if (value !== "") {
      const lista = document.querySelector("ul");
      const nuovoElemento = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      nuovoElemento.textContent = value;
      lista.appendChild(nuovoElemento);
      nuovoElemento.appendChild(checkbox);
      input.value = "";
    }
  });
};
