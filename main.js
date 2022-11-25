
let submit = document.getElementById("submit");

submit.onclick = confirm;

function confirm(){
    result = document.getElementById("result");
    this.innerText = "CONFIRMED"
    this.classList.add("confirmed");
    result.innerText = "THANK YOU!"
}