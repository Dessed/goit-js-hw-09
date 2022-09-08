const flatpickr = require("flatpickr");
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector('input[type="text"]'),
    timer: document.querySelector('.timer'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    startBtn: document.querySelector('button[data-start]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
    if (selectedDates[0] > new Date) {
      refs.startBtn.disabled = false;
    } else {
    refs.startBtn.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

const fp = flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', timer);

function timer () {
    let times = setInterval(() => {
      let differenceTime = Date.parse(refs.input.value) - Date.now();
      const time = convertMs(differenceTime);
      textContentsTimer(time);

      if (differenceTime < 1000) {
        clearInterval(times);
      }
    }, 1000);
  }

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function textContentsTimer ({days, hours, minutes, seconds}) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

