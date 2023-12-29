const number = document.querySelector("#phone");
const mail = document.querySelector("#mail");


mail.addEventListener("click", () => {
    const mailAddress = "adeyogawiyadnyana@gmail.com"
    navigator.clipboard.writeText(mailAddress);
    alert("Mail Copied");
});
number.addEventListener("click", () => {
    const phoneNumber = "6285156242689"
    navigator.clipboard.writeText(phoneNumber);
    alert("Number Copied");
});
