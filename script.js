const captchaTextBox = document.querySelector(".captcha-box input");
const captchaInputBox = document.querySelector(".captcha-input input");
const refreshButton = document.querySelector(".refresh-btn");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".btn");

let captchaText = null

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char)=> Math.random() > 0.5 ? char.toUpperCase() : char)
    captchaText = changeString.join("    ");
    captchaTextBox.value = captchaText;   
}

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpvalidate();
}

const captchaKeyUpvalidate = () => {
    submitButton.classList.toggle("disabled",!captchaInputBox.value)

    if(captchaInputBox.value === "") message.classList.remove("active");
}

const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
    
    message.classList.add("active");
    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is correct";
        message.style.color = "#826afb"
    }else{
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#ff2525"
    }
};

refreshButton.addEventListener("click",refreshBtnClick);

captchaInputBox.addEventListener("keyup",captchaKeyUpvalidate);

submitButton.addEventListener("click",submitBtnClick);

generateCaptcha();