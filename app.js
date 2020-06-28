function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ''
}
function getResult(){
    var result = document.getElementById("result");
     result.value = eval(result.value)
}

function sqrt() {
    var result = document.getElementById("result");
	result.value = Math.sqrt(result.value);
}
function sin() {
    var result = document.getElementById("result");
	result.value = Math.sin(result.value);
}