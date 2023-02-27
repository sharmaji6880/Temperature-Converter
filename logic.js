const fahr = document.getElementById("fahr");
const cel = document.getElementById("cel");
cel.addEventListener('keyup',showFahrenheit);
fahr.addEventListener('keyup',showCelsius);

function showFahrenheit() {
    if(cel.value==="") {
        fahr.value="";
        return;
    }
    if(isNaN(Number(cel.value)) && cel.value!=="-") {
        alert("Please enter a number");
        return;
    }
    fahr.value = Number(cel.value)*1.8 +32;
}
function showCelsius() {
    if(fahr.value==="") {
        cel.value="";
        return;
    }
    if(isNaN(Number(fahr.value)) && fahr.value!=="-") {
        alert("Please enter a number");
        return;
    }
    cel.value=Number(fahr.value-32)*5/9;
}