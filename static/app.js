const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // call helper function:
  getColors();
});

// helper functions:
function createColorBoxes(colors, parent) {
  parent.innerHTML = "";

  for (const color of colors) {
    const div = document.createElement("div");
    div.classList.add("color"); // apply predefined styles
    div.style.backgroundColor = color;
    div.style.width = `calc(100%/${colors.length})`;

    div.addEventListener("click", () => navigator.clipboard.writeText(color));

    const span = document.createElement("span");
    span.innerText = color;
    div.appendChild(span);

    parent.appendChild(div);
  }
}

function getColors() {
  // "query" is the name attribute of the input field within the form:
  const query = form.elements.query.value;
  // console.log(query);
  fetch("/palette", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      query,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container");
      const colors = data.colors;

      // call helper function:
      createColorBoxes(colors, container);
    });
}
