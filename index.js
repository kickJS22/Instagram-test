
const form = document.querySelector("form");
const btn = document.getElementById("#init");
const mail = document.querySelectorAll("input")[0];
const pass = document.querySelectorAll("input")[1];

function getInfo(){
    console.log("Dom loaded");
    btn.disabled = true;
    btn.style.opacity = "35%";
}

document.addEventListener("DOMContentLoaded", getInfo())


form.onchange = () => {
    if (mail.value != "" && pass.value != ""){
        btn.disabled = false;
        btn.style.opacity = "100%";
        console.log(mail.value, pass.value)

    } else {
        btn.disabled = true;
        btn.style.opacity = "35%";
    }
}

