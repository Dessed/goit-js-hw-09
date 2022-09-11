import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = document.querySelector('.form');
console.log(refs);

refs.addEventListener('submit', dataReceivedForm);

function createPromise (position, delay) {
  return new Promise((resolve, reject) => {
      
    setTimeout( () => {
      const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
            resolve({ position, delay })
        } else {
            reject({ position, delay })
        }
    }, delay)
  })
}

function dataReceivedForm (e) {
    e.preventDefault();
    let values = {};

    Array.from(refs.elements).forEach(e => {
      values [e.name] = e.value;
    });

    let delay = +values.delay;
    let step = +values.step;

    for (let i = 0; i < +values.amount; i++) {
      createPromise (i +1, delay + step * i)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        });
    }
  }











































