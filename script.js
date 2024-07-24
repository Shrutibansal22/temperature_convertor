const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').valueAsNumber;
    //console.log(numberTemp);

const tempSelected=document.getElementById('temp_diff');
const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
//console.log(valueTemp);
const celToFah=(cel)=>{
    let fahrenheitResult=Math.round((cel*9/5)+32);
    return fahrenheitResult;
}
const fahToCel=(fah)=>{
    let celciusResult=Math.round((fah-32)*5/9);
    return celciusResult;
}
let result;
if(valueTemp=='cel'){
    result=celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;
}else{
    result=fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML=`${result}°Celcius`;
}
}
