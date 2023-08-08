const CelciusE1 =document.getElementById('Celcius');
const FahrenheitE1 =document.getElementById('Fahrenheit');
const KelvinE1 =document.getElementById('Kelvin');
function computetemp()
{
    // console.log(event.target.value);
    const currentvalue=event.target.value;

   switch (event.target.name)
   {
    case "Celcius":
        KelvinE1.value = currentvalue +273.15;
        FahrenheitE1.value= currentvalue * 1.8 +32;
    break;
    case "Fahrenheit":
        CelciusE1.value = (currentvalue-32) / 1.8;
        KelvinE1.value= (currentvalue-32) *(5/9) +273.15;
        
    break;
    case "Kelvin":
        CelciusE1.value = currentvalue  - 273.15;
        FahrenheitE1.value= (currentvalue -273.15) * 1.8 +32;
    break;

    default:
        break;
   }
}