import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import getTimeFunction from './functions/getTimeFunction';
import { timerElem } from './timerElements';

let defaultDate = 0;
let dateUser = 0;
let objData = {};

timerElem.btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    defaultDate = options.defaultDate.getTime();
    dateUser = selectedDates[0].getTime();
    if (dateUser < defaultDate) {
      alert('Please choose a date in the future');
      timerElem.btnStart.disabled = true;
      timerElem.daysEl.textContent = '00';
      timerElem.hoursEl.textContent = '00';
      timerElem.minutesEl.textContent = '00';
      timerElem.secondsEl.textContent = '00';
      return;
    }
    timerElem.btnStart.disabled = false;
    objData = getTimeFunction(dateUser - defaultDate);
    changeValuesOnTimer(objData);
  },
};

flatpickr('#datetime-picker', options);

timerElem.btnStart.addEventListener('click', onClickStartTimer);

function onClickStartTimer(e) {
  console.log('Кнопка старт работает');
}

function changeValuesOnTimer(objData) {
  timerElem.daysEl.textContent = objData.days;
  timerElem.hoursEl.textContent = objData.hours;
  timerElem.minutesEl.textContent = objData.minutes;
  timerElem.secondsEl.textContent = objData.seconds;
}
