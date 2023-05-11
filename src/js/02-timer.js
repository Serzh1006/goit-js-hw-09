import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import getTimeFunction from './functions/getTimeFunction';
import { timerElem } from './timerElements';
import { changeValuesOnTimer } from './functions/updateTimerFunction';
import { resetTimer } from './functions/function-resetTimer';

let defaultDate = 0;
let dateUser = 0;
let objData = {};
let dateNow = 0;

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
      resetTimer();
      return;
    }
    timerElem.btnStart.disabled = false;
    objData = getTimeFunction(dateUser - defaultDate);
  },
};

flatpickr('#datetime-picker', options);

class Timer {
  constructor() {
    this.intervalid = null;
  }

  start() {
    timerElem.btnStart.disabled = true;
    this.intervalid = setInterval(() => {
      dateNow = Date.now();
      objData = getTimeFunction(dateUser - dateNow);
      changeValuesOnTimer(objData);
      const deltaTime = dateUser - dateNow - 1000;
      if (deltaTime === 0 || deltaTime < 0) {
        clearInterval(this.intervalid);
      }
    }, 1000);
  }
}

const timer = new Timer();

timerElem.btnStart.addEventListener('click', () => {
  timer.start();
});
