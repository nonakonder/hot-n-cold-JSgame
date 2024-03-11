     
function stepper(btn,inputId){

    let myInput = document.getElementById(inputId);
    let clas = btn.getAttribute("class");
    let min =  myInput.getAttribute("min");
    let max =  myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val =  myInput.getAttribute("value");
    //Operador condicional ternário
    let calcStep = (clas == "increment") ? (step * 1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if (clas == "increment" && newValue > max) {
        newValue = min;
    }
    if (clas == "decrement" && newValue < min){
        newValue = max;
    }
    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
      
}