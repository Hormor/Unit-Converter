document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("input");
  const length = document.getElementById("length");
  const volume = document.getElementById("volume");
  const mass = document.getElementById("mass");
  const body = document.querySelector("body");
  const convertBtn = document.getElementById("convert-btn");
  let darkMode = document.getElementById("dark-mode");

  const meterToFeet = 3.281;
  const literToGallon = 0.264;
  const kiloToPound = 2.204;

  function getValue() {
    let baseValue = input.value;

    let lengthValue = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(
      2
    )} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
      2
    )} meters`;

    length.innerText = lengthValue;

    let volumeValue = `${baseValue} litres = ${(
      baseValue * literToGallon
    ).toFixed(2)} gallons | ${baseValue} gallons = ${(
      baseValue / literToGallon
    ).toFixed(2)} liters`;

    volume.innerText = volumeValue;

    let massValue = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(
      2
    )} pounds | ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(
      2
    )} kilos`;

    mass.innerText = massValue;
  }

  getValue();

  convertBtn.addEventListener("click", getValue);

  function toggleDarkMode() {
    if (body.classList.contains("dark")) {
      body.classList.toggle("dark");
      localStorage.setItem("theme", "light");
      darkMode.innerHTML = " Turn on";
    } else {
      body.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
      darkMode.innerHTML = " Turn off";
    }
  }

  darkMode.addEventListener("click", toggleDarkMode);
});
