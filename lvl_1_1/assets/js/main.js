
function check() {
    let age = document.getElementById("age").value;
    let output = document.getElementById("output");
    age>=18 ? output.innerHTML = "volljährig" : output.innerHTML = "zu jung!";
}