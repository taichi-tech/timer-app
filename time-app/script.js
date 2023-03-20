const hambergerIcon = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
const content = document.querySelector(".content");
let navClick = false;

hambergerIcon.addEventListener("click", () => {
    navClick = !navClick;
    console.log(navClick);
    if (navClick === true) {
        hambergerIcon.className += " show";
        nav.className += " show";
        content.className += " show";
    } else {
        hambergerIcon.className = "nav-toggle";
        nav.className = "nav";
        content.className = "content";
    }
    
});

//テーマチェンジトグル
themeToggle.addEventListener("checked", ()=>{
    
})


const realTime = setInterval(() => {
    const showDay = document.querySelector(".day-info");
    const showHour = document.querySelector(".hour-info");
    const weekChars = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

    const now = new Date();
    timeInfo = {
        wDay: now.getDay(),
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
    };
    wChars = weekChars[timeInfo.wDay];
    hourMinSec = timeInfo.hour + "時" + timeInfo.min + "分" + timeInfo.sec + "秒";
    yearMonthDate = timeInfo.year + "年" + timeInfo.month + "月" + timeInfo.date + "日" + " (" + wChars + ")";
    showHour.innerHTML = hourMinSec;
    showDay.innerHTML = yearMonthDate;

    const hourEl = document.querySelector(".hour");
    const minuteEl = document.querySelector(".min");
    const secondEl = document.querySelector(".sec");

    const hoursForClock = timeInfo.hour >= 13 ? timeInfo.hour % 12 : timeInfo.hour;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale (hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(timeInfo.min, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(timeInfo.sec, 0, 59, 0, 360)}deg)`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//swiperJsの設定とオプション
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
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