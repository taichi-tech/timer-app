const hambergerIcon = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
let navClick = false;

hambergerIcon.addEventListener("click", () => {
    navClick = !navClick;
    console.log(navClick);
    if (navClick === true) {
        hambergerIcon.className += " show";
        nav.className += " show";
    } else {
        hambergerIcon.className = "nav-toggle";
        nav.className = "nav";
    }
});

const showDay = document.querySelector(".day-info");
const showHour = document.querySelector(".hour-info");
const weekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];

const realTime = setInterval(() => {
    const now = new Date();
    const timeInfo = {
        wDay: now.getDay(),
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
    };
    wChars =  weekChars[timeInfo.wDay];
    hourMinSec = timeInfo.hour + '時' + timeInfo.min + '分' + timeInfo.sec + '秒';
    yearMonthDate = timeInfo.year + "年" + timeInfo.month + "月" + timeInfo.date + "日" + " (" + wChars + ')';
    showHour.innerHTML = hourMinSec;
    showDay.innerHTML = yearMonthDate;
})


//swiperJsの設定とオプション
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: "slide",
    followFinger: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//アナログタイマー作成
//各要素の取得
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.min');
const secondEl = document.querySelector('.sec');

const hoursForClock = hour

//針の動き
hourEl.style.transform = `translate(-50%, 100%) rotate(${})`

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min;
}
