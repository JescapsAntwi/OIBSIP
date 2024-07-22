function clearToDisplay() {
    document.getElementById("display").value="";
}

function clickToDisplay(value) {
    document.getElementById("display").value += value;
}

function typeToDisplay() {
    let equation = document.getElementById("display").value;
    try {
        let result = eval(equation);
        document.getElementById("display").value = result;
    }
    catch(error) {
        document.getElementById("display").value="Error";
    }
}

function delToDisplay() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function typeToDisplay2() {
    let equation = document.getElementById("display").value;
    try {
        let result = Math.sqrt(eval(equation));
        document.getElementById("display").value = result;
    }
    catch (error){
        document.getElementById("display").value="Error";
    }
}
