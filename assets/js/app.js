const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn_steps = $$('.btn-step-item');
const step_items = $$('.step-content__item')

btn_steps.forEach((btn_step, index) => {
    const step_item = step_items[index];
    btn_step.addEventListener('click', function () {
        $('.btn-step-item.active').classList.remove('active');
        $('.step-content__item.active').classList.remove('active');


        this.classList.add('active');
        step_item.classList.add('active')
    })
})

const btn_next_step = $('.btn-next-step');
btn_next_step.addEventListener('click', function () {
    var activeIndex = 0
    step_items.forEach((step_item, index) => {
        if (step_item.classList.contains('active')) {
            step_items.item(index).remove('active');
            activeIndex = index + 1;
        }
    })
    if (activeIndex < step_items.length) {
        console.log("active index: " + activeIndex)

    } else {
        activeIndex = 0;
    }
    step_items.item(activeIndex).classList.add('active');
});
const signup_btn = $('.btn-sign-up');
const signin_btn = $('.btn-sign-in');
const account_modal = $('.modal.account-modal')
signup_btn.addEventListener('click', function () {
    account_modal.classList.toggle('show');
});