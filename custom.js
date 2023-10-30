function displayNum(value){
document.getElementById("display").value += value;
}

function clearInput(){
    document.getElementById("display").value = "";
}

function result(){
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}