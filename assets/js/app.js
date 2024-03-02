const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const signup_btn = $('.btn-sign-up');
const signin_btn = $('.btn-sign-in');
const account_modal = $('.modal.account-modal')
signup_btn.addEventListener('click', function () {
    account_modal.classList.toggle('show');
});