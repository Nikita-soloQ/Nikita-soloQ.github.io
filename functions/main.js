
document.addEventListener('DOMContentLoaded', function () {
    let myForm = document.getElementById('form689195146');
    let newForm = document.querySelector('.newForm');
    let button1 = document.querySelector('.t-submit');
    let button2 = document.querySelector('.mysubmit');
    let name1 = document.querySelector('#nm-1531306243545');
    let radio1 = document.querySelectorAll('.t-radio');
    let check1 = document.querySelectorAll('.t-checkbox');
    myForm.action = 'mail.php'
    button1.addEventListener("click", () => {
let arr1 = [];
        radio1.forEach(function (el) {
            if (el.checked) {
                arr1.push('')
                let checkbox2 = document.createElement('input');
                checkbox2.setAttribute('type', 'checkbox');
                checkbox2.setAttribute('checked', '');
                checkbox2.setAttribute('value', '');
                for (let i = 0; i < arr1.length; i++) {
                    checkbox2.setAttribute('name', `Ответ${i}`);
                }
                checkbox2.value = el.value;
                newForm.append(checkbox2)

            }
        })
        let arr2 = [];
        check1.forEach(function (el) {
            if (el.checked) {
                arr2.push('');
                let checkbox1 = document.createElement('input');
                checkbox1.setAttribute('type', 'checkbox');
                checkbox1.setAttribute('value', '');
                checkbox1.setAttribute('checked', '');
                for (let i = 0; i < arr2.length; i++) {
                    checkbox1.setAttribute('name', `Алкоголь${i}`);            
                }
                checkbox1.value = el.value;
                newForm.append(checkbox1)

            }
        })
        let name2 = document.createElement('input');
        name2.setAttribute('type', 'text');
        name2.setAttribute('name', 'Имя');
        name2.setAttribute('value', '');
        name2.value = name1.value;
        newForm.prepend(name2);
        newForm.submit();
    });

})


const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: 25,
    speed: 1500,
    autoplay: {
        delay: 1000,
    },
    // breakpoints: {
    //     320: { slidesPerView: 1, spaceBetween: 25},
    //     620: { slidesPerView: 1, spaceBetween: 25 },
    //     980: { slidesPerView: 1, slidesPerGroup: 1 },
    //     1400: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 25},
    //   },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});