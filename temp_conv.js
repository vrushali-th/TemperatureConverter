function convertTemperature() {
    // Get input values
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");

    // Convert Celsius to Fahrenheit and Kelvin
    if (celsiusInput.value !== "") {
        var celsiusValue = parseFloat(celsiusInput.value);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        var kelvinValue = celsiusValue + 273.15;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    }

    // Convert Fahrenheit to Celsius and Kelvin
    else if (fahrenheitInput.value !== "") {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        var kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;

        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    }

    // Convert Kelvin to Celsius and Fahrenheit
    else if (kelvinInput.value !== "") {
        var kelvinValue = parseFloat(kelvinInput.value);
        var celsiusValue = kelvinValue - 273.15;
        var fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32;

        celsiusInput.value = celsiusValue.toFixed(2);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
}
