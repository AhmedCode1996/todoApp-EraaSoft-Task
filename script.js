import selectElement from './utils/selectElement.js';
import taskMarkup from './utils/taskMarkup.js';
import summaryMarkup from './utils/summaryTasks.js';

const mainInput = selectElement('.main-input');
let inputValue = mainInput.value;

const tasksContainer = selectElement('.tasks-container');
tasksContainer.style.padding = 0;

const tasksSummary = selectElement('.tasks-summary');

mainInput.addEventListener('keydown', (event) => {
  inputValue = event.target.value;
  if (event.key === 'Enter' && inputValue) {
    tasksSummary.innerHTML = '';
    tasksContainer.insertAdjacentHTML('beforeend', taskMarkup(inputValue));
    tasksSummary.style.padding = '1rem';
    tasksContainer.style.padding = '1rem';
    tasksSummary.insertAdjacentHTML(
      'beforeend',
      summaryMarkup(tasksContainer.children.length, 0)
    );
    mainInput.value = '';
    const taskNumber = selectElement('.task-number');
    const closeBtn = document.querySelectorAll('.close-btn');
    closeBtn.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        taskNumber.textContent = tasksContainer.children.length;
      });
    });
  }
});
