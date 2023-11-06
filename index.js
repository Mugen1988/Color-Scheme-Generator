const selectedColorInput = document.getElementById("color-selector")
let selectedColor = selectedColorInput.value.substring(1) // Initialize with the default value
const selectedScheme = document.getElementById("color-scheme-selector").value
const getColorsButton = document.getElementById("get-colors-button")

// Add an input event listener to capture changes in the color input field
selectedColorInput.addEventListener("input", function () {
    selectedColor = selectedColorInput.value.substring(1) // Update selectedColor
})

getColorsButton.addEventListener('click', function () {
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}`)
        .then(res => res.json())
        .then(data => {
            colorVisual = ''
            colorHex = ''
            
            for (let color of data.colors) {
                colorVisual += `<div class="schemeColor" style="background-color: ${color.hex.value}"></div>`
                colorHex += `<div class="colorHex">${color.hex.value}</div>`
            }
            
            document.getElementById("color-layout").innerHTML = colorVisual
            document.getElementById("color-hex-value").innerHTML = colorHex
        });
});