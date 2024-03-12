const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnStepItems = $$('.btn-step-item');
const stepContentItems = $$('.step-content__item')


btnStepItems.forEach((btn_step, index) => {
    const step_item = stepContentItems[index];
    btn_step.addEventListener('click', function () {
        $('.btn-step-item.active').classList.remove('active');
        $('.step-content__item.active').classList.remove('active');


        this.classList.add('active');
        step_item.classList.add('active')
    })
})

// const btn_next_step = $('.btn-next-step');
// btn_next_step.addEventListener('click', function () {
//     var activeIndex = 0
//     stepContentItems.forEach((step_item, index) => {
//         if (step_item.classList.contains('active')) {
//             stepContentItems.item(index).remove('active');
//             activeIndex = index + 1;
//             if (activeIndex === stepContentItems.length - 1) {
//                 btn_next_step.classList.add('hidden')
//             }
//             console.log("length: " + stepContentItems.length)
//         }
//     })
//     stepContentItems.item(activeIndex).classList.add('active');
// });


const btnNextStep = $('.btn-next-step');
const btnPrevStep = $('.btn-prev-step');

let currentIndex = 0;

function updateButtons() {
    if (currentIndex === 0) {
        btnPrevStep.classList.add('disabled')
    } else {
        btnPrevStep.classList.remove('disabled')
    }

    if (currentIndex === stepContentItems.length - 1) {
        btnNextStep.classList.add('disabled');
    } else {
        btnNextStep.classList.remove('disabled');
    }
}

function setActiveStep(index) {
    stepContentItems.forEach((stepContentItem, i) => {
        if (i === index) {
            stepContentItem.classList.add('active');
        } else {
            stepContentItem.classList.remove('active');
        }
    })
}

btnNextStep.addEventListener('click', function () {
    if (currentIndex < stepContentItems.length - 1) {
        currentIndex++;
        setActiveStep(currentIndex);
        updateButtons();
    }
});

btnPrevStep.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        setActiveStep(currentIndex);
        updateButtons();
    }
})

updateButtons();

// Upload image
function handleFileSelect(e) {
    const files = e.target.files;
    const uploadProgress = document.getElementById('upload-progress');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const uploadItem = document.createElement('div');
        uploadItem.classList.add('upload-progress-item', 'sm:hidden');

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        const fileInfo = document.createElement('div');
        fileInfo.classList.add('file-info');

        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name;

        const progressRate = document.createElement('div');
        progressRate.classList.add('progress-rate');

        const deleteButton = document.createElement('img');
        deleteButton.src = './assets/images/close-icon.svg';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            uploadItem.remove();
        });

        uploadItem.appendChild(progressBar);
        uploadItem.appendChild(fileInfo);
        uploadProgress.appendChild(uploadItem);
        fileInfo.appendChild(fileName);
        fileInfo.appendChild(progressRate);
        fileInfo.appendChild(deleteButton);

        // Simulate upload process (can be replaced with actual upload code)
        let progress = 0;
        const interval = setInterval(function () {
            progress += Math.random() * 10; // Random progress increment
            progressBar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                fileName.textContent = file.name;
                progressRate.textContent = '100%';
            } else {
                fileName.textContent = file.name;
                progressRate.textContent = Math.round(progress) + '%';
            }
        }, 100); // Simulate upload process every 500 milliseconds
    }
}

const signup_btn = $('.btn-sign-up');
const signin_btn = $('.btn-sign-in');
const account_modal = $('.modal.account-modal')
signup_btn.addEventListener('click', function () {
    account_modal.classList.toggle('show');
});