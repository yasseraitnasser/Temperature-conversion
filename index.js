
const temperature = document.getElementById("Temperature");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (toFahrenheit.checked)
    {
        temp = Number(temperature.value) * 9 / 5 + 32;
        result.textContent = temp;
    }
    else if (toCelsius.checked)
    {
        temp = (Number(temperature.value) - 32) * 5 / 9;
        result.textContent = temp;
    }
    else
    {
        window.alert(`Please select a unit`);
    }
}

