function convertTemperature() {
    const inputCelsius = parseFloat(document.getElementById('inputCelsius').value);
    const inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    const inputKelvin = parseFloat(document.getElementById('inputKelvin').value);

    if (inputCelsius !== '') {
        const fahrenheit = (inputCelsius * 9 / 5) + 32;
        const kelvin = inputCelsius + 273.15;

        document.getElementById('outputFahrenheit').textContent = fahrenheit.toFixed(2);
        document.getElementById('outputKelvin').textContent = kelvin.toFixed(2);
    } else if (inputFahrenheit !== '') {
        const celsius = (inputFahrenheit - 32) * 5 / 9;
        const kelvin = (inputFahrenheit + 459.67) * 5 / 9;

        document.getElementById('outputCelsius').textContent = celsius.toFixed(2);
        document.getElementById('outputKelvin').textContent = kelvin.toFixed(2);
    } else if (inputKelvin !== '') {
        const celsius = inputKelvin - 273.15;
        const fahrenheit = (inputKelvin * 9 / 5) - 459.67;

        document.getElementById('outputCelsius').textContent = celsius.toFixed(2);
        document.getElementById('outputFahrenheit').textContent = fahrenheit.toFixed(2);
    }
}
