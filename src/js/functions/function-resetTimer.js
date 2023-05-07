import { timerElem } from '../timerElements';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export function resetTimer() {
  Confirm.show('Сообщение об ошибке!', 'Выберите дату в будущем', 'OK', {
    width: '320px',
    borderRadius: '8px',
  });

  timerElem.btnStart.disabled = true;
  timerElem.daysEl.textContent = '00';
  timerElem.hoursEl.textContent = '00';
  timerElem.minutesEl.textContent = '00';
  timerElem.secondsEl.textContent = '00';
}
