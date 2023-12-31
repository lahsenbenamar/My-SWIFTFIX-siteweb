
function validateForm() {
    const name = document.querySelector('.name');
    const phoneNumber = document.querySelector('.phone');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');
    console.log(phoneNumber)

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => {
        element.classList.remove('error');
    });

    const errorinput = document.querySelectorAll('input')
    console.log(errorinput)
    name.classList.remove('inputerror')
    phoneNumber.classList.remove('inputerror')
    email.classList.remove('inputerror')
    message.classList.remove('inputerror')


    let valid = true;
    const nameRegex = /\D{6,}$/i;
    if (!nameRegex.test(name.value)) {
        const nameError = document.querySelector('.name-error');
        nameError.classList.add('error')
        name.classList.add('inputerror')
        name.classList.remove('inputvalid')

        valid = false;
    }else{
        name.classList.add('inputvalid')
    }
    const phoneRegex = /\+212\-+[6|7]+\d{8}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        const phoneError = document.querySelector('.phone-error');
        phoneError.classList.add('error');
        phoneNumber.classList.add('inputerror')
        phoneNumber.classList.remove('inputvalid')

        valid = false;
    }else{
        phoneNumber.classList.add('inputvalid')
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email.value)) {
        const emailError = document.querySelector('.email-error');
        emailError.classList.add('error');
        email.classList.add('inputerror')
        email.classList.remove('inputvalid')

        valid = false;
    }else{
        email.classList.add('inputvalid')
    }

    if (message.value === '') {
        const messageError = document.querySelector('.message-error');
        messageError.classList.add('error');
        message.classList.add('inputerror')
        message.classList.remove('inputvalid')

        valid = false;
    }else{
        message.classList.add('inputvalid')
    }

    return valid;
}


const name = document.querySelector('.name');
const phoneNumber = document.querySelector('.phone');
const email = document.querySelector('.email');
const message = document.querySelector('.message');



