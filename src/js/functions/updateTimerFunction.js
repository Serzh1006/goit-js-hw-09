import { timerElem } from '../timerElements';

export function changeValuesOnTimer(objData) {
  timerElem.daysEl.textContent = objData.days;
  timerElem.hoursEl.textContent = objData.hours;
  timerElem.minutesEl.textContent = objData.minutes;
  timerElem.secondsEl.textContent = objData.seconds;
}
