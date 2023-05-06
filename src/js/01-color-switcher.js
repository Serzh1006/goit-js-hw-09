import getRandomColor from './functions/function-randomColor';
import { btnFunction } from './btnColor';

let timerId = '';
btnFunction.stop.disabled = true;

btnFunction.start.addEventListener('click', onClickChangeColor);
btnFunction.stop.addEventListener('click', onClickStopFunction);

function onClickChangeColor(e) {
  e.target.disabled = true;
  btnFunction.stop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, btnFunction.DELAY);
}

function onClickStopFunction(e) {
  e.target.disabled = true;
  btnFunction.start.disabled = false;
  clearInterval(timerId);
}
