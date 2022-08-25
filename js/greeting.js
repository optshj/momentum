const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const meet = document.querySelector("#meet");
const VAL = "hidden";

function clickLoginBtn(event){
    event.preventDefault();
    const val = loginInput.value;
    loginForm.classList.add(VAL);
    console.log(val);
    localStorage.setItem("username",val);
    meet.innerText = `Hello  ${val}`;
    meet.classList.remove(VAL);
}
loginForm.addEventListener("submit",clickLoginBtn);
const name = localStorage.getItem("username");
if (name === null) {
    loginForm.classList.remove(VAL);
}
else {
    meet.innerText = `Hello ${name}`;
    meet.classList.remove(VAL);
}