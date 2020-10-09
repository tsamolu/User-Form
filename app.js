// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(){
    const name = document.getElementById("name");
    // Starts with A-Z (regardless of case) between 2 -10 characters
    const re = /^[a-zA-Z]{2,10}$/;  

    if(!re.test(name.value)){
        name.classList.add("is-invalid")
        
    }else {
        name.classList.remove("is-invalid")
        
    }
}

function validateZip(){
    const zip = document.getElementById("zip");
    // Starts with any 5 digits between 0-9 and optional "-" with 4 digits between 0-9
    const re = /^[0-9]{5}(-[0-9]{4})?$/;  

    if(!re.test(zip.value)){
        zip.classList.add("is-invalid")
        
    }else {
        zip.classList.remove("is-invalid")
        
    }
}

function validateEmail(){
    const email = document.getElementById("email");
    // Starts with any number or letter but must have "@" and ".". also it must end with letters(between 2-9 characters)
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;  

    if(!re.test(email.value)){
        email.classList.add("is-invalid")
        
    }else {
        email.classList.remove("is-invalid")
        
    }
}

function validatePhone(){
    const phone = document.getElementById("phone");
    // Starts with any 5 digits between 0-9 and optional "-" with 4 digits between 0-9
    const re = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/;  

    if(!re.test(phone.value)){
        phone.classList.add("is-invalid")
        
    }else {
        phone.classList.remove("is-invalid")
        
    }
}