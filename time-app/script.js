const hambergerIcon = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
let navClick = false;

hambergerIcon.addEventListener('click', () => {
    navClick = !navClick;
    console.log(navClick);
    if (navClick === true){
        hambergerIcon.className += ' show';
        nav.className += ' show';
    }
    else {
        hambergerIcon.className = 'nav-toggle';
        nav.className = 'nav';
    }
});

const showTime = document.querySelector('.year-month-date');
window.addEventListener('load', ()=>{
    const now = new Date();
    const timeInfo = {
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds()
    }
    yearMonthDate = timeInfo.year + '年' + timeInfo.month + '月' + timeInfo.date + '日';
    showTime.innerHTML = yearMonthDate;
});

//swiperJsの設定とオプション

class Swiper{};
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-perv',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    }
});
