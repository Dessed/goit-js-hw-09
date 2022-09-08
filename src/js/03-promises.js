import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = document.querySelector('.form');


const values = {};


function dataReceivedForm (e) {
  e.preventDefault();

    Array.from(refs).forEach(e => {
      if (e.tagName !== "BUTTON") {
      values [e.name] = e.value;
      }
  });

  createPromise();

};


refs.addEventListener('submit', dataReceivedForm);

function createPromise(position, delay) {
  let amount = values.amount;
  delay = values.delay;
  position = 0;
  let count = 0;
  let step = values.step;

  return new Promise((resolve, reject) => {
  
    let timeGeneratorPromises = setInterval( () => {
      const shouldResolve = Math.random() > 0.3;
      position ++;
      count++;
      if (shouldResolve) {
        resolve (Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject (Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
      if(count == amount){
        clearInterval(timeGeneratorPromises);
      }
    }, delay)
  });
 };

 




// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     position += 1;
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });