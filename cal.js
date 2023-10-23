
function rad(){
    let pi=Math.PI;
    let rad=180/pi;
}
function clearScreen(){
    document.getElementById("result").innerHTML = "";
}
function setScreen(value){
    document.getElementById("result").innerHTML += value;
}
function cal() {
    let data = document.getElementById("result").innerHTML;
    let result = eval(data);
    document.getElementById("result").innerHTML = result;
}
function fact() {
    let data = +document.getElementById("result").innerHTML;
    let result = 1;
    for (let i=1; i<=data; i++) {
        result = result * i;
    }
    document.getElementById("result").innerHTML = result;
}
function sqrt() {
    let data = +document.getElementById("result").innerHTML;
    let result = Math.sqrt(data);
    document.getElementById("result").innerHTML = result;
}
function sin() {
    let data = +document.getElementById("result").innerHTML;
    let result = Math.sin(data);
    document.getElementById("result").innerHTML = result;
}
function cos() {
    let data = +document.getElementById("result").innerHTML;
    let result = Math.cos(data);
    document.getElementById("result").innerHTML = result;
}
function tan() {
    let data = +document.getElementById("result").innerHTML;
    let result = Math.tan(data);
    document.getElementById("result").innerHTML = result;
}
function log(){
    let data = +document.getElementById("result").innerHTML;
    let result = Math.log(data);
    document.getElementById("result").innerHTML = result;
}


