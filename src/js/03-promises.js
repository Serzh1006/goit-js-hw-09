import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promiseObj = {};
      const shouldResolve = Math.random() > 0.3;
      promiseObj.position = position;
      promiseObj.delay = delay;
      if (shouldResolve) {
        resolve(promiseObj);
      } else {
        reject(promiseObj);
      }
    }, delay);
  });
}

const fomrEl = document.querySelector('.form');
const objData = {};

fomrEl.addEventListener('submit', onClickGetData, { once: true });

function onClickGetData(e) {
  e.preventDefault();
  const formData = new FormData(fomrEl);
  formData.forEach((value, name) => {
    objData[name] = Number(value);
  });

  for (let i = 1; i <= objData.amount; i += 1) {
    createPromise(i, objData.delay)
      .then(({ position, delay }) =>
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      );
    objData.delay += objData.step;
  }
}
