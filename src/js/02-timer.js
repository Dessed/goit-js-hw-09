const flatpickr = require("flatpickr");
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    input: document.querySelector('input[type="text"]'),
    timer: document.querySelector('.timer'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    startBtn: document.querySelector('button[data-start]'),
};

let startTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
    startTime = Date.parse(selectedDates[0]);
  },
};

const fp = flatpickr(refs.input, options);

const timer = {
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const differenceTime = startTime - currentTime;
      const {days, hours, minutes, seconds} = convertMs(differenceTime);
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
}

refs.startBtn.addEventListener('click', timer.start);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


