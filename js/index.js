let nameC = document.getElementById('nameInput');
let nameErr = document.getElementById('name-error-m');
let cardN = document.getElementById('cardNumber');
let cardErr = document.getElementById('no-error-m');
let dateMC = document.getElementById('dateM');
let dateYC = document.getElementById('dateY');
let dateErr = document.getElementById('date-error-m');
let cvcC = document.getElementById('cvc');
let cvcErr = document.getElementById('cvc-error-m');
let entrednameC = document.getElementById('entred-card-name');
let entrednnumC = document.getElementById('entred-card-number');
let entredDateM = document.getElementById('entred-card-dateM');
let entredDateY = document.getElementById('entred-card-dateY');
let entredCvc = document.getElementById('entred-card-cvc');
let btn = document.getElementById('btn');
let btn_cont = document.getElementById('continue-btn');
const form = document.querySelector('.input-sec');
const followUp = document.querySelector('.follow-up');
followUp.style.display='none';
form.style.display='flex';

//print the input on the card
nameC.addEventListener('input', () => {
nameC.value = nameC.value.replace(/[^a-zA-Z]/g, '').trim();
entrednameC.textContent = nameC.value;
});
cardN.addEventListener('input', () => {
    cardN.value = cardN.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    entrednnumC.textContent = cardN.value;
})
dateMC.addEventListener('input', () => {
    dateMC.value = dateMC.value.replace(/[^\d]/g, '');
    entredDateM.textContent = dateMC.value;
})
dateYC.addEventListener('input', () => {
    dateYC.value = dateYC.value.replace(/[^\d]/g, '');
    entredDateY.textContent = dateYC.value;
})
cvcC.addEventListener('input', () => {
    cvcC.value = cvcC.value.replace(/[^\d]/g, '');
    entredCvc.textContent = cvcC.value;
})
//check the validation and print error messages when click confirm btn
function checkCardholderName() {
    const cardholderName = nameC.value;
  
    if (cardholderName.length < 3 || cardholderName.length > 24) {
    nameC.classList.add('show-error');
      nameErr.classList.add('show');
      return false;
    } else {
        nameC.classList.remove('show-error');
        nameErr.classList.remove('show');
      return true;
    }
  }
function checkCardNumber(){
    const cardNumber = cardN.value;
    if(cardNumber < 19){
        cardN.classList.add('show-error');
        cardErr.classList.add('show');
        return false;
    } else {
        cardN.classList.remove('show-error');
        cardErr.classList.remove('show');
        return true;
    }
}
function checkMonth(){
const checkM = dateMC.value;
if(checkM < 2){
    dateMC.classList.add('show-error');
    dateErr.classList.add('show');
    return false;
} else {
    dateMC.classList.remove('show-error');
    dateErr.classList.remove('show');
    return true;
}
}
function checkYear(){
    const checkY = dateYC.value;
    if(checkY < 2){
        dateYC.classList.add('show-error');
        dateErr.classList.add('show');
        return false;
    } else {
        dateYC.classList.remove('show-error');
        dateErr.classList.remove('show');
        return true;
    }
    }
    function checkCvc(){
        const checvc = cvcC.value;
        if(checvc < 3){
            cvcC.classList.add('show-error');
            cvcErr.classList.add('show');
            return false;
        } else {
            cvcC.classList.remove('show-error');
            cvcErr.classList.remove('show');
            return true;
        }
        }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkCardholderName();
    checkCardNumber();
    checkMonth();
    checkYear();
    checkCvc();
    
    if (checkCardholderName() && checkCardNumber() && checkMonth() && checkYear() && checkCvc()) {
    form.style.display='none';
    followUp.style.display='flex';
    }
});
//switch
btn_cont.addEventListener('click', () => {
    followUp.style.display='none';
    form.style.display='flex';
    entredCvc.innerHTML = '000';
    entredDateM.innerHTML = '00';
    entredDateY.innerHTML = '00';
    entrednameC.innerHTML ='jane Doe';
    entrednnumC.innerHTML = '0000 0000 0000 0000';
    cardN.value = '0000 0000 0000 0000';
    nameC.value = 'e.g Jane Doe';
    dateMC.value ='00';
    dateYC.value ='00';
    cvcC.value = '000';
})