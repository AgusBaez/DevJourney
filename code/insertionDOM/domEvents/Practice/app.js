const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', e =>{
    h1.innerText = `Welcome, ${input.value}`;
    //h1.innerText  = "";
    if(h1.innerText === "Welcome,"){
        h1.innerText= "Enter Your Username";
    }
});