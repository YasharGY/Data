const minInput = document.querySelector(".min");
minInput.value = 1;

const maxInput = document.querySelector(".max");
maxInput.value = 1000;

const minSpan = document.querySelector(".min-value");
minSpan.innerText = minInput.value

const maxSpan = document.querySelector(".max-value");
maxSpan.innerText = maxInput.value

minInput.addEventListener("change", (e) => {
  let value = e.target.value;

  if (parseInt(value) > parseInt(maxInput.value)) {
    console.log("hey");
    value = maxInput.value;
    e.target.value = maxInput.value;
  }

  minSpan.innerText = value;
});

maxInput.addEventListener("change", (e) => {
  console.log(e.target.value);

  let value = e.target.value;

  if (parseInt(value) < parseInt(minInput.value)) {
    value = minInput.value;
    e.target.value = minInput.value;
  }

  maxSpan.innerText = value;
});
