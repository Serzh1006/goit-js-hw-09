import { timerElem } from '../timerElements';

export function resetTimer() {
  alert('Please choose a date in the future');
  timerElem.btnStart.disabled = true;
  timerElem.daysEl.textContent = '00';
  timerElem.hoursEl.textContent = '00';
  timerElem.minutesEl.textContent = '00';
  timerElem.secondsEl.textContent = '00';
}
