let passwordBox = document.getElementById('password');
let length = 12;
let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = 1234567890;
let symbol = "~!@#$%^&*()_+={}|\][:;<>?/.,"

let button = document.querySelector('button');
let img = document.querySelector('img');

let allCharacters = UpperCase + LowerCase + numbers + symbol;
function createPassword(){
    let password = "";
     password += UpperCase[Math.floor(Math.random()*UpperCase.length)];
     password += LowerCase[Math.floor(Math.random()*LowerCase.length)];
     password += numbers[Math.floor(Math.random()*numbers.length)];
     password += symbol[Math.floor(Math.random()*symbol.length)];
     while(length>password.length){
         password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
     
     }
     passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

button.addEventListener('click' , function(){
    createPassword();
});
img.addEventListener('click' , function(){
    copyPassword();
})