const cookieAlert = document.querySelector('.cookies__alert');
const cookieAlertBtn = document.querySelector('.cookies__alert__btn');
function showCookiesAlert() {
    setTimeout(() => {
        cookieAlert.classList.add('cookies__alert__show')
    }, 1000);
};
function removeCookiesAlert() {
    cookieAlert.classList.remove('cookies__alert__show')
}
document.addEventListener('DOMContentLoaded', showCookiesAlert, false);
cookieAlertBtn.addEventListener('click', removeCookiesAlert, false);

const inputs = document.querySelectorAll('.f__inputtext');
const inputsSubmit = document.querySelector('.f__inputsubmit');
function checking() {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('f__inputtext-invalid');
        }
    }
}
inputsSubmit.addEventListener('click', checking, false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llc19fYWxlcnQnKTtcclxuY29uc3QgY29va2llQWxlcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llc19fYWxlcnRfX2J0bicpO1xyXG5mdW5jdGlvbiBzaG93Q29va2llc0FsZXJ0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29va2llQWxlcnQuY2xhc3NMaXN0LmFkZCgnY29va2llc19fYWxlcnRfX3Nob3cnKVxyXG4gICAgfSwgMTAwMCk7XHJcbn07XHJcbmZ1bmN0aW9uIHJlbW92ZUNvb2tpZXNBbGVydCgpIHtcclxuICAgIGNvb2tpZUFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nvb2tpZXNfX2FsZXJ0X19zaG93JylcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd0Nvb2tpZXNBbGVydCwgZmFsc2UpO1xyXG5jb29raWVBbGVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNvb2tpZXNBbGVydCwgZmFsc2UpO1xyXG5cclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZfX2lucHV0dGV4dCcpO1xyXG5jb25zdCBpbnB1dHNTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZl9faW5wdXRzdWJtaXQnKTtcclxuZnVuY3Rpb24gY2hlY2tpbmcoKSB7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0c1tpXS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICBpbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnZl9faW5wdXR0ZXh0LWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW5wdXRzU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpbmcsIGZhbHNlKTsiXSwiZmlsZSI6InNjcmlwdC5qcyJ9